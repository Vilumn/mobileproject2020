import React, { } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';
import Header from './header'


const win = Dimensions.get('window');
const logo_size = 12;
const ratio = win.width / 2419;

const mataKuliah = [
    {
        nama: "Intermediate Programming",
        kredit: 4
    },
    {
        nama: "Computer Architecture & Organization",
        kredit: 3
    },
    {
        nama: "Applied Communication",
        kredit: 2
    },
    {
        nama: "Community Development",
        kredit: 2
    },
    {
        nama: "Software Construction & Design",
        kredit: 3
    }
]

export default class CourseListAttendance extends React.Component {
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
                    navigationpage={() => this.props.navigation.navigate('AttendanceReport')}
                />
                <View style={{ padding: 10 }}>
                    <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 24 }}>Software Engineering</Text>
                    <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 18 }}>2350191000</Text>
                    <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 18 }}>Even, 2021</Text>
                </View>

                {
                    mataKuliah.map((course, index) => (
                        <TouchableOpacity key={index} onPress={() => this.props.navigation.navigate('AttendanceDetails')}>
                            <ListItem>
                                <ListItem.Content>
                                    <ListItem.Title style={{ flexDirection: "row" }}>
                                        <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                                            {course.nama}
                                        </Text>
                                    </ListItem.Title>
                                    <ListItem.Subtitle>
                                        Credits : {course.kredit}
                                    </ListItem.Subtitle>
                                </ListItem.Content>
                            </ListItem>

                            {/* Line */}
                            < View
                                style={{
                                    borderBottomColor: '#C7C7C7',
                                    borderBottomWidth: 1,
                                    marginTop: 10
                                }}
                            />
                        </TouchableOpacity>
                    ))
                }

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