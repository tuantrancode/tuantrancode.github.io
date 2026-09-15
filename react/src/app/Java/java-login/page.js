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


      {/* ACCESS AND REFRESH TOKENS LIFECYCLE  */}
      <section>
        <h3 className='section-header' id='access-refresh-tokens-lifecycle'>Access and Refresh Tokens Lifecycle</h3>
        <figure>
           <a href="/assets/images/access-refresh-tokens-lifecycle.png" target="_blank" rel="noopener noreferrer">
              <img src="/assets/images/access-refresh-tokens-lifecycle.png" alt="access and refresh tokens lifecycle" style={{display: 'block', width: '100%', padding: '5px 0px'}}/>
           </a>
          <figcaption style={{ textAlign: "center", fontSize: "14px", marginTop: "6px" }}>Access and Refresh Tokens Lifecycle</figcaption>
        </figure>
        <ol>
          <li>User log in and receive access and refresh tokens</li>
          <li>User sends access token to get access to protected resources</li>
          <li>When access token expires, use the refresh token to obtain a new access token</li>
          <li>In order to get new refresh tokens, there are 2 ways to do so</li>
          <ul>
            <li>When receving the new access token, also receive a new refresh token alongside it and revoke the old refresh token</li>
            <ul>
              <li>Useful for the case that the refresh token is stolen, but more complex to implement</li>
            </ul>
            <li>When the refresh token is expired, have the user re-authenticate to obtain new tokens</li>
            <ul>
              <li>Simpler to implement, but if refresh token is stolen, it can be used for a longer period</li>
            </ul>
          </ul>
        </ol>

        <hr/>
      </section>


     {/* COOKIES */}

<section>
  <h3 className='section-header' id='cookies'>Cookies</h3>

  <p>
    Cookies are small pieces of data that a web server asks a browser to store.
    The browser automatically sends cookies back to the server with subsequent
    requests that match the cookie's rules. Cookies are commonly used to
    maintain authentication sessions, store user preferences, and track
    information between requests.
  </p>

  <p>
    For authentication, cookies are especially useful for storing tokens that
    should not be directly accessible to JavaScript. For example, an
    authentication system can store a refresh token in an <code>HttpOnly</code>
    cookie so that JavaScript running on the page cannot read the token.
  </p>

  <h4 className='sub-section-header'>Common Cookie Parameters</h4>

  <p>
    Cookies have several attributes that control when the browser stores the
    cookie, when it sends the cookie, and whether client-side JavaScript can
    access it.
  </p>

  <table>
    <thead>
      <tr>
        <th>Parameter</th>
        <th>Purpose</th>
        <th>When to Use</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>HttpOnly</code></td>
        <td>
          Prevents JavaScript from reading the cookie through APIs such as
          <code>document.cookie</code>.
        </td>
        <td>
          Use for authentication tokens, session identifiers, and other
          sensitive values that should not be accessible to JavaScript.
        </td>
      </tr>
  <tr>
    <td><code>Secure</code></td>
    <td>
      Instructs the browser to send the cookie only over HTTPS connections.
    </td>
    <td>
      Use for sensitive cookies in production. This helps prevent the
      cookie from being transmitted over an unencrypted connection.
    </td>
  </tr>

  <tr>
    <td><code>SameSite</code></td>
    <td>
      Controls whether the browser sends the cookie with cross-site
      requests.
    </td>
    <td>
      Use <code>Strict</code> or <code>Lax</code> when possible to reduce
      CSRF risk. Use <code>None</code> when the cookie genuinely needs to
      be sent in cross-site requests.
    </td>
  </tr>

  <tr>
    <td><code>Path</code></td>
    <td>
      Limits the URL paths for which the browser sends the cookie.
    </td>
    <td>
      Use a narrow path when a cookie is only needed by specific
      endpoints. Use <code>/</code> when the cookie is needed throughout
      the application.
    </td>
  </tr>

  <tr>
    <td><code>Domain</code></td>
    <td>
      Controls which host or hosts can receive the cookie.
    </td>
    <td>
      Usually omit it when the cookie should only belong to the host that
      created it. Configure it when a cookie needs to be shared across
      appropriate subdomains.
    </td>
  </tr>

  <tr>
    <td><code>Max-Age</code></td>
    <td>
      Specifies how long the cookie should remain stored, in seconds.
    </td>
    <td>
      Use when you want a cookie to persist for a specific amount of time,
      such as the lifetime of a refresh token.
    </td>
  </tr>

  <tr>
    <td><code>Expires</code></td>
    <td>
      Specifies the exact date and time when the cookie expires.
    </td>
    <td>
      Useful when an exact expiration timestamp is needed. Modern
      applications commonly use <code>Max-Age</code> instead.
    </td>
  </tr>

  <tr>
    <td><code>Partitioned</code></td>
    <td>
      Allows a cookie to be stored in a partitioned cookie jar, limiting
      it to the context of the top-level site.
    </td>
    <td>
      Useful for certain embedded or third-party scenarios where
      cross-site functionality is required while limiting tracking and
      cross-site cookie exposure.
    </td>
  </tr>
</tbody>


  </table>

  <h4 className='sub-section-header'>Authentication Cookie Example</h4>

  <p>
    A refresh token can be stored in a cookie using several security
    attributes:
  </p>

<CodeBlock language='java'>{`return ResponseCookie
        .from(REFRESH_TOKEN_COOKIE, token)
        .httpOnly(true)
        .secure(true)
        .sameSite("Strict")
        .path("/auth")
        .maxAge(maxAgeSeconds)
        .build();`}</CodeBlock>

  <p>
    Each setting serves a different purpose:
  </p>

  <ul>
    <li>
      <strong><code>httpOnly(true)</code></strong> — Prevents JavaScript from
      reading the refresh token. This reduces the ability of an XSS attack to
      directly steal the token through <code>document.cookie</code>.
    </li>

```
<li>
  <strong><code>secure(true)</code></strong> — Causes the browser to send
  the cookie only over HTTPS. This should be enabled for authentication
  cookies in production.
</li>

<li>
  <strong><code>sameSite("Strict")</code></strong> — Prevents the browser
  from sending the cookie with most cross-site requests. This provides an
  additional defense against CSRF attacks.
</li>

<li>
  <strong><code>path("/auth")</code></strong> — Restricts the cookie to
  requests whose path begins with <code>/auth</code>. For example, the
  browser can send the cookie to <code>/auth/refresh</code>, but does not
  send it to unrelated paths such as <code>/api/account</code>.
</li>

<li>
  <strong><code>maxAge(maxAgeSeconds)</code></strong> — Controls how long
  the browser keeps the cookie. In this example, the cookie lifetime can
  be configured to match the refresh token's expiration time.
</li>
```

  </ul>

  <h4 className='sub-section-header'>Why Restrict the Cookie Path?</h4>

  <p>
    Authentication cookies do not necessarily need to be sent with every
    request. If a refresh token is only used by the refresh endpoint, the
    cookie can be restricted to the authentication path:
  </p>

<CodeBlock language='java'>{`.path("/auth")`}</CodeBlock>

  <p>
    For example, with a refresh endpoint at
    <code>/auth/refresh</code>, the browser can send the refresh-token cookie
    when refreshing the session. Requests such as
    <code>/api/account</code> do not need to receive the refresh token.
    Restricting the path therefore reduces the number of requests that carry
    the sensitive refresh token.
  </p>

  <h4 className='sub-section-header'>Common SameSite Values</h4>

  <ul>
    <li>
      <strong><code>Strict</code></strong> — Provides the strongest
      cross-site restriction. The cookie is generally only sent in
      same-site contexts. A good choice when your authentication architecture
      does not require cross-site cookie requests.
    </li>

<li>
  <strong><code>Lax</code></strong> — Allows the cookie in some
  cross-site navigation scenarios while still restricting many
  cross-site requests. This is commonly used as a balance between
  security and compatibility.
</li>

<li>
  <strong><code>None</code></strong> — Allows the cookie to be sent in
  cross-site contexts. When using <code>None</code>, browsers generally
  require <code>Secure</code> to also be enabled.
</li>
  </ul>

  <hr/>
</section>


      {/* LOGOUT  */}
      <section>
        <h3 className='section-header' id='logout'>Logout</h3>
        <p>To properly logout a user, you should invalidate their session and remove any authentication cookies.</p>
        <p>Removing a cookie is typically done by overwriting the cookie using the same name, path, and same-site attributes with an expired date.</p>
        <CodeBlock language='java'>{`
// Example of creating a cookie
ResponseCookie
  .from(ACCESS_TOKEN_COOKIE, token)
  .httpOnly(true)
  .secure(true)
  .sameSite("Lax")
  .path("/")
  .maxAge(maxAgeSeconds)
  .build();   

// Example of removing the cookie by overwriting it
ResponseCookie
  .from(ACCESS_TOKEN_COOKIE, "")
  .httpOnly(true)
  .secure(true)
  .sameSite("Lax")
  .path("/")
  .maxAge(0)
  .build();

// ================================================
// Example of invalidating a session

// Clear SecurityContext for current request
SecurityContextHolder.clearContext();

// Invalidate HTTP session
HttpSession session = request.getSession(false);
if (session != null) {
    session.invalidate();
}       `}</CodeBlock>

        <hr/>
      </section>

{/* HEADERS */}

<section>
  <h3 className='section-header' id='headers'>HTTP Security Headers</h3>

  <p>
    HTTP headers are metadata sent between the client and server with an HTTP
    request or response. They can provide information about the request,
    control browser behavior, and improve the security of a web application.
  </p>

  <p>
    Some headers are specifically designed to protect browsers from common
    attacks such as cross-site scripting (XSS), clickjacking, MIME-type
    confusion, and insecure network connections. Spring Security can
    automatically add several security-related response headers.
  </p>

  <h4 className='sub-section-header'>Common Security Headers</h4>

  <table>
    <thead>
      <tr>
        <th>Header</th>
        <th>Purpose</th>
        <th>When to Use</th>
      </tr>
    </thead>

<tbody>
  <tr>
    <td><code>Content-Security-Policy</code></td>
    <td>
      Controls which sources the browser is allowed to load resources from,
      such as JavaScript, CSS, images, fonts, and frames.
    </td>
    <td>
      Use to reduce the impact of XSS and other content-injection attacks.
      Start with a restrictive policy and explicitly allow only the
      resources your application requires.
    </td>
  </tr>

  <tr>
    <td><code>Strict-Transport-Security</code></td>
    <td>
      Tells the browser to use HTTPS for future requests to the domain.
    </td>
    <td>
      Use in production when the application is served entirely over
      HTTPS. Do not enable it carelessly on domains that still need HTTP.
    </td>
  </tr>

  <tr>
    <td><code>X-Content-Type-Options</code></td>
    <td>
      Prevents browsers from MIME-sniffing a response and interpreting it
      as a different content type.
    </td>
    <td>
      Commonly enabled with <code>nosniff</code> as a general security
      hardening measure.
    </td>
  </tr>

  <tr>
    <td><code>X-Frame-Options</code></td>
    <td>
      Controls whether the application can be displayed inside a
      <code>&lt;frame&gt;</code>, <code>&lt;iframe&gt;</code>, or
      <code>&lt;object&gt;</code>.
    </td>
    <td>
      Use to protect against clickjacking when your application does not
      need to be embedded by other websites.
    </td>
  </tr>

  <tr>
    <td><code>Referrer-Policy</code></td>
    <td>
      Controls how much referrer information the browser includes when
      navigating from one page to another.
    </td>
    <td>
      Use to prevent sensitive URL information from being unnecessarily
      exposed to other sites.
    </td>
  </tr>

  <tr>
    <td><code>Permissions-Policy</code></td>
    <td>
      Controls which browser features and APIs a page can use, such as the
      camera, microphone, geolocation, and fullscreen mode.
    </td>
    <td>
      Use to disable browser capabilities that your application does not
      need.
    </td>
  </tr>

  <tr>
    <td><code>Cache-Control</code></td>
    <td>
      Controls whether and how a response can be cached by browsers and
      intermediary caches.
    </td>
    <td>
      Use carefully for sensitive responses. Authentication-related or
      private data may need to be prevented from being stored in shared
      caches.
    </td>
  </tr>

  <tr>
    <td><code>Cross-Origin-Opener-Policy</code></td>
    <td>
      Controls how a document's browsing context interacts with documents
      opened from other origins.
    </td>
    <td>
      Useful when stronger isolation between your application and
      cross-origin documents is required.
    </td>
  </tr>

  <tr>
    <td><code>Cross-Origin-Resource-Policy</code></td>
    <td>
      Controls which origins are allowed to load resources from your
      application.
    </td>
    <td>
      Useful for restricting cross-origin access to resources such as
      images, scripts, and other files.
    </td>
  </tr>
</tbody>

  </table>

  <h4 className='sub-section-header'>Content-Security-Policy</h4>

  <p>
    <code>Content-Security-Policy</code>, commonly called CSP, allows the
    server to specify which sources the browser can trust when loading
    content.
  </p>

  <p>
    For example, a simple policy might allow scripts only from the same origin:
  </p>

<CodeBlock language='http'>{`Content-Security-Policy: default-src 'self'`}</CodeBlock>

  <p>
    This tells the browser to use the application's own origin as the default
    allowed source for resources. A more complete policy can separately
    control scripts, styles, images, fonts, connections, and frames.
  </p>

  <p>
    CSP is particularly useful for reducing the impact of XSS because an
    injected script may be prevented from executing even if an attacker
    manages to inject HTML into a page.
  </p>

  <h4 className='sub-section-header'>Strict-Transport-Security</h4>

  <p>
    The <code>Strict-Transport-Security</code> header, also known as HSTS,
    tells a browser that the site should only be accessed using HTTPS for a
    specified period of time.
  </p>

<CodeBlock language='http'>{`Strict-Transport-Security: max-age=31536000`}</CodeBlock>

  <p>
    A commonly used production configuration also includes subdomains:
  </p>

<CodeBlock language='http'>{`Strict-Transport-Security: max-age=31536000; includeSubDomains`}</CodeBlock>

  <p>
    HSTS should generally be enabled only when the domain and its relevant
    subdomains are correctly configured for HTTPS. Once a browser receives
    the policy, it can automatically upgrade future HTTP requests to HTTPS.
  </p>

  <h4 className='sub-section-header'>X-Content-Type-Options</h4>

  <p>
    The <code>X-Content-Type-Options</code> header can prevent browsers from
    attempting to guess the content type of a response.
  </p>

<CodeBlock language='http'>{`X-Content-Type-Options: nosniff`}</CodeBlock>

  <p>
    This is a common security hardening header and is particularly useful for
    preventing browsers from interpreting resources as a different MIME type
    than the server declared.
  </p>

  <h4 className='sub-section-header'>X-Frame-Options</h4>

  <p>
    <code>X-Frame-Options</code> controls whether another page can embed your
    application in a frame. This can help protect against clickjacking.
  </p>

<CodeBlock language='http'>{`X-Frame-Options: DENY`}</CodeBlock>

  <p>
    <code>DENY</code> prevents the page from being displayed inside a frame.
    Another commonly used value is <code>SAMEORIGIN</code>, which allows the
    page to be framed by pages from the same origin.
  </p>

  <h4 className='sub-section-header'>Referrer-Policy</h4>

  <p>
    The <code>Referrer-Policy</code> header controls what information the
    browser includes in the <code>Referer</code> request header when navigating
    to another resource.
  </p>

<CodeBlock language='http'>{`Referrer-Policy: strict-origin-when-cross-origin`}</CodeBlock>

  <p>
    <code>strict-origin-when-cross-origin</code> is a common choice because it
    provides more limited information when making cross-origin requests while
    still allowing useful referrer information for same-origin requests.
  </p>

  <h4 className='sub-section-header'>Permissions-Policy</h4>

  <p>
    <code>Permissions-Policy</code> allows an application to control access to
    certain browser features.
  </p>

  <p>
    For example, an application that does not need the camera or microphone
    could restrict them:
  </p>

<CodeBlock language='http'>{`Permissions-Policy: camera=(), microphone=()`}</CodeBlock>

  <p>
    This reduces the browser capabilities available to the page and can also
    restrict capabilities for embedded content.
  </p>

  <h4 className='sub-section-header'>Cache-Control</h4>

  <p>
    <code>Cache-Control</code> controls how browsers and intermediary caches
    store and reuse HTTP responses.
  </p>

  <p>
    For a response containing highly sensitive information, an application
    may prevent caching:
  </p>

<CodeBlock language='http'>{`Cache-Control: no-store`}</CodeBlock>

  <p>
    <code>no-store</code> instructs caches not to store the response. This can
    be useful for responses containing sensitive authentication or account
    information.
  </p>

  <h4 className='sub-section-header'>Security Headers in Spring Security</h4>

  <p>
    Spring Security provides default security headers and allows additional
    headers to be configured through <code>HttpSecurity</code>.
  </p>

<CodeBlock language='java'>{`http
    .headers(headers -> headers
        .contentSecurityPolicy(csp -> csp
            .policyDirectives("default-src 'self'")
        )
        .frameOptions(frame -> frame
            .deny()
        )
    );`}</CodeBlock>

  <p>
    The exact headers and values should be based on the application's
    requirements. Security headers are not a replacement for protections such
    as proper input validation, output encoding, authentication,
    authorization, and CSRF protection. They provide an additional layer of
    browser-side security.
  </p>

  <hr/>
</section>


      </>
  )
};