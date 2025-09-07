import React from "react";
import { findIconKey } from "../shared/utils.js";
import { getRegistry } from "../shared/registry.js";

export type SmartIconProps = {
  name: string;
  family?: string;
  prefixMatch?: boolean;
  sentenceMatch?: boolean;
  fallbackIcon?: React.ComponentType<any>;
} & React.ComponentProps<'svg'>; // Spread all SVG props (works for React Native too)

export const SmartIcon: React.FC<SmartIconProps> = ({
  name,
  family = "lucide",
  prefixMatch = false,
  sentenceMatch = false,
  fallbackIcon: FallbackIcon,
  ...svgProps // Spread all other props to the icon component
}) => {
  const key = findIconKey(name, family, prefixMatch, sentenceMatch);
  
  // If no icon found and no fallback, return null
  if (!key && !FallbackIcon) return null;
  
  // If no icon found but fallback exists, render fallback
  if (!key && FallbackIcon) {
    return <FallbackIcon {...svgProps} />;
  }
  
  // Render the found icon with all spread props
  if (key) {
    const Icon = getRegistry()[family][key].component;
    return <Icon {...svgProps} />;
  }
  
  return null;
};
