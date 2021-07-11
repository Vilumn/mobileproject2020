import React, { } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Picker } from '@react-native-picker/picker';
import Header from './header'
import { Calendar, CalendarList, Agenda, LocaleConfig } from 'react-native-calendars';


const win = Dimensions.get('window');
const logo_size = 12;
const ratio = win.width / 2419;



export default class Calender extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Header
                    navigationpage={() => this.props.navigation.navigate('Home')}
                />
                <View>
                    <Calendar
                        markedDates={{
                            '2021-07-04': { marked: true, dotColor: '#F2C3A7', activeOpacity: 100 },
                            '2021-07-11': { marked: true, dotColor: '#F2C3A7', activeOpacity: 100 },
                            '2021-07-18': { marked: true, dotColor: '#F2C3A7', activeOpacity: 100 },
                            '2021-07-25': { marked: true, dotColor: '#F2C3A7', activeOpacity: 100 },
                            '2021-07-06': { marked: true, dotColor: '#39E379', activeOpacity: 100 },
                            '2021-07-07': { marked: true, dotColor: '#39E379', activeOpacity: 100 },
                            '2021-07-08': { marked: true, dotColor: '#39E379', activeOpacity: 100 },                        }}
                    />
                </View>
                <View>
                    <Text style={{fontFamily: "roboto", fontSize: 15, fontWeight:"600", marginHorizontal: 10}}>
                        Class Session
                    </Text>
                    <View style={{padding: 18, paddingTop: 10}}>
                            <View>
                                <View style={{
                                    borderLeftColor: "#F2C3A7",
                                    borderLeftWidth: 6,
                                    justifyContent: 'center',
                                    paddingLeft: 8,
                                    paddingVertical: 3
                                }}>
                                    <Text style={{ fontSize: 18, fontFamily: 'Roboto-Bold' }}>Intermediate Programming</Text>
                                <View style={styles.descbox}>
                                    <Text style={styles.descboxtext}>10:00 - 12:40</Text>
                                </View>
                                </View>
                            </View>
                        <View style={{borderBottomColor: '#C7C7C7', borderBottomWidth: 1, width: win.width, marginHorizontal: -18, marginTop: 20}}></View>
                    </View>

                    <View style={{padding: 18, paddingTop: 10}}>
                            <View>
                                <View style={{
                                    borderLeftColor: "#39E379",
                                    borderLeftWidth: 6,
                                    justifyContent: 'center',
                                    paddingLeft: 8,
                                    paddingVertical: 3
                                }}>
                                    <Text style={{ fontSize: 18, fontFamily: 'Roboto-Bold' }}>Applied Communication</Text>
                                <View style={styles.descbox}>
                                    <Text style={styles.descboxtext}>08:00 - 09:40</Text>
                                </View>
                                </View>
                            </View>
                        <View style={{borderBottomColor: '#C7C7C7', borderBottomWidth: 1, width: win.width, marginHorizontal: -18, marginTop: 20}}></View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontFamily: 'Roboto-Bold'
    },
    details: {
        fontFamily: 'Roboto-Regular',
        fontStyle: 'italic',
        marginLeft: 16,
        fontSize: 16,
        marginBottom: 8,
    },
    descbox: {
        flexDirection: 'row',
    },
    descboxtext: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
    }
})