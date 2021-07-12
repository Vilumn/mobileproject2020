import React, {  } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, SafeAreaView, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Picker} from '@react-native-picker/picker';
import Header from './header'
import CourseListAttendance from './CourseListAttendance';
import firebase from '@react-native-firebase/app';


const win = Dimensions.get('window');
const logo_size = 12;
const ratio = win.width / 2419;

export default class AttendanceReport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phone_data: '',
            name_data: '',
            user: firebase.auth().currentUser,
            nim: '',
            nama_prodi: '',
            selectedLanguage: '',
        };
    }

    componentDidMount(){
        this.menyoba()
    }
    
    updateuser = () => {
        var name = this.state.name_data
        var phone = this.state.phone_data


        const user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name,
        }).then(() => {
            this.props.navigation.navigate('Home')
            // Update successful
            // ...
        }).catch((error) => {
            // An error occurred
            // ...
        });
    }

    menyoba = () => {
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

        this.setState({nama_prodi: nama_prodi})
        this.setState({nim: nim})

        console.log(this.state.user)
    }


    render() {
        return (
            <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
                <View style={styles.container}>
                    <View style={{ backgroundColor: 'white', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontFamily: 'Roboto-Bold', color: '#002C70', fontSize: 22, marginVertical: 22 }}>Profile</Text>
                        <Image style={{ width: 120, height: 120, borderRadius: 200, marginBottom: 20}} source={{ uri: "https://images.unsplash.com/photo-1542027959157-98e6745f4ba7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" }} />
                        <Text style={{fontFamily: 'Roboto-Bold', fontSize: 20, marginBottom: 10}}>Name:</Text>
                        <View style={{borderWidth: 0.5, borderColor: 'black', width: '40%', marginBottom: 10, justifyContent: 'center', alignItems: 'center'}}>
                            
                        <TextInput
                            style={{margin: -10}}
                            onChangeText={name_data => this.setState({ name_data })}
                            placeholder= '...'
                        />
                        </View>
                        
                        <Text style={{ fontFamily: 'Roboto-Regular', color: 'black', fontSize: 20, marginBottom: 25 }}>{this.state.nama_prodi}</Text>
                    </View>

                    <View style={{flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between', padding: 20, paddingBottom: 0}}>
                        <View style={styles.profilebox}>
                            <View style={{marginRight: 10}}>
                                <Icon name='idcard' size={20} color='#BBBBBB'/>
                            </View>
                            <View>
                                <Text style={styles.font1}>NIM</Text>
                                <Text style={styles.font2}>{this.state.nim}</Text>
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
                                <Text style={styles.font2}>{this.state.user.email}</Text>
                            </View>
                        </View>
                        
                        <View style={styles.profilebox}>
                            <View style={{marginRight: 10}}>
                                <Icon name='idcard' size={20} color='#BBBBBB'/>
                            </View>
                            <View>
                                <Text style={styles.font1}>Phone</Text>
                                <Text>{this.state.user.phoneNumber}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{alignItems: 'center'}}>
                        <TouchableOpacity style={{ marginBottom: 20 }} onPress={this.updateuser}>
                            <View style={{ borderRadius: 100, borderColor: '#002C70', borderWidth: 2, paddingHorizontal: 30, paddingVertical: 5 }}>
                                <Text style={{ fontFamily: 'Roboto-Bold', color: '#002C70', fontSize: 20 }}>Change Profile</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            
        </ScrollView>
        )
    }
}

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
    },
})