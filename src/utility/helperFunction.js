import { ToastAndroid } from 'react-native'

export const showAcknowledgementMessage = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
};