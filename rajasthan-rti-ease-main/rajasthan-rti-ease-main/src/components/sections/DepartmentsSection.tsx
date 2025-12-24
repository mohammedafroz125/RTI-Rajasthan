import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const departmentCategories = [
  {
    title: "RTI Rajasthan Police & Security",
    departments: [
      "RTI Rajasthan Home Department",
      "RTI Rajasthan Police Department",
      "RTI Rajasthan Fire Services Department",
      "RTI Rajasthan Prisons Department",
      "RTI Rajasthan Law Department",
      "RTI Rajasthan Disaster Management Department",
    ],
  },
  {
    title: "RTI Rajasthan Finance & Revenue",
    departments: [
      "RTI Rajasthan Finance Department",
      "RTI Rajasthan Revenue Department",
      "RTI Rajasthan Commercial Taxes Department",
      "RTI Rajasthan Registration & Stamps Department",
      "RTI Rajasthan Planning Department",
      "RTI Rajasthan Treasuries Department",
    ],
  },
  {
    title: "RTI Rajasthan Transport & Infrastructure",
    departments: [
      "RTI Rajasthan Transport Department",
      "RTI Rajasthan Public Works Department (PWD)",
      "RTI Rajasthan Urban Development Department",
      "RTI Rajasthan Municipal Administration Department",
      "RTI Rajasthan Rural Development & Panchayati Raj Department",
      "RTI Rajasthan Infrastructure Development Department",
    ],
  },
  {
    title: "RTI Rajasthan Education & Health",
    departments: [
      "RTI Rajasthan Department of Primary & Secondary Education",
      "RTI Rajasthan Higher Education Department",
      "RTI Rajasthan Technical Education Department",
      "RTI Rajasthan Health & Family Welfare Department",
      "RTI Rajasthan Medical Education Department",
    ],
  },
  {
    title: "RTI Rajasthan Agriculture & Rural Development",
    departments: [
      "RTI Rajasthan Agriculture Department",
      "RTI Rajasthan Horticulture Department",
      "RTI Rajasthan Animal Husbandry & Veterinary Services Department",
      "RTI Rajasthan Co-operation Department",
      "RTI Rajasthan Rural Development & Panchayat Raj Department",
    ],
  },
  {
    title: "RTI Rajasthan Social Welfare",
    departments: [
      "RTI Rajasthan Social Welfare Department",
      "RTI Rajasthan Scheduled Castes Development Department",
      "RTI Rajasthan Scheduled Tribes Welfare Department",
      "RTI Rajasthan Women & Child Development Department",
      "RTI Rajasthan Backward Classes Welfare Department",
      "RTI Rajasthan Minority Welfare Department",
    ],
  },
  {
    title: "RTI Rajasthan Commerce & Industry",
    departments: [
      "RTI Rajasthan Industries & Commerce Department",
      "RTI Rajasthan Labour Department",
      "RTI Rajasthan Food & Civil Supplies Department",
      "RTI Rajasthan Handlooms & Textiles Department",
      "RTI Rajasthan Mines & Geology Department",
    ],
  },
  {
    title: "RTI Rajasthan Environment & Resources",
    departments: [
      "RTI Rajasthan Environment Department",
      "RTI Rajasthan Forest Department",
      "RTI Rajasthan Water Resources Department",
      "RTI Rajasthan Energy Department",
      "RTI Rajasthan Irrigation & CAD Department",
    ],
  },
  {
    title: "RTI Rajasthan Information & Technology",
    departments: [
      "RTI Rajasthan Information Technology Department",
      "RTI Rajasthan Information & Public Relations Department",
      "RTI Rajasthan e-Governance Department",
    ],
  },
  {
    title: "RTI Rajasthan Culture & Tourism",
    departments: [
      "RTI Rajasthan Tourism Department",
      "RTI Rajasthan Art & Culture Department",
      "RTI Rajasthan Archaeology Department",
      "RTI Rajasthan Religious & Charitable Endowments Department",
    ],
  },
];

const DepartmentsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
            RTI TEMPLATES FOR RAJASTHAN DEPARTMENTS
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card rounded-lg border border-border shadow-card p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {departmentCategories.map((category, index) => (
              <div key={category.title} className="space-y-3">
                <h3 className="font-semibold text-primary text-sm leading-tight">
                  {category.title}
                </h3>
                <ul className="space-y-1.5">
                  {category.departments.map((dept) => (
                    <li key={dept}>
                      <a
                        href="#"
                        className="text-xs text-muted-foreground hover:text-primary hover:underline transition-colors cursor-pointer block leading-relaxed"
                      >
                        {dept}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DepartmentsSection;