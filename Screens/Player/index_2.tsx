import { useNavigation, useRoute } from "@react-navigation/native";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { VideoScreenProps } from "../../Interfaces/VideoScreen";
import Video from 'react-native-video';
// import VideoPlayer from 'react-native-video-controls';
import { useRef, useState } from "react";

const VideoScreen = () => {
    const route = useRoute<VideoScreenProps>()
    const navigation = useNavigation();
    const {id , url} = route.params;

    const [loading,setLoading] = useState(true);

return (
    <View style={style.container}>
        {loading?<Text style={style.text}>LOADING...</Text>:null}

        <Video
                source={{ uri: url }}
                fullscreenAutorotate

                rate={1.0}
                volume={1.0}
                controls
                fullscreen
                onLoad={()=>setLoading(false)}
                resizeMode="cover"
                style={style.video}

                />
    </View>
)
}

const style = StyleSheet.create({
    container:{
        flex: 1,
    },
    text:{
        color:'black'
    },
      video:{ width: Dimensions.get('window').width, height: Dimensions.get('window').height* (9 / 16) }
})

export default VideoScreen;
