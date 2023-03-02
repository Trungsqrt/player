import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import libraryStyles from "./Library.module.css";
import "../../shared/globalStyles.css";
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";

import apiClient from "../../spotify";

function Library() {
   const [playlists, setPlaylists] = useState(null);

   const navigate = useNavigate();

   useEffect(() => {
      apiClient.get("me/playlists").then(function ({ data }) {
         setPlaylists(data.items);
      });
   }, []);

   const playPlaylist = (id) => {
      navigate("/player", { state: { id: id } });
   };

   return (
      <div className="screen-container">
         <div className={libraryStyles["library-body"]}>
            {playlists?.map((playlist) => (
               <div
                  className={libraryStyles["playlist-card"]}
                  key={playlist.id}
                  onClick={() => playPlaylist(playlist.id)}
               >
                  <img
                     src={playlist.images[0].url}
                     className={libraryStyles["playlist-image"]}
                     alt="Playlist-Art"
                  />
                  <p className={libraryStyles["playlist-title"]}>
                     {playlist.name}
                  </p>
                  <p className={libraryStyles["playlist-subtitle"]}>
                     {playlist.tracks.total} Songs
                  </p>
                  <div className={libraryStyles["playlist-fade"]}>
                     <IconContext.Provider
                        value={{ size: "50px", color: "#89CFEF" }}
                     >
                        <AiFillPlayCircle />
                     </IconContext.Provider>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}

export default Library;
