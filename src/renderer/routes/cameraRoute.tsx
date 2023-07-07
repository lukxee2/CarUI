import { Component } from 'react';
import Navbar from 'renderer/components/navbar/navbar';
import React, { useRef, useEffect, useState } from 'react';

export default function CameraRoute() {
    const videoRef = useRef(null);
    const photoRef = useRef(null);

    const [hasPhoto, setHasPhoto] = useState(false);

    const getVideo = () => {
      navigator.mediaDevices.getUserMedia({ width: 1920, height: 1080 })
      .then(stream => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      }).catch(err => {
        console.error(err);
      });
    }


    useEffect(() => {
      const getVideo = () => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: false, width: 1920, height: 1080 })
          .then(stream => {
            let video = videoRef.current;
            video.srcObject = stream;
            video.play();
          })
          .catch(err => {
            console.error(err);
          });
      };

      getVideo();

      return () => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: false, width: 1920, height: 1080 })
          .then(stream => {
            stream.getTracks().forEach(track => track.stop());
          })
          .catch(err => {
            console.error(err);
          });
      };
    }, [videoRef.current]);


  return (
    <main>
      <Navbar />
      <div className="camera">
        <video ref={videoRef}></video>
      </div>
      <div className={'result ' + (hasPhoto ? 'hasPhoto' : '')}>
        <canvas ref={photoRef}></canvas>
      </div>
    </main>
  );
}
