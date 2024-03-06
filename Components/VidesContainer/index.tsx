import { FlatList, StyleSheet, Text, View } from "react-native";
import VideoItem from "./VideoItem";
import { useNavigation } from "@react-navigation/native";

interface Props{
    clicked:(id:number)=>void
    videos:Array<Object>
}
const VideoContainer = ({clicked,videos}:Props)=>{
    const navigation = useNavigation();
    return (<View style={style.container}>
        <FlatList
      data={videos}
      renderItem={({item})=>(
        <VideoItem item={item} onPress={()=>navigation.navigate('Videos',{id:item.id,url:item.url})} />
      )}

      keyExtractor={item => item.id.toString()}
      numColumns={2}
    />
    </View>)
}
const style = StyleSheet.create({
    container:{
        borderTopColor:'#eee',
        borderTopWidth:1,
    },

})

export default VideoContainer;
