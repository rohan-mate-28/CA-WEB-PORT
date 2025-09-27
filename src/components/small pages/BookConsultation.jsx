import  { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const BookConsultationModal = () => {
  const [form, setForm] = useState({ name: "", phone: "", service: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      if (!/^\d*$/.test(value)) return; // digits only
      if (value.length > 10) return; // max 10 digits
    }
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.phone.length === 10 && form.service) {
      console.log("Consultation request:", form);
      setSuccess(true);
      setForm({ name: "", phone: "", service: "" });
      setTimeout(() => setSuccess(false), 3000); // hide message after 3s
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button  className="bg-blue-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:bg-blue-800 transition text-lg">Book Consultation</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl text-blue-600 text-center">
            Book a Consultation
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <Input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="phone"
            placeholder="Enter 10-digit mobile number"
            value={form.phone}
            onChange={handleChange}
            required
            maxLength={10}
          />

          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Service</option>
            <option value="Audit & Assurance">Audit & Assurance</option>
            <option value="Accounting">Accounting</option>
            <option value="Taxation">Taxation</option>
            <option value="Business Advisory">Business Advisory</option>
          </select>

          <Button type="submit" className="w-full">Submit</Button>
        </form>

        {success && (
          <p className="text-green-600 text-center mt-3">
            ✅ Your consultation request has been submitted!
          </p>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BookConsultationModal;
