import { Routes, Route } from "react-router-dom"
import App from './App'
import LoginButton from './components/LoginButton'
import { Auth0Provider } from "@auth0/auth0-react"



function RoutesApp() {


  return (
    <Auth0Provider
      domain="dev-jfku1gen.us.auth0.com"
      clientId="7cDhHfVZb6P4NH98fpWIZlr3lccCpIkx"
      redirectUri={window.location.origin}
    >

    <Routes>
      <Route exact path={"/login"} element={<LoginButton />} />
      <Route exact path={"/"} element={<App />} />
    </Routes>

    </Auth0Provider>
  )
}

export default RoutesApp