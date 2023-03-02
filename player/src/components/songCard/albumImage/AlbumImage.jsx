import React from "react";
import albumImageStyles from "./AlbumImage.module.css";

export default function AlbumImage({ url }) {
   return (
      <div className={`${albumImageStyles.albumImage}`}>
         <img
            src={url}
            alt="album art"
            className={albumImageStyles["albumImage-art"]}
         />
      </div>
   );
}
