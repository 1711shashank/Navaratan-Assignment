import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const isLoginDisabled = email.trim() === '' || password.trim() === '';


    const handleLogin = () => {
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
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

    },
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        padding: 12,
        borderRadius: 10,
        borderWidth: 1,
        marginVertical: 10
    },
    button: {
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
