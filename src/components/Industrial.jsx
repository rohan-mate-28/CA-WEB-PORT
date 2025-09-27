import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const sections = {
  Startup: {
    title: "Startup Support",
    description:
      "We guide startups with business registration, compliance, taxation, and financial advisory to help you focus on scaling your idea.",
    points: [
      "Company incorporation and legal setup",
      "GST & tax registration",
      "Accounting & bookkeeping for early stage",
      "Investor-ready financial reports",
    ],
  },
  SME: {
    title: "SME Solutions",
    description:
      "We empower Small & Medium Enterprises with sustainable financial structures, tax efficiency, and compliance management.",
    points: [
      "Payroll & HR compliance",
      "Customized tax planning",
      "End-to-end bookkeeping services",
      "Business process optimization",
    ],
  },
  Corporate: {
    title: "Corporate Advisory",
    description:
      "We help corporates streamline audits, taxation, and financial strategies for long-term growth and compliance.",
    points: [
      "Internal & statutory audits",
      "Mergers and acquisitions advisory",
      "Risk assessment & corporate governance",
      "Tax strategy and compliance",
    ],
  },
  NGOs: {
    title: "NGO Compliance & Advisory",
    description:
      "We support NGOs with compliance, funding, reporting, and audits to maximize their impact.",
    points: [
      "Registration & compliance with laws",
      "Foreign contribution (FCRA) advisory",
      "Donor reporting & transparency",
      "Accounting & annual audits",
    ],
  },
};

const Industrial = () => {
  const [active, setActive] = useState("Startup");

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Industrial Solutions</h2>
        <p className="text-lg text-gray-600 mb-8">
          Tailored financial & compliance services for Startups, SMEs, Corporates, and NGOs.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {Object.keys(sections).map((key) => (
            <Button
              key={key}
              variant={active === key ? "default" : "outline"}
              onClick={() => setActive(key)}
              className="px-6 py-2 rounded-xl text-lg"
            >
              {key}
            </Button>
          ))}
        </div>

        {/* Animated Section Content */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-8 text-left"
            >
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                {sections[active].title}
              </h3>
              <p className="text-gray-700 mb-6">{sections[active].description}</p>
              <ul className="space-y-3 text-gray-600 list-disc list-inside">
                {sections[active].points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Industrial;
