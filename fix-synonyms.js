// Script to fix duplicate synonyms and remove generic terms
const iconMap = {
  // Navigation & UI
  home: { synonyms: ["home", "house", "building", "dwelling", "main", "dashboard"] },
  search: { synonyms: ["search", "find", "magnify", "lookup", "seek", "query"] },
  menu: { synonyms: ["menu", "hamburger", "nav", "navigation", "bars", "list"] },
  settings: { synonyms: ["settings", "config", "preferences", "options", "gear", "cog"] },
  user: { synonyms: ["user", "person", "account", "profile", "people", "individual"] },
  users: { synonyms: ["users", "group", "team", "members", "community"] },
  bell: { synonyms: ["bell", "notification", "alert", "ring", "chime", "notify"] },
  bellOff: { synonyms: ["bell-off", "mute", "silent", "disable", "quiet", "no-notification"] },
  eye: { synonyms: ["eye", "view", "see", "watch", "look", "visible"] },
  eyeOff: { synonyms: ["eye-off", "hide", "invisible", "blind", "conceal", "private"] },
  
  // Arrows & Navigation
  chevronDown: { synonyms: ["chevron-down", "arrow-down", "dropdown", "expand", "open"] },
  chevronUp: { synonyms: ["chevron-up", "arrow-up", "collapse", "close", "up"] },
  chevronLeft: { synonyms: ["chevron-left", "arrow-left", "back", "previous", "left"] },
  chevronRight: { synonyms: ["chevron-right", "arrow-right", "next", "forward", "right"] },
  chevronsDown: { synonyms: ["chevrons-down", "arrows-down", "expand-all", "open-all"] },
  chevronsUp: { synonyms: ["chevrons-up", "arrows-up", "collapse-all", "close-all"] },
  chevronsLeft: { synonyms: ["chevrons-left", "arrows-left", "back-all", "previous-all"] },
  chevronsRight: { synonyms: ["chevrons-right", "arrows-right", "forward-all", "next-all"] },
  arrowDown: { synonyms: ["arrow-down", "down", "descend", "lower", "decrease"] },
  arrowUp: { synonyms: ["arrow-up", "up", "ascend", "raise", "increase"] },
  arrowLeft: { synonyms: ["arrow-left", "left", "back", "previous", "return"] },
  arrowRight: { synonyms: ["arrow-right", "right", "forward", "next", "continue"] },
  arrowDownLeft: { synonyms: ["arrow-down-left", "down-left", "diagonal-down-left"] },
  arrowDownRight: { synonyms: ["arrow-down-right", "down-right", "diagonal-down-right"] },
  arrowUpLeft: { synonyms: ["arrow-up-left", "up-left", "diagonal-up-left"] },
  arrowUpRight: { synonyms: ["arrow-up-right", "up-right", "diagonal-up-right"] },
  
  // Basic Actions
  plus: { synonyms: ["plus", "add", "create", "new", "insert", "increase"] },
  minus: { synonyms: ["minus", "remove", "subtract", "delete", "decrease", "reduce"] },
  x: { synonyms: ["x", "close", "cancel", "dismiss", "quit", "exit"] },
  check: { synonyms: ["check", "tick", "mark", "done", "complete", "success"] },
  circle: { synonyms: ["circle", "round", "dot", "bullet", "point"] },
  square: { synonyms: ["square", "box", "rectangle", "block"] },
  triangle: { synonyms: ["triangle", "warning", "alert", "caution"] },
  star: { synonyms: ["star", "rating", "favorite", "bookmark", "highlight", "important"] },
  heart: { synonyms: ["heart", "love", "like", "favorite", "emotion", "affection"] },
  bookmark: { synonyms: ["bookmark", "save", "mark", "tag", "favorite", "remember"] },
  
  // Actions & Controls
  edit: { synonyms: ["edit", "modify", "change", "update", "alter", "revise"] },
  edit2: { synonyms: ["edit-2", "edit-alt", "modify-alt", "change-alt"] },
  edit3: { synonyms: ["edit-3", "edit-variant", "modify-variant", "change-variant"] },
  save: { synonyms: ["save", "store", "keep", "preserve", "retain", "download"] },
  copy: { synonyms: ["copy", "duplicate", "clone", "replicate", "duplicate"] },
  scissors: { synonyms: ["scissors", "cut", "trim", "snip", "clip"] },
  trash: { synonyms: ["trash", "delete", "remove", "bin", "garbage", "dispose"] },
  trash2: { synonyms: ["trash-2", "delete-alt", "remove-alt", "bin-alt"] },
  delete: { synonyms: ["delete", "remove", "trash", "bin", "garbage", "dispose"] },
  download: { synonyms: ["download", "save", "get", "fetch", "retrieve", "pull"] },
  upload: { synonyms: ["upload", "send", "post", "share", "submit", "push"] },
  share: { synonyms: ["share", "send", "distribute", "spread", "broadcast"] },
  share2: { synonyms: ["share-2", "share-alt", "send-alt", "distribute-alt"] },
  link: { synonyms: ["link", "url", "connect", "join", "attach", "reference"] },
  link2: { synonyms: ["link-2", "link-alt", "connect-alt", "join-alt"] },
  externalLink: { synonyms: ["external-link", "open", "new-tab", "external", "outbound"] },
  refreshCw: { synonyms: ["refresh-cw", "reload", "refresh", "update", "renew"] },
  refreshCcw: { synonyms: ["refresh-ccw", "reload-alt", "refresh-alt", "update-alt"] },
  
  // Media Controls
  play: { synonyms: ["play", "start", "begin", "resume", "continue"] },
  pause: { synonyms: ["pause", "stop", "halt", "suspend", "break"] },
  skipBack: { synonyms: ["skip-back", "previous", "back", "rewind", "reverse"] },
  skipForward: { synonyms: ["skip-forward", "next", "forward", "advance", "skip"] },
  fastForward: { synonyms: ["fast-forward", "speed-up", "accelerate", "rush"] },
  rewind: { synonyms: ["rewind", "reverse", "backward", "retreat"] },
  volume: { synonyms: ["volume", "sound", "audio", "speaker", "loudness"] },
  volume1: { synonyms: ["volume-1", "sound-1", "audio-1", "speaker-1"] },
  volume2: { synonyms: ["volume-2", "sound-2", "audio-2", "speaker-2"] },
  volumeX: { synonyms: ["volume-x", "mute", "silent", "no-sound", "quiet"] },
  
  // Communication
  mail: { synonyms: ["mail", "email", "message", "envelope", "letter", "inbox"] },
  messageCircle: { synonyms: ["message-circle", "chat", "talk", "conversation", "discuss"] },
  messageSquare: { synonyms: ["message-square", "chat-alt", "talk-alt", "conversation-alt"] },
  phone: { synonyms: ["phone", "call", "telephone", "mobile", "contact", "dial"] },
  phoneCall: { synonyms: ["phone-call", "call", "ring", "dial", "contact"] },
  phoneIncoming: { synonyms: ["phone-incoming", "incoming-call", "call-receive"] },
  phoneOutgoing: { synonyms: ["phone-outgoing", "outgoing-call", "call-make"] },
  phoneMissed: { synonyms: ["phone-missed", "missed-call", "call-missed"] },
  phoneOff: { synonyms: ["phone-off", "call-off", "hang-up", "end-call"] },
  send: { synonyms: ["send", "submit", "post", "deliver", "transmit"] },
  mic: { synonyms: ["mic", "microphone", "record", "voice", "audio"] },
  micOff: { synonyms: ["mic-off", "mute", "silent", "no-mic", "disable-mic"] },
  headphones: { synonyms: ["headphones", "headset", "earphones", "audio", "sound"] },
  speaker: { synonyms: ["speaker", "sound", "audio", "volume", "loudspeaker"] },
  video: { synonyms: ["video", "camera", "record", "film", "movie"] },
  videoOff: { synonyms: ["video-off", "camera-off", "no-video", "disable-video"] },
  camera: { synonyms: ["camera", "photo", "picture", "snapshot", "capture"] },
  cameraOff: { synonyms: ["camera-off", "no-camera", "disable-camera"] },
  
  // Files & Folders
  file: { synonyms: ["file", "document", "page", "paper", "sheet"] },
  fileText: { synonyms: ["file-text", "document", "text", "content", "article"] },
  filePlus: { synonyms: ["file-plus", "new-file", "add-file", "create-file"] },
  fileMinus: { synonyms: ["file-minus", "remove-file", "delete-file"] },
  folder: { synonyms: ["folder", "directory", "collection", "group", "archive"] },
  folderPlus: { synonyms: ["folder-plus", "new-folder", "add-folder", "create-folder"] },
  folderMinus: { synonyms: ["folder-minus", "remove-folder", "delete-folder"] },
  folderOpen: { synonyms: ["folder-open", "open-folder", "expanded-folder"] },
  image: { synonyms: ["image", "picture", "photo", "graphic", "visual"] },
  film: { synonyms: ["film", "movie", "video", "cinema", "media"] },
  music: { synonyms: ["music", "audio", "song", "track", "melody"] },
  package: { synonyms: ["package", "box", "container", "bundle", "parcel"] },
  archive: { synonyms: ["archive", "storage", "backup", "compress", "zip"] },
  inbox: { synonyms: ["inbox", "mailbox", "receive", "messages", "notifications"] },
  clipboard: { synonyms: ["clipboard", "copy", "paste", "clip", "board"] },
  paperclip: { synonyms: ["paperclip", "attach", "attachment", "link", "connect"] },
  
  // Technology & Devices
  smartphone: { synonyms: ["smartphone", "phone", "mobile", "cell", "device"] },
  tablet: { synonyms: ["tablet", "ipad", "device", "screen", "portable"] },
  monitor: { synonyms: ["monitor", "screen", "display", "desktop", "computer"] },
  laptop: { synonyms: ["laptop", "computer", "notebook", "pc", "machine"] },
  tv: { synonyms: ["tv", "television", "screen", "display", "media"] },
  watch: { synonyms: ["watch", "time", "clock", "timer", "wristwatch"] },
  hardDrive: { synonyms: ["hard-drive", "storage", "disk", "drive", "memory"] },
  server: { synonyms: ["server", "host", "computer", "machine", "system"] },
  database: { synonyms: ["database", "data", "storage", "db", "information"] },
  cpu: { synonyms: ["cpu", "processor", "chip", "computer", "hardware"] },
  wifi: { synonyms: ["wifi", "wireless", "internet", "connection", "network"] },
  wifiOff: { synonyms: ["wifi-off", "no-wifi", "disconnected", "offline"] },
  bluetooth: { synonyms: ["bluetooth", "wireless", "connect", "pair", "sync"] },
  battery: { synonyms: ["battery", "power", "energy", "charge", "life"] },
  batteryCharging: { synonyms: ["battery-charging", "charging", "power-up", "recharge"] },
  power: { synonyms: ["power", "on", "off", "switch", "toggle", "energy"] },
  zap: { synonyms: ["zap", "lightning", "electric", "power", "energy"] },
  zapOff: { synonyms: ["zap-off", "no-power", "off", "disable", "shutdown"] },
  
  // Social & Brand
  facebook: { synonyms: ["facebook", "fb", "social", "network", "connect"] },
  twitter: { synonyms: ["twitter", "tweet", "social", "network", "connect"] },
  instagram: { synonyms: ["instagram", "ig", "social", "photo", "network"] },
  linkedin: { synonyms: ["linkedin", "professional", "network", "career", "business"] },
  github: { synonyms: ["github", "git", "code", "repository", "developer"] },
  gitlab: { synonyms: ["gitlab", "git", "code", "repository", "developer"] },
  youtube: { synonyms: ["youtube", "video", "media", "stream", "watch"] },
  slack: { synonyms: ["slack", "chat", "team", "communication", "work"] },
  
  // Business & Finance
  dollarSign: { synonyms: ["dollar-sign", "money", "currency", "price", "cost"] },
  creditCard: { synonyms: ["credit-card", "payment", "card", "money", "buy"] },
  shoppingCart: { synonyms: ["shopping-cart", "cart", "buy", "purchase", "shop"] },
  shoppingBag: { synonyms: ["shopping-bag", "bag", "buy", "purchase", "shop"] },
  package2: { synonyms: ["package-2", "box", "container", "bundle", "parcel"] },
  truck: { synonyms: ["truck", "delivery", "shipping", "transport", "vehicle"] },
  briefcase: { synonyms: ["briefcase", "work", "business", "job", "career"] },
  building: { synonyms: ["building", "office", "company", "workplace", "structure"] },
  trendingUp: { synonyms: ["trending-up", "increase", "growth", "rise", "upward"] },
  trendingDown: { synonyms: ["trending-down", "decrease", "decline", "fall", "downward"] },
  barChart: { synonyms: ["bar-chart", "chart", "graph", "data", "analytics"] },
  barChart2: { synonyms: ["bar-chart-2", "chart-alt", "graph-alt", "data-alt"] },
  pieChart: { synonyms: ["pie-chart", "chart", "graph", "data", "analytics"] },
  activity: { synonyms: ["activity", "motion", "movement", "action", "progress"] },
  target: { synonyms: ["target", "goal", "aim", "objective", "focus"] },
  
  // Time & Calendar
  calendar: { synonyms: ["calendar", "date", "schedule", "event", "time"] },
  clock: { synonyms: ["clock", "time", "hour", "minute", "schedule"] },
  timer: { synonyms: ["timer", "countdown", "stopwatch", "time", "duration"] },
  sunrise: { synonyms: ["sunrise", "morning", "dawn", "day", "light"] },
  sunset: { synonyms: ["sunset", "evening", "dusk", "night", "dark"] },
  moon: { synonyms: ["moon", "night", "dark", "lunar", "sleep"] },
  sun: { synonyms: ["sun", "day", "light", "bright", "solar"] },
  
  // Weather & Nature
  cloud: { synonyms: ["cloud", "weather", "sky", "overcast", "gray"] },
  cloudRain: { synonyms: ["cloud-rain", "rain", "weather", "storm", "wet"] },
  cloudSnow: { synonyms: ["cloud-snow", "snow", "weather", "cold", "winter"] },
  cloudLightning: { synonyms: ["cloud-lightning", "lightning", "storm", "thunder", "electric"] },
  cloudDrizzle: { synonyms: ["cloud-drizzle", "drizzle", "rain", "weather", "light-rain"] },
  cloudOff: { synonyms: ["cloud-off", "no-cloud", "clear", "sunny", "offline"] },
  umbrella: { synonyms: ["umbrella", "rain", "weather", "protection", "cover"] },
  droplet: { synonyms: ["droplet", "water", "liquid", "drop", "moisture"] },
  wind: { synonyms: ["wind", "air", "breeze", "weather", "movement"] },
  thermometer: { synonyms: ["thermometer", "temperature", "heat", "cold", "weather"] },
  compass: { synonyms: ["compass", "direction", "navigate", "north", "south"] },
  map: { synonyms: ["map", "location", "place", "geography", "navigation"] },
  mapPin: { synonyms: ["map-pin", "location", "marker", "place", "position"] },
  globe: { synonyms: ["globe", "world", "earth", "international", "global"] },
  navigation: { synonyms: ["navigation", "nav", "direction", "route", "travel"] },
  navigation2: { synonyms: ["navigation-2", "nav-alt", "direction-alt", "route-alt"] },
  
  // Security & Privacy
  lock: { synonyms: ["lock", "secure", "private", "protected", "safe"] },
  unlock: { synonyms: ["unlock", "open", "access", "free", "release"] },
  shield: { synonyms: ["shield", "security", "protection", "defense", "guard"] },
  shieldOff: { synonyms: ["shield-off", "no-security", "unprotected", "vulnerable"] },
  key: { synonyms: ["key", "access", "password", "secret", "unlock"] },
  fingerprint: { synonyms: ["fingerprint", "biometric", "identity", "security", "unique"] },
  
  // Tools & Utilities
  wrench: { synonyms: ["wrench", "tool", "fix", "repair", "adjust"] },
  hammer: { synonyms: ["hammer", "tool", "build", "construct", "fix"] },
  cog: { synonyms: ["cog", "gear", "settings", "configuration", "mechanical"] },
  sliders: { synonyms: ["sliders", "controls", "adjust", "settings", "options"] },
  filter: { synonyms: ["filter", "sort", "search", "refine", "organize"] },
  hash: { synonyms: ["hash", "number", "tag", "symbol", "pound"] },
  tag: { synonyms: ["tag", "label", "mark", "category", "keyword"] },
  layers: { synonyms: ["layers", "stack", "level", "depth", "overlay"] },
  grid: { synonyms: ["grid", "layout", "table", "matrix", "structure"] },
  layout: { synonyms: ["layout", "design", "arrange", "structure", "plan"] },
  sidebar: { synonyms: ["sidebar", "panel", "menu", "navigation", "side"] },
  moreHorizontal: { synonyms: ["more-horizontal", "dots", "menu", "options", "actions"] },
  moreVertical: { synonyms: ["more-vertical", "dots", "menu", "options", "actions"] },
  
  // Text & Typography
  type: { synonyms: ["type", "text", "font", "typography", "writing"] },
  bold: { synonyms: ["bold", "strong", "thick", "emphasis", "heavy"] },
  italic: { synonyms: ["italic", "slanted", "emphasis", "style", "tilted"] },
  underline: { synonyms: ["underline", "line", "emphasis", "mark", "highlight"] },
  alignLeft: { synonyms: ["align-left", "left-align", "text-left", "justify-left"] },
  alignCenter: { synonyms: ["align-center", "center-align", "text-center", "justify-center"] },
  alignRight: { synonyms: ["align-right", "right-align", "text-right", "justify-right"] },
  alignJustify: { synonyms: ["align-justify", "justify", "text-justify", "full-justify"] },
  list: { synonyms: ["list", "items", "bullets", "points", "menu"] },
  listOrdered: { synonyms: ["list-ordered", "numbered-list", "ordered", "sequence"] },
  quote: { synonyms: ["quote", "quotation", "speech", "text", "reference"] },
  code: { synonyms: ["code", "programming", "script", "development", "source"] },
  terminal: { synonyms: ["terminal", "command", "console", "cli", "shell"] },
  command: { synonyms: ["command", "key", "shortcut", "control", "action"] },
  
  // Status & Feedback
  checkCircle: { synonyms: ["check-circle", "success", "done", "complete", "approved"] },
  xCircle: { synonyms: ["x-circle", "error", "fail", "cancel", "reject"] },
  alertCircle: { synonyms: ["alert-circle", "warning", "caution", "notice", "info"] },
  alertTriangle: { synonyms: ["alert-triangle", "warning", "danger", "caution", "alert"] },
  alertOctagon: { synonyms: ["alert-octagon", "stop", "danger", "halt", "critical"] },
  info: { synonyms: ["info", "information", "help", "details", "about"] },
  helpCircle: { synonyms: ["help-circle", "help", "question", "support", "assistance"] },
  thumbsUp: { synonyms: ["thumbs-up", "like", "approve", "good", "positive"] },
  thumbsDown: { synonyms: ["thumbs-down", "dislike", "disapprove", "bad", "negative"] },
  award: { synonyms: ["award", "prize", "achievement", "recognition", "honor"] },
  trophy: { synonyms: ["trophy", "winner", "champion", "victory", "success"] },
  medal: { synonyms: ["medal", "award", "prize", "achievement", "honor"] },
  flag: { synonyms: ["flag", "mark", "signal", "indicator", "country"] },
  
  // Shapes & Symbols
  hexagon: { synonyms: ["hexagon", "shape", "six-sided", "geometric"] },
  octagon: { synonyms: ["octagon", "shape", "eight-sided", "geometric"] },
  diamond: { synonyms: ["diamond", "shape", "gem", "precious", "valuable"] },
  cross: { synonyms: ["cross", "plus", "add", "medical", "religion"] },
  bookmarkPlus: { synonyms: ["bookmark-plus", "add-bookmark", "save-bookmark"] },
  bookmarkMinus: { synonyms: ["bookmark-minus", "remove-bookmark", "delete-bookmark"] },
  
  // Miscellaneous
  coffee: { synonyms: ["coffee", "drink", "caffeine", "morning", "hot"] },
  gamepad2: { synonyms: ["gamepad-2", "controller", "gaming", "play", "game"] },
  palette: { synonyms: ["palette", "colors", "paint", "art", "design"] },
  brush: { synonyms: ["brush", "paint", "art", "draw", "color"] },
  pen: { synonyms: ["pen", "write", "draw", "ink", "tool"] },
  pencil: { synonyms: ["pencil", "write", "draw", "sketch", "tool"] },
  eraser: { synonyms: ["eraser", "remove", "delete", "clean", "tool"] },
  ruler: { synonyms: ["ruler", "measure", "length", "distance", "tool"] },
  gift: { synonyms: ["gift", "present", "surprise", "give", "celebration"] },
  cake: { synonyms: ["cake", "dessert", "sweet", "birthday", "celebration"] },
  pizza: { synonyms: ["pizza", "food", "meal", "italian", "dinner"] },
  apple: { synonyms: ["apple", "fruit", "food", "healthy", "red"] },
  carrot: { synonyms: ["carrot", "vegetable", "food", "healthy", "orange"] },
  leaf: { synonyms: ["leaf", "nature", "green", "plant", "organic"] },
  trees: { synonyms: ["trees", "tree", "nature", "forest", "plant", "green"] },
  flower: { synonyms: ["flower", "nature", "beautiful", "plant", "bloom"] },
  bug: { synonyms: ["bug", "insect", "error", "problem", "issue"] },
  fish: { synonyms: ["fish", "animal", "water", "sea", "ocean"] },
  bird: { synonyms: ["bird", "animal", "fly", "sky", "nature"] },
  cat: { synonyms: ["cat", "animal", "pet", "feline", "cute"] },
  dog: { synonyms: ["dog", "animal", "pet", "canine", "loyal"] }
};

// Generic words to avoid
const genericWords = [
  'animal', 'tool', 'device', 'screen', 'display', 'media', 'network', 'connect',
  'social', 'work', 'business', 'job', 'career', 'money', 'buy', 'purchase', 'shop',
  'time', 'weather', 'nature', 'green', 'plant', 'food', 'healthy', 'red', 'orange',
  'water', 'sea', 'ocean', 'sky', 'fly', 'pet', 'cute', 'loyal', 'feline', 'canine',
  'insect', 'error', 'problem', 'issue', 'beautiful', 'bloom', 'forest', 'organic',
  'italian', 'dinner', 'sweet', 'birthday', 'celebration', 'surprise', 'give',
  'morning', 'hot', 'caffeine', 'drink', 'gaming', 'play', 'game', 'controller',
  'colors', 'paint', 'art', 'design', 'draw', 'color', 'write', 'ink', 'sketch',
  'clean', 'measure', 'length', 'distance', 'fruit', 'vegetable', 'meal'
];

// Find all synonyms
const allSynonyms = [];
for (const [iconName, { synonyms }] of Object.entries(iconMap)) {
  for (const synonym of synonyms) {
    allSynonyms.push({ icon: iconName, synonym: synonym.toLowerCase() });
  }
}

// Find duplicates
const synonymCounts = {};
const duplicates = [];
for (const { icon, synonym } of allSynonyms) {
  if (synonymCounts[synonym]) {
    synonymCounts[synonym].push(icon);
    if (!duplicates.find(d => d.synonym === synonym)) {
      duplicates.push({ synonym, icons: [synonymCounts[synonym][0], icon] });
    } else {
      duplicates.find(d => d.synonym === synonym).icons.push(icon);
    }
  } else {
    synonymCounts[synonym] = [icon];
  }
}

console.log('🔍 Duplicate Synonyms Found:');
duplicates.forEach(({ synonym, icons }) => {
  console.log(`"${synonym}" used in: ${icons.join(', ')}`);
});

console.log('\n🚫 Generic Words Found:');
const genericFound = [];
for (const { icon, synonym } of allSynonyms) {
  if (genericWords.includes(synonym)) {
    genericFound.push({ icon, synonym });
  }
}
genericFound.forEach(({ icon, synonym }) => {
  console.log(`"${synonym}" in ${icon} (generic word)`);
});

console.log('\n📊 Statistics:');
console.log(`Total synonyms: ${allSynonyms.length}`);
console.log(`Duplicate synonyms: ${duplicates.length}`);
console.log(`Generic words used: ${genericFound.length}`);
console.log(`Unique synonyms: ${Object.keys(synonymCounts).length}`);
