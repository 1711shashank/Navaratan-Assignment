import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MenuButtons from '../components/MenuButtons';
import { FontAwesome } from '@expo/vector-icons';

const ProfileScreen = ({ navigation }) => {

    const [role, setRole] = useState('')

    const getRole = async () => {
        setRole(await AsyncStorage.getItem('role'));
    }

    useEffect(() => {
        getRole();
    }, [role])

    const userName = role === 'admin' ? 'Admin' : 'Kumar Shashank';

    const handleLogOut = async () => {
        
        await AsyncStorage.removeItem('role');
        navigation.navigate('LoginScreen');
        
    };


    return (
        <View style={{ flex: 1 }}>

            <View style={styles.container}>
                <View style={{ alignItems: 'center', paddingTop: 20 }}>
                    <FontAwesome name="user-circle" size={130} color="#949494" />
                    <Text style={styles.text}>{userName}</Text>
                </View>

                {
                    role === 'admin' &&
                    <>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddNewProductScreen')}>
                            <Text style={{ color: 'grey' }}>Add New Product</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ProductListScreen')}>
                            <Text style={{ color: 'grey' }}>Edit Product Details</Text>
                        </TouchableOpacity>
                    </>
                }

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('OrderHistoryScreen')}>
                    <Text style={{ color: 'grey' }}>Order History</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cart')}>
                    <Text style={{ color: 'grey' }}>Cart</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={handleLogOut}>
                    <Text style={{ color: 'grey' }}>Logout</Text>
                </TouchableOpacity>
            </View>

            <MenuButtons activeTab='ProfileScreen' navigation={navigation} />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 70,
    },
    text: {
        fontSize: 20,
        marginVertical: 20,
    },
    button: {
        borderWidth: 0,
        padding: 10,
        alignItems: 'flex-start',
    },
});

export default ProfileScreen;
