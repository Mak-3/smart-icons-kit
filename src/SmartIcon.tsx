import React from "react";
import { findIconKey } from "./core/utils";
import { getRegistry } from "./core/registry";

export type SmartIconProps = {
  name: string;
  family?: string;
  size?: number;
  color?: string;
};

export const SmartIcon: React.FC<SmartIconProps> = ({
  name,
  family = "lucide",
  size = 20,
  color = "black",
}) => {
  const key = findIconKey(name, family);
  if (!key) return null;

  const Icon = getRegistry()[family][key].component;
  return <Icon size={size} color={color} />;
};
