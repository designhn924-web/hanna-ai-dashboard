"use client";

import { useId } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";
import FormField from "@/components/ui/FormField";

type RHFInputFieldProps = {
  label: string;
  registration: UseFormRegisterReturn;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
};

export default function RHFInputField({
  label,
  registration,
  placeholder,
  disabled,
  required,
}: RHFInputFieldProps) {
  const generatedId = useId();

  return (
    <FormField
      label={label}
      required={required}
    >
      <input
        id={generatedId}
        {...registration}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        className="rounded-lg border border-stone-300 bg-white px-4 py-2 text-stone-800 outline-none transition-colors focus:border-amber-400"
      />
    </FormField>
  );
}