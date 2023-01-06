import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {SliderInput} from '../components/SliderInput';

export function Principal() {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.slider}>
        <SliderInput min={0} max={60} step={5}/>
      </View>
      

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    height: '100%',
    marginHorizontal: 40,
    justifyContent: 'center',
    alignItems:'center'
  },
  slider:{
    width: 209
  }
  
  
})