import { useState, useRef } from "react";

import ProgressCircle from "./progressCircle/ProgressCircle";
import WaveAnimation from "./waveAnimation/WaveAnimation";
import Controls from "./controls/Controls";

import playerStyles from "./AudioPlayer.module.css";

function AudioPlayer({ currentTrack, currentIndex, setCurrentIndex, total }) {
   const [isPlaying, setIsPlaying] = useState(false);
   const [trackProgress, setTrackProgress] = useState(0);
   var audioSrc = total[currentIndex]?.track.preview_url;

   const audioRef = useRef(new Audio(total[0]?.track.preview_url));

   const intervalRef = useRef();
   const isReady = useRef(false);

   const { duration } = audioRef.current;
   const currentPercentage = duration ? (trackProgress / duration) * 100 : 0;

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

   const handleNext = () => {
      if (currentIndex < total.length - 1) {
         setCurrentIndex(currentIndex + 1);
      } else setCurrentIndex(0);
   };

   const handlePrev = () => {
      if (currentIndex - 1 < 0) setCurrentIndex(total.length - 1);
      else setCurrentIndex(currentIndex - 1);
   };

   // List artists list
   const artists = [];
   currentTrack?.album?.artists?.forEach((item) => {
      artists.push(item.name);
   });

   const addZero = (n) => {
      return n > 9 ? "" + n : "0" + n;
   };

   return (
      <div className={playerStyles["player-body"]}>
         {/* Progress circle */}
         <div className={playerStyles["player-left-body"]}>
            <ProgressCircle
               percentage={100}
               isPlaying={true}
               image={currentTrack?.album?.images[0]?.url}
               size={270}
               color="var(--royal-blue)"
            />
         </div>

         {/*  */}
         <div className={playerStyles["player-right-body"]}>
            <p className={playerStyles["song-title"]}>{currentTrack?.name}</p>
            <p className={playerStyles["song-artist"]}>{artists.join(" | ")}</p>
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
