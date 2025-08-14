"use client";

import React, { useState } from "react";
import { Input } from "@/components/input/Input";
import { Button } from "@/components/button/Button";
import { FormData } from "./UserForm.types";

export const UserForm = (): React.JSX.Element => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    salary: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you can call your backend API to save the data
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow-md space-y-4"
    >
      <h2 className="text-xl font-semibold text-gray-900">
        Enter User Details
      </h2>

      {/* Name */}
      <div>
        <label className="block text-gray-700 mb-1" htmlFor="name">
          Name
        </label>
        <Input
          id="name"
          name="name"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleChange}
          variant="default"
          inputSize="default"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-gray-700 mb-1" htmlFor="email">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="john@example.com"
          value={formData.email}
          onChange={handleChange}
          variant="default"
          inputSize="default"
        />
      </div>

      {/* Salary */}
      <div>
        <label className="block text-gray-700 mb-1" htmlFor="salary">
          Salary
        </label>
        <Input
          id="salary"
          name="salary"
          type="number"
          placeholder="5000"
          value={formData.salary}
          onChange={handleChange}
          variant="default"
          inputSize="default"
        />
      </div>

      {/* Submit Button */}
      <Button type="submit" variant="default" size="lg" className="w-full">
        Submit
      </Button>
    </form>
  );
};
