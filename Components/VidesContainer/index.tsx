import { FlatList, StyleSheet, Text, View } from "react-native";
import { VideoItem } from "./VideoItem";
import { useNavigation } from "@react-navigation/native";
import { VideoItemType, StackNavigation } from "../../Interfaces";
import NoVideosMessage from "./NoVideoMsg";

interface Props{
    videos: VideoItemType[] | null;
}
export const VideoContainer = ({videos}:Props)=>{
    const navigation = useNavigation<StackNavigation>();

    const clickedVideo = (url:string)=>{
        navigation.navigate('Videos', {url})
    }

    if(videos===null)
        return <NoVideosMessage />;

    return (<View style={style.container}>
        <FlatList
      data={videos}
      renderItem={({item})=>(
        <VideoItem item={item} onPress={()=>clickedVideo(item.url)} />
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
