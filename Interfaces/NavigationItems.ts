import { VideoItemType } from "./VideoItem";

export interface NavigationItem {
    id: number;
    name: string;
    videos: VideoItemType[]|null;
    isActive: boolean;
  }
