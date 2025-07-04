import type { Level, UserProperties, UserItemProperties } from "@/types/game";

interface LayoutRendererProps {
  level: Level;
  userProperties?: UserProperties;
  userItemProperties?: UserItemProperties;
  isTarget?: boolean;
}

export function LayoutRenderer({
  level,
  userProperties,
  userItemProperties,
  isTarget = false,
}: LayoutRendererProps) {
  // Use level properties for target, user properties for user layout
  const properties = isTarget ? level.properties : userProperties;
  const itemProps = isTarget ? level.itemProperties : userItemProperties;

  const containerStyle = properties
    ? {
        display: properties.display,
        flexDirection: properties.flexDirection as any,
        justifyContent: properties.justifyContent,
        alignItems: properties.alignItems,
        flexWrap: properties.flexWrap as any,
        alignContent: properties.alignContent,
      }
    : {};

  const getBackgroundGradient = () => {
    if (isTarget) {
      const gradients = [
        "from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950",
        "from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950",
        "from-yellow-50 to-orange-50 dark:from-yellow-950 dark:to-orange-950",
        "from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950",
        "from-red-50 to-rose-50 dark:from-red-950 dark:to-rose-950",
        "from-teal-50 to-cyan-50 dark:from-teal-950 dark:to-cyan-950",
        "from-indigo-50 to-blue-50 dark:from-indigo-950 dark:to-blue-950",
        "from-emerald-50 to-green-50 dark:from-emerald-950 dark:to-green-950",
        "from-violet-50 to-purple-50 dark:from-violet-950 dark:to-purple-950",
        "from-amber-50 to-yellow-50 dark:from-amber-950 dark:to-yellow-950",
      ];
      return gradients[(level.id - 1) % gradients.length];
    }
    return "from-slate-50 to-gray-50 dark:from-slate-950 dark:to-gray-950";
  };

  const getItemColor = (index: number) => {
    const colors = [
      "from-blue-400 to-blue-600",
      "from-green-400 to-green-600",
      "from-purple-400 to-purple-600",
    ];

    if (!isTarget) {
      return "from-slate-400 to-slate-600";
    }

    return colors[index] || colors[0];
  };

  const getItemStyle = (index: number) => {
    if (!itemProps || !properties?.display?.includes("flex")) {
      return {};
    }

    return {
      flexGrow: itemProps.flexGrow[index] || "0",
      flexShrink: itemProps.flexShrink[index] || "1",
      flexBasis: itemProps.flexBasis[index] || "auto",
      alignSelf: itemProps.alignSelf[index] || "auto",
      order: itemProps.order[index] || "0",
    };
  };

  const renderItems = () => {
    // Single item layouts
    if ([1, 21].includes(level.id)) {
      return (
        <div
          style={getItemStyle(0)}
          className={`w-16 h-16 bg-gradient-to-br ${getItemColor(
            0
          )} rounded-lg flex justify-center items-center shadow-lg transform hover:scale-105 transition-transform`}
        >
          <span className="text-white font-bold text-lg">1</span>
        </div>
      );
    }

    // Three items layouts (most levels)
    const itemCount = [22, 23].includes(level.id) ? 6 : 3;
    const items = Array.from({ length: itemCount }).map((_, i) => {
      const itemIndex = i % 3; // For levels with more than 3 items, cycle through the 3 item styles

      // Special handling for different layouts
      let className = `bg-gradient-to-br ${getItemColor(
        itemIndex
      )} rounded-lg flex justify-center items-center shadow-lg transform hover:scale-105 transition-transform`;
      let content: string | number = i + 1;
      
      // Baseline layout (different heights)
      if (level.id === 8) {
        const heights = ["h-12", "h-16", "h-20"];
        const labels = ["A", "B", "C"];
        className = `w-16 ${heights[i]} bg-gradient-to-br ${getItemColor(
          i
        )} rounded-lg flex items-end justify-center pb-1`;
        content = labels[i];
      }
      // Masonry layout (different heights)
      else if (level.id === 23) {
        const heights = ["h-12", "h-20", "h-16", "h-24", "h-14", "h-18"];
        className = `w-16 ${heights[i]} bg-gradient-to-br ${getItemColor(
          itemIndex
        )} rounded-lg m-1 flex items-center justify-center text-white font-bold`;
      }
      // Wrapping layouts
      else if ([4, 11, 12, 13, 14, 15, 16, 22, 25].includes(level.id)) {
        className = `w-16 h-16 bg-gradient-to-br ${getItemColor(
          itemIndex
        )} rounded-lg m-1 flex justify-center items-center shadow-lg transform hover:scale-105 transition-transform`;
      }
      // Default layouts
      else {
        className = `w-16 h-16 bg-gradient-to-br ${getItemColor(
          itemIndex
        )} rounded-lg flex justify-center items-center shadow-lg transform hover:scale-105 transition-transform`;
      }

      return (
        <div key={i} style={getItemStyle(itemIndex)} className={className}>
          <span className="text-white font-bold text-lg">{content}</span>
        </div>
      );
    });

    return items;
  };

  return (
    <div
      style={containerStyle}
      className={`h-full border border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-4 bg-gradient-to-br ${getBackgroundGradient()} transition-all duration-300`}
    >
      {renderItems()}
    </div>
  );
}
