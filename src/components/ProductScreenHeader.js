import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

const ProductScreenHeader = ({ navigation }) => {

    const cartItems = useSelector((store) => store.cart.items);

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', paddingHorizontal: 30 }}>
            <TouchableOpacity style={{ backgroundColor: '#F8F9FB', padding: 10, borderRadius: 50 }} onPress={() => navigation.goBack()}>
                <Entypo name="chevron-small-left" size={24} color="#1E222B" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={{ padding: 10, borderRadius: 50 }} >
                <MaterialCommunityIcons name="shopping-outline" size={24} color="#1E222B" />
                <View style={{ position: 'absolute', right: 0, borderRadius: 50, width: 24, aspectRatio: 1 / 1, backgroundColor: '#F9B023', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: '#fff', fontSize: 12 }}>{cartItems.length}</Text>
                </View>
            </TouchableOpacity>
        </View>

    )
}

export default ProductScreenHeader