import { VideoItemType } from "./Interfaces/VideoItem";

const videos:VideoItemType[] = [
    { id: 1, title: 'Video 1', url: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' },
    { id: 2, title: 'Video 2', url: 'https://vjs.zencdn.net/v/oceans.mp4' },
    { id: 3, title: 'Video 3', url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
  ];

  export const navigationItems = [
    {
        id:1,
        name:'trending',
        videos,
        isActive:true
    },
    {
        id:2,
        name:'Morocco',
        videos:videos.filter(el=>el.id!=2),
        isActive:false
    },
    {
        id:3,
        name:'Algeria',
        videos:[...videos,...videos],
        isActive:false
    },
    {
        id:4,
        name:'Tunies',
        videos:videos.filter(el=>el.id!=1),
        isActive:false
    },

  ]
