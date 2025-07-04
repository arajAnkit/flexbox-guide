"use client";

import { CSSOutput } from "@/components/game/CSSOutput";
import { GameHeader } from "@/components/game/GameHeader";
import { LevelHeader } from "@/components/game/LevelHeader";
import { CongratsDialog } from "@/components/game/CongratsDialog";
import { SuccessMessage } from "@/components/game/SuccessMessage";
import { LevelComparison } from "@/components/game/LevelComparison";
import { FlexboxControls } from "@/components/game/FlexboxControls";
import { LevelNavigation } from "@/components/game/LevelNavigation";
import { FlexboxItemControls } from "@/components/game/FlexboxItemControls";

import { useFlexboxGame } from "@/hooks/useFlexboxGame";

import type { UserProperties } from "@/types/game";
import type { UserItemProperties } from "@/types/game";

export default function FlexboxGame() {
  const {
    gameState,
    currentLevelData,
    progressPercentage,
    showCongrats,
    setShowCongrats,
    showCss,
    toggleCssVisibility,
    updateUserProperties,
    checkSolution,
    resetLevel,
    goToNextLevel,
    goToLevel,
    setLevelPage,
    levels,
    updateUserItemProperties,
  } = useFlexboxGame();

  const handlePropertyChange = (
    property: keyof UserProperties,
    value: string
  ) => {
    updateUserProperties({ [property]: value });
  };

  const handleItemPropertyChange = (
    property: keyof UserItemProperties,
    itemIndex: number,
    value: string
  ) => {
    const newValues = [...gameState.userItemProperties[property]];
    newValues[itemIndex] = value;
    updateUserItemProperties({ [property]: newValues });
  };

  const totalPages = Math.ceil(levels.length / 10);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950">
      <GameHeader
        streak={gameState.streak}
        totalScore={gameState.totalScore}
        progressPercentage={progressPercentage}
        completedLevels={gameState.completedLevels.length}
        totalLevels={levels.length}
      />

      <main className="container px-6 py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <LevelHeader
              level={currentLevelData}
              isCorrect={gameState.isCorrect}
              isAnimating={gameState.isAnimating}
              onReset={resetLevel}
            />

            <LevelComparison
              level={currentLevelData}
              userProperties={gameState.userProperties}
              userItemProperties={gameState.userItemProperties}
            />

            <FlexboxItemControls
              userItemProperties={gameState.userItemProperties}
              onItemPropertyChange={handleItemPropertyChange}
              isFlexContainer={
                gameState.userProperties.display === "flex" ||
                gameState.userProperties.display === "inline-flex"
              }
            />

            <CSSOutput
              userProperties={gameState.userProperties}
              userItemProperties={gameState.userItemProperties}
              isVisible={showCss}
            />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <FlexboxControls
              userProperties={gameState.userProperties}
              onPropertyChange={handlePropertyChange}
              onCheckSolution={checkSolution}
              showCss={showCss}
              onToggleCss={toggleCssVisibility}
            />

            <LevelNavigation
              levels={levels}
              currentLevel={gameState.currentLevel}
              completedLevels={gameState.completedLevels}
              levelPage={gameState.levelPage}
              totalPages={totalPages}
              onLevelChange={goToLevel}
              onPageChange={setLevelPage}
            />

            {gameState.isCorrect && (
              <SuccessMessage
                currentLevel={gameState.currentLevel}
                totalLevels={levels.length}
                onNextLevel={goToNextLevel}
              />
            )}
          </div>
        </div>
      </main>

      <CongratsDialog
        open={showCongrats}
        onOpenChange={setShowCongrats}
        totalScore={gameState.totalScore}
      />
    </div>
  );
}
