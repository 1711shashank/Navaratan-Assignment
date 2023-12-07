import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal, Pressable } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart, reduceQuantityFromCart } from '../redux/cartSlice';


const CartItem = ({ cartItem }) => {

    const dispatch = useDispatch();
    const [modalVisible, setModalVisible] = useState(true);
    const cartItems = useSelector((store) => store.cart.items);

    const handleIncrement = (productData) => {
        const updatedProductData = { ...productData, size: 9 };
        dispatch(addItemToCart(updatedProductData))
    }

    const handleDecrement = (productData) => {

        const { quantity } = cartItems.find((item) => item.products.id === productData.id);

        if (quantity === 1) setModalVisible(true);
        else dispatch(reduceQuantityFromCart(productData));
    }

    const discountedPrice = (cartItem?.products?.price - cartItem?.products?.price * cartItem?.products?.discountPercentage / 100).toFixed(2);

    return (
        <>
            <View style={{ width: '100%', paddingVertical: 20, borderBottomWidth: 0.5, borderBottomColor: '#EBEBFB', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        style={{ width: 50, aspectRatio: 1 / 1, resizeMode: 'contain' }}
                        source={{ uri: cartItem?.products?.thumbnail }}
                    />
                    <View style={{ paddingLeft: 12 }}>
                        <Text style={{ fontSize: 12, width: 150, paddingBottom: 4 }}>{cartItem?.products?.title}</Text>
                        <Text style={{ fontSize: 12 }}>Size: {cartItem?.products?.size} / Rs. {discountedPrice}</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                    <TouchableOpacity onPress={() => handleDecrement(cartItem.products)} style={{ backgroundColor: '#F8F9FB', borderRadius: 50, marginRight: 10, padding: 10 }} >
                        <AntDesign name="minus" size={20} color="black" />
                    </TouchableOpacity>

                    <Text style={{ color: '#1E222B' }}> {cartItem.quantity} </Text>

                    <TouchableOpacity onPress={() => handleIncrement(cartItem.products)} style={{ backgroundColor: '#F8F9FB', borderRadius: 50, marginLeft: 10, padding: 10 }} >
                        <AntDesign name="plus" size={20} color="black" />
                    </TouchableOpacity>

                </View>
            </View>



            <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => { setModalVisible(!modalVisible) }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={{ fontSize: 18, marginBottom: 20 }}>Are You Sure</Text>
                        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TouchableOpacity style={{ width: '46%', borderRadius: 20, height: 56, backgroundColor: '#FFF', borderColor: '2A4BA0', borderWidth: 1, alignItems: 'center', justifyContent: 'center' }} onPress={() => setModalVisible(false)}>
                                <Text>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '46%', borderRadius: 20, height: 56, backgroundColor: '#2A4BA0', alignItems: 'center', justifyContent: 'center' }} onPress={() => dispatch(reduceQuantityFromCart(cartItem.products))}>
                                <Text style={{ color: 'white' }}>Remove</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

        </>
    )
}

export default CartItem


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalView: {
        margin: 20,
        padding: 35,
        elevation: 5,
        shadowRadius: 4,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        alignItems: 'center',
        backgroundColor: 'white',
        shadowOffset: { width: 0, height: 2 },
    }
});