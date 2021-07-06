import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Dimensions, SafeAreaView, ScrollView } from 'react-native';
import auth from '@react-native-firebase/auth';
import Icon2 from 'react-native-vector-icons/Ionicons';

const win = Dimensions.get('window');
const ratio = win.width / 2419;
const ratio2 = win.width / 677;
const logo_size = 4.5;

class LoginScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={email_data:'', password_data:''}
    }

    signinUser = () => {
        var email = this.state.email_data;
        var password = this.state.password_data;
        auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
            console.log('User account created & signed in!');
        })
        .catch(error => {
            if (error.code === 'auth/invalid-email') {
              alert('Invalid Email or Password');
            }

            if (error.code === 'auth/user-not-found'){
              alert('Invalid Email or Password');
            }

            if (error.code === 'auth/too-many-requests'){
              alert('Account has been blocked, there has been to many failed login attempts, try again later');
            }

            console.log(error)
        });
    }

    render(){
      return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
          <ScrollView style={styles.container}>
            <Image
              source={require('../assets/prasmultouch-logo.png')}
              style={styles.logo}
            />
            <Text style={styles.text}>Proceed with your{"\n"}<Text style={{fontFamily: 'Roboto-Bold'}}>Log In</Text></Text>
            <Text style={styles.textdesc}>Email</Text>
            <TextInput
              style={styles.input}
              onChangeText={email_data => this.setState({ email_data })}
            />
            <Text style={styles.textdesc}>Password</Text>
            <TextInput
              secureTextEntry={true}
              style={styles.input2}
              onChangeText={password_data => this.setState({ password_data })}
            />
            
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 30}}>
              <TouchableOpacity onPress={this.signinUser}>
                <View style={styles.button}>
                  <Text style={styles.buttontext}>Log In</Text>
                </View>
              </TouchableOpacity>
              <Text style={styles.text3} onPress={() => this.props.navigation.navigate('Register')}><Text style={{color: 'black'}}>Don't have an account ?</Text><Text style={{color: '#0A7FB0'}}>{"\n"}Click here to register</Text></Text>
            </View>
            
          </ScrollView>
        </SafeAreaView>
      );
    }
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
      backgroundColor: 'white',
      flex: 1,
      marginTop: 80,
      paddingTop: 0,
      padding: 40,
    },
    text: {
      fontFamily: 'Roboto-Regular',
      fontSize: 30,
      marginTop: 10,
      color: 'black',
      marginBottom: 40,
    },
    text2: {
      marginTop: 5,
      fontFamily: 'Roboto-Bold',
      fontSize: 24,
      color: 'black',
    },
    text3: {
      marginTop: 7,
      color: '#006bff',
      textAlign: 'center',
    },
    input: {
      fontFamily: 'Roboto-Regular',
      marginBottom: 20,
      borderWidth: 0,
      borderBottomWidth: 1,
      height: 40,
      color: 'black',
    },
    input2: {
      fontFamily: 'Roboto-Regular',
      borderWidth: 0,
      borderBottomWidth: 1,
      height: 40,
      color: 'black',
    },
    logo :{
      width: win.width / logo_size,
      height: 2129 * ratio / logo_size,
      marginBottom: 20,
    },
    textdesc:{
      fontFamily: 'Roboto-Regular',
      fontSize: 16,
    },
    button: {
      borderRadius: 30,
      marginTop: 30,
      paddingVertical: 8,
      paddingHorizontal: 70,
      backgroundColor: '#002C70',
    },
    buttontext: {
        fontSize: 17,
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Roboto-Regular',
    }
})
