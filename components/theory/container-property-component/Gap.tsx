import CodeBlock from "@/components/shared/CodeBlock";

export const GapProperty = () => {
  const gapOptions = [
    {
      name: "Gap",
      description:
        "Defines the spacing between both rows and columns in a flex or grid container.",
      code: ".container {\n  display: flex;\n  gap: 20px;\n}",
    },
    {
      name: "Row Gap",
      description:
        "Controls the vertical spacing between rows in a flex or grid container.",
      code: ".container {\n  display: flex;\n  flex-wrap: wrap;\n  row-gap: 20px;\n}",
    },
    {
      name: "Column Gap",
      description:
        "Controls the horizontal spacing between columns in a flex or grid container.",
      code: ".container {\n  display: flex;\n  flex-wrap: wrap;\n  column-gap: 20px;\n}",
    },
  ];

  return (
    <div>
      <h3 className="mt-8 mb-4 text-xl font-semibold">Gap Property</h3>
      <p className="text-foreground mb-4">
        The <code>gap</code> property manages the spacing between flex or grid
        items. Instead of using margins, it provides a cleaner way to set
        spacing for both <code>row-gap</code> and <code>column-gap</code>.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {gapOptions.map(({ name, description, code }, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-6 bg-white"
          >
            <h4 className="font-medium text-gray-900 mb-2">{`Gap: ${name}`}</h4>
            <p className="text-gray-700 mb-4">{description}</p>
            <CodeBlock code={code} language="css" />

            {/* Redesigned Preview Section */}
            <div className="mt-4 p-4 bg-gray-100 rounded-lg">
              <p className="text-gray-700 font-medium mb-2">{`Preview: ${name}`}</p>
              <div
                className={`flex flex-wrap justify-center items-center w-full ${
                  index === 1 ? "gap-y-8" : index === 2 ? "gap-x-8" : "gap-8"
                } border-2 border-dashed border-gray-300 p-4 rounded-lg`}
              >
                {Array.from({ length: 6 }, (_, i) => (
                  <div
                    key={i}
                    className="w-16 h-16 flex justify-center items-center rounded-lg font-bold text-white bg-gradient-to-br from-blue-500 to-purple-700 shadow-md"
                  >
                    {i + 1}
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
