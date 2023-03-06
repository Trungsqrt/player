import { useState, useRef, useEffect } from "react";

import ProgressCircle from "./progressCircle/ProgressCircle";
import WaveAnimation from "./waveAnimation/WaveAnimation";
import Controls from "./controls/Controls";

import playerStyles from "./AudioPlayer.module.css";

function AudioPlayer({ currentTrack, currentIndex, setCurrentIndex, total }) {
   const [isPlaying, setIsPlaying] = useState(false);
   const [trackProgress, setTrackProgress] = useState(0);

   // get url of the song in current index
   var audioSrc = total[currentIndex]?.track.preview_url;

   // initial a audio with first song in list
   const audioRef = useRef(new Audio(total[0]?.track.preview_url));

   const intervalRef = useRef();
   const isReady = useRef(false);

   // get duration time of the audio
   const { duration } = audioRef.current;

   // get current percentage progress of the audio
   const currentPercentage = duration ? (trackProgress / duration) * 100 : 0;

   // List artists list
   const artists = [];
   currentTrack?.album?.artists?.forEach((item) => {
      artists.push(item.name);
   });

   // add number 0 before number has 1 digit. 01, 02, 03, 04 ... 10
   const addZero = (n) => {
      return n > 9 ? "" + n : "0" + n;
   };

   const handleNext = () => {
      if (currentIndex < total.length - 1) {
         setCurrentIndex(currentIndex + 1);
      } else setCurrentIndex(0);
   };

   const handlePrev = () => {
      if (currentIndex - 1 < 0) setCurrentIndex(total.length - 1);
      else setCurrentIndex(currentIndex - 1);
   };

   // this function update progress time each 0.9s
   const startTimer = () => {
      clearInterval(intervalRef.current);

      intervalRef.current = setInterval(() => {
         if (audioRef.current.ended) {
            handleNext();
         } else {
            setTrackProgress(audioRef.current.currentTime);
         }
      }, [900]);
   };

   useEffect(() => {
      return () => {
         audioRef.current.pause();
         clearInterval(intervalRef.current);
      };
   }, []);

   useEffect(() => {
      if (audioRef.current.src) {
         if (isPlaying) {
            audioRef.current.play();
            startTimer();
         } else {
            clearInterval(intervalRef.current);
            audioRef.current.pause();
         }
      } else {
         if (isPlaying) {
            audioRef.current = new Audio(audioSrc);
            audioRef.current.play();
            startTimer();
         } else {
            clearInterval(intervalRef.current);
            audioRef.current.pause();
         }
      }
   }, [isPlaying]);

   useEffect(() => {
      audioRef.current.pause();
      audioRef.current = new Audio(audioSrc);

      setTrackProgress(audioRef.current.currentTime);

      if (isReady.current) {
         audioRef.current.play();
         setIsPlaying(true);
         startTimer();
      } else {
         isReady.current = true;
      }
   }, [currentIndex]);

   return (
      <div className={playerStyles["player-body"]}>
         {/* Progress circle */}
         <div className={playerStyles["player-left-body"]}>
            <ProgressCircle
               percentage={currentPercentage}
               isPlaying={true}
               image={currentTrack?.album?.images[0]?.url}
               size={270}
               color="var(--royal-blue)"
            />
         </div>
         <div className={playerStyles["player-right-body"]}>
            <div style={{ minHeight: "30%" }}>
               <p
                  className={playerStyles["song-title"]}
                  style={{ textAlign: "center" }}
               >
                  {currentTrack?.name}
               </p>
               <p
                  className={playerStyles["song-artist"]}
                  style={{ textAlign: "center" }}
               >
                  {artists.join(" | ")}
               </p>
            </div>
            <div className={playerStyles["player-right-bottom"]}>
               <div className={playerStyles["song-duration"]}>
                  <p className={playerStyles["duration"]}>
                     0:{addZero(Math.round(trackProgress))}
                  </p>
                  <WaveAnimation isPlaying={true} />
                  <p className={playerStyles["duration"]}>0:30</p>
               </div>

               {/* controls components */}
               <Controls
                  isPlaying={isPlaying}
                  setIsPlaying={setIsPlaying}
                  handleNext={handleNext}
                  handlePrev={handlePrev}
                  total={total}
               />
            </div>
         </div>
      </div>
   );
}

export default AudioPlayer;
