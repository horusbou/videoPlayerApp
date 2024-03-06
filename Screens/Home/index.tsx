// HomeScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';
import {Search,Section,VideoContainer} from '../../Components';
import { useNavigation } from '@react-navigation/native';
import { StackNavigation, VideoItemType } from '../../Interfaces';
import { Api } from '../../api';
interface Home{
    selectedContryId:number;
        searchedValue:string;
        videos:VideoItemType[]|null
}
const HomeScreen = () => {
    const [state,setState]=useState<Home>({
        selectedContryId:1,
        searchedValue:'',
        videos:null
    });


    useEffect(()=>{
        if(state.searchedValue.length>0)
            setState(s=>({...s , videos:Api.getVideos(state.searchedValue)}))
        else
            setState(s=>({...s , videos:Api.getVideos(state.selectedContryId)}))
    },[state.searchedValue,state.selectedContryId])

    const navigation = useNavigation<StackNavigation>();

    const navigateToDetails = ()=>{
        navigation.navigate('Details')
    }

    const selectCountry = (countryId:number)=>{
        setState(s=>({...s, selectedContryId:countryId,searchedValue:''}))
    }
    const handleSearch = (searchedValue:string)=>{
        setState(s=>({...s, searchedValue}))
    }




  return (
    <View style={style.container}>
            <Search searchedValue={state.searchedValue} handleSearch={handleSearch} />
            <Section selectCountry={selectCountry} />
            <VideoContainer videos={state.videos} />
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
