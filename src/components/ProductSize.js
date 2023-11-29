import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ProductSize = ({ selectedSize, setSelectedSize }) => {

    const handleSizePress = (size) => {
        setSelectedSize(size);
    };

    // Generate an array of sizes from 7 to 13
    const sizes = Array.from({ length: 6 }, (_, index) => index + 8);

    return (
        <View style={styles.container}>
            <View style={styles.sizeSelector}>
                {sizes.map((size) => (
                    <TouchableOpacity
                        key={size}
                        onPress={() => handleSizePress(size)}
                        style={[
                            styles.sizeButton,
                            selectedSize === size && styles.selectedSizeButton,
                        ]}
                    >
                        <Text style={[styles.sizeButtonText, selectedSize === size && styles.selectedSizeText]}>{size}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingBottom: 10,
    },
    header: {
        fontSize: 20,
        marginBottom: 10,
    },
    sizeSelector: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '85%',
        flexWrap: 'wrap'
    },
    sizeButton: {
        width: 42,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#2A4BA0',
        marginHorizontal: 5,
        aspectRatio: 1 / 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    selectedSizeButton: {
        width: 47,
        borderWidth: 1.4,
        backgroundColor: '#fff',

    },
    sizeButtonText: {
        fontSize: 16,
        color: '#2A4BA0',

    },
    selectedSizeText: {
        fontWeight: 700,
    },
});

export default ProductSize;
