import { Zap, Star } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface StatsDisplayProps {
  streak: number;
  totalScore: number;
  progressPercentage: number;
  completedLevels: number;
  totalLevels: number;
}

export function StatsDisplay({
  streak,
  totalScore,
  progressPercentage,
  completedLevels,
  totalLevels,
}: StatsDisplayProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2 text-sm">
        <Zap className="w-4 h-4 text-yellow-500" />
        <span className="font-medium">{streak} streak</span>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <Star className="w-4 h-4 text-blue-500" />
        <span className="font-medium">{totalScore} points</span>
      </div>
      <Progress value={progressPercentage} className="w-24" />
      <span className="text-sm font-medium">
        {completedLevels}/{totalLevels}
      </span>
    </div>
  );
}
