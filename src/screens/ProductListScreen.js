import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct } from '../redux/productListSlice';
import ProductList from '../components/ProductList';


const ProductListScreen = ({ navigation }) => {

    const productList = useSelector((store) => store.productList.items);

    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(removeProduct(id));
    }

    return (
        <View style={{ flex: 1, paddingTop: 50, paddingHorizontal: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ color: '#2A4BA0', fontSize: 22, paddingVertical: 10 }}> Edit Product Details </Text>
                <TouchableOpacity onPress={() => navigation.navigate('AddNewProductScreen')}>
                    <Ionicons name="add" size={30} color="gray" />
                </TouchableOpacity>
            </View>
            {
                productList.map((item) => (
                    <View key={item.id} >
                        <ProductList item={item} handleDelete={handleDelete} navigation={navigation}/>
                    </View>
                ))
            }
        </View>
    )
}

export default ProductListScreen