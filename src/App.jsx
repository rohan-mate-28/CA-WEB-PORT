import AboutUs from "./components/AboutUs";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Blog from "./components/small pages/Blog";
import Faq from "./components/Faq";
import Taxation from "./components/small pages/Taxation";
import Audit from "./components/small pages/Audit";
import Accounting from "./components/small pages/Accounting ";
import Advisory from "./components/small pages/Advisory";
import Industrial from "./components/Industrial";
import ServicesOverview from "./components/small pages/ServicesOverview";
import BookConsultation from "./components/small pages/BookConsultation";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Home page with all sections */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <AboutUs />
               <Industrial />
              <Testimonials />
              <Team />
              <Faq />
               <Contact />
            </>
          }
        />
         <Route path="/services/taxation" element={<Taxation />} />
          <Route path="/services" element={<ServicesOverview />} />
        <Route path="/services/audit" element={<Audit />} />
        <Route path="/contact" element={<BookConsultation />} />
        <Route path="/services/accounting" element={<Accounting/>} />
          <Route path="/services/advisory" element={<Advisory />} />
 
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </>
  );
}
