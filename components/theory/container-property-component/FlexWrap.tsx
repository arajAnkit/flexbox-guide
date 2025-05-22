import Link from "next/link";
import CodeBlock from "@/components/shared/CodeBlock";

export const FlexWrap = () => {
  const flexWrapOptions = [
    {
      name: "No Wrap",
      description:
        "The default value. All flex items stay in a single row, overflowing if necessary.",
      code: ".container {\n  display: flex;\n  flex-wrap: nowrap;\n}",
    },
    {
      name: "Wrap",
      description:
        "Allows flex items to wrap onto new lines when they exceed the container width.",
      code: ".container {\n  display: flex;\n  flex-wrap: wrap;\n}",
    },
    {
      name: "Wrap Reverse",
      description:
        "Similar to 'wrap', but items wrap in the opposite direction, placing overflow items above instead of below.",
      code: ".container {\n  display: flex;\n  flex-wrap: wrap-reverse;\n}",
    },
  ];

  return (
    <div>
      <h3 className="mt-8 mb-4 text-xl font-semibold">Flex Wrap Property</h3>
      <p className="text-foreground mb-4">
        The <code>flex-wrap</code> property defines whether flex items should
        wrap onto multiple lines or remain in a single row. This is useful in
        responsive designs where items may need to flow onto new lines when the
        container size changes.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {flexWrapOptions.map(({ name, description, code }, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-6 bg-white"
          >
            <h4 className="font-medium text-gray-900 mb-2">{`Flex Wrap: ${name}`}</h4>
            <p className="text-gray-700 mb-4">{description}</p>
            <CodeBlock code={code} language="css" />

            {/* Preview Section */}
            <div className="mt-4 p-4 bg-gray-100 rounded-lg">
              <p className="text-gray-700 font-medium mb-2">{`Preview: ${name}`}</p>
              <div
                className={`flex ${
                  index === 1
                    ? "flex-wrap"
                    : index === 2
                    ? "flex-wrap-reverse"
                    : "flex-nowrap"
                } border-2 border-dashed border-gray-300 p-4 rounded-lg`}
              >
                {Array.from({ length: 9 }, (_, i) => (
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
