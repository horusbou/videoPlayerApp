import { StyleSheet, Text, View,SafeAreaView, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import { VideoItemType } from "../../../Interfaces";
export const VideoItem = ({item,onPress}:{item:VideoItemType,onPress:()=>void})=>{
    return (<TouchableOpacity style={style.container} onPress={onPress}>
        <Text style={style.text}>{item.title}</Text>
      </TouchableOpacity>)

}
const style = StyleSheet.create({
    container: {
    flex: 1,
    margin: 10,
    padding: 50,
    backgroundColor: '#FFE4C9',
    alignItems: 'center',
    justifyContent: 'center',
    },
    text:{
        color:'black'
    }
})
