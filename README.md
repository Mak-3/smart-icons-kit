# Smart Icons

A semantic icon library built on [Lucide](https://lucide.dev/).

## Features
- Synonym mapping for icons
- Dynamic icons from user input
- Works with React and React Native

## Usage

```tsx
import { SmartIcon } from "smart-icons";

<SmartIcon name="house" size={32} color="blue" />
<SmartIcon name="remove item" size={32} color="red" />
```

## Extending
```tsx
import { registerIconFamily } from "smart-icons";
import { FaBeer } from "react-icons/fa";

registerIconFamily("fa", {
  beer: {
    synonyms: ["beer", "drink", "alcohol"],
    component: FaBeer,
  },
});
```