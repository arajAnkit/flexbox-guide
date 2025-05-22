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
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

export default function ItemProperties() {
  const [order, setOrder] = useState(0);
  const [flexGrow, setFlexGrow] = useState(0);
  const [flexShrink, setFlexShrink] = useState(1);
  const [flexBasis, setFlexBasis] = useState("auto");
  const [alignSelf, setAlignSelf] = useState("auto");

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <main className="container px-6 py-8 md:px-8 md:py-12">
        <div className="flex flex-col gap-2 mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">
            Flexbox Item Properties
          </h1>
          <p className="text-slate-500 md:text-xl dark:text-slate-400">
            Learn about all the properties that can be applied to flex items.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold dark:text-white">
                Interactive Demo
              </h2>
              <p className="text-slate-500 dark:text-slate-400">
                Adjust the properties below to see how they affect the
                highlighted flex item.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1 dark:text-white">
                    order
                  </label>
                  <div className="flex items-center gap-4">
                    <Slider
                      value={[order]}
                      min={-5}
                      max={5}
                      step={1}
                      onValueChange={(value) => setOrder(value[0])}
                      className="w-full"
                    />
                    <span className="text-sm font-medium w-8 text-center dark:text-white">
                      {order}
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 dark:text-white">
                    flex-grow
                  </label>
                  <div className="flex items-center gap-4">
                    <Slider
                      value={[flexGrow]}
                      min={0}
                      max={5}
                      step={1}
                      onValueChange={(value) => setFlexGrow(value[0])}
                      className="w-full"
                    />
                    <span className="text-sm font-medium w-8 text-center dark:text-white">
                      {flexGrow}
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 dark:text-white">
                    flex-shrink
                  </label>
                  <div className="flex items-center gap-4">
                    <Slider
                      value={[flexShrink]}
                      min={0}
                      max={5}
                      step={1}
                      onValueChange={(value) => setFlexShrink(value[0])}
                      className="w-full"
                    />
                    <span className="text-sm font-medium w-8 text-center dark:text-white">
                      {flexShrink}
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 dark:text-white">
                    flex-basis
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["auto", "0", "100px", "200px", "50%"].map((basis) => (
                      <Button
                        key={basis}
                        variant={flexBasis === basis ? "default" : "outline"}
                        size="sm"
                        onClick={() => setFlexBasis(basis)}
                      >
                        {basis}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 dark:text-white">
                    align-self
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "auto",
                      "flex-start",
                      "flex-end",
                      "center",
                      "baseline",
                      "stretch",
                    ].map((align) => (
                      <Button
                        key={align}
                        variant={alignSelf === align ? "default" : "outline"}
                        size="sm"
                        onClick={() => setAlignSelf(align)}
                      >
                        {align}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold dark:text-white">
                Generated CSS
              </h2>
              <div className="rounded-lg bg-slate-100 p-4 dark:bg-slate-800">
                <pre className="text-sm text-slate-900 dark:text-slate-50">
                  <code>{`.flex-item {
  order: ${order};
  flex-grow: ${flexGrow};
  flex-shrink: ${flexShrink};
  flex-basis: ${flexBasis};
  align-self: ${alignSelf};
  
  /* Shorthand */
  flex: ${flexGrow} ${flexShrink} ${flexBasis};
}`}</code>
                </pre>
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold dark:text-white">Preview</h2>
              <div className="flex border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 p-4 h-80">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className={cn(
                      "flex items-center justify-center rounded-md text-white",
                      i === 2
                        ? "bg-slate-900 dark:bg-slate-700 border-2 border-yellow-400"
                        : "bg-slate-700 dark:bg-slate-600"
                    )}
                    style={
                      i === 2
                        ? {
                            order,
                            flexGrow,
                            flexShrink,
                            flexBasis,
                            alignSelf,
                          }
                        : {
                            width: "60px",
                            height: "60px",
                          }
                    }
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                The yellow-bordered item (3) has the custom flex properties
                applied.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold dark:text-white">
                Detailed Explanations
              </h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="order">
                  <AccordionTrigger className="text-left font-medium">
                    order
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-slate-500 dark:text-slate-400 mb-2">
                      By default, flex items are laid out in the source order.
                      However, the order property controls the order in which
                      they appear in the flex container.
                    </p>
                    <ul className="list-disc pl-5 mb-2 text-slate-500 dark:text-slate-400 space-y-1">
                      <li>
                        Items with the same order value are laid out in the
                        source order
                      </li>
                      <li>Negative values are allowed</li>
                      <li>Default value is 0</li>
                    </ul>
                    <div className="rounded-lg bg-slate-100 p-3 dark:bg-slate-800">
                      <pre className="text-sm text-slate-900 dark:text-slate-50">
                        <code>{`.item {
  order: 5; /* default is 0 */
}`}</code>
                      </pre>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="flex-grow">
                  <AccordionTrigger className="text-left font-medium">
                    flex-grow
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-slate-500 dark:text-slate-400 mb-2">
                      This defines the ability for a flex item to grow if
                      necessary. It accepts a unitless value that serves as a
                      proportion. It dictates what amount of the available space
                      inside the flex container the item should take up.
                    </p>
                    <ul className="list-disc pl-5 mb-2 text-slate-500 dark:text-slate-400 space-y-1">
                      <li>
                        If all items have flex-grow set to 1, the remaining
                        space in the container will be distributed equally to
                        all children
                      </li>
                      <li>
                        If one of the children has a value of 2, that child
                        would take up twice as much of the space as the others
                      </li>
                      <li>Default value is 0 (items do not grow)</li>
                    </ul>
                    <div className="rounded-lg bg-slate-100 p-3 dark:bg-slate-800">
                      <pre className="text-sm text-slate-900 dark:text-slate-50">
                        <code>{`.item {
  flex-grow: 4; /* default is 0 */
}`}</code>
                      </pre>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="flex-shrink">
                  <AccordionTrigger className="text-left font-medium">
                    flex-shrink
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-slate-500 dark:text-slate-400 mb-2">
                      This defines the ability for a flex item to shrink if
                      necessary. Negative numbers are invalid.
                    </p>
                    <ul className="list-disc pl-5 mb-2 text-slate-500 dark:text-slate-400 space-y-1">
                      <li>
                        If all items have flex-shrink set to 1, and one item has
                        flex-shrink set to 0, the item with 0 will not shrink
                      </li>
                      <li>Default value is 1 (items will shrink if needed)</li>
                      <li>Setting to 0 will prevent shrinking</li>
                    </ul>
                    <div className="rounded-lg bg-slate-100 p-3 dark:bg-slate-800">
                      <pre className="text-sm text-slate-900 dark:text-slate-50">
                        <code>{`.item {
  flex-shrink: 3; /* default is 1 */
}`}</code>
                      </pre>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="flex-basis">
                  <AccordionTrigger className="text-left font-medium">
                    flex-basis
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-slate-500 dark:text-slate-400 mb-2">
                      This defines the default size of an element before the
                      remaining space is distributed. It can be a length (e.g.
                      20%, 5rem, etc.) or a keyword.
                    </p>
                    <ul className="list-disc pl-5 mb-2 text-slate-500 dark:text-slate-400 space-y-1">
                      <li>
                        <strong>auto:</strong> (default) looks at the width or
                        height property
                      </li>
                      <li>
                        <strong>content:</strong> sizes based on the item's
                        content
                      </li>
                      <li>
                        If set to 0, the extra space around content isn't
                        factored in
                      </li>
                    </ul>
                    <div className="rounded-lg bg-slate-100 p-3 dark:bg-slate-800">
                      <pre className="text-sm text-slate-900 dark:text-slate-50">
                        <code>{`.item {
  flex-basis: 100px; /* default is auto */
}`}</code>
                      </pre>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="flex">
                  <AccordionTrigger className="text-left font-medium">
                    flex (shorthand)
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-slate-500 dark:text-slate-400 mb-2">
                      This is the shorthand for flex-grow, flex-shrink and
                      flex-basis combined. The second and third parameters
                      (flex-shrink and flex-basis) are optional.
                    </p>
                    <ul className="list-disc pl-5 mb-2 text-slate-500 dark:text-slate-400 space-y-1">
                      <li>
                        <strong>flex: 0 1 auto</strong> is the default
                      </li>
                      <li>
                        <strong>flex: 1</strong> is equivalent to flex: 1 1 0%
                      </li>
                      <li>
                        <strong>flex: auto</strong> is equivalent to flex: 1 1
                        auto
                      </li>
                      <li>
                        <strong>flex: none</strong> is equivalent to flex: 0 0
                        auto
                      </li>
                    </ul>
                    <div className="rounded-lg bg-slate-100 p-3 dark:bg-slate-800">
                      <pre className="text-sm text-slate-900 dark:text-slate-50">
                        <code>{`.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}

/* Examples */
.item {
  flex: 1; /* flex-grow: 1, flex-shrink: 1, flex-basis: 0% */
}
.item {
  flex: 2 1 200px; /* flex-grow: 2, flex-shrink: 1, flex-basis: 200px */
}`}</code>
                      </pre>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="align-self">
                  <AccordionTrigger className="text-left font-medium">
                    align-self
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-slate-500 dark:text-slate-400 mb-2">
                      This allows the default alignment (or the one specified by
                      align-items) to be overridden for individual flex items.
                    </p>
                    <ul className="list-disc pl-5 mb-2 text-slate-500 dark:text-slate-400 space-y-1">
                      <li>
                        <strong>auto:</strong> (default) inherit the align-items
                        value from parent
                      </li>
                      <li>
                        <strong>flex-start:</strong> align to the start of the
                        cross axes
                      </li>
                      <li>
                        <strong>flex-end:</strong> align to the end of the cross
                        axes
                      </li>
                      <li>
                        <strong>center:</strong> align at the center of the
                        cross axes
                      </li>
                      <li>
                        <strong>baseline:</strong> align along text baseline
                      </li>
                      <li>
                        <strong>stretch:</strong> stretch to fill the container
                        (respecting min/max width/height)
                      </li>
                    </ul>
                    <div className="rounded-lg bg-slate-100 p-3 dark:bg-slate-800">
                      <pre className="text-sm text-slate-900 dark:text-slate-50">
                        <code>{`.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
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
          <Link href="/container">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Container Properties
            </Button>
          </Link>
          <Link href="/utilities">
            <Button>
              Next: Utilities
              <ArrowRight className="ml-2 h-4 w-4 rotate-270" />
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
