import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {

  const { loginWithRedirect } = useAuth0()

  const onClick = () => {
    loginWithRedirect()
  }

  return (
  <div>
    <button onClick={() => onClick()}>Log In</button>
  </div>
  )
}

export default LoginButton