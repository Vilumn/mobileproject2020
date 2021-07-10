import React, { useState, setState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, TextInput, Button, Image, Dimensions, SafeAreaView, ScrollView, FlatList, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const win = Dimensions.get('window');
const ratio = win.width / 2419;
const ratio2 = win.width / 677;
const logo_size = 12;

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            filtered_data: [],
            current_date: "",
            class_recordings: [
                {
                    id: '1',
                    title: 'Intermediate Programming',
                    date: 'Week 5 - 17/05/21',
                    time: '2:57:14'
                },
                {
                    id: '2',
                    title: 'Second Item',
                    title: 'Software Design',
                    date: 'Week 5 - 20/05/21',
                    time: '1:10:14'
                },
            ],
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

    getdate(){
        var day = new Date().getDay()
        var date = new Date().getDate()
        var month = new Date().getMonth()
        var year = new Date().getFullYear()

        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        var dayName = days[day];
        var monthName = mL[month]

        this.setState({current_date: dayName + ", " + monthName + " " + date + " " + year})
    }

    filter(){
        var day = new Date().getDay()
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        

        let data1 = [];
        let data2 = [];

        for(var i =0; i<this.state.data.length; i++){
            if(this.state.data[i].program_name == 'Software Engineering' && this.state.data[i].day == days[day]){
                data1.push(this.state.data[i])
            }
        }
        this.setState({filtered_data: data1})
        console.log(this.state.filtered_data)
    }
    

    render(){
        return (
            <ScrollView nestedScrollEnabled={true} style={{backgroundColor: "white", flex: 1}}>
                <StatusBar
                    backgroundColor='#002C70'
                />
                <View style={styles.header}>
                    <View style={{flexDirection: 'row'}}>
                        <Image
                            source={require('../assets/prasmultouch-logo.png')}
                            style={styles.logo}
                        />
                        <Text style={styles.header_title}>PRASMUL TOUCH</Text>
                    </View>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Email')}>
                        <Icon name="mail" size={30} color="white" style={{marginRight: 5}} />
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>
                    <Text style={{fontSize: 15, color: "grey", fontFamily: "Roboto-Regular"}}>TODAY'S TIMELINE</Text>
                    <Text style={{fontSize: 18, color: "black", fontFamily: "Roboto-Regular", marginBottom: 15}}>{this.state.current_date}</Text>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id}
                        data={this.state.filtered_data}
                        renderItem={({ item }) => (
                            <View style={styles.section1_container}>
                                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 15}}>
                                <Icon name="clockcircle" size={18} color="black" style={{marginRight: 5}}/>
                                <Text style={{ fontSize: 15, fontFamily: 'Roboto-Regular', color: 'grey'}}>{item.start_time.substring(0, 5)} - {item.end_time.substring(0, 5)}</Text>
                                </View>
                                <Text style={{fontFamily: 'Roboto-Regular', fontSize: 16}}>{item.event_name}</Text>
                                <Text style={{fontFamily: 'Roboto-Regular', fontSize: 14, color: "grey"}}>{item.faculty_name}</Text>
                            </View>
                        )}
                    />
                    <View style={{width: win.width, height: 10, backgroundColor: "#F6F6F6", marginLeft: -10, marginBottom: 10}}></View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('AttendanceReport')}>
                        <Image
                            source={require('../assets/card1.png')}
                            style={{width: win.width*4.5/10, height: win.width*4.5/10*3/4}}
                        />
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('DigitalLibrary')}>
                        <Image
                            source={require('../assets/card2.png')}
                            style={{width: win.width*4.5/10, height: win.width*4.5/10*3/4}}
                        />
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                        <Image
                            source={require('../assets/card3.png')}
                            style={{width: win.width*4.5/10, height: win.width*4.5/10*3/4}}
                        />
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Event')}>
                        <Image
                            source={require('../assets/card4.png')}
                            style={{width: win.width*4.5/10, height: win.width*4.5/10*3/4}}
                        />
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15}}>
                        <Text style={{fontFamily: "Roboto-Bold", fontSize: 15}}>Class Recordings</Text>
                        <Text style={{fontFamily: 'Roboto-Regular'}}>View All</Text>
                    </View>

                    <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                        {this.state.class_recordings.map((item, index) => (
                            <View key={index} style={{ borderColor: 'grey', borderWidth: 1, width: win.width * 4.56 / 10, marginBottom: 12, borderBottomLeftRadius: 20, borderBottomRightRadius: 20}}>
                                <View>
                                    <Image
                                        source={require('../assets/class-rec.png')}
                                        style={{ width: win.width * 4.5 / 10, height: win.width * 424 / 1172 * 4.5 / 10 }}
                                    />
                                    <View style={{padding: 8}}>
                                        <Text style={{fontFamily: 'Roboto-Bold' , fontSize: 12}}>{item.title}</Text>
                                        <Text style={{fontFamily: 'Roboto-Regular' , fontSize: 11}}>{item.date}</Text>
                                        <Text style={{fontFamily: 'Roboto-Regular' , fontSize: 11, textAlign: 'right'}}>{item.time}</Text>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </View>
                    
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    header_title:{
        fontSize: 24,
        color: "white",
        fontFamily: "Roboto-Regular",
    },
    header:{
        marginBottom: 18,
        width: win.width,
        backgroundColor: "#002C70",
        flexDirection: "row",
        paddingVertical: 12,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo :{
        width: win.width / logo_size,
        height: 2129 * ratio / logo_size,
        marginRight: 15,
    },
    body:{
        padding: 15,
    },
    section1_container: {
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "grey",
        padding: 18,
        marginRight: 15,
        marginBottom: 28,
    }
})