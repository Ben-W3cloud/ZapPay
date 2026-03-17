import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { router } from 'expo-router';

const SLIDES = [
  {
    title: 'All your banks,\none screen',
    subtitle: 'Connect GTBank, Access, Zenith and more. See every balance at a glance.',
    bg: '#7F77DD',
    accent: '#AFA9EC',
  },
  {
    title: 'Move money\neffortlessly',
    subtitle: 'Transfer between your accounts without switching apps. Fast and secure.',
    bg: '#1D9E75',
    accent: '#5DCAA5',
  },
  {
    title: 'Your AI money\ncoach',
    subtitle: 'Ask why you\'re broke mid-month. Get real answers and a plan to fix it.',
    bg: '#D85A30',
    accent: '#F0997B',
  },
];

export default function Onboarding() {
  const [current, setCurrent] = useState(0);
  const slide = SLIDES[current];
  const isLast = current === SLIDES.length - 1;

  const handleNext = () => {
    if (isLast) {
      router.replace('/(auth)/login');
    } else {
      setCurrent(current + 1);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: slide.bg }]}>

      {/* Skip button */}
      <TouchableOpacity
        style={styles.skip}
        onPress={() => router.replace('/(auth)/login')}>

        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      {/* Illustration placeholder */}
      <View style={[styles.illustration, { backgroundColor: slide.accent }]} />

      {/* Text content */}
      <View style={styles.content}>
        <Text style={styles.title}>{slide.title}</Text>
        <Text style={styles.subtitle}>{slide.subtitle}</Text>
      </View>

      {/* Dot indicators */}
      <View style={styles.dots}>
        {SLIDES.map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              { backgroundColor: i === current ? '#fff' : 'rgba(255,255,255,0.35)' },
              i === current && styles.dotActive,
            ]}
          />
        ))}
      </View>

      {/* CTA button */}
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>
          {isLast ? 'Get started' : 'Next'}
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 28,
    paddingTop: 60,
    paddingBottom: 48,
  },
  skip: {
    alignSelf: 'flex-end',
    padding: 8,
  },
  skipText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 15,
  },
  illustration: {
    width: 220,
    height: 220,
    borderRadius: 32,
    marginTop: 32,
    marginBottom: 48,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    gap: 12,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
    lineHeight: 40,
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.75)',
    textAlign: 'center',
    lineHeight: 24,
  },
  dots: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 32,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  dotActive: {
    width: 24,
  },
  button: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
  },
});