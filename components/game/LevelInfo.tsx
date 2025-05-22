import { Info } from "lucide-react"

interface LevelInfoProps {
  title: string
  description: string
  hint?: string
  difficulty: "beginner" | "intermediate" | "advanced"
  isCompleted: boolean
}

export default function LevelInfo({ title, description, hint, difficulty, isCompleted }: LevelInfoProps) {
  const difficultyColors = {
    beginner: "bg-green-100 text-green-800",
    intermediate: "bg-yellow-100 text-yellow-800",
    advanced: "bg-red-100 text-red-800",
  }

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex items-center space-x-2">
          <span className={`text-xs px-2 py-1 rounded-full ${difficultyColors[difficulty]}`}>
            {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
          </span>
          {isCompleted && <span className="bg-[#00FFC5] text-green-800 text-xs px-2 py-1 rounded-full">Completed</span>}
        </div>
      </div>

      <p className="text-gray-700 mb-4">{description}</p>

      {hint && (
        <div className="bg-[#008080]/30 p-4 rounded-lg flex items-start space-x-3">
          <Info size={20} className="text-[#008080] mt-0.5" />
          <div>
            <h3 className="font-medium text-gray-800 mb-1">Hint</h3>
            <p className="text-gray-700 text-sm">{hint}</p>
          </div>
        </div>
      )}
    </div>
  )
}
