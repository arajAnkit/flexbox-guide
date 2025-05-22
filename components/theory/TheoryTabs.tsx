"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "introduction", label: "Introduction" },
  { id: "container-properties", label: "Container Properties" },
  { id: "items-properties", label: "Item Properties" },
];

interface TheoryTabsProps {
  activeTab: string;
}

export default function TheoryTabs({ activeTab }: TheoryTabsProps) {
  return (
    <div className="border-b border-gray-200 mb-8">
      <div className="container mx-auto px-4 overflow-x-auto">
        <div className="flex space-x-1 min-w-max">
          {tabs.map((tab) => (
            <Link
              key={tab.id}
              href={`#${tab.id}`}
              className={cn(
                "px-4 py-3 text-sm font-medium whitespace-nowrap",
                "border-b-2 transition-colors",
                activeTab === tab.id
                  ? "border-[#00FFC5] text-gray-900"
                  : "border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300"
              )}
            >
              {tab.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
