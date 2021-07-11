import React, {Component, useState, useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import { View, Text, Button } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
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
import CourseOverview from './screens/CourseOverview';

import DigitalLibrary from './screens/DigitalLibrary';
import Email from './screens/Email';
import Event from './screens/Event';
import GradeRecord from './screens/GradeRecord';
// Ini List Matakuliah Setelah Klik "Search" di Screen AttendanceReport
import CourseListAttendance from './screens/CourseListAttendance';
import Session from './screens/Session';
import AttendanceDetails from './screens/AttendanceDetails';

import HomeIcon from 'react-native-vector-icons/Ionicons'
import CalIcon from 'react-native-vector-icons/Feather'
import ClipIcon from 'react-native-vector-icons/Foundation'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
    tabBarOptions={{
      activeTintColor: '#00b900',
      inactiveTintColor: 'gray',
      showLabel: false,
    }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{backgroundColor: 'white', flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center', borderBottomColor: focused ? '#002C70' : 'white', borderBottomWidth: 5, borderTopWidth: 5, borderTopColor: 'white'}}>
            <HomeIcon name='home-outline' size={25} style={{color: focused ? '#002C70' : "#BBBBBB" }}/>
          </View>
        ),
      }} />
      <Tab.Screen name="Chat" component={ChatScreen_test} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{backgroundColor: 'white', flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center', borderBottomColor: focused ? '#002C70' : 'white', borderBottomWidth: 5, borderTopWidth: 5, borderTopColor: 'white'}}>
            <CalIcon name='calendar' size={25} style={{color: focused ? '#002C70' : "#BBBBBB" }}/>
          </View>
        ),
      }}/>
      <Tab.Screen name="GradeRecord" component={GradeRecord} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{backgroundColor: 'white', flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center', borderBottomColor: focused ? '#002C70' : 'white', borderBottomWidth: 5, borderTopWidth: 5, borderTopColor: 'white'}}>
            <ClipIcon name='clipboard-notes' size={25} style={{color: focused ? '#002C70' : "#BBBBBB" }}/>
          </View>
        ),
      }}/>
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{backgroundColor: 'white', flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center', borderBottomColor: focused ? '#002C70' : 'white', borderBottomWidth: 5, borderTopWidth: 5, borderTopColor: 'white'}}>
            <HomeIcon name='md-person-outline' size={25} style={{color: focused ? '#002C70' : "#BBBBBB" }}/>
          </View>
        ),
      }}/>
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
            <Stack.Screen name="CourseListAttendance" component={CourseListAttendance} />
            <Stack.Screen name="AttendanceDetails" component={AttendanceDetails} />
            <Stack.Screen name="CourseOverview" component={CourseOverview} />
            <Stack.Screen name="DigitalLibrary" component={DigitalLibrary} />
            <Stack.Screen name="Email" component={Email} />
            <Stack.Screen name="Event" component={Event} />
            <Stack.Screen name="Session" component={Session} />
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

