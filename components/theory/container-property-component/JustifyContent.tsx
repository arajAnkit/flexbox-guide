import Link from "next/link";
import CodeBlock from "@/components/shared/CodeBlock";

export const JustifyContent = () => {
  const justifyContentOptions = [
    {
      name: "Flex Start",
      description:
        "Aligns flex items to the start of the flex container along the main axis.",
      code: ".container {\n  display: flex;\n  justify-content: flex-start;\n}",
    },
    {
      name: "Flex End",
      description:
        "Aligns flex items to the end of the flex container along the main axis.",
      code: ".container {\n  display: flex;\n  justify-content: flex-end;\n}",
    },
    {
      name: "Center",
      description:
        "Centers flex items along the main axis of the flex container.",
      code: ".container {\n  display: flex;\n  justify-content: center;\n}",
    },
    {
      name: "Space Between",
      description:
        "Evenly distributes items across the main axis, placing first and last items at the edges.",
      code: ".container {\n  display: flex;\n  justify-content: space-between;\n}",
    },
    {
      name: "Space Around",
      description:
        "Evenly distributes items with equal spacing around them on the main axis.",
      code: ".container {\n  display: flex;\n  justify-content: space-around;\n}",
    },
    {
      name: "Space Evenly",
      description:
        "Distributes items so that the space between any two items and the edges is equal.",
      code: ".container {\n  display: flex;\n  justify-content: space-evenly;\n}",
    },
  ];

  return (
    <div>
      <h3 className="mt-8 mb-4 text-xl font-semibold">
        Justify Content Property
      </h3>
      <p className="text-foreground mb-4">
        The <code>justify-content</code> property defines how flex items are
        aligned along the main axis of a flex container. It provides various
        alignment options, allowing you to control spacing, centering, or
        distribution of items. Below are the available options:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {justifyContentOptions.map(({ name, description, code }, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-6 bg-white"
          >
            <h4 className="font-medium text-gray-900 mb-2">{`Justify Content: ${name}`}</h4>
            <p className="text-gray-700 mb-4">{description}</p>
            <CodeBlock code={code} language="css" />

            {/* Preview Section */}
            <div className="mt-4 p-4 bg-gray-100 rounded-lg">
              <p className="text-gray-700 font-medium mb-2">{`Preview: ${name}`}</p>
              <div
                className={`flex ${
                  index === 1
                    ? "justify-end"
                    : index === 2
                    ? "justify-center"
                    : index === 3
                    ? "justify-between"
                    : index === 4
                    ? "justify-around"
                    : index === 5
                    ? "justify-evenly"
                    : "justify-start"
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
