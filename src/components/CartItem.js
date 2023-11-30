import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useDispatch } from 'react-redux'
import { addItem, reduceQuantity } from '../redux/cartSlice';


const CartItem = ({ cartItem }) => {

    const dispatch = useDispatch();

    const handleIncrement = (productData) => {
        const updatedProductData = { ...productData, size: 9 };
        dispatch(addItem(updatedProductData))
    }

    const handleDecrement = (productData) => {
        dispatch(reduceQuantity(productData))
    }

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
                        <Text style={{ fontSize: 12 }}>Size: {cartItem?.products?.size} / Rs. {cartItem?.products?.price}</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                    <TouchableOpacity onPress={() => handleDecrement(cartItem.products)} style={{ backgroundColor: '#F8F9FB', borderRadius: 50, marginRight: 10, padding: 10 }} >
                        <AntDesign name="minus" size={20} color="black" />
                    </TouchableOpacity>

                    <Text style={{ color: '#1E222B' }}> {cartItem.quantity} </Text>

                    <TouchableOpacity onPress={() => handleIncrement(cartItem.products)} style={{ backgroundColor: '#F8F9FB', borderRadius: 50, marginLeft: 10, padding: 10 }} >
                        <AntDesign name="plus" size={20} color="black" />
                    </TouchableOpacity>

                </View>
            </View>
        </>
    )
}

export default CartItem