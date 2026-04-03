import { StyleSheet, View, Text, Image } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { useTheme } from '@/hooks/useTheme';

export default function ProfileScreen() {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }] }>
      {/* <Image source={require("../../assets/images/icon.png")} style={styles.image} />
      <Text style={[styles.title, { color: colors.text }]}>Profile</Text>
      <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  image: {
    width:200,
    height:200,
    marginBottom: 20,

  }
});
