"use client"

import { useState, useEffect } from "react"
import LevelInfo from "./LevelInfo"
import GamePreview from "./GamePreview"
import CssDisplay from "./CssDisplay"

interface Level {
  id: number
  title: string
  description: string
  hint?: string
  targetCss: string
  initialCss: string
  difficulty: "beginner" | "intermediate" | "advanced"
}

interface LevelDisplayProps {
  level: Level
  onComplete: (levelId: number) => void
  isCompleted: boolean
}

export default function LevelDisplay({ level, onComplete, isCompleted }: LevelDisplayProps) {
  const [userCss, setUserCss] = useState(level.initialCss)
  const [isCorrect, setIsCorrect] = useState(isCompleted)

  // Reset state when level changes
  useEffect(() => {
    setUserCss(level.initialCss)
    setIsCorrect(isCompleted)
  }, [level, isCompleted])

  const handleCssChange = (newCss: string) => {
    setUserCss(newCss)

    // Check if the user's CSS matches the target CSS
    // This is a simplified check - in a real app, you might want to normalize whitespace, etc.
    const normalizedUserCss = newCss.replace(/\s+/g, " ").trim()
    const normalizedTargetCss = level.targetCss.replace(/\s+/g, " ").trim()

    const correct = normalizedUserCss === normalizedTargetCss
    setIsCorrect(correct)

    if (correct && !isCompleted) {
      onComplete(level.id)
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="space-y-6">
        <LevelInfo
          title={level.title}
          description={level.description}
          hint={level.hint}
          difficulty={level.difficulty}
          isCompleted={isCorrect}
        />

        <CssDisplay css={userCss} onChange={handleCssChange} isCorrect={isCorrect} />
      </div>

      <GamePreview css={userCss} />
    </div>
  )
}
