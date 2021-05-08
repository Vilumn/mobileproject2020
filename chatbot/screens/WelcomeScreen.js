import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const WelcomeScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Image
                source={require('../assets/line-logo.png')}
                style={styles.logo}
            />
            <Text style={styles.text}>Welcome to LINE</Text>
            <Text style={styles.text2}>Free messaging, voice and video calls, and more!</Text>
            <TouchableOpacity style={styles.buttonmargin} onPress={() => navigation.navigate('Register')}>
                <View style={styles.button}>
                    <Text style={styles.buttontext}>Start</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
        paddingTop: 120,
        alignItems: 'center',
        padding: 20,
      },
      logo: {
        height: 80,
        width: 80,
      },
      text: {
        fontFamily: 'Arial',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 10,
        color: 'black',
      },
      text2: {
        fontFamily: 'Arial',
        fontSize: 14,
        color: '#939393',
      },
      buttonmargin: {
        marginTop: 305,  
      },
      button: {
        paddingVertical: 12,
        paddingHorizontal: 160,
        backgroundColor: '#6bd35b',
      },
      buttontext: {
          fontSize: 15,
          color: 'white',
          fontFamily: 'Arial',
      }
})