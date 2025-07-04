"use client";

import { RotateCcw, HelpCircle, BookOpen } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import type { Level } from "@/types/game";

import { cn } from "@/lib/utils";

interface LevelHeaderProps {
  level: Level;
  isCorrect: boolean;
  isAnimating: boolean;
  onReset: () => void;
}

export function LevelHeader({
  level,
  isCorrect,
  isAnimating,
  onReset,
}: LevelHeaderProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "intermediate":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "advanced":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  return (
    <Card
      className={cn(
        "border-2 transition-all duration-300",
        isAnimating && "scale-95 opacity-50"
      )}
    >
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <Badge className={getDifficultyColor(level.difficulty)}>
                {level.difficulty}
              </Badge>
              <h2 className="text-2xl font-bold dark:text-white">
                Level {level.id}: {level.title}
              </h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              {level.description}
            </p>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={onReset}>
              <RotateCcw className="mr-1 h-4 w-4" />
              Reset
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  <HelpCircle className="mr-1 h-4 w-4" />
                  Hint
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>💡 Hint for Level {level.id}</DialogTitle>
                  <DialogDescription className="text-base">
                    {level.hint}
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  <BookOpen className="mr-1 h-4 w-4" />
                  Solution
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>🎯 Solution for Level {level.id}</DialogTitle>
                  <DialogDescription>
                    <div className="mt-4 p-4 bg-slate-100 dark:bg-slate-800 rounded-lg">
                      <code className="text-sm whitespace-pre-line block">
                        {level.targetLayout
                          .split(";")
                          .filter((line) => line.trim() !== "")
                          .map((line, idx) => `${line.trim()};`)
                          .join("\n")}
                      </code>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {isCorrect && (
          <div className="flex items-center gap-2 p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg">
            <span className="font-medium text-green-700 dark:text-green-300">
              Perfect! You've mastered this layout! 🎉
            </span>
          </div>
        )}
      </CardHeader>
    </Card>
  );
}
