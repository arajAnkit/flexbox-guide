import Link from "next/link";
import CodeBlock from "@/components/shared/CodeBlock";

export const AlignContent = () => {
  const alignContentOptions = [
    {
      name: "Flex Start",
      description:
        "Aligns multiple rows of flex items at the start of the flex container along the cross axis.",
      code: ".container {\n  display: flex;\n  flex-wrap: wrap;\n  align-content: flex-start;\n}",
    },
    {
      name: "Flex End",
      description:
        "Aligns multiple rows of flex items at the end of the flex container along the cross axis.",
      code: ".container {\n  display: flex;\n  flex-wrap: wrap;\n  align-content: flex-end;\n}",
    },
    {
      name: "Center",
      description:
        "Centers multiple rows of flex items along the cross axis of the flex container.",
      code: ".container {\n  display: flex;\n  flex-wrap: wrap;\n  align-content: center;\n}",
    },
    {
      name: "Space Between",
      description:
        "Distributes multiple rows of flex items evenly across the container, with the first row at the top and last row at the bottom.",
      code: ".container {\n  display: flex;\n  flex-wrap: wrap;\n  align-content: space-between;\n}",
    },
    {
      name: "Space Around",
      description:
        "Similar to 'space-between', but with equal space around each row of flex items.",
      code: ".container {\n  display: flex;\n  flex-wrap: wrap;\n  align-content: space-around;\n}",
    },
    {
      name: "Stretch",
      description:
        "Stretches flex item rows to evenly fill the container along the cross axis.",
      code: ".container {\n  display: flex;\n  flex-wrap: wrap;\n  align-content: stretch;\n}",
    },
  ];

  return (
    <div>
      <h3 className="mt-8 mb-4 text-xl font-semibold">
        Align Content Property
      </h3>
      <p className="text-foreground mb-4">
        The <code>align-content</code> property controls the alignment of
        multiple rows of flex items along the cross axis when they wrap onto new
        lines. This property only applies when <code>flex-wrap</code> is set to{" "}
        <code>wrap</code> or <code>wrap-reverse</code>. It helps distribute
        space between rows effectively.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {alignContentOptions.map(({ name, description, code }, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-6 bg-white"
          >
            <h4 className="font-medium text-gray-900 mb-2">{`Align Content: ${name}`}</h4>
            <p className="text-gray-700 mb-4">{description}</p>
            <CodeBlock code={code} language="css" />

            {/* Preview Section */}
            <div className="mt-4 p-4 bg-gray-100 rounded-lg">
              <p className="text-gray-700 font-medium mb-2">{`Preview: ${name}`}</p>
              <div
                className={`flex flex-wrap h-48 ${
                  index === 1
                    ? "content-end"
                    : index === 2
                    ? "content-center"
                    : index === 3
                    ? "content-between"
                    : index === 4
                    ? "content-around"
                    : index === 5
                    ? "content-stretch"
                    : "content-start"
                } border-2 border-dashed border-gray-300 p-4 rounded-lg`}
              >
                {Array.from({ length: 10 }, (_, i) => (
                  <div
                    key={i}
                    className={`p-3 m-1 rounded font-bold text-white ${
                      i % 2 === 0 ? "bg-purple-700" : "bg-green-400"
                    }`}
                  >
                    Item {i + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
