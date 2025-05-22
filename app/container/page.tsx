"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { AxesVisualization } from "@/components/axis-visualization";

export default function ContainerProperties() {
  const [flexDirection, setFlexDirection] = useState("row");
  const [justifyContent, setJustifyContent] = useState("flex-start");
  const [alignItems, setAlignItems] = useState("stretch");
  const [flexWrap, setFlexWrap] = useState("nowrap");
  const [alignContent, setAlignContent] = useState("stretch");
  const [gap, setGap] = useState("0");

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <main className="container px-6 py-8 md:px-8 md:py-12">
        <div className="flex flex-col gap-2 mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300 mb-2"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">
            Flexbox Container Properties
          </h1>
          <p className="text-slate-500 md:text-xl dark:text-slate-400">
            Learn about all the properties that can be applied to a flex
            container.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Column 1 */}
          <div className="space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold dark:text-white">
                Interactive Demo
              </h2>
              <p className="text-slate-500 dark:text-slate-400">
                Adjust the properties below to see how they affect the flex
                container.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1 dark:text-white">
                    flex-direction
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["row", "row-reverse", "column", "column-reverse"].map(
                      (direction) => (
                        <Button
                          key={direction}
                          variant={
                            flexDirection === direction ? "default" : "outline"
                          }
                          size="sm"
                          onClick={() => setFlexDirection(direction)}
                        >
                          {direction}
                        </Button>
                      )
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 dark:text-white">
                    justify-content
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "flex-start",
                      "flex-end",
                      "center",
                      "space-between",
                      "space-around",
                      "space-evenly",
                    ].map((justify) => (
                      <Button
                        key={justify}
                        variant={
                          justifyContent === justify ? "default" : "outline"
                        }
                        size="sm"
                        onClick={() => setJustifyContent(justify)}
                      >
                        {justify}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 dark:text-white">
                    align-items
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "flex-start",
                      "flex-end",
                      "center",
                      "baseline",
                      "stretch",
                    ].map((align) => (
                      <Button
                        key={align}
                        variant={alignItems === align ? "default" : "outline"}
                        size="sm"
                        onClick={() => setAlignItems(align)}
                      >
                        {align}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 dark:text-white">
                    flex-wrap
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["nowrap", "wrap", "wrap-reverse"].map((wrap) => (
                      <Button
                        key={wrap}
                        variant={flexWrap === wrap ? "default" : "outline"}
                        size="sm"
                        onClick={() => setFlexWrap(wrap)}
                      >
                        {wrap}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 dark:text-white">
                    align-content
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "flex-start",
                      "flex-end",
                      "center",
                      "space-between",
                      "space-around",
                      "stretch",
                    ].map((alignC) => (
                      <Button
                        key={alignC}
                        variant={
                          alignContent === alignC ? "default" : "outline"
                        }
                        size="sm"
                        onClick={() => setAlignContent(alignC)}
                      >
                        {alignC}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 dark:text-white">
                    gap
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["0", "8px", "16px", "24px", "32px"].map((gapValue) => (
                      <Button
                        key={gapValue}
                        variant={gap === gapValue ? "default" : "outline"}
                        size="sm"
                        onClick={() => setGap(gapValue)}
                      >
                        {gapValue}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold dark:text-white">
                Generated Code
              </h2>
              <div className="rounded-lg bg-slate-100 p-4 dark:bg-slate-800">
                <pre className="text-sm text-slate-900 dark:text-slate-50">
                  <code>{`<!-- HTML -->
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
  <div class="item">7</div>
  <div class="item">8</div>
</div>

/* CSS */
.container {
  display: flex;
  flex-direction: ${flexDirection};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  flex-wrap: ${flexWrap};
  align-content: ${alignContent};
  gap: ${gap};
}`}</code>
                </pre>
              </div>
            </section>
            {/* Flex direction sectioon move to other column */}
            {/* <section className="space-y-4">
              <h2 className="text-2xl font-bold dark:text-white">Main Axes & Cross Axes</h2>
              <p className="text-slate-500 dark:text-slate-400">
                Understanding the main axes and cross axes is crucial for mastering Flexbox. The main axes is defined by
                flex-direction, while the cross axes runs perpendicular to it.
              </p>
              <AxesVisualization flexDirection={flexDirection as any} />
            </section> */}
          </div>

          {/* Column 2 */}
          <div className="space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold dark:text-white">Preview</h2>
              <div
                className="flex border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 p-4 h-80 overflow-auto transition-all duration-500"
                style={{
                  flexDirection: flexDirection as any,
                  justifyContent,
                  alignItems,
                  flexWrap: flexWrap as any,
                  alignContent,
                  gap,
                }}
              >
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className={cn(
                      "flex items-center justify-center rounded-md text-white transition-all duration-500",
                      i % 3 === 0
                        ? "w-16 h-16 bg-slate-900 dark:bg-slate-700"
                        : i % 3 === 1
                        ? "w-16 h-24 bg-slate-800 dark:bg-slate-600"
                        : "w-16 h-20 bg-slate-700 dark:bg-slate-500"
                    )}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold dark:text-white">
                Main Axes & Cross Axes
              </h2>
              <p className="text-slate-500 dark:text-slate-400">
                Understanding the main axes and cross axes is crucial for
                mastering Flexbox. The main axes is defined by flex-direction,
                while the cross axes runs perpendicular to it.
              </p>
              <AxesVisualization flexDirection={flexDirection as any} />
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold dark:text-white">
                Detailed Explanations
              </h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="display-flex">
                  <AccordionTrigger className="text-left font-medium">
                    display: flex
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-slate-500 dark:text-slate-400 mb-2">
                      This property defines a flex container, enabling a flex
                      context for all its direct children.
                    </p>
                    <div className="rounded-lg bg-slate-100 p-3 dark:bg-slate-800">
                      <pre className="text-sm text-slate-900 dark:text-slate-50">
                        <code>{`<!-- HTML -->
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>

/* CSS */
.container {
  display: flex;
}`}</code>
                      </pre>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="flex-direction">
                  <AccordionTrigger className="text-left font-medium">
                    flex-direction
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-slate-500 dark:text-slate-400 mb-2">
                      This establishes the main-axes, defining the direction
                      flex items are placed in the flex container.
                    </p>
                    <ul className="list-disc pl-5 mb-2 text-slate-500 dark:text-slate-400 space-y-1">
                      <li>
                        <strong>row (default):</strong> left to right
                      </li>
                      <li>
                        <strong>row-reverse:</strong> right to left
                      </li>
                      <li>
                        <strong>column:</strong> top to bottom
                      </li>
                      <li>
                        <strong>column-reverse:</strong> bottom to top
                      </li>
                    </ul>
                    <div className="rounded-lg bg-slate-100 p-3 dark:bg-slate-800">
                      <pre className="text-sm text-slate-900 dark:text-slate-50">
                        <code>{`<!-- HTML -->
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>

/* CSS */
.container {
  display: flex;
  flex-direction: row | row-reverse | column | column-reverse;
}`}</code>
                      </pre>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="flex-wrap">
                  <AccordionTrigger className="text-left font-medium">
                    flex-wrap
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-slate-500 dark:text-slate-400 mb-2">
                      By default, flex items will all try to fit onto one line.
                      You can change that and allow the items to wrap as needed
                      with this property.
                    </p>
                    <ul className="list-disc pl-5 mb-2 text-slate-500 dark:text-slate-400 space-y-1">
                      <li>
                        <strong>nowrap (default):</strong> all flex items will
                        be on one line
                      </li>
                      <li>
                        <strong>wrap:</strong> flex items will wrap onto
                        multiple lines, from top to bottom
                      </li>
                      <li>
                        <strong>wrap-reverse:</strong> flex items will wrap onto
                        multiple lines from bottom to top
                      </li>
                    </ul>
                    <div className="rounded-lg bg-slate-100 p-3 dark:bg-slate-800">
                      <pre className="text-sm text-slate-900 dark:text-slate-50">
                        <code>{`<!-- HTML -->
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <!-- More items -->
</div>

/* CSS */
.container {
  display: flex;
  flex-wrap: nowrap | wrap | wrap-reverse;
}`}</code>
                      </pre>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="justify-content">
                  <AccordionTrigger className="text-left font-medium">
                    justify-content
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-slate-500 dark:text-slate-400 mb-2">
                      This defines the alignment along the main axes. It helps
                      distribute extra free space leftover when either all the
                      flex items on a line are inflexible, or are flexible but
                      have reached their maximum size.
                    </p>
                    <ul className="list-disc pl-5 mb-2 text-slate-500 dark:text-slate-400 space-y-1">
                      <li>
                        <strong>flex-start (default):</strong> items are packed
                        toward the start of the flex-direction
                      </li>
                      <li>
                        <strong>flex-end:</strong> items are packed toward the
                        end of the flex-direction
                      </li>
                      <li>
                        <strong>center:</strong> items are centered along the
                        line
                      </li>
                      <li>
                        <strong>space-between:</strong> items are evenly
                        distributed in the line; first item is on the start
                        line, last item on the end line
                      </li>
                      <li>
                        <strong>space-around:</strong> items are evenly
                        distributed with equal space around them
                      </li>
                      <li>
                        <strong>space-evenly:</strong> items are distributed so
                        that the spacing between any two items (and the space to
                        the edges) is equal
                      </li>
                    </ul>
                    <div className="rounded-lg bg-slate-100 p-3 dark:bg-slate-800">
                      <pre className="text-sm text-slate-900 dark:text-slate-50">
                        <code>{`<!-- HTML -->
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>

/* CSS */
.container {
  display: flex;
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
}`}</code>
                      </pre>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="align-items">
                  <AccordionTrigger className="text-left font-medium">
                    align-items
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-slate-500 dark:text-slate-400 mb-2">
                      This defines the default behavior for how flex items are
                      laid out along the cross axes on the current line. Think
                      of it as the justify-content version for the cross-axes.
                    </p>
                    <ul className="list-disc pl-5 mb-2 text-slate-500 dark:text-slate-400 space-y-1">
                      <li>
                        <strong>stretch (default):</strong> stretch to fill the
                        container (still respect min-width/max-width)
                      </li>
                      <li>
                        <strong>flex-start:</strong> items are placed at the
                        start of the cross axes
                      </li>
                      <li>
                        <strong>flex-end:</strong> items are placed at the end
                        of the cross axes
                      </li>
                      <li>
                        <strong>center:</strong> items are centered in the
                        cross-axes
                      </li>
                      <li>
                        <strong>baseline:</strong> items are aligned such as
                        their baselines align
                      </li>
                    </ul>
                    <div className="rounded-lg bg-slate-100 p-3 dark:bg-slate-800">
                      <pre className="text-sm text-slate-900 dark:text-slate-50">
                        <code>{`<!-- HTML -->
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>

/* CSS */
.container {
  display: flex;
  align-items: stretch | flex-start | flex-end | center | baseline;
}`}</code>
                      </pre>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="align-content">
                  <AccordionTrigger className="text-left font-medium">
                    align-content
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-slate-500 dark:text-slate-400 mb-2">
                      This aligns a flex container's lines within when there is
                      extra space in the cross-axes, similar to how
                      justify-content aligns individual items within the
                      main-axes.
                    </p>
                    <p className="text-slate-500 dark:text-slate-400 mb-2">
                      <strong>Note:</strong> This property only takes effect on
                      multi-line flexible containers, where flex-wrap is set to
                      either wrap or wrap-reverse).
                    </p>
                    <ul className="list-disc pl-5 mb-2 text-slate-500 dark:text-slate-400 space-y-1">
                      <li>
                        <strong>stretch (default):</strong> lines stretch to
                        take up the remaining space
                      </li>
                      <li>
                        <strong>flex-start:</strong> lines packed to the start
                        of the container
                      </li>
                      <li>
                        <strong>flex-end:</strong> lines packed to the end of
                        the container
                      </li>
                      <li>
                        <strong>center:</strong> lines packed to the center of
                        the container
                      </li>
                      <li>
                        <strong>space-between:</strong> lines evenly
                        distributed; the first line is at the start of the
                        container while the last one is at the end
                      </li>
                      <li>
                        <strong>space-around:</strong> lines evenly distributed
                        with equal space around each line
                      </li>
                    </ul>
                    <div className="rounded-lg bg-slate-100 p-3 dark:bg-slate-800">
                      <pre className="text-sm text-slate-900 dark:text-slate-50">
                        <code>{`<!-- HTML -->
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <!-- More items that will wrap -->
</div>

/* CSS */
.container {
  display: flex;
  flex-wrap: wrap;
  align-content: stretch | flex-start | flex-end | center | space-between | space-around;
}`}</code>
                      </pre>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="gap">
                  <AccordionTrigger className="text-left font-medium">
                    gap, row-gap, column-gap
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-slate-500 dark:text-slate-400 mb-2">
                      The gap property explicitly controls the space between
                      flex items. It applies that spacing only between items not
                      on the outer edges.
                    </p>
                    <ul className="list-disc pl-5 mb-2 text-slate-500 dark:text-slate-400 space-y-1">
                      <li>
                        <strong>gap:</strong> a shorthand for row-gap and
                        column-gap
                      </li>
                      <li>
                        <strong>row-gap:</strong> specifies the gap between rows
                      </li>
                      <li>
                        <strong>column-gap:</strong> specifies the gap between
                        columns
                      </li>
                    </ul>
                    <div className="rounded-lg bg-slate-100 p-3 dark:bg-slate-800">
                      <pre className="text-sm text-slate-900 dark:text-slate-50">
                        <code>{`<!-- HTML -->
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>

/* CSS */
.container {
  display: flex;
  gap: 10px;
  gap: 10px 20px; /* row-gap column gap */
  row-gap: 10px;
  column-gap: 20px;
}`}</code>
                      </pre>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-2 items-center justify-between">
          <Link href="/axes">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Axes Page
            </Button>
          </Link>
          <Link href="/items">
            <Button>
              Next: Item Properties
              <ArrowRight className="ml-2 h-4 w-4 rotate-270" />
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
