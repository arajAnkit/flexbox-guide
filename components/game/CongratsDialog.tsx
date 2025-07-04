"use client";

import Link from "next/link";
import { Trophy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface CongratsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  totalScore: number;
}

export function CongratsDialog({
  open,
  onOpenChange,
  totalScore,
}: CongratsDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center text-2xl">
            <Trophy className="mr-3 h-8 w-8 text-yellow-500" />
            Congratulations! 🎉
          </DialogTitle>
          <DialogDescription className="text-center text-lg">
            You've completed all levels of Flexbox Master! You now have a solid
            understanding of CSS Flexbox layout.
            <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                Final Score: {totalScore} points
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                You're now a Flexbox Master! 🏆
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center gap-3 mt-6">
          <Button onClick={() => onOpenChange(false)} variant="outline">
            Continue Playing
          </Button>
          <Link href="/">
            <Button className="bg-gradient-to-r from-blue-500 to-indigo-500">
              Return to Home
            </Button>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}
