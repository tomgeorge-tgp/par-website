import React, { useEffect, useState } from "react";
import { ZegoExpressEngine } from "zego-express-engine-webrtc";
import "./style/videoConfR.css";


function VideoConfR() {
  const [isLocalVideoLarge, setIsLocalVideoLarge] = useState(false);
  const [isAudioOn, setIsAudioOn] = useState(true);
  const [isVideoOn, setIsVideoOn] = useState(true);

  const appID = 2102549254;
  const server = "9a7844d9203768dae821e8a88b9f43b4";

  const zg = new ZegoExpressEngine(appID, server);

  useEffect(() => {
    zg.on("roomStateChanged", (roomID, reason, errorCode, extendData) => {
      // Handle room state change events
    });

    zg.on("roomStreamUpdate", async (roomID, updateType, streamList, extendedData) => {
      if (updateType === "ADD") {
        const streamID = streamList[0].streamID;
        const remoteStream = await zg.startPlayingStream(streamID);
        const remoteView = zg.createRemoteStreamView(remoteStream);
        remoteView.play("remote-video");
      } else if (updateType === "DELETE") {
        // Handle stream deletion
      }
    });

    checkSystemCompatibility();
  }, []);

  async function checkSystemCompatibility() {
    try {
      const result = await zg.checkSystemRequirements();
      console.log(result);
    } catch (error) {
      console.log("Error:", error);
    }
  }

  let userID = "1000" + "_" + "t001";
  let userName = "user0001";
  let roomID = "0001";
  let token =
    "04AAAAAGRlyJgAEDA2OTJzcTluOXF3NXV3ZWMAsIBMMzx2R0nekExy8xGkm1Jqp0n4FbejWVPIkbG6dPjaP+DS/QPjVMk8ypHRwMR/uqaj5828kmOe2PsLe+UbnV6n2kIncK4k0Ax60aedw8r9ac/Q6cvMBafgA10li72L16qmfvGCktRsxl1th0lpuxeW/QhsK+VWZ+pzZzOWoaSjWaS2ZMQ7Bw4xy3OqwyB35/LuqRWP0tSS/n9a1zTXArRDtSjnq0OzF2KnAv7yqLCy";

  useEffect(() => {
    zg.on("roomStateChanged", async (roomID, reason, errorCode, extendedData) => {});
    console.log("roomStateChanged here");

    zg.loginRoom(roomID, token, { userID, userName: userID }, { userUpdate: true }).then(async (result) => {
      if (result) {
        console.log("login success");

        const localStream = await zg.createStream();
        const localView = zg.createLocalStreamView(localStream);
        localView.play("local-video");

        let streamID = new Date().getTime().toString();
        zg.startPublishingStream(streamID, localStream);
      } else {
        console.log("not login success");
      }});
    }, []);
    
    const toggleVideoSize = () => {
    setIsLocalVideoLarge((prev) => !prev);
    };
    
    const toggleAudio = () => {
    setIsAudioOn((prev) => !prev);
    zg.muteMicrophone(!isAudioOn);
    };
    
    const toggleVideo = () => {
    setIsVideoOn((prev) => !prev);
    console.log("isVideo",!isVideoOn);
    zg.enableCamera(!isVideoOn);

    };
    
    const endSession = () => {
    // Add functionality to end the session
    zg.logoutRoom(roomID)

    };
    
    return (
    <>
    <h1>Zego RTC Video Call</h1>
    <div className="video-wrapper">
    <h4>Local video</h4>
    <h4>Remote video</h4>
    <div
    className={`local-video ${isLocalVideoLarge ? "large-video" : ""}`}
    id="local-video"
    onClick={toggleVideoSize}
    ></div>
    <div className="remote-video" id="remote-video"></div>
    <div className="controls">
    <button onClick={toggleAudio}>{isAudioOn ? "Mute Audio" : "Unmute Audio"}</button>
    <button onClick={toggleVideo}>{isVideoOn ? "Turn Off Video" : "Turn On Video"}</button>
    </div>
    <div className="end-session">
    <button onClick={endSession}>End Session</button>
    </div>
    </div>
    </>
    );
    }
    
    export default VideoConfR;
    
    
   




















// // import { ZegoExpressEngine } from 'zego-express-engine-webrtc';
// // import "./style/videoConfR.css";
// // import React, { useEffect } from "react";

// // function VideoConfR() {
// //   const appID = 2102549254;
// //   const server = "9a7844d9203768dae821e8a88b9f43b4";
// //   const zg = new ZegoExpressEngine(appID, server);

// //   useEffect(() => {
// //     zg.on('roomStateChanged', (roomID, reason, errorCode, extendData) => {
// //       // Handle room state change events
// //     });

// //     zg.on('roomUserUpdate', (roomID, updateType, userList) => {
// //       // Handle user update events
// //     });

// //     zg.on('roomStreamUpdate', async (roomID, updateType, streamList, extendedData) => {
// //       if (updateType === 'ADD') {
// //         const streamID = streamList[0].streamID;
// //         const remoteStream = await zg.startPlayingStream(streamID);
// //         const remoteView = zg.createRemoteStreamView(remoteStream);
// //         remoteView.play("remote-video");
// //       } else if (updateType === 'DELETE') {
// //         // Handle stream deletion
// //       }
// //     });

// //     checkSystemCompatibility();
// //   }, []);

// //   async function checkSystemCompatibility() {
// //     try {
// //       const result = await zg.checkSystemRequirements();
// //       console.log(result);
// //       // Process the compatibility check result here

// //       if (result.webRTC) {
// //         console.log('WebRTC is supported');
// //       } else {
// //         console.log('WebRTC is not supported');
// //       }

// //       if (result.camera && result.microphone) {
// //         console.log('Camera and microphone are available');
// //       } else {
// //         console.log('Camera or microphone is not available');
// //       }

// //       console.log('Supported video codecs:', result.videoCodec);

// //       if (result.screenSharing) {
// //         console.log('Screen sharing is supported');
// //       } else {
// //         console.log('Screen sharing is not supported');
// //       }

// //       console.log('Error information:', result.errInfo);
// //     } catch (error) {
// //       console.log('Error:', error);
// //     }
// //   }

// //   async function startVideoPreview() {
// //     try {
// //       const localStream = await zg.createStream();
// //       const localView = zg.createLocalStreamView(localStream);
// //       localView.play("local-video");
// //       let streamID = new Date().getTime().toString();
// //       zg.startPublishingStream(streamID, localStream);
// //     } catch (error) {
// //       console.log('Error starting video preview:', error);
// //     }
// //   }

// //   return (
// //     <>
// //       <h1>Zego RTC Video Call</h1>
// //       <div className="video-wrapper">
// //         <h4>Local video</h4>
// //         <h4>Remote video</h4>
// //         <div className="local-video" id="local-video"></div>
// //         <div className="remote-video" id="remote-video"></div>
// //       </div>
// //     </>
// //   );
// // }

// // export default VideoConfR;










// import {ZegoExpressEngine} from 'zego-express-engine-webrtc'
// // import Util from 'your-util-library-path';
// import "./style/videoConfR.css"
// import React, { useEffect,useState } from "react"




// function VideoConfR() {
//     const [isLocalVideoLarge, setIsLocalVideoLarge] = useState(false);
//     const [isAudioOn, setIsAudioOn] = useState(true);
//     const [isVideoOn, setIsVideoOn] = useState(true);


//   const appID = 2102549254;
//   const server = "9a7844d9203768dae821e8a88b9f43b4";

//   // Instance initialization
//   const zg = new ZegoExpressEngine(appID, server);

//   useEffect(() => {
//     console.log("-------zg-----------",zg);

//     // Room status update callback
//     zg.on('roomStateChanged', (roomID, reason, errorCode, extendData) => {
//       // Handle room state change events
//     });

//     // Notification of users joining or leaving a room
//     zg.on('roomUserUpdate', (roomID, updateType, userList) => {
//       // Handle user update events
//     });

//     zg.on('roomStreamUpdate', async (roomID, updateType, streamList, extendedData) => {
//       // Handle stream update events
//     });

//     checkSystemCompatibility();
//   }, []);

//   async function checkSystemCompatibility() {
//     try {
//       const result = await zg.checkSystemRequirements();
//       console.log(result);
//       // Process the compatibility check result here

//       // Example: Check if WebRTC is supported
//     //   if (result.webRTC) {
//     //     console.log('WebRTC is supported');
//     //   } else {
//     //     console.log('WebRTC is not supported');
//     //   }

//     //   // Example: Check if camera and microphone are available
//     //   if (result.camera && result.microphone) {
//     //     console.log('Camera and microphone are available');
//     //   } else {
//     //     console.log('Camera or microphone is not available');
//     //   }

//     //   // Example: Check supported video codecs
//     //   console.log('Supported video codecs:', result.videoCodec);

//     //   // Example: Check if screen sharing is supported
//     //   if (result.screenSharing) {
//     //     console.log('Screen sharing is supported');
//     //   } else {
//     //     console.log('Screen sharing is not supported');
//     //   }

//     //   // Example: Access error information if present
//     //   console.log('Error information:', result.errInfo);
//     } catch (error) {
//       console.log('Error:', error);
//     }
//   }
//   // Log in to a room. If the login succeeds, `true` is returned.
// // The `roomUserUpdate` callback can be received only when `userUpdate` is set to `true`.

// let userID = "1000" + '_' +"t001";
// let userName = "user0001";
// let roomID = "0001";
// let token = "04AAAAAGRlyJgAEDA2OTJzcTluOXF3NXV3ZWMAsIBMMzx2R0nekExy8xGkm1Jqp0n4FbejWVPIkbG6dPjaP+DS/QPjVMk8ypHRwMR/uqaj5828kmOe2PsLe+UbnV6n2kIncK4k0Ax60aedw8r9ac/Q6cvMBafgA10li72L16qmfvGCktRsxl1th0lpuxeW/QhsK+VWZ+pzZzOWoaSjWaS2ZMQ7Bw4xy3OqwyB35/LuqRWP0tSS/n9a1zTXArRDtSjnq0OzF2KnAv7yqLCy";
// // To prevent yourself from missing any notification, listen for callback events such as user login or logout, room connection status updates, and stream publishing status updates before logging in to a room.
// zg.on('roomStateChanged', async (roomID, reason, errorCode, extendedData) => {

// })
// console.log("roomStateChanged here")
// zg.loginRoom(roomID, token, { userID, userName: userID }, { userUpdate: true }).then(async(result) => {
//      if (result == true) {
//         console.log("login success")
//         // Create a stream and start the preview.
//            // After calling the `createStream` method, you cannot perform subsequent operations until the ZEGOCLOUD server returns a streaming media object.
//            const localStream = await zg.createStream();
           
// //            //Start previewing the third-party media stream. 
// // previewVideo.srcObject = mediaStream;

// // // Use the third-party media stream as the video source to create a stream.
// // const stream = await zg.createStream({custom: {
// //             source: mediaStream
// //         }})
// //         previewVideo.srcObject = mediaStream;

// // // Use the third-party media stream as the video source to create a stream.
// // const stream = await zg.createStream({custom: {
// //             source: mediaStream
// //         }})

//            // Create a media stream player object to preview local streams.
//            const localView = zg.createLocalStreamView(localStream);
//            // Mount the player to a page. In the sample code, `local-video` indicates the DOM element ID of the player.
//            localView.play("local-video");

//            // Start to publish an audio and video stream to the ZEGOCLOUD audio and video cloud.
//            let streamID = new Date().getTime().toString();
//            zg.startPublishingStream(streamID, localStream)
//      }
//      else{
//         console.log("--------not login success ----------------")
//      }
// });
// // Stream status update callback
// zg.on('roomStreamUpdate', async (roomID, updateType, streamList, extendedData) => {
//     // When `updateType` is set to `ADD`, an audio and video stream is added, and you can call the `startPlayingStream` method to play the stream.
//     if (updateType == 'ADD') {
//         // When streams are added, play them.
//         // For the conciseness of the sample code, only the first stream in the list of newly added audio and video streams is played here. In a real service, it is recommended that you traverse the stream list to play each stream. 
//         const streamID = streamList[0].streamID;
//         // The stream list specified by `streamList` contains the ID of the corresponding stream.
//         const remoteStream = await zg.startPlayingStream(streamID);

//         // Create a media stream player object to play remote media streams.
//         const remoteView = zg.createRemoteStreamView(remoteStream);
//         // Mount the player to a page. In the sample code, `remote-video` indicates the DOM element ID of the player.
//         remoteView.play("remote-video");

//     } else if (updateType == 'DELETE') {
//         // When streams are deleted, stop playing them.
//     }
// });




// const toggleVideoSize = () => {
//   setIsLocalVideoLarge((prev) => !prev);
// };

// const toggleAudio = () => {
//   setIsAudioOn((prev) => !prev);
// };

// const toggleVideo = () => {
//   setIsVideoOn((prev) => !prev);
// };

// const endSession = () => {
//   // Add functionality to end the session
// };


//   return (
//     <>
//       <h1>Zego RTC Video Call</h1>
//       <div className="video-wrapper">
//         <h4>Local video</h4>
//         <h4>Remote video</h4>
//         <div
//          className={`local-video ${isLocalVideoLarge ? "large-video" : ""}`}
//           id="local-video"
//           onClick={toggleVideoSize}
//           ></div>
//       <div className="remote-video" id="remote-video"></div>
//       <div className="controls">
//           <button onClick={toggleAudio}>{isAudioOn ? "Mute Audio" : "Unmute Audio"}</button>
//           <button onClick={toggleVideo}>{isVideoOn ? "Turn Off Video" : "Turn On Video"}</button>
//         </div>
//         <div className="end-session">
//           <button onClick={endSession}>End Session</button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default VideoConfR;













