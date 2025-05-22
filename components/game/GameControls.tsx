"use client"

import type React from "react"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface GameControlsProps {
  currentLevel: number
  totalLevels: number
  onLevelChange: (level: number) => void
}

export default function GameControls({ currentLevel, totalLevels, onLevelChange }: GameControlsProps) {
  const [inputLevel, setInputLevel] = useState(currentLevel.toString())

  const handlePrevious = () => {
    if (currentLevel > 1) {
      onLevelChange(currentLevel - 1)
      setInputLevel((currentLevel - 1).toString())
    }
  }

  const handleNext = () => {
    if (currentLevel < totalLevels) {
      onLevelChange(currentLevel + 1)
      setInputLevel((currentLevel + 1).toString())
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputLevel(e.target.value)
  }

  const handleInputBlur = () => {
    const level = Number.parseInt(inputLevel)
    if (!isNaN(level) && level >= 1 && level <= totalLevels) {
      onLevelChange(level)
    } else {
      setInputLevel(currentLevel.toString())
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleInputBlur()
    }
  }

  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
      <button
        onClick={handlePrevious}
        disabled={currentLevel === 1}
        className="p-2 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Previous level"
      >
        <ChevronLeft size={20} />
      </button>

      <div className="flex items-center">
        <span className="text-gray-700 mr-2">Level</span>
        <input
          type="text"
          value={inputLevel}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyDown={handleKeyDown}
          className="w-12 text-center p-1 border border-gray-300 rounded-md"
          aria-label="Current level"
        />
        <span className="text-gray-700 ml-2">of {totalLevels}</span>
      </div>

      <button
        onClick={handleNext}
        disabled={currentLevel === totalLevels}
        className="p-2 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Next level"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  )
}
