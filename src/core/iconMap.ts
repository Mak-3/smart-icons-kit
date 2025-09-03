import { Home, Trash2, Search, User } from "lucide-react";
import type { IconMap } from "./types";

export const lucideMap: IconMap = {
  home: {
    synonyms: ["home", "house", "building"],
    component: Home,
  },
  delete: {
    synonyms: ["delete", "trash", "remove", "bin"],
    component: Trash2,
  },
  search: {
    synonyms: ["search", "find", "magnify", "lookup"],
    component: Search,
  },
  user: {
    synonyms: ["user", "person", "account", "profile"],
    component: User,
  },
};
