import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const arrow = <Icon name="arrow-forward-ios" size={18} color="white" />;

const win = Dimensions.get('window');
const ratio = win.width / 2419;
const ratio2 = win.width / 677;
const logo_size = 3.5;

const WelcomeScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
          <View style={{flexDirection: 'row', alignItems: 'center', display: 'flex'}}>
            <Image
              source={require('../assets/prasmultouch-logo.png')}
              style={styles.logo}
            />
            <Image
              source={require('../assets/prasmul-logo.png')}
              style={styles.logo2}
            />
          </View>
            <Text style={styles.text}>PRASMUL TOUCH</Text>
            <Text style={styles.text2}>Access your campus with just a TOUCH</Text>
            <Text style={styles.text3}>Sign in for full experience</Text>
            <TouchableOpacity style={styles.buttonmargin} onPress={() => navigation.navigate('Register')}>
                <View style={styles.button}>
                    <Text style={styles.buttontext}>NEXT</Text>
                    <View style={{marginLeft: 6}}>{arrow}</View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        paddingTop: 120,
        alignItems: 'center',
        padding: 20,
      },
      logo: {
        width: win.width / logo_size,
        height: 2129 * ratio / logo_size,
        marginRight: 20
      },
      logo2: {
        width: win.width / logo_size,
        height: 675 * ratio2 / logo_size,
      },
      text: {
        fontFamily: 'Roboto-Bold',
        fontSize: 38,
        marginTop: 10,
        color: 'white',
        marginBottom: 20,
        textAlign: 'center',
      },
      text2: {
        fontFamily: 'Roboto-Regular',
        fontSize: 22,
        color: 'white',
        textAlign: 'center',
      },
      text3: {
        marginTop: 30,
        fontFamily: 'Roboto-Light',
        fontSize: 22,
        color: '#FFFFFF',
        textAlign: 'center',
      },
      buttonmargin: {
        marginTop: 30,  
      },
      button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        paddingVertical: 6,
        paddingHorizontal: 40,
        backgroundColor: '#0FB3F4',
      },
      buttontext: {
          fontSize: 20,
          color: 'white',
          fontFamily: 'Arial',
      }
})