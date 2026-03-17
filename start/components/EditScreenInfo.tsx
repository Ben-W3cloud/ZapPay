import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

export default function EditScreenInfo({ path }: { path: string }) {
  const { colors } = useTheme();

  return (
    <View>
      <View style={[styles.getStartedContainer]}>
        <Text style={[styles.getStartedText, { color: colors.text }]}>Open up the code for this screen:</Text>

        <View
          style={[styles.codeHighlightContainer, styles.homeScreenFilename, { borderColor: colors.border }]}>
        </View>

        <Text style={[styles.getStartedText, { color: colors.text }]}>Change any of the text, save the file, and your app will automatically update.</Text>
      </View>

      <View style={styles.helpContainer}>
        <Text style={[styles.helpLinkText, { color: colors.textSecondary }]}>Tap here if your app doesn't automatically update after making changes</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
    borderWidth: 1,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
