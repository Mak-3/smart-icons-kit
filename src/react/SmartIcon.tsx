import React from "react";
import { findIconKey } from "../shared/utils.js";
import { getRegistry } from "../shared/registry.js";

export type SmartIconProps = {
  name: string;
  family?: string;
  prefixMatch?: boolean;
  sentenceMatch?: boolean;
  fallbackIcon?: React.ComponentType<any>;
} & React.ComponentProps<any>;

export const SmartIcon: React.FC<SmartIconProps> = ({
  name,
  family = "lucide",
  prefixMatch = false,
  sentenceMatch = false,
  fallbackIcon: FallbackIcon,
  ...props
}) => {
  const key = findIconKey(name, family, prefixMatch, sentenceMatch);
  
  if (!key && !FallbackIcon) return null;
  
  if (!key && FallbackIcon) {
    return <FallbackIcon {...props} />;
  }
  
  if (key) {
    const Icon = getRegistry()[family][key].component;
    return <Icon {...props} />;
  }
  
  return null;
};
