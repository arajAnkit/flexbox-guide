export type Level = {
  id: number
  title: string
  description: string
  targetLayout: string
  hint: string
  properties: {
    display: string
    flexDirection: string
    justifyContent: string
    alignItems: string
    flexWrap: string
    alignContent: string
  }
}

export const levels: Level[] = [
  // Beginner Levels (1-10)
  {
    id: 1,
    title: "Center an Item",
    description: "Center the box both horizontally and vertically in the container.",
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
    description: "Align items to the end of the container both horizontally and vertically.",
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
  // Add more levels as needed...
]
