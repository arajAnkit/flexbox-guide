import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import type { UserProperties, UserItemProperties } from "@/types/game";

interface CSSOutputProps {
  userProperties: UserProperties;
  userItemProperties: UserItemProperties;
  isVisible: boolean;
}

export function CSSOutput({
  userProperties,
  userItemProperties,
  isVisible,
}: CSSOutputProps) {
  if (!isVisible) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Generated CSS</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg bg-slate-900 dark:bg-slate-800 p-4 overflow-x-auto">
          <pre className="text-sm text-slate-100 dark:text-slate-200">
            <code>{`.container {
  display: ${userProperties.display};
  flex-direction: ${userProperties.flexDirection};
  justify-content: ${userProperties.justifyContent};
  align-items: ${userProperties.alignItems};
  flex-wrap: ${userProperties.flexWrap};
  align-content: ${userProperties.alignContent};
}

.item-1 {
  flex-grow: ${userItemProperties.flexGrow[0]};
  flex-shrink: ${userItemProperties.flexShrink[0]};
  flex-basis: ${userItemProperties.flexBasis[0]};
  align-self: ${userItemProperties.alignSelf[0]};
  order: ${userItemProperties.order[0]};
}

.item-2 {
  flex-grow: ${userItemProperties.flexGrow[1]};
  flex-shrink: ${userItemProperties.flexShrink[1]};
  flex-basis: ${userItemProperties.flexBasis[1]};
  align-self: ${userItemProperties.alignSelf[1]};
  order: ${userItemProperties.order[1]};
}

.item-3 {
  flex-grow: ${userItemProperties.flexGrow[2]};
  flex-shrink: ${userItemProperties.flexShrink[2]};
  flex-basis: ${userItemProperties.flexBasis[2]};
  align-self: ${userItemProperties.alignSelf[2]};
  order: ${userItemProperties.order[2]};
}`}</code>
          </pre>
        </div>
      </CardContent>
    </Card>
  );
}
