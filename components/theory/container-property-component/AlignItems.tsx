import Link from "next/link";
import CodeBlock from "@/components/shared/CodeBlock";

export const AlignItems = () => {
  const alignItemsOptions = [
    {
      name: "Flex Start",
      description:
        "Aligns flex items at the start of the cross axis of the flex container.",
      code: ".container {\n  display: flex;\n  align-items: flex-start;\n}",
    },
    {
      name: "Flex End",
      description:
        "Aligns flex items at the end of the cross axis of the flex container.",
      code: ".container {\n  display: flex;\n  align-items: flex-end;\n}",
    },
    {
      name: "Center",
      description:
        "Centers flex items along the cross axis of the flex container.",
      code: ".container {\n  display: flex;\n  align-items: center;\n}",
    },
    {
      name: "Baseline",
      description: "Aligns flex items so that their baselines align.",
      code: ".container {\n  display: flex;\n  align-items: baseline;\n}",
    },
    {
      name: "Stretch",
      description:
        "Stretches flex items to fill the container along the cross axis.",
      code: ".container {\n  display: flex;\n  align-items: stretch;\n}",
    },
  ];

  return (
    <div>
      <h3 className="mt-8 mb-4 text-xl font-semibold">Align Items Property</h3>
      <p className="text-foreground mb-4">
        The <code>align-items</code> property controls how flex items are
        positioned along the cross axis inside a flex container. It is
        particularly useful for aligning elements vertically when working with
        row-based layouts or horizontally when using column-based layouts.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {alignItemsOptions.map(({ name, description, code }, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-6 bg-white"
          >
            <h4 className="font-medium text-gray-900 mb-2">{`Align Items: ${name}`}</h4>
            <p className="text-gray-700 mb-4">{description}</p>
            <CodeBlock code={code} language="css" />

            {/* Preview Section */}
            <div className="mt-4 p-4 bg-gray-100 rounded-lg">
              <p className="text-gray-700 font-medium mb-2">{`Preview: ${name}`}</p>
              <div
                className={`flex h-32 ${
                  index === 1
                    ? "items-end"
                    : index === 2
                    ? "items-center"
                    : index === 3
                    ? "items-baseline"
                    : index === 4
                    ? "items-stretch"
                    : "items-start"
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
