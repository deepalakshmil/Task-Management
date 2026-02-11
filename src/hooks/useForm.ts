//src/hooks/useForm.ts
import { useState } from "react";

export const useForm = <T extends object>(initialValues: T) => {
  const [values, setValues] = useState<T>(initialValues);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    // TypeScript-safe handling for checkboxes
    const fieldValue =
      type === "checkbox" && "checked" in e.target ? e.target.checked : value;
    // Ensures TypeScript knows checked exists before using it.
    setValues((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));
  };

  return { values, setValues, handleChange };
};
