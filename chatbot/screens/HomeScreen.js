import React, { useState, setState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, TextInput, Button, Image, Dimensions, SafeAreaView, ScrollView, FlatList } from 'react-native';

const win = Dimensions.get('window');
const ratio = win.width / 2419;
const ratio2 = win.width / 677;
const logo_size = 12;

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        fetch('https://kuliahstem.prasetiyamulya.ac.id/web-api/newkuliah/')

            .then((response) => response.json())
            .then((json) => {
                this.setState({ data: json });
            })
            .catch((error) => console.error(error))
    }

    filter(){
        let data1 = [];
        let data2 = [];

        for(var i =0; i<this.state.data.length; i++){
            data1.push(this.state.data[i].day)
            data2.push(this.state.data[i].faculty_name)
        }

        let final_data = {};
        data1.forEach((key, i) => final_data[key] = data2[i]);

        console.log(final_data)
    }
    
    

    render(){
        this.filter();
        return (
            <SafeAreaView>
                <View style={styles.header}>
                    <Image
                        source={require('../assets/prasmultouch-logo.png')}
                        style={styles.logo}
                    />
                    <Text style={styles.header_title}>PRASMUL TOUCH</Text>
                </View>
                <View style={styles.body}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id}
                        data={this.state.data}
                        renderItem={({ item }) => (
                            <View style={styles.section1_container}>
                                <Text>{item.faculty_name}</Text>
                            </View>
                        )}
                    />
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
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    logo :{
        width: win.width / logo_size,
        height: 2129 * ratio / logo_size,
        marginRight: 15,
    },
    body:{
        padding: 10,
    },
    section1_container: {
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 2,
    }
})