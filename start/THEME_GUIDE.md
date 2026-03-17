# 🎨 Oceanic Grit Theme System Guide

## Overview
The app now uses a modern **Oceanic Grit** color palette with full light/dark mode support following the **60-30-10 design rule** and WCAG AA accessibility standards.

### Color Palette
- **Primary Brand Color**: Dark Teal (#2d3436)
- **Accent Color**: Fresh Mint (#2bcbba)
- **Neutral Base**: Whites, grays, and dark backgrounds (60%)

---

## 🚀 Quick Start

### Using the Theme Hook
```typescript
import { useTheme } from '@/hooks/useTheme';

export function MyComponent() {
  const { isDark, colors } = useTheme();

  return (
    <View style={{ backgroundColor: colors.background }}>
      <Text style={{ color: colors.text }}>Hello World</Text>
    </View>
  );
}
```

### Accessing Theme Controls
```typescript
import { useThemeControl } from '@/hooks/useTheme';

export function ThemeSwitcher() {
  const { theme, themeMode, setThemeMode, toggleTheme } = useThemeControl();

  return (
    <>
      <Button onPress={toggleTheme} title="Toggle Theme" />
      <Button onPress={() => setThemeMode('light')} title="Light Mode" />
      <Button onPress={() => setThemeMode('dark')} title="Dark Mode" />
      <Button onPress={() => setThemeMode('auto')} title="Auto (System)" />
    </>
  );
}
```

---

## 🎯 Color Usage Guide

### Available Colors
All colors are accessible via the `colors` object returned by `useTheme()`:

#### Backgrounds
- `colors.background` - Primary background
- `colors.backgroundSecondary` - Secondary background
- `colors.surface` - Card/panel backgrounds

#### Text
- `colors.text` - Primary text (high contrast)
- `colors.textSecondary` - Secondary text
- `colors.textTertiary` - Tertiary text (lowest priority)
- `colors.textDisabled` - Disabled text

#### Interactive Elements
- `colors.primary` - Primary button/action color
- `colors.primaryDark` - Dark variant of primary
- `colors.accent` - Accent/highlight color (Fresh Mint - for CTAs)
- `colors.accentDark` - Darker accent for hover/active states
- `colors.tint` - Tint color (alias for primary)

#### UI Elements
- `colors.border` - Borders and dividers
- `colors.buttonBackground` - Button backgrounds
- `colors.buttonBackgroundSecondary` - Secondary button backgrounds
- `colors.hover` - Hover state backgrounds
- `colors.tabIconDefault` - Default tab icons
- `colors.tabIconSelected` - Selected tab icons

#### Semantic Colors
- `colors.success` / `colors.successBackground`
- `colors.warning` / `colors.warningBackground`
- `colors.error` / `colors.errorBackground`
- `colors.info` / `colors.infoBackground`

---

## 📱 Real-World Examples

### Styled Button
```typescript
import { useTheme } from '@/hooks/useTheme';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export function MyButton({ label, onPress }: any) {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors.accent }]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: colors.background }]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
});
```

### Card Component
```typescript
import { useTheme } from '@/hooks/useTheme';
import { View, StyleSheet } from 'react-native';

export function Card({ children }: any) {
  const { colors } = useTheme();

  return (
    <View style={[styles.card, { 
      backgroundColor: colors.surface,
      borderColor: colors.border,
    }]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
});
```

### Theme Toggle Button
```typescript
import { ThemeToggle } from '@/components/ThemeToggle';

// Add to your header or settings screen
<ThemeToggle size={24} />
```

---

## 🔧 Theme Provider Setup

The root layout (`app/_layout.tsx`) is already wrapped with `ThemeProvider`:

```typescript
import { ThemeProvider } from '../context/ThemeContext';

export default function RootLayout() {
  // ... font loading logic ...
  
  return (
    <ThemeProvider>
      <RootLayoutNav />
    </ThemeProvider>
  );
}
```

### Optional: Persist Theme Preference
To save the user's theme preference across app sessions, add `@react-native-async-storage/async-storage`:

```bash
npm install @react-native-async-storage/async-storage
```

Then uncomment the AsyncStorage code in `context/ThemeContext.tsx`.

---

## ♿ Accessibility Features

### Contrast Ratios
All colors meet **WCAG AA standards** (4.5:1 minimum):
- Dark Teal text on white background: ✓ Excellent contrast
- Fresh Mint on dark background: ✓ Excellent contrast
- Secondary text colors: ✓ Meets standards

### Semantic Color Warnings
- **Avoid red for secondary states**: Use `colors.warning` (orange) instead
- **Standard error state**: `colors.error` for critical errors only
- Always pair colors with text labels for accessibility

---

## 🎨 Design Tokens Summary

### 60-30-10 Rule Implementation
- **60% Neutral Base**: Background, surface, and gray colors
- **30% Primary Brand**: Dark Teal (#2d3436) for structure and headings
- **10% Accent**: Fresh Mint (#2bcbba) for calls-to-action

### Mode Behavior
- **Light Mode**: White backgrounds with dark text, mint accents
- **Dark Mode**: Very dark backgrounds (#0D1117) with light text, bright mint accents
- **Auto Mode**: Follows system dark mode preference

---

## 📚 Type Definitions

```typescript
type ThemeType = 'light' | 'dark' | 'auto';

interface ColorScheme {
  // ... all color properties documented above
}

interface UseThemeReturn {
  isDark: boolean;
  colors: ColorScheme;
}
```

---

## 🐛 Troubleshooting

### "useTheme must be used within ThemeProvider"
**Solution**: Ensure your component is wrapped by the `ThemeProvider`. The root layout should have it, but check that your component tree is correct.

### Colors not updating
**Solution**: Make sure you're calling `useTheme()` inside your component, not outside. React hooks must be called inside functional components.

### Theme toggle not working
**Solution**: Check that you're using `useThemeControl()` hook and calling `toggleTheme()` or `setThemeMode()` on a valid component inside the provider.

---

## 🔗 Related Files
- Color definitions: `constants/Colors.ts`
- Theme context: `context/ThemeContext.tsx`
- Hooks: `hooks/useTheme.ts`
- Example component: `components/ThemeToggle.tsx`
