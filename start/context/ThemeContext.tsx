import React, { createContext, useState, useEffect, useCallback } from 'react';
import { useColorScheme } from 'react-native';

export type ThemeType = 'light' | 'dark' | 'auto';

interface ThemeContextType {
  theme: 'light' | 'dark';
  themeMode: ThemeType;
  setThemeMode: (mode: ThemeType) => void;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  initialTheme?: ThemeType;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ 
  children, 
  initialTheme = 'auto' 
}) => {
  const systemColorScheme = useColorScheme();
  const [themeMode, setThemeModeState] = useState<ThemeType>(initialTheme);

  // Determine current theme based on mode and system preference
  const getCurrentTheme = useCallback((): 'light' | 'dark' => {
    if (themeMode === 'auto') {
      return systemColorScheme === 'dark' ? 'dark' : 'light';
    }
    return themeMode;
  }, [themeMode, systemColorScheme]);

  const setThemeMode = useCallback((mode: ThemeType) => {
    setThemeModeState(mode);
    // Optional: Implement AsyncStorage persistence here
    // await AsyncStorage.setItem('themeMode', mode);
  }, []);

  const toggleTheme = useCallback(() => {
    const currentTheme = getCurrentTheme();
    const newMode = currentTheme === 'dark' ? 'light' : 'dark';
    setThemeMode(newMode);
  }, [getCurrentTheme, setThemeMode]);

  const value: ThemeContextType = {
    theme: getCurrentTheme(),
    themeMode,
    setThemeMode,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
