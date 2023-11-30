import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';


const ProductListScreen = ({navigation}) => {

    const productList = useSelector((store) => store.productList.items);

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
                    <TouchableOpacity style={{ width: '100%', paddingVertical: 20, borderBottomWidth: 0.5, borderBottomColor: '#EBEBFB', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
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
                ))
            }
        </View>
    )
}

export default ProductListScreen