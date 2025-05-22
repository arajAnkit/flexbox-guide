import CodeBlock from "@/components/shared/CodeBlock";

export default function IntroductionSection() {
  const basicFlexboxCode = `.container {
  display: flex;
}`;

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Introduction to Flexbox</h2>

        <div className="prose max-w-none">
          <p>
            CSS Flexbox (Flexible Box Module) is a powerful layout model
            designed for one-dimensional arrangements of items. It allows
            developers to create dynamic and responsive layouts effortlessly,
            handling varying sizes and distributions of elements.
          </p>
          <p>
            Unlike traditional layout techniques such as floats or positioning,
            Flexbox enables direct control over alignment, order, and spacing.
            With Flexbox, items can be easily centered, resized proportionally,
            and adapted to different screen sizes without extra media queries.
          </p>

          <p className="mt-8 mb-4 text-xl font-semibold">
            Flexbox has two main components:{" "}
          </p>
          <p className="mt-2">
            <span className="font-semibold text-violet-700">
              Flex container:{" "}
            </span>
            A Flex container is an element with <code>display: flex</code>{" "}
            applied, making it the parent of flex items. It controls the overall
            layout and arrangement of its children using properties like{" "}
            <code>flex-direction</code>, <code>justify-content</code>, and{" "}
            <code>align-items</code>. This powerful structure allows elements to
            adjust dynamically, making responsive designs much simpler.
          </p>

          <p className="mt-2">
            <span className="font-semibold text-violet-700">Flex items: </span>
            Flex items are the direct children of a Flex container and inherit
            its flexible behavior. These items can be individually controlled
            using properties like <code>flex-grow</code>,{" "}
            <code>flex-shrink</code>, and <code>order</code>. They can
            automatically resize and reposition based on their container’s
            rules, creating adaptable and visually balanced layouts without
            extra code or media queries.
          </p>

          <h3 className="mt-8 mb-4 text-xl font-semibold">Why Use Flexbox?</h3>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Simplifies complex layouts</strong> - Flexbox makes many
              layout tasks easier, like vertical centering, equal-height
              columns, and space distribution.
            </li>
            <li>
              <strong>Responsive design</strong> - Flexbox helps create layouts
              that adapt to different screen sizes without using media queries.
            </li>
            <li>
              <strong>Direction-agnostic</strong> - Unlike traditional methods,
              Flexbox works well regardless of text direction or writing mode.
            </li>
            <li>
              <strong>Space distribution</strong> - Easily control how extra
              space is distributed or how items shrink when there's not enough
              space.
            </li>
            <li>
              <strong>Alignment control</strong> - Precisely control alignment
              along both axes.
            </li>
          </ul>

          <h3 className="mt-8 mb-4 text-xl font-semibold">Basic Terminology</h3>

          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2 text-gray-900">
                  Flex Container
                </h4>
                <p className="text-gray-700 mb-4">
                  The parent element that has{" "}
                  <code className="bg-gray-100 px-1 py-0.5 rounded">
                    display: flex
                  </code>{" "}
                  or{" "}
                  <code className="bg-gray-100 px-1 py-0.5 rounded">
                    display: inline-flex
                  </code>{" "}
                  applied to it.
                </p>
                <CodeBlock code={basicFlexboxCode} language="css" />
              </div>

              <div>
                <h4 className="font-medium mb-2 text-gray-900">Flex Items</h4>
                <p className="text-gray-700 mb-4">
                  The direct children of a flex container automatically become
                  flex items.
                </p>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <div className="flex border-2 border-dashed border-gray-300 p-4 rounded-lg">
                    <div className="bg-[#800080] text-white font-bold p-3 m-1 rounded">
                      Item 1
                    </div>
                    <div className="bg-[#00FFC5] text-white font-bold p-3 m-1 rounded">
                      Item 2
                    </div>
                    <div className="bg-[#008080] text-gray-800 font-bold p-3 m-1 rounded">
                      Item 3
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h3 className="mt-8 mb-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
            Difference Between <code>flex</code> and <code>inline-flex</code>
          </h3>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
            <table className="table-auto w-full border-collapse border border-gray-300 dark:border-gray-600">
              <thead>
                <tr className="bg-gray-200 dark:bg-gray-700">
                  <th className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-left">
                    Property
                  </th>
                  <th className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-left">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                    <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">
                      display: flex
                    </code>
                  </td>
                  <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                    The element behaves as a <i>block-level</i> flex container,
                    spanning the full width available.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                    <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">
                      display: inline-flex
                    </code>
                  </td>
                  <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                    The element remains <i>inline</i>, aligning within
                    surrounding inline elements while acting as a flex
                    container.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mt-8 mb-4 text-xl font-semibold">Axes in Flexbox</h3>

          <p>
            Flexbox operates on two axes: the <strong>main axes</strong> and the{" "}
            <strong>cross axes</strong>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-[#800080]/20 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Main Axes</h4>
              <p>
                Defined by the <code>flex-direction</code> property. It can be
                horizontal (row) or vertical (column).
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>
                  <code>justify-content</code> aligns items along the main axes
                </li>
              </ul>
            </div>

            <div className="bg-[#00FFC5]/20 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Cross Axes</h4>
              <p>
                Perpendicular to the main axes. If the main axes is horizontal,
                the cross axes is vertical, and vice versa.
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>
                  <code>align-items</code> aligns items along the cross axes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
