import React, { useEffect, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../redux/cartSlice';
import { Image, Text, TouchableOpacity, View } from 'react-native'

const ProductCard = ({ productData }) => {

    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.items);
    const [isExistInCart, setIsExistInCart] = useState(false);

    const handleAddCart = () => {
        const data = cartItems.find((item) => item.products.id === productData.id);
        if (data) {
            dispatch(removeItemFromCart(productData));
        } else {
            const updatedProductData = { ...productData, size: 9 };
            dispatch(addItemToCart(updatedProductData));
        }
    }

    useEffect(() => {

        const data = cartItems.find((item) => item.products.id === productData.id);
        if (data) setIsExistInCart(true);
        else setIsExistInCart(false);

    }, [cartItems])


    return (
        <>
            <Image
                style={{ width: '100%', height: '65%', borderRadius: 10, resizeMode: 'contain' }}
                source={{ uri: productData.thumbnail }}
            />

            <View style={{ width: '100%', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' }}>

                <View style={{ width: '80%', padding: 10 }}>
                    <Text style={{ color: '#1E222B', fontWeight: 600 }}>Rs. {productData.price}</Text>
                    <Text style={{ color: '#616A7D', fontSize: 12 }} numberOfLines={2} ellipsizeMode="tail">{productData.title}</Text>
                </View>

                <TouchableOpacity onPress={handleAddCart} style={{ marginTop: 10, backgroundColor: '#2A4BA0', borderRadius: 50, padding: 7, marginRight: 5 }} >
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