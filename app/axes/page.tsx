import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AxesVisualization } from "@/components/axis-visualization";

export default function AxesPage() {
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
            Main Axes & Cross Axes
          </h1>
          <p className="text-slate-500 md:text-xl dark:text-slate-400">
            Understanding the fundamental concept of main and cross axes in
            Flexbox layouts.
          </p>
        </div>

        <div className="space-y-12">
          <section className="space-y-6">
            <h2 className="text-2xl font-bold dark:text-white">
              What are the Main Axes and Cross Axes?
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              In Flexbox, the main axes and cross axes are the two primary axes
              that determine how flex items are laid out:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-500 dark:text-slate-400">
              <li>
                <strong className="text-slate-900 dark:text-white">
                  Main Axes:
                </strong>{" "}
                The primary axes along which flex items are laid out. It's
                defined by the flex-direction property.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white">
                  Cross Axes:
                </strong>{" "}
                The axes perpendicular to the main axes. If the main axes is
                horizontal, the cross axes is vertical, and vice versa.
              </li>
            </ul>

            <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6">
              <h3 className="text-lg font-bold mb-4 dark:text-white">
                Interactive Axes Visualization
              </h3>
              <p className="text-slate-500 dark:text-slate-400 mb-6">
                See how the main axes and cross axes change based on the
                flex-direction property.
              </p>

              <Tabs defaultValue="row">
                <TabsList className="grid grid-cols-4 mb-6">
                  <TabsTrigger value="row">row</TabsTrigger>
                  <TabsTrigger value="row-reverse">row-reverse</TabsTrigger>
                  <TabsTrigger value="column">column</TabsTrigger>
                  <TabsTrigger value="column-reverse">
                    column-reverse
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="row" className="mt-0">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <AxesVisualization flexDirection="row" />
                      <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                        With{" "}
                        <code className="text-xs bg-slate-100 dark:bg-slate-800 p-1 rounded">
                          flex-direction: row
                        </code>
                        , the main axes runs horizontally from left to right,
                        and the cross axes runs vertically from top to bottom.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-medium dark:text-white">
                        Properties that work on the main axes:
                      </h4>
                      <ul className="list-disc pl-6 space-y-1 text-sm text-slate-500 dark:text-slate-400">
                        <li>
                          <code className="text-xs bg-slate-100 dark:bg-slate-800 p-1 rounded">
                            justify-content
                          </code>{" "}
                          - Aligns items along the main axes
                        </li>
                        <li>
                          <code className="text-xs bg-slate-100 dark:bg-slate-800 p-1 rounded">
                            flex-grow
                          </code>{" "}
                          - Controls how items grow along the main axes
                        </li>
                        <li>
                          <code className="text-xs bg-slate-100 dark:bg-slate-800 p-1 rounded">
                            flex-shrink
                          </code>{" "}
                          - Controls how items shrink along the main axes
                        </li>
                        <li>
                          <code className="text-xs bg-slate-100 dark:bg-slate-800 p-1 rounded">
                            flex-basis
                          </code>{" "}
                          - Sets the initial size of items along the main axes
                        </li>
                      </ul>

                      <h4 className="font-medium dark:text-white">
                        Properties that work on the cross axes:
                      </h4>
                      <ul className="list-disc pl-6 space-y-1 text-sm text-slate-500 dark:text-slate-400">
                        <li>
                          <code className="text-xs bg-slate-100 dark:bg-slate-800 p-1 rounded">
                            align-items
                          </code>{" "}
                          - Aligns all items along the cross axes
                        </li>
                        <li>
                          <code className="text-xs bg-slate-100 dark:bg-slate-800 p-1 rounded">
                            align-self
                          </code>{" "}
                          - Aligns individual items along the cross axes
                        </li>
                        <li>
                          <code className="text-xs bg-slate-100 dark:bg-slate-800 p-1 rounded">
                            align-content
                          </code>{" "}
                          - Aligns multiple lines along the cross axes (when
                          flex-wrap is enabled)
                        </li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="row-reverse" className="mt-0">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <AxesVisualization flexDirection="row-reverse" />
                      <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                        With{" "}
                        <code className="text-xs bg-slate-100 dark:bg-slate-800 p-1 rounded">
                          flex-direction: row-reverse
                        </code>
                        , the main axes runs horizontally from right to left,
                        and the cross axes runs vertically from top to bottom.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-medium dark:text-white">
                        Properties that work on the main axes:
                      </h4>
                      <ul className="list-disc pl-6 space-y-1 text-sm text-slate-500 dark:text-slate-400">
                        <li>
                          <code className="text-xs bg-slate-100 dark:bg-slate-800 p-1 rounded">
                            justify-content
                          </code>{" "}
                          - Aligns items along the main axes
                        </li>
                        <li>
                          <code className="text-xs bg-slate-100 dark:bg-slate-800 p-1 rounded">
                            flex-grow
                          </code>{" "}
                          - Controls how items grow along the main axes
                        </li>
                        <li>
                          <code className="text-xs bg-slate-100 dark:bg-slate-800 p-1 rounded">
                            flex-shrink
                          </code>{" "}
                          - Controls how items shrink along the main axes
                        </li>
                        <li>
                          <code className="text-xs bg-slate-100 dark:bg-slate-800 p-1 rounded">
                            flex-basis
                          </code>{" "}
                          - Sets the initial size of items along the main axes
                        </li>
                      </ul>

                      <h4 className="font-medium dark:text-white">
                        Properties that work on the cross axes:
                      </h4>
                      <ul className="list-disc pl-6 space-y-1 text-sm text-slate-500 dark:text-slate-400">
                        <li>
                          <code className="text-xs bg-slate-100 dark:bg-slate-800 p-1 rounded">
                            align-items
                          </code>{" "}
                          - Aligns all items along the cross axes
                        </li>
                        <li>
                          <code className="text-xs bg-slate-100 dark:bg-slate-800 p-1 rounded">
                            align-self
                          </code>{" "}
                          - Aligns individual items along the cross axes
                        </li>
                        <li>
                          <code className="text-xs bg-slate-100 dark:bg-slate-800 p-1 rounded">
                            align-content
                          </code>{" "}
                          - Aligns multiple lines along the cross axes (when
                          flex-wrap is enabled)
                        </li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="column" className="mt-0">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <AxesVisualization flexDirection="column" />
                      <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                        With{" "}
                        <code className="text-xs bg-slate-100 dark:bg-slate-800 p-1 rounded">
                          flex-direction: column
                        </code>
                        , the main axes runs vertically from top to bottom, and
                        the cross axes runs horizontally from left to right.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-medium dark:text-white">
                        Properties that work on the main axes:
                      </h4>
                      <ul className="list-disc pl-6 space-y-1 text-sm text-slate-500 dark:text-slate-400">
                        <li>
                          <code className="text-xs bg-slate-100 dark:bg-slate-800 p-1 rounded">
                            justify-content
                          </code>{" "}
                          - Aligns items along the main axes (vertically in this
                          case)
                        </li>
                        <li>
                          <code className="text-xs bg-slate-100 dark:bg-slate-800 p-1 rounded">
                            flex-grow
                          </code>{" "}
                          - Controls how items grow along the main axes
                          (vertically)
                        </li>
                        <li>
                          <code className="text-xs bg-slate-100 dark:bg-slate-800 p-1 rounded">
                            flex-shrink
                          </code>{" "}
                          - Controls how items shrink along the main axes
                          (vertically)
                        </li>
                        <li>
                          <code className="text-xs bg-slate-100 dark:bg-slate-800 p-1 rounded">
                            flex-basis
                          </code>{" "}
                          - Sets the initial size of items along the main axes
                          (height in this case)
                        </li>
                      </ul>

                      <h4 className="font-medium dark:text-white">
                        Properties that work on the cross axes:
                      </h4>
                      <ul className="list-disc pl-6 space-y-1 text-sm text-slate-500 dark:text-slate-400">
                        <li>
                          <code className="text-xs bg-slate-100 dark:bg-slate-800 p-1 rounded">
                            align-items
                          </code>{" "}
                          - Aligns all items along the cross axes (horizontally)
                        </li>
                        <li>
                          <code className="text-xs bg-slate-100 dark:bg-slate-800 p-1 rounded">
                            align-self
                          </code>{" "}
                          - Aligns individual items along the cross axes
                          (horizontally)
                        </li>
                        <li>
                          <code className="text-xs bg-slate-100 dark:bg-slate-800 p-1 rounded">
                            align-content
                          </code>{" "}
                          - Aligns multiple lines along the cross axes (when
                          flex-wrap is enabled)
                        </li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="column-reverse" className="mt-0">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <AxesVisualization flexDirection="column-reverse" />
                      <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                        With{" "}
                        <code className="text-xs bg-slate-100 dark:bg-slate-800 p-1 rounded">
                          flex-direction: column-reverse
                        </code>
                        , the main axes runs vertically from bottom to top, and
                        the cross axes runs horizontally from left to right.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-medium dark:text-white">
                        Properties that work on the main axes:
                      </h4>
                      <ul className="list-disc pl-6 space-y-1 text-sm text-slate-500 dark:text-slate-400">
                        <li>
                          <code className="text-xs bg-slate-100 dark:bg-slate-800 p-1 rounded">
                            justify-content
                          </code>{" "}
                          - Aligns items along the main axes (vertically in this
                          case)
                        </li>
                        <li>
                          <code className="text-xs bg-slate-100 dark:bg-slate-800 p-1 rounded">
                            flex-grow
                          </code>{" "}
                          - Controls how items grow along the main axes
                          (vertically)
                        </li>
                        <li>
                          <code className="text-xs bg-slate-100 dark:bg-slate-800 p-1 rounded">
                            flex-shrink
                          </code>{" "}
                          - Controls how items shrink along the main axes
                          (vertically)
                        </li>
                        <li>
                          <code className="text-xs bg-slate-100 dark:bg-slate-800 p-1 rounded">
                            flex-basis
                          </code>{" "}
                          - Sets the initial size of items along the main axes
                          (height in this case)
                        </li>
                      </ul>

                      <h4 className="font-medium dark:text-white">
                        Properties that work on the cross axes:
                      </h4>
                      <ul className="list-disc pl-6 space-y-1 text-sm text-slate-500 dark:text-slate-400">
                        <li>
                          <code className="text-xs bg-slate-100 dark:bg-slate-800 p-1 rounded">
                            align-items
                          </code>{" "}
                          - Aligns all items along the cross axes (horizontally)
                        </li>
                        <li>
                          <code className="text-xs bg-slate-100 dark:bg-slate-800 p-1 rounded">
                            align-self
                          </code>{" "}
                          - Aligns individual items along the cross axes
                          (horizontally)
                        </li>
                        <li>
                          <code className="text-xs bg-slate-100 dark:bg-slate-800 p-1 rounded">
                            align-content
                          </code>{" "}
                          - Aligns multiple lines along the cross axes (when
                          flex-wrap is enabled)
                        </li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold dark:text-white">
              Why Understanding axes is Important
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              Understanding the main axes and cross axes is crucial for
              mastering Flexbox because:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-500 dark:text-slate-400">
              <li>
                <strong className="text-slate-900 dark:text-white">
                  Property Selection:
                </strong>{" "}
                Different properties affect different axes. For example,{" "}
                <code className="text-xs bg-slate-100 dark:bg-slate-800 p-1 rounded">
                  justify-content
                </code>{" "}
                works on the main axes, while{" "}
                <code className="text-xs bg-slate-100 dark:bg-slate-800 p-1 rounded">
                  align-items
                </code>{" "}
                works on the cross axes.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white">
                  Layout Direction:
                </strong>{" "}
                Changing{" "}
                <code className="text-xs bg-slate-100 dark:bg-slate-800 p-1 rounded">
                  flex-direction
                </code>{" "}
                swaps which axes is the main axes and which is the cross axes.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white">
                  Responsive Design:
                </strong>{" "}
                You can easily switch between row and column layouts for
                different screen sizes by changing the main axes.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white">
                  Debugging:
                </strong>{" "}
                When layouts don't behave as expected, understanding which
                properties affect which axes helps identify the issue.
              </li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold dark:text-white">
              HTML and CSS Examples
            </h2>
            <div className="rounded-lg bg-slate-100 p-4 dark:bg-slate-800">
              <pre className="text-sm text-slate-900 dark:text-slate-50 overflow-x-auto">
                <code>{`<!-- HTML -->
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>

/* CSS - Row (default) */
.container {
  display: flex;
  /* Main Axes: horizontal (left to right) */
  /* Cross Axes: vertical (top to bottom) */
  
  /* Main Axes alignment */
  justify-content: space-between;
  
  /* Cross Axes alignment */
  align-items: center;
}

/* CSS - Column */
.container {
  display: flex;
  flex-direction: column;
  /* Main Axes: vertical (top to bottom) */
  /* Cross Axes: horizontal (left to right) */
  
  /* Main Axes alignment (now vertical) */
  justify-content: space-between;
  
  /* Cross Axes alignment (now horizontal) */
  align-items: center;
}`}</code>
              </pre>
            </div>
          </section>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-2 items-center justify-between">
          <Link href="/">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <Link href="/container">
            <Button>
              Next: Container Properteis
              <ArrowRight className="ml-2 h-4 w-4 rotate-270" />
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
