"use client";

import Link from "next/link";
import { useState } from "react";

import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import PageHeader from "@/components/shared/PageHeader";

import IntroductionSection from "@/components/theory/IntroductionSection";
import ContainerPropertiesSection from "@/components/theory/ContainerPropertiesSection";
import ItemsPropertiesSection from "@/components/theory/ItemsPropertiesSection";

export default function TheoryPage() {
  const [activeTab, setActiveTab] = useState("introduction");
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pb-8 px-4">
      <PageHeader
        title="Flexbox Theory"
        description="Learn the core concepts and properties of CSS Flexbox layout."
      />
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-3 gap-8">
          {["introduction", "container-properties", "items-properties"].map(
            (tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className={cn(
                  "font-medium whitespace-nowrap",
                  "border-1 transition-colors",
                  activeTab === tab ? "border-[#00FFC5]" : ""
                )}
              >
                {tab === "introduction"
                  ? "Introduction to Flexbox"
                  : tab === "container-properties"
                  ? "Flexbox Container Properties"
                  : "Flexbox Items Properties"}
              </TabsTrigger>
            )
          )}
        </TabsList>

        <TabsContent
          value="introduction"
          className="px-4 py-3 dark:bg-gray-800 dark:text-white"
        >
          {activeTab === "introduction" && <IntroductionSection />}
        </TabsContent>
        <TabsContent
          value="container-properties"
          className="px-4 py-3 dark:bg-gray-800 dark:text-white"
        >
          {activeTab === "container-properties" && (
            <ContainerPropertiesSection />
          )}
        </TabsContent>
        <TabsContent
          value="items-properties"
          className="px-4 py-3 dark:bg-gray-800 dark:text-white"
        >
          {activeTab === "items-properties" && <ItemsPropertiesSection />}
        </TabsContent>
      </Tabs>

      <div className="mt-12 flex flex-col sm:flex-row gap-2 items-center justify-between">
        <Link href="/">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        <Link href="/axes">
          <Button>
            Next: Axes
            <ArrowRight className="ml-2 h-4 w-4 rotate-270" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
