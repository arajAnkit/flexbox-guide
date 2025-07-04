import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { StatsDisplay } from "./StatsDisplay";

interface GameHeaderProps {
  streak: number;
  totalScore: number;
  progressPercentage: number;
  completedLevels: number;
  totalLevels: number;
}

export function GameHeader({
  streak,
  totalScore,
  progressPercentage,
  completedLevels,
  totalLevels,
}: GameHeaderProps) {
  return (
    <div className="border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm sticky top-0 z-10">
      <div className="container px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300 transition-colors"
            >
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to Home
            </Link>
            <div className="h-6 w-px bg-slate-300 dark:bg-slate-700" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Flexbox Master
            </h1>
          </div>

          <StatsDisplay
            streak={streak}
            totalScore={totalScore}
            progressPercentage={progressPercentage}
            completedLevels={completedLevels}
            totalLevels={totalLevels}
          />
        </div>
      </div>
    </div>
  );
}
