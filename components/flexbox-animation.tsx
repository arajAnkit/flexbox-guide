"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowDown } from "lucide-react"

export function FlexboxAnimation() {
  const [animationState, setAnimationState] = useState<
    "initial" | "justify-content" | "align-items" | "flex-direction" | "flex-wrap"
  >("initial")
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isPlaying) {
      const states: Array<typeof animationState> = [
        "initial",
        "justify-content",
        "align-items",
        "flex-direction",
        "flex-wrap",
      ]

      const currentIndex = states.indexOf(animationState)
      const nextIndex = (currentIndex + 1) % states.length

      timeout = setTimeout(() => {
        setAnimationState(states[nextIndex])
      }, 2000)
    }

    return () => clearTimeout(timeout)
  }, [animationState, isPlaying])

  const getContainerStyle = () => {
    const baseStyle =
      "flex p-4 bg-[#800080] dark:bg-slate-900 rounded-lg border border-[#00FFC5] dark:border-slate-800 h-40 transition-all duration-1000 relative"

    switch (animationState) {
      case "initial":
        return `${baseStyle} justify-start items-start`
      case "justify-content":
        return `${baseStyle} justify-space-between items-start`
      case "align-items":
        return `${baseStyle} justify-space-between items-center`
      case "flex-direction":
        return `${baseStyle} justify-space-between items-center flex-col`
      case "flex-wrap":
        return `${baseStyle} justify-start items-start flex-wrap`
      default:
        return baseStyle
    }
  }

  const getAnimationDescription = () => {
    switch (animationState) {
      case "initial":
        return "Default: items start at the beginning"
      case "justify-content":
        return "justify-content: space-between (distributes items along the main axes)"
      case "align-items":
        return "align-items: center (centers items along the cross axes)"
      case "flex-direction":
        return "flex-direction: column (changes the main axes to vertical)"
      case "flex-wrap":
        return "flex-wrap: wrap (allows items to wrap to multiple lines)"
      default:
        return ""
    }
  }

  const getCodeExample = () => {
    switch (animationState) {
      case "initial":
        return `/* Default flex container */
.container {
  display: flex;
  /* Default values: */
  flex-direction: row; /* Main axes is horizontal */
  justify-content: flex-start; /* Items start at beginning of main axes */
  align-items: stretch; /* Items stretch along cross axes */
  flex-wrap: nowrap; /* Items don't wrap to new lines */
}`
      case "justify-content":
        return `/* Distributing items along the main axes */
.container {
  display: flex;
  justify-content: space-between; /* Items are spaced evenly
                                    * First item at start, last at end */
  
  /* Other options:
   * flex-start (default): items at start
   * flex-end: items at end
   * center: items centered
   * space-around: equal space around items
   * space-evenly: equal space between items
   */
}`
      case "align-items":
        return `/* Aligning items along the cross axes */
.container {
  display: flex;
  justify-content: space-between;
  align-items: center; /* Items are centered on cross axes */
  
  /* Other options:
   * stretch (default): items stretch to fill container
   * flex-start: items at start of cross axes
   * flex-end: items at end of cross axes
   * baseline: items aligned by text baseline
   */
}`
      case "flex-direction":
        return `/* Changing the direction of the main axes */
.container {
  display: flex;
  flex-direction: column; /* Main axes is now vertical */
  justify-content: space-between; /* Now works vertically */
  align-items: center; /* Now works horizontally */
  
  /* Other options:
   * row (default): left to right
   * row-reverse: right to left
   * column-reverse: bottom to top
   */
}`
      case "flex-wrap":
        return `/* Allowing items to wrap to new lines */
.container {
  display: flex;
  flex-wrap: wrap; /* Items wrap to new line when needed */
  
  /* Other options:
   * nowrap (default): all items on one line
   * wrap-reverse: wrap but in reverse order
   */
  
  /* With wrapping, you can also use:
   * align-content: controls spacing between lines
   */
}`
      default:
        return ""
    }
  }

  const getMainAxesArrow = () => {
    if (animationState === "flex-direction") {
      return (
        <div className="absolute inset-y-0 left-1/2 flex items-center justify-center pointer-events-none">
          <div className="relative h-3/4 w-0.5 bg-green-500">
            <ArrowDown className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-4 w-4 text-green-500" />
            <span className="absolute -left-16 top-1/2 -translate-y-1/2 text-xs font-medium text-green-600 bg-white/70 px-1 rounded">
              Main Axes
            </span>
          </div>
        </div>
      )
    }

    return (
      <div className="absolute inset-x-0 top-1/2 flex items-center justify-center pointer-events-none">
        <div className="relative w-3/4 h-0.5 bg-green-500">
          <ArrowRight className="absolute -right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-green-500" />
          <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-medium text-green-600 bg-white/70 px-1 rounded">
            Main Axes
          </span>
        </div>
      </div>
    )
  }

  const getCrossAxesArrow = () => {
    if (animationState === "flex-direction") {
      return (
        <div className="absolute inset-x-0 top-1/2 flex items-center justify-center pointer-events-none">
          <div className="relative w-3/4 h-0.5 bg-purple-500">
            <ArrowRight className="absolute -right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-purple-500" />
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-medium text-purple-600 bg-white/70 px-1 rounded">
              Cross Axes
            </span>
          </div>
        </div>
      )
    }

    return (
      <div className="absolute inset-y-0 left-1/2 flex items-center justify-center pointer-events-none">
        <div className="relative h-3/4 w-0.5 bg-purple-500">
          <ArrowDown className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-4 w-4 text-purple-500" />
          <span className="absolute -right-16 top-1/2 -translate-y-1/2 text-xs font-medium text-purple-600 bg-white/70 px-1 rounded">
            Cross Axes
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className={getContainerStyle()}>
        {Array.from({ length: animationState === "flex-wrap" ? 8 : 3 }).map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-16 h-16 bg-[#008080] dark:bg-slate-700 rounded-md text-slate-900 dark:text-white transition-all duration-1000"
            style={{ margin: "4px" }}
          >
            {i + 1}
          </div>
        ))}
        {getMainAxesArrow()}
        {getCrossAxesArrow()}
      </div>

      <div className="flex flex-col space-y-2">
        <p className="text-sm text-slate-700 dark:text-slate-400 font-medium">{getAnimationDescription()}</p>
        <div className="bg-[#00FFC5] dark:bg-slate-800 p-3 rounded-lg">
          <pre className="text-xs text-slate-900 dark:text-slate-50 overflow-x-auto">
            <code>{getCodeExample()}</code>
          </pre>
        </div>
        <div className="flex justify-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsPlaying(!isPlaying)}
            className="bg-[#008080] hover:bg-[#008080]/80 text-slate-900"
          >
            {isPlaying ? "Pause Animation" : "Play Animation"}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              const states: Array<typeof animationState> = [
                "initial",
                "justify-content",
                "align-items",
                "flex-direction",
                "flex-wrap",
              ]
              const currentIndex = states.indexOf(animationState)
              const nextIndex = (currentIndex + 1) % states.length
              setAnimationState(states[nextIndex])
            }}
            className="bg-[#800080] hover:bg-[#800080]/80 text-slate-900"
          >
            Next Property
          </Button>
        </div>
      </div>
    </div>
  )
}
