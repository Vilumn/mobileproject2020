import React, { } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { SearchBar } from 'react-native-elements';
import { ScrollView } from 'react-native';

const win = Dimensions.get('window');
const caro = win / 5;
const logo_size = 12;
const ratio = win.width / 2419;

const book = [
    require('../assets/image1.png'),
    require('../assets/image2.png'),
    require('../assets/image3.png'),
    require('../assets/image4.png'),
    require('../assets/image5.png'),
    require('../assets/image6.png'),
    require('../assets/image7.png'),
    require('../assets/image8.png')
]

export default class Event extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: '',
        };
    }

    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={styles.header}>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name="arrowleft" size={30} color="white" style={{ marginRight: 5 }} onPress={() => this.props.navigation.navigate('Home')} />
                    </View>
                    <Icon name="mail" size={30} color="white" style={{ marginRight: 5 }} />
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Icon name="team" size={50} color="5F5C5C" style={{ margin: 15 }} />
                    <View>
                        <Text style={styles.h1}>Events and Organizations</Text>
                        <Text style={styles.h2}>See what events and organizations is comming</Text>
                    </View>
                </View>
            </ScrollView>
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