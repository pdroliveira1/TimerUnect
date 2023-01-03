import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Login } from './src/pages/Login';
import * as SplashScreen from 'expo-splash-screen'
import * as Font from 'expo-font'
import {
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold
} from '@expo-google-fonts/nunito';
import  {
  OpenSans_400Regular,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
  useFonts,
} from '@expo-google-fonts/open-sans';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(()=>{
    (async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          OpenSans_400Regular,
          OpenSans_600SemiBold,
          OpenSans_700Bold,
          Nunito_400Regular,
          Nunito_600SemiBold,
          Nunito_700Bold
        })
      }
      catch{

      }
      finally{
        setAppIsReady(true);
      }
    })()
  },[])

  const onLayout = useCallback(() =>{
    if (appIsReady){
      SplashScreen.hideAsync()
    }
  }, [appIsReady]);

  if (!appIsReady){
    return null;
  }

  return (
    <View onLayout={onLayout}>
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
