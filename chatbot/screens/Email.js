import React, { } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { SearchBar, Avatar, ListItem } from 'react-native-elements';
import { ScrollView } from 'react-native';

const win = Dimensions.get('window');
const logo_size = 12;
const ratio = win.width / 2419;


export default class Email extends React.Component {
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
                <ListItem>
                    <Icon name="mail" size={35} />
                    <ListItem.Content>
                        <ListItem.Title style={{ flexDirection: "row" }}>
                            <Text style={{fontWeight: "bold", fontSize: 18}}>
                                SBE Katbang
                            </Text>
                        </ListItem.Title>
                        <ListItem.Subtitle style={{ fontWeight: "700", fontSize: 15, marginBottom: 10 }}>
                            [KOMPETISI NASIONAL] LOMBA IDE BISNIS
                        </ListItem.Subtitle>
                        <ListItem.Subtitle>
                            Dear Prasmulyan, Berikut kami teruskan
                            informasi Technopreneurship National Com...
                        </ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>

                {/* Line */}
                <View
                    style={{
                        borderBottomColor: '#C7C7C7',
                        borderBottomWidth: 1,
                        marginTop: 10
                    }}
                />
                {/* Line */}

                <ListItem>
                    <Icon name="mail" size={35} />
                    <ListItem.Content>
                        <ListItem.Title style={{ fontWeight: "bold", fontSize: 18 }}>
                            SBE Katbang
                        </ListItem.Title>
                        <ListItem.Subtitle style={{ fontWeight: "700", fontSize: 15, marginBottom: 10 }}>
                            [KOMPETISI NASIONAL] LOMBA IDE BISNIS
                        </ListItem.Subtitle>
                        <ListItem.Subtitle>
                            Dear Prasmulyan, Berikut kami teruskan
                            informasi Technopreneurship National Com...
                        </ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>

                {/* Line */}
                <View
                    style={{
                        borderBottomColor: '#C7C7C7',
                        borderBottomWidth: 1,
                        marginTop: 10
                    }}
                />
                {/* Line */}

                <ListItem>
                    <Icon name="mail" size={35} />
                    <ListItem.Content>
                        <ListItem.Title style={{ fontWeight: "bold", fontSize: 18 }}>
                            SBE Katbang
                        </ListItem.Title>
                        <ListItem.Subtitle style={{ fontWeight: "700", fontSize: 15, marginBottom: 10 }}>
                            [KOMPETISI NASIONAL] LOMBA IDE BISNIS
                        </ListItem.Subtitle>
                        <ListItem.Subtitle>
                            Dear Prasmulyan, Berikut kami teruskan
                            informasi Technopreneurship National Com...
                        </ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>

                {/* Line */}
                <View
                    style={{
                        borderBottomColor: '#C7C7C7',
                        borderBottomWidth: 1,
                        marginTop: 10
                    }}
                />
                {/* Line */}

                <ListItem>
                    <Icon name="mail" size={35} />
                    <ListItem.Content>
                        <ListItem.Title style={{ fontWeight: "bold", fontSize: 18 }}>
                            SBE Katbang
                        </ListItem.Title>
                        <ListItem.Subtitle style={{ fontWeight: "700", fontSize: 15, marginBottom: 10 }}>
                            [KOMPETISI NASIONAL] LOMBA IDE BISNIS
                        </ListItem.Subtitle>
                        <ListItem.Subtitle>
                            Dear Prasmulyan, Berikut kami teruskan
                            informasi Technopreneurship National Com...
                        </ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>

                {/* Line */}
                <View
                    style={{
                        borderBottomColor: '#C7C7C7',
                        borderBottomWidth: 1,
                        marginTop: 10
                    }}
                />
                {/* Line */}

                <ListItem>
                    <Icon name="mail" size={35} />
                    <ListItem.Content>
                        <ListItem.Title style={{ fontWeight: "bold", fontSize: 18 }}>
                            SBE Katbang
                        </ListItem.Title>
                        <ListItem.Subtitle style={{ fontWeight: "700", fontSize: 15, marginBottom: 10 }}>
                            [KOMPETISI NASIONAL] LOMBA IDE BISNIS
                        </ListItem.Subtitle>
                        <ListItem.Subtitle>
                            Dear Prasmulyan, Berikut kami teruskan
                            informasi Technopreneurship National Com...
                        </ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
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