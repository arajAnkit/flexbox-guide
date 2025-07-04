"use client";

import { Button } from "@/components/ui/button";

interface PropertyControlProps {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
  disabled?: boolean;
}

export function PropertyControl({
  label,
  value,
  options,
  onChange,
  disabled = false,
}: PropertyControlProps) {
  return (
    <div className="space-y-3">
      <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
        {label}
      </label>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <Button
            key={option}
            variant={value === option ? "default" : "outline"}
            size="sm"
            onClick={() => onChange(option)}
            disabled={disabled}
            className="transition-all duration-200"
          >
            {option}
          </Button>
        ))}
      </div>
    </div>
  );
}
