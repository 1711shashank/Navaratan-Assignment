import React from 'react'
import { View, Text } from 'react-native'


const ProductName = ({ productData }) => {
    return (
        <View style={{ paddingHorizontal: 30 }}>
            <Text style={{ fontSize: 18, fontWeight: 300, marginTop: 15 }}>
                {productData.brand}
            </Text>
            <Text style={{ fontSize: 30, fontWeight: 400, }}>
                {productData.title}
            </Text>


        </View>
    )
}

export default ProductName