import { NavigationItem,VideoItemType } from "./Interfaces";

const videos:VideoItemType[][] = [
    [
        { id: 1, title: 'Big Buck', url: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' },
        { id: 2, title: 'Ocean Waves', url: 'https://vjs.zencdn.net/v/oceans.mp4' },
        { id: 3, title: 'Giant Rabbit', url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }
      ],
      [
        { id: 4, title: 'Speed Car', url: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' },
        { id: 5, title: 'Sunset Beach', url: 'https://vjs.zencdn.net/v/oceans.mp4' },
        { id: 6, title: 'Funny Cat', url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }
      ],
      [
        { id: 7, title: 'Skydiving Adventure', url: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' },
        { id: 8, title: 'Mountain Trek', url: 'https://vjs.zencdn.net/v/oceans.mp4' },
        { id: 9, title: 'Cooking Recipe', url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }
      ],
    ];

  export const navigationItems:NavigationItem[] = [
    {
        id:1,
        name:'Trending',
        videos:videos[0],
        isActive:true
    },
    {
        id:2,
        name:'Morocco',
        videos:videos[1],
        isActive:false
    },
    {
        id:3,
        name:'Algeria',
        videos: videos[2],
        isActive:false
    },
    {
        id:4,
        name:'Tunisia',
        videos:null,
        isActive:false
    },
  ]
