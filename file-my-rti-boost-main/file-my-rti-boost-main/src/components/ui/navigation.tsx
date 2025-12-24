import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, FileText, Users, Shield, Phone, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import LanguageSwitcher from "@/components/ui/language-switcher";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Services", href: "/services", icon: FileText },
    { name: "States", href: "/states", icon: Globe },
    { name: "Anonymous Filing", href: "/anonymous", icon: Shield },
    { name: "Referral Program", href: "/referral", icon: Users },
    { name: "Contact", href: "/contact", icon: Phone },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground font-bold text-lg">
            RTI
          </div>
          <span className="font-bold text-xl bg-gradient-primary bg-clip-text text-transparent">
            FileMyRTI
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              asChild
              className="text-muted-foreground hover:text-foreground hover:bg-accent/50"
            >
              <Link to={item.href} className="flex items-center space-x-2">
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            </Button>
          ))}
          <LanguageSwitcher />
          <Button variant="default" asChild className="ml-4">
            <Link to="/apply">Apply Now</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col space-y-4 mt-8">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  asChild
                  className="justify-start text-left"
                  onClick={() => setIsOpen(false)}
                >
                  <Link to={item.href} className="flex items-center space-x-3">
                    <item.icon className="h-5 w-5" />
                    <span className="text-base">{item.name}</span>
                  </Link>
                </Button>
              ))}
              <Button variant="default" asChild className="mt-4" onClick={() => setIsOpen(false)}>
                <Link to="/apply">Apply Now</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navigation;