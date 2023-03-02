import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Library from "../library/Library";
import Feed from "../feed/Feed";
import Player from "../player/Player";
import Favourite from "../favourite/Favourite";
import Trending from "../trending/Trending";
import Sidebar from "../../components/sidebar/Sidebar";
import Login from "../auth/Login";
import { setClientToken } from "../../spotify";

import homeStyles from "./Homepage.module.css";

function Homepage() {
   const [token, setToken] = useState("");

   useEffect(() => {
      const token = window.localStorage.getItem("token");
      // Get the hash that apprears in the searchbar after login
      const hash = window.location.hash;
      // Clear the hash for security
      window.location.hash = "";

      // assign token to localStorage
      if (!token && hash) {
         // Split to get only token
         const _token = hash.split("&")[0].split("=")[1];
         window.localStorage.setItem("token", _token);
         setToken(_token);
         setClientToken(_token);
      } else {
         setToken(token);
         setClientToken(token);
      }
   }, []);

   return (
      <>
         {token ? (
            <Router>
               <div className={`${homeStyles[`main-body`]} `}>
                  <Sidebar />
                  <Routes>
                     <Route path="/" element={<Library />} />
                     <Route path="/feed" element={<Feed />} />
                     <Route path="/player" element={<Player />} />
                     <Route path="/favourite" element={<Favourite />} />
                     <Route path="/trending" element={<Trending />} />
                  </Routes>
               </div>
            </Router>
         ) : (
            <Login />
         )}
      </>
   );
}

export default Homepage;
