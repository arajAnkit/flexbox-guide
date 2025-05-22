interface GamePreviewProps {
  css: string
}

export default function GamePreview({ css }: GamePreviewProps) {
  // Extract just the CSS properties from the user's CSS
  // This assumes the CSS is in the format: .container { ... }
  const extractedCss = css.match(/{([^}]*)}/)?.[1] || ""

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
      <h3 className="text-lg font-medium mb-4">Preview</h3>

      <div className="border-2 border-dashed border-gray-300 p-4 rounded-lg h-64 relative">
        <div className="flex absolute inset-0 p-4" style={{ ...cssStringToObject(extractedCss) }}>
          <div className="bg-[#800080] text-white font-bold p-4 rounded-md shadow-sm">1</div>
          <div className="bg-[#00FFC5] text-white font-bold p-4 rounded-md shadow-sm">2</div>
          <div className="bg-[#008080] text-gray-800 font-bold p-4 rounded-md shadow-sm">3</div>
          <div className="bg-[#800080] text-white font-bold p-4 rounded-md shadow-sm">4</div>
          <div className="bg-[#00FFC5] text-white font-bold p-4 rounded-md shadow-sm">5</div>
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-600">
        <p>
          The preview shows how your CSS affects the layout of the flex items. Try to match the target layout by
          modifying the CSS properties.
        </p>
      </div>
    </div>
  )
}

// Helper function to convert CSS string to object for inline styles
function cssStringToObject(cssString: string) {
  const result: Record<string, string> = {}

  // Split the CSS string by semicolons and process each declaration
  cssString.split(";").forEach((declaration) => {
    // Trim whitespace and skip empty declarations
    const trimmed = declaration.trim()
    if (!trimmed) return

    // Split the declaration into property and value
    const [property, value] = trimmed.split(":").map((part) => part.trim())

    if (property && value) {
      // Convert kebab-case to camelCase for React inline styles
      const camelCaseProperty = property.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())
      result[camelCaseProperty] = value
    }
  })

  return result
}
