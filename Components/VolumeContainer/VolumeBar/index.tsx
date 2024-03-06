import React from 'react';
import Slider from '@react-native-community/slider';
import {View, Text, StyleSheet} from 'react-native';
interface Props {
    currentVolume: number;
    onSlideCapture: (volume:number) => void;
    onSlideComplete:()=>void;
  }


export const VolumeBar = ({
    currentVolume,
    onSlideCapture,
    onSlideComplete,

}:Props)=>{

        const handleVolumeChange = (e:number)=>{
            onSlideCapture(e);
        }


    return (
        <View style={styles.wrapper}>
        <Slider
          value={currentVolume}
          minimumValue={0}
          maximumValue={1}
          step={0.01}
          onValueChange={handleVolumeChange}
          onSlidingComplete={onSlideComplete}
          minimumTrackTintColor={'white'}
          maximumTrackTintColor={'white'}
          thumbTintColor={'#F44336'}
        />
      </View>
    )

}
const styles = StyleSheet.create({
    wrapper: {
      width:'30%',
      position:'absolute',
      top:5,
      left:30,
    },
  });
