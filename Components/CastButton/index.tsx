import React from 'react'
import GoogleCast,{ CastButton, useRemoteMediaClient, } from 'react-native-google-cast'
interface Props{
    url:string;
}
export function CastToTV({url}:Props) {

  const client = useRemoteMediaClient()


  if (client) {
    client.loadMedia({
      mediaInfo: {
        contentUrl: url,
        contentType: 'video/mp4',
      },


    })
  }


  return <CastButton style={{ width: 24, height: 24, tintColor: 'white' }} />
}
