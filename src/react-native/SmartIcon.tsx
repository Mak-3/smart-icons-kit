import React from "react";
import { findIconKey } from "../shared/utils";
import { getRegistry } from "../shared/registry";

export type SmartIconProps = {
  name: string;
  family?: string;
  size?: number;
  color?: string;
  strokeWidth?: number;
  prefixMatch?: boolean; // New prop for fuzzy matching
};

export const SmartIcon: React.FC<SmartIconProps> = ({
  name,
  family = "lucide",
  size = 20,
  color = "black",
  strokeWidth,
  prefixMatch = false, // Default to false for backward compatibility
}) => {
  const key = findIconKey(name, family, prefixMatch);
  if (!key) return null;

  const Icon = getRegistry()[family][key].component;
  return <Icon size={size} color={color} strokeWidth={strokeWidth} />;
};
