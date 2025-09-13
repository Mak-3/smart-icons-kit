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

  // Transport and vehicle
  Car, Plane, Train, Ship, Bus,

  // Miscellaneous
  Coffee, Gamepad2, Palette, Brush, Pen, Pencil, Eraser, Ruler,
  Gift, Cake, Pizza, Apple, Carrot, Leaf, Trees, Flower, Bug, Fish, Bird, Cat, Dog, CupSoda, PartyPopper, Utensils,
  Bed
} from "lucide-react-native";
import type { IconMap } from "../shared/types";

export const lucideMap: IconMap = {
  // Navigation & UI
  home: {
    synonyms: ["home", "house", "dwelling", "main", "dashboard"],
    component: Home,
  },
    bed: {
    synonyms: ["hotel", "stay", "room", "sleep", "rest", "accommodation"],
    component: Bed,
  },
  search: {
    synonyms: ["search", "find", "lookup", "seek", "query"],
    component: Search,
  },
  menu: {
    synonyms: ["menu", "hamburger", "bars"],
    component: Menu,
  },
  settings: {
    synonyms: ["settings", "config", "preferences", "gear"],
    component: Settings,
  },
  user: {
    synonyms: ["user", "person", "account", "profile", "individual"],
    component: User,
  },
  users: {
    synonyms: ["users", "group", "team", "members", "community"],
    component: Users,
  },
  bell: {
    synonyms: ["bell", "notification", "chime", "notify"],
    component: Bell,
  },
  bellOff: {
    synonyms: ["bell-off", "mute", "silent", "quiet", "no-notification"],
    component: BellOff,
  },
  eye: {
    synonyms: ["eye", "view", "see", "look", "visible"],
    component: Eye,
  },
  eyeOff: {
    synonyms: ["eye-off", "hide", "invisible", "blind", "conceal", "private"],
    component: EyeOff,
  },
  
  // Arrows & Navigation
  chevronDown: {
    synonyms: ["chevron-down", "dropdown", "expand"],
    component: ChevronDown,
  },
  chevronUp: {
    synonyms: ["chevron-up", "collapse", "up"],
    component: ChevronUp,
  },
  chevronLeft: {
    synonyms: ["chevron-left", "back", "previous", "left"],
    component: ChevronLeft,
  },
  chevronRight: {
    synonyms: ["chevron-right", "next", "forward", "right"],
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
    synonyms: ["arrow-left", "left", "return"],
    component: ArrowLeft,
  },
  arrowRight: {
    synonyms: ["arrow-right", "right", "continue"],
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
    synonyms: ["plus", "add", "create", "new", "insert"],
    component: Plus,
  },
  minus: {
    synonyms: ["minus", "remove", "subtract", "reduce"],
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
    synonyms: ["square", "rectangle"],
    component: Square,
  },
  triangle: {
    synonyms: ["triangle", "warning", "alert", "caution"],
    component: Triangle,
  },
  star: {
    synonyms: ["star", "rating", "favorite", "highlight", "important"],
    component: Star,
  },
  heart: {
    synonyms: ["heart", "love", "like", "emotion", "affection"],
    component: Heart,
  },
  bookmark: {
    synonyms: ["bookmark", "save", "remember"],
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
    synonyms: ["save", "store", "keep", "preserve", "retain"],
    component: Save,
  },
  copy: {
    synonyms: ["copy", "duplicate", "clone", "replicate"],
    component: Copy,
  },
  scissors: {
    synonyms: ["scissors", "cut", "trim", "snip", "clip"],
    component: Scissors,
  },
  trash: {
    synonyms: ["trash", "bin", "garbage", "dispose"],
    component: Trash,
  },
  trash2: {
    synonyms: ["trash-2", "delete-alt", "remove-alt", "bin-alt"],
    component: Trash2,
  },
  delete: {
    synonyms: ["delete", "remove"],
    component: Delete,
  },
  download: {
    synonyms: ["download", "get", "fetch", "retrieve", "pull"],
    component: Download,
  },
  upload: {
    synonyms: ["upload", "post", "submit", "push"],
    component: Upload,
  },
  share: {
    synonyms: ["share", "distribute", "spread", "broadcast"],
    component: Share,
  },
  share2: {
    synonyms: ["share-2", "share-alt", "distribute-alt"],
    component: Share2,
  },
  link: {
    synonyms: ["link", "url", "join", "reference"],
    component: Link,
  },
  link2: {
    synonyms: ["link-2", "link-alt", "join-alt"],
    component: Link2,
  },
  externalLink: {
    synonyms: ["external-link", "open", "new-tab", "external", "outbound"],
    component: ExternalLink,
  },
  refreshCw: {
    synonyms: ["refresh-cw", "reload", "refresh", "renew"],
    component: RefreshCw,
  },
  refreshCcw: {
    synonyms: ["refresh-ccw", "reload-alt", "refresh-alt"],
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
    synonyms: ["volume", "loudness"],
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
    synonyms: ["maximize", "expand", "fullscreen", "enlarge"],
    component: Maximize,
  },
  minimize: {
    synonyms: ["minimize", "collapse", "shrink"],
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
    synonyms: ["mail", "email", "message", "envelope", "letter"],
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
    synonyms: ["phone", "call", "telephone", "contact", "dial"],
    component: Phone,
  },
  phoneCall: {
    synonyms: ["phone-call", "ring"],
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
    synonyms: ["mic", "microphone", "record", "voice"],
    component: Mic,
  },
  micOff: {
    synonyms: ["mic-off", "no-mic", "disable-mic"],
    component: MicOff,
  },
  headphones: {
    synonyms: ["headphones", "headset", "earphones"],
    component: Headphones,
  },
  speaker: {
    synonyms: ["speaker", "loudspeaker"],
    component: Speaker,
  },
  video: {
    synonyms: ["video", "record", "film", "movie"],
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
    synonyms: ["file-text", "text", "content", "article"],
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
    synonyms: ["folder", "directory", "collection"],
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
    synonyms: ["film", "movie", "cinema"],
    component: Film,
  },
  music: {
    synonyms: ["music", "song", "track", "melody"],
    component: Music,
  },
  package: {
    synonyms: ["package", "box", "bundle", "parcel"],
    component: Package,
  },
  archive: {
    synonyms: ["archive", "backup", "compress", "zip"],
    component: Archive,
  },
  inbox: {
    synonyms: ["inbox", "mailbox", "receive", "messages", "notifications"],
    component: Inbox,
  },
  clipboard: {
    synonyms: ["clipboard", "paste", "board"],
    component: Clipboard,
  },
  paperclip: {
    synonyms: ["paperclip", "attach", "attachment"],
    component: Paperclip,
  },
  
  // Technology & Devices
  smartphone: {
    synonyms: ["smartphone", "cell"],
    component: Smartphone,
  },
  tablet: {
    synonyms: ["tablet", "ipad", "portable"],
    component: Tablet,
  },
  monitor: {
    synonyms: ["monitor", "screen", "desktop"],
    component: Monitor,
  },
  laptop: {
    synonyms: ["laptop", "notebook", "pc"],
    component: Laptop,
  },
  tv: {
    synonyms: ["tv", "television", "display"],
    component: Tv,
  },
  watch: {
    synonyms: ["watch", "time", "hour", "minute", "wristwatch"],
    component: Watch,
  },
  hardDrive: {
    synonyms: ["hard-drive", "storage", "disk", "drive", "memory"],
    component: HardDrive,
  },
  server: {
    synonyms: ["server", "host", "system"],
    component: Server,
  },
  database: {
    synonyms: ["database", "data", "db"],
    component: Database,
  },
  cpu: {
    synonyms: ["cpu", "processor", "chip", "hardware"],
    component: Cpu,
  },
  wifi: {
    synonyms: ["wifi", "wireless", "internet", "connection"],
    component: Wifi,
  },
  wifiOff: {
    synonyms: ["wifi-off", "no-wifi", "disconnected", "offline"],
    component: WifiOff,
  },
  bluetooth: {
    synonyms: ["bluetooth", "pair", "sync"],
    component: Bluetooth,
  },
  battery: {
    synonyms: ["battery", "charge", "life"],
    component: Battery,
  },
  batteryCharging: {
    synonyms: ["battery-charging", "charging", "power-up", "recharge"],
    component: BatteryCharging,
  },
  power: {
    synonyms: ["power", "on", "off", "switch", "toggle"],
    component: Power,
  },
  zap: {
    synonyms: ["zap", "lightning", "electric"],
    component: Zap,
  },
  zapOff: {
    synonyms: ["zap-off", "no-power", "disable", "shutdown"],
    component: ZapOff,
  },
  
  // Social & Brand
  facebook: {
    synonyms: ["facebook", "fb"],
    component: Facebook,
  },
  twitter: {
    synonyms: ["twitter", "tweet"],
    component: Twitter,
  },
  instagram: {
    synonyms: ["instagram", "ig"],
    component: Instagram,
  },
  linkedin: {
    synonyms: ["linkedin", "professional", "career"],
    component: Linkedin,
  },
  github: {
    synonyms: ["github", "git"],
    component: Github,
  },
  gitlab: {
    synonyms: ["gitlab"],
    component: Gitlab,
  },
  youtube: {
    synonyms: ["youtube", "stream", "watch"],
    component: Youtube,
  },
  slack: {
    synonyms: ["slack", "team", "communication", "work"],
    component: Slack,
  },
  
  // Business & Finance
  dollarSign: {
    synonyms: ["dollar-sign", "money", "currency", "price", "cost"],
    component: DollarSign,
  },
  creditCard: {
    synonyms: ["credit-card", "payment", "card", "buy"],
    component: CreditCard,
  },
  shoppingCart: {
    synonyms: ["shopping-cart", "cart", "purchase"],
    component: ShoppingCart,
  },
  shoppingBag: {
    synonyms: ["shopping-bag", "bag"],
    component: ShoppingBag,
  },
  package2: {
    synonyms: ["package-2", "box-alt", "container-alt"],
    component: Package2,
  },
  truck: {
    synonyms: ["truck", "delivery", "shipping", "transport"],
    component: Truck,
  },
  briefcase: {
    synonyms: ["briefcase", "work", "job"],
    component: Briefcase,
  },
  building: {
    synonyms: ["building", "office", "company", "workplace"],
    component: Building,
  },
  trendingUp: {
    synonyms: ["trending-up", "growth", "rise", "upward"],
    component: TrendingUp,
  },
  trendingDown: {
    synonyms: ["trending-down", "decline", "fall", "downward"],
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
    synonyms: ["pie-chart", "chart-alt", "graph-alt", "data-alt"],
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
    synonyms: ["calendar", "date", "schedule", "event"],
    component: Calendar,
  },
  clock: {
    synonyms: ["clock", "time", "hour", "minute"],
    component: Clock,
  },
  timer: {
    synonyms: ["timer", "countdown", "stopwatch", "duration"],
    component: Timer,
  },
  sunrise: {
    synonyms: ["sunrise", "morning", "dawn", "day"],
    component: Sunrise,
  },
  sunset: {
    synonyms: ["sunset", "evening", "dusk", "night"],
    component: Sunset,
  },
  moon: {
    synonyms: ["moon", "lunar", "sleep"],
    component: Moon,
  },
  sun: {
    synonyms: ["sun", "bright", "solar"],
    component: Sun,
  },
  
  // Weather & Nature
  cloud: {
    synonyms: ["cloud", "overcast", "gray"],
    component: Cloud,
  },
  cloudRain: {
    synonyms: ["cloud-rain", "rain", "storm", "wet"],
    component: CloudRain,
  },
  cloudSnow: {
    synonyms: ["cloud-snow", "snow", "cold", "winter"],
    component: CloudSnow,
  },
  cloudLightning: {
    synonyms: ["cloud-lightning", "lightning", "thunder"],
    component: CloudLightning,
  },
  cloudDrizzle: {
    synonyms: ["cloud-drizzle", "drizzle", "light-rain"],
    component: CloudDrizzle,
  },
  cloudOff: {
    synonyms: ["cloud-off", "no-cloud", "clear", "sunny"],
    component: CloudOff,
  },
  umbrella: {
    synonyms: ["umbrella", "protection", "cover"],
    component: Umbrella,
  },
  droplet: {
    synonyms: ["droplet", "water", "liquid", "drop", "moisture"],
    component: Droplet,
  },
  wind: {
    synonyms: ["wind", "air", "breeze"],
    component: Wind,
  },
  thermometer: {
    synonyms: ["thermometer", "temperature", "heat", "cold"],
    component: Thermometer,
  },
  compass: {
    synonyms: ["compass", "direction", "navigate", "north", "south"],
    component: Compass,
  },
  map: {
    synonyms: ["map", "geography"],
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
    synonyms: ["navigation", "nav", "route", "travel"],
    component: Navigation,
  },
  navigation2: {
    synonyms: ["navigation-2", "nav-alt", "route-alt"],
    component: Navigation2,
  },
  
  // Security & Privacy
  lock: {
    synonyms: ["lock", "secure", "private", "protected", "safe"],
    component: Lock,
  },
  unlock: {
    synonyms: ["unlock", "open", "free", "release"],
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
    synonyms: ["key", "password", "secret"],
    component: Key,
  },
  fingerprint: {
    synonyms: ["fingerprint", "biometric", "identity", "unique"],
    component: Fingerprint,
  },
  
  // Tools & Utilities
  wrench: {
    synonyms: ["wrench", "fix", "repair", "adjust"],
    component: Wrench,
  },
  hammer: {
    synonyms: ["hammer", "build", "construct"],
    component: Hammer,
  },
  cog: {
    synonyms: ["cog", "gear", "configuration", "mechanical"],
    component: Cog,
  },
  sliders: {
    synonyms: ["sliders", "controls", "adjust"],
    component: Sliders,
  },
  filter: {
    synonyms: ["filter", "refine", "organize"],
    component: Filter,
  },
  hash: {
    synonyms: ["hash", "number", "symbol", "pound"],
    component: Hash,
  },
  tag: {
    synonyms: ["tag", "label", "mark", "keyword"],
    component: Tag,
  },
  layers: {
    synonyms: ["layers", "stack", "level", "depth", "overlay"],
    component: Layers,
  },
  grid: {
    synonyms: ["grid", "table", "matrix"],
    component: Grid,
  },
  layout: {
    synonyms: ["layout", "arrange", "structure", "plan"],
    component: Layout,
  },
  sidebar: {
    synonyms: ["sidebar", "panel", "side"],
    component: Sidebar,
  },
  moreHorizontal: {
    synonyms: ["more-horizontal", "dots", "options"],
    component: MoreHorizontal,
  },
  moreVertical: {
    synonyms: ["more-vertical", "dots", "options"],
    component: MoreVertical,
  },
  
  // Text & Typography
  type: {
    synonyms: ["type", "text", "font", "typography", "writing"],
    component: Type,
  },
  bold: {
    synonyms: ["bold", "strong", "thick", "heavy"],
    component: Bold,
  },
  italic: {
    synonyms: ["italic", "slanted", "tilted"],
    component: Italic,
  },
  underline: {
    synonyms: ["underline", "line", "highlight"],
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
    synonyms: ["list", "items", "bullets", "points"],
    component: List,
  },
  listOrdered: {
    synonyms: ["list-ordered", "numbered-list", "ordered", "sequence"],
    component: ListOrdered,
  },
  quote: {
    synonyms: ["quote", "quotation", "speech", "reference"],
    component: Quote,
  },
  code: {
    synonyms: ["code", "programming", "script", "development", "source"],
    component: Code,
  },
  terminal: {
    synonyms: ["terminal", "console", "cli", "shell"],
    component: Terminal,
  },
  command: {
    synonyms: ["command", "shortcut", "control", "action"],
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
    synonyms: ["alert-circle", "warning", "caution", "notice"],
    component: AlertCircle,
  },
  alertTriangle: {
    synonyms: ["alert-triangle", "danger", "alert"],
    component: AlertTriangle,
  },
  alertOctagon: {
    synonyms: ["alert-octagon", "stop", "halt", "critical"],
    component: AlertOctagon,
  },
  info: {
    synonyms: ["info", "information", "details", "about"],
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
    synonyms: ["trophy", "winner", "champion", "victory"],
    component: Trophy,
  },
  medal: {
    synonyms: ["medal", "award-alt", "prize-alt", "achievement-alt"],
    component: Medal,
  },
  flag: {
    synonyms: ["flag", "mark", "signal", "indicator", "country"],
    component: Flag,
  },
  
  // Shapes & Symbols
  hexagon: {
    synonyms: ["hexagon", "six-sided"],
    component: Hexagon,
  },
  octagon: {
    synonyms: ["octagon", "eight-sided"],
    component: Octagon,
  },
  diamond: {
    synonyms: ["diamond", "gem", "precious", "valuable"],
    component: Diamond,
  },
  cross: {
    synonyms: ["cross", "medical", "religion"],
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
  
  // Transport and vehicle
  car: {
    synonyms: ["car", "vehicle", "auto", "automobile", "ride", "transport"],
    component: Car,
  },
  flight: {
    synonyms: ["flight", "plane", "airplane", "aircraft", "jet", "aeroplane", "travel"],
    component: Plane,
  },
  bus: {
    synonyms: ["bus", "coach", "shuttle", "minibus", "public transport"],
    component: Bus,
  },
  ship: {
    synonyms: ["ship", "boat", "cruise", "ferry", "yacht", "sail"],
    component: Ship,
  },
  train: {
    synonyms: ["train", "rail", "metro", "subway", "locomotive"],
    component: Train,
  },

  // Miscellaneous
  coffee: {
    synonyms: ["coffee", "drink", "caffeine", "morning", "hot"],
    component: Coffee,
  },
  utensils: {
    synonyms: ["food", "meal", "eat", "dining", "fork", "spoon", "restaurant", "cutlery"],
    component: Utensils,
  },
  cupSoda: {
    synonyms: ["beverage", "soda", "juice", "tea", "cup"],
    component: CupSoda,
  },
  gamepad2: {
    synonyms: ["gamepad-2", "controller", "gaming"],
    component: Gamepad2,
  },
  palette: {
    synonyms: ["palette", "colors", "paint"],
    component: Palette,
  },
  brush: {
    synonyms: ["brush", "paint", "draw"],
    component: Brush,
  },
  pen: {
    synonyms: ["pen", "write", "draw", "ink"],
    component: Pen,
  },
  pencil: {
    synonyms: ["pencil", "write", "draw", "sketch"],
    component: Pencil,
  },
  eraser: {
    synonyms: ["eraser", "remove", "delete", "clean"],
    component: Eraser,
  },
  ruler: {
    synonyms: ["ruler", "measure", "length", "distance"],
    component: Ruler,
  },
  gift: {
    synonyms: ["gift", "present", "surprise", "give"],
    component: Gift,
  },
  cake: {
    synonyms: ["cake", "dessert", "sweet", "birthday"],
    component: Cake,
  },
  party: {
    synonyms: ["party", "celebration", "event", "festival", "gathering"],
    component: PartyPopper,
  },
  pizza: {
    synonyms: ["pizza", "italian", "dinner"],
    component: Pizza,
  },
  apple: {
    synonyms: ["apple", "fruit", "red"],
    component: Apple,
  },
  carrot: {
    synonyms: ["carrot", "vegetable", "orange"],
    component: Carrot,
  },
  leaf: {
    synonyms: ["leaf", "green", "organic"],
    component: Leaf,
  },
  trees: {
    synonyms: ["trees", "tree", "forest"],
    component: Trees,
  },
  flower: {
    synonyms: ["flower", "beautiful", "bloom"],
    component: Flower,
  },
  bug: {
    synonyms: ["bug", "insect", "problem", "issue"],
    component: Bug,
  },
  fish: {
    synonyms: ["fish", "water", "sea", "ocean"],
    component: Fish,
  },
  bird: {
    synonyms: ["bird", "fly", "sky"],
    component: Bird,
  },
  cat: {
    synonyms: ["cat", "feline", "cute"],
    component: Cat,
  },
  dog: {
    synonyms: ["dog", "canine", "loyal"],
    component: Dog,
  }
};
