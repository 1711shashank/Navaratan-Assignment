import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ProductCard from '../components/ProductCard';
import AddressInfo from '../components/AddressInfo';
import SearchBar from '../components/SearchBar';
import MenuButtons from '../components/MenuButtons';
import { useSelector } from 'react-redux';

const Home = ({ navigation }) => {

    const cartItems = useSelector((store) => store.cart.items);
    const productList = useSelector((store) => store.productList.items);
    const [searchQuery, setSearchQuery] = useState('');

    return (

        <View style={{ flex: 1 }}>

            <View style={{ backgroundColor: '#2A4BA0', height: 250, paddingHorizontal: 20, paddingTop: 45 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                    <Text style={{ fontSize: 22, color: '#F8F9FB' }}> Hi, Shashank</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={{ marginTop: 10, padding: 10, borderRadius: 50 }}>
                        <MaterialCommunityIcons name="shopping-outline" size={24} color="#F8F9FB" />
                        <View style={{ position: 'absolute', right: 0, borderRadius: 50, width: 24, aspectRatio: 1 / 1, backgroundColor: '#F9B023', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: '#fff', fontSize: 12 }}>{cartItems.length}</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                <AddressInfo />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>

                <Text style={{ color: '#2A4BA0', fontSize: 30, padding: 10 }}> Recommended </Text>
                <View style={{ width: '100%', justifyContent: 'center', flexWrap: 'wrap', flexDirection: 'row', alignItems: 'flex-start', paddingBottom: 80 }}>

                    {productList?.map((item) => (
                        <TouchableOpacity
                            style={styles.producCard} key={item.id}
                            onPress={() => navigation.push('ProductScreen', { productData: item })}
                        >
                            <ProductCard productData={item} />
                        </TouchableOpacity>
                    ))}

                </View>
            </ScrollView>

            <MenuButtons activeTab='Home' navigation={navigation} />

        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    producCard: {
        width: '45%',
        aspectRatio: 160 / 184,
        margin: 8,
        backgroundColor: '#F8F9FB',
        padding: 10,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});
