import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme, useThemeControl } from '@/hooks/useTheme';

interface ThemeToggleProps {
  size?: number;
}

/**
 * Theme toggle button component
 * Displays moon/sun icon and toggles between light/dark mode
 */
export const ThemeToggle: React.FC<ThemeToggleProps> = ({ size = 24 }) => {
  const { isDark, colors } = useTheme();
  const { toggleTheme } = useThemeControl();

  return (
    <TouchableOpacity
      onPress={toggleTheme}
      style={[styles.button, { backgroundColor: colors.surface }]}
      activeOpacity={0.7}
    >
      <MaterialCommunityIcons
        name={isDark ? 'white-balance-sunny' : 'moon-waning-crescent'}
        size={size}
        color={colors.accent}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 8,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
