"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface SuccessMessageProps {
  currentLevel: number;
  totalLevels: number;
  onNextLevel: () => void;
}

export function SuccessMessage({
  currentLevel,
  totalLevels,
  onNextLevel,
}: SuccessMessageProps) {
  return (
    <Card className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950">
      <CardContent className="pt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <Check className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-green-800 dark:text-green-300">
                Level Complete! 🎉
              </h3>
              <p className="text-sm text-green-600 dark:text-green-400">
                Great job mastering this layout!
              </p>
            </div>
          </div>
          {currentLevel < totalLevels ? (
            <Button
              onClick={onNextLevel}
              className="bg-green-600 hover:bg-green-700"
            >
              Next Level
            </Button>
          ) : (
            <Button disabled className="bg-green-600">
              All Complete!
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
