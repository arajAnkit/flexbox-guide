import CodeBlock from "@/components/shared/CodeBlock";

export const FlexItemExamples = () => {
  const flexItemConfigs = [
    {
      name: "Order",
      description: `The "order" property controls the visual sequence of flex items, without changing the HTML structure. 
      Items with lower order values appear first.`,
      code: `.item-1 { order: 2; }
.item-2 { order: 1; }
.item-3 { order: 3; }`,
      previewClass: "flex gap-4",
      items: [
        { text: "Item 1 (order: 2)", className: "order-2" },
        { text: "Item 2 (order: 1)", className: "order-1" },
        { text: "Item 3 (order: 3)", className: "order-3" },
      ],
    },
    {
      name: "Flex Grow",
      description: `"flex-grow" determines how much a flex item expands relative to others when extra space is available.`,
      code: `.item-1 { flex-grow: 1; }
.item-2 { flex-grow: 2; }
.item-3 { flex-grow: 3; }`,
      previewClass: "flex gap-4 w-full",
      items: [
        { text: "Item 1 (grow: 1)", className: "flex-grow-1" },
        { text: "Item 2 (grow: 2)", className: "flex-grow-2" },
        { text: "Item 3 (grow: 3)", className: "flex-grow-3" },
      ],
    },
    {
      name: "Flex Shrink",
      description: `"flex-shrink" determines how much an item reduces in size relative to others when space is limited.`,
      code: `.item-1 { flex-shrink: 3; }
.item-2 { flex-shrink: 1; }
.item-3 { flex-shrink: 2; }`,
      previewClass: "flex gap-4 w-full",
      items: [
        { text: "Item 1 (shrink: 3)", className: "flex-shrink-3" },
        { text: "Item 2 (shrink: 1)", className: "flex-shrink-1" },
        { text: "Item 3 (shrink: 2)", className: "flex-shrink-2" },
      ],
    },
    {
      name: "Flex Basis",
      description: `"flex-basis" sets the initial size of a flex item before growing/shrinking. 
      It can be fixed (px, %, rem) or flexible ("auto").`,
      code: `.item-1 { flex-basis: 100px; }
.item-2 { flex-basis: 200px; }
.item-3 { flex-basis: auto; }`,
      previewClass: "flex gap-4 w-full",
      items: [
        { text: "Item 1 (100px)", className: "basis-100" },
        { text: "Item 2 (200px)", className: "basis-200" },
        { text: "Item 3 (auto)", className: "basis-auto" },
      ],
    },
    {
      name: "Align-Self",
      description: `"align-self" overrides the "align-items" setting for a specific flex item, allowing independent alignment.`,
      code: `.item-1 { align-self: flex-start; }
.item-2 { align-self: center; }
.item-3 { align-self: flex-end; }`,
      previewClass: "flex items-center h-32",
      items: [
        { text: "Item 1 (start)", className: "self-start" },
        { text: "Item 2 (center)", className: "self-center" },
        { text: "Item 3 (end)", className: "self-end" },
      ],
    },
    {
      name: "Flex (Shorthand)",
      description: `"flex" is a shorthand that combines "flex-grow", "flex-shrink", and "flex-basis" into a single declaration.`,
      code: `.item-1 { flex: 1 1 150px; }
.item-2 { flex: 2 1 200px; }
.item-3 { flex: 3 1 auto; }`,
      previewClass: "flex gap-4 w-full",
      items: [
        { text: "Item 1 (1 1 150px)", className: "flex-1 basis-150" },
        { text: "Item 2 (2 1 200px)", className: "flex-2 basis-200" },
        { text: "Item 3 (3 1 auto)", className: "flex-3 basis-auto" },
      ],
    },
  ];

  return (
    <div>
      <h3 className="mt-8 mb-4 text-xl font-semibold">
        Flex Item Property Examples
      </h3>
      <p className="text-foreground mb-4">
        Below are six flex item properties with descriptions, code snippets, and
        interactive previews to demonstrate their effects.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {flexItemConfigs.map(
          ({ name, description, code, previewClass, items }, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-6 bg-white"
            >
              <h4 className="font-medium text-gray-900 mb-2">{name}</h4>
              <p className="text-gray-700 mb-4">{description}</p>
              <CodeBlock code={code} language="css" />

              {/* Preview Section */}
              <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                <p className="text-gray-700 font-medium mb-2">Preview:</p>
                <div
                  className={`border-2 border-dashed border-gray-300 p-4 rounded-lg ${previewClass}`}
                >
                  {items.map(({ text, className }, i) => (
                    <div
                      key={i}
                      className={`w-20 h-20 flex justify-center items-center rounded-lg font-bold text-white bg-gradient-to-br from-blue-500 to-purple-700 shadow-md ${className}`}
                    >
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
