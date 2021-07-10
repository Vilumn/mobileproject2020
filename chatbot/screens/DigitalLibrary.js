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

export default class DigitalLibrary extends React.Component {
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
                    <Icon name="book" size={50} color="5F5C5C" style={{ margin: 15 }} />
                    <View>
                        <Text style={styles.h1}>Prasetiya Mulya Digital Library</Text>
                        <Text style={styles.h2}>Browse and borrow any book from this page</Text>
                    </View>
                </View>

                {/* Line */}
                <View
                    style={{
                        borderBottomColor: '#C7C7C7',
                        borderBottomWidth: 0.5,
                    }}
                />
                <View>
                    <SearchBar
                        placeholder="Type any book title"
                        round="true"
                        lightTheme="true"
                        containerStyle={{ backgroundColor: "white", height: 1, }}
                    />
                </View>
                <View>
                    <Text style={{ fontSize: 20, marginTop: 25, marginLeft: 20, fontWeight: "bold" }}>Popular Book</Text>
                </View>
                <View style={{ marginTop: 10, caro }}>
                    <ScrollView pagingEnabled horizontal style={{ caro }}>
                        {
                            book.map((books, index) => (
                                <Image
                                    key={index}
                                    source={books}
                                    style={{ resizeMode: "contain", marginRight: 30 }}
                                />
                            ))
                        }
                    </ScrollView>
                </View>
                {/* Line */}
                <View
                    style={{
                        borderBottomColor: '#C7C7C7',
                        borderBottomWidth: 1,
                        marginTop: 20
                    }}
                />
                {/* Line */}
                <View>
                    <Text style={{ fontSize: 20, marginTop: 10, marginLeft: 20, fontWeight: "bold" }}>Borrowed books</Text>
                </View>
                <View style={{ marginTop: 10, caro }}>
                    <ScrollView pagingEnabled horizontal style={{ caro }}>
                        {
                            book.map((books, index) => (
                                <Image
                                    key={index}
                                    source={books}
                                    style={{ resizeMode: "contain", marginRight: 30 }}
                                />
                            ))
                        }
                    </ScrollView>
                </View>
                {/* Line */}
                <View
                    style={{
                        borderBottomColor: '#C7C7C7',
                        borderBottomWidth: 1,
                        marginTop: 20
                    }}
                />
                {/* Line */}
                <View>
                    <Text style={{ fontSize: 20, marginTop: 10, marginLeft: 20, fontWeight: "bold" }}>Category</Text>
                </View>
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Image
                            style={caro}
                            source={require('../assets/image1.png')}
                        />
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Computer</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Image
                            style={caro}
                            source={require('../assets/image3.png')}

                        />
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Accounting</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Icon name="rightcircleo" size={30} color="black" />
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>More</Text>
                    </View>
                </View>
                {/* Line */}
                <View
                    style={{
                        borderBottomColor: '#C7C7C7',
                        borderBottomWidth: 1,
                        marginTop: 20
                    }}
                />
                {/* Line */}
                <View>
                    <Text style={{ fontSize: 20, marginTop: 10, marginLeft: 20, fontWeight: "bold" }}>Digital Journals</Text>
                </View>
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            style={{ caro }}
                            source={require('../assets/jurnal1.png')}
                        />
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            style={caro}
                            source={require('../assets/jurnal2.png')}

                        />
                    </View>
                </View>
                {/* Line */}
                <View
                    style={{
                        borderBottomColor: '#C7C7C7',
                        borderBottomWidth: 1,
                    }}
                />
                {/* Line */}
                <View>
                    <Text style={{fontSize: 18}}>
                        <Text style={{fontWeight:'bold'}}>Could not find what you want?</Text>
                        <Text style={{color: 'blue'}}> Click Here</Text>
                    </Text>
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