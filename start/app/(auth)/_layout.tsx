import { StyleSheet } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { useTheme } from '@/hooks/useTheme';

const AuthLayout = () => {
  const { colors } = useTheme();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: colors.surface },
        headerTintColor: colors.text,
      }}
    >
      <Stack.Screen name="splash" />
      <Stack.Screen name="login" />
      <Stack.Screen name="signup" />
      <Stack.Screen name="otp" />
    </Stack>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({});