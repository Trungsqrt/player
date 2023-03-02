import React from "react";
import queueStyles from "./Queue.module.css";
export default function Queue({ tracks, setCurrentIndex }) {
   return (
      <div className={queueStyles["queue-container"]}>
         <div className={queueStyles["queue"]}>
            <p className={queueStyles["upNext"]}>Up Next</p>
            <div className={queueStyles["queue-list"]}>
               {tracks?.map((track, index) => (
                  <div
                     key={index + "key"}
                     className={queueStyles["queue-item"]}
                     onClick={() => setCurrentIndex(index)}
                  >
                     <p className={queueStyles["track-name"]}>
                        {track?.track?.name}
                     </p>
                     <p>0:30</p>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}
