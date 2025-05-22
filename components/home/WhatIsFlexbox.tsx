"use client";

import { useState, useEffect } from "react";
import { Play, Pause, ArrowRight } from "lucide-react";
import CodeBlock from "../shared/CodeBlock";
import { Button } from "@/components/ui/button";

export default function WhatIsFlexbox() {
  const [flexDirection, setFlexDirection] = useState("row");
  const [justifyContent, setJustifyContent] = useState("flex-start");
  const [alignItems, setAlignItems] = useState("stretch");
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);

  const animationSteps = [
    {
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "stretch",
    },
    { flexDirection: "row", justifyContent: "center", alignItems: "center" },
    {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-end",
    },
    { flexDirection: "column", justifyContent: "center", alignItems: "center" },
    {
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "flex-start",
    },
    {
      flexDirection: "row-reverse",
      justifyContent: "flex-end",
      alignItems: "center",
    },
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isAnimating) {
      timer = setTimeout(() => {
        const nextStep = (animationStep + 1) % animationSteps.length;
        setAnimationStep(nextStep);
        const { flexDirection, justifyContent, alignItems } =
          animationSteps[nextStep];
        setFlexDirection(flexDirection);
        setJustifyContent(justifyContent);
        setAlignItems(alignItems);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [isAnimating, animationStep]);

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  const htmlCode = `<div class="flex-container">
  <div class="flex-item">1</div>
  <div class="flex-item">2</div>
  <div class="flex-item">3</div>
</div>`;

  const cssCode = `.flex-container {
  display: flex;
  flex-direction: ${flexDirection};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
}`;

  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-8xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold dark:text-white text-gray-900 mb-4">
            What is Flexbox?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Flexbox is a one-dimensional layout method designed for laying out
            items in rows or columns. It makes building flexible responsive
            layout structures without using float or positioning much easier.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Interactive Flexbox Demo
            </h3>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-800 dark:text-gray-200">
                    Try it yourself or watch the animation
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    See how different properties affect the layout
                  </p>
                </div>
                <Button
                  onClick={toggleAnimation}
                  variant="outline"
                  className="flex items-center gap-2 bg-gradient-to-r from-[#800080]/20 via-[#00FFC5]/20 to-[#008080]/20 hover:from-[#800080]/30 hover:via-[#00FFC5]/30 hover:to-[#008080]/30 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
                >
                  {isAnimating ? (
                    <>
                      <Pause size={16} /> Pause Animation
                    </>
                  ) : (
                    <>
                      <Play size={16} /> Play Animation
                    </>
                  )}
                </Button>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  flex-direction:
                </label>
                <select
                  value={flexDirection}
                  onChange={(e) => {
                    setFlexDirection(e.target.value);
                    setIsAnimating(false);
                  }}
                  className="w-full p-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 rounded-md"
                  disabled={isAnimating}
                >
                  <option value="row">row</option>
                  <option value="row-reverse">row-reverse</option>
                  <option value="column">column</option>
                  <option value="column-reverse">column-reverse</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  justify-content:
                </label>
                <select
                  value={justifyContent}
                  onChange={(e) => {
                    setJustifyContent(e.target.value);
                    setIsAnimating(false);
                  }}
                  className="w-full p-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 rounded-md"
                  disabled={isAnimating}
                >
                  <option value="flex-start">flex-start</option>
                  <option value="flex-end">flex-end</option>
                  <option value="center">center</option>
                  <option value="space-between">space-between</option>
                  <option value="space-around">space-around</option>
                  <option value="space-evenly">space-evenly</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  align-items:
                </label>
                <select
                  value={alignItems}
                  onChange={(e) => {
                    setAlignItems(e.target.value);
                    setIsAnimating(false);
                  }}
                  className="w-full p-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 rounded-md"
                  disabled={isAnimating}
                >
                  <option value="stretch">stretch</option>
                  <option value="flex-start">flex-start</option>
                  <option value="flex-end">flex-end</option>
                  <option value="center">center</option>
                  <option value="baseline">baseline</option>
                </select>
              </div>

              <div
                className="border-2 border-dashed border-gray-300 dark:border-gray-700 p-4 rounded-lg h-64 flex transition-all duration-700"
                style={{
                  flexDirection: flexDirection as any,
                  justifyContent,
                  alignItems,
                }}
              >
                <div className="bg-[#800080] text-white font-bold p-4 rounded-md shadow-sm transition-all duration-700 m-1">
                  1
                </div>
                <div className="bg-[#00FFC5] text-white font-bold p-4 rounded-md shadow-sm transition-all duration-700 m-1">
                  2
                </div>
                <div className="bg-[#008080] text-gray-800 font-bold p-4 rounded-md shadow-sm transition-all duration-700 m-1">
                  3
                </div>
              </div>

              {isAnimating && (
                <div className="mt-4 text-sm text-gray-600 dark:text-gray-400 flex items-center">
                  <div className="animate-pulse mr-2">
                    <ArrowRight size={16} />
                  </div>
                  <span>Animating through different Flexbox layouts...</span>
                </div>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              The Code
            </h3>
            <div className="space-y-4">
              <CodeBlock code={htmlCode} language="html" title="HTML" />
              <CodeBlock code={cssCode} language="css" title="CSS" />
            </div>
            <div className="mt-6 bg-[#008080]/30 dark:bg-[#008080]/10 p-4 rounded-lg">
              <h4 className="font-medium mb-2 text-gray-800 dark:text-gray-200">
                Key Concepts:
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>Flex Container</strong>: The parent element with{" "}
                  <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">
                    display: flex
                  </code>
                </li>
                <li>
                  <strong>Flex Items</strong>: The direct children of the flex
                  container
                </li>
                <li>
                  <strong>Main Axes</strong>: Defined by{" "}
                  <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">
                    flex-direction
                  </code>
                  , either horizontal or vertical
                </li>
                <li>
                  <strong>Cross Axes</strong>: Perpendicular to the main axes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
