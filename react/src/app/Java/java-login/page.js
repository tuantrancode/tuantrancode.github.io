import CodeBlock from '@/components/shared/CodeBlock';

export const metadata = {
  title: 'Login and Authorization',
  description: 'Notes on Login and Authorization',
};

export default function JavaLogin() {
  return (
    <>
      {/* AUTHORIZATION  */}
      <section>
        <h3 className='section-header' id='authorization'>Authorization</h3>
        <p>Authorization is the process of determining what permissions a user has after they are authenticated. It handles user access and permission.</p>
        <p>Spring Security provides a robust framework for handling authorization in Spring applications.</p>
        <p>OAuth 2.0 is a widely used protocol for authorization in web applications.</p>

        <hr/>
      </section>

      {/* AUTHENTICATION  */}
      <section>
        <h3 className='section-header' id='authentication'>Authentication</h3>
        <p>Authentication is the process of verifying the identity of a user or system. Handles login and password verification.</p>
        <p>OpenID Connect adds a layer on top of OAuth 2.0 to provide authentication capabilities.</p>

        <hr/>
      </section>

       {/* OAuth Flow  */}
      <section>
        <h3 className='section-header' id='oauth-flow'>OAuth2 Flow</h3>
        <p><b>Overall</b>: {`Browser > NextAuth Server (Oauth2 client) > Provider > Spring App (Oauth2 resource center)`}</p>

        <h4 className='sub-section-header'>Sign-In Phase (Authentication - NextAuth Server)</h4>
        <ol>
          <li>Browser sign in</li>
          <li>NextAuth redirect user to Provider Oauth2</li>
          <ul>
            <li>The redirect url is provided by Providers when signing up for Oauth with them.</li>
          </ul>
          <li>User logs in</li>
          <li>Provider return to NextAuth with Authorization Code</li>
          <li>NextAuth exchange code with Provider for ID token (JWT), Provider access token, and Provider refresh token</li>
          <ul>
            <li>Here, the authorization code is consumed and never used again</li>
            <li>Provider access token is only to call the provider's API on behalf of the user (Google Calendar, GitHub repos, etc)</li>
          </ul>
          <li>NextAuth sends ID token to Spring Server</li>
        </ol>

        <h4 className='sub-section-header'>Validating Token (Authorization - Spring Server)</h4>
        <ol>
          <li>Spring obtain a public key from the provider JWKS endpoint</li>
          <ul>
            <li>Spring will cache the key to be reused and periodically refresh it/ or if validation fail</li>
          </ul>
          <li>Spring validate ID token</li>
          <ul>
            <li>Check signature using provider's JWKS public key</li>
            <li>Check iss (issuer) matches your Provider</li>
            <li>Check aud (audience) matches your client ID (client ID obtained from provider when signing your app up for Oauth)</li>
            <li>Check exp (expiry) - token not expired</li>
            <li>The ID token is not needed anymore</li>
          </ul>
          <li>Spring create/find user in DB</li>
          <li>Spring create its own JWT token and refresh token</li>
          <ul>
            <li>The refresh token would be saved in DB</li>
          </ul>
          <li>Spring returns user data, Spring JWT token, and the refresh token (secret) to browser</li>
        </ol>
        
        <h4 className='sub-section-header'>Refreshing JWT Token</h4>
        <ol>
          <li>All future Browser requests will have Spring JWT in the Bearer</li>
          <li>Spring validate its JWT with its own secret key</li>
          <ul>
            <li>If JWT expired, browser sends another request along with refresh token,
              and Spring use refresh token to validate with token in DB and if it's expired, redirect the user to log-in screen
            </li>
          </ul>
        </ol>

        <h4 className='sub-section-header'>Notes</h4>
        <ul>
          <li>JWT are usually short-lived (5-60m) b/c they can NOT be manually revoked, but they are stateless can be verified w/o DB so scalable</li>
          <li>Session tokens are longer-lived b/c they need to be checked against the DB on every request, but they're harder to scale</li>
        </ul>

        <hr/>
      </section>

      {/* AUTHORIZATION SERVER  */}
      <section>
        <h3 className='section-header' id='authorization-server'>Authorization Server</h3>
        <p>An authorization server is a component that handles both authentication and authorization, and create an access token and ID token for the user</p>
        <ul>
            <li>Access tokens are used to access protected resources (API access)</li>
            <li>ID tokens (JWT - JSON Web Tokens) are used to identify the user</li>
        </ul>
        <p>Authorization Solutions:</p>
        <ul>
            <li>Open-Source / Free: (requires you to host and manage the service)</li>
            <ul>
                <li>Keycloak</li>
                <li>NextAuth.js</li>
            </ul>
            <li>Cloud-based:</li>
            <ul>
                <li>Auth0</li>
                <li>Okta</li>
                <li>Amazon Cognito</li>
                <li>Clerk</li>
            </ul>
        </ul>
        <hr/>
      </section>

    
      </>
  )
};