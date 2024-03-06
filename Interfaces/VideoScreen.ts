import { RouteProp } from '@react-navigation/native';

export type VideoScreenArgs = {
    Videos: {
      id: number;
      url: string;
    };
  };
export type VideoScreenProps =  RouteProp<VideoScreenArgs, 'Videos'>
