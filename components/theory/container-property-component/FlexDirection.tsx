import Link from "next/link";
import CodeBlock from "@/components/shared/CodeBlock";

export const FlexDirection = () => {
  const flexDirectionOptions = [
    {
      name: "Row",
      description:
        "This is the default value. It arranges flex items horizontally from left to right.",
      code: ".container {\n  display: flex;\n  flex-direction: row;\n}",
    },
    {
      name: "Row Reverse",
      description:
        "Similar to 'row', but reverses the order of items, aligning them from right to left.",
      code: ".container {\n  display: flex;\n  flex-direction: row-reverse;\n}",
    },
    {
      name: "Column",
      description:
        "Arranges flex items vertically, stacking them from top to bottom.",
      code: ".container {\n  display: flex;\n  flex-direction: column;\n}",
    },
    {
      name: "Column Reverse",
      description:
        "Works like 'column', but reverses the order, placing items from bottom to top.",
      code: ".container {\n  display: flex;\n  flex-direction: column-reverse;\n}",
    },
  ];

  return (
    <div>
      <h3 className="mt-8 mb-4 text-xl font-semibold">
        Flex Direction Property
      </h3>
      <p className="text-foreground mb-4">
        The <code>flex-direction</code> property determines the direction in
        which flex items are arranged inside a flex container. By changing its
        value, you can control whether items appear in a row, a column, or in
        reverse order. This property is especially useful for designing
        responsive layouts without needing complex positioning or floating
        elements.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {flexDirectionOptions.map(({ name, description, code }, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-6 bg-white"
          >
            <h4 className="font-medium text-gray-900 mb-2">{`Flex Direction: ${name}`}</h4>
            <p className="text-gray-700 mb-4">{description}</p>
            <CodeBlock code={code} language="css" />

            {/* Preview Section */}
            <div className="mt-4 p-4 bg-gray-100 rounded-lg">
              <p className="text-gray-700 font-medium mb-2">{`Preview: ${name}`}</p>
              <div
                className={`flex ${
                  index === 1
                    ? "flex-row-reverse"
                    : index === 2
                    ? "flex-col"
                    : index === 3
                    ? "flex-col-reverse"
                    : ""
                } border-2 border-dashed border-gray-300 p-4 rounded-lg`}
              >
                <div className="bg-purple-700 text-white font-bold p-3 m-1 rounded">
                  Item 1
                </div>
                <div className="bg-green-400 text-white font-bold p-3 m-1 rounded">
                  Item 2
                </div>
                <div className="bg-teal-600 text-gray-800 font-bold p-3 m-1 rounded">
                  Item 3
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
