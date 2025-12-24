import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Globe, Check } from "lucide-react";

declare global {
  interface Window {
    google: {
      translate: {
        TranslateElement: new (options: any, element: string | Element) => void;
      };
    };
    googleTranslateElementInit: () => void;
  }
}

const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [isInitialized, setIsInitialized] = useState(false);

  const languages = [
    { code: "en", name: "English", native: "English" },
    { code: "hi", name: "Hindi", native: "हिन्दी" },
    { code: "te", name: "Telugu", native: "తెలుగు" },
    { code: "ta", name: "Tamil", native: "தமிழ்" },
    { code: "bn", name: "Bengali", native: "বাংলা" },
    { code: "mr", name: "Marathi", native: "मराठी" },
    { code: "gu", name: "Gujarati", native: "ગુજરાતી" },
    { code: "kn", name: "Kannada", native: "ಕನ್ನಡ" },
    { code: "ml", name: "Malayalam", native: "മലയാളം" },
    { code: "or", name: "Odia", native: "ଓଡ଼ିଆ" }
  ];

  useEffect(() => {
    // Load Google Translate script
    if (!document.querySelector('script[src*="translate.google.com"]')) {
      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    }

    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: languages.map(lang => lang.code).join(','),
          layout: 0, // Simple layout
          autoDisplay: false,
          multilanguagePage: true
        },
        'google_translate_element'
      );
      setIsInitialized(true);
    };

    // Add comprehensive CSS to hide ALL Google Translate UI elements
    const style = document.createElement('style');
    style.textContent = `
      /* Hide the Google Translate widget completely */
      #google_translate_element { display: none !important; }
      .goog-te-banner-frame.skiptranslate { display: none !important; }
      .goog-te-gadget { display: none !important; }
      .goog-te-combo { display: none !important; }
      
      /* Hide Google Translate toolbar */
      .goog-te-banner-frame { display: none !important; }
      .goog-te-menu-frame { display: none !important; }
      
      /* Remove the top margin that Google Translate adds */
      body { top: 0px !important; }
      
      /* Hide any popup or notification */
      .goog-te-balloon-frame { display: none !important; }
      .goog-tooltip { display: none !important; }
      
      /* Hide progress indicator */
      .goog-te-spinner-pos { display: none !important; }
      
      /* Ensure page layout is not affected */
      html { margin-top: 0px !important; }
    `;
    document.head.appendChild(style);

    return () => {
      // Cleanup
      const scripts = document.querySelectorAll('script[src*="translate.google.com"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  const changeLanguage = (languageCode: string) => {
    if (!isInitialized) return;

    // Find the Google Translate select element and change its value
    const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (selectElement) {
      selectElement.value = languageCode;
      // Trigger the change event to start translation
      const changeEvent = new Event('change', { bubbles: true });
      selectElement.dispatchEvent(changeEvent);
      setCurrentLanguage(languageCode);
      
      // Ensure no Google UI appears during translation
      setTimeout(() => {
        // Hide any Google Translate elements that might appear during translation
        const googleElements = document.querySelectorAll('.goog-te-banner-frame, .goog-te-balloon-frame, .goog-te-menu-frame');
        googleElements.forEach(element => {
          (element as HTMLElement).style.display = 'none';
        });
      }, 100);
    }
  };

  return (
    <>
      {/* Hidden Google Translate Element */}
      <div id="google_translate_element" style={{ display: 'none' }}></div>
      
      {/* Custom Language Switcher */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="gap-2">
            <Globe className="h-4 w-4" />
            <span className="hidden sm:inline">
              {languages.find(lang => lang.code === currentLanguage)?.native || "English"}
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          {languages.map((language) => (
            <DropdownMenuItem
              key={language.code}
              onClick={() => changeLanguage(language.code)}
              className="flex items-center justify-between cursor-pointer"
            >
              <span>{language.native}</span>
              {currentLanguage === language.code && (
                <Check className="h-4 w-4 text-primary" />
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default LanguageSwitcher;