import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import Icon2 from 'react-native-vector-icons/Ionicons';

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
        return(
            <View style={styles.container}>
                <Image
                    source={require('../assets/line-logo-text.png')}
                    style={styles.logo}
                />
                <TextInput 
                    placeholder={'Email Address'}
                    style={styles.input}
                    onChangeText={email_data => this.setState({email_data})}
                />
                <TextInput 
                    secureTextEntry={true}
                    placeholder={'Password'}
                    style={styles.input2}
                    onChangeText={password_data => this.setState({password_data})}
                />
                <TouchableOpacity style={styles.buttonmargin} onPress={this.signinUser}>
                    <View style={styles.button}>
                        <Text style={styles.buttontext}>Log In</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.text4} onPress={() => this.props.navigation.navigate('Register')}>Don't have an account ? Create here</Text>
            </View>
        );
    }
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
        alignItems: 'center',
        paddingTop: 100,
      },
      logo: {
        width: 110,
        height: 110 * 0.35,
      },
      text: {
        fontFamily: 'Arial',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
        color: 'black',
      },
      text2: {
        marginTop: 5,
        fontFamily: 'Arial',
        fontSize: 12,
        color: '#8d8d8d',
      },
      text3: {
        fontSize: 14,
        color: '#006bff',
        marginTop: 20,
      },
      text4: {
        fontSize: 14,
        marginTop: 150,
        color: '#006bff',
      },
      input: {
        fontFamily: 'Arial',
        fontWeight: 'bold',
        marginTop: 50,
        borderWidth: 0,
        borderBottomWidth: 1,
        height: 40,
        width: 310,
        color: '#c2c4c6',
        borderColor: '#c2c4c6',
      },
      input2: {
        fontFamily: 'Arial',
        fontWeight: 'bold',
        marginTop: 30,
        borderWidth: 0,
        borderBottomWidth: 1,
        height: 40,
        width: 310,
        color: '#c2c4c6',
        borderColor: '#c2c4c6',
      },
      button: {
        borderRadius: 8,
        marginTop: 30,
        paddingVertical: 12,
        paddingHorizontal: 132,
        backgroundColor: '#c2c4c6',
      },
      buttontext: {
          fontSize: 17,
          color: 'white',
          fontFamily: 'Arial',
          fontWeight: 'bold',
      }
})
