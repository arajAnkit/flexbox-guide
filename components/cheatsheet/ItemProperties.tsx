import CodeBlock from "@/components/shared/CodeBlock"
import PropertyCard from "@/components/shared/PropertyCard"

export default function ItemProperties() {
  return (
    <div className="p-6">
      <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white print:text-black">Item Properties</h3>
      <p className="mb-6 text-gray-700 dark:text-gray-300 print:text-black">
        These properties are applied to the flex items (the children of the flex container).
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PropertyCard
          title="order"
          description="Controls the order in which flex items appear in the flex container."
          defaultValue="0"
        >
          <CodeBlock
            language="css"
            code={`.item {
  order: 5; /* default is 0 */
}`}
          />
          <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
            <ul className="list-disc list-inside">
              <li>Items are arranged in ascending order of the order value</li>
              <li>Items with the same order value are arranged in source order</li>
              <li>Negative values are allowed</li>
            </ul>
          </div>
        </PropertyCard>

        <PropertyCard
          title="flex-grow"
          description="Defines the ability for a flex item to grow if necessary."
          defaultValue="0"
        >
          <CodeBlock
            language="css"
            code={`.item {
  flex-grow: 1; /* default is 0 */
}`}
          />
          <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
            <ul className="list-disc list-inside">
              <li>Unitless value that serves as a proportion</li>
              <li>Determines how much the item will grow relative to other flex items</li>
              <li>If all items have flex-grow: 1, they will share space equally</li>
              <li>If one item has flex-grow: 2, it will take twice as much space</li>
            </ul>
          </div>
        </PropertyCard>

        <PropertyCard
          title="flex-shrink"
          description="Defines the ability for a flex item to shrink if necessary."
          defaultValue="1"
        >
          <CodeBlock
            language="css"
            code={`.item {
  flex-shrink: 0; /* default is 1 */
}`}
          />
          <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
            <ul className="list-disc list-inside">
              <li>Unitless value that serves as a proportion</li>
              <li>Determines how much the item will shrink relative to other flex items</li>
              <li>If all items have flex-shrink: 1, they will shrink equally</li>
              <li>If one item has flex-shrink: 0, it will not shrink</li>
            </ul>
          </div>
        </PropertyCard>

        <PropertyCard
          title="flex-basis"
          description="Defines the default size of an element before the remaining space is distributed."
          defaultValue="auto"
        >
          <CodeBlock
            language="css"
            code={`.item {
  flex-basis: 100px; /* default is auto */
}`}
          />
          <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
            <ul className="list-disc list-inside">
              <li>Can be a length (e.g., 20%, 5rem) or a keyword</li>
              <li>
                <strong>auto:</strong> Looks at the item's width or height property
              </li>
              <li>
                <strong>content:</strong> Sizes based on the item's content
              </li>
              <li>
                <strong>0:</strong> The item will have no initial main size
              </li>
            </ul>
          </div>
        </PropertyCard>

        <PropertyCard
          title="flex"
          description="Shorthand for flex-grow, flex-shrink, and flex-basis combined."
          defaultValue="0 1 auto"
        >
          <CodeBlock
            language="css"
            code={`.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ];
}

/* Examples */
.item {
  flex: 1; /* flex-grow: 1, flex-shrink: 1, flex-basis: 0% */
}
.item {
  flex: 2 1 200px; /* flex-grow: 2, flex-shrink: 1, flex-basis: 200px */
}
.item {
  flex: auto; /* flex-grow: 1, flex-shrink: 1, flex-basis: auto */
}
.item {
  flex: none; /* flex-grow: 0, flex-shrink: 0, flex-basis: auto */
}`}
          />
          <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
            <p>It is recommended to use this shorthand property rather than setting the individual properties.</p>
          </div>
        </PropertyCard>

        <PropertyCard
          title="align-self"
          description="Allows the default alignment (or the one specified by align-items) to be overridden for individual flex items."
          defaultValue="auto"
        >
          <CodeBlock
            language="css"
            code={`.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}`}
          />
          <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
            <ul className="list-disc list-inside">
              <li>
                <strong>auto:</strong> Inherits the parent's align-items value
              </li>
              <li>
                <strong>flex-start:</strong> Item is aligned at the start of the cross axes
              </li>
              <li>
                <strong>flex-end:</strong> Item is aligned at the end of the cross axes
              </li>
              <li>
                <strong>center:</strong> Item is centered on the cross axes
              </li>
              <li>
                <strong>baseline:</strong> Item is aligned by its baseline
              </li>
              <li>
                <strong>stretch:</strong> Item is stretched to fill the container
              </li>
            </ul>
          </div>
        </PropertyCard>
      </div>
    </div>
  )
}
