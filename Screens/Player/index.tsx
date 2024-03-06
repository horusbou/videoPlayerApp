import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  TouchableWithoutFeedback,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import Video, {
  OnSeekData,
  OnLoadData,
  OnProgressData,
  TextTrackType,
} from 'react-native-video';
import Orientation from 'react-native-orientation-locker';
import {FullscreenClose, FullscreenOpen, SpeedRate, VolumeUp} from '../../assets/icons';
import {PlayerControls, ProgressBar} from '../../Components';
import { VideoScreenProps } from '../../Interfaces';
import { useRoute } from '@react-navigation/native';
import {CastToTV, VolumeBar, SpeedRateControler} from '../../Components';

interface State {
  fullscreen: boolean;
  play: boolean;
  currentTime: number;
  duration: number;
  showControls: boolean;
  showSpeedControls:boolean;
  showVolumeControls:boolean,
  speed:number;
  volume:number;
  url:string;
}

export const VideoPlayer: React.FC = () => {
  const videoRef = React.createRef<Video>();
  const route = useRoute<VideoScreenProps>()
    const {url} = route.params;

    const [loading,setLoading] = useState(true);
    const [state, setState] = useState<State>({
        fullscreen: false,
        play: false,
        currentTime: 0,
        duration: 0,
        showControls: true,
        showSpeedControls:false,
        showVolumeControls:false,
        speed:1,
        volume:0.5,
        url
    });

  const Loading = () => {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator style={styles.loadingIndicator} size="large" color="#0000ff" />
      </View>
    );
  };

  useEffect(() => {
    Orientation.addOrientationListener(handleOrientation);

    return () => {
      Orientation.removeOrientationListener(handleOrientation);
    };
  }, []);

    function handleSpeedRateControles(): void {
        setState(s=>({...s, showSpeedControls:!s.showSpeedControls}))
    }
    function handleSpeedRate(rate:number): void {
        setState(s=>({...s,speed:rate}));
        setState(s=>({...s, showSpeedControls:false}))
    }

    function handleVolumeControle(): void {
        setState(s=>({...s, showVolumeControls:!s.showVolumeControls}))
    }
    function hanldeVolume(volume:number): void {
        setState(s=>({...s, volume}))
    }


  return (
    <View style={styles.container}>
        {loading && <Loading/>}

      <TouchableWithoutFeedback onPress={showControls} >
        <View >
          <Video
            ref={videoRef}
            source={{
              uri:url,
            }}
            style={state.fullscreen ? styles.fullscreenVideo : styles.video}
            controls={false}
            resizeMode={'contain'}
            onLoad={onLoadEnd}
            onProgress={onProgress}
            onEnd={onEnd}
            paused={!state.play}
            rate={state.speed}
            volume={state.volume}
            selectedTextTrack={{type: 'index', value: 0}}
            textTracks={[
            {
                title: 'test',
                language: 'en',
                type: TextTrackType.VTT,
                uri:
                'https://brenopolanski.github.io/html5-video-webvtt-example/MIB2-subtitles-pt-BR.vtt',
            },
            ]}
          />
          {state.showControls && (
            <View style={styles.controlOverlay}>
                <TouchableOpacity style={styles.videoHeaderContainer}>
                    <TouchableOpacity
                        onPress={handleSpeedRateControles}
                        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
                        >
                        {state.showSpeedControls ? <SpeedRate fill={'white'} /> : <SpeedRate fill={'white'} />}
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={handleFullscreen}
                        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
                        >
                        {state.fullscreen ? <FullscreenClose /> : <FullscreenOpen />}
                    </TouchableOpacity>
                    {state.showSpeedControls?<SpeedRateControler handleSpeedRate={handleSpeedRate} />:null}
                </TouchableOpacity>
                <TouchableOpacity style={styles.castVolumeBox}>
                    <TouchableOpacity
                            onPress={handleVolumeControle}
                            hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
                            style={styles.volumeButton}>
                            <VolumeUp/>
                            {state.showVolumeControls?<VolumeBar onSlideComplete={handleShowVolumeControles}  currentVolume={state.volume} onSlideCapture={hanldeVolume}  />:null}
                    </TouchableOpacity>
                    <CastToTV url={state.url} />
                </TouchableOpacity>


              <PlayerControls
                onPlay={handlePlayPause}
                onPause={handlePlayPause}
                playing={state.play}
                showPreviousAndNext={false}
                showSkip={true}
                skipBackwards={skipBackward}
                skipForwards={skipForward}
              />
              <ProgressBar
                currentTime={state.currentTime}
                duration={state.duration > 0 ? state.duration : 0}
                onSlideStart={handlePlayPause}
                onSlideComplete={handlePlayPause}
                onSlideCapture={onSeek}
              />
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );

  function handleOrientation(orientation: string) {
    orientation === 'LANDSCAPE-LEFT' || orientation === 'LANDSCAPE-RIGHT'
      ? (setState(s => ({...s, fullscreen: true})), StatusBar.setHidden(true))
      : (setState(s => ({...s, fullscreen: false})),
        StatusBar.setHidden(false));
  }

  function handleFullscreen() {
    state.fullscreen
      ? Orientation.unlockAllOrientations()
      : Orientation.lockToLandscapeLeft();
  }
  function handleShowVolumeControles() {
    if(state.showVolumeControls){
        setTimeout(()=> setState({...state,showVolumeControls:false}),1000)
    }
  }

  function handlePlayPause() {
    if (state.play) {
      setState({...state, play: false, showControls: true});
      return;
    }

    setState({...state, play: true});
    setTimeout(() => setState(s => ({...s, showControls: false})), 2000);
  }

  function skipBackward() {
    if(videoRef.current)
        videoRef.current.seek(state.currentTime - 15);
    setState({...state, currentTime: state.currentTime - 15});
  }

  function skipForward() {
    if(videoRef.current)
        videoRef.current.seek(state.currentTime + 15);
    setState({...state, currentTime: state.currentTime + 15});
  }

  function onSeek(data: {seekTime: number}) {
    if(videoRef.current)
        videoRef.current.seek(data.seekTime);
    setState({...state, currentTime: data.seekTime});
  }

  function onLoadEnd(data: OnLoadData) {
    setState(s => ({
      ...s,
      duration: data.duration,
      currentTime: data.currentTime,
    }));
    setLoading(false);
  }

  function onProgress(data: OnProgressData) {
    setState(s => ({
      ...s,
      currentTime: data.currentTime,
    }));
  }

  function onEnd() {
    setState({...state, play: false});
    if(videoRef.current)
        videoRef.current.seek(0);
  }

  function showControls() {
    state.showControls
      ? setState({...state, showControls: false})
      : setState({...state, showControls: true});
  }

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebebeb',
    position:'relative'
  },
  loadingContainer:{
    flex: 1,
    position:'absolute',
    top:0,
    left:0,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    height:'100%',
    backgroundColor:'rgba(0, 0, 0, 0.5)',
    zIndex:10,
  },
  loadingIndicator:{

  },
  video: {
    height: Dimensions.get('window').width * (9 / 16),
    width: Dimensions.get('window').width,
    backgroundColor: 'black',
  },
  fullscreenVideo: {
    height: Dimensions.get('window').width,
    width: Dimensions.get('window').height,
    backgroundColor: 'black',
  },
  text: {
    marginTop: 30,
    marginHorizontal: 20,
    fontSize: 15,
    textAlign: 'justify',
  },
  videoHeaderContainer: {
    position:'relative',
    flex: 1,
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingLeft:10,
    paddingRight:10,
  },
  castVolumeBox:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingLeft:10,
    paddingRight:10,
  },
  volumeButton:{
    position:'relative',
    flex:1,
  },
  controlOverlay: {
    position: 'absolute',
    flex:1,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#000000c4',
    justifyContent: 'space-between',
  },
});
