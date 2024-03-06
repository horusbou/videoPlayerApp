import { navigationItems } from "./data";

export class Api{
    static getVideos = (searchedValue:string|number) => {
        if (typeof searchedValue === 'number') {
          return Api.getVideosByCountry(searchedValue);
        } else {
          return Api.filterVideosBySearchValue(searchedValue);
        }
      }

      static filterVideosBySearchValue = (searchedValue:string)=> {

        const filteredVideos = navigationItems.flatMap(country =>
            country.videos ? country.videos.filter(video => video.title.includes(searchedValue)) : []
          );
        return filteredVideos.length > 0 ? filteredVideos.filter(el=>el!==null) : null;

      }

      static getVideosByCountry = (selectedContryId:number) => {
        const country = navigationItems.find(el => el.id === selectedContryId);
        return country && country.videos ? country.videos : null;
      }
}
