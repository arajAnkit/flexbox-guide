"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Check,
  RefreshCw,
  HelpCircle,
  Trophy,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type Level = {
  id: number;
  title: string;
  description: string;
  targetLayout: string;
  hint: string;
  properties: {
    display: string;
    flexDirection: string;
    justifyContent: string;
    alignItems: string;
    flexWrap: string;
    alignContent: string;
  };
};

const levels: Level[] = [
  // Beginner Levels (1-10)
  {
    id: 1,
    title: "Center an Item",
    description:
      "Center the box both horizontally and vertically in the container.",
    targetLayout: "flex justify-center items-center",
    hint: "Use justify-content for horizontal centering and align-items for vertical centering.",
    properties: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      alignContent: "stretch",
    },
  },
  {
    id: 2,
    title: "Row of Items",
    description: "Arrange the boxes in a row with space between them.",
    targetLayout: "flex justify-between items-center",
    hint: "Use justify-content: space-between to create space between items.",
    properties: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      alignContent: "stretch",
    },
  },
  {
    id: 3,
    title: "Column Stack",
    description: "Stack the boxes in a column centered horizontally.",
    targetLayout: "flex flex-col items-center",
    hint: "Use flex-direction: column to stack vertically and align-items: center to center horizontally.",
    properties: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      flexWrap: "nowrap",
      alignContent: "stretch",
    },
  },
  {
    id: 4,
    title: "Wrap Items",
    description: "Make the items wrap to the next line when they don't fit.",
    targetLayout: "flex flex-wrap justify-center",
    hint: "Use flex-wrap: wrap to allow items to flow to the next line.",
    properties: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "wrap",
      alignContent: "flex-start",
    },
  },
  {
    id: 5,
    title: "End Alignment",
    description:
      "Align items to the end of the container both horizontally and vertically.",
    targetLayout: "flex justify-end items-end",
    hint: "Use justify-content: flex-end and align-items: flex-end.",
    properties: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      alignContent: "stretch",
    },
  },
  {
    id: 6,
    title: "Space Around",
    description: "Distribute items with equal space around them.",
    targetLayout: "flex justify-around",
    hint: "Use justify-content: space-around to create equal space around each item.",
    properties: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "stretch",
      flexWrap: "nowrap",
      alignContent: "stretch",
    },
  },
  {
    id: 7,
    title: "Space Evenly",
    description:
      "Distribute items with equal space between them and the edges.",
    targetLayout: "flex justify-evenly",
    hint: "Use justify-content: space-evenly for equal spacing between all items and edges.",
    properties: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "stretch",
      flexWrap: "nowrap",
      alignContent: "stretch",
    },
  },
  {
    id: 8,
    title: "Baseline Alignment",
    description: "Align items along their text baseline.",
    targetLayout: "flex items-baseline",
    hint: "Use align-items: baseline to align items by their text baseline.",
    properties: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "baseline",
      flexWrap: "nowrap",
      alignContent: "stretch",
    },
  },
  {
    id: 9,
    title: "Column Reverse",
    description: "Stack items in a column from bottom to top.",
    targetLayout: "flex flex-col-reverse",
    hint: "Use flex-direction: column-reverse to reverse the stacking order.",
    properties: {
      display: "flex",
      flexDirection: "column-reverse",
      justifyContent: "flex-start",
      alignItems: "stretch",
      flexWrap: "nowrap",
      alignContent: "stretch",
    },
  },
  {
    id: 10,
    title: "Row Reverse",
    description: "Arrange items in a row from right to left.",
    targetLayout: "flex flex-row-reverse",
    hint: "Use flex-direction: row-reverse to reverse the horizontal order.",
    properties: {
      display: "flex",
      flexDirection: "row-reverse",
      justifyContent: "flex-start",
      alignItems: "stretch",
      flexWrap: "nowrap",
      alignContent: "stretch",
    },
  },

  // Intermediate Levels (11-20)
  {
    id: 11,
    title: "Wrap Reverse",
    description: "Make items wrap from bottom to top when they don't fit.",
    targetLayout: "flex flex-wrap-reverse",
    hint: "Use flex-wrap: wrap-reverse to reverse the wrapping direction.",
    properties: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "stretch",
      flexWrap: "wrap-reverse",
      alignContent: "stretch",
    },
  },
  {
    id: 12,
    title: "Align Content Start",
    description: "Align wrapped lines to the start of the container.",
    targetLayout: "flex flex-wrap align-content-start",
    hint: "Use align-content: flex-start to pack lines at the start of the container.",
    properties: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "stretch",
      flexWrap: "wrap",
      alignContent: "flex-start",
    },
  },
  {
    id: 13,
    title: "Align Content End",
    description: "Align wrapped lines to the end of the container.",
    targetLayout: "flex flex-wrap align-content-end",
    hint: "Use align-content: flex-end to pack lines at the end of the container.",
    properties: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "stretch",
      flexWrap: "wrap",
      alignContent: "flex-end",
    },
  },
  {
    id: 14,
    title: "Align Content Center",
    description: "Center wrapped lines within the container.",
    targetLayout: "flex flex-wrap align-content-center",
    hint: "Use align-content: center to center wrapped lines.",
    properties: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "stretch",
      flexWrap: "wrap",
      alignContent: "center",
    },
  },
  {
    id: 15,
    title: "Align Content Space Between",
    description: "Distribute wrapped lines with space between them.",
    targetLayout: "flex flex-wrap align-content-between",
    hint: "Use align-content: space-between to create space between wrapped lines.",
    properties: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "stretch",
      flexWrap: "wrap",
      alignContent: "space-between",
    },
  },
  {
    id: 16,
    title: "Align Content Space Around",
    description: "Distribute wrapped lines with equal space around them.",
    targetLayout: "flex flex-wrap align-content-around",
    hint: "Use align-content: space-around for equal space around wrapped lines.",
    properties: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "stretch",
      flexWrap: "wrap",
      alignContent: "space-around",
    },
  },
  {
    id: 17,
    title: "Column with End Alignment",
    description:
      "Stack items in a column aligned to the end of the cross axes.",
    targetLayout: "flex flex-col items-end",
    hint: "Use flex-direction: column and align-items: flex-end.",
    properties: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      alignContent: "stretch",
    },
  },
  {
    id: 18,
    title: "Column with Space Between",
    description: "Stack items in a column with space between them.",
    targetLayout: "flex flex-col justify-between",
    hint: "Use flex-direction: column and justify-content: space-between.",
    properties: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "stretch",
      flexWrap: "nowrap",
      alignContent: "stretch",
    },
  },
  {
    id: 19,
    title: "Column Reverse with Center",
    description: "Stack items from bottom to top, centered horizontally.",
    targetLayout: "flex flex-col-reverse items-center",
    hint: "Use flex-direction: column-reverse and align-items: center.",
    properties: {
      display: "flex",
      flexDirection: "column-reverse",
      justifyContent: "flex-start",
      alignItems: "center",
      flexWrap: "nowrap",
      alignContent: "stretch",
    },
  },
  {
    id: 20,
    title: "Row Reverse with End",
    description: "Arrange items from right to left, aligned to the bottom.",
    targetLayout: "flex flex-row-reverse items-end",
    hint: "Use flex-direction: row-reverse and align-items: flex-end.",
    properties: {
      display: "flex",
      flexDirection: "row-reverse",
      justifyContent: "flex-start",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      alignContent: "stretch",
    },
  },

  // Advanced Levels (21-30)
  {
    id: 21,
    title: "Holy Grail Layout",
    description:
      "Create a layout with header, footer, and three columns in between.",
    targetLayout: "flex flex-col h-full",
    hint: "Use flex-direction: column for the main container, and a nested flex container for the middle section.",
    properties: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "stretch",
      flexWrap: "nowrap",
      alignContent: "stretch",
    },
  },
  {
    id: 22,
    title: "Centered Card",
    description: "Create a centered card with fixed width and height.",
    targetLayout: "flex justify-center items-center",
    hint: "Use justify-content: center and align-items: center to center the card.",
    properties: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      alignContent: "stretch",
    },
  },
  {
    id: 23,
    title: "Sticky Footer",
    description: "Create a layout where the footer sticks to the bottom.",
    targetLayout: "flex flex-col justify-between h-full",
    hint: "Use flex-direction: column and justify-content: space-between.",
    properties: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "stretch",
      flexWrap: "nowrap",
      alignContent: "stretch",
    },
  },
  {
    id: 24,
    title: "Sidebar Layout",
    description:
      "Create a layout with a fixed sidebar and flexible main content.",
    targetLayout: "flex h-full",
    hint: "Use display: flex with a fixed width sidebar and flex-grow main content.",
    properties: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "stretch",
      flexWrap: "nowrap",
      alignContent: "stretch",
    },
  },
  {
    id: 25,
    title: "Card Grid",
    description: "Create a grid of cards that wrap to new lines.",
    targetLayout: "flex flex-wrap justify-center gap-4",
    hint: "Use flex-wrap: wrap and justify-content: center with gap for spacing.",
    properties: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "stretch",
      flexWrap: "wrap",
      alignContent: "stretch",
    },
  },
  {
    id: 26,
    title: "Navbar Layout",
    description:
      "Create a navbar with logo on the left and links on the right.",
    targetLayout: "flex justify-between items-center",
    hint: "Use justify-content: space-between and align-items: center.",
    properties: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      alignContent: "stretch",
    },
  },
  {
    id: 27,
    title: "Masonry-like Layout",
    description: "Create a layout with items of different heights that wrap.",
    targetLayout: "flex flex-wrap align-content-start",
    hint: "Use flex-wrap: wrap and align-content: flex-start.",
    properties: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      flexWrap: "wrap",
      alignContent: "flex-start",
    },
  },
  {
    id: 28,
    title: "Split Screen",
    description: "Create a layout split into two equal halves.",
    targetLayout: "flex h-full",
    hint: "Use display: flex with two children that have flex: 1.",
    properties: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "stretch",
      flexWrap: "nowrap",
      alignContent: "stretch",
    },
  },
  {
    id: 29,
    title: "Form Layout",
    description:
      "Create a form with labels on the left and inputs on the right.",
    targetLayout: "flex flex-col gap-4",
    hint: "Use flex-direction: column for the form and row for each form group.",
    properties: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "stretch",
      flexWrap: "nowrap",
      alignContent: "stretch",
    },
  },
  {
    id: 30,
    title: "Complex Dashboard",
    description:
      "Create a dashboard layout with header, sidebar, and content area.",
    targetLayout: "flex flex-col h-full",
    hint: "Use nested flex containers with appropriate flex-direction values.",
    properties: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "stretch",
      flexWrap: "nowrap",
      alignContent: "stretch",
    },
  },
];

export default function FlexboxGame() {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [userProperties, setUserProperties] = useState({
    display: "block",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "stretch",
    flexWrap: "nowrap",
    alignContent: "stretch",
  });
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [completedLevels, setCompletedLevels] = useState<number[]>([]);
  const [showCongrats, setShowCongrats] = useState(false);

  const [levelPage, setLevelPage] = useState(0);
  const levelsPerPage = 10;
  const totalPages = Math.ceil(levels.length / levelsPerPage);

  const level = levels.find((l) => l.id === currentLevel) || levels[0];

  useEffect(() => {
    setUserProperties({
      display: "block",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "stretch",
      flexWrap: "nowrap",
      alignContent: "stretch",
    });
    setIsCorrect(false);
    setShowHint(false);
    setShowSolution(false);
  }, [currentLevel]);

  const checkSolution = () => {
    const isMatch = Object.entries(level.properties).every(
      ([key, value]) =>
        userProperties[key as keyof typeof userProperties] === value
    );

    setIsCorrect(isMatch);

    if (isMatch && !completedLevels.includes(currentLevel)) {
      setCompletedLevels([...completedLevels, currentLevel]);

      if (
        currentLevel === levels.length &&
        completedLevels.length === levels.length - 1
      ) {
        setShowCongrats(true);
      }
    }
  };

  const resetLevel = () => {
    setUserProperties({
      display: "block",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "stretch",
      flexWrap: "nowrap",
      alignContent: "stretch",
    });
    setIsCorrect(false);
  };

  const goToNextLevel = () => {
    if (currentLevel < levels.length) {
      setCurrentLevel(currentLevel + 1);
    }
  };

  const renderTargetLayout = () => {
    // Basic levels (1-10)
    if (level.id === 1) {
      return (
        <div className="flex justify-between items-center h-full border border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-4">
          <div className="w-16 h-16 bg-[#B0E0E6] rounded-md flex justify-center items-center">
            <p className="text-orange-500 font-semibold text-lg">1</p>
          </div>
        </div>
      );
    } else if (level.id === 2) {
      return (
        <div className="flex justify-between items-center h-full border border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="w-16 h-16 bg-[#C2E4D8] rounded-md flex justify-center items-center"
            >
              <p className="text-orange-500 font-semibold text-lg">{i}</p>
            </div>
          ))}
        </div>
      );
    } else if (level.id === 3) {
      return (
        <div className="flex flex-col items-center h-full border border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="w-16 h-16 bg-[#F5E7C4] rounded-md mb-2 flex justify-center items-center"
            >
              <p className="text-orange-500 font-semibold text-lg">{i}</p>
            </div>
          ))}
        </div>
      );
    } else if (level.id === 4) {
      return (
        <div className="flex flex-wrap justify-center h-full border border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="w-16 h-16 bg-[#B0E0E6] rounded-md m-1 flex justify-center items-center"
            >
              <p className="text-orange-500 font-semibold text-lg">{i}</p>
            </div>
          ))}
        </div>
      );
    } else if (level.id === 5) {
      return (
        <div className="flex justify-end items-end h-full border border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="w-16 h-16 bg-[#C2E4D8] rounded-md ml-2 flex justify-center items-center"
            >
              <p className="text-orange-500 font-semibold text-lg">{i}</p>
            </div>
          ))}
        </div>
      );
    } else if (level.id === 6) {
      return (
        <div className="flex justify-around h-full border border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="w-16 h-16 bg-[#F5E7C4] rounded-md flex justify-center items-center"
            >
              <p className="text-orange-500 font-semibold text-lg">{i}</p>
            </div>
          ))}
        </div>
      );
    } else if (level.id === 7) {
      return (
        <div className="flex justify-evenly h-full border border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="w-16 h-16 bg-[#B0E0E6] rounded-md flex justify-center items-center"
            >
              <p className="text-orange-500 font-semibold text-lg">{i}</p>
            </div>
          ))}
        </div>
      );
    } else if (level.id === 8) {
      return (
        <div className="flex items-baseline h-full border border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-4">
          <div className="w-16 h-12 bg-[#C2E4D8] rounded-md"></div>
          <div className="w-16 h-16 bg-[#F5E7C4] rounded-md ml-2"></div>
          <div className="w-16 h-20 bg-[#B0E0E6] rounded-md ml-2"></div>
        </div>
      );
    } else if (level.id === 9) {
      return (
        <div className="flex flex-col-reverse h-full border border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="w-16 h-16 bg-[#C2E4D8] rounded-md mb-2 flex justify-center items-center"
            >
              <p className="text-orange-500 font-semibold text-lg">{i}</p>
            </div>
          ))}
        </div>
      );
    } else if (level.id === 10) {
      return (
        <div className="flex flex-row-reverse h-full border border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="w-16 h-16 bg-[#F5E7C4] rounded-md ml-2 flex justify-center items-center"
            >
              <p className="text-orange-500 font-semibold text-lg">{i}</p>
            </div>
          ))}
        </div>
      );
    }
    // Intermediate levels (11-20)
    else if (level.id === 11) {
      return (
        <div className="flex flex-wrap-reverse h-full border border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="w-16 h-16 bg-[#B0E0E6] rounded-md m-1 flex justify-center items-center"
            >
              <p className="text-orange-500 font-semibold text-lg">{i}</p>
            </div>
          ))}
        </div>
      );
    } else if (level.id === 12) {
      return (
        <div className="flex flex-wrap align-content-start h-full border border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="w-16 h-16 bg-[#C2E4D8] rounded-md m-1 flex justify-center items-center"
            >
              <p className="text-orange-500 font-semibold text-lg">{i}</p>
            </div>
          ))}
        </div>
      );
    } else if (level.id === 13) {
      return (
        <div className="flex flex-wrap align-content-end h-full border border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="w-16 h-16 bg-[#F5E7C4] rounded-md m-1 flex justify-center items-center"
            >
              <p className="text-orange-500 font-semibold text-lg">{i}</p>
            </div>
          ))}
        </div>
      );
    } else if (level.id === 14) {
      return (
        <div className="flex flex-wrap align-content-center h-full border border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="w-16 h-16 bg-[#B0E0E6] rounded-md m-1 flex justify-center items-center"
            >
              <p className="text-orange-500 font-semibold text-lg">{i}</p>
            </div>
          ))}
        </div>
      );
    } else if (level.id === 15) {
      return (
        <div className="flex flex-wrap align-content-between h-full border border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="w-16 h-16 bg-[#C2E4D8] rounded-md m-1 flex justify-center items-center"
            >
              <p className="text-orange-500 font-semibold text-lg">{i}</p>
            </div>
          ))}
        </div>
      );
    } else if (level.id === 16) {
      return (
        <div className="flex flex-wrap align-content-around h-full border border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="w-16 h-16 bg-[#F5E7C4] rounded-md m-1 flex justify-center items-center"
            >
              <p className="text-orange-500 font-semibold text-lg">{i}</p>
            </div>
          ))}
        </div>
      );
    } else if (level.id === 17) {
      return (
        <div className="flex flex-col items-end h-full border border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="w-16 h-16 bg-[#B0E0E6] rounded-md mb-2 flex justify-center items-center"
            >
              <p className="text-orange-500 font-semibold text-lg">{i}</p>
            </div>
          ))}
        </div>
      );
    } else if (level.id === 18) {
      return (
        <div className="flex flex-col justify-between h-full border border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="w-16 h-16 bg-[#C2E4D8] rounded-md flex justify-center items-center"
            >
              <p className="text-orange-500 font-semibold text-lg">{i}</p>
            </div>
          ))}
        </div>
      );
    } else if (level.id === 19) {
      return (
        <div className="flex flex-col justify-between h-full border border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="w-16 h-16 bg-[#C2E4D8] rounded-md flex justify-center items-center"
            >
              <p className="text-orange-500 font-semibold text-lg">{i}</p>
            </div>
          ))}
        </div>
      );
    } else if (level.id === 20) {
      return (
        <div className="flex flex-row-reverse items-end h-full border border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="w-16 h-16 bg-[#B0E0E6] rounded-md ml-2 flex justify-center items-center"
            >
              <p className="text-orange-500 font-semibold text-lg">{i}</p>
            </div>
          ))}
        </div>
      );
    }
    // Advanced levels (21-30)
    else if (level.id === 21) {
      return (
        <div className="flex flex-col h-full border border-dashed border-slate-300 dark:border-slate-700 rounded-lg">
          <div className="h-12 bg-[#B0E0E6] p-2 text-white font-bold">
            Header
          </div>
          <div className="flex flex-1">
            <div className="w-16 bg-[#C2E4D8] p-2 text-white">Nav</div>
            <div className="flex-1 bg-[#F5E7C4] p-2 text-slate-700">
              Content
            </div>
            <div className="w-16 bg-[#C2E4D8] p-2 text-white">Aside</div>
          </div>
          <div className="h-12 bg-[#B0E0E6] p-2 text-white font-bold">
            Footer
          </div>
        </div>
      );
    } else if (level.id === 22) {
      return (
        <div className="flex justify-center items-center h-full border border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-4">
          <div className="w-32 h-32 bg-[#C2E4D8] rounded-md flex items-center justify-center">
            <div className="text-center">Card Content</div>
          </div>
        </div>
      );
    } else if (level.id === 23) {
      return (
        <div className="flex flex-col justify-between h-full border border-dashed border-slate-300 dark:border-slate-700 rounded-lg">
          <div className="p-4 bg-[#F5E7C4]">Header Content</div>
          <div className="flex-1 p-4">Main Content Area</div>
          <div className="p-4 bg-[#B0E0E6]">Footer Content</div>
        </div>
      );
    } else if (level.id === 24) {
      return (
        <div className="flex h-full border border-dashed border-slate-300 dark:border-slate-700 rounded-lg">
          <div className="w-24 bg-[#C2E4D8] p-4">Sidebar</div>
          <div className="flex-1 bg-[#F5E7C4] p-4">Main Content</div>
        </div>
      );
    } else if (level.id === 25) {
      return (
        <div className="flex flex-wrap justify-center gap-4 h-full border border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="w-20 h-20 bg-[#B0E0E6] rounded-md flex justify-center items-center"
            >
              <p className="text-orange-500 font-semibold text-lg">{i}</p>
            </div>
          ))}
        </div>
      );
    } else if (level.id === 26) {
      return (
        <div className="flex justify-between items-center h-16 border border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-4">
          <div className="h-8 w-24 bg-[#C2E4D8] rounded-md"></div>
          <div className="flex gap-4">
            <div className="h-6 w-12 bg-[#F5E7C4] rounded-md"></div>
            <div className="h-6 w-12 bg-[#F5E7C4] rounded-md"></div>
            <div className="h-6 w-12 bg-[#F5E7C4] rounded-md"></div>
          </div>
        </div>
      );
    } else if (level.id === 27) {
      return (
        <div className="flex flex-wrap align-content-start h-full border border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-4">
          <div className="w-16 h-12 bg-[#B0E0E6] rounded-md m-1"></div>
          <div className="w-16 h-20 bg-[#C2E4D8] rounded-md m-1"></div>
          <div className="w-16 h-16 bg-[#F5E7C4] rounded-md m-1"></div>
          <div className="w-16 h-24 bg-[#B0E0E6] rounded-md m-1"></div>
          <div className="w-16 h-14 bg-[#C2E4D8] rounded-md m-1"></div>
          <div className="w-16 h-18 bg-[#F5E7C4] rounded-md m-1"></div>
        </div>
      );
    } else if (level.id === 28) {
      return (
        <div className="flex h-full border border-dashed border-slate-300 dark:border-slate-700 rounded-lg">
          <div className="flex-1 bg-[#B0E0E6] p-4">Left Half</div>
          <div className="flex-1 bg-[#C2E4D8] p-4">Right Half</div>
        </div>
      );
    } else if (level.id === 29) {
      return (
        <div className="flex flex-col gap-4 h-full border border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-4">
          <div className="flex">
            <div className="w-24 bg-[#F5E7C4] p-2">Label 1</div>
            <div className="flex-1 bg-[#B0E0E6] p-2">Input 1</div>
          </div>
          <div className="flex">
            <div className="w-24 bg-[#F5E7C4] p-2">Label 2</div>
            <div className="flex-1 bg-[#B0E0E6] p-2">Input 2</div>
          </div>
          <div className="flex">
            <div className="w-24 bg-[#F5E7C4] p-2">Label 3</div>
            <div className="flex-1 bg-[#B0E0E6] p-2">Input 3</div>
          </div>
        </div>
      );
    } else if (level.id === 30) {
      return (
        <div className="flex flex-col h-full border border-dashed border-slate-300 dark:border-slate-700 rounded-lg">
          <div className="h-12 bg-[#B0E0E6] p-2">Header</div>
          <div className="flex flex-1">
            <div className="w-24 bg-[#C2E4D8] p-2">Sidebar</div>
            <div className="flex-1 p-2">
              <div className="grid grid-cols-2 gap-2 h-full">
                <div className="bg-[#F5E7C4] p-2 rounded-md">
                  Dashboard Item 1
                </div>
                <div className="bg-[#F5E7C4] p-2 rounded-md">
                  Dashboard Item 2
                </div>
                <div className="bg-[#F5E7C4] p-2 rounded-md">
                  Dashboard Item 3
                </div>
                <div className="bg-[#F5E7C4] p-2 rounded-md">
                  Dashboard Item 4
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  const renderUserLayout = () => {
    const containerStyle = {
      display: userProperties.display,
      flexDirection: userProperties.flexDirection as any,
      justifyContent: userProperties.justifyContent,
      alignItems: userProperties.alignItems,
      flexWrap: userProperties.flexWrap as any,
      alignContent: userProperties.alignContent,
    };

    // Basic levels (1-10)
    if (level.id === 1) {
      return (
        <div
          style={containerStyle}
          className="h-full border border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-4"
        >
          <div className="w-16 h-16 bg-slate-500 dark:bg-slate-700 rounded-md"></div>
        </div>
      );
    } else if (level.id === 2) {
      return (
        <div
          style={containerStyle}
          className="h-full border border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-4"
        >
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="w-16 h-16 bg-slate-500 dark:bg-slate-700 rounded-md"
            ></div>
          ))}
        </div>
      );
    } else if (level.id === 3) {
      return (
        <div
          style={containerStyle}
          className="h-full border border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-4"
        >
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="w-16 h-16 bg-slate-500 dark:bg-slate-700 rounded-md mb-2"
            ></div>
          ))}
        </div>
      );
    } else if (level.id === 4) {
      return (
        <div
          style={containerStyle}
          className="h-full border border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-4"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="w-16 h-16 bg-slate-500 dark:bg-slate-700 rounded-md m-1"
            ></div>
          ))}
        </div>
      );
    } else if (level.id === 5) {
      return (
        <div
          style={containerStyle}
          className="h-full border border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-4"
        >
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="w-16 h-16 bg-slate-500 dark:bg-slate-700 rounded-md ml-2"
            ></div>
          ))}
        </div>
      );
    } else if (level.id === 6 || level.id === 7) {
      return (
        <div
          style={containerStyle}
          className="h-full border border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-4"
        >
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="w-16 h-16 bg-slate-500 dark:bg-slate-700 rounded-md"
            ></div>
          ))}
        </div>
      );
    } else if (level.id === 8) {
      return (
        <div
          style={containerStyle}
          className="h-full border border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-4"
        >
          <div className="w-16 h-12 bg-slate-500 dark:bg-slate-700 rounded-md"></div>
          <div className="w-16 h-16 bg-slate-500 dark:bg-slate-700 rounded-md ml-2"></div>
          <div className="w-16 h-20 bg-slate-500 dark:bg-slate-700 rounded-md ml-2"></div>
        </div>
      );
    } else if (level.id === 9) {
      return (
        <div
          style={containerStyle}
          className="h-full border border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-4"
        >
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="w-16 h-16 bg-slate-500 dark:bg-slate-700 rounded-md mb-2"
            ></div>
          ))}
        </div>
      );
    } else if (level.id === 10) {
      return (
        <div
          style={containerStyle}
          className="h-full border border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-4"
        >
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="w-16 h-16 bg-slate-500 dark:bg-slate-700 rounded-md ml-2"
            ></div>
          ))}
        </div>
      );
    }
    // Intermediate levels (11-20)
    else if (level.id >= 11 && level.id <= 16) {
      return (
        <div
          style={containerStyle}
          className="h-full border border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-4"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="w-16 h-16 bg-slate-500 dark:bg-slate-700 rounded-md m-1"
            ></div>
          ))}
        </div>
      );
    } else if (level.id === 17) {
      return (
        <div
          style={containerStyle}
          className="h-full border border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-4"
        >
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="w-16 h-16 bg-slate-500 dark:bg-slate-700 rounded-md mb-2"
            ></div>
          ))}
        </div>
      );
    } else if (level.id === 18) {
      return (
        <div
          style={containerStyle}
          className="h-full border border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-4"
        >
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="w-16 h-16 bg-slate-500 dark:bg-slate-700 rounded-md"
            ></div>
          ))}
        </div>
      );
    } else if (level.id === 19) {
      return (
        <div
          style={containerStyle}
          className="h-full border border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-4"
        >
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="w-16 h-16 bg-slate-500 dark:bg-slate-700 rounded-md mb-2"
            ></div>
          ))}
        </div>
      );
    } else if (level.id === 20) {
      return (
        <div
          style={containerStyle}
          className="h-full border border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-4"
        >
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="w-16 h-16 bg-slate-500 dark:bg-slate-700 rounded-md ml-2"
            ></div>
          ))}
        </div>
      );
    }
    // Advanced levels (21-30)
    else if (level.id === 21) {
      return (
        <div
          style={containerStyle}
          className="h-full border border-dashed border-slate-300 dark:border-slate-700 rounded-lg"
        >
          <div className="h-12 bg-slate-500 dark:bg-slate-700 p-2 text-white font-bold">
            Header
          </div>
          <div className="flex flex-1">
            <div className="w-16 bg-slate-400 dark:bg-slate-600 p-2 text-white">
              Nav
            </div>
            <div className="flex-1 bg-slate-300 dark:bg-slate-500 p-2 text-white">
              Content
            </div>
            <div className="w-16 bg-slate-400 dark:bg-slate-600 p-2 text-white">
              Aside
            </div>
          </div>
          <div className="h-12 bg-slate-500 dark:bg-slate-700 p-2 text-white font-bold">
            Footer
          </div>
        </div>
      );
    } else if (level.id === 22) {
      return (
        <div
          style={containerStyle}
          className="h-full border border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-4"
        >
          <div className="w-32 h-32 bg-slate-500 dark:bg-slate-700 rounded-md flex items-center justify-center">
            <div className="text-center text-white">Card Content</div>
          </div>
        </div>
      );
    } else if (level.id === 23) {
      return (
        <div
          style={containerStyle}
          className="h-full border border-dashed border-slate-300 dark:border-slate-700 rounded-lg"
        >
          <div className="p-4 bg-slate-500 dark:bg-slate-700 text-white">
            Header Content
          </div>
          <div className="flex-1 p-4">Main Content Area</div>
          <div className="p-4 bg-slate-500 dark:bg-slate-700 text-white">
            Footer Content
          </div>
        </div>
      );
    } else if (level.id === 24) {
      return (
        <div
          style={containerStyle}
          className="h-full border border-dashed border-slate-300 dark:border-slate-700 rounded-lg"
        >
          <div className="w-24 bg-slate-500 dark:bg-slate-700 p-4 text-white">
            Sidebar
          </div>
          <div className="flex-1 bg-slate-400 dark:bg-slate-600 p-4 text-white">
            Main Content
          </div>
        </div>
      );
    } else if (level.id === 25) {
      return (
        <div
          style={containerStyle}
          className="h-full border border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-4"
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="w-20 h-20 bg-slate-500 dark:bg-slate-700 rounded-md m-1"
            ></div>
          ))}
        </div>
      );
    } else if (level.id === 26) {
      return (
        <div
          style={containerStyle}
          className="h-16 border border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-4"
        >
          <div className="h-8 w-24 bg-slate-500 dark:bg-slate-700 rounded-md"></div>
          <div className="flex gap-4">
            <div className="h-6 w-12 bg-slate-400 dark:bg-slate-600 rounded-md"></div>
            <div className="h-6 w-12 bg-slate-400 dark:bg-slate-600 rounded-md"></div>
            <div className="h-6 w-12 bg-slate-400 dark:bg-slate-600 rounded-md"></div>
          </div>
        </div>
      );
    } else if (level.id === 27) {
      return (
        <div
          style={containerStyle}
          className="h-full border border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-4"
        >
          <div className="w-16 h-12 bg-slate-500 dark:bg-slate-700 rounded-md m-1"></div>
          <div className="w-16 h-20 bg-slate-500 dark:bg-slate-700 rounded-md m-1"></div>
          <div className="w-16 h-16 bg-slate-500 dark:bg-slate-700 rounded-md m-1"></div>
          <div className="w-16 h-24 bg-slate-500 dark:bg-slate-700 rounded-md m-1"></div>
          <div className="w-16 h-14 bg-slate-500 dark:bg-slate-700 rounded-md m-1"></div>
          <div className="w-16 h-18 bg-slate-500 dark:bg-slate-700 rounded-md m-1"></div>
        </div>
      );
    } else if (level.id === 28) {
      return (
        <div
          style={containerStyle}
          className="h-full border border-dashed border-slate-300 dark:border-slate-700 rounded-lg"
        >
          <div className="flex-1 bg-slate-500 dark:bg-slate-700 p-4 text-white">
            Left Half
          </div>
          <div className="flex-1 bg-slate-400 dark:bg-slate-600 p-4 text-white">
            Right Half
          </div>
        </div>
      );
    } else if (level.id === 29) {
      return (
        <div
          style={containerStyle}
          className="h-full border border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-4"
        >
          <div className="flex">
            <div className="w-24 bg-slate-500 dark:bg-slate-700 p-2 text-white">
              Label 1
            </div>
            <div className="flex-1 bg-slate-400 dark:bg-slate-600 p-2 text-white">
              Input 1
            </div>
          </div>
          <div className="flex">
            <div className="w-24 bg-slate-500 dark:bg-slate-700 p-2 text-white">
              Label 2
            </div>
            <div className="flex-1 bg-slate-400 dark:bg-slate-600 p-2 text-white">
              Input 2
            </div>
          </div>
          <div className="flex">
            <div className="w-24 bg-slate-500 dark:bg-slate-700 p-2 text-white">
              Label 3
            </div>
            <div className="flex-1 bg-slate-400 dark:bg-slate-600 p-2 text-white">
              Input 3
            </div>
          </div>
        </div>
      );
    } else if (level.id === 30) {
      return (
        <div
          style={containerStyle}
          className="h-full border border-dashed border-slate-300 dark:border-slate-700 rounded-lg"
        >
          <div className="h-12 bg-slate-500 dark:bg-slate-700 p-2 text-white">
            Header
          </div>
          <div className="flex flex-1">
            <div className="w-24 bg-slate-400 dark:bg-slate-600 p-2 text-white">
              Sidebar
            </div>
            <div className="flex-1 p-2">
              <div className="grid grid-cols-2 gap-2 h-full">
                <div className="bg-slate-300 dark:bg-slate-500 p-2 rounded-md text-white">
                  Dashboard Item 1
                </div>
                <div className="bg-slate-300 dark:bg-slate-500 p-2 rounded-md text-white">
                  Dashboard Item 2
                </div>
                <div className="bg-slate-300 dark:bg-slate-500 p-2 rounded-md text-white">
                  Dashboard Item 3
                </div>
                <div className="bg-slate-300 dark:bg-slate-500 p-2 rounded-md text-white">
                  Dashboard Item 4
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <main className="container px-6 py-8 md:px-8 md:py-12">
        <div className="flex flex-col gap-2 mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">
            Flexbox Game
          </h1>
          <p className="text-slate-500 md:text-xl dark:text-slate-400">
            Learn Flexbox by solving layout challenges. Match the target layout
            by setting the correct Flexbox properties.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 space-y-2">
                <h2 className="text-xl font-bold dark:text-white">
                  Level {currentLevel}: {level.title}
                </h2>
                <p className="text-slate-500 dark:text-slate-400">
                  {level.description}
                </p>
                {isCorrect && (
                  <div className="flex items-center text-green-500 dark:text-green-400 font-medium">
                    <Check className="mr-1 h-4 w-4" /> Correct! Well done!
                  </div>
                )}
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={resetLevel}>
                  <RefreshCw className="mr-1 h-4 w-4" />
                  Reset
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowHint(true)}
                    >
                      <HelpCircle className="mr-1 h-4 w-4" />
                      Hint
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Hint for Level {currentLevel}</DialogTitle>
                      <DialogDescription>{level.hint}</DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowSolution(true)}
                    >
                      <BookOpen className="mr-1 h-4 w-4" />
                      Solution
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        Solution for Level {currentLevel}
                      </DialogTitle>
                      <DialogDescription>
                        {level.targetLayout}
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <h3 className="text-lg font-medium dark:text-white">
                  Target Layout
                </h3>
                <div className="h-60 bg-white dark:bg-slate-900 rounded-lg overflow-hidden">
                  {renderTargetLayout()}
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium dark:text-white">
                  Your Layout
                </h3>
                <div className="h-60 bg-white dark:bg-slate-900 rounded-lg overflow-hidden">
                  {renderUserLayout()}
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium dark:text-white">
                Generated CSS
              </h3>
              <div className="rounded-lg bg-slate-100 p-4 dark:bg-slate-800">
                <pre className="text-sm text-slate-900 dark:text-slate-50 overflow-x-auto">
                  <code>{`.container {
  display: ${userProperties.display};
  flex-direction: ${userProperties.flexDirection};
  justify-content: ${userProperties.justifyContent};
  align-items: ${userProperties.alignItems};
  flex-wrap: ${userProperties.flexWrap};
  align-content: ${userProperties.alignContent};
}`}</code>
                </pre>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl font-bold dark:text-white">Controls</h2>
              <div className="space-y-4 rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
                <div className="space-y-2">
                  <label className="text-sm font-medium dark:text-white">
                    display
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["block", "flex", "inline-flex"].map((value) => (
                      <Button
                        key={value}
                        variant={
                          userProperties.display === value
                            ? "default"
                            : "outline"
                        }
                        size="sm"
                        onClick={() =>
                          setUserProperties({
                            ...userProperties,
                            display: value,
                          })
                        }
                      >
                        {value}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium dark:text-white">
                    flex-direction
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["row", "row-reverse", "column", "column-reverse"].map(
                      (value) => (
                        <Button
                          key={value}
                          variant={
                            userProperties.flexDirection === value
                              ? "default"
                              : "outline"
                          }
                          size="sm"
                          onClick={() =>
                            setUserProperties({
                              ...userProperties,
                              flexDirection: value,
                            })
                          }
                          disabled={userProperties.display === "block"}
                        >
                          {value}
                        </Button>
                      )
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium dark:text-white">
                    justify-content
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "flex-start",
                      "flex-end",
                      "center",
                      "space-between",
                      "space-around",
                      "space-evenly",
                    ].map((value) => (
                      <Button
                        key={value}
                        variant={
                          userProperties.justifyContent === value
                            ? "default"
                            : "outline"
                        }
                        size="sm"
                        onClick={() =>
                          setUserProperties({
                            ...userProperties,
                            justifyContent: value,
                          })
                        }
                        disabled={userProperties.display === "block"}
                      >
                        {value}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium dark:text-white">
                    align-items
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "flex-start",
                      "flex-end",
                      "center",
                      "baseline",
                      "stretch",
                    ].map((value) => (
                      <Button
                        key={value}
                        variant={
                          userProperties.alignItems === value
                            ? "default"
                            : "outline"
                        }
                        size="sm"
                        onClick={() =>
                          setUserProperties({
                            ...userProperties,
                            alignItems: value,
                          })
                        }
                        disabled={userProperties.display === "block"}
                      >
                        {value}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium dark:text-white">
                    flex-wrap
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["nowrap", "wrap", "wrap-reverse"].map((value) => (
                      <Button
                        key={value}
                        variant={
                          userProperties.flexWrap === value
                            ? "default"
                            : "outline"
                        }
                        size="sm"
                        onClick={() =>
                          setUserProperties({
                            ...userProperties,
                            flexWrap: value,
                          })
                        }
                        disabled={userProperties.display === "block"}
                      >
                        {value}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium dark:text-white">
                    align-content
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "flex-start",
                      "flex-end",
                      "center",
                      "space-between",
                      "space-around",
                      "stretch",
                    ].map((value) => (
                      <Button
                        key={value}
                        variant={
                          userProperties.alignContent === value
                            ? "default"
                            : "outline"
                        }
                        size="sm"
                        onClick={() =>
                          setUserProperties({
                            ...userProperties,
                            alignContent: value,
                          })
                        }
                        disabled={
                          userProperties.display === "block" ||
                          userProperties.flexWrap === "nowrap"
                        }
                      >
                        {value}
                      </Button>
                    ))}
                  </div>
                </div>

                <Button className="w-full" onClick={checkSolution}>
                  Check Solution
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold dark:text-white">Levels</h2>
              <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">
                    Page {levelPage + 1} of {totalPages}
                  </span>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setLevelPage(Math.max(0, levelPage - 1))}
                      disabled={levelPage === 0}
                    >
                      Previous
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        setLevelPage(Math.min(totalPages - 1, levelPage + 1))
                      }
                      disabled={levelPage === totalPages - 1}
                    >
                      Next
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {levels
                    .slice(
                      levelPage * levelsPerPage,
                      (levelPage + 1) * levelsPerPage
                    )
                    .map((level) => (
                      <Button
                        key={level.id}
                        variant={
                          currentLevel === level.id ? "default" : "outline"
                        }
                        size="sm"
                        className={cn(
                          completedLevels.includes(level.id) &&
                            "border-green-500 dark:border-green-500",
                          completedLevels.includes(level.id) &&
                            currentLevel !== level.id &&
                            "text-green-500 dark:text-green-500"
                        )}
                        onClick={() => setCurrentLevel(level.id)}
                      >
                        {level.id}
                        {completedLevels.includes(level.id) && (
                          <Check className="ml-1 h-3 w-3" />
                        )}
                      </Button>
                    ))}
                </div>
              </div>
            </div>

            {isCorrect && (
              <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-900 dark:bg-green-900/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-green-500 dark:text-green-400" />
                    <span className="font-medium text-green-800 dark:text-green-300">
                      Level Complete!
                    </span>
                  </div>
                  {currentLevel < levels.length ? (
                    <Button onClick={goToNextLevel}>Next Level</Button>
                  ) : (
                    <Button disabled={!completedLevels.includes(levels.length)}>
                      All Levels Complete!
                    </Button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Dialog open={showCongrats} onOpenChange={setShowCongrats}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-center text-xl">
              <Trophy className="mr-2 h-6 w-6 text-yellow-500" />
              Congratulations!
            </DialogTitle>
            <DialogDescription className="text-center">
              You've completed all levels of the Flexbox Game! You now have a
              solid understanding of CSS Flexbox layout.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center">
            <Link href="/">
              <Button>Return to Home</Button>
            </Link>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
