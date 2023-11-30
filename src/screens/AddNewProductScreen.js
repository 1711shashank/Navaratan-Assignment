import React, { useState } from 'react';
import { TouchableOpacity, ScrollView, Text, TextInput, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addNewProduct } from '../redux/productListSlice'
import { View } from 'react-native';
import { useEffect } from 'react';


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

    const isFormDisabled = Object.values(productData).some((value) => value === '') && productData.images.some((image) => image === '');

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

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <View style={{ flex: 1, marginRight: 5 }}>
                    <Text style={styles.label}>Title</Text>
                    <TextInput
                        style={styles.input}
                        value={productData.title}
                        onChangeText={(text) => setProductData({ ...productData, title: text })}
                    />
                </View>
                <View style={{ flex: 1, marginLeft: 5 }}>
                    <Text style={styles.label}>Category</Text>
                    <TextInput
                        style={styles.input}
                        value={productData.category}
                        onChangeText={(text) => setProductData({ ...productData, category: text })}
                    />
                </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <View style={{ flex: 1, marginRight: 5 }}>
                    <Text style={styles.label}>Price</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        value={String(productData.price)}
                        onChangeText={(text) => setProductData({ ...productData, price: text })}
                    />
                </View>
                <View style={{ flex: 1, marginLeft: 5 }}>
                    <Text style={styles.label}>Brand</Text>
                    <TextInput
                        style={styles.input}
                        value={productData.brand}
                        onChangeText={(text) => setProductData({ ...productData, brand: text })}
                    />
                </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <View style={{ flex: 1, marginRight: 5 }}>
                    <Text style={styles.label}>Discount Percentage</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        value={String(productData.discountPercentage)}
                        onChangeText={(text) => setProductData({ ...productData, discountPercentage: text })}
                    />

                </View>
                <View style={{ flex: 1, marginLeft: 5 }}>
                    <Text style={styles.label}>Stock</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        value={String(productData.stock)}
                        onChangeText={(text) => setProductData({ ...productData, stock: text })}
                    />
                </View>
            </View>

            <Text style={styles.label}>Description</Text>
            <TextInput
                style={styles.input}
                value={productData.description}
                onChangeText={(text) => setProductData({ ...productData, description: text })}
            />

            <Text style={styles.label}>Thumbnail Image URL</Text>
            <TextInput
                style={styles.input}
                value={productData.thumbnail}
                onChangeText={(text) => setProductData({ ...productData, thumbnail: text })}
            />

            {[0, 1, 2, 3].map((index) => (
                <>
                    <Text style={styles.label}>Image {index + 1} URL</Text>
                    <TextInput
                        key={index}
                        style={styles.input}
                        value={productData.images[index]}
                        onChangeText={(text) => handleImageChange(index, text)}
                    />
                </>
            ))}

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginVertical: 10 }}>
                <TouchableOpacity
                    style={[styles.button, { marginRight: 5, borderWidth: 1, }]}
                    onPress={() => navigation.navigate('ProfileScreen')}
                >
                    <Text> CANCEL </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, { marginLeft: 5, backgroundColor: '#2A4BA0' }, isFormDisabled && styles.disabledButton,]}
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
        paddingVertical: 8,
        paddingHorizontal: 12,
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
    label: {
        color: 'gray',
        paddingLeft: 10,
        marginBottom: -4
    },
});
