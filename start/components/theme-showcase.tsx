import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme, useThemeControl } from '@/hooks/useTheme';
import { ThemeToggle } from '@/components/ThemeToggle';

/**
 * Example Theme Showcase Screen
 * Demonstrates the Oceanic Grit color palette and theme functionality
 */
export default function ThemeShowcase() {
  const { isDark, colors } = useTheme();
  const { theme, themeMode, setThemeMode } = useThemeControl();

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={styles.contentContainer}
    >
      {/* Header */}
      <View style={[styles.header, { borderBottomColor: colors.border }]}>
        <Text style={[styles.title, { color: colors.text }]}>
          🎨 Oceanic Grit Theme
        </Text>
        <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
          Current Mode: {theme.toUpperCase()}
        </Text>
        <View style={styles.toggleContainer}>
          <ThemeToggle size={28} />
        </View>
      </View>

      {/* Theme Mode Selection */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          Theme Mode
        </Text>
        <View style={styles.modeButtons}>
          {(['light', 'dark', 'auto'] as const).map((mode) => (
            <TouchableOpacity
              key={mode}
              style={[
                styles.modeButton,
                {
                  backgroundColor:
                    themeMode === mode ? colors.accent : colors.surface,
                  borderColor: colors.border,
           },
              ]}
              onPress={() => setThemeMode(mode)}
            >
              <Text
                style={[
                  styles.modeButtonText,
                  {
                    color: themeMode === mode ? colors.background : colors.text,
                  },
                ]}
              >
                {mode === 'auto' ? '⚙️ Auto' : mode === 'light' ? '☀️ Light' : '🌙 Dark'}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Color Palette */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          Color Palette
        </Text>

        {/* Primary Colors */}
        <View style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <Text style={[styles.cardTitle, { color: colors.text }]}>Primary Colors</Text>
          <ColorBox
            label="Primary Dark Teal"
            color={colors.primaryDark}
            textColor={colors.background}
          />
          <ColorBox
            label="Primary"
            color={colors.primary}
            textColor={colors.background}
          />
          <ColorBox
            label="Accent Mint"
            color={colors.accent}
            textColor={colors.background}
          />
        </View>

        {/* Neutral Colors */}
        <View style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <Text style={[styles.cardTitle, { color: colors.text }]}>Text Colors</Text>
          <ColorBox
            label="Primary Text"
            color={colors.text}
            textColor={colors.background}
          />
          <ColorBox
            label="Secondary Text"
            color={colors.textSecondary}
            textColor={colors.background}
          />
          <ColorBox
            label="Tertiary Text"
            color={colors.textTertiary}
            textColor={colors.background}
          />
        </View>

        {/* Semantic Colors */}
        <View style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <Text style={[styles.cardTitle, { color: colors.text }]}>Semantic Colors</Text>
          <ColorBox
            label="Success"
            color={colors.success}
            textColor={colors.background}
          />
          <ColorBox
            label="Warning"
            color={colors.warning}
            textColor={colors.background}
          />
          <ColorBox
            label="Error"
            color={colors.error}
            textColor={colors.background}
          />
          <ColorBox
            label="Info"
            color={colors.info}
            textColor={colors.background}
          />
        </View>
      </View>

      {/* Features */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          ✨ Key Features
        </Text>
        <FeatureItem
          title="60-30-10 Rule"
          description="60% neutral base, 30% primary brand color, 10% accent"
          color={colors.textSecondary}
        />
        <FeatureItem
          title="WCAG AA Compliant"
          description="Minimum 4.5:1 contrast ratio for accessibility"
          color={colors.textSecondary}
        />
        <FeatureItem
          title="Light & Dark Mode"
          description="Seamless switching with system preference support"
          color={colors.textSecondary}
        />
        <FeatureItem
          title="Reduced Red Usage"
          description="Orange for secondary 'negative' states to reduce anxiety"
          color={colors.textSecondary}
        />
      </View>

      {/* Usage Example */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          💻 Usage Example
        </Text>
        <View
          style={[
            styles.codeBlock,
            { backgroundColor: colors.backgroundSecondary, borderColor: colors.border },
          ]}
        >
          <Text style={[styles.code, { color: colors.text }]}>
            {`const { colors } = useTheme();\n\n<View style={{\n  backgroundColor: colors.background,\n  borderColor: colors.border\n}} />`}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

interface ColorBoxProps {
  label: string;
  color: string;
  textColor: string;
}

function ColorBox({ label, color, textColor }: ColorBoxProps) {
  return (
    <View style={[styles.colorBox, { backgroundColor: color }]}>
      <Text style={[styles.colorLabel, { color: textColor }]}>
        {label}
      </Text>
      <Text style={[styles.colorValue, { color: textColor }]}>
        {color}
      </Text>
    </View>
  );
}

interface FeatureItemProps {
  title: string;
  description: string;
  color: string;
}

function FeatureItem({ title, description, color }: FeatureItemProps) {
  return (
    <View style={styles.featureItem}>
      <Text style={[styles.featureTitle, { color }]}>
        {title}
      </Text>
      <Text style={[styles.featureDescription, { color }]}>
        {description}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 32,
  },
  header: {
    padding: 24,
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 16,
  },
  toggleContainer: {
    marginTop: 8,
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  modeButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  modeButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
  },
  modeButtonText: {
    fontSize: 12,
    fontWeight: '600',
  },
  card: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  colorBox: {
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  colorLabel: {
    fontSize: 14,
    fontWeight: '600',
  },
  colorValue: {
    fontSize: 12,
    marginTop: 4,
    opacity: 0.8,
  },
  featureItem: {
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'transparent',
  },
  featureTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: 12,
  },
  codeBlock: {
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
  },
  code: {
    fontSize: 11,
    fontFamily: 'monospace',
    lineHeight: 18,
  },
});
