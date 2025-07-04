export type Level = {
  id: number;
  title: string;
  description: string;
  targetLayout: string;
  hint: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  properties: {
    display: string;
    flexDirection: string;
    justifyContent: string;
    alignItems: string;
    flexWrap: string;
    alignContent: string;
  };
  itemProperties?: {
    flexGrow: string[];
    flexShrink: string[];
    flexBasis: string[];
    alignSelf: string[];
    order: string[];
  };
};

export type UserProperties = {
  display: string;
  flexDirection: string;
  justifyContent: string;
  alignItems: string;
  flexWrap: string;
  alignContent: string;
};

export type UserItemProperties = {
  flexGrow: string[];
  flexShrink: string[];
  flexBasis: string[];
  alignSelf: string[];
  order: string[];
};

export type GameState = {
  currentLevel: number;
  userProperties: UserProperties;
  userItemProperties: UserItemProperties;
  isCorrect: boolean;
  completedLevels: number[];
  streak: number;
  totalScore: number;
  isAnimating: boolean;
  levelPage: number;
};
