import React, { } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { SearchBar } from 'react-native-elements';
import { ScrollView } from 'react-native';
import Header from './header'

const win = Dimensions.get('window');
const caro = win / 5;
const logo_size = 12;
const ratio = win.width / 2419;

const semuaAcara = [
    {
        id: '1',
        tipe: "Batch 2020",
        nama: "Caroons Party"
    },
    {
        id: '2',
        tipe: "Committee",
        nama: "Innofair 2021"
    },
    {
        id: '3',
        tipe: "Committee",
        nama: "PGU 2021"
    }

]

export default class Event extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            All_Courses: [
                {
                    id: '1',
                    orga: 'Student Board',
                    acaranya: 'Student Board Member',
                    image: require('../assets/sb.png'),
                },
                {
                    id: '2',
                    orga: 'SISO',
                    acaranya: 'Ketua dan Wakil Ketua SISO',
                    image: require('../assets/siso.png'),
                },
                {
                    id: '3',
                    orga: 'Student Board',
                    acaranya: 'Lodestar 2021',
                    image: require('../assets/sb.png'),
                },
                {
                    id: '4',
                    orga: 'Student Board',
                    acaranya: 'Social Week 2021',
                    image: require('../assets/sb.png'),
                },
                {
                    id: '5',
                    orga: 'Eureca',
                    acaranya: 'Eureca',
                    image: require('../assets/eureca.png'),
                },
                {
                    id: '6',
                    orga: 'Carya',
                    acaranya: 'Carya',
                    image: require('../assets/carya.png'),
                },
            ],
        };
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Header
                    navigationpage={() => this.props.navigation.navigate('Home')}
                />

                <View style={{ flexDirection: 'row' }}>
                    <Icon name="team" size={50} color="5F5C5C" style={{ margin: 15 }} />
                    <View>
                        <Text style={styles.h1}>Events and Organizations</Text>
                        <Text style={styles.h2}>See what events and organizations is comming</Text>
                    </View>
                </View>

                {/* Line */}
                <View
                    style={{
                        borderBottomColor: '#C7C7C7',
                        borderBottomWidth: 3,
                    }}
                />
                <View>
                    <Text style={{ padding: 12, fontFamily: 'Roboto-Bold', fontSize: 17, marginBottom: 10 }}>Recently Accessed Course</Text>
                </View>

                <View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={{ flexDirection: 'row', marginBottom: 20, marginLeft: 15}}>
                            {
                                semuaAcara.map((acara, index) => (
                                    <View key={index} style={{ marginRight: 15, borderColor: 'grey', borderWidth: 1, width: win.width * 7.05 / 10, borderBottomLeftRadius: 15, borderBottomRightRadius: 15, elevation: 4, backgroundColor: 'white' }}>
                                        <View>
                                            <Image
                                                source={require('../assets/accessed-course.png')}
                                                style={{ width: win.width * 7 / 10, height: win.width * 300 / 1231 * 7 / 10 }}
                                            />
                                            <View style={{ padding: 10 }}>
                                                <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 12 }}>{acara.tipe}</Text>
                                                <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 11 }}>{acara.nama}</Text>
                                            </View>
                                        </View>
                                    </View>
                                ))
                            }
                        </View>
                    </ScrollView>
                </View>

                {/* Ini Buat Garis */}
                <View style={{ width: win.width, height: 6, backgroundColor: '#C7C7C7'}} />

                {/* Grid Organisasi */}
                <View style={{ padding: 12, flex: 1, paddingBottom: 0 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15, alignItems: 'center' }}>
                        <Text style={{ fontFamily: "Roboto-Bold", fontSize: 15 }}>Open Recruitment</Text>
                        <View style={{ flexDirection: 'row', marginRight: 20 }}>
                            <Text style={{ fontFamily: 'Roboto-Bold' }}>Session </Text>
                            <Text style={{ fontFamily: 'Roboto-Regular', borderWidth: 0.5, borderColor: 'black', paddingHorizontal: 6 }}>Even, 2020</Text>
                        </View>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                            {this.state.All_Courses.map((item, index) => (
                                <View key={index} style={{ borderColor: 'grey', borderWidth: 1, width: win.width * 4.56 / 10, marginBottom: 12, borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}>
                                    <View>
                                        <Image
                                            source={item.image}
                                            style={{ height: 70, width: 70, alignSelf: "center", marginTop: 5}}
                                        />
                                        <View style={{ padding: 8, paddingTop: 4 }}>
                                            <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 12 }}>{item.orga}</Text>
                                            <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 11 }}>{item.acaranya}</Text>
                                        </View>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    h1: {
        fontSize: 20,
        color: "#5F5C5C",
        fontFamily: "Roboto-Regular",
        fontWeight: 'bold',
        marginTop: 15
    },
    h2: {
        color: "#5f5c5c",
        fontFamily: "Roboto-Reguler",
        fontWeight: "bold"
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