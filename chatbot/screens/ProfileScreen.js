import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList, ScrollView } from 'react-native';
import auth from '@react-native-firebase/auth';
import CheckBox from '@react-native-community/checkbox';
import firebase from '@react-native-firebase/app';


function logout(){
    auth()
        .signOut()
        .then(() => console.log('User signed out!'));
}

const ProfileScreen = ({ navigation }) => {
    const [isLoading, setLoading] = useState(true);
    const [event, setEvent] = useState([]);

    const [toggleCheckBox, setToggleCheckBox] = useState(true)
    const [toggleCheckBox1, setToggleCheckBox1] = useState(true)
    const [toggleCheckBox2, setToggleCheckBox2] = useState(true)

    useEffect(() => {
        fetch('https://kuliahstem.prasetiyamulya.ac.id/web-api/newkuliahbyfacultyname/permata')
            .then((response) => response.json())
            .then((json) => {
                setEvent(json);
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);


    const user = firebase.auth().currentUser;

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={{ backgroundColor: 'white', width: '100%', height: 140, borderBottomColor: 'black', borderBottomWidth: 0.5, alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={{ width: 74, height: 74, borderRadius: 200 }} source={{ uri: "https://images.unsplash.com/photo-1542027959157-98e6745f4ba7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" }} />
                </View>
                <View style={{ padding: 16, borderBottomColor: 'black', borderBottomWidth: 0.5 }}>
                    <Text>Display name</Text>
                    <Text style={{ color: '#6f9acf' }}>Heavenly</Text>
                </View>
                <View style={{ padding: 16, borderBottomColor: 'black', borderBottomWidth: 0.5 }}>
                    <Text>Status message</Text>
                    <Text style={{ color: 'grey' }}>Not Set</Text>
                </View>
                <View style={{ padding: 16, borderBottomColor: 'black', borderBottomWidth: 0.5 }}>
                    <Text>Phone Number</Text>
                    <Text style={{ color: '#6f9acf' }}>+62 896-7583-9108</Text>
                </View>
                <View style={{ padding: 16, borderBottomColor: 'black', borderBottomWidth: 0.5, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <Text>Share profile media updates</Text>
                        <Text style={{ color: 'grey', fontSize: 12 }}>Share profile updates on Timeline</Text>
                    </View>
                    <View style={{ justifyContent: 'center' }}>
                        <CheckBox
                            tintColors={{ true: '#00b900' }}
                            disabled={false}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        />
                    </View>
                </View>
                <View style={{ padding: 16, borderBottomColor: 'black', borderBottomWidth: 0.5 }}>
                    <Text>ID</Text>
                    <Text style={{ color: '#6f9acf' }}>heav</Text>
                </View>
                <View style={{ padding: 16, borderBottomColor: 'black', borderBottomWidth: 0.5, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{width: 300}}>
                        <Text>Allow others to add me by ID</Text>
                        <Text style={{ color: 'grey', fontSize: 12 }}>Enable this setting to allow others to add you as a friend by searching for your ID.</Text>
                    </View>
                    <View style={{ justifyContent: 'center' }}>
                        <CheckBox
                            tintColors={{ true: '#00b900' }}
                            disabled={false}
                            value={toggleCheckBox1}
                            onValueChange={(newValue) => setToggleCheckBox1(newValue)}
                        />
                    </View>
                </View>
                <View style={{ padding: 16, borderBottomColor: 'black', borderBottomWidth: 0.5 }}>
                    <Text>QR CODE</Text>
                </View>
                <View style={{ padding: 16, borderBottomColor: 'black', borderBottomWidth: 0.5 }}>
                    <Text>Birthday</Text>
                    <Text style={{ color: 'grey' }}>Not set</Text>
                </View>
                <View style={{ padding: 16, borderBottomColor: 'black', borderBottomWidth: 0.5, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{width: 300}}>
                        <Text>Show follow info</Text>
                        <Text style={{ color: 'grey', fontSize: 12 }}>People you follow and who follow you will be shown in your profile</Text>
                    </View>
                    <View style={{ justifyContent: 'center' }}>
                        <CheckBox
                            tintColors={{ true: '#00b900' }}
                            disabled={false}
                            value={toggleCheckBox2}
                            onValueChange={(newValue) => setToggleCheckBox2(newValue)}
                        />
                    </View>
                </View>
                <TouchableOpacity style={styles.buttonmargin} onPress={() => logout()}>
                    <View style={styles.button}>
                        <Text style={styles.buttontext}>Logout</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
    },
    buttonmargin: {
        marginTop: 20,
        alignItems: 'center',
        paddingBottom: 20,
    },
    button: {
        paddingVertical: 12,
        width: 380,
        backgroundColor: '#6bd35b',
    },
    buttontext: {
        fontSize: 15,
        color: 'white',
        fontFamily: 'Arial',
        textAlign: 'center',
    }
})