import React from "react";

import progressStyle from "./ProgressCircle.module.css";
const PI = Math.PI;

// circle
const Circle = ({ color, percentage, size, strokeWidth }) => {
   // the radius of progress circle, fit with the size of element
   const radius = size / 2 - 10;

   //  calculate the perimeter of progress circle, -20 to disconnect the head and tail
   const circ = 2 * PI * radius - 20;

   /*
    percentage: percent of progress
    percent of stroke on max perimeter
    example p = 120; and percentage = 75, it's means the songs 75% played 
    but 75% of 120 not same 75% of 100
   */

   const strokePercent = ((100 - Math.round(percentage)) * circ) / 100;

   //  circ: ~length of a song

   return (
      <circle
         r={radius}
         cx="50%"
         cy="50%"
         fill="transparent"
         stroke={strokePercent !== circ ? color : ""}
         strokeWidth={strokeWidth}
         strokeDasharray={circ}
         strokeDashoffset={percentage ? strokePercent : 0}
         strokeLinecap="round"
      />
   );
};

function ProgressCircle({ percentage, isPlaying, size, color, image }) {
   return (
      <div>
         <svg width={size} height={size}>
            <g>
               {/* display max length of a song */}
               <Circle strokeWidth={"0.3rem"} color="#3B4F73" size={size} />

               {/* progressing of a song */}
               <Circle
                  strokeWidth={"0.5rem"}
                  color={color}
                  size={size}
                  percentage={percentage}
               />
            </g>
            {/* define element and use it at a later */}
            <defs>
               {/* vinyl disk */}
               <clipPath id="myCircle">
                  <circle cx="50%" cy="50%" r={size / 2 - 30} fill="#FFFFFF" />
               </clipPath>
               {/* song image */}
               <clipPath id="myInnerCircle">
                  <circle cx="50%" cy="50%" r={size / 2 - 60} fill="#FFFFFF" />
               </clipPath>
            </defs>

            {/* vinyl disk */}
            <image
               className={isPlaying ? progressStyle["active"] : ""}
               x={30}
               y={30}
               width={2 * (size / 2 - 30)}
               height={2 * (size / 2 - 30)}
               href="https://res.cloudinary.com/dhheb6iy3/image/upload/v1677995794/vinyl_dsgqjm.png"
               clipPath="url(#myCircle)"
            />
            {/* song image */}
            <image
               className={isPlaying ? progressStyle["active"] : ""}
               x={60}
               y={60}
               width={2 * (size / 2 - 60)}
               height={2 * (size / 2 - 60)}
               href={image}
               clipPath="url(#myInnerCircle)"
            />
         </svg>
      </div>
   );
}

export default ProgressCircle;
