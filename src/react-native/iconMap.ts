import { 
  // Navigation & UI
  Home, Search, Menu, Settings, User, Users, Bell, BellOff, Eye, EyeOff,
  ChevronDown, ChevronUp, ChevronLeft, ChevronRight, ChevronsDown, ChevronsUp, ChevronsLeft, ChevronsRight,
  ArrowDown, ArrowUp, ArrowLeft, ArrowRight, ArrowDownLeft, ArrowDownRight, ArrowUpLeft, ArrowUpRight,
  Plus, Minus, X, Check, Circle, Square, Triangle, Star, Heart, Bookmark,
  
  // Actions & Controls
  Edit, Edit2, Edit3, Save, Copy, Scissors, Trash, Trash2, Delete,
  Download, Upload, Share, Share2, Link, Link2, ExternalLink, RefreshCw, RefreshCcw,
  Play, Pause, SkipBack, SkipForward, FastForward, Rewind, Volume, Volume1, Volume2, VolumeX,
  Maximize, Minimize, Maximize2, Minimize2, RotateCw, RotateCcw, ZoomIn, ZoomOut,
  
  // Communication
  Mail, MessageCircle, MessageSquare, Phone, PhoneCall, PhoneIncoming, PhoneOutgoing, PhoneMissed, PhoneOff,
  Send, Mic, MicOff, Headphones, Speaker, Video, VideoOff, Camera, CameraOff,
  
  // Files & Folders
  File, FileText, FilePlus, FileMinus, Folder, FolderPlus, FolderMinus, FolderOpen,
  Image, Film, Music, Package, Archive, Inbox, Clipboard, Paperclip,
  
  // Technology & Devices
  Smartphone, Tablet, Monitor, Laptop, Tv, Watch, HardDrive, Server, Database, Cpu,
  Wifi, WifiOff, Bluetooth, Battery, BatteryCharging, Power, Zap, ZapOff,
  
  // Social & Brand
  Facebook, Twitter, Instagram, Linkedin, Github, Gitlab, Youtube, Slack,
  
  // Business & Finance
  DollarSign, CreditCard, ShoppingCart, ShoppingBag, Package2, Truck, Briefcase, Building,
  TrendingUp, TrendingDown, BarChart, BarChart2, PieChart, Activity, Target,
  
  // Time & Calendar
  Calendar, Clock, Timer, Sunrise, Sunset, Moon, Sun,
  
  // Weather & Nature
  Cloud, CloudRain, CloudSnow, CloudLightning, CloudDrizzle, CloudOff, Umbrella, Droplet,
  Wind, Thermometer, Compass, Map, MapPin, Globe, Navigation, Navigation2,
  
  // Security & Privacy
  Lock, Unlock, Shield, ShieldOff, Key, Fingerprint,
  
  // Tools & Utilities
  Wrench, Hammer, Cog, Sliders, Filter, Hash, Tag,
  Layers, Grid, Layout, Sidebar, MoreHorizontal, MoreVertical,
  
  // Text & Typography
  Type, Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, AlignJustify,
  List, ListOrdered, Quote, Code, Terminal, Command,
  
  // Status & Feedback
  CheckCircle, XCircle, AlertCircle, AlertTriangle, AlertOctagon, Info, HelpCircle,
  ThumbsUp, ThumbsDown, Award, Trophy, Medal, Flag,
  
  // Shapes & Symbols
  Hexagon, Octagon, Diamond, Cross, BookmarkPlus, BookmarkMinus,
  
  // Miscellaneous
  Coffee, Gamepad2, Palette, Brush, Pen, Pencil, Eraser, Ruler,
  Gift, Cake, Pizza, Apple, Carrot, Leaf, Trees, Flower, Bug, Fish, Bird, Cat, Dog
} from "lucide-react-native";
import type { IconMap } from "../shared/types";

export const lucideMap: IconMap = {
  // Navigation & UI
  home: {
    synonyms: ["home", "house", "building", "dwelling", "main", "dashboard"],
    component: Home,
  },
  search: {
    synonyms: ["search", "find", "magnify", "lookup", "seek", "query"],
    component: Search,
  },
  menu: {
    synonyms: ["menu", "hamburger", "nav", "navigation", "bars", "list"],
    component: Menu,
  },
  settings: {
    synonyms: ["settings", "config", "preferences", "options", "gear", "cog"],
    component: Settings,
  },
  user: {
    synonyms: ["user", "person", "account", "profile", "people", "individual"],
    component: User,
  },
  users: {
    synonyms: ["users", "people", "group", "team", "members", "community"],
    component: Users,
  },
  bell: {
    synonyms: ["bell", "notification", "alert", "ring", "chime", "notify"],
    component: Bell,
  },
  bellOff: {
    synonyms: ["bell-off", "mute", "silent", "disable", "quiet", "no-notification"],
    component: BellOff,
  },
  eye: {
    synonyms: ["eye", "view", "see", "watch", "look", "visible"],
    component: Eye,
  },
  eyeOff: {
    synonyms: ["eye-off", "hide", "invisible", "blind", "conceal", "private"],
    component: EyeOff,
  },
  
  // Arrows & Navigation
  chevronDown: {
    synonyms: ["chevron-down", "arrow-down", "dropdown", "expand", "open"],
    component: ChevronDown,
  },
  chevronUp: {
    synonyms: ["chevron-up", "arrow-up", "collapse", "close", "up"],
    component: ChevronUp,
  },
  chevronLeft: {
    synonyms: ["chevron-left", "arrow-left", "back", "previous", "left"],
    component: ChevronLeft,
  },
  chevronRight: {
    synonyms: ["chevron-right", "arrow-right", "next", "forward", "right"],
    component: ChevronRight,
  },
  chevronsDown: {
    synonyms: ["chevrons-down", "arrows-down", "expand-all", "open-all"],
    component: ChevronsDown,
  },
  chevronsUp: {
    synonyms: ["chevrons-up", "arrows-up", "collapse-all", "close-all"],
    component: ChevronsUp,
  },
  chevronsLeft: {
    synonyms: ["chevrons-left", "arrows-left", "back-all", "previous-all"],
    component: ChevronsLeft,
  },
  chevronsRight: {
    synonyms: ["chevrons-right", "arrows-right", "forward-all", "next-all"],
    component: ChevronsRight,
  },
  arrowDown: {
    synonyms: ["arrow-down", "down", "descend", "lower", "decrease"],
    component: ArrowDown,
  },
  arrowUp: {
    synonyms: ["arrow-up", "up", "ascend", "raise", "increase"],
    component: ArrowUp,
  },
  arrowLeft: {
    synonyms: ["arrow-left", "left", "back", "previous", "return"],
    component: ArrowLeft,
  },
  arrowRight: {
    synonyms: ["arrow-right", "right", "forward", "next", "continue"],
    component: ArrowRight,
  },
  arrowDownLeft: {
    synonyms: ["arrow-down-left", "down-left", "diagonal-down-left"],
    component: ArrowDownLeft,
  },
  arrowDownRight: {
    synonyms: ["arrow-down-right", "down-right", "diagonal-down-right"],
    component: ArrowDownRight,
  },
  arrowUpLeft: {
    synonyms: ["arrow-up-left", "up-left", "diagonal-up-left"],
    component: ArrowUpLeft,
  },
  arrowUpRight: {
    synonyms: ["arrow-up-right", "up-right", "diagonal-up-right"],
    component: ArrowUpRight,
  },
  
  // Basic Actions
  plus: {
    synonyms: ["plus", "add", "create", "new", "insert", "increase"],
    component: Plus,
  },
  minus: {
    synonyms: ["minus", "remove", "subtract", "delete", "decrease", "reduce"],
    component: Minus,
  },
  x: {
    synonyms: ["x", "close", "cancel", "dismiss", "quit", "exit"],
    component: X,
  },
  check: {
    synonyms: ["check", "tick", "mark", "done", "complete", "success"],
    component: Check,
  },
  circle: {
    synonyms: ["circle", "round", "dot", "bullet", "point"],
    component: Circle,
  },
  square: {
    synonyms: ["square", "box", "rectangle", "block"],
    component: Square,
  },
  triangle: {
    synonyms: ["triangle", "warning", "alert", "caution"],
    component: Triangle,
  },
  star: {
    synonyms: ["star", "rating", "favorite", "bookmark", "highlight", "important"],
    component: Star,
  },
  heart: {
    synonyms: ["heart", "love", "like", "favorite", "emotion", "affection"],
    component: Heart,
  },
  bookmark: {
    synonyms: ["bookmark", "save", "mark", "tag", "favorite", "remember"],
    component: Bookmark,
  },
  
  // Actions & Controls
  edit: {
    synonyms: ["edit", "modify", "change", "update", "alter", "revise"],
    component: Edit,
  },
  edit2: {
    synonyms: ["edit-2", "edit-alt", "modify-alt", "change-alt"],
    component: Edit2,
  },
  edit3: {
    synonyms: ["edit-3", "edit-variant", "modify-variant", "change-variant"],
    component: Edit3,
  },
  save: {
    synonyms: ["save", "store", "keep", "preserve", "retain", "download"],
    component: Save,
  },
  copy: {
    synonyms: ["copy", "duplicate", "clone", "replicate", "duplicate"],
    component: Copy,
  },
  scissors: {
    synonyms: ["scissors", "cut", "trim", "snip", "clip"],
    component: Scissors,
  },
  trash: {
    synonyms: ["trash", "delete", "remove", "bin", "garbage", "dispose"],
    component: Trash,
  },
  trash2: {
    synonyms: ["trash-2", "delete-alt", "remove-alt", "bin-alt"],
    component: Trash2,
  },
  delete: {
    synonyms: ["delete", "remove", "trash", "bin", "garbage", "dispose"],
    component: Delete,
  },
  download: {
    synonyms: ["download", "save", "get", "fetch", "retrieve", "pull"],
    component: Download,
  },
  upload: {
    synonyms: ["upload", "send", "post", "share", "submit", "push"],
    component: Upload,
  },
  share: {
    synonyms: ["share", "send", "distribute", "spread", "broadcast"],
    component: Share,
  },
  share2: {
    synonyms: ["share-2", "share-alt", "send-alt", "distribute-alt"],
    component: Share2,
  },
  link: {
    synonyms: ["link", "url", "connect", "join", "attach", "reference"],
    component: Link,
  },
  link2: {
    synonyms: ["link-2", "link-alt", "connect-alt", "join-alt"],
    component: Link2,
  },
  externalLink: {
    synonyms: ["external-link", "open", "new-tab", "external", "outbound"],
    component: ExternalLink,
  },
  refreshCw: {
    synonyms: ["refresh-cw", "reload", "refresh", "update", "renew"],
    component: RefreshCw,
  },
  refreshCcw: {
    synonyms: ["refresh-ccw", "reload-alt", "refresh-alt", "update-alt"],
    component: RefreshCcw,
  },
  
  // Media Controls
  play: {
    synonyms: ["play", "start", "begin", "resume", "continue"],
    component: Play,
  },
  pause: {
    synonyms: ["pause", "stop", "halt", "suspend", "break"],
    component: Pause,
  },
  skipBack: {
    synonyms: ["skip-back", "previous", "back", "rewind", "reverse"],
    component: SkipBack,
  },
  skipForward: {
    synonyms: ["skip-forward", "next", "forward", "advance", "skip"],
    component: SkipForward,
  },
  fastForward: {
    synonyms: ["fast-forward", "speed-up", "accelerate", "rush"],
    component: FastForward,
  },
  rewind: {
    synonyms: ["rewind", "reverse", "backward", "retreat"],
    component: Rewind,
  },
  volume: {
    synonyms: ["volume", "sound", "audio", "speaker", "loudness"],
    component: Volume,
  },
  volume1: {
    synonyms: ["volume-1", "sound-1", "audio-1", "speaker-1"],
    component: Volume1,
  },
  volume2: {
    synonyms: ["volume-2", "sound-2", "audio-2", "speaker-2"],
    component: Volume2,
  },
  volumeX: {
    synonyms: ["volume-x", "mute", "silent", "no-sound", "quiet"],
    component: VolumeX,
  },
  
  // View Controls
  maximize: {
    synonyms: ["maximize", "expand", "fullscreen", "enlarge", "zoom-in"],
    component: Maximize,
  },
  minimize: {
    synonyms: ["minimize", "collapse", "shrink", "reduce", "zoom-out"],
    component: Minimize,
  },
  maximize2: {
    synonyms: ["maximize-2", "expand-alt", "fullscreen-alt"],
    component: Maximize2,
  },
  minimize2: {
    synonyms: ["minimize-2", "collapse-alt", "shrink-alt"],
    component: Minimize2,
  },
  rotateCw: {
    synonyms: ["rotate-cw", "rotate", "turn", "spin", "twist"],
    component: RotateCw,
  },
  rotateCcw: {
    synonyms: ["rotate-ccw", "rotate-alt", "turn-alt", "spin-alt"],
    component: RotateCcw,
  },
  zoomIn: {
    synonyms: ["zoom-in", "magnify", "enlarge", "expand", "increase"],
    component: ZoomIn,
  },
  zoomOut: {
    synonyms: ["zoom-out", "reduce", "shrink", "minimize", "decrease"],
    component: ZoomOut,
  },
  
  // Communication
  mail: {
    synonyms: ["mail", "email", "message", "envelope", "letter", "inbox"],
    component: Mail,
  },
  messageCircle: {
    synonyms: ["message-circle", "chat", "talk", "conversation", "discuss"],
    component: MessageCircle,
  },
  messageSquare: {
    synonyms: ["message-square", "chat-alt", "talk-alt", "conversation-alt"],
    component: MessageSquare,
  },
  phone: {
    synonyms: ["phone", "call", "telephone", "mobile", "contact", "dial"],
    component: Phone,
  },
  phoneCall: {
    synonyms: ["phone-call", "call", "ring", "dial", "contact"],
    component: PhoneCall,
  },
  phoneIncoming: {
    synonyms: ["phone-incoming", "incoming-call", "call-receive"],
    component: PhoneIncoming,
  },
  phoneOutgoing: {
    synonyms: ["phone-outgoing", "outgoing-call", "call-make"],
    component: PhoneOutgoing,
  },
  phoneMissed: {
    synonyms: ["phone-missed", "missed-call", "call-missed"],
    component: PhoneMissed,
  },
  phoneOff: {
    synonyms: ["phone-off", "call-off", "hang-up", "end-call"],
    component: PhoneOff,
  },
  send: {
    synonyms: ["send", "submit", "post", "deliver", "transmit"],
    component: Send,
  },
  mic: {
    synonyms: ["mic", "microphone", "record", "voice", "audio"],
    component: Mic,
  },
  micOff: {
    synonyms: ["mic-off", "mute", "silent", "no-mic", "disable-mic"],
    component: MicOff,
  },
  headphones: {
    synonyms: ["headphones", "headset", "earphones", "audio", "sound"],
    component: Headphones,
  },
  speaker: {
    synonyms: ["speaker", "sound", "audio", "volume", "loudspeaker"],
    component: Speaker,
  },
  video: {
    synonyms: ["video", "camera", "record", "film", "movie"],
    component: Video,
  },
  videoOff: {
    synonyms: ["video-off", "camera-off", "no-video", "disable-video"],
    component: VideoOff,
  },
  camera: {
    synonyms: ["camera", "photo", "picture", "snapshot", "capture"],
    component: Camera,
  },
  cameraOff: {
    synonyms: ["camera-off", "no-camera", "disable-camera"],
    component: CameraOff,
  },
  
  // Files & Folders
  file: {
    synonyms: ["file", "document", "page", "paper", "sheet"],
    component: File,
  },
  fileText: {
    synonyms: ["file-text", "document", "text", "content", "article"],
    component: FileText,
  },
  filePlus: {
    synonyms: ["file-plus", "new-file", "add-file", "create-file"],
    component: FilePlus,
  },
  fileMinus: {
    synonyms: ["file-minus", "remove-file", "delete-file"],
    component: FileMinus,
  },
  folder: {
    synonyms: ["folder", "directory", "collection", "group", "archive"],
    component: Folder,
  },
  folderPlus: {
    synonyms: ["folder-plus", "new-folder", "add-folder", "create-folder"],
    component: FolderPlus,
  },
  folderMinus: {
    synonyms: ["folder-minus", "remove-folder", "delete-folder"],
    component: FolderMinus,
  },
  folderOpen: {
    synonyms: ["folder-open", "open-folder", "expanded-folder"],
    component: FolderOpen,
  },
  image: {
    synonyms: ["image", "picture", "photo", "graphic", "visual"],
    component: Image,
  },
  film: {
    synonyms: ["film", "movie", "video", "cinema", "media"],
    component: Film,
  },
  music: {
    synonyms: ["music", "audio", "song", "track", "melody"],
    component: Music,
  },
  package: {
    synonyms: ["package", "box", "container", "bundle", "parcel"],
    component: Package,
  },
  archive: {
    synonyms: ["archive", "storage", "backup", "compress", "zip"],
    component: Archive,
  },
  inbox: {
    synonyms: ["inbox", "mailbox", "receive", "messages", "notifications"],
    component: Inbox,
  },
  clipboard: {
    synonyms: ["clipboard", "copy", "paste", "clip", "board"],
    component: Clipboard,
  },
  paperclip: {
    synonyms: ["paperclip", "attach", "attachment", "link", "connect"],
    component: Paperclip,
  },
  
  // Technology & Devices
  smartphone: {
    synonyms: ["smartphone", "phone", "mobile", "cell", "device"],
    component: Smartphone,
  },
  tablet: {
    synonyms: ["tablet", "ipad", "device", "screen", "portable"],
    component: Tablet,
  },
  monitor: {
    synonyms: ["monitor", "screen", "display", "desktop", "computer"],
    component: Monitor,
  },
  laptop: {
    synonyms: ["laptop", "computer", "notebook", "pc", "machine"],
    component: Laptop,
  },
  tv: {
    synonyms: ["tv", "television", "screen", "display", "media"],
    component: Tv,
  },
  watch: {
    synonyms: ["watch", "time", "clock", "timer", "wristwatch"],
    component: Watch,
  },
  hardDrive: {
    synonyms: ["hard-drive", "storage", "disk", "drive", "memory"],
    component: HardDrive,
  },
  server: {
    synonyms: ["server", "host", "computer", "machine", "system"],
    component: Server,
  },
  database: {
    synonyms: ["database", "data", "storage", "db", "information"],
    component: Database,
  },
  cpu: {
    synonyms: ["cpu", "processor", "chip", "computer", "hardware"],
    component: Cpu,
  },
  wifi: {
    synonyms: ["wifi", "wireless", "internet", "connection", "network"],
    component: Wifi,
  },
  wifiOff: {
    synonyms: ["wifi-off", "no-wifi", "disconnected", "offline"],
    component: WifiOff,
  },
  bluetooth: {
    synonyms: ["bluetooth", "wireless", "connect", "pair", "sync"],
    component: Bluetooth,
  },
  battery: {
    synonyms: ["battery", "power", "energy", "charge", "life"],
    component: Battery,
  },
  batteryCharging: {
    synonyms: ["battery-charging", "charging", "power-up", "recharge"],
    component: BatteryCharging,
  },
  power: {
    synonyms: ["power", "on", "off", "switch", "toggle", "energy"],
    component: Power,
  },
  zap: {
    synonyms: ["zap", "lightning", "electric", "power", "energy"],
    component: Zap,
  },
  zapOff: {
    synonyms: ["zap-off", "no-power", "off", "disable", "shutdown"],
    component: ZapOff,
  },
  
  // Social & Brand
  facebook: {
    synonyms: ["facebook", "fb", "social", "network", "connect"],
    component: Facebook,
  },
  twitter: {
    synonyms: ["twitter", "tweet", "social", "network", "connect"],
    component: Twitter,
  },
  instagram: {
    synonyms: ["instagram", "ig", "social", "photo", "network"],
    component: Instagram,
  },
  linkedin: {
    synonyms: ["linkedin", "professional", "network", "career", "business"],
    component: Linkedin,
  },
  github: {
    synonyms: ["github", "git", "code", "repository", "developer"],
    component: Github,
  },
  gitlab: {
    synonyms: ["gitlab", "git", "code", "repository", "developer"],
    component: Gitlab,
  },
  youtube: {
    synonyms: ["youtube", "video", "media", "stream", "watch"],
    component: Youtube,
  },
  slack: {
    synonyms: ["slack", "chat", "team", "communication", "work"],
    component: Slack,
  },
  
  // Business & Finance
  dollarSign: {
    synonyms: ["dollar-sign", "money", "currency", "price", "cost"],
    component: DollarSign,
  },
  creditCard: {
    synonyms: ["credit-card", "payment", "card", "money", "buy"],
    component: CreditCard,
  },
  shoppingCart: {
    synonyms: ["shopping-cart", "cart", "buy", "purchase", "shop"],
    component: ShoppingCart,
  },
  shoppingBag: {
    synonyms: ["shopping-bag", "bag", "buy", "purchase", "shop"],
    component: ShoppingBag,
  },
  package2: {
    synonyms: ["package-2", "box", "container", "bundle", "parcel"],
    component: Package2,
  },
  truck: {
    synonyms: ["truck", "delivery", "shipping", "transport", "vehicle"],
    component: Truck,
  },
  briefcase: {
    synonyms: ["briefcase", "work", "business", "job", "career"],
    component: Briefcase,
  },
  building: {
    synonyms: ["building", "office", "company", "workplace", "structure"],
    component: Building,
  },
  trendingUp: {
    synonyms: ["trending-up", "increase", "growth", "rise", "upward"],
    component: TrendingUp,
  },
  trendingDown: {
    synonyms: ["trending-down", "decrease", "decline", "fall", "downward"],
    component: TrendingDown,
  },
  barChart: {
    synonyms: ["bar-chart", "chart", "graph", "data", "analytics"],
    component: BarChart,
  },
  barChart2: {
    synonyms: ["bar-chart-2", "chart-alt", "graph-alt", "data-alt"],
    component: BarChart2,
  },
  pieChart: {
    synonyms: ["pie-chart", "chart", "graph", "data", "analytics"],
    component: PieChart,
  },
  activity: {
    synonyms: ["activity", "motion", "movement", "action", "progress"],
    component: Activity,
  },
  target: {
    synonyms: ["target", "goal", "aim", "objective", "focus"],
    component: Target,
  },
  
  // Time & Calendar
  calendar: {
    synonyms: ["calendar", "date", "schedule", "event", "time"],
    component: Calendar,
  },
  clock: {
    synonyms: ["clock", "time", "hour", "minute", "schedule"],
    component: Clock,
  },
  timer: {
    synonyms: ["timer", "countdown", "stopwatch", "time", "duration"],
    component: Timer,
  },
  sunrise: {
    synonyms: ["sunrise", "morning", "dawn", "day", "light"],
    component: Sunrise,
  },
  sunset: {
    synonyms: ["sunset", "evening", "dusk", "night", "dark"],
    component: Sunset,
  },
  moon: {
    synonyms: ["moon", "night", "dark", "lunar", "sleep"],
    component: Moon,
  },
  sun: {
    synonyms: ["sun", "day", "light", "bright", "solar"],
    component: Sun,
  },
  
  // Weather & Nature
  cloud: {
    synonyms: ["cloud", "weather", "sky", "overcast", "gray"],
    component: Cloud,
  },
  cloudRain: {
    synonyms: ["cloud-rain", "rain", "weather", "storm", "wet"],
    component: CloudRain,
  },
  cloudSnow: {
    synonyms: ["cloud-snow", "snow", "weather", "cold", "winter"],
    component: CloudSnow,
  },
  cloudLightning: {
    synonyms: ["cloud-lightning", "lightning", "storm", "thunder", "electric"],
    component: CloudLightning,
  },
  cloudDrizzle: {
    synonyms: ["cloud-drizzle", "drizzle", "rain", "weather", "light-rain"],
    component: CloudDrizzle,
  },
  cloudOff: {
    synonyms: ["cloud-off", "no-cloud", "clear", "sunny", "offline"],
    component: CloudOff,
  },
  umbrella: {
    synonyms: ["umbrella", "rain", "weather", "protection", "cover"],
    component: Umbrella,
  },
  droplet: {
    synonyms: ["droplet", "water", "liquid", "drop", "moisture"],
    component: Droplet,
  },
  wind: {
    synonyms: ["wind", "air", "breeze", "weather", "movement"],
    component: Wind,
  },
  thermometer: {
    synonyms: ["thermometer", "temperature", "heat", "cold", "weather"],
    component: Thermometer,
  },
  compass: {
    synonyms: ["compass", "direction", "navigate", "north", "south"],
    component: Compass,
  },
  map: {
    synonyms: ["map", "location", "place", "geography", "navigation"],
    component: Map,
  },
  mapPin: {
    synonyms: ["map-pin", "location", "marker", "place", "position"],
    component: MapPin,
  },
  globe: {
    synonyms: ["globe", "world", "earth", "international", "global"],
    component: Globe,
  },
  navigation: {
    synonyms: ["navigation", "nav", "direction", "route", "travel"],
    component: Navigation,
  },
  navigation2: {
    synonyms: ["navigation-2", "nav-alt", "direction-alt", "route-alt"],
    component: Navigation2,
  },
  
  // Security & Privacy
  lock: {
    synonyms: ["lock", "secure", "private", "protected", "safe"],
    component: Lock,
  },
  unlock: {
    synonyms: ["unlock", "open", "access", "free", "release"],
    component: Unlock,
  },
  shield: {
    synonyms: ["shield", "security", "protection", "defense", "guard"],
    component: Shield,
  },
  shieldOff: {
    synonyms: ["shield-off", "no-security", "unprotected", "vulnerable"],
    component: ShieldOff,
  },
  key: {
    synonyms: ["key", "access", "password", "secret", "unlock"],
    component: Key,
  },
  fingerprint: {
    synonyms: ["fingerprint", "biometric", "identity", "security", "unique"],
    component: Fingerprint,
  },
  
  // Tools & Utilities
  wrench: {
    synonyms: ["wrench", "tool", "fix", "repair", "adjust"],
    component: Wrench,
  },
  hammer: {
    synonyms: ["hammer", "tool", "build", "construct", "fix"],
    component: Hammer,
  },
  cog: {
    synonyms: ["cog", "gear", "settings", "configuration", "mechanical"],
    component: Cog,
  },
  sliders: {
    synonyms: ["sliders", "controls", "adjust", "settings", "options"],
    component: Sliders,
  },
  filter: {
    synonyms: ["filter", "sort", "search", "refine", "organize"],
    component: Filter,
  },
  hash: {
    synonyms: ["hash", "number", "tag", "symbol", "pound"],
    component: Hash,
  },
  tag: {
    synonyms: ["tag", "label", "mark", "category", "keyword"],
    component: Tag,
  },
  layers: {
    synonyms: ["layers", "stack", "level", "depth", "overlay"],
    component: Layers,
  },
  grid: {
    synonyms: ["grid", "layout", "table", "matrix", "structure"],
    component: Grid,
  },
  layout: {
    synonyms: ["layout", "design", "arrange", "structure", "plan"],
    component: Layout,
  },
  sidebar: {
    synonyms: ["sidebar", "panel", "menu", "navigation", "side"],
    component: Sidebar,
  },
  moreHorizontal: {
    synonyms: ["more-horizontal", "dots", "menu", "options", "actions"],
    component: MoreHorizontal,
  },
  moreVertical: {
    synonyms: ["more-vertical", "dots", "menu", "options", "actions"],
    component: MoreVertical,
  },
  
  // Text & Typography
  type: {
    synonyms: ["type", "text", "font", "typography", "writing"],
    component: Type,
  },
  bold: {
    synonyms: ["bold", "strong", "thick", "emphasis", "heavy"],
    component: Bold,
  },
  italic: {
    synonyms: ["italic", "slanted", "emphasis", "style", "tilted"],
    component: Italic,
  },
  underline: {
    synonyms: ["underline", "line", "emphasis", "mark", "highlight"],
    component: Underline,
  },
  alignLeft: {
    synonyms: ["align-left", "left-align", "text-left", "justify-left"],
    component: AlignLeft,
  },
  alignCenter: {
    synonyms: ["align-center", "center-align", "text-center", "justify-center"],
    component: AlignCenter,
  },
  alignRight: {
    synonyms: ["align-right", "right-align", "text-right", "justify-right"],
    component: AlignRight,
  },
  alignJustify: {
    synonyms: ["align-justify", "justify", "text-justify", "full-justify"],
    component: AlignJustify,
  },
  list: {
    synonyms: ["list", "items", "bullets", "points", "menu"],
    component: List,
  },
  listOrdered: {
    synonyms: ["list-ordered", "numbered-list", "ordered", "sequence"],
    component: ListOrdered,
  },
  quote: {
    synonyms: ["quote", "quotation", "speech", "text", "reference"],
    component: Quote,
  },
  code: {
    synonyms: ["code", "programming", "script", "development", "source"],
    component: Code,
  },
  terminal: {
    synonyms: ["terminal", "command", "console", "cli", "shell"],
    component: Terminal,
  },
  command: {
    synonyms: ["command", "key", "shortcut", "control", "action"],
    component: Command,
  },
  
  // Status & Feedback
  checkCircle: {
    synonyms: ["check-circle", "success", "done", "complete", "approved"],
    component: CheckCircle,
  },
  xCircle: {
    synonyms: ["x-circle", "error", "fail", "cancel", "reject"],
    component: XCircle,
  },
  alertCircle: {
    synonyms: ["alert-circle", "warning", "caution", "notice", "info"],
    component: AlertCircle,
  },
  alertTriangle: {
    synonyms: ["alert-triangle", "warning", "danger", "caution", "alert"],
    component: AlertTriangle,
  },
  alertOctagon: {
    synonyms: ["alert-octagon", "stop", "danger", "halt", "critical"],
    component: AlertOctagon,
  },
  info: {
    synonyms: ["info", "information", "help", "details", "about"],
    component: Info,
  },
  helpCircle: {
    synonyms: ["help-circle", "help", "question", "support", "assistance"],
    component: HelpCircle,
  },
  thumbsUp: {
    synonyms: ["thumbs-up", "like", "approve", "good", "positive"],
    component: ThumbsUp,
  },
  thumbsDown: {
    synonyms: ["thumbs-down", "dislike", "disapprove", "bad", "negative"],
    component: ThumbsDown,
  },
  award: {
    synonyms: ["award", "prize", "achievement", "recognition", "honor"],
    component: Award,
  },
  trophy: {
    synonyms: ["trophy", "winner", "champion", "victory", "success"],
    component: Trophy,
  },
  medal: {
    synonyms: ["medal", "award", "prize", "achievement", "honor"],
    component: Medal,
  },
  flag: {
    synonyms: ["flag", "mark", "signal", "indicator", "country"],
    component: Flag,
  },
  
  // Shapes & Symbols
  hexagon: {
    synonyms: ["hexagon", "shape", "six-sided", "geometric"],
    component: Hexagon,
  },
  octagon: {
    synonyms: ["octagon", "shape", "eight-sided", "geometric"],
    component: Octagon,
  },
  diamond: {
    synonyms: ["diamond", "shape", "gem", "precious", "valuable"],
    component: Diamond,
  },
  cross: {
    synonyms: ["cross", "plus", "add", "medical", "religion"],
    component: Cross,
  },
  bookmarkPlus: {
    synonyms: ["bookmark-plus", "add-bookmark", "save-bookmark"],
    component: BookmarkPlus,
  },
  bookmarkMinus: {
    synonyms: ["bookmark-minus", "remove-bookmark", "delete-bookmark"],
    component: BookmarkMinus,
  },
  
  // Miscellaneous
  coffee: {
    synonyms: ["coffee", "drink", "caffeine", "morning", "hot"],
    component: Coffee,
  },
  gamepad2: {
    synonyms: ["gamepad-2", "controller", "gaming", "play", "game"],
    component: Gamepad2,
  },
  palette: {
    synonyms: ["palette", "colors", "paint", "art", "design"],
    component: Palette,
  },
  brush: {
    synonyms: ["brush", "paint", "art", "draw", "color"],
    component: Brush,
  },
  pen: {
    synonyms: ["pen", "write", "draw", "ink", "tool"],
    component: Pen,
  },
  pencil: {
    synonyms: ["pencil", "write", "draw", "sketch", "tool"],
    component: Pencil,
  },
  eraser: {
    synonyms: ["eraser", "remove", "delete", "clean", "tool"],
    component: Eraser,
  },
  ruler: {
    synonyms: ["ruler", "measure", "length", "distance", "tool"],
    component: Ruler,
  },
  gift: {
    synonyms: ["gift", "present", "surprise", "give", "celebration"],
    component: Gift,
  },
  cake: {
    synonyms: ["cake", "dessert", "sweet", "birthday", "celebration"],
    component: Cake,
  },
  pizza: {
    synonyms: ["pizza", "food", "meal", "italian", "dinner"],
    component: Pizza,
  },
  apple: {
    synonyms: ["apple", "fruit", "food", "healthy", "red"],
    component: Apple,
  },
  carrot: {
    synonyms: ["carrot", "vegetable", "food", "healthy", "orange"],
    component: Carrot,
  },
  leaf: {
    synonyms: ["leaf", "nature", "green", "plant", "organic"],
    component: Leaf,
  },
  trees: {
    synonyms: ["trees", "tree", "nature", "forest", "plant", "green"],
    component: Trees,
  },
  flower: {
    synonyms: ["flower", "nature", "beautiful", "plant", "bloom"],
    component: Flower,
  },
  bug: {
    synonyms: ["bug", "insect", "error", "problem", "issue"],
    component: Bug,
  },
  fish: {
    synonyms: ["fish", "animal", "water", "sea", "ocean"],
    component: Fish,
  },
  bird: {
    synonyms: ["bird", "animal", "fly", "sky", "nature"],
    component: Bird,
  },
  cat: {
    synonyms: ["cat", "animal", "pet", "feline", "cute"],
    component: Cat,
  },
  dog: {
    synonyms: ["dog", "animal", "pet", "canine", "loyal"],
    component: Dog,
  }
};
