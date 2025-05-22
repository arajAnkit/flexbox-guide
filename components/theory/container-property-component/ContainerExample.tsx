import CodeBlock from "@/components/shared/CodeBlock";

export const ContainerExamples = () => {
  const flexboxConfigs = [
    {
      name: "Centered Flexbox",
      description: "Items are centered both horizontally and vertically.",
      code: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
}`,
      previewClass: "flex justify-center items-center h-32",
    },
    {
      name: "Navigation Bar",
      description:
        "Items are spaced evenly with the first and last aligned to the edges.",
      code: `.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}`,
      previewClass: "flex justify-between items-center",
    },
    {
      name: "Card Layout",
      description: "Cards are stacked vertically with even spacing.",
      code: `.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}`,
      previewClass: "flex flex-col items-center gap-5",
    },
    {
      name: "Grid Wrap Layout",
      description: "Flex items automatically wrap onto new rows.",
      code: `.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}`,
      previewClass: "flex flex-wrap justify-center gap-5",
    },
    {
      name: "Dashboard Layout",
      description: "Aligns multiple rows in a flexible grid.",
      code: `.container {
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  justify-content: space-evenly;
  gap: 30px;
}`,
      previewClass: "flex flex-wrap content-around justify-evenly gap-5 h-48",
    },
    {
      name: "Sidebar Layout",
      description: "Items are aligned to the left and stacked.",
      code: `.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}`,
      previewClass: "flex flex-col items-start gap-5",
    },
  ];

  return (
    <div>
      <h3 className="mt-8 mb-4 text-xl font-semibold">
        Flexbox Container Examples
      </h3>
      <p className="text-foreground mb-4">
        Below are six examples demonstrating various flexbox container
        properties and their effects on layout.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {flexboxConfigs.map(
          ({ name, description, code, previewClass }, index) => (
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
                  {Array.from({ length: 4 }, (_, i) => (
                    <div
                      key={i}
                      className="w-20 h-20 flex justify-center items-center rounded-lg font-bold text-white bg-gradient-to-br from-blue-500 to-purple-700 shadow-md"
                    >
                      {i + 1}
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
