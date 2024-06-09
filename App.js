import { StyleSheet, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#800020',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
