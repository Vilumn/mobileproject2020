import React, {  } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Picker} from '@react-native-picker/picker';
import Header from './header'
import CourseListAttendance from './CourseListAttendance';
import Icon2 from 'react-native-vector-icons/Foundation'


const win = Dimensions.get('window');
const logo_size = 12;
const ratio = win.width / 2419;

export default class GradeRecords extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: '',
            selectedLanguage2: '',
        };
    }


    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <Header
                    navigationpage={() => this.props.navigation.navigate('Home')}
                />
                <View style={{ padding: 0 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 20, paddingHorizontal: 30}}>
                        <Icon2 name="clipboard-notes" size={60} color="black" style={{ marginRight: 20 }} />
                        <Text style={styles.CourseText}>Grade Record</Text>
                    </View>

                    <View style={{ borderBottomColor: '#C7C7C7', width: win.width, borderBottomWidth: 2, marginBottom: 30 }}></View>

                    <View style={{padding: 20}}>
                        <View style={{ backgroundColor: 'white', borderRadius: 20, marginHorizontal: 20, shadowColor: 'black', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 1, shadowRadius: 2, elevation: 5, marginBottom: 20 }}>
                            <Picker
                                selectedValue={this.state.selectedLanguage}
                                onValueChange={(itemValue, itemIndex) =>
                                    this.setState({ selectedLanguage: itemValue })
                                }>
                                <Picker.Item value='' label='SESSION' style={{color: 'grey'}}/>
                                <Picker.Item label="Even" value="2020-2021, Even Session" style={{color: 'black'}}/>
                                <Picker.Item label="Odd" value="2020-2021, Odd Session" />
                            </Picker>
                        </View>
                        <View style={{ backgroundColor: 'white', borderRadius: 20, marginHorizontal: 20, shadowColor: 'black', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 1, shadowRadius: 2, elevation: 5, marginBottom: 20 }}>
                            <Picker
                                selectedValue={this.state.selectedLanguage2}
                                onValueChange={(itemValue, itemIndex) =>
                                    this.setState({ selectedLanguage2: itemValue })
                                }>
                                <Picker.Item value='' label='ACADEMIC YEAR' style={{color: 'grey'}}/>
                                <Picker.Item label="2020" value="2020-2021, Even Session" style={{color: 'black'}}/>
                                <Picker.Item label="2021" value="2020-2021, Odd Session" />
                            </Picker>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity
                                style={{
                                    alignItems: "center",
                                    backgroundColor: "#002C70",
                                    padding: 6,
                                    borderRadius: 20,
                                    width: 110,
                                }}
                                onPress={() => this.props.navigation.navigate('Session')}
                            >
                                <Text style={{ color: 'white', fontFamily: 'Roboto-Bold', fontSize: 16 }}>Search</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                </View>
            </SafeAreaView>
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
    CourseText: {
        fontFamily: 'Roboto-Bold',
        fontSize: 22,
        color: 'black',
        marginVertical: -2
    },
    CourseText2: {
        fontFamily: 'Roboto-Bold',
        fontSize: 15,
        color: 'black',
        marginVertical: -2
    }
})