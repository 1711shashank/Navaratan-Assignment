import React, { useState } from 'react';
import { TouchableOpacity, ScrollView, Text, TextInput, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addNewProduct } from '../redux/productListSlice'
import { View } from 'react-native';


const AddNewProductScreen = ({ navigation }) => {

    const [productData, setProductData] = useState({
        title: '',
        description: '',
        price: '',
        discountPercentage: '',
        rating: '3',
        stock: '',
        brand: '',
        category: '',
        thumbnail: '',
        images: ['', '', '', '', ''],
    });

    const isFormDisabled = Object.values(productData).some((value) => value === '') || productData.images.some((image) => image === '');

    const dispatch = useDispatch();
    const handleSaveProduct = () => {
        const updatedProductData = { ...productData, id: Math.floor(Math.random() * 10000000) };
        dispatch(addNewProduct(updatedProductData));
        navigation.navigate('Home');
    };

    const handleImageChange = (index, imageUrl) => {
        const updatedImages = [...productData.images];
        updatedImages[index] = imageUrl;
        setProductData({ ...productData, images: updatedImages });
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>

            <Text style={{ color: '#2A4BA0', fontSize: 22, fontWeight: 500, textAlign: 'center', paddingVertical: 10 }}> Enter Product Details </Text>

            <TextInput
                style={styles.input}
                placeholder="Title"
                value={productData.title}
                onChangeText={(text) => setProductData({ ...productData, title: text })}
            />
            <TextInput
                style={styles.input}
                placeholder="Description"
                value={productData.description}
                onChangeText={(text) => setProductData({ ...productData, description: text })}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <TextInput
                    style={[styles.input, { flex: 1, marginRight: 5 }]}
                    placeholder="Price"
                    keyboardType="numeric"
                    value={productData.price}
                    onChangeText={(text) => setProductData({ ...productData, price: text })}
                />
                <TextInput
                    style={[styles.input, { flex: 1, marginLeft: 5 }]}
                    placeholder="Discount Percentage"
                    keyboardType="numeric"
                    value={productData.discountPercentage}
                    onChangeText={(text) => setProductData({ ...productData, discountPercentage: text })}
                />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <TextInput
                    style={[styles.input, { flex: 1, marginRight: 5 }]}
                    placeholder="Category"
                    value={productData.category}
                    onChangeText={(text) => setProductData({ ...productData, category: text })}
                />
                <TextInput
                    style={[styles.input, { flex: 1, marginLeft: 5 }]}
                    placeholder="Brand"
                    value={productData.brand}
                    onChangeText={(text) => setProductData({ ...productData, brand: text })}
                />
            </View>

            <TextInput
                style={styles.input}
                placeholder="Stock"
                keyboardType="numeric"
                value={productData.stock}
                onChangeText={(text) => setProductData({ ...productData, stock: text })}
            />

            <TextInput
                style={styles.input}
                placeholder="Thumbnail URL"
                value={productData.thumbnail}
                onChangeText={(text) => setProductData({ ...productData, thumbnail: text })}
            />

            {[0, 1, 2, 3].map((index) => (
                <TextInput
                    key={index}
                    style={styles.input}
                    placeholder={`Image ${index + 1} URL`}
                    value={productData.images[index]}
                    onChangeText={(text) => handleImageChange(index, text)}
                />
            ))}

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginVertical: 10 }}>
                <TouchableOpacity
                    style={[styles.button, { marginRight: 5, borderWidth: 1, }]}
                    onPress={() => navigation.navigate('ProfileScreen')}
                >
                    <Text> CANCEL </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, isFormDisabled && styles.disabledButton, { marginLeft: 5, backgroundColor: '#2A4BA0' }]}
                    onPress={handleSaveProduct}
                    disabled={isFormDisabled}
                >
                    <Text style={{ color: '#fff' }}> ADD PRODUCT </Text>
                </TouchableOpacity>
            </View>
        </ScrollView >
    );
};

export default AddNewProductScreen;

const styles = StyleSheet.create({
    container: {
        padding: 16,
        paddingTop: 50
    },
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 7,
        padding: 12,
        borderRadius: 10,
        borderWidth: 1,
        marginVertical: 6,
    },
    button: {
        flex: 1,
        borderRadius: 10,
        padding: 16,
        alignItems: 'center',
    },
    disabledButton: {
        backgroundColor: '#7F8DAA',
        borderWidth: 0,
    },
});
