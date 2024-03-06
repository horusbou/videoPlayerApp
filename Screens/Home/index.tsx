// HomeScreen.js
import React, { useState } from 'react';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';
import {Search,Section,VideoContainer} from '../../Components';
import { useNavigation } from '@react-navigation/native';
import { navigationItems } from '../../data';
import { StackNavigation } from '../../Interfaces';

const HomeScreen = () => {
    const navigation = useNavigation<StackNavigation>();
    const navigateToDetails = ()=>{
        navigation.navigate('Details')
    }
    const [state,setState]=useState({
        selectedContryId:1
    });
    const selectCountry = (countryId:number)=>{
        setState({selectedContryId:countryId})
    }
    const getVideos =()=>{
        const country =  navigationItems.find(el=>el.id === state.selectedContryId);
        if(country && country.videos)
            return country.videos;
        return null;
    }
  return (
    <View style={style.container}>
            <Search/>
            <Section selectCountry={selectCountry} />
            <VideoContainer videos={getVideos()} />
            <View style={style.aboutUs}>
                <Button
                title="Go to Details"
                onPress={navigateToDetails}
                color={'#BED1CF'}
                />
            </View>
        </View>


  );
};
const style = StyleSheet.create({
    aboutUs:{
        position:'absolute',
        bottom:0,
        width:'100%',
        backgroundColor:'red'
    },
    container:{
        position:'relative',
        flex:1,
    }
});
export default HomeScreen;
