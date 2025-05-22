"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface Level {
  id: number
  title: string
  difficulty: "beginner" | "intermediate" | "advanced"
}

interface LevelSelectorProps {
  levels: Level[]
  currentLevel: number
  completedLevels: number[]
  onLevelSelect: (levelId: number) => void
}

export default function LevelSelector({ levels, currentLevel, completedLevels, onLevelSelect }: LevelSelectorProps) {
  const [activeTab, setActiveTab] = useState<string>("all")

  const difficultyTabs = [
    { id: "all", label: "All Levels" },
    { id: "beginner", label: "Beginner" },
    { id: "intermediate", label: "Intermediate" },
    { id: "advanced", label: "Advanced" },
  ]

  const filteredLevels = activeTab === "all" ? levels : levels.filter((level) => level.difficulty === activeTab)

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
      <div className="border-b border-gray-200">
        <div className="flex overflow-x-auto">
          {difficultyTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-4 py-3 text-sm font-medium whitespace-nowrap",
                "border-b-2 transition-colors flex-shrink-0",
                activeTab === tab.id
                  ? "border-[#00FFC5] text-gray-900"
                  : "border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300",
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 max-h-96 overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredLevels.map((level) => {
            const isCompleted = completedLevels.includes(level.id)
            const isActive = currentLevel === level.id

            return (
              <button
                key={level.id}
                onClick={() => onLevelSelect(level.id)}
                className={cn(
                  "p-3 rounded-md text-left transition-all",
                  "border hover:shadow-sm",
                  isActive
                    ? "border-[#00FFC5] bg-[#00FFC5]/10"
                    : isCompleted
                      ? "border-green-200 bg-green-50"
                      : "border-gray-200 hover:border-gray-300",
                )}
              >
                <div className="flex justify-between items-start">
                  <span className="font-medium">Level {level.id}</span>
                  {isCompleted && (
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">✓</span>
                  )}
                </div>
                <p className="text-sm text-gray-600 mt-1 truncate">{level.title}</p>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
