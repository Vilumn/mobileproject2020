import React, { } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, SafeAreaView, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Picker } from '@react-native-picker/picker';
import Header from './header'
import { Calendar, CalendarList, Agenda, LocaleConfig } from 'react-native-calendars';
import firebase from '@react-native-firebase/app';

const win = Dimensions.get('window');
const logo_size = 12;
const ratio = win.width / 2419;



export default class Calender extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filtered_data: []
        };
    }

    componentDidMount() {
        this.getdate();

        fetch('https://kuliahstem.prasetiyamulya.ac.id/web-api/newkuliah/')

            .then((response) => response.json())
            .then((json) => {
                this.setState({ data: json });
                this.filter();
            })
            .catch((error) => console.error(error))

    }

    getdate() {
        var day = new Date().getDay()
        var date = new Date().getDate()
        var month = new Date().getMonth()
        var year = new Date().getFullYear()

        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        var dayName = days[day];
        var monthName = mL[month]

        this.setState({ current_date: dayName + ", " + monthName + " " + date + " " + year })
    }


    filter(){
        var day = new Date().getDay()
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        let data1 = [];
        let data2 = [];
        
        const nim_data = {
            '231': 'Business Mathematics',
            '232': 'Food Business Technology',
            '233': 'Renewable Energy Engineering',
            '234': 'Computer Systems Engineering',
            '235': 'Software Engineering',
            '236': 'Product Design Engineering'
        }

        const user= firebase.auth().currentUser

        const nim = user.email.split('@')[0]
        const cekprodi = nim.substring(0, 3)

        this.setState({ prodi: nim_data[cekprodi] })

        for (var i = 0; i < this.state.data.length; i++) {
            if (this.state.data[i].program_name == nim_data[cekprodi] && this.state.data[i].day == days[day]) {
                data1.push(this.state.data[i])
            }
        }
        this.setState({ filtered_data: data1 })
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
                    <Text style={{fontFamily: "roboto", fontSize: 15, fontWeight:"600", marginHorizontal: 10, marginBottom: 8}}>
                        Class Session
                    </Text>
                    
                    <FlatList
                        keyExtractor={(item) => item.id}
                        data={this.state.filtered_data}
                        renderItem={({ item }) => (
                            <View style={{ padding: 18, paddingTop: 10 }}>
                                <View>
                                    <View style={{
                                        borderLeftColor: "#1451AD",
                                        borderLeftWidth: 6,
                                        justifyContent: 'center',
                                        paddingLeft: 8,
                                        paddingVertical: 3
                                    }}>
                                        <Text style={{ fontSize: 18, fontFamily: 'Roboto-Bold' }}>{item.event_name}</Text>
                                        <View style={styles.descbox}>
                                            <Text style={styles.descboxtext}>{item.start_time.substring(0, 5)} - {item.end_time.substring(0, 5)}</Text>
                                        </View>
                                    </View>
                                </View>
                                {/* <View style={{ borderBottomColor: '#C7C7C7', borderBottomWidth: 1, width: win.width, marginHorizontal: -18, marginTop: 20 }}></View> */}
                            </View>
                        )}
                    />

                    {/* <View style={{padding: 18, paddingTop: 10}}>
                            <View>
                                <View style={{
                                    borderLeftColor: "#1451AD",
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
                    </View> */}
                    
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