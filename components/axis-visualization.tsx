"use client"

import { ArrowRight, ArrowDown } from "lucide-react"

interface AxesVisualizationProps {
  flexDirection: "row" | "row-reverse" | "column" | "column-reverse"
}

export function AxesVisualization({ flexDirection }: AxesVisualizationProps) {
  const getMainAxesArrow = () => {
    switch (flexDirection) {
      case "row":
        return (
          <div className="absolute inset-x-0 top-1/2 flex items-center justify-center">
            <div className="relative w-3/4 h-0.5 bg-green-500">
              <ArrowRight className="absolute -right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-green-500" />
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-medium text-green-600 dark:text-green-400">
                Main Axes
              </span>
            </div>
          </div>
        )
      case "row-reverse":
        return (
          <div className="absolute inset-x-0 top-1/2 flex items-center justify-center">
            <div className="relative w-3/4 h-0.5 bg-green-500">
              <ArrowRight className="absolute -left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-green-500 rotate-180" />
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-medium text-green-600 dark:text-green-400">
                Main Axes
              </span>
            </div>
          </div>
        )
      case "column":
        return (
          <div className="absolute inset-y-0 left-1/2 flex items-center justify-center">
            <div className="relative h-3/4 w-0.5 bg-green-500">
              <ArrowDown className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-4 w-4 text-green-500" />
              <span className="absolute -left-16 top-1/2 -translate-y-1/2 text-xs font-medium text-green-600 dark:text-green-400">
                Main Axes
              </span>
            </div>
          </div>
        )
      case "column-reverse":
        return (
          <div className="absolute inset-y-0 left-1/2 flex items-center justify-center">
            <div className="relative h-3/4 w-0.5 bg-green-500">
              <ArrowDown className="absolute -top-4 left-1/2 -translate-x-1/2 h-4 w-4 text-green-500 rotate-180" />
              <span className="absolute -left-16 top-1/2 -translate-y-1/2 text-xs font-medium text-green-600 dark:text-green-400">
                Main Axes
              </span>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  const getCrossAxesArrow = () => {
    switch (flexDirection) {
      case "row":
      case "row-reverse":
        return (
          <div className="absolute inset-y-0 left-1/2 flex items-center justify-center">
            <div className="relative h-3/4 w-0.5 bg-purple-500">
              <ArrowDown className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-4 w-4 text-purple-500" />
              <span className="absolute -right-16 top-1/2 -translate-y-1/2 text-xs font-medium text-purple-600 dark:text-purple-400">
                Cross Axes
              </span>
            </div>
          </div>
        )
      case "column":
      case "column-reverse":
        return (
          <div className="absolute inset-x-0 top-1/2 flex items-center justify-center">
            <div className="relative w-3/4 h-0.5 bg-purple-500">
              <ArrowRight className="absolute -right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-purple-500" />
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-medium text-purple-600 dark:text-purple-400">
                Cross Axes
              </span>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="relative border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 p-4 h-60">
      <div className="flex gap-2 h-full transition-all duration-500" style={{ flexDirection }}>
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-16 h-16 bg-slate-200 dark:bg-slate-800 rounded-md text-slate-700 dark:text-slate-300"
          >
            {i + 1}
          </div>
        ))}
      </div>
      {getMainAxesArrow()}
      {getCrossAxesArrow()}
      <div className="absolute bottom-2 right-2 text-xs text-slate-500 dark:text-slate-400">
        flex-direction: {flexDirection}
      </div>
    </div>
  )
}
