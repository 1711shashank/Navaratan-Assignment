import React from 'react'
import { View, Text } from 'react-native'

const ProductDetails = ({ productData }) => {
    return (
        <View style={{ paddingHorizontal: 30, marginTop: 20 }}>
            <Text style={{ color: '#1E222B', fontSize: 16, marginVertical: 6 }}>
                Details
            </Text>
            <Text style={{ color: '#8891A5', fontSize: 16 }}>
                {productData.description}
            </Text>
        </View>
    )
}

export default ProductDetails