import React, { useState } from 'react';
import { ScrollView, View } from 'react-native'
import { Rating } from 'react-native-elements';
import ImageCarousel from '../components/ImageCarousel';
import ProductName from '../components/ProductName';
import ProductPrice from '../components/ProductPrice';
import ProductScreenHeader from '../components/ProductScreenHeader';
import ProductScreenButtons from '../components/ProductScreenButtons';
import ProductSize from '../components/ProductSize';
import ProductDetails from '../components/ProductDetails';


const ProductScreen = ({ route, navigation }) => {

    const { productData } = route.params;
    const [selectedSize, setSelectedSize] = useState(9);

    return (
        <>
            <ScrollView>
                <View style={{ width: '100%', height: '100%', paddingTop: 50, paddingBottom: 20, }}>

                    <ProductScreenHeader navigation={navigation} />
                    <ProductName productData={productData} />
                    <Rating type="custom" tintColor="#f2f2f2" ratingBackgroundColor='#d9d9d9' imageSize={20} startingValue={productData.rating} style={{ paddingHorizontal: 30, alignSelf: 'flex-start', marginVertical: 10 }} />
                    <ImageCarousel images={productData.images} />
                    <ProductPrice productData={productData} />
                    <ProductSize selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
                    <ProductScreenButtons productData={productData} navigation={navigation} selectedSize={selectedSize} />
                    <ProductDetails productData={productData} />

                </View>
            </ScrollView>
        </>
    )
}

export default ProductScreen