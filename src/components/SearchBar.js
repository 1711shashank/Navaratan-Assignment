import React from 'react'
import { TextInput, View } from 'react-native'
import { EvilIcons } from '@expo/vector-icons';

const SearchBar = ({ searchQuery, setSearchQuery }) => {

    const onChangeSearch = (query) => setSearchQuery(query);

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#153075', borderRadius: 50, paddingLeft: 20, marginVertical: 20 }}>
            <EvilIcons name="search" size={24} color="#FFF" />
            <TextInput
                value={searchQuery}
                style={{ padding: 10, color: '#FFF' }}
                onChangeText={onChangeSearch}
                placeholderTextColor='#8891A5'
                placeholder="Search Products or store"
            />
        </View>
    )
}

export default SearchBar