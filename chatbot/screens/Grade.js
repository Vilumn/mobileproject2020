import React, {  } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Picker} from '@react-native-picker/picker';
import Header from './header'
import CourseListAttendance from './CourseListAttendance';


const win = Dimensions.get('window');
const logo_size = 12;
const ratio = win.width / 2419;



export default class Grade extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Exams: [
                {
                    id: '1',
                    title: 'List & Tuples',
                    date: 'Today',
                    score: '95',
                    color: '#0AC851',
                },
                {
                    id: '2',
                    title: 'Sets',
                    date: '28/04/21',
                    score: '84',
                    color: '#0AC851',
                },
                {
                    id: '3',
                    title: 'Dictionaries',
                    date: '17/04/21',
                    score: '30',
                    color: '#FF9600',
                },
                {
                    id: '4',
                    title: 'Mid Exams',
                    date: '1/04/21',
                    score: '100',
                    color: '#0AC851',
                },
                {
                    id: '5',
                    title: 'Functions',
                    date: '16/03/21',
                    score: '78',
                    color: '#0AC851',
                },
                {
                    id: '6',
                    title: 'Loops',
                    date: '2/03/21',
                    score: '48',
                    color: '#FF9600',
                },
            ],

            Tasks: [
                {
                    id: '1',
                    title: 'Task1',
                    date: 'Today',
                    score: '20',
                    color: '#FF9600',
                },
                {
                    id: '2',
                    title: 'Task2',
                    date: '28/04/21',
                    score: '25',
                    color: '#FF9600',
                },
                {
                    id: '3',
                    title: 'Task3',
                    date: '17/04/21',
                    score: '30',
                    color: '#FF9600',
                },
                {
                    id: '4',
                    title: 'Task4',
                    date: '1/04/21',
                    score: '100',
                    color: '#0AC851',
                },
                {
                    id: '5',
                    title: 'Functions',
                    date: '16/03/21',
                    score: '78',
                    color: '#0AC851',
                },
                {
                    id: '6',
                    title: 'Loops',
                    date: '2/03/21',
                    score: '48',
                    color: '#FF9600',
                },
            ],

            color1: '#002C70',
            color2: 'lightgray',
            showList: true,
        };
    }

    render() {
        return (
            <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
                <Header
                    navigationpage={() => this.props.navigation.navigate('Session')}
                />
                <View style={{alignItems: 'center', marginBottom: 15}}>
                    <Text style={{fontFamily: 'Roboto-Bold', fontSize: 20, marginTop: 20}}>{this.props.route.params.title}</Text>
                    <View style={{backgroundColor: '#0AC851', borderRadius: 25, marginTop: 15, marginBottom: 10}}>
                        <Text style={{paddingVertical: 5, paddingHorizontal: 60, fontFamily: "Roboto-Bold", fontSize: 40}}>{this.props.route.params.grade}</Text>
                    </View>
                    <Text style={{fontSize: 20, fontFamily: 'Roboto-Bold', marginBottom: 2}}>Current Grade</Text>
                    <Text style={{fontSize: 16, fontFamily: 'Roboto-Light', color: 'black'}}>Based on submitted work</Text>
                </View>

                <View style={{width: win.width, borderBottomColor: 'lightgrey', borderBottomWidth: 1}}></View>

                <View style={{alignItems: 'flex-start', flexDirection: 'row', padding: 16, paddingBottom: 6}}>
                    <TouchableOpacity onPress={() => this.setState({showList: true, color1: '#002C70', color2: 'lightgray'})}>
                    <Text style={{borderBottomWidth: 2, borderBottomColor: this.state.color1, marginRight: 10, paddingBottom: 3, paddingHorizontal: 2, color: this.state.color1, fontFamily: 'Roboto-Bold', fontSize: 16}}>Exams</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => this.setState({showList: false, color1: 'lightgray', color2: '#002C70'})}>
                    <Text style={{borderBottomWidth: 2, borderBottomColor: this.state.color2, marginRight: 10, paddingBottom: 3, paddingHorizontal: 2, color: this.state.color2, fontFamily: 'Roboto-Bold', fontSize: 16}}>Tasks</Text>
                    </TouchableOpacity>
                </View>
                
                
                {this.state.showList && (
                    <View>
                    {this.state.Exams.map((item, index) => (
                        <View key={index}>
                            <View style={{ flexDirection: 'row', padding: 16, alignItems: 'center', justifyContent: 'space-between', paddingRight: 24, marginBottom: 8, paddingTop: 26}}>
                                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                    <Image
                                        source={require('../assets/clipboard.png')}
                                        style={{ width: 50, height: 50, marginRight: 10 }}
                                    />
                                    <View>
                                        <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 16 }}>{item.title}</Text>
                                        <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 16, color: 'grey'}}>{item.date}</Text>
                                    </View>
                                </View>
                                <View style={{ backgroundColor: item.color, borderRadius: 20, paddingVertical: 10, paddingHorizontal: 15 }}>
                                    <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 15 }}>{item.score}/100</Text>
                                </View>
                            </View>
    
                            <View style={{ borderBottomWidth: 1, borderBottomColor: 'grey' }}></View>
                        </View>
                    ))}
                    </View>
                )}

                {!this.state.showList && (
                    <View>
                    {this.state.Tasks.map((item, index) => (
                        <View key={index}>
                            <View style={{ flexDirection: 'row', padding: 16, alignItems: 'center', justifyContent: 'space-between', paddingRight: 24, marginBottom: 8, paddingTop: 26}}>
                                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                    <Image
                                        source={require('../assets/clipboard.png')}
                                        style={{ width: 50, height: 50, marginRight: 10 }}
                                    />
                                    <View>
                                        <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 16 }}>{item.title}</Text>
                                        <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 16, color: 'grey'}}>{item.date}</Text>
                                    </View>
                                </View>
                                <View style={{ backgroundColor: item.color, borderRadius: 20, paddingVertical: 10, paddingHorizontal: 15 }}>
                                    <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 15 }}>{item.score}/100</Text>
                                </View>
                            </View>
    
                            <View style={{ borderBottomWidth: 1, borderBottomColor: 'grey' }}></View>
                        </View>
                    ))}
                    </View>
                )}
                
                
                


                {/* <View>
                    <View style={{ flexDirection: 'row', padding: 16, alignItems: 'center', justifyContent: 'space-between', paddingRight: 24, marginBottom: 8}}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={require('../assets/clipboard.png')}
                                style={{ width: 50, height: 50, marginRight: 10 }}
                            />
                            <View>
                                <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 16 }}>List & Tuples</Text>
                                <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 16 }}>Today</Text>
                            </View>
                        </View>
                        <View style={{ backgroundColor: '#0AC851', borderRadius: 20, paddingVertical: 10, paddingHorizontal: 15 }}>
                            <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 15 }}>95/100</Text>
                        </View>
                    </View>

                    <View style={{ borderBottomWidth: 1, borderBottomColor: 'grey' }}></View>
                </View> */}
                
                
                {/* <Text>{this.props.route.params.title}</Text> */}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        fontFamily: 'Roboto-Bold'
    },
    details:{
        fontFamily: 'Roboto-Regular',
        fontStyle: 'italic',
        marginLeft: 16,
        fontSize: 16,
        marginBottom: 8,
    },
    descbox:{
        flexDirection: 'row',
        marginLeft: 16
    },
    descboxtext:{
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
    }
})