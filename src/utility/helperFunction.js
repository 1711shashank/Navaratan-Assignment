import { ToastAndroid } from 'react-native'

export const showAcknowledgementMessage = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
};

export const calculatePrice = (cartItem) => {
    const { price, discountPercentage } = cartItem?.products;
    return (price - (price * discountPercentage / 100)).toFixed(2);
}

export const calculatePaymentAmount = (cartItems) => {
    const totalPrice = cartItems.reduce((total, item) => {

        const { price, discountPercentage } = item.products;
        const quantity = item.quantity;
        const discountedPrice = (price - (price * discountPercentage / 100));

        return total + (discountedPrice * quantity);

    }, 0);

    
    const totalWithoutDelivery = totalPrice.toFixed(2);
    const totalWithDelivery = (totalPrice + 100).toFixed(2);

    return { totalWithoutDelivery, totalWithDelivery };
}