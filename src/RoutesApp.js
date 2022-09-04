import { Routes, Route } from "react-router-dom"
import LoginButton from './components/LoginButton'
import { Auth0Provider } from "@auth0/auth0-react"
import App from './App'


function RoutesApp() {

  // const audience = process.env.REACT_APP_AUTH0_AUDIENCE
  const domain = process.env.REACT_APP_AUTH0_DOMAIN
  const clientId = process.env.REACT_APP_CLIENT_ID

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >

    <Routes>
      <Route exact path={"/login"} element={<LoginButton />} />
      <Route exact path='/' element={<App/>} />
    </Routes>
    </Auth0Provider>
  )
}

export default RoutesApp