import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';


const VideoRoom = () => {
  const {id} = useParams()
  const meeting = (element) => {
    const appID = 975587375;
    const serverSecret = "0f85632605a09152d5b5619b3af5db97";
    const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, id,  Date.now().toString(),  "Naveen");

       
     // Create instance object from Kit Token.
     const zp = ZegoUIKitPrebuilt.create(kitToken);
     zp.joinRoom({
     
      container: element,
      sharedLinks: [
        {
          name: 'Personal link',
          url:`http://http://localhost:5173/${id}`
        },
        ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },
    });
     
  }

  return (
    <div ref={meeting}></div>
  )
}

export default VideoRoom