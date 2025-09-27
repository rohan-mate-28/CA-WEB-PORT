import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Taxation",
    description: "Expert guidance on direct & indirect taxes for businesses.",
    path: "/services/taxation",
  },
  {
    title: "Audit & Assurance",
    description: "Reliable audit services ensuring compliance & trust.",
    path: "/services/audit",
  },
  {
    title: "Accounting",
    description: "Streamlined bookkeeping and financial management solutions.",
    path: "/services/accounting",
  },
  {
    title: "Business Advisory",
    description: "Strategic advice to grow and scale your business sustainably.",
    path: "/services/advisory",
  },
];

const ServicesOverview = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-lg text-gray-600 mb-10">
          Explore our key services designed to help your business grow.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => (
            <Card
              key={idx}
              className="hover:shadow-xl transition rounded-2xl p-4"
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-blue-600">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  to={service.path}
                  className="text-blue-500 hover:underline font-medium"
                >
                  Learn More →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
