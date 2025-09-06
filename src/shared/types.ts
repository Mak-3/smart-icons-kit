import type { ComponentType } from "react";

export type IconEntry = {
  synonyms: string[];
  component: ComponentType<any>;
};

export type IconMap = Record<string, IconEntry>;

export type IconFamilyRegistry = Record<string, IconMap>;
