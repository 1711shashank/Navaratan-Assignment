import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Entypo, Feather, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';


const MenuButtons = ({ activeTab, navigation }) => {

    return (

        <View style={styles.menuButtons}>
            <View style={styles.menuButtonsWrapper}>

                <TouchableOpacity style={[styles.iconWrapper, { left: '0%' }]} onPress={() => navigation.navigate('ProfileScreen')}>
                    <View style={activeTab === 'ProfileScreen' && styles.iconView} >
                        {
                            activeTab === 'ProfileScreen'
                                ? <FontAwesome name="user-o" size={24} color='#E0B420' style={{ paddingLeft: 2 }} />
                                : <FontAwesome name="user-o" size={24} color='#3E4554' />
                        }
                    </View>
                    <Text style={[styles.iconText, activeTab === 'ProfileScreen' && { display: 'none' }]}> Profile </Text>
                </TouchableOpacity >


                <TouchableOpacity style={[styles.iconWrapper, { left: '33%' }]} onPress={() => navigation.navigate('Home')}>
                    <View style={activeTab === 'Home' && styles.iconView} >
                        {
                            activeTab === 'Home'
                                ? <Entypo name="home" size={24} color='#E0B420' />
                                : <Feather name="home" size={24} color='#3E4554' />
                        }
                    </View>
                    <Text style={[styles.iconText, activeTab === 'Home' && { display: 'none' }]}> Home</Text>
                </TouchableOpacity >



                <TouchableOpacity style={[styles.iconWrapper, { left: '68%' }]} onPress={() => navigation.navigate('Cart')}>
                    <View style={activeTab === 'Cart' && styles.iconView} >
                        {
                            activeTab === 'Cart'
                                ? <MaterialCommunityIcons name="shopping-outline" size={24} color="#E0B420" />
                                : <MaterialCommunityIcons name="shopping-outline" size={24} color="#3E4554" />

                        }
                    </View>
                    <Text style={[styles.iconText, activeTab === 'Cart' && { display: 'none' }]}> Cart</Text>
                </TouchableOpacity >

            </View>
        </View>
    )
}

export default MenuButtons



const styles = StyleSheet.create({

    menuButtons: {
        position: 'absolute', bottom: -20, flexDirection: 'row', backgroundColor: '#FFF', width: '100%',
        alignItems: 'center', justifyContent: 'space-evenly', borderRadius: 35, height: 100, paddingBottom: 20
    },
    menuButtonsWrapper: {
        width: '90%', height: '100%', alignItems: 'center', justifyContent: 'center'
    },
    iconWrapper: {
        position: 'absolute', alignItems: 'center', width: '25%'
    },
    iconView: {
        backgroundColor: '#1E222B', padding: 15, borderRadius: 50
    },
    iconText: {
        color: '#8891A5', fontSize: 12, marginTop: 5
    }

})