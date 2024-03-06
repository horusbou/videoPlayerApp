// HomeScreen.js
import React, { useState } from 'react';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';
import Search from '../../Components/SearchBar';
import Section from '../../Components/Section';
import VideoContainer from '../../Components/VidesContainer';
import { useNavigation } from '@react-navigation/native';
import { navigationItems } from '../../data';

const HomeScreen = () => {
    const navigation = useNavigation();
    const clickedVideo = (id:number)=>{
        navigation.navigate('Video')
    }
    const navigateToDetails = ()=>{
        navigation.navigate('Details')
    }
    const [state,setState]=useState({
        selectedContryId:1
    });
    const selectCountry = (countryId:number)=>{
        setState({selectedContryId:countryId})
    }
  return (
    <View style={style.container}>
            <Search/>
            <Section selectCountry={selectCountry} />
            <VideoContainer clicked = {clickedVideo} videos={navigationItems.find(el=>el.id === state.selectedContryId)?.videos} />
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
