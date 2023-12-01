import React from 'react'
import { Entypo } from '@expo/vector-icons';
import CartItem from '../components/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart } from '../redux/cartSlice';
import { addToOrderList } from '../redux/orderHistoryListSlice';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'


const Cart = ({ navigation }) => {

    const cartItems = useSelector((store) => store.cart.items);

    const totalPrice = cartItems.reduce((total, item) => {
        const { price } = item.products;
        const quantity = item.quantity;
        return total + (price * quantity);
    }, 0);

    const dispatch = useDispatch();
    const handleOrder = () => {

        cartItems.map((item) => {

            const timestamp = new Date().toISOString();
            const updatedProducts = {
                ...item.products,
                timestamp: timestamp
            };

            dispatch(addToOrderList(updatedProducts));
            dispatch(removeItemFromCart(item.products));
        });

        navigation.navigate('OrderHistoryScreen');

    }

    return (
        <View style={styles.cartWrapper}>

            <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                <TouchableOpacity style={{ backgroundColor: '#F8F9FB', padding: 10, borderRadius: 50, marginRight: 20 }} onPress={() => navigation.goBack()}>
                    <Entypo name="chevron-small-left" size={24} color="#1E222B" />
                </TouchableOpacity>
                <Text style={{ fontSize: 16 }}>Shopping Cart ({cartItems.length})</Text>
            </View>

            {
                cartItems.map((cartItem, index) => (
                    <View key={index} style={{ width: '100%' }}>
                        <CartItem cartItem={cartItem} />
                    </View>
                ))
            }

            <View style={styles.paymentCard}>

                <View style={styles.paymentCardRecordColumn}>
                    <Text style={{ color: '#616A7D' }}>Subtotal</Text>
                    <Text style={{ color: '#1E222B' }}>Rs. {totalPrice}</Text>
                </View>
                <View style={styles.paymentCardRecordColumn}>
                    <Text style={{ color: '#616A7D' }}>Delivery</Text>
                    <Text style={{ color: '#1E222B' }}>Rs. 100</Text>
                </View>
                <View style={styles.paymentCardRecordColumn}>
                    <Text style={{ color: '#616A7D' }}>Total</Text>
                    <Text style={{ color: '#1E222B', fontWeight: 500 }}>Rs. {totalPrice + 100}</Text>
                </View>

                {cartItems.length > 0 ? (
                    <TouchableOpacity style={styles.makePaymentButton} onPress={handleOrder}>
                        <Text style={{ color: '#FFF', fontSize: 14 }}>Make Payment</Text>
                    </TouchableOpacity>
                ) : (
                    <View style={[styles.makePaymentButton, { backgroundColor: '#B0B0B0' }]}>
                        <Text style={{ color: '#FFF', fontSize: 14 }}>Cart is Empty</Text>
                    </View>
                )}
            </View>
        </View >
    )
}

export default Cart


const styles = StyleSheet.create({
    cartWrapper: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        paddingTop: 50,
        paddingHorizontal: 25,
    },
    paymentCard: {
        backgroundColor: '#F8F9FB',
        width: 380,
        height: 260,
        borderRadius: 30,
        padding: 20,
        position: 'absolute',
        bottom: -50
    },
    paymentCardRecordColumn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
        marginHorizontal: 20
    },
    makePaymentButton: {
        backgroundColor: '#2A4BA0',
        height: 56,
        borderRadius: 20,
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }
})