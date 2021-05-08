import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';

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

  render(){
    return(
      <View style={{flex: 1}}>
          <View style={{backgroundColor: '#ffffff', padding: 12}}>
              <Icon name="arrow-back-ios" size={22} color='black' onPress={() => this.props.navigation.navigate('Welcome')}/>
          </View>
          <View style={styles.container}>
              <Text style={styles.text}>Register an Account</Text>
              <Text style={styles.text2}>By tapping the arrow button, you accept LINE's <Text style={{textDecorationLine: 'underline'}}>Terms and Conditionsof Use</Text> and <Text style={{textDecorationLine: 'underline'}}>Privacy Policy</Text></Text>
              <TextInput
              placeholder={'Email'}
              style={styles.input}
              onChangeText={email_data => this.setState({email_data})}
              />
              <TextInput 
              secureTextEntry={true}
              placeholder={'Password'}
              style={styles.input2}
              onChangeText={password_data => this.setState({password_data})}
              />
              <Text style={styles.text3} onPress={() => this.props.navigation.navigate('Login')}>Already have an account ? Click here to sign in</Text>
              <Icon2 name="arrow-forward-circle" onPress={this.createUser} style={{marginTop: 315, textAlign:'right', marginRight: -15}} size={60} color='#6bd35b'/>
          </View>
      </View>
  );
  }
}

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
        marginTop: -10,
        paddingTop: 0,
        padding: 40,
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
        marginTop: 7,
        color: '#006bff',
      },
      input: {
        marginTop: 30,
        borderWidth: 0,
        borderBottomWidth: 1,
        height: 40,
      },
      input2: {
        marginTop: 10,
        borderWidth: 0,
        borderBottomWidth: 1,
        height: 40,
      }
})

