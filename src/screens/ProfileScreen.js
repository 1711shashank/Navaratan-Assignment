import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MenuButtons from '../components/MenuButtons';
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { userRole } from '../redux/userRoleSlice';

const ProfileScreen = ({ navigation }) => {

    const role = useSelector((store) => store.userRole.role);
    const userName = role === 'admin' ? 'Admin' : 'Kumar Shashank';

    const dispatch = useDispatch();
    const handleLogOut = () => {
        dispatch(userRole('user'));
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
