"use client";

import { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

import type { UserItemProperties } from "@/types/game";

interface FlexboxItemControlsProps {
  userItemProperties: UserItemProperties;
  onItemPropertyChange: (
    property: keyof UserItemProperties,
    itemIndex: number,
    value: string
  ) => void;
  isFlexContainer: boolean;
}

export function FlexboxItemControls({
  userItemProperties,
  onItemPropertyChange,
  isFlexContainer,
}: FlexboxItemControlsProps) {
  const [selectedItem, setSelectedItem] = useState(0); // 0 = Item 1, 1 = Item 2, 2 = Item 3

  const propertyOptions = {
    flexGrow: [
      { value: "0", label: "0 (no grow)" },
      { value: "1", label: "1 (equal grow)" },
      { value: "2", label: "2 (double grow)" },
      { value: "3", label: "3 (triple grow)" },
    ],
    flexShrink: [
      { value: "0", label: "0 (no shrink)" },
      { value: "1", label: "1 (normal shrink)" },
      { value: "2", label: "2 (double shrink)" },
      { value: "3", label: "3 (triple shrink)" },
    ],
    flexBasis: [
      { value: "auto", label: "auto (content size)" },
      { value: "0px", label: "0px (no initial size)" },
      { value: "50px", label: "50px" },
      { value: "100px", label: "100px" },
      { value: "150px", label: "150px" },
      { value: "200px", label: "200px" },
      { value: "25%", label: "25%" },
      { value: "50%", label: "50%" },
    ],
    alignSelf: [
      { value: "auto", label: "auto (inherit from container)" },
      { value: "flex-start", label: "flex-start" },
      { value: "flex-end", label: "flex-end" },
      { value: "center", label: "center" },
      { value: "baseline", label: "baseline" },
      { value: "stretch", label: "stretch" },
    ],
    order: [
      { value: "-1", label: "-1 (move before)" },
      { value: "0", label: "0 (default)" },
      { value: "1", label: "1 (move after)" },
      { value: "2", label: "2" },
      { value: "3", label: "3" },
    ],
  };

  const itemColors = [
    {
      bg: "bg-blue-50 dark:bg-blue-950",
      border: "border-blue-200 dark:border-blue-800",
      text: "text-blue-600 dark:text-blue-400",
    },
    {
      bg: "bg-green-50 dark:bg-green-950",
      border: "border-green-200 dark:border-green-800",
      text: "text-green-600 dark:text-green-400",
    },
    {
      bg: "bg-purple-50 dark:bg-purple-950",
      border: "border-purple-200 dark:border-purple-800",
      text: "text-purple-600 dark:text-purple-400",
    },
  ];

  if (!isFlexContainer) {
    return (
      <Card className="opacity-50">
        <CardHeader>
          <CardTitle>Flexbox Item Controls</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Set display to "flex" to enable item controls
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Flexbox Item Controls</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Item Selection */}
        <div className="space-y-2">
          <Label htmlFor="item-select">Select Item to Modify</Label>
          <Select
            value={selectedItem.toString()}
            onValueChange={(value) => setSelectedItem(Number.parseInt(value))}
          >
            <SelectTrigger
              id="item-select"
              className={`${itemColors[selectedItem].bg} ${itemColors[selectedItem].border}`}
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem
                value="0"
                className="text-blue-600 dark:text-blue-400"
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gradient-to-br from-blue-400 to-blue-600 rounded"></div>
                  Item 1
                </div>
              </SelectItem>
              <SelectItem
                value="1"
                className="text-green-600 dark:text-green-400"
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gradient-to-br from-green-400 to-green-600 rounded"></div>
                  Item 2
                </div>
              </SelectItem>
              <SelectItem
                value="2"
                className="text-purple-600 dark:text-purple-400"
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gradient-to-br from-purple-400 to-purple-600 rounded"></div>
                  Item 3
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Current Item Properties */}
        <div
          className={`border rounded-lg p-4 ${itemColors[selectedItem].border} ${itemColors[selectedItem].bg}`}
        >
          <h4 className={`font-semibold mb-4 ${itemColors[selectedItem].text}`}>
            Item {selectedItem + 1} Properties
          </h4>

          <div className="space-y-4">
            {/* Flex Grow */}
            <div className="space-y-2">
              <Label htmlFor="flex-grow">flex-grow</Label>
              <Select
                value={userItemProperties.flexGrow[selectedItem]}
                onValueChange={(value) =>
                  onItemPropertyChange("flexGrow", selectedItem, value)
                }
              >
                <SelectTrigger id="flex-grow">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {propertyOptions.flexGrow.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Flex Shrink */}
            <div className="space-y-2">
              <Label htmlFor="flex-shrink">flex-shrink</Label>
              <Select
                value={userItemProperties.flexShrink[selectedItem]}
                onValueChange={(value) =>
                  onItemPropertyChange("flexShrink", selectedItem, value)
                }
              >
                <SelectTrigger id="flex-shrink">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {propertyOptions.flexShrink.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Flex Basis */}
            <div className="space-y-2">
              <Label htmlFor="flex-basis">flex-basis</Label>
              <Select
                value={userItemProperties.flexBasis[selectedItem]}
                onValueChange={(value) =>
                  onItemPropertyChange("flexBasis", selectedItem, value)
                }
              >
                <SelectTrigger id="flex-basis">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {propertyOptions.flexBasis.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Align Self */}
            <div className="space-y-2">
              <Label htmlFor="align-self">align-self</Label>
              <Select
                value={userItemProperties.alignSelf[selectedItem]}
                onValueChange={(value) =>
                  onItemPropertyChange("alignSelf", selectedItem, value)
                }
              >
                <SelectTrigger id="align-self">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {propertyOptions.alignSelf.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Order */}
            <div className="space-y-2">
              <Label htmlFor="order">order</Label>
              <Select
                value={userItemProperties.order[selectedItem]}
                onValueChange={(value) =>
                  onItemPropertyChange("order", selectedItem, value)
                }
              >
                <SelectTrigger id="order">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {propertyOptions.order.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex gap-2">
          <button
            onClick={() => setSelectedItem((prev) => (prev > 0 ? prev - 1 : 2))}
            className="flex-1 px-3 py-2 text-sm bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-md transition-colors"
          >
            ← Previous Item
          </button>
          <button
            onClick={() => setSelectedItem((prev) => (prev < 2 ? prev + 1 : 0))}
            className="flex-1 px-3 py-2 text-sm bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-md transition-colors"
          >
            Next Item →
          </button>
        </div>

        {/* Current Values Summary */}
        <div className="text-xs text-slate-500 dark:text-slate-400 space-y-1">
          <div className="font-medium">All Items Summary:</div>
          <div className="grid grid-cols-3 gap-2 text-xs">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className={`p-2 rounded ${itemColors[index].bg} ${itemColors[index].border} border`}
              >
                <div className={`font-medium ${itemColors[index].text}`}>
                  Item {index + 1}
                </div>
                <div>grow: {userItemProperties.flexGrow[index]}</div>
                <div>shrink: {userItemProperties.flexShrink[index]}</div>
                <div>basis: {userItemProperties.flexBasis[index]}</div>
                <div>align: {userItemProperties.alignSelf[index]}</div>
                <div>order: {userItemProperties.order[index]}</div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
