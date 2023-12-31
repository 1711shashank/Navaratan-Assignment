import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from '../redux/cartSlice';
import MenuButtons from '../components/MenuButtons';
import { FontAwesome, Entypo } from '@expo/vector-icons';
import { clearOrderHistory } from '../redux/orderHistoryListSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const ProfileScreen = ({ navigation }) => {

    const [role, setRole] = useState('')

    const getRole = async () => {
        setRole(await AsyncStorage.getItem('role'));
    }

    useEffect(() => {
        getRole();
    }, [role])

    const userName = role === 'admin' ? 'Admin' : 'Kumar Shashank';

    const dispatch = useDispatch();
    const handleLogOut = async () => {

        dispatch(clearCart());
        dispatch(clearOrderHistory());

        await AsyncStorage.removeItem('role');
        navigation.navigate('LoginScreen');

    };


    return (
        <View style={{ flex: 1 }}>

            <View style={styles.container}>

                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Entypo name="chevron-small-left" size={24} color="#1E222B" />
                </TouchableOpacity>

                <View style={{ alignItems: 'center', paddingTop: 0 }}>
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
        paddingTop: 55,
    },
    backButton: {
        marginHorizontal: 10,
        width: 45,
        aspectRatio: 1 / 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e0e0e0',
        padding: 10, borderRadius: 50
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
