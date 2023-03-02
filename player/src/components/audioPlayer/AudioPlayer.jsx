import { useState } from "react";

import ProgressCircle from "./progressCircle/ProgressCircle";
import WaveAnimation from "./waveAnimation/WaveAnimation";
import Controls from "./controls/Controls";

import playerStyles from "./AudioPlayer.module.css";

function AudioPlayer({ currentTrack }) {
   return (
      <div className={playerStyles["player-body"]}>
         <div className={playerStyles["player-left-body"]}>
            <ProgressCircle
               percentage={100}
               isPlaying={true}
               // image={currentTrack?.image[0]?.url}
               size={300}
               color="var(--royal-blue)"
            />
         </div>
      </div>
   );
}

export default AudioPlayer;
