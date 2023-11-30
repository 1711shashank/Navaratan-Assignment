import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import { View, TextInput, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const isLoginDisabled = email.trim() === '' || password.trim() === '';


    const handleLogin = () => {
        if (email === 'admin@gmail.com')
            AsyncStorage.setItem('role', 'admin');
        else
            AsyncStorage.setItem('role', 'user');

        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <Text style={{ color: '#2A4BA0', fontSize: 30, fontWeight: 700, textAlign: 'center', marginVertical: 50 }}> Welcome back</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <Text style={{ textAlign: 'right', color: 'gray', paddingRight: 10, paddingTop: -15 }}> Forget your Password ?</Text>
            <TouchableOpacity
                style={[styles.button, isLoginDisabled && styles.disabledButton]}
                onPress={handleLogin}
                disabled={isLoginDisabled}
            >
                <Text style={{ color: '#fff' }}> LOG IN </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        paddingBottom: 150

    },
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        padding: 12,
        borderRadius: 10,
        borderWidth: 1,
        marginVertical: 5
    },
    button: {
        marginTop: 25,
        borderRadius: 10,
        borderWidth: 1,
        padding: 16,
        alignItems: 'center',
        backgroundColor: '#2A4BA0',
    },
    disabledButton: {
        backgroundColor: '#7F8DAA',
        borderWidth: 0,
    },
});

export default LoginScreen;
