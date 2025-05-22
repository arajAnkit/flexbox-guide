import Link from "next/link";
import {
  Layout,
  AlignCenter,
  Rows3,
  Columns,
  Gamepad2,
  Code2,
  BookOpen,
} from "lucide-react";

const features = [
  {
    icon: <BookOpen className="h-8 w-8 text-[#800080] dark:text-[#C0A0FF]" />,
    title: "Comprehensive Theory",
    description:
      "Learn all the core concepts of Flexbox layout with detailed explanations.",
    link: "/theory",
  },
  {
    icon: <Layout className="h-8 w-8 text-[#00FFC5] dark:text-[#80FFDB]" />,
    title: "Flex Container",
    description: "Understand how to create and configure flex containers.",
    link: "/container",
  },
  {
    icon: <Rows3 className="h-8 w-8 text-[#008080] dark:text-[#4DD0E1]" />,
    title: "Flex Items",
    description: "Master the properties that control individual flex items.",
    link: "/items",
  },
  {
    icon: <Columns className="h-8 w-8 text-[#800080] dark:text-[#C0A0FF]" />,
    title: "Flex Axes",
    description: "Learn about main and cross axes and how they affect layout.",
    link: "/axes",
  },
  {
    icon: (
      <AlignCenter className="h-8 w-8 text-[#00FFC5] dark:text-[#80FFDB]" />
    ),
    title: "Utility Classes",
    description:
      "Discover ready-to-use utility classes for common Flexbox patterns.",
    link: "/utilities",
  },
  {
    icon: <Gamepad2 className="h-8 w-8 text-[#800080] dark:text-[#C0A0FF]" />,
    title: "Interactive Game",
    description: "Practice your Flexbox skills with our fun interactive game.",
    link: "/game",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-8xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            What You'll Learn
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Our comprehensive guide covers everything you need to know about CSS
            Flexbox layout.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Link
              key={index}
              href={feature.link}
              className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md dark:hover:shadow-lg transition-shadow h-full flex flex-col"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 flex-grow">
                {feature.description}
              </p>
              <div className="mt-4 text-[#00FFC5] dark:text-[#80FFDB] font-medium">
                Learn more →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
