import { 
  Home, 
  Trash2, 
  Search, 
  User, 
  Settings, 
  Mail, 
  Phone, 
  Calendar,
  Heart,
  Star,
  Download,
  Upload,
  Edit,
  Save,
  X
} from "lucide-react";
import type { IconMap } from "../shared/types";

export const lucideMap: IconMap = {
  home: {
    synonyms: ["home", "house", "building", "dwelling"],
    component: Home,
  },
  delete: {
    synonyms: ["delete", "trash", "remove", "bin", "garbage"],
    component: Trash2,
  },
  search: {
    synonyms: ["search", "find", "magnify", "lookup", "seek"],
    component: Search,
  },
  user: {
    synonyms: ["user", "person", "account", "profile", "people"],
    component: User,
  },
  settings: {
    synonyms: ["settings", "config", "preferences", "options", "gear"],
    component: Settings,
  },
  mail: {
    synonyms: ["mail", "email", "message", "envelope", "letter"],
    component: Mail,
  },
  phone: {
    synonyms: ["phone", "call", "telephone", "mobile", "contact"],
    component: Phone,
  },
  calendar: {
    synonyms: ["calendar", "date", "schedule", "event", "time"],
    component: Calendar,
  },
  heart: {
    synonyms: ["heart", "love", "like", "favorite", "emotion"],
    component: Heart,
  },
  star: {
    synonyms: ["star", "rating", "favorite", "bookmark", "highlight"],
    component: Star,
  },
  download: {
    synonyms: ["download", "save", "get", "fetch", "retrieve"],
    component: Download,
  },
  upload: {
    synonyms: ["upload", "send", "post", "share", "submit"],
    component: Upload,
  },
  edit: {
    synonyms: ["edit", "modify", "change", "update", "alter"],
    component: Edit,
  },
  save: {
    synonyms: ["save", "store", "keep", "preserve", "retain"],
    component: Save,
  },
  close: {
    synonyms: ["close", "exit", "cancel", "dismiss", "quit"],
    component: X,
  },
};
