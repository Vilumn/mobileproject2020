import React, {  } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const win = Dimensions.get('window');
const logo_size = 12;
const ratio = win.width / 2419;

const Header = (props) => {
    return (
        <View style={styles.header}>
            <View style={{ flexDirection: 'row' }}>
                <Icon name="arrowleft" size={30} color="white" style={{ marginRight: 5 }} onPress={props.navigationpage} />
            </View>
            <Icon name="mail" size={30} color="white" style={{ marginRight: 5 }} />
        </View>
    )
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

export default Header;