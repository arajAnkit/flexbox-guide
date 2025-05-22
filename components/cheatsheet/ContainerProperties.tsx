import CodeBlock from "@/components/shared/CodeBlock"
import PropertyCard from "@/components/shared/PropertyCard"

export default function ContainerProperties() {
  return (
    <div className="p-6">
      <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white print:text-black">Container Properties</h3>
      <p className="mb-6 text-gray-700 dark:text-gray-300 print:text-black">
        These properties are applied to the flex container (the parent element).
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PropertyCard
          title="display"
          description="Defines a flex container; inline or block depending on the given value."
          defaultValue="block"
        >
          <CodeBlock
            language="css"
            code={`.container {
  display: flex | inline-flex;
}`}
          />
          <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
            <ul className="list-disc list-inside">
              <li>
                <strong>flex:</strong> Creates a block-level flex container
              </li>
              <li>
                <strong>inline-flex:</strong> Creates an inline-level flex container
              </li>
            </ul>
          </div>
        </PropertyCard>

        <PropertyCard
          title="flex-direction"
          description="Establishes the main axes, defining the direction flex items are placed in the flex container."
          defaultValue="row"
        >
          <CodeBlock
            language="css"
            code={`.container {
  flex-direction: row | row-reverse | column | column-reverse;
}`}
          />
          <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
            <ul className="list-disc list-inside">
              <li>
                <strong>row:</strong> Left to right (default)
              </li>
              <li>
                <strong>row-reverse:</strong> Right to left
              </li>
              <li>
                <strong>column:</strong> Top to bottom
              </li>
              <li>
                <strong>column-reverse:</strong> Bottom to top
              </li>
            </ul>
          </div>
        </PropertyCard>

        <PropertyCard
          title="flex-wrap"
          description="Controls whether items are forced into a single line or can be wrapped onto multiple lines."
          defaultValue="nowrap"
        >
          <CodeBlock
            language="css"
            code={`.container {
  flex-wrap: nowrap | wrap | wrap-reverse;
}`}
          />
          <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
            <ul className="list-disc list-inside">
              <li>
                <strong>nowrap:</strong> All items on one line (default)
              </li>
              <li>
                <strong>wrap:</strong> Items wrap to additional lines if needed
              </li>
              <li>
                <strong>wrap-reverse:</strong> Items wrap to additional lines in reverse
              </li>
            </ul>
          </div>
        </PropertyCard>

        <PropertyCard
          title="flex-flow"
          description="Shorthand for flex-direction and flex-wrap properties."
          defaultValue="row nowrap"
        >
          <CodeBlock
            language="css"
            code={`.container {
  flex-flow: flex-direction flex-wrap;
}

/* Example */
.container {
  flex-flow: row wrap;
}`}
          />
        </PropertyCard>

        <PropertyCard
          title="justify-content"
          description="Defines alignment along the main axes, distributing extra space."
          defaultValue="flex-start"
        >
          <CodeBlock
            language="css"
            code={`.container {
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
}`}
          />
          <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
            <ul className="list-disc list-inside">
              <li>
                <strong>flex-start:</strong> Items packed at start of container
              </li>
              <li>
                <strong>flex-end:</strong> Items packed at end of container
              </li>
              <li>
                <strong>center:</strong> Items centered in container
              </li>
              <li>
                <strong>space-between:</strong> Items evenly distributed; first at start, last at end
              </li>
              <li>
                <strong>space-around:</strong> Items evenly distributed with equal space around them
              </li>
              <li>
                <strong>space-evenly:</strong> Items evenly distributed with equal space between them
              </li>
            </ul>
          </div>
        </PropertyCard>

        <PropertyCard
          title="align-items"
          description="Defines how flex items are laid out along the cross axes."
          defaultValue="stretch"
        >
          <CodeBlock
            language="css"
            code={`.container {
  align-items: stretch | flex-start | flex-end | center | baseline;
}`}
          />
          <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
            <ul className="list-disc list-inside">
              <li>
                <strong>stretch:</strong> Items stretch to fill container (default)
              </li>
              <li>
                <strong>flex-start:</strong> Items placed at start of cross axes
              </li>
              <li>
                <strong>flex-end:</strong> Items placed at end of cross axes
              </li>
              <li>
                <strong>center:</strong> Items centered on cross axes
              </li>
              <li>
                <strong>baseline:</strong> Items aligned by their text baselines
              </li>
            </ul>
          </div>
        </PropertyCard>

        <PropertyCard
          title="align-content"
          description="Aligns a flex container's lines within when there is extra space in the cross-axes."
          defaultValue="stretch"
        >
          <CodeBlock
            language="css"
            code={`.container {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}`}
          />
          <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
            <p className="mb-2">
              <strong>Note:</strong> This property only has effect when there are multiple lines of flex items.
            </p>
            <ul className="list-disc list-inside">
              <li>
                <strong>stretch:</strong> Lines stretch to fill container
              </li>
              <li>
                <strong>flex-start:</strong> Lines packed at start of container
              </li>
              <li>
                <strong>flex-end:</strong> Lines packed at end of container
              </li>
              <li>
                <strong>center:</strong> Lines centered in container
              </li>
              <li>
                <strong>space-between:</strong> Lines evenly distributed; first at start, last at end
              </li>
              <li>
                <strong>space-around:</strong> Lines evenly distributed with equal space around them
              </li>
            </ul>
          </div>
        </PropertyCard>

        <PropertyCard
          title="gap, row-gap, column-gap"
          description="Controls spacing between flex items."
          defaultValue="0"
        >
          <CodeBlock
            language="css"
            code={`.container {
  gap: 10px; /* row-gap and column-gap */
  row-gap: 10px;
  column-gap: 20px;
}`}
          />
          <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
            <ul className="list-disc list-inside">
              <li>
                <strong>gap:</strong> Shorthand for row-gap and column-gap
              </li>
              <li>
                <strong>row-gap:</strong> Spacing between rows
              </li>
              <li>
                <strong>column-gap:</strong> Spacing between columns
              </li>
            </ul>
          </div>
        </PropertyCard>
      </div>
    </div>
  )
}
