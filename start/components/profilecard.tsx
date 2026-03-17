import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@/hooks/useTheme'

const ProfileCard = () => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.surface, borderColor: colors.border }] }>
      <Text style={{ color: colors.text, fontWeight: '600' }}>Profile</Text>
    </View>
  )
}

export default ProfileCard

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
  }
})