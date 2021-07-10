import React, {Component, useState, useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import auth from '@react-native-firebase/auth';

import WelcomeScreen from './screens/WelcomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import ChatScreen_test from './screens/ChatScreen_test';
import ProfileScreen from './screens/ProfileScreen';
import HomeScreen from './screens/HomeScreen'

import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo'
import AttendanceReport from './screens/AttendanceReport';
import DigitalLibrary from './screens/DigitalLibrary';
import Email from './screens/Email';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        let iconEntypo;

        if (route.name === 'Chat') {
          iconName = focused
            ? 'chatbubble-ellipses'
            : 'chatbubble-ellipses-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
        } else if (route.name === 'Profile') {
          iconName = focused ? 'dots-three-horizontal' : 'dots-three-horizontal';
          return <Entypo name={iconName} size={size} color={color} />;
        }
      },
    })}
    tabBarOptions={{
      activeTintColor: '#00b900',
      inactiveTintColor: 'gray',
    }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Chat" component={ChatScreen_test} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;
  
  SplashScreen.hide();

  return(
    <NavigationContainer>
    { user != null ? (
      <>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={HomeTabs} />
            <Stack.Screen name="AttendanceReport" component={AttendanceReport} />
            <Stack.Screen name="DigitalLibrary" component={DigitalLibrary} />
            <Stack.Screen name="Email"  component={Email} />
          </Stack.Navigator>
      </>
    ) : (
      <>
        <Stack.Navigator initialRouteName="Welcome" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Register" component={RegisterScreen}/>
          <Stack.Screen name="Login" component={LoginScreen}/>
        </Stack.Navigator>
      </>
      )}
    </NavigationContainer>
  )
}
  
export default App;

