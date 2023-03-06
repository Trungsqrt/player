import { IconContext } from "react-icons";
import { FaPause } from "react-icons/fa";
import { IoPlaySkipBack, IoPlaySkipForward, IoPlay } from "react-icons/io5";

import controlStyles from "./Controls.module.css";

function Controls({ isPlaying, setIsPlaying, handleNext, handlePrev }) {
   return (
      <IconContext.Provider value={{ size: "20px", color: "#C4D0E3" }}>
         <div className={controlStyles["controls-wrapper"]}>
            <div className={controlStyles["action-btn"]} onClick={handlePrev}>
               <IoPlaySkipBack />
            </div>
            <div
               className={
                  isPlaying
                     ? `${controlStyles["play-pause-btn"]} ${controlStyles["active"]}`
                     : `${controlStyles["play-pause-btn"]}`
               }
               onClick={() => setIsPlaying(!isPlaying)}
            >
               {isPlaying ? <FaPause /> : <IoPlay />}
            </div>
            <div className={controlStyles["action-btn"]} onClick={handleNext}>
               <IoPlaySkipForward />
            </div>
         </div>
      </IconContext.Provider>
   );
}
export default Controls;
