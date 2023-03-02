import React from "react";
import { loginEndpoint } from "../../spotify";

import loginStyles from "./Login.module.css";

function Login() {
   return (
      <div className={loginStyles["login-page"]}>
         <a href={loginEndpoint}>
            <div className={loginStyles["login-btn"]}>LOG IN</div>
         </a>
      </div>
   );
}

export default Login;
