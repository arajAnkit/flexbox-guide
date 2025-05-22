import PageHeader from "@/components/shared/PageHeader"
import CheatSheetContent from "@/components/cheatsheet/CheatSheetContent"

export default function CheatSheetPage() {
  return (
    <>
      <PageHeader
        title="Flexbox Cheat Sheet"
        description="A comprehensive reference guide to all CSS Flexbox properties and values."
      />
      <CheatSheetContent />
    </>
  )
}
