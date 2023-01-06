import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,

} from 'react-native';

import colors from '../style/colors';

import Abacate from '../assets/Abacate.png'
import fonts from '../style/fonts';
import {TextInputBox} from '../components/TextInputBox';

export function Login() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>

            <Image 
              style={styles.image}
              source={Abacate}
              resizeMode="contain"
            />

            <Text style={styles.title}>Faça seu login para{'\n'}
            começar</Text>

            
            <View style={styles.inputEmail}>
              <TextInputBox title='Email' value={email} onChangeText={text => setEmail(text)}/>
            </View>

            <View style={styles.inputSenha}>
              <TextInputBox title='Senha' secureTextEntry={true} value={senha} onChangeText={text => setSenha(text)}/>
            </View>

            <TouchableOpacity style={styles.ButtonLogin} onPress={()=> console.log(email)}>
              <Text style={styles.textButtonLogin}>
                Entrar
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.ButtonCadastro}>
              <Text style={styles.TextButtonCadastro}>
                Criar conta
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.ButtonAlterarSenha}>
              <Text style={styles.TextButtonAlterarSenha}>
                Esqueci minha senha
              </Text>
            </TouchableOpacity>

          </View>
        </TouchableWithoutFeedback>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    height : '100%',
    backgroundColor: colors.background,
  },
  content:{
    width: '100%',
    height: '100%',
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 24,
  },
  image:{
    marginTop: 28

  },
  title:{
    fontSize:34,
    fontFamily: fonts.headingN,
    marginTop: 40,

  },
  inputEmail:{
    marginTop: 32,
    width: '100%'
  },
  inputSenha:{
    marginTop: 20,
    width: '100%'
  },
  ButtonLogin: {
  
    marginTop: 32,
    width: '100%',
    height: 53,
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: colors.green,
    borderRadius: 37,
  },
  ButtonCadastro: {
    marginTop: 20,
    width: '100%',
    height: 53,
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: colors.background,
    borderRadius: 37,
    borderWidth: 1,
    borderColor: colors.green,
    borderStyle: 'solid',

  },
  ButtonAlterarSenha:{
    marginTop: 34,
    borderBottomWidth: 1

  },
  TextButtonCadastro:{
    fontFamily: fonts.headingN,
    fontSize: 20,
    fontWeight: '700',
    color: colors.green

  },
  textButtonLogin:{
    fontFamily: fonts.headingN,
    fontSize: 20,
    fontWeight: '700',
    color: colors.background

  },
  TextButtonAlterarSenha:{
    fontFamily: fonts.text,
    fontSize: 16,
    lineHeight: 27,
  },

});

