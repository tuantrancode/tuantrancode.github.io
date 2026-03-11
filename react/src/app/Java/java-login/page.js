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