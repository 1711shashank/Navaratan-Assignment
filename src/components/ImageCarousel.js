import React from 'react';
import { View } from 'react-native';
import { Image } from 'react-native';
import Swiper from 'react-native-swiper';


const ImageCarousel = ({ images }) => {

    return (
        <View>
            <Swiper style={{ height: 350 }} loop={false}>
                {images.map((image, index) => (
                    <Image
                        key={index}
                        source={{ uri: image }}
                        style={{ flex: 1, resizeMode: 'contain' }}
                    />
                ))}
            </Swiper>
        </View>

    );
};

export default ImageCarousel;
