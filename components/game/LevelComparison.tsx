import { Target, Code } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LayoutRenderer } from "./LayoutRenderer";
import type { Level, UserProperties, UserItemProperties } from "@/types/game";

interface LevelComparisonProps {
  level: Level;
  userProperties: UserProperties;
  userItemProperties: UserItemProperties;
}

export function LevelComparison({
  level,
  userProperties,
  userItemProperties,
}: LevelComparisonProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-green-500" />
            Target Layout
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 rounded-lg overflow-hidden">
            <LayoutRenderer level={level} isTarget={true} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5 text-blue-500" />
            Your Layout
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 rounded-lg overflow-hidden">
            <LayoutRenderer
              level={level}
              userProperties={userProperties}
              userItemProperties={userItemProperties}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
