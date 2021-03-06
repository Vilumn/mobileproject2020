import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList, ScrollView } from 'react-native';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';
import Icon from 'react-native-vector-icons/AntDesign'

function logout(){
    auth()
        .signOut()
        .then(() => console.log('User signed out!'));
}

const ProfileScreen = ({ navigation }) => {
    const user = firebase.auth().currentUser;
    const nim = user.email.split('@')[0]

    const nim_data = {
        '231': 'Business Mathematics',
        '232': 'Food Business Technology',
        '233': 'Renewable Energy Engineering',
        '234': 'Computer Systems Engineering',
        '235': 'Software Engineering',
        '236': 'Product Design Engineering'
    }

    const nama_prodi = nim_data[nim.substring(0, 3)]


    return (
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
                <View style={styles.container}>
                    <View style={{ backgroundColor: 'white', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontFamily: 'Roboto-Bold', color: '#002C70', fontSize: 22, marginVertical: 22 }}>Profile</Text>
                        <Image style={{ width: 120, height: 120, borderRadius: 200 }} source={{ uri: "https://images.unsplash.com/photo-1542027959157-98e6745f4ba7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" }} />
                        <Text style={{ fontFamily: 'Roboto-Bold', color: 'black', fontSize: 28, marginTop: 20, marginBottom: 6 }}>{user.displayName}</Text>
                        <Text style={{ fontFamily: 'Roboto-Regular', color: 'black', fontSize: 20, marginBottom: 25 }}>{nama_prodi}</Text>
                        <TouchableOpacity style={{marginBottom: 20}} onPress={() => navigation.navigate('ChangeProfile')}>
                            <View style={{borderRadius: 100, borderColor: '#002C70', borderWidth: 2, paddingHorizontal: 30, paddingVertical: 5}}>
                                <Text style={{fontFamily: 'Roboto-Bold', color: '#002C70', fontSize: 20}}>Change Profile</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between', padding: 20, paddingBottom: 0}}>
                        <View style={styles.profilebox}>
                            <View style={{marginRight: 10}}>
                                <Icon name='idcard' size={20} color='#BBBBBB'/>
                            </View>
                            <View>
                                <Text style={styles.font1}>NIM</Text>
                                <Text style={styles.font2}>{nim}</Text>
                            </View>
                        </View>
                        
                        <View style={styles.profilebox}>
                            <View style={{marginRight: 10}}>
                                <Icon name='idcard' size={20} color='#BBBBBB'/>
                            </View>
                            <View>
                                <Text style={styles.font1}>GPA</Text>
                                <Text style={styles.font2}>2.3</Text>
                            </View>
                        </View>
                        
                        <View style={styles.profilebox}>
                            <View style={{marginRight: 10}}>
                                <Icon name='idcard' size={20} color='#BBBBBB'/>
                            </View>
                            <View style={{width: '100%'}}>
                                <Text style={styles.font1}>Email</Text>
                                <Text style={styles.font2}>{user.email}</Text>
                            </View>
                        </View>
                        
                        <View style={styles.profilebox}>
                            <View style={{marginRight: 10}}>
                                <Icon name='idcard' size={20} color='#BBBBBB'/>
                            </View>
                            <View>
                                <Text style={styles.font1}>Phone</Text>
                                <Text style={styles.font2}>{user.phoneNumber}</Text>
                            </View>
                        </View>
                    </View>

                    
                    <View style={{alignItems: 'center'}}>
                    <TouchableOpacity>
                        <View style={{}}>
                            <Text style={{ fontFamily: 'Roboto-Regular', color: 'black', fontSize: 20, marginBottom: 14 }}>Contact us</Text>
                        </View>
                    </TouchableOpacity>
                    </View>


                    <View style={{alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => logout()}>
                        <View style={{}}>
                            <Text style={{ fontFamily: 'Roboto-Regular', color: '#BD2727', fontSize: 20 }}>Log Out</Text>
                        </View>
                    </TouchableOpacity>
                    </View>
                </View>
            
        </ScrollView>
    );
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    profilebox: {
        width: '42%',
        flexDirection: 'row',
        marginRight: 10,
        marginBottom: 20
    },
    font1: {
        color: '#BBBBBB',
        fontFamily: 'Roboto-Bold',
        fontSize: 16
    },
    font2: {
        color: 'black',
        fontFamily: 'Roboto-Regular',
        fontSize: 16
    }
})