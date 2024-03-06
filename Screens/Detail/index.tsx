import React, { useState } from 'react';
import { View, Text, StyleSheet,ActivityIndicator } from 'react-native';
import WebView from 'react-native-webview';


const DetailsScreen = () => {
  return (
    <View style={style.container}>
        <WebView
                    style={style.webView}
                    source={{uri:'http://packarabia.tv'}}
                    onError={(e=>console.error(e))}
                    startInLoadingState
                />

    </View>
  );
};

const style = StyleSheet.create({
    container:{
        flex:1
    },
    webView:{ flex:1 , borderColor:'red', borderWidth:4},

})
export default DetailsScreen;
