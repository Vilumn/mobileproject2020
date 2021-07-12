import React, {  } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const win = Dimensions.get('window');
const logo_size = 12;
const ratio = win.width / 2419;



const Header = (props) => {
    const navigation = useNavigation(); 
    return (
        <View style={styles.header}>
            <View style={{ flexDirection: 'row' }}>
                <Icon name="arrowleft" size={30} color="white" style={{ marginRight: 5 }} onPress={props.navigationpage} />
            </View>
            <View>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image style={{ width: 30, height: 30, borderRadius: 200 }} source={{ uri: "https://images.unsplash.com/photo-1542027959157-98e6745f4ba7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" }} />
            </TouchableOpacity>
            
            </View>
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