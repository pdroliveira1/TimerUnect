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
import { callbackify } from 'util';

export function Cadastro() {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>


            <View style={styles.header}>

              <TouchableOpacity>
                <Text style={styles.txtvoltar}>
                  Cancelar
                </Text>
              </TouchableOpacity>

              <Image 
              style={styles.image}
              source={Abacate}
              resizeMode="contain"
              />
            </View>
            

            <Text style={styles.title}>Crie sua conta</Text>

            <View style={styles.inputNome}>
              <TextInputBox title='Nome de Usuário' value={nome} onChangeText={text => setNome(text)}/>
            </View>

            <View style={styles.inputEmail}>
              <TextInputBox title='Email' value={email} keyboardType={'email-address'} onChangeText={text => setEmail(text)}/>
            </View>

            <View style={styles.inputSenha}>
              <TextInputBox title='Senha' secureTextEntry={true} value={senha} onChangeText={text => setSenha(text)}/>
            </View>

            <TouchableOpacity style={styles.ButtonLogin} onPress={()=> console.log(email)}>
              <Text style={styles.textButtonLogin}>
                Cadastrar
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.ButtonAlterarSenha}>
              <Text style={styles.TextButtonAlterarSenha}>
                Já tenho uma conta
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
  header:{
    width: '100%',
    marginTop: 28,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
    
  },
  txtvoltar:{
    fontSize: 16,
    fontFamily: fonts.text,
    
  },
  image:{
    marginRight: '46%'
  },
  title:{
    fontSize:34,
    fontFamily: fonts.headingN,
    marginTop: 40,
    alignSelf: 'flex-start'

  },
  inputNome:{
    marginTop: 32,
    width: '100%'
  },
  inputEmail:{
    marginTop: 20,
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