"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function UtilitiesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main className="container px-6 py-8 md:px-8 md:py-12">
        <div className="flex flex-col gap-2 mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900 dark:text-white">
            Flexbox Utility Classes
          </h1>
          <p className="text-slate-700 md:text-xl dark:text-slate-400">
            Ready-to-use CSS utility classes for common Flexbox patterns.
          </p>
        </div>

        <div className="space-y-12">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Container Utilities
            </h2>
            <p className="text-slate-700 dark:text-slate-400">
              These utility classes can be applied to container elements to
              create common Flexbox layouts.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: ".flex-row",
                  description:
                    "Creates a flex container with items in a row (default direction). Items will be arranged horizontally from left to right.",
                  css: "display: flex; flex-direction: row;",
                  example: `<div class="flex-row">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`,
                  color: "#800080",
                },
                {
                  name: ".flex-col",
                  description:
                    "Creates a flex container with items in a column. Items will be arranged vertically from top to bottom.",
                  css: "display: flex; flex-direction: column;",
                  example: `<div class="flex-col">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`,
                  color: "#00FFC5",
                },
                {
                  name: ".flex-wrap",
                  description:
                    "Creates a flex container with wrapping items. When items don't fit in one line, they'll wrap to the next line.",
                  css: "display: flex; flex-wrap: wrap;",
                  example: `<div class="flex-wrap">
  <!-- Items will wrap to next line when they don't fit -->
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`,
                  color: "#008080",
                },
                {
                  name: ".flex-center",
                  description:
                    "Centers items both horizontally and vertically. Perfect for centering a single item or group of items.",
                  css: "display: flex; justify-content: center; align-items: center;",
                  example: `<div class="flex-center" style="height: 200px;">
  <!-- This will be perfectly centered -->
  <div>Centered Content</div>
</div>`,
                  color: "#800080",
                },
                {
                  name: ".flex-between",
                  description:
                    "Spreads items with space between them. First item at start, last at end, equal spacing between others.",
                  css: "display: flex; justify-content: space-between;",
                  example: `<div class="flex-between">
  <div>Left</div>
  <div>Middle</div>
  <div>Right</div>
</div>`,
                  color: "#00FFC5",
                },
                {
                  name: ".flex-around",
                  description:
                    "Spreads items with equal space around them. Each item has equal space on both sides.",
                  css: "display: flex; justify-content: space-around;",
                  example: `<div class="flex-around">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`,
                  color: "#008080",
                },
                {
                  name: ".flex-evenly",
                  description:
                    "Distributes items with equal spacing between each item and the edges of the container.",
                  css: "display: flex; justify-content: space-evenly;",
                  example: `<div class="flex-evenly">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`,
                  color: "#800080",
                },
                {
                  name: ".flex-start",
                  description:
                    "Aligns items to the start of the container (default). Items will be packed at the beginning of the main axes.",
                  css: "display: flex; justify-content: flex-start;",
                  example: `<div class="flex-start">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`,
                  color: "#00FFC5",
                },
                {
                  name: ".flex-end",
                  description:
                    "Aligns items to the end of the container. Items will be packed at the end of the main axes.",
                  css: "display: flex; justify-content: flex-end;",
                  example: `<div class="flex-end">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`,
                  color: "#008080",
                },
              ].map((utility) => (
                <div
                  key={utility.name}
                  className="rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden"
                >
                  <div
                    className="p-3 border-b border-slate-200 dark:border-slate-700"
                    style={{ backgroundColor: utility.color }}
                  >
                    <h3 className="font-mono text-sm font-bold text-slate-900 dark:text-white">
                      {utility.name}
                    </h3>
                  </div>
                  <div className="p-4 bg-white dark:bg-slate-900">
                    <p className="text-sm text-slate-700 dark:text-slate-400 mb-3">
                      {utility.description}
                    </p>
                    <div className="mb-3">
                      <h4 className="text-xs font-semibold mb-1 text-slate-900 dark:text-white">
                        CSS Definition:
                      </h4>
                      <pre className="text-xs bg-slate-100 dark:bg-slate-800 p-2 rounded-md overflow-x-auto">
                        <code>{utility.css}</code>
                      </pre>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold mb-1 text-slate-900 dark:text-white">
                        Example Usage:
                      </h4>
                      <pre className="text-xs bg-slate-100 dark:bg-slate-800 p-2 rounded-md overflow-x-auto">
                        <code>{utility.example}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Item Utilities
            </h2>
            <p className="text-slate-700 dark:text-slate-400">
              These utility classes can be applied to flex items to control
              their behavior within a flex container.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: ".flex-grow",
                  description:
                    "Makes an item grow to fill available space. The item will take up any remaining space in the flex container.",
                  css: "flex-grow: 1;",
                  example: `<div class="flex-row">
  <div>Fixed width</div>
  <div class="flex-grow">I will grow to fill space</div>
  <div>Fixed width</div>
</div>`,
                  color: "#008080",
                },
                {
                  name: ".flex-grow-0",
                  description:
                    "Prevents an item from growing. The item will maintain its size and not expand to fill available space.",
                  css: "flex-grow: 0;",
                  example: `<div class="flex-row">
  <div class="flex-grow">I will grow</div>
  <div class="flex-grow-0">I won't grow</div>
  <div class="flex-grow">I will grow</div>
</div>`,
                  color: "#800080",
                },
                {
                  name: ".flex-shrink",
                  description:
                    "Allows an item to shrink if needed. When there's not enough space, this item will get smaller.",
                  css: "flex-shrink: 1;",
                  example: `<div class="flex-row" style="width: 300px;">
  <div class="flex-shrink">I can shrink</div>
  <div>Fixed content that takes space</div>
</div>`,
                  color: "#00FFC5",
                },
                {
                  name: ".flex-shrink-0",
                  description:
                    "Prevents an item from shrinking. The item will maintain its size even when space is limited.",
                  css: "flex-shrink: 0;",
                  example: `<div class="flex-row" style="width: 300px;">
  <div class="flex-shrink-0">I won't shrink</div>
  <div>I will shrink if needed</div>
</div>`,
                  color: "#008080",
                },
                {
                  name: ".flex-basis-auto",
                  description:
                    "Sets the default size of an element to auto. The item's size will be based on its content.",
                  css: "flex-basis: auto;",
                  example: `<div class="flex-row">
  <div class="flex-basis-auto">My size depends on content</div>
  <div>Other item</div>
</div>`,
                  color: "#800080",
                },
                {
                  name: ".flex-basis-0",
                  description:
                    "Sets the default size of an element to 0. The item will start with zero size before growing/shrinking.",
                  css: "flex-basis: 0;",
                  example: `<div class="flex-row">
  <div class="flex-basis-0 flex-grow">Equal width</div>
  <div class="flex-basis-0 flex-grow">Equal width</div>
</div>`,
                  color: "#00FFC5",
                },
                {
                  name: ".flex-1",
                  description:
                    "Shorthand for flex-grow: 1, flex-shrink: 1, flex-basis: 0%. Makes items grow and shrink equally.",
                  css: "flex: 1;",
                  example: `<div class="flex-row">
  <div class="flex-1">Equal space</div>
  <div class="flex-1">Equal space</div>
  <div class="flex-1">Equal space</div>
</div>`,
                  color: "#008080",
                },
                {
                  name: ".flex-auto",
                  description:
                    "Shorthand for flex-grow: 1, flex-shrink: 1, flex-basis: auto. Items grow/shrink based on their content.",
                  css: "flex: auto;",
                  example: `<div class="flex-row">
  <div class="flex-auto">I grow based on my content</div>
  <div class="flex-auto">Me too</div>
</div>`,
                  color: "#800080",
                },
                {
                  name: ".flex-none",
                  description:
                    "Shorthand for flex-grow: 0, flex-shrink: 0, flex-basis: auto. Items won't grow or shrink.",
                  css: "flex: none;",
                  example: `<div class="flex-row">
  <div class="flex-1">I will adjust</div>
  <div class="flex-none">I stay the same size</div>
</div>`,
                  color: "#00FFC5",
                },
              ].map((utility) => (
                <div
                  key={utility.name}
                  className="rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden"
                >
                  <div
                    className="p-3 border-b border-slate-200 dark:border-slate-700"
                    style={{ backgroundColor: utility.color }}
                  >
                    <h3 className="font-mono text-sm font-bold text-slate-900 dark:text-white">
                      {utility.name}
                    </h3>
                  </div>
                  <div className="p-4 bg-white dark:bg-slate-900">
                    <p className="text-sm text-slate-700 dark:text-slate-400 mb-3">
                      {utility.description}
                    </p>
                    <div className="mb-3">
                      <h4 className="text-xs font-semibold mb-1 text-slate-900 dark:text-white">
                        CSS Definition:
                      </h4>
                      <pre className="text-xs bg-slate-100 dark:bg-slate-800 p-2 rounded-md overflow-x-auto">
                        <code>{utility.css}</code>
                      </pre>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold mb-1 text-slate-900 dark:text-white">
                        Example Usage:
                      </h4>
                      <pre className="text-xs bg-slate-100 dark:bg-slate-800 p-2 rounded-md overflow-x-auto">
                        <code>{utility.example}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Alignment Utilities
            </h2>
            <p className="text-slate-700 dark:text-slate-400">
              These utility classes help with alignment of items within a flex
              container.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: ".items-start",
                  description:
                    "Aligns items to the start of the cross axes. Items will be aligned at the top of a row container or left of a column container.",
                  css: "align-items: flex-start;",
                  example: `<div class="flex-row items-start" style="height: 100px;">
  <!-- Items will align at the top -->
  <div style="height: 30px;">Short</div>
  <div style="height: 60px;">Tall</div>
</div>`,
                  color: "#008080",
                },
                {
                  name: ".items-center",
                  description:
                    "Centers items along the cross axes. Items will be vertically centered in a row container or horizontally centered in a column container.",
                  css: "align-items: center;",
                  example: `<div class="flex-row items-center" style="height: 100px;">
  <!-- Items will be vertically centered -->
  <div style="height: 30px;">Short</div>
  <div style="height: 60px;">Tall</div>
</div>`,
                  color: "#800080",
                },
                {
                  name: ".items-end",
                  description:
                    "Aligns items to the end of the cross axes. Items will be aligned at the bottom of a row container or right of a column container.",
                  css: "align-items: flex-end;",
                  example: `<div class="flex-row items-end" style="height: 100px;">
  <!-- Items will align at the bottom -->
  <div style="height: 30px;">Short</div>
  <div style="height: 60px;">Tall</div>
</div>`,
                  color: "#00FFC5",
                },
                {
                  name: ".items-stretch",
                  description:
                    "Stretches items to fill the container along the cross axes. Items will stretch vertically in a row container or horizontally in a column container.",
                  css: "align-items: stretch;",
                  example: `<div class="flex-row items-stretch" style="height: 100px;">
  <!-- Items will stretch to 100px height -->
  <div>I will stretch</div>
  <div>Me too</div>
</div>`,
                  color: "#008080",
                },
                {
                  name: ".items-baseline",
                  description:
                    "Aligns items by their text baseline. Useful when you have different text sizes but want the text to align properly.",
                  css: "align-items: baseline;",
                  example: `<div class="flex-row items-baseline">
  <div style="font-size: 12px;">Small text</div>
  <div style="font-size: 24px;">Large text</div>
</div>`,
                  color: "#800080",
                },
                {
                  name: ".self-start",
                  description:
                    "Aligns a single item to the start of the cross axes, overriding the container's align-items value.",
                  css: "align-self: flex-start;",
                  example: `<div class="flex-row items-center" style="height: 100px;">
  <div>I'm centered</div>
  <div class="self-start">I'm at the top</div>
  <div>I'm centered</div>
</div>`,
                  color: "#00FFC5",
                },
                {
                  name: ".self-center",
                  description:
                    "Centers a single item along the cross axes, overriding the container's align-items value.",
                  css: "align-self: center;",
                  example: `<div class="flex-row items-start" style="height: 100px;">
  <div>I'm at the top</div>
  <div class="self-center">I'm centered</div>
  <div>I'm at the top</div>
</div>`,
                  color: "#008080",
                },
                {
                  name: ".self-end",
                  description:
                    "Aligns a single item to the end of the cross axes, overriding the container's align-items value.",
                  css: "align-self: flex-end;",
                  example: `<div class="flex-row items-center" style="height: 100px;">
  <div>I'm centered</div>
  <div class="self-end">I'm at the bottom</div>
  <div>I'm centered</div>
</div>`,
                  color: "#800080",
                },
                {
                  name: ".self-stretch",
                  description:
                    "Stretches a single item to fill the container along the cross axes, overriding the container's align-items value.",
                  css: "align-self: stretch;",
                  example: `<div class="flex-row items-center" style="height: 100px;">
  <div style="height: 50px;">Fixed height</div>
  <div class="self-stretch">I'll stretch to 100px</div>
</div>`,
                  color: "#00FFC5",
                },
              ].map((utility) => (
                <div
                  key={utility.name}
                  className="rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden"
                >
                  <div
                    className="p-3 border-b border-slate-200 dark:border-slate-700"
                    style={{ backgroundColor: utility.color }}
                  >
                    <h3 className="font-mono text-sm font-bold text-slate-900 dark:text-white">
                      {utility.name}
                    </h3>
                  </div>
                  <div className="p-4 bg-white dark:bg-slate-900">
                    <p className="text-sm text-slate-700 dark:text-slate-400 mb-3">
                      {utility.description}
                    </p>
                    <div className="mb-3">
                      <h4 className="text-xs font-semibold mb-1 text-slate-900 dark:text-white">
                        CSS Definition:
                      </h4>
                      <pre className="text-xs bg-slate-100 dark:bg-slate-800 p-2 rounded-md overflow-x-auto">
                        <code>{utility.css}</code>
                      </pre>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold mb-1 text-slate-900 dark:text-white">
                        Example Usage:
                      </h4>
                      <pre className="text-xs bg-slate-100 dark:bg-slate-800 p-2 rounded-md overflow-x-auto">
                        <code>{utility.example}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              How to Use
            </h2>
            <p className="text-slate-700 dark:text-slate-400">
              You can copy and paste these utility classes into your CSS file,
              or use them as a reference for creating your own utility classes.
            </p>

            <div className="rounded-lg bg-white p-4 dark:bg-slate-800 border border-[#00FFC5] dark:border-slate-700 relative">
              <button
                className="absolute top-2 right-2 p-1 rounded-md bg-[#008080] hover:bg-[#008080]/80 text-slate-900"
                onClick={() => {
                  navigator.clipboard
                    .writeText(`/* Flexbox Container Utilities */
.flex-row { display: flex; flex-direction: row; }
.flex-col { display: flex; flex-direction: column; }
.flex-wrap { display: flex; flex-wrap: wrap; }
.flex-center { display: flex; justify-content: center; align-items: center; }
.flex-between { display: flex; justify-content: space-between; }
.flex-around { display: flex; justify-content: space-around; }
.flex-evenly { display: flex; justify-content: space-evenly; }
.flex-start { display: flex; justify-content: flex-start; }
.flex-end { display: flex; justify-content: flex-end; }

/* Flexbox Item Utilities */
.flex-grow { flex-grow: 1; }
.flex-grow-0 { flex-grow: 0; }
.flex-shrink { flex-shrink: 1; }
.flex-shrink-0 { flex-shrink: 0; }
.flex-basis-auto { flex-basis: auto; }
.flex-basis-0 { flex-basis: 0; }
.flex-1 { flex: 1; }
.flex-auto { flex: auto; }
.flex-none { flex: none; }

/* Alignment Utilities */
.items-start { align-items: flex-start; }
.items-center { align-items: center; }
.items-end { align-items: flex-end; }
.items-stretch { align-items: stretch; }
.items-baseline { align-items: baseline; }
.self-start { align-self: flex-start; }
.self-center { align-self: center; }
.self-end { align-self: flex-end; }
.self-stretch { align-self: stretch; }`);
                }}
              >
                <Copy className="h-4 w-4" />
              </button>
              <pre className="text-sm text-slate-900 dark:text-slate-50 overflow-x-auto">
                <code>{`/* Flexbox Container Utilities */
.flex-row { display: flex; flex-direction: row; }
.flex-col { display: flex; flex-direction: column; }
.flex-wrap { display: flex; flex-wrap: wrap; }
.flex-center { display: flex; justify-content: center; align-items: center; }
.flex-between { display: flex; justify-content: space-between; }
.flex-around { display: flex; justify-content: space-around; }
.flex-evenly { display: flex; justify-content: space-evenly; }
.flex-start { display: flex; justify-content: flex-start; }
.flex-end { display: flex; justify-content: flex-end; }

/* Flexbox Item Utilities */
.flex-grow { flex-grow: 1; }
.flex-grow-0 { flex-grow: 0; }
.flex-shrink { flex-shrink: 1; }
.flex-shrink-0 { flex-shrink: 0; }
.flex-basis-auto { flex-basis: auto; }
.flex-basis-0 { flex-basis: 0; }
.flex-1 { flex: 1; }
.flex-auto { flex: auto; }
.flex-none { flex: none; }

/* Alignment Utilities */
.items-start { align-items: flex-start; }
.items-center { align-items: center; }
.items-end { align-items: flex-end; }
.items-stretch { align-items: stretch; }
.items-baseline { align-items: baseline; }
.self-start { align-self: flex-start; }
.self-center { align-self: center; }
.self-end { align-self: flex-end; }
.self-stretch { align-self: stretch; }`}</code>
              </pre>
            </div>

            <div className="rounded-lg border border-[#00FFC5] dark:border-slate-800 p-4 bg-white dark:bg-slate-900">
              <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">
                Example Usage
              </h3>
              <pre className="text-sm bg-[#008080] dark:bg-slate-800 p-2 rounded-md overflow-x-auto">
                <code>{`<!-- HTML -->
<div class="flex-center">
  <div class="flex-1">This item will grow</div>
  <div class="flex-none">This item won't grow or shrink</div>
  <div class="self-end">This item aligns itself to the end</div>
</div>`}</code>
              </pre>

              <h3 className="text-lg font-bold mt-6 mb-2 text-slate-900 dark:text-white">
                Common Patterns
              </h3>

              <div className="space-y-4 mt-4">
                <div className="p-4 bg-[#800080] rounded-lg">
                  <h4 className="font-bold mb-2">Navbar Pattern</h4>
                  <pre className="text-sm bg-white text-gray-900 p-2 rounded-md overflow-x-auto">
                    <code>{`<nav class="flex-between items-center">
  <div class="logo">Logo</div>
  <div class="flex-row">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
  <button class="flex-none">Sign Up</button>
</nav>`}</code>
                  </pre>
                </div>

                <div className="p-4 bg-[#00FFC5] rounded-lg">
                  <h4 className="font-bold mb-2">Card Grid Pattern</h4>
                  <pre className="text-sm bg-white text-gray-900 p-2 rounded-md overflow-x-auto">
                    <code>{`<div class="flex-wrap">
  <div class="card flex-col">
    <img src="image.jpg" class="flex-none" />
    <div class="flex-1">
      <h3>Card Title</h3>
      <p>Card description</p>
    </div>
    <button class="flex-none">Action</button>
  </div>
  <!-- More cards... -->
</div>`}</code>
                  </pre>
                </div>

                <div className="p-4 bg-[#008080] rounded-lg">
                  <h4 className="font-bold mb-2">Holy Grail Layout Pattern</h4>
                  <pre className="text-sm bg-white text-gray-900 p-2 rounded-md overflow-x-auto">
                    <code>{`<div class="flex-col" style="min-height: 100vh;">
  <header class="flex-none">Header</header>
  <div class="flex-row flex-1">
    <nav class="flex-none">Navigation</nav>
    <main class="flex-1">Main Content</main>
    <aside class="flex-none">Sidebar</aside>
  </div>
  <footer class="flex-none">Footer</footer>
</div>`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-2 items-center justify-between">
          <Link href="/items">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Items Properties
            </Button>
          </Link>
          <Link href="/game">
            <Button>
              Next: Game
              <ArrowRight className="ml-2 h-4 w-4 rotate-270" />
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
