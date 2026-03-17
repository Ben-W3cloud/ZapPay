import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Colors from '../constants/Colors';

export interface ColorScheme {
  background: string;
  backgroundSecondary: string;
  surface: string;
  text: string;
  textSecondary: string;
  textTertiary: string;
  textDisabled: string;
  tint: string;
  primary: string;
  primaryDark: string;
  accent: string;
  accentDark: string;
  border: string;
  tabIconDefault: string;
  tabIconSelected: string;
  buttonBackground: string;
  buttonBackgroundSecondary: string;
  hover: string;
  success: string;
  successBackground: string;
  warning: string;
  warningBackground: string;
  error: string;
  errorBackground: string;
  info: string;
  infoBackground: string;
}

interface UseThemeReturn {
  isDark: boolean;
  colors: ColorScheme;
}

/**
 * Hook to access current theme and colors
 * Must be used within ThemeProvider
 */
export const useTheme = (): UseThemeReturn => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }

  const isDark = context.theme === 'dark';
  const colors = Colors[context.theme];

  return {
    isDark,
    colors: colors as ColorScheme,
  };
};

/**
 * Hook to access theme controls and current mode
 */
export const useThemeControl = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useThemeControl must be used within ThemeProvider');
  }

  return {
    theme: context.theme,
    themeMode: context.themeMode,
    setThemeMode: context.setThemeMode,
    toggleTheme: context.toggleTheme,
  };
};
