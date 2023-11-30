import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct } from '../redux/productListSlice';


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
                    <View key={item.id} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight:25}}>
                        <TouchableOpacity key={item.id} onPress={() => navigation.push('EditProductScreen', { productToEdit: item })} style={{ width: '100%', paddingVertical: 20, borderBottomWidth: 0.5, borderBottomColor: '#EBEBFB', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    style={{ width: 50, aspectRatio: 1 / 1, resizeMode: 'contain' }}
                                    source={{ uri: item?.thumbnail }}
                                />
                                <View style={{ paddingLeft: 12 }}>
                                    <Text style={{ fontSize: 12, width: 150, paddingBottom: 4 }}>{item?.title}</Text>
                                    <Text style={{ fontSize: 12, color: 'gray' }}>{item?.brand}</Text>
                                </View>
                            </View>

                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleDelete(item.id)} >
                            <MaterialIcons name="delete-outline" size={25} color="#949494" />
                        </TouchableOpacity>
                    </View>
                ))
            }
        </View>
    )
}

export default ProductListScreen