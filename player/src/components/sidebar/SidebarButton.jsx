import React from "react";
import { IconContext } from "react-icons";
import { Link, useLocation } from "react-router-dom";
import sidebarButtonStyles from "./SidebarButton.module.css";

function SidebarButton(prop) {
   const { title, to, icon } = prop;

   const location = useLocation();
   const isActive = location.pathname === prop.to;
   const btnClass = isActive
      ? sidebarButtonStyles["btn-body--active"]
      : sidebarButtonStyles["btn-body"];

   return (
      <Link to={to}>
         <div className={btnClass}>
            <IconContext.Provider
               value={{ size: "18px", className: "btn-icon" }}
            >
               {icon}
               <p className={sidebarButtonStyles["btn-title"]}>{title}</p>
            </IconContext.Provider>
         </div>
      </Link>
   );
}

export default SidebarButton;
