import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

const ProductList = ({ item, handleDelete, navigation }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 25 }}>
            <TouchableOpacity
                key={item.id}
                onPress={() => navigation.push('EditProductScreen', { productToEdit: item })}
                style={{ width: '100%', paddingVertical: 20, borderBottomWidth: 0.5, borderBottomColor: '#EBEBFB', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
            >
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
    )
}

export default ProductList