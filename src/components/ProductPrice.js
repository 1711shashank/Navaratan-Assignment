import React from 'react'
import { View, Text } from 'react-native'

const ProductPrice = ({ productData }) => {
    return (
        <View style={{ paddingHorizontal: 30, display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 20, marginBottom: 10 }}>

            <Text style={{ color: '#2A4BA0', fontWeight: 'bold' }}>Rs. {productData.price}</Text>
            
            <View style={{ backgroundColor: '#2A4BA0', borderRadius: 50, marginHorizontal: 12 }}>
                <Text style={{ color: 'white', paddingHorizontal: 15, paddingVertical: 4 }}>Rs. {(productData.price * (productData.discountPercentage) / 100).toFixed(2)} OFF</Text>
            </View>

        </View>
    )
}

export default ProductPrice