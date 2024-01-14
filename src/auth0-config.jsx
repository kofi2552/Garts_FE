// auth0-config.js
const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;


export const authConfig = {
  domain,
  clientId,
  redirectUri: window.location.origin,
};
