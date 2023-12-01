import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../redux/cartSlice';
import { Text, TouchableOpacity, View } from 'react-native';
import { useEffect } from 'react';


const ProductScreenButtons = ({ productData, selectedSize, navigation }) => {

    const dispatch = useDispatch();

    const cartItems = useSelector((store) => store.cart.items);
    const [isExistInCart, setIsExistInCart] = useState(false);

    const handleCart = () => {
        const data = cartItems.find((item) => item.products.id === productData.id);
        if (data) {
            dispatch(removeItemFromCart(productData));
        } else {
            const updatedProductData = { ...productData, size: selectedSize };
            dispatch(addItemToCart(updatedProductData));
        }
    }

    const handleBuyNow = () => {

        const data = cartItems.find((item) => item.products.id === productData.id);
        if (!data) {
            const updatedProductData = { ...productData, size: selectedSize };
            dispatch(addItemToCart(updatedProductData));
        }
        navigation.navigate('Cart');
    }

    useEffect(() => {
        const data = cartItems.find((item) => item.products.id === productData.id);
        if (data) setIsExistInCart(true);
        else setIsExistInCart(false);

    }, [cartItems])

    return (
        <View style={{ paddingHorizontal: 30, flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity style={{ width: '46%', borderRadius: 20, height: 56, backgroundColor: '#FFF', borderColor: '2A4BA0', borderWidth: 1, alignItems: 'center', justifyContent: 'center' }} onPress={handleCart}>
                {isExistInCart
                    ? <Text> Remove To Cart</Text>
                    : <Text> Add To Cart</Text>
                }

            </TouchableOpacity>
            <TouchableOpacity style={{ width: '46%', borderRadius: 20, height: 56, backgroundColor: '#2A4BA0', alignItems: 'center', justifyContent: 'center' }} onPress={handleBuyNow}>
                <Text style={{ color: 'white' }}>
                    Buy Now
                </Text>
            </TouchableOpacity>
        </View>

    )
}

export default ProductScreenButtons