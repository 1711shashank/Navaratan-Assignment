import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MenuButtons from '../components/MenuButtons';

const ProfileScreen = ({ navigation }) => {
    const userName = 'Test User';

    const handleLogout = () => {
        navigation.navigate('Login');
    };

    return (
        <View style={{ flex: 1 }}>

            <View style={styles.container}>
                <Text style={styles.text}>Welcome, {userName}!</Text>
                <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate('AddNewProductScreen')}>
                    <Text style={{ color: 'grey' }}>Add New Product</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate('ProductListScreen')}>
                    <Text style={{ color: 'grey' }}>Edit Product Details</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate('Login')}>
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
        marginBottom: 20,
    },
    logoutButton: {
        borderWidth: 0,
        padding: 10,
        alignItems: 'flex-start',
    },
});

export default ProfileScreen;
