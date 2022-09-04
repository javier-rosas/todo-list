import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from 'react-bootstrap/Button'

const LogoutButton = () => {
  const { logout } = useAuth0();

  const setUpLogout = () => {
    localStorage.removeItem("user_token");
    logout();
  }

  return (
    <Button onClick={() => setUpLogout()}>
      Log Out
    </Button>
  );
};

export default LogoutButton;