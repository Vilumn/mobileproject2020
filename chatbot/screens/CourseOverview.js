import React, {} from 'react';
import { Text, View, Image, StyleSheet, Dimensions, ScrollView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Header from './header'

const win = Dimensions.get('window');

export default class CourseOverview extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            All_Courses: [
                {
                    id: '1',
                    title: '2020 - Genap',
                    class: 'Intermediate Programming',
                    image: require('../assets/courses1.png'),
                },
                {
                    id: '2',
                    title: '2020 - Genap',
                    class: 'Lab Intermediate Programming',
                    image: require('../assets/courses2.png'),
                },
                {
                    id: '3',
                    title: '2020 - Genap',
                    class: 'Software Design and Construction',
                    image: require('../assets/courses3.png'),
                },
                {
                    id: '4',
                    title: '2020 - Genap',
                    class: 'Lab Software Design and Construction',
                    image: require('../assets/courses4.png'),
                },
                {
                    id: '5',
                    title: '2020 - Genap',
                    class: 'Intro to Database System',
                    image: require('../assets/courses5.png'),
                },
                {
                    id: '6',
                    title: '2020 - Genap',
                    class: 'Lab Intro to Database System',
                    image: require('../assets/courses6.png'),
                },
                {
                    id: '7',
                    title: '2020 - Genap',
                    class: 'Reading and Writing',
                    image: require('../assets/courses7.png'),
                },
                {
                    id: '8',
                    title: '2020 - Genap',
                    class: 'Applied Communication II',
                    image: require('../assets/courses8.png'),
                },
                {
                    id: '9',
                    title: '2020 - Genap',
                    class: 'Fundamental of UX',
                    image: require('../assets/courses9.png'),
                },
                {
                    id: '10',
                    title: '2020 - Genap',
                    class: 'Computer Architecture and Organization',
                    image: require('../assets/courses10.png'),
                },
            ],
        };
    }

    render() {
        return(
            <View style={{backgroundColor: 'white', flex: 1}}>
                <Header
                    navigationpage = {() => this.props.navigation.navigate('Home')}
                />
                <View style={{flexDirection: 'row', alignItems: 'center', padding: 25}}>
                    <Icon name="file-text" size={50} color="#5F5C5C" style={{marginRight: 20}} />
                    <View>
                        <Text style={styles.CourseText}>Courses Overview</Text>
                        <Text style={styles.CourseText2}>Software Engineering</Text>
                        <Text style={styles.CourseText2}>23501910011</Text>
                    </View>
                </View>
                <View style={{width: win.width, height: 3, backgroundColor: '#C7C7C7'}}></View>
                <View>
                    <Text style={{padding: 12, fontFamily: 'Roboto-Bold', fontSize: 17, marginBottom: 10}}>Recently Accessed Course</Text>
                </View>
                <View style={{alignItems: 'center', marginBottom: 12}}>
                    <View style={{ borderColor: 'grey', borderWidth: 1, width: win.width * 7.05 / 10, marginBottom: 12, borderBottomLeftRadius: 15, borderBottomRightRadius: 15, elevation: 4, backgroundColor: 'white' }}>
                        <View>
                            <Image
                                source={require('../assets/accessed-course.png')}
                                style={{ width: win.width * 7 / 10, height: win.width * 300 / 1231 * 7 / 10 }}
                            />
                            <View style={{ padding: 10 }}>
                                <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 12 }}>Academic</Text>
                                <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 11 }}>Student Information</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{width: win.width, height: 6, backgroundColor: '#C7C7C7'}}></View>
                <View style={{padding: 12, flex: 1, paddingBottom: 0}}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15, alignItems: 'center' }}>
                        <Text style={{ fontFamily: "Roboto-Bold", fontSize: 15 }}>All Courses</Text>
                        <View style={{flexDirection: 'row', marginRight: 20}}>
                            <Text style={{ fontFamily: 'Roboto-Bold' }}>Session </Text>
                            <Text style={{fontFamily: 'Roboto-Regular', borderWidth: 0.5, borderColor: 'black', paddingHorizontal: 6}}>Even, 2020</Text>
                        </View>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                            {this.state.All_Courses.map((item, index) => (
                                <View key={index} style={{ borderColor: 'grey', borderWidth: 1, width: win.width * 4.56 / 10, marginBottom: 12, borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}>
                                    <View>
                                        <Image
                                            source={item.image}
                                            style={{ width: win.width * 4.5 / 10, height: win.width * 424 / 1172 * 4.5 / 10 }}
                                        />
                                        <View style={{ padding: 8, paddingTop: 4}}>
                                            <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 12 }}>{item.title}</Text>
                                            <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 11}}>{item.class}</Text>
                                        </View>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </ScrollView>
                    
                    {/* <FlatList
                        numColumns={2}
                        keyExtractor={(item) => item.id}
                        data={this.state.All_Courses}
                        renderItem={({ item }) => (
                            <View style={{ borderColor: 'grey', borderWidth: 1, width: win.width * 4.56 / 10, marginBottom: 12, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
                                <View>
                                    <Image
                                        source={item.image}
                                        style={{ width: win.width * 4.5 / 10, height: win.width * 424 / 1172 * 4.5 / 10 }}
                                    />
                                    <View style={{ padding: 8 }}>
                                        <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 12 }}>{item.title}</Text>
                                        <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 11 }}>{item.date}</Text>
                                        <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 11, textAlign: 'right' }}>{item.time}</Text>
                                    </View>
                                </View>
                            </View>
                        )}
                    /> */}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    CourseText: {
        fontFamily: 'Roboto-Bold',
        fontSize: 22,
        color: 'black',
        marginVertical: -2
    },
    CourseText2: {
        fontFamily: 'Roboto-Bold',
        fontSize: 15,
        color: 'black',
        marginVertical: -2
    }
})