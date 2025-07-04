"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Level } from "@/types/game";

interface LevelNavigationProps {
  levels: Level[];
  currentLevel: number;
  completedLevels: number[];
  levelPage: number;
  totalPages: number;
  onLevelChange: (levelId: number) => void;
  onPageChange: (page: number) => void;
}

export function LevelNavigation({
  levels,
  currentLevel,
  completedLevels,
  levelPage,
  totalPages,
  onLevelChange,
  onPageChange,
}: LevelNavigationProps) {
  const levelsPerPage = 10;
  const currentPageLevels = levels.slice(
    levelPage * levelsPerPage,
    (levelPage + 1) * levelsPerPage
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Level Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-medium">
            Page {levelPage + 1} of {totalPages}
          </span>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onPageChange(Math.max(0, levelPage - 1))}
              disabled={levelPage === 0}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                onPageChange(Math.min(totalPages - 1, levelPage + 1))
              }
              disabled={levelPage === totalPages - 1}
            >
              Next
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-2">
          {currentPageLevels.map((lvl) => (
            <Button
              key={lvl.id}
              variant={currentLevel === lvl.id ? "default" : "outline"}
              size="sm"
              className={cn(
                "relative transition-all duration-200",
                completedLevels.includes(lvl.id) &&
                  "border-green-500 dark:border-green-400",
                completedLevels.includes(lvl.id) &&
                  currentLevel !== lvl.id &&
                  "text-green-600 dark:text-green-400"
              )}
              onClick={() => onLevelChange(lvl.id)}
            >
              {lvl.id}
              {completedLevels.includes(lvl.id) && (
                <Check className="absolute -top-1 -right-1 h-3 w-3 text-green-500 bg-white dark:bg-slate-900 rounded-full" />
              )}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
