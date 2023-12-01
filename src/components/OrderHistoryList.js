import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

const OrderHistoryList = ({ item }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 25 }}>
            <TouchableOpacity
                key={item.id}
                onPress={() => navigation.push('EditProductScreen', { productToEdit: item })}
                style={{ width: '100%', paddingVertical: 20, borderBottomWidth: 0.5, borderBottomColor: '#EBEBFB', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        style={{ width: 60, aspectRatio: 1 / 1, resizeMode: 'contain' }}
                        source={{ uri: item?.thumbnail }}
                    />
                    <View style={{ paddingLeft: 12 }}>
                        <Text style={{ fontSize: 12, width: 150, paddingBottom: 4 }}>{item?.title}</Text>
                        <Text style={{ fontSize: 12, color: 'gray' }}>Size: {item?.size}</Text>
                        <Text style={{ fontSize: 12, color: 'gray' }}>Delivery by Monday</Text>
                    </View>
                </View>

            </TouchableOpacity>

        </View>
    )
}

export default OrderHistoryList