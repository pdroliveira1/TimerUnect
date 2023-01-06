import React from 'react';
import { View, StyleSheet, Dimensions, Text, Image } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {useAnimatedGestureHandler, useAnimatedStyle, useSharedValue} from 'react-native-reanimated';
import colors from '../style/colors';
import Abacate from '../assets/Abacate.png'

const WIDTH = Dimensions.get('window').width - 80;
const KONBSIZE = 20;
const MAXWIDTH = WIDTH -90

interface SliderProps{
  min: number;
  max: number;
  step: number
}

export function SliderInput({min, max, step}: SliderProps) {
  const x = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_,ctx) => {
      ctx.startX = x.value
    },
    onActive: (event, ctx) => {
      x.value = ctx.startX + event.translationX < 0 
      ? 0 
      : ctx.startX + event.translationX > MAXWIDTH 
      ? MAXWIDTH 
      : ctx.startX + event.translationX;
    },
    onEnd: (event, context) => {
      
    },
  })

  const StyleLine = useAnimatedStyle(() => {
    return{
      backgroundColor: colors.green_light ,
      height: 16,
      marginTop: -16,
      borderRadius: 100,
      width: x.value
    }

  })

  const StyleKnob = useAnimatedStyle(() => {
    return{
      transform: [
        {
          translateX : x.value,
        },
      ]
    }

  })


  return (
    <View style={styles.container}>
      <View style={styles.track}/>
      <Animated.View style={StyleLine} />
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[styles.image, StyleKnob]}>
          <Image
            source={Abacate}
            resizeMode="contain"
          />
        </Animated.View>
      </PanGestureHandler>

    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    
  },
  track:{
    height: 16,
    borderWidth: 2,
    borderColor: colors.green,
    borderRadius: 100
  },
  image:{
    position: 'absolute',
    top: 14,
    left: -16,
    width: 32,
    marginTop: -24
  }
})
