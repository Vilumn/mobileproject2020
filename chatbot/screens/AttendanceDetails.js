import React, { } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native';
import Header from './header'
import Pie from 'react-native-pie'


const win = Dimensions.get('window');
const screenWidth = Dimensions.get('window');
const logo_size = 12;
const ratio = win.width / 2419;


export default class AttendanceDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: '',
        };
    }


    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <Header
                    navigationpage={() => this.props.navigation.navigate('CourseListAttendance')}
                />
                <View style={{ padding: 20 }}>
                    <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 24 }}>Even Session, 2021</Text>
                    <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 18 }}>{this.props.route.params.matkul}</Text>
                    <Text style={{ fontFamily: 'Roboto', fontSize: 15, marginBottom: 70 }}>Credits: {this.props.route.params.sks}</Text>
                </View>
                <View style={{ alignSelf: "center", marginTop: -60, marginBottom: 20 }}>
                    <Pie
                        radius={120}
                        sections={[
                            {
                                percentage: 10,
                                color: '#CA2020',
                            },
                            {
                                percentage: 60,
                                color: '#002C70',
                            },
                            {
                                percentage: 30,
                                color: '#853493',
                            },
                        ]}
                        strokeCap={'butt'}
                    />
                </View>

                {/* Line */}
                <View
                    style={{
                        borderBottomColor: '#C7C7C7',
                        borderBottomWidth: 0.8,
                        marginTop: 10
                    }}
                />
                {/* Line */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15, alignItems: 'center', marginLeft: 20 }}>
                    <Text style={{ fontFamily: "Roboto-Bold", fontSize: 20 }}>Attendance Rate</Text>
                    <View style={{ flexDirection: 'row', marginRight: 20 }}>
                        <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 20 }}>90%</Text>
                    </View>
                </View>

                {/* Line */}
                <View
                    style={{
                        borderBottomColor: '#C7C7C7',
                        borderBottomWidth: 0.8,
                        marginTop: 10
                    }}
                />
                {/* Line */}

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15, alignItems: 'center', marginLeft: 20 }}>
                    <Text style={{ fontFamily: "Roboto", fontSize: 20, marginLeft:20 }}>Session attended</Text>
                    <View style={{ flexDirection: 'row', marginRight: 20, alignItems: "center" }}>
                        <View style={{ width: 12, height: 12, borderRadius: 12 / 2, backgroundColor: "#002C70ed", marginRight: 10 }}></View>
                        <Text style={{ fontFamily: 'Roboto', fontSize: 20 }}>9</Text>
                    </View>
                </View>

                {/* Line */}
                <View
                    style={{
                        borderBottomColor: '#C7C7C7',
                        borderBottomWidth: 0.8,
                        marginTop: 10
                    }}
                />
                {/* Line */}

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15, alignItems: 'center', marginLeft: 20 }}>
                    <Text style={{ fontFamily: "Roboto", fontSize: 20, marginLeft:20 }}>Late</Text>
                    <View style={{ flexDirection: 'row', marginRight: 20, alignItems: "center" }}>
                        <View style={{ width: 12, height: 12, borderRadius: 12 / 2, backgroundColor: "#853493", marginRight: 10 }}></View>
                        <Text style={{ fontFamily: 'Roboto', fontSize: 20 }}>3</Text>
                    </View>
                </View>

                {/* Line */}
                <View
                    style={{
                        borderBottomColor: '#C7C7C7',
                        borderBottomWidth: 0.8,
                        marginTop: 10
                    }}
                />
                {/* Line */}

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15, alignItems: 'center', marginLeft: 20 }}>
                    <Text style={{ fontFamily: "Roboto", fontSize: 20, marginLeft:20 }}>Absence</Text>
                    <View style={{ flexDirection: 'row', marginRight: 20, alignItems: "center" }}>
                        <View style={{ width: 12, height: 12, borderRadius: 12 / 2, backgroundColor: "#CA2020", marginRight: 10 }}></View>
                        <Text style={{ fontFamily: 'Roboto', fontSize: 20 }}>2</Text>
                    </View>
                </View>

                {/* Line */}
                <View
                    style={{
                        borderBottomColor: '#C7C7C7',
                        borderBottomWidth: 0.8,
                        marginTop: 10
                    }}
                />
                {/* Line */}
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    header_title: {
        fontSize: 24,
        color: "white",
        fontFamily: "Roboto-Regular",
    },
    header: {
        width: win.width,
        backgroundColor: "#002C70",
        flexDirection: "row",
        paddingVertical: 12,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo: {
        width: win.width / logo_size,
        height: 2129 * ratio / logo_size,
        marginRight: 15,
    },
})