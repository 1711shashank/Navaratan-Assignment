import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native'
import OrderHistoryList from '../components/OrderHistoryList';


const OrderHistoryScreen = ({ navigation }) => {

    const orderHistoryList = useSelector((store) => store.orderHistoryList.items);

    return (
        <View style={{ flex: 1, paddingTop: 50, paddingHorizontal: 20 }}>

            <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                <TouchableOpacity style={{ backgroundColor: '#F8F9FB', padding: 10, borderRadius: 50, marginRight: 20 }} onPress={() => navigation.navigate('Home')}>
                    <Entypo name="chevron-small-left" size={24} color="#1E222B" />
                </TouchableOpacity>
                <Text style={{ color: '#2A4BA0', fontSize: 22, paddingVertical: 10 }}> Order History </Text>
            </View>
            {
                orderHistoryList.map((item) => (
                    <View key={item.timestamp} >
                        <OrderHistoryList item={item} navigation={navigation} />
                    </View>
                ))
            }
        </View>
    )
}

export default OrderHistoryScreen