// src/components/ContactForm.tsx
"use client";

import Image from 'next/image';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-[1170px] h-[603px] mx-auto my-10 flex">
      {/* Left Section - Form */}
      <div className="flex-none w-[391px] p-8 bg-white-100">
        <h1 className="text-4xl mb-4">Contact Us</h1>
        <form className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full h-[46px] px-3 border border-gray-300 rounded bg-gray-200"
            onChange={handleChange}
            value={formData.name}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full h-[46px] px-3 border border-gray-300 rounded bg-gray-200"
            onChange={handleChange}
            value={formData.phone}
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            className="w-full h-[46px] px-3 border border-gray-300 rounded bg-gray-200"
            onChange={handleChange}
            value={formData.email}
          />
          <input
            type="text"
            name="interest"
            placeholder="Interested In"
            className="w-full h-[46px] px-3 border border-gray-300 rounded bg-gray-200"
            onChange={handleChange}
            value={formData.interest}
          />
          <textarea
            name="message"
            placeholder="Message"
            className="w-full h-[147px] px-3 py-2 border border-gray-300 rounded bg-gray-200"
            onChange={handleChange}
            value={formData.message}
          />
          <button
            type="submit"
            className="mt-4 w-[221px] h-[71px] bg-black text-white flex items-center justify-center rounded"
          >
            SEND EMAIL <span className="ml-2">→</span>
          </button>
        </form>
      </div>

      {/* Right Section - Image */}
      <div className="flex-1 flex items-center justify-center">
        <Image
          src="/images/image12.png" // Ensure this image is in your public folder
          alt="Contact Us Image"
          width={749}
          height={369}
          className="object-cover"
        />
      </div>
    </div>
  );
}
