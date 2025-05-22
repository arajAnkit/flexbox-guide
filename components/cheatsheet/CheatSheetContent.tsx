"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Printer, Download } from "lucide-react"
import ContainerProperties from "./ContainerProperties"
import ItemProperties from "./ItemProperties"
import FlexboxExamples from "./FlexboxExamples"

export default function CheatSheetContent() {
  const [activeTab, setActiveTab] = useState("container")

  const handlePrint = () => {
    window.print()
  }

  const handleDownloadPDF = () => {
    // In a real app, you would generate a PDF here
    alert("This would download a PDF version of the cheat sheet in a real app.")
  }

  return (
    <div className="container mx-auto px-4 py-8 print:py-0">
      <div className="flex justify-between items-center mb-6 print:hidden">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Flexbox Properties Reference</h2>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={handlePrint} className="flex items-center gap-2">
            <Printer size={16} />
            <span className="hidden sm:inline">Print</span>
          </Button>
          <Button variant="outline" onClick={handleDownloadPDF} className="flex items-center gap-2">
            <Download size={16} />
            <span className="hidden sm:inline">Download PDF</span>
          </Button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden print:shadow-none print:border-none">
        <Tabs defaultValue="container" value={activeTab} onValueChange={setActiveTab} className="print:block">
          <TabsList className="w-full border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-0 h-auto print:hidden">
            <TabsTrigger
              value="container"
              className="flex-1 py-3 rounded-none data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:shadow-none"
            >
              Container Properties
            </TabsTrigger>
            <TabsTrigger
              value="items"
              className="flex-1 py-3 rounded-none data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:shadow-none"
            >
              Item Properties
            </TabsTrigger>
            <TabsTrigger
              value="examples"
              className="flex-1 py-3 rounded-none data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:shadow-none"
            >
              Common Patterns
            </TabsTrigger>
          </TabsList>

          {/* Print-only headers */}
          <div className="hidden print:block print:mb-4">
            <h2 className="text-2xl font-bold mb-2">Flexbox Cheat Sheet</h2>
            <p className="text-gray-600">A comprehensive reference for CSS Flexbox properties and values</p>
          </div>

          <TabsContent value="container" className="p-0 print:block">
            <ContainerProperties />
          </TabsContent>
          <TabsContent value="items" className="p-0 print:block">
            <ItemProperties />
          </TabsContent>
          <TabsContent value="examples" className="p-0 print:block">
            <FlexboxExamples />
          </TabsContent>
        </Tabs>
      </div>

      <div className="mt-6 text-sm text-gray-600 dark:text-gray-400 print:mt-8 print:border-t print:pt-4">
        <p>
          This cheat sheet is designed to be a quick reference for CSS Flexbox properties. For more detailed
          information, visit the{" "}
          <a href="/theory" className="text-blue-600 dark:text-blue-400 hover:underline">
            Flexbox Theory
          </a>{" "}
          page.
        </p>
      </div>
    </div>
  )
}
