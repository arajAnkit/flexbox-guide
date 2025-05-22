import CodeBlock from "@/components/shared/CodeBlock";

export const AlignSelf = () => {
  const alignSelfConfigs = [
    {
      name: "Auto",
      description: `The default value. The item inherits the alignment from the flex container's "align-items" property.`,
      code: `.item-0 { align-self: auto; }`,
      className: "self-auto",
    },
    {
      name: "Flex Start",
      description: `Aligns the item at the start of the cross axis, overriding any "align-items" setting.`,
      code: `.item-1 { align-self: flex-start; }`,
      className: "self-start",
    },
    {
      name: "Flex End",
      description: `Aligns the item at the end of the cross axis.`,
      code: `.item-2 { align-self: flex-end; }`,
      className: "self-end",
    },
    {
      name: "Center",
      description: `Centers the item on the cross axis.`,
      code: `.item-3 { align-self: center; }`,
      className: "self-center",
    },
    {
      name: "Baseline",
      description: `Aligns the item based on text baseline, useful for typography.`,
      code: `.item-4 { align-self: baseline; }`,
      className: "self-baseline",
    },
    {
      name: "Stretch",
      description: `Stretches the item to fill the cross axis (default).`,
      code: `.item-5 { align-self: stretch; }`,
      className: "self-stretch",
    },
  ];

  return (
    <div>
      <h3 className="mt-8 mb-4 text-xl font-semibold">Align-Self Property</h3>
      <p className="text-foreground mb-4">
        The <code>align-self</code> property overrides the{" "}
        <code>align-items</code> setting for an individual flex item. It allows
        independent alignment inside a flex container.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {alignSelfConfigs.map(
          ({ name, description, code, className }, index) => (
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
                <div className="flex h-32 border-2 border-dashed border-gray-300 p-4 rounded-lg items-center">
                  {Array.from({ length: 6 }, (_, i) => (
                    <div
                      key={i}
                      className={`w-20 h-20 flex justify-center items-center rounded-lg font-bold text-white bg-gradient-to-br from-blue-500 to-purple-700 shadow-md ${alignSelfConfigs[i].className}`}
                    >
                      Item {i + 1}
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
