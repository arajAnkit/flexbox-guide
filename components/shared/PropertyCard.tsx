import type { ReactNode } from "react";

interface PropertyCardProps {
  title: string;
  description: string;
  defaultValue?: string;
  children?: ReactNode;
}

export default function PropertyCard({
  title,
  description,
  defaultValue,
  children,
}: PropertyCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      <div className="bg-gradient-to-r from-[#800080]/30 via-[#00FFC5]/30 to-[#008080]/30 px-4 py-3 border-b border-gray-200">
        <h3 className="font-semibold dark:text-white text-gray-900">{title}</h3>
      </div>
      <div className="p-4">
        <p className="text-gray-700 dark:text-gray-300 mb-3">{description}</p>
        {defaultValue && (
          <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-md mb-3">
            <p className="text-sm text-gray-900 dark:text-gray-200">
              <span className="font-medium">Default:</span> {defaultValue}
            </p>
          </div>
        )}
        {children && <div className="mt-4">{children}</div>}
      </div>
    </div>
  );
}
