import React from 'react'
import { View, Text } from 'react-native'


const ProductName = ({ productData }) => {
    return (
        <View style={{ paddingHorizontal: 30 }}>
            <Text style={{ fontSize: 50, fontWeight: 300, marginTop: 15 }}>
                {productData.brand}
            </Text>
            <Text style={{ fontSize: 40, fontWeight: 800 }}>
                {productData.title}
            </Text>
        </View>
    )
}

export default ProductName