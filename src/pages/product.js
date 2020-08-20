import React from 'react';
import { WebView } from 'react-native-webview';

const Product = ({route}) => {
    const {product} = route.params
    return (
            <WebView source={{ uri: product.url}}/>
    )
}

// Product.navigationOptions = () => ({
//     title: product.title
//   });

export default Product