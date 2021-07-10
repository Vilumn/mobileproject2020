import React, {  } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Picker} from '@react-native-picker/picker';

const win = Dimensions.get('window');
const logo_size = 12;
const ratio = win.width / 2419;

export default class AttendanceReport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: '',
        };
    }


    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: 'F6F6F6'}}>
                <View style={styles.header}>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name="arrowleft" size={30} color="white" style={{ marginRight: 5 }} onPress={() => this.props.navigation.navigate('Home')} />
                    </View>
                    <Icon name="mail" size={30} color="white" style={{ marginRight: 5 }} />
                </View>
                <View style={{padding: 20}}>
                    <Text style={{fontFamily: 'Roboto-Bold', fontSize: 24}}>Attendance Report</Text>
                    <Text style={{fontFamily: 'Roboto-Bold', fontSize: 18, marginBottom: 70}}>Even, 2020</Text>
                    <View style={{backgroundColor: 'white', borderRadius: 20, marginHorizontal: 20, shadowColor: 'black', shadowOffset: {width: 0, height: 1}, shadowOpacity: 1, shadowRadius: 2, elevation: 5}}>
                    <Picker
                        selectedValue={this.state.selectedLanguage}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({selectedLanguage: itemValue})
                        }>
                        <Picker.Item label="2020-2021, Even Session" value="2020-2021, Even Session" />
                        <Picker.Item label="2020-2021, Odd Session" value="2020-2021, Odd Session" />
                    </Picker>
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
})