/* 
 * ----------------------------
 * my-app-config.ts - Atrium Ecommerce
 * ----------------------------
 */

export default {

  oidc: {
    clientId: '0oa9dio146kp37qJ65d7',
    issuer: 'https://dev-10892679.okta.com/oauth2/default',
    redirectUri: 'https://localhost:4200/login/callback',
    scopes: ['openid', 'profile', 'email']
  }
}
