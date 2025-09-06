import React from "react";
import { findIconKey } from "../shared/utils";
import { getRegistry } from "../shared/registry";

export type SmartIconProps = {
  name: string;
  family?: string;
  prefixMatch?: boolean;
  fallbackIcon?: React.ComponentType<any>;
} & React.ComponentProps<'svg'>; // Spread all SVG props

export const SmartIcon: React.FC<SmartIconProps> = ({
  name,
  family = "lucide",
  prefixMatch = false,
  fallbackIcon: FallbackIcon,
  ...svgProps // Spread all other props to the icon component
}) => {
  const key = findIconKey(name, family, prefixMatch);
  
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
