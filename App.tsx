import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Login } from './src/pages/Login';
// import {
//   Nunito_400Regular,
//   Nunito_600SemiBold,
//   Nunito_700Bold
// } from '@expo-google-fonts/nunito';
// import  {
//   OpenSans_400Regular,
//   OpenSans_600SemiBold,
//   OpenSans_700Bold,
//   useFonts,
// } from '@expo-google-fonts/open-sans';

export default function App() {
  


  return (
    <View>
      <Login/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
