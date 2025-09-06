# Smart Icons

A smart icon component that works with both React web and React Native, featuring intelligent synonym matching and fuzzy prefix matching.

## Installation

```bash
npm install smart-icons
```

## Usage

### For React Web

```tsx
import { SmartIcon } from 'smart-icons/react';
// or
import { SmartIcon } from 'smart-icons'; // defaults to React

function App() {
  return (
    <div>
      {/* Exact matches */}
      <SmartIcon name="home" size={24} color="blue" />
      <SmartIcon name="house" size={24} color="red" /> {/* synonym for home */}
      
      {/* Fuzzy matching with prefixMatch prop */}
      <SmartIcon name="hom" prefixMatch size={24} color="green" /> {/* matches "home" */}
      <SmartIcon name="sea" prefixMatch size={24} color="purple" /> {/* matches "search" */}
      <SmartIcon name="set" prefixMatch size={24} color="orange" /> {/* matches "settings" */}
    </div>
  );
}
```

### For React Native

```tsx
import { SmartIcon } from 'smart-icons/react-native';

function App() {
  return (
    <View>
      {/* Exact matches */}
      <SmartIcon name="home" size={24} color="blue" />
      <SmartIcon name="house" size={24} color="red" /> {/* synonym for home */}
      
      {/* Fuzzy matching with prefixMatch prop */}
      <SmartIcon name="hom" prefixMatch size={24} color="green" /> {/* matches "home" */}
      <SmartIcon name="sea" prefixMatch size={24} color="purple" /> {/* matches "search" */}
      <SmartIcon name="set" prefixMatch size={24} color="orange" /> {/* matches "settings" */}
    </View>
  );
}
```

## Features

- **Smart Synonym Matching**: Icons can be found by multiple names (e.g., "home", "house", "building")
- **Fuzzy Prefix Matching**: Find icons by typing 3+ characters with `prefixMatch` prop
- **Multiple Icon Families**: Support for different icon libraries
- **Cross-Platform**: Works with both React web and React Native
- **TypeScript Support**: Full type definitions included
- **High Performance**: O(1) lookups for exact matches, O(k) for fuzzy matches

## Available Icons

### Lucide Icons
- `home` (synonyms: home, house, building, dwelling)
- `delete` (synonyms: delete, trash, remove, bin, garbage)
- `search` (synonyms: search, find, magnify, lookup, seek)
- `user` (synonyms: user, person, account, profile, people)
- `settings` (synonyms: settings, config, preferences, options, gear)
- `mail` (synonyms: mail, email, message, envelope, letter)
- `phone` (synonyms: phone, call, telephone, mobile, contact)
- `calendar` (synonyms: calendar, date, schedule, event, time)
- `heart` (synonyms: heart, love, like, favorite, emotion)
- `star` (synonyms: star, rating, favorite, bookmark, highlight)
- `download` (synonyms: download, save, get, fetch, retrieve)
- `upload` (synonyms: upload, send, post, share, submit)
- `edit` (synonyms: edit, modify, change, update, alter)
- `close` (synonyms: close, exit, cancel, dismiss, quit)

## API

### SmartIcon Props

#### Common Props
- `name: string` - Icon name or synonym
- `family?: string` - Icon family (default: "lucide")
- `size?: number` - Icon size (default: 20)
- `color?: string` - Icon color (default: "black")
- `prefixMatch?: boolean` - Enable fuzzy matching for 3+ character inputs (default: false)

#### React Web Specific
- `className?: string` - CSS class name
- `style?: React.CSSProperties` - Inline styles

#### React Native Specific
- `strokeWidth?: number` - Stroke width for the icon

## Fuzzy Matching

When `prefixMatch={true}` is enabled, the component will attempt to find icons using:

1. **Exact Match**: Direct lookup (O(1))
2. **Prefix Match**: Find synonyms that start with the input
3. **Contains Match**: Find synonyms that contain the input
4. **Reverse Prefix Match**: Find synonyms where input is a prefix

**Examples:**
- `"hom"` → matches `"home"`
- `"sea"` → matches `"search"`
- `"set"` → matches `"settings"`
- `"mai"` → matches `"mail"`

## Extending with Custom Icons

```tsx
import { registerIconFamily } from 'smart-icons/react'; // or react-native
import { CustomIcon } from './CustomIcon';

registerIconFamily('custom', {
  myIcon: {
    synonyms: ['my-icon', 'custom-icon'],
    component: CustomIcon,
  },
});

// Now you can use it
<SmartIcon name="my-icon" family="custom" />
<SmartIcon name="my-" prefixMatch family="custom" /> {/* fuzzy match */}
```

## Performance

- **Exact Matches**: O(1) - Direct hash map lookup
- **Fuzzy Matches**: O(k) - where k is the number of synonyms
- **Memory**: O(n × m) - where n is icons and m is average synonyms per icon

## License

MIT
