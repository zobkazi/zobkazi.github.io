"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import FoolishVampire from "@/components/common/card/FoolishVampire";
import ContactForm, { FormData } from "./ContactForm";

interface ContactSectionProps {
  servicesItems: string[];
}

const ContactSection: React.FC<ContactSectionProps> = ({ servicesItems }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phoneNumber: "",
    services: [],
    message: "",
  });

  const handleFormSubmit = async (formData: FormData) => {
    console.log("Form Data Submitted:", formData);
    try {
      const response = await fetch("", {
        // Adjust the endpoint to your backend API
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Your message has been sent successfully.");
        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          services: [],
          message: "",
        });
      } else {
        toast.error("An error occurred. Please try again later.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <main className="m-9 flex overflow-hidden flex-col lg:flex-row dark:text-white shadow-lg rounded-2xl justify-center">
      <motion.div
        className="flex-1 lg:flex lg:justify-center"
        whileHover={{ scale: 1.02 }}
      >
        <div className="max-w-lg  flex-1 mx-auto px-4 text-black dark:text-white">
          <FoolishVampire />
          <div className="mt-8">
            <h1 className="text-3xl font-bold mb-4 ">Get in touch</h1>
            <p className="text-gray-700 dark:text-white mb-8">
              Whether you have a question or just want to say hi, I will try my
              best to get back to you!
            </p>
          </div>
        </div>
        <div className="max-w-lg  flex-1 mx-auto px-4 text-black dark:text-white">
          <ContactForm
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleFormSubmit}
            servicesItems={servicesItems}
          />
        </div>
      </motion.div>
    </main>
  );
};

export default ContactSection;
