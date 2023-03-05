import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import apiClient from "../../spotify";

import playerStyles from "./Player.module.css";

import Queue from "../../components/queue/Queue";
import SongCard from "../../components/songCard/SongCard";
import AudioPlayer from "../../components/audioPlayer/AudioPlayer";

function Player() {
   const [tracks, setTracks] = useState([]);
   const [currentTrack, setCurrentTrack] = useState({});
   const [currentIndex, setCurrentIndex] = useState(0);

   const location = useLocation();

   useEffect(() => {
      if (location.state) {
         apiClient
            .get("playlists/" + location.state?.id + "/tracks")
            .then(({ data }) => {
               setTracks(data.items);
               setCurrentTrack(data.items[0].track);
            });
      }
   }, [location.state]);

   useEffect(() => {
      setCurrentTrack(tracks[currentIndex]?.track);
   }, [currentIndex, tracks]);

   return (
      <div className="screen-container flex">
         <div className={playerStyles["left-player-body"]}>
            <AudioPlayer
               currentTrack={currentTrack}
               currentIndex={currentIndex}
               setCurrentIndex={setCurrentIndex}
            />
         </div>
         <div className={playerStyles["right-player-body"]}>
            <SongCard album={currentTrack?.album} />
            <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
         </div>
      </div>
   );
}

export default Player;
