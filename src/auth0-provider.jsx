// auth0-provider.js
import { Auth0Provider } from "@auth0/auth0-react";
import { authConfig } from "./auth0-config";
// import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';

const Auth0ProviderWithHistory = ({ children }) => {


  return (
    <Router>
    <Auth0Provider
      domain={authConfig.domain}
      clientId={authConfig.clientId}
      // redirectUri={window.location.origin}
      redirectUri="http://localhost:3000"
      
      useRefreshTokens
      cacheLocation="localstorage"

      onRedirectCallback={(state) =>
        window.history.replaceState(
          {},
          document.title,
          state && state.returnTo ? state.returnTo : window.location.pathname
        )
      }
      authorizationParams={{ redirect_uri: window.location.origin }} 
      
    >
      {children}
    </Auth0Provider>
    </Router>
  );
};

export default Auth0ProviderWithHistory;
