"use client";

import { Play, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PropertyControl } from "./PropertyControl";
import type { UserProperties } from "@/types/game";

interface FlexboxControlsProps {
  userProperties: UserProperties;
  onPropertyChange: (property: keyof UserProperties, value: string) => void;
  onCheckSolution: () => void;
  showCss: boolean;
  onToggleCss: () => void;
}

export function FlexboxControls({
  userProperties,
  onPropertyChange,
  onCheckSolution,
  showCss,
  onToggleCss,
}: FlexboxControlsProps) {
  const propertyOptions = {
    display: ["block", "flex", "inline-flex"],
    flexDirection: ["row", "row-reverse", "column", "column-reverse"],
    justifyContent: [
      "flex-start",
      "flex-end",
      "center",
      "space-between",
      "space-around",
      "space-evenly",
    ],
    alignItems: ["flex-start", "flex-end", "center", "baseline", "stretch"],
    flexWrap: ["nowrap", "wrap", "wrap-reverse"],
    alignContent: [
      "flex-start",
      "flex-end",
      "center",
      "space-between",
      "space-around",
      "stretch",
    ],
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Flexbox Controls</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <PropertyControl
          label="display"
          value={userProperties.display}
          options={propertyOptions.display}
          onChange={(value) => onPropertyChange("display", value)}
        />

        <PropertyControl
          label="flex-direction"
          value={userProperties.flexDirection}
          options={propertyOptions.flexDirection}
          onChange={(value) => onPropertyChange("flexDirection", value)}
          disabled={userProperties.display === "block"}
        />

        <PropertyControl
          label="justify-content"
          value={userProperties.justifyContent}
          options={propertyOptions.justifyContent}
          onChange={(value) => onPropertyChange("justifyContent", value)}
          disabled={userProperties.display === "block"}
        />

        <PropertyControl
          label="align-items"
          value={userProperties.alignItems}
          options={propertyOptions.alignItems}
          onChange={(value) => onPropertyChange("alignItems", value)}
          disabled={userProperties.display === "block"}
        />

        <PropertyControl
          label="flex-wrap"
          value={userProperties.flexWrap}
          options={propertyOptions.flexWrap}
          onChange={(value) => onPropertyChange("flexWrap", value)}
          disabled={userProperties.display === "block"}
        />

        <PropertyControl
          label="align-content"
          value={userProperties.alignContent}
          options={propertyOptions.alignContent}
          onChange={(value) => onPropertyChange("alignContent", value)}
          disabled={
            userProperties.display === "block" ||
            userProperties.flexWrap === "nowrap"
          }
        />

        <Button
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold py-3 transition-all duration-200 transform hover:scale-105"
          onClick={onCheckSolution}
        >
          <Play className="mr-2 h-4 w-4" />
          Check Solution
        </Button>

        <Button
          variant="outline"
          className="w-full bg-transparent"
          onClick={onToggleCss}
        >
          <Code className="mr-2 h-4 w-4" />
          {showCss ? "Hide Generated CSS" : "Show Generated CSS"}
        </Button>
      </CardContent>
    </Card>
  );
}
