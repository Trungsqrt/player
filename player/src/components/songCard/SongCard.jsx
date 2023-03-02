import React from "react";
import cardStyles from "./SongCard.module.css";
import AlbumImage from "../songCard/albumImage/AlbumImage";
import AlbumInfo from "../songCard/albumInfo/AlbumInfo";

export default function SongCard({ album }) {
   return (
      <div className={cardStyles["songCard-body"]}>
         <AlbumImage url={album?.images[0]?.url} />
         <AlbumInfo album={album} />
      </div>
   );
}
