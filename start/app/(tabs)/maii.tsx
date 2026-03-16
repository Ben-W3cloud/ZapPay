import { StyleSheet, View, Text, Image } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';

export default function TabFourScreen() {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/icon.png")} style={styles.image} />
      <Text style={styles.title}>Tab Four</Text>
      <EditScreenInfo path="app/(tabs)/index.tsx" />
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
    width:20,
    height:20,
    marginBottom: 20,

  }
});
