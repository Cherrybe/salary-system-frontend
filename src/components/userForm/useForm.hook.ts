import React, { useState } from "react";
import { FormData } from "./UserForm.types";
import { toast } from "sonner";
import { sanitizeHTML } from "@/lib/utils";

export const useForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    salary_local: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // sanitize form data
      const payload = {
        name: sanitizeHTML(formData.name),
        email: sanitizeHTML(formData.email),
        salary_local: Math.max(0, Number(formData.salary_local)),
      };

      const endurl = process.env.NEXT_PUBLIC_BACKEND_URL;

      const res = await fetch(`${endurl}/api/salaries`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(
          `Thank you ${formData.name}! ${data.message ?? 'Salary submitted successfully'} 😊`,
          {
            position: "top-right",
            duration: 5000,
          }
        );
        setFormData({ name: "", email: "", salary_local: "" });
      } else {
        toast.error("Failed to submit. Please try again 🫠", {
          position: "top-right",
          duration: 5000,
        });
      }
    } catch (error) {
      toast.error(`${error ?? "Network error. Please try again later"} 😢`, {
        position: "top-right",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return { formData, handleChange, handleSubmit, isSubmitting };
};
