import React , {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TextInputProps,
  Image
  
} from 'react-native';

import {Ionicons} from '@expo/vector-icons' 
import colors from '../style/colors';

interface InputProps extends TextInputProps{
  title: string;
}

export function TextInputBox({title, ...rest} : InputProps) {

  const [sec, setSec] = useState(rest.secureTextEntry);

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder={title}  underlineColorAndroid="transparent" {...rest} secureTextEntry={sec}/>

      {rest.secureTextEntry &&(
        <TouchableOpacity onPress={() => setSec(!sec)}>
          
          <Ionicons
              name={sec?  'ios-eye' : 'ios-eye-off'}
              style={styles.icon}
              size={28}
              color={colors.green_dark}
            />
        </TouchableOpacity>
      )}



    </View>
  );

}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    height: 56,
    backgroundColor : colors.white,
    
  },
  input:{
    height: 56,
    width: '100%',
    paddingLeft: 10,
    paddingRight: 54,
    backgroundColor : colors.white,
    borderWidth: 1,
    borderColor: colors.green,
    borderStyle: 'solid',
    borderRadius: 10,
    
  },
  icon:{
    position: 'absolute',
    right: 13,
    top: 13,
  }
})