import React, { useState, useEffect } from "react";
import socketIoClient from 'socket.io-client'
const ENDPOINT = 'http://localhost/3000'
const connection = socketIoClient(ENDPOINT)

export default function Call() {
  //MND
  const constraints = { audio: true, video: { width: 400, height: 300 } };
  navigator.mediaDevices.getUserMedia(constraints)
  .then(function(mediaStream) {
    const video = document.querySelector('video');
    video.srcObject = mediaStream;
    video.onloadedmetadata = function(e) {
      video.play();
    };
  })
  .catch(function(err) { console.log(err.name + ": " + err.message); }); 
  
  return(
    <div className="video-section">
    <video></video>
    </div>
  );
}