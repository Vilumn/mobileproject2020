import React, {  } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Picker} from '@react-native-picker/picker';
import Header from './header'
import CourseListAttendance from './CourseListAttendance';


const win = Dimensions.get('window');
const logo_size = 12;
const ratio = win.width / 2419;



export default class Session extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sessions: [
                {
                    id: '1',
                    title: 'Intermediate Programming',
                    grade: 'A',
                    credits: 4,
                    color: '#F2C3A7'
                },
                {
                    id: '2',
                    title: 'Computer Architecture & Organization',
                    grade: 'A-',
                    credits: 4,
                    color: '#F3E6A9'
                },
                {
                    id: '3',
                    title: 'Applied Communication',
                    grade: 'B',
                    credits: 4,
                    color: '#F1A8DF'
                },
                {
                    id: '4',
                    title: 'Community Development',
                    grade: 'B',
                    credits: 4,
                    color: '#B3F1FF'
                },
                {
                    id: '5',
                    title: 'LAB Software Construction & Design',
                    grade: 'B',
                    credits: 4,
                    color: '#39E379'
                },
            ],
        };
    }

    render() {
        return (
            <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
                <Header
                    navigationpage={() => this.props.navigation.navigate('GradeRecord')}
                />
                
                <Text style={{fontFamily: 'Roboto-Bold', fontSize: 29, marginVertical: 25, marginLeft: 10}}>{this.props.route.params.value1} SESSION, {this.props.route.params.value2}</Text>
                
                {this.state.sessions.map((item, index) => (
                <View key={index} style={{padding: 18, paddingTop: 0}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Grade', {title: item.title, grade: item.grade})}>
                            <View>
                                <View style={{
                                    borderLeftColor: item.color,
                                    borderLeftWidth: 6,
                                    justifyContent: 'center',
                                    paddingLeft: 8,
                                    paddingVertical: 3
                                }}>
                                    <Text style={{ fontSize: 24, fontFamily: 'Roboto-Bold' }}>{item.title}</Text>
                                </View>
                                <Text style={styles.details}>Tap for more details</Text>
                                <View style={styles.descbox}>
                                    <Text style={styles.descboxtext}>GRADE: {item.grade}</Text>
                                    <Text style={styles.descboxtext}>   //   </Text>
                                    <Text style={styles.descboxtext}>CREDITS: {item.credits}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={{borderBottomColor: '#C7C7C7', borderBottomWidth: 1, width: win.width, marginHorizontal: -18, marginTop: 20}}></View>
                    </View>
                ))}
                
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