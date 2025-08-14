"use client";

import React from "react";
import { Input } from "@/components/input/Input";
import { Button } from "@/components/button/Button";
import { useForm } from "./useForm.hook";

export const UserForm = (): React.JSX.Element => {
  const { formData, handleChange, handleSubmit, isSubmitting } = useForm();

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
          name="salary_local"
          type="number"
          placeholder="5000"
          value={formData.salary_local}
          onChange={handleChange}
          variant="default"
          inputSize="default"
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="default"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        Submit
      </Button>
    </form>
  );
};
