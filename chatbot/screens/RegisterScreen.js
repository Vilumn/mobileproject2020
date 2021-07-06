import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, TextInput, Button, Image, Dimensions, SafeAreaView, ScrollView } from 'react-native';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';
import firebase from '@react-native-firebase/app';

const win = Dimensions.get('window');
const ratio = win.width / 2419;
const ratio2 = win.width / 677;
const logo_size = 4.5;

class RegisterScreen extends React.Component{
  constructor(props){
    super(props);
    this.state={email_data:'', password_data:''}
  }

  createUser = () => {
    var email = this.state.email_data;
    var password = this.state.password_data;
    auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('User account created & signed in!');

      const user = firebase.auth().currentUser;

      user.updateProfile({
        displayName: "none",
        photoURL: "none"
      }).then(() => {
        // Update successful
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
      });
    })
    .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          alert('That email address is invalid!');
        }
    });
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <ScrollView style={styles.container}>
          <Image
            source={require('../assets/prasmultouch-logo.png')}
            style={styles.logo}
          />
          <Text style={styles.text}>Register an account</Text>
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
            <TouchableOpacity onPress={this.createUser}>
              <View style={styles.button}>
                <Text style={styles.buttontext}>Register</Text>
              </View>
            </TouchableOpacity>
            <Text style={styles.text3} onPress={() => this.props.navigation.navigate('Login')}><Text style={{color: 'black'}}>Already have an account ?</Text><Text style={{color: '#0A7FB0'}}>{"\n"}Click here to sign in</Text></Text>
          </View>
          
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        marginTop: 100,
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

