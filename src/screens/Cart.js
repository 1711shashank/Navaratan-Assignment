import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import CartItem from '../components/CartItem';
import { useSelector } from 'react-redux';


const Cart = ({ navigation }) => {

    const cartItems = useSelector((store) => store.cart.items);

    const totalPrice = cartItems.reduce((total, item) => {
        const { price } = item.products;
        const quantity = item.quantity;
        return total + (price * quantity);
    }, 0);

    return (
        <View style={{ width: '100%', height: '100%', alignItems: 'center', paddingTop: 50, paddingHorizontal: 30 }}>

            <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                <TouchableOpacity style={{ backgroundColor: '#F8F9FB', padding: 10, borderRadius: 50, marginRight: 20 }} onPress={() => navigation.goBack()}>
                    <Entypo name="chevron-small-left" size={24} color="#1E222B" />
                </TouchableOpacity>
                <Text style={{ fontSize: 16 }}>Shopping Cart ({cartItems.length})</Text>
            </View>

            {
                cartItems.map((cartItem, index) => (
                    <CartItem cartItem={cartItem} key={index} />
                ))
            }

            <View style={{ backgroundColor: '#F8F9FB', width: 380, height: 260, borderRadius: 30, padding: 20, position: 'absolute', bottom: -50 }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5, marginHorizontal: 20 }}>
                    <Text style={{ color: '#616A7D' }}>Subtotal</Text>
                    <Text style={{ color: '#1E222B' }}>$ {totalPrice}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5, marginHorizontal: 20 }}>
                    <Text style={{ color: '#616A7D' }}>Delivery</Text>
                    <Text style={{ color: '#1E222B' }}>$ 2</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5, marginHorizontal: 20 }}>
                    <Text style={{ color: '#616A7D' }}>Total</Text>
                    <Text style={{ color: '#1E222B', fontWeight: 500 }}>$ {totalPrice + 2}</Text>
                </View>

                <TouchableOpacity style={{ backgroundColor: '#2A4BA0', height: 56, borderRadius: 20, marginVertical: 20, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: '#FFF', fontSize: 14 }}>
                        Make Payment
                    </Text>
                </TouchableOpacity>

            </View>

        </View >
    )
}

export default Cart