import React, { useState } from 'react';
import { TouchableOpacity, ScrollView, Text, TextInput, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../redux/productListSlice'
import { View } from 'react-native';


const EditProductScreen = ({ route, navigation }) => {

    const { productToEdit } = route.params;

    const [productData, setProductData] = useState({
        title: productToEdit.title || '',
        description: productToEdit.description || '',
        price: productToEdit.price || 0,
        discountPercentage: productToEdit.discountPercentage || 0,
        rating: productToEdit.rating || 0,
        stock: productToEdit.stock || 0,
        brand: productToEdit.brand || '',
        category: productToEdit.category || '',
        thumbnail: productToEdit.thumbnail || '',
        images: (productToEdit.images || []).map(image => image || ''),
    });

    const isFormDisabled = Object.values(productData).some((value) => value === '') || productData.images.some((image) => image === '');

    const dispatch = useDispatch();
    const handleUpdate = () => {
        const updatedProductData = { ...productData, id: productToEdit.id };
        dispatch(updateProduct(updatedProductData));
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

            <Text style={styles.label}>Title</Text>
            <TextInput
                style={styles.input}
                value={productData.title}
                onChangeText={(text) => setProductData({ ...productData, title: text })}
            />
            <Text style={styles.label}>Description</Text>
            <TextInput
                style={styles.input}
                value={productData.description}
                onChangeText={(text) => setProductData({ ...productData, description: text })}
            />

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
                    <Text style={styles.label}>Category</Text>
                    <TextInput
                        style={styles.input}
                        value={productData.category}
                        onChangeText={(text) => setProductData({ ...productData, category: text })}
                    />
                </View>
            </View>

            <Text style={styles.label}>Stock</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={String(productData.stock)}
                onChangeText={(text) => setProductData({ ...productData, stock: text })}
            />

            <Text style={styles.label}>Thumbnail Image URL</Text>
            <TextInput
                style={styles.input}
                value={productData.thumbnail}
                onChangeText={(text) => setProductData({ ...productData, thumbnail: text })}
            />

            {[0, 1, 2, 3].map((index) => (
                <View key={index}>
                    <Text style={styles.label}>Image {index + 1} URL</Text>
                    <TextInput
                        key={index}
                        style={styles.input}
                        value={productData.images[index]}
                        onChangeText={(text) => handleImageChange(index, text)}
                    />
                </View>
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
                    onPress={handleUpdate}
                    disabled={isFormDisabled}
                >
                    <Text style={{ color: '#fff' }}> UPDATE </Text>
                </TouchableOpacity>
            </View>
        </ScrollView >
    );
};

export default EditProductScreen;

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
    label: {
        color: 'gray',
        paddingLeft: 10,
        marginBottom: -4
    },
});
