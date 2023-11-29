import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { addItem, removeItem } from '../redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';





const ProductCard = ({ productData }) => {

    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.items);
    const [isExistInCart, setIsExistInCart] = useState(false);

    const handleAddCart = () => {
        const data = cartItems.find((item) => item.products.id === productData.id);
        if (data) {
            dispatch(removeItem(productData));
            setIsExistInCart(false);
        } else {
            dispatch(addItem(productData));
            setIsExistInCart(true);
        }
    }

    return (
        <>
            <Image
                style={{ width: '100%', height: '60%', borderRadius: 10, resizeMode: 'contain' }}
                source={{ uri: productData.thumbnail }}
            />

            <View style={{ width: '100%', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' }}>

                <View style={{ width: '80%', padding: 10 }}>
                    <Text style={{ color: '#1E222B', fontWeight: 600 }}> $ {productData.price}</Text>
                    <Text style={{ color: '#616A7D', fontSize: 12 }} numberOfLines={2} ellipsizeMode="tail">{productData.title}</Text>
                </View>

                <TouchableOpacity onPress={handleAddCart} style={{ marginTop: 10, backgroundColor: '#2A4BA0', borderRadius: 50, padding: 5 }} >
                    {isExistInCart
                        ? <AntDesign name="minus" size={20} color="#FFF" />
                        : <AntDesign name="plus" size={20} color="#FFF" />
                    }
                </TouchableOpacity>
            </View>
        </>
    )
}

export default ProductCard