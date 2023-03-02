import React from "react";
import albumInfoStyles from "./AlbumInfo.module.css";

export default function AlbumInfo({ album }) {
   const artists = [];
   album?.artists?.forEach((element) => {
      artists.push(element.name);
   });

   return (
      <div className={albumInfoStyles["albumInfo-card"]}>
         <div className={albumInfoStyles["albumName-container"]}>
            <div className={albumInfoStyles["marquee"]}>
               <p>{album?.name + " - " + artists?.join(", ")}</p>
            </div>
         </div>
         <div className={albumInfoStyles["album-info"]}>
            <p>{`${album?.name} is an ${album?.album_type} by ${artists?.join(
               ", "
            )} with ${album?.total_tracks} track(s)`}</p>
         </div>
         <div className={albumInfoStyles["album-release"]}>
            <p>Release Date: {album?.release_date}</p>
         </div>
      </div>
   );
}
