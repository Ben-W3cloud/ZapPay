import { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { router } from 'expo-router';

const SPLASH_DURATION = 2500; 

export default function Splash() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/(onboarding)');
    }, SPLASH_DURATION);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Text style={styles.logo}>₦</Text>
      </View>
      <Text style={styles.appName}>Finapp</Text>
      <Text style={styles.tagline}>Your money, one place</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7F77DD',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  logoBox: {
    width: 80,
    height: 80,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: { fontSize: 40, color: '#fff' },
  appName: { fontSize: 32, fontWeight: '700', color: '#fff' },
  tagline: { fontSize: 16, color: 'rgba(255,255,255,0.75)' },
});