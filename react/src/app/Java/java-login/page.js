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
        <p><b>Overall</b>: {`Browser > Spring/NextAuth Server (Oauth2 client) > Provider > Spring Server (Oauth2 resource center)`}</p>
        <CodeBlock>{`
Browser
  ↓
Spring /oauth2/authorization/google
  ↓
Google
  ↓
Spring /login/oauth2/code/google
  ↓
Spring JWT        
        `}</CodeBlock>

        <h4 className='sub-section-header'>Sign-In Phase (Authentication - Spring/NextAuth Server)</h4>
        <p>* Spring/NextAuth can act as the OAuth2 client to obtain the authorization code from the Provider (Google, GitHub, etc.)</p>
        <ol>
          <li>Browser sign in</li>
          <li>Spring redirect user to Provider Oauth2</li>
          <ul>
            <li>The redirect url is provided by Providers when signing up for Oauth with them.</li>
          </ul>
          <li>User logs in</li>
          <li>Provider return to Spring with Authorization Code</li>
          <li>Spring exchange code with Provider for ID token (JWT), Provider access token, and Provider refresh token</li>
          <ul>
            <li>Here, the authorization code is consumed and never used again</li>
            <li>Provider access token is only to call the provider's API on behalf of the user (Google Calendar, GitHub repos, etc)</li>
          </ul>
          <li>Spring sends ID token to Spring Server</li>
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


{/* AUTHENTICATION */}
<section>
  <h3 className="section-header" id="attack-routes">
    CSRF / BREACH / XSS Attacks
  </h3>

  <div className="security-section">

    {/* CSRF */}
    <article className="security-card">
       <h4 className='sub-section-header'>1. CSRF — Cross-Site Request Forgery</h4>

      <p>
        CSRF occurs when an attacker tricks an authenticated user's browser
        into sending a request to your application. This is especially
        important when authentication credentials are stored in cookies,
        because browsers automatically attach cookies to matching requests.
      </p>

      <h5>Attack route</h5>

      <pre>
{`Victim logs into your application (your-app.com)
        ↓
Browser stores authentication cookie
        ↓
Victim visits attacker.com
        ↓
attacker.com causes a request to your-app.com
        ↓
Browser automatically sends authentication cookie
        ↓
Your server sees an authenticated request
        ↓
Unauthorized action is performed`}
      </pre>

      <h5>Example</h5>

      <pre>
{`POST /api/account/email

Cookie: ACCESS_TOKEN=...

email=attacker@example.com`}
      </pre>

      <p>
        The attacker's website does not necessarily need to know the user's
        authentication cookie. The browser can send it automatically.
      </p>

      <h5>Protection</h5>

      <ul>
        <li>
          <strong>CSRF token:</strong> Require a secret value that the
          attacker's site cannot read and therefore cannot include in the
          request.
        </li>
        <li>
          <strong>SameSite cookies:</strong> Use <code>SameSite=Lax</code> or
          <code>SameSite=Strict</code> where compatible with your application.
        </li>
        <li>
          <strong>Origin / Referer validation:</strong> Reject state-changing
          requests coming from unexpected origins.
        </li>
        <li>
          <strong>Do not use GET for state-changing operations:</strong>
          GET requests should not perform actions such as deleting accounts
          or transferring money.
        </li>
      </ul>

      <h5>Tradeoffs</h5>

      <ul>
        <li>
          <strong>CSRF tokens:</strong> Strong protection, but require
          frontend/server coordination and additional request handling.
        </li>
        <li>
          <strong>SameSite:</strong> Simple and effective, but can interfere
          with cross-site authentication or applications that legitimately
          need cross-site cookies.
        </li>
        <li>
          <strong>Origin validation:</strong> Additional defense-in-depth,
          but requires correctly handling proxies, browser behavior, and
          legitimate origins.
        </li>
      </ul>

    </article>
    <hr/>


    {/* BREACH */}
    <article className="security-card">
      <h4 className='sub-section-header'>2. BREACH — Compression Side-Channel Attack</h4>

      <p>
        BREACH is a side-channel attack against applications that compress
        HTTP responses. If secrets are placed in the response body, an attacker can potentially infer the secret based on differences in compressed response sizes when request parameters are changed.
      </p>

      <h5>Attack route</h5>

      <pre>
{`Application response contains secret
        ↓
HTTP response is compressed
        ↓
Attacker can cause repeated requests
        ↓
Attacker varies input in the request
        ↓
Compression ratio changes depending on
whether attacker-controlled text matches
secret response data
        ↓
Response size leaks information
        ↓
Secret may eventually be inferred`}
      </pre>

      <p>
        The attacker generally does not directly read the secret. Instead,
        they observe a side channel such as compressed response length and
        use many measurements to infer it.
      </p>

      <h5>What can be leaked?</h5>

      <ul>
        <li>CSRF tokens</li>
        <li>Session identifiers</li>
        <li>Other secrets reflected in compressed responses</li>
      </ul>

      <h5>Protection</h5>

      <ul>
        <li>
          <strong>Disable compression:</strong> Avoid compressing responses
          that contain sensitive secrets.
        </li>
        <li>
          <strong>Separate secrets from attacker-controlled content:</strong>
          Do not place sensitive values in the same compressible response as
          attacker-controlled input.
        </li>
        <li>
          <strong>Add response padding:</strong> Make response sizes less
          predictable.
        </li>
        <li>
          <strong>Rotate secrets:</strong> Reduce the usefulness of a leaked
          value when practical.
        </li>
      </ul>

      <h5>Tradeoffs</h5>

      <ul>
        <li>
          <strong>Disable compression:</strong> Stronger protection but
          increases bandwidth usage and response size.
        </li>
        <li>
          <strong>Padding:</strong> Preserves compression but increases
          response size and implementation complexity.
        </li>
        <li>
          <strong>Response separation:</strong> Good architectural defense,
          but requires careful API/page design.
        </li>
      </ul>

      <div className="security-note">
        <strong>Important:</strong>
        <br />
        BREACH is primarily a concern when secrets appear in compressed HTTP
        responses together with attacker-controlled data. A CSRF token stored
        in a cookie is not automatically vulnerable simply because the
        application uses compression.
      </div>
    </article>
    <hr/>


    {/* XSS */}
    <article className="security-card">
      <h4 className='sub-section-header'>3. XSS — Cross-Site Scripting</h4>
      <p>
        XSS occurs when attacker-controlled JavaScript is executed in the
        context of your application's origin.
      </p>

      <h5>Attack route</h5>

      <pre>
{`Attacker injects malicious content
        ↓
Application renders the content as HTML/JavaScript
        ↓
Browser executes attacker's JavaScript
        ↓
Script runs with your application's origin
        ↓
Attacker can interact with the application
        ↓
Sensitive data or actions may be compromised`}
      </pre>

      <h5>Example</h5>

      <pre>
{`User submits:

<script>
  fetch('/api/account', {
    credentials: 'include'
  })
</script>`}
      </pre>

      <p>
        If the application incorrectly renders this as executable HTML,
        the browser executes the script as part of your application's
        security origin.
      </p>

      <h5>Why HttpOnly helps</h5>

      <p>
        If your authentication token is stored in an HttpOnly cookie,
        JavaScript cannot directly read the cookie.
      </p>

      <pre>
{`document.cookie
        ↓
Cannot read HttpOnly ACCESS_TOKEN`}
      </pre>

      <p>
        This prevents one common XSS objective: directly stealing the
        authentication token.
      </p>

      <p>
        However, HttpOnly does <strong>not</strong> make XSS harmless.
        Malicious JavaScript can still make requests from the user's
        browser using the user's existing authenticated session.
      </p>

      <h5>Protection</h5>

      <ul>
        <li>
          <strong>Output escaping:</strong> Treat user input as text rather
          than executable HTML.
        </li>
        <li>
          <strong>React's default escaping:</strong> Prefer normal JSX
          rendering over manually injecting HTML.
        </li>
        <li>
          <strong>Avoid <code>dangerouslySetInnerHTML</code>:</strong>
          Use it only when absolutely necessary and sanitize the HTML first.
        </li>
        <li>
          <strong>Content Security Policy (CSP):</strong> Restrict which
          scripts the browser is allowed to execute.
        </li>
        <li>
          <strong>HttpOnly cookies:</strong> Prevent JavaScript from directly
          reading authentication cookies.
        </li>
        <li>
          <strong>Input validation:</strong> Validate expected formats and
          reject inappropriate input, while remembering that validation
          should not replace output encoding.
        </li>
      </ul>

      <h5>Tradeoffs</h5>

      <ul>
        <li>
          <strong>Escaping:</strong> Low overhead, but developers must avoid
          unsafe rendering patterns.
        </li>
        <li>
          <strong>Sanitization:</strong> Allows controlled HTML but adds
          complexity and requires a trustworthy sanitizer.
        </li>
        <li>
          <strong>CSP:</strong> Excellent defense-in-depth, but can require
          changes to scripts, third-party libraries, analytics, and inline
          code.
        </li>
        <li>
          <strong>HttpOnly cookies:</strong> Greatly reduce token theft via
          JavaScript, but do not prevent an XSS payload from performing
          authenticated actions.
        </li>
      </ul>

      <div className="security-note">
        <strong>Recommended for this application:</strong>
        <br />
        HttpOnly authentication cookie + React's default escaping +
        strict CSP + careful handling of any HTML rendering.
      </div>
    </article>
    <hr/>


    {/* COMPARISON */}
    <article className="security-card">
      <h4 className='sub-section-header'>4. Attack vs. Defense Summary</h4>

      <table>
        <thead>
          <tr>
            <th>Attack</th>
            <th>Primary Goal</th>
            <th>Primary Defense</th>
            <th>Important Limitation</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>CSRF</td>
            <td>Make the victim perform an authenticated action</td>
            <td>CSRF token + SameSite cookies</td>
            <td>XSS can bypass many CSRF defenses</td>
          </tr>

          <tr>
            <td>BREACH</td>
            <td>Infer secrets through response compression</td>
            <td>Separate secrets from attacker input / disable compression</td>
            <td>Requires a usable compression side channel</td>
          </tr>

          <tr>
            <td>XSS</td>
            <td>Execute attacker-controlled JavaScript</td>
            <td>Output escaping + CSP + HttpOnly cookies</td>
            <td>HttpOnly does not stop authenticated actions</td>
          </tr>
        </tbody>
      </table>
    </article>
    <hr/>


    {/* ARCHITECTURE */}
    <article className="security-card">
      <h4 className='sub-section-header'>5. Recommended Authentication Architecture</h4>

      <pre>
{`                    Browser
                       │
             ┌─────────┴─────────┐
             │                   │
       ACCESS_TOKEN          XSRF-TOKEN
       HttpOnly cookie       JS-readable
             │                   │
             │                   │
             ▼                   ▼
       Authentication       CSRF protection
             │                   │
             └─────────┬─────────┘
                       ▼
                Spring Security
                       │
              ┌────────┴────────┐
              │                 │
        JWT validation      CSRF validation
              │                 │
              └────────┬────────┘
                       ▼
                  Controller`}
      </pre>

      <p>
        The important idea is that these defenses solve different problems.
        The JWT authenticates the user, the CSRF token protects cookie-based
        authentication from cross-site requests, and XSS protections prevent
        an attacker from executing JavaScript inside your application's
        origin.
      </p>
    </article>

  </div>

  <hr />
</section>


    
      </>
  )
};