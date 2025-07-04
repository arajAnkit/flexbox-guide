"use client";

import { useState, useEffect } from "react";
import { levels } from "@/data/levels";

import type {
  GameState,
  UserProperties,
  UserItemProperties,
} from "@/types/game";

const initialUserProperties: UserProperties = {
  display: "block",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "stretch",
  flexWrap: "nowrap",
  alignContent: "stretch",
};

const initialUserItemProperties: UserItemProperties = {
  flexGrow: ["0", "0", "0"],
  flexShrink: ["1", "1", "1"],
  flexBasis: ["auto", "auto", "auto"],
  alignSelf: ["auto", "auto", "auto"],
  order: ["0", "0", "0"],
};

export function useFlexboxGame() {
  const [gameState, setGameState] = useState<GameState>({
    currentLevel: 1,
    userProperties: initialUserProperties,
    userItemProperties: initialUserItemProperties,
    isCorrect: false,
    completedLevels: [],
    streak: 0,
    totalScore: 0,
    isAnimating: false,
    levelPage: 0,
  });

  const [showCongrats, setShowCongrats] = useState(false);
  const [showCss, setShowCss] = useState(false);

  const currentLevelData =
    levels.find((l) => l.id === gameState.currentLevel) || levels[0];
  const progressPercentage =
    (gameState.completedLevels.length / levels.length) * 100;

  useEffect(() => {
    setGameState((prev) => ({
      ...prev,
      userProperties: initialUserProperties,
      userItemProperties: initialUserItemProperties,
      isCorrect: false,
      isAnimating: true,
    }));
    setTimeout(() => {
      setGameState((prev) => ({ ...prev, isAnimating: false }));
    }, 300);
  }, [gameState.currentLevel]);

  const updateUserProperties = (newProperties: Partial<UserProperties>) => {
    setGameState((prev) => ({
      ...prev,
      userProperties: { ...prev.userProperties, ...newProperties },
    }));
  };

  const updateUserItemProperties = (
    newProperties: Partial<UserItemProperties>
  ) => {
    setGameState((prev) => ({
      ...prev,
      userItemProperties: { ...prev.userItemProperties, ...newProperties },
    }));
  };

  const checkSolution = () => {
    // Check container properties
    const containerMatch = Object.entries(currentLevelData.properties).every(
      ([key, value]) =>
        gameState.userProperties[key as keyof UserProperties] === value
    );

    // Check item properties if they exist
    let itemMatch = true;
    if (currentLevelData.itemProperties) {
      itemMatch = Object.entries(currentLevelData.itemProperties).every(
        ([key, values]) => {
          const userValues =
            gameState.userItemProperties[key as keyof UserItemProperties];
          return values.every((value, index) => userValues[index] === value);
        }
      );
    }

    const isMatch = containerMatch && itemMatch;

    setGameState((prev) => ({ ...prev, isCorrect: isMatch }));

    if (
      isMatch &&
      !gameState.completedLevels.includes(gameState.currentLevel)
    ) {
      const points =
        currentLevelData.difficulty === "advanced"
          ? 30
          : currentLevelData.difficulty === "intermediate"
          ? 20
          : 10;

      setGameState((prev) => ({
        ...prev,
        completedLevels: [...prev.completedLevels, prev.currentLevel],
        streak: prev.streak + 1,
        totalScore: prev.totalScore + points,
      }));

      if (
        gameState.currentLevel === levels.length &&
        gameState.completedLevels.length === levels.length - 1
      ) {
        setShowCongrats(true);
      }
    }
  };

  const resetLevel = () => {
    setGameState((prev) => ({
      ...prev,
      userProperties: initialUserProperties,
      userItemProperties: initialUserItemProperties,
      isCorrect: false,
    }));
  };

  const goToNextLevel = () => {
    if (gameState.currentLevel < levels.length) {
      setGameState((prev) => ({
        ...prev,
        currentLevel: prev.currentLevel + 1,
      }));
    }
  };

  const goToLevel = (levelId: number) => {
    setGameState((prev) => ({ ...prev, currentLevel: levelId }));
  };

  const setLevelPage = (page: number) => {
    setGameState((prev) => ({ ...prev, levelPage: page }));
  };

  const toggleCssVisibility = () => {
    setShowCss((prev) => !prev);
  };

  return {
    gameState,
    currentLevelData,
    progressPercentage,
    showCongrats,
    setShowCongrats,
    showCss,
    toggleCssVisibility,
    updateUserProperties,
    updateUserItemProperties,
    checkSolution,
    resetLevel,
    goToNextLevel,
    goToLevel,
    setLevelPage,
    levels,
  };
}
