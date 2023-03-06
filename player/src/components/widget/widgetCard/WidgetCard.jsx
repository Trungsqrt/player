import WidgetEntry from "../widgetEntry/WidgetEntry";

import { IconContext } from "react-icons";
import { FiChevronRight } from "react-icons/fi";

import widCardStyles from "./WidgetCard.module.css";

export default function WidgetCard({ title, similar, featured, newRelease }) {
   console.log(
      "similar",
      similar,
      "featured",
      featured,
      "newRelease",
      newRelease
   );
   return (
      <div className={widCardStyles["widgetcard-body"]}>
         <p className={widCardStyles["widget-title"]}>{title}</p>
         {similar
            ? similar.map((artist) => (
                 <WidgetEntry
                    title={artist?.name}
                    subtitle={artist?.followers?.total + " Followers"}
                    image={artist?.images[2]?.url}
                 />
              ))
            : featured
            ? featured.map((playlist) => (
                 <WidgetEntry
                    title={playlist?.name}
                    subtitle={playlist?.tracks?.total + " Songs"}
                    image={playlist?.images[0]?.url}
                 />
              ))
            : newRelease
            ? newRelease.map((album) => (
                 <WidgetEntry
                    title={album?.name}
                    subtitle={album?.artists[0]?.name}
                    image={album?.images[2]?.url}
                 />
              ))
            : null}
         <div className={widCardStyles["widget-fade"]}>
            <div className={widCardStyles["fade-button"]}>
               <IconContext.Provider value={{ size: "24px", color: "#c4d0e3" }}>
                  <FiChevronRight />
               </IconContext.Provider>
            </div>
         </div>
      </div>
   );
}
