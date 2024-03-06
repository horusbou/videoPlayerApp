import { NavigationProp } from "@react-navigation/native";
interface VideoArgsList  {
    url:string;
}
type ScreenNames = "Home" | "Videos" | "Details";
export type RootStackParamList = {
    [key in ScreenNames]: key extends "Videos" ? VideoArgsList : undefined;
  };

  export type StackNavigation = NavigationProp<RootStackParamList>;
