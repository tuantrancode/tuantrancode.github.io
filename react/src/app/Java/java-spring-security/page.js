import CodeBlock from '@/components/shared/CodeBlock';

export const metadata = {
  title: 'Spring Security',
  description: 'Notes on Spring Security',
};

export default function JavaSpringSecurity() {
  return (
    <>
      {/* SPRING SECURITY  */}
      <section>
        <h3 className='section-header' id='spring-security'>Spring Security</h3>
        <p>Spring Security provides a robust framework for handling authorization in Spring applications.</p>
        <p>It is able to handle various authentication mechanisms like OAuth2, JWT, mTLS, OpenID Connect, Basic and custom authentication.</p>
        <p>There are also several authorization approaches to handle permissions such as roles, authorities, scopes, url-based authorization.</p>

        <hr/>
      </section>

      {/* SPRING APPLICATION FILE  */}
      <section>
        <h3 className='section-header' id='spring-application'>Spring Application File</h3>
        <p>Spring can be configured inside the <code>application.properties</code> or <code>application.yml</code> file.</p>
        <p><b><u>Top-Level Configurations</u></b></p>
        <ul>
          <li><code>spring</code> : hold configuration for spring application</li>
          <ul>
            <li><code>spring.application.name</code> : set the name of the spring application</li>
            <li><code>spring.datasource</code> : hold configuration for the data source (MySQL, PostgreSQL, etc.)</li>
            <li><code>spring.jpa</code> : hold configuration for JPA (Java Persistence API)</li>
            <li><code>spring.security</code> : hold configuration for Spring Security</li>
          </ul>
          <li><code>server</code> : hold configuration for the embedded server</li>
          <ul>
            <li><code>server.port</code> : set the port for the embedded server</li>
          </ul>
          <li><code>logging</code> : hold configuration for logging</li>
          <ul>
            <li><code>logging.level</code> : set the logging level for server. Default is <code>INFO</code>. <code>DEBUG</code> and <code>TRACE</code> are useful for debugging</li>
          </ul>
        </ul>
        <p>Sample <code>application.yml</code> file with Spring Data JPA and Spring Security</p>
        <ul>
            <li>Development and production configurations can be separated based on separate <code>application-dev.yml</code> and <code>application-prod.yml</code> files</li>
        </ul>
        <CodeBlock language='yaml'>{`
# application.yml
  spring:
    application:
      name: spring-security-sample

    datasource:
      username: \${POSTGRES_USER}
      password: \${POSTGRES_PASS}
      driver-class-name: org.postgresql.Driver

    jpa:
      hibernate:
        # Tell Hibernate to check if the entities mappings are compatible with the existing database instead of creating/modifying it
        ddl-auto: validate
      show-sql: true
      properties:
        hibernate:
          format_sql: true

    security:
      oauth2:
        client:
          registration:
            google:
              client-id: \${GOOGLE_CLIENT_ID}
              client-secret: \${GOOGLE_CLIENT_SECRET}
              scope:
                - openid
                - profile
                - email

  server:
    port: 8080  

  logging:
    level:
      org.springframework.security: INFO

# ============================================
# application-dev.yml
spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/spring_security_test

# ============================================
# application-prod.yml
spring:
  datasource:
    url: jdbc:postgresql://10.0.0.5:5432/spring_security_test
`}</CodeBlock>

        <hr/>
      </section>

       {/* PROJECT STRUCTURE  */}
      <section>
        <h3 className='section-header' id='project-structure'>Project Structure</h3>
        <p>Sample project structure for a Spring Security application:</p>
        <CodeBlock language='yaml'>{`
spring-security-sample/
│
├── pom.xml
│
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/
│   │   │       └── tuantran/
│   │   │           └── springsecuritysample/
│   │   │
│   │   │               ├── SpringSecuritySampleApplication.java
│   │   │               │
│   │   │               ├── config/
│   │   │               │   └── SecurityConfig.java
│   │   │               │
│   │   │               ├── controller/
│   │   │               │   └── HomeController.java
│   │   │               │
│   │   │               ├── entity/
│   │   │               │   ├── User.java
│   │   │               │   ├── Role.java
│   │   │               │   ├── ProviderAccount.java
│   │   │               │   ├── RefreshToken.java
│   │   │               │   └── ApiKey.java
│   │   │               │
│   │   │               ├── repository/
│   │   │               │   ├── UserRepository.java
│   │   │               │   ├── RoleRepository.java
│   │   │               │   ├── ProviderAccountRepository.java
│   │   │               │   ├── RefreshTokenRepository.java
│   │   │               │   └── ApiKeyRepository.java
│   │   │               │
│   │   │               └── service/
│   │   │                   └── OAuth2UserService.java
│   │   │
│   │   └── resources/
│   │       └── application.yml
│   │
│   └── test/
`}                  </CodeBlock>
        <hr/>
      </section>

      {/* SPRING SECURITY CONFIGURATION  */}
      <section>
        <h3 className='section-header' id='spring-config'>Spring Security Rules Configuration</h3>
        <p>Spring Security rules can be changed in a class that's been annotated with <code>@Configuration</code> and <code>@EnableMethodSecurity</code>.</p>
        <p>This class can implement the <code>SecurityFilterChain</code> interface to customize which endpoints need authentication and other security rules</p>
        <p>Sample configuration class</p>
        <CodeBlock language='java'>{`
@Configuration
@EnableMethodSecurity
public class SecurityConfig {

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http)
            throws Exception {

        // Security rules for the app
        ...

        return http.build();
    }
}        
`}</CodeBlock>

        <hr/>
      </section>

      {/*  @EnableMethodSecurity */}
      <section>
        <h3 className='section-header' id='method-security'>@EnableMethodSecurity</h3>
        <p>The class annotation <code>@EnableMethodSecurity</code> enables method-level security in the application and the use of method annotations on the controllers</p>
        <ul>
          <li><code>@PreAuthorize</code>: Controls access to methods based on the user's roles or other conditions before the method is invoked</li>
          <ul>
            <li>Example: <code>@PreAuthorize("hasRole('ADMIN')")</code>: only users with the 'ADMIN' role can invoke the method</li>
            <li>Example: <code>@PreAuthorize("hasAuthority('READ_USERS')")</code>: only users with the 'READ_USERS' authority can invoke the method</li>
          </ul>
          <li><code>@PostAuthorize</code>: Controls access to methods based on the user's roles or other conditions after the method is invoked</li>
          <li><code>@Secured</code>: Specifies a list of roles that are allowed to access a method</li>
          <li><code>@RolesAllowed</code>: Specifies a list of roles that are allowed to access a method (similar to @Secured)</li>
        </ul>
        <CodeBlock language='java'>{`
# SecurityConfig.java

@Configuration
@EnableMethodSecurity
public class SecurityConfig {
          ... 
}
// ===========================
# HomeController.java

@Controller
public class HomeController {

  @PreAuthorize("hasRole('ADMIN')")
  @GetMapping("/admin")
  public String adminPage() {
      return "Admin page";
  }

  @PreAuthorize("hasAuthority('READ_USERS')")
  public List<User> getUsers() {
      ...
  }

}
`}</CodeBlock>

        <hr/>
      </section>


       {/* SECURITY FILTER CHAIN  */}
      <section>
        <h3 className='section-header' id='security-filter-chain'>Security Filter Chain</h3>
        <p>The security filter chain is applied to all incoming HTTP requests to enforce security rules <b><u>BEFORE</u></b> sending the request to the controller</p>
        <CodeBlock language='java'>{`
# Conceptual Diagram of Security Filter Chain

Browser
   │
   │ GET /profile
   ▼
┌──────────────────────┐
│ Spring Security      │
│ Filter Chain         │
│                      │
│ Authentication       │
│ Authorization        │
│ CSRF                 │
│ OAuth2               │
│ Session              │
│ etc.                 │
└──────────┬───────────┘
           │
           ▼
      Controller      
`}</CodeBlock>
        <hr/>

        <h4 className='sub-section-header'>Basic Security Filter Chain Setup</h4>
        <CodeBlock language='java'>{`
@Bean
SecurityFilterChain securityFilterChain(HttpSecurity http)
      throws Exception {

    http
        .authorizeHttpRequests(auth -> auth
            .requestMatchers("/", "/error").permitAll()
            .anyRequest().authenticated()
        )
        .oauth2Login(Customizer.withDefaults())
        .logout(logout -> logout
            .logoutSuccessUrl("/")
        );
          

    return http.build();
}
`}</CodeBlock>
        <ul>
          <li><code>authorizeHttpRequests()</code>: Defines the authorization rules for incoming HTTP requests</li>
          <ul>
            <li><code>requestMatchers()</code>: Specifies the URL patterns to which the authorization rules apply</li>
            <li><code>permitAll()</code>: Allows access to the specified URL patterns without authentication</li>
            <ul>
              <li>Example: <code>requestMatchers("/", "/error").permitAll()</code> allow all users to access "/" and "/error" without authentication</li>
            </ul>
            <li><code>authenticated()</code>: Requires authentication for the specified URL patterns</li>
            <ul>
              <li>Example: <code>anyRequest().authenticated()</code> means all requests require authentication</li>
            </ul>
          </ul>
         
          <li><code>oauth2Login()</code>: Configures application to use OAuth2 login (Google, GitHub, X, etc.)</li>
          <ul>
            <li>Example: <code>oauth2Login(Customizer.withDefaults())</code> enables OAuth2 login with default settings</li>
          </ul>

          <li><code>logout()</code>: Configures the logout behavior of the application</li>
          <ul>
            <li>Example: <code>{`logout(logout -> logout.logoutSuccessUrl("/"))`}</code> redirects users to the home page after logging out</li>
          </ul>

        </ul>
        <hr/>


         <h4 className='sub-section-header'>Sample HTTP Request Rules</h4>
        <CodeBlock language='java'>{`
http
    .authorizeHttpRequests(auth -> auth
        .requestMatchers("/", "/error").permitAll()
        .requestMatchers("/api/public/**").permitAll()
        // Coarse authorization
        .requestMatchers("/admin/**").hasRole("ADMIN")
        // Fine-grained authorization
        .requestMatchers("/update/**").hasAuthority("SCOPE_user:write")
        .anyRequest().authenticated()
    )
`}</CodeBlock>
        <ul>
          <li><code>requestMatchers("/", "/error").permitAll()</code>: Allows access to the home and error pages without authentication</li>
          <li><code>requestMatchers("/api/public/**").permitAll()</code>: Permits all users to access public API endpoints</li>
          <li><code>requestMatchers("/admin/**").hasRole("ADMIN")</code>: Requires the user to have the "ADMIN" role to access admin endpoints</li>
          <li><code>anyRequest().authenticated()</code>: Requires authentication for all other requests</li>
        </ul>
        <hr/>

      <h4 className='sub-section-header'>Enabling CSRF Protection</h4>
      <p>Spring Security documentation on CSRF protection: <a href="https://docs.spring.io/spring-security/reference/servlet/exploits/csrf.html" target="_blank" rel="noopener noreferrer">CSRF Protection</a></p>
      <p>CSRF tokens generally last for the duration of the user's session, but an invalid CSRF token will be rejected by the server with a 403 Forbidden error</p>
      <ul>
        <li><code>.csrfTokenRepository()</code> : configures how to store, generate and read CSRF tokens </li>
        <ul>
          <li><code>CookieCsrfTokenRepository.withHttpOnlyFalse()</code>: Uses a cookie to store the CSRF token, with the HttpOnly flag set to false</li>
          <li><code>HttpSessionCsrfTokenRepository()</code>: Uses the HTTP session to store the CSRF token</li>
        </ul>
        <li><code>.csrfTokenRequestHandler()</code>: configures how Spring obtain CSRF token from incoming requests and exposes it to the response</li>
        <ul>
          <li><code>CsrfTokenRequestAttributeHandler()</code>: opt-out of BREACH protection and CSRF token won't be encoded</li>
          <li><code>XorCsrfTokenRequestAttributeHandler</code> : provides BREACH protection and makes the CSRF token available as an <code>HttpServletRequest </code> attribute called <code>_csrf</code></li>
        </ul>
        <li><code>ignoringRequestMatchers()</code>: Specifies which endpoints should be ignored for CSRF protection</li>
      </ul>
      <CodeBlock language='java'>{`
// Enable CSRF protection with a cookie-based CSRF token repository

http
    .csrf(csrf -> csrf
        .csrfTokenRepository(
              CookieCsrfTokenRepository.withHttpOnlyFalse()
         )
        .csrfTokenRequestHandler(new CsrfTokenRequestAttributeHandler())
        .ignoringRequestMatchers("/dev/**")
    )
    .authorizeHttpRequests(
    .....      
// ===================================================================
// Disable CSRF protection

http
    .csrf(csrf -> csrf.disable())
    .authorizeHttpRequests(
    .....

      `}</CodeBlock>  

      <hr/>
      </section>


        {/* Authentication Methods  */}
      <section>
        <h3 className='section-header' id='authentication-methods'>Authentication Methods</h3>
        <p>Spring security can handle a variety of authentication methods</p>
        <CodeBlock language='java'>{`
        http
                ...
                .httpBasic(Customizer.withDefaults());
                .formLogin(Customizer.withDefaults());
                .oauth2Login(Customizer.withDefaults());
                .oauth2ResourceServer(oauth2 ->
                        oauth2.jwt(Customizer.withDefaults())
                ); 
`}</CodeBlock>
        <ul>
          <li><code>httpBasic()</code>: enables login through credentials; useful for testing APIs, service-to-service communication</li>
          <ul>
            <li>Spring expects the client to send <code>Authorization: Basic base64(username:password)</code></li>
            <li>Example: <code>curl -u tuan@example.com:password http://localhost:8080/api/users</code></li>
          </ul>
          <li><code>formLogin()</code>: enables login through providing username and password</li>
          <li><code>oauth2Login()</code>: Enables OAuth2 login authentication</li>
          <ul>
            <li>A login mechanism for an interactive client</li>
            <li>Which OAuth2 providers are used are determined by the <code>application.yml</code> file</li>
            <CodeBlock language='yaml'>{`
    # application.yml       

    security:
      oauth2:
        client:
          registration:
            google:
              client-id: \${GOOGLE_CLIENT_ID}
              client-secret: \${GOOGLE_CLIENT_SECRET}
              scope:
                - openid
                - profile
                - email         
            `}</CodeBlock>
          </ul>
          <li><code>oauth2ResourceServer()</code>: expect the user has already been authenticated and will receive OAuth2/JWT access tokens; </li>
          <ul>
            <li>Spring expects the client to send <code>Authorization: Bearer &lt;access_token&gt;</code></li>
            <li>A token-validation mechanism for an API</li>
            <li>Typical Use: API receiving OAuth2 access tokens</li>
            <li>Unlike <code>oauth2login</code>, this method will not redirect user to a login screen but shows an error 401 message</li>
          </ul>
        </ul>
      
      <hr/>
      </section>

        {/* Multiple Authentication Methods  */}
      <section>
        <h3 className='section-header' id='multi-authentication-methods'>Multiple Authentication Methods</h3>
        <p>Sample <code>SecurityConfig.java</code> and <code>application.yml</code> setup for multiple authentication methods</p>
        <ul>
          <li>Users can pick Google or GitHub login based on the URL link</li>
          <ul>
            <li><code>{`<a href="/oauth2/authorization/google"> Login with Google </a>`}</code></li>
            <li><code>{`<a href="/oauth2/authorization/github"> Login with GitHub </a>`}</code></li>
          </ul>
        </ul>
        <CodeBlock language='java'>{`
# SecurityConfig.java
@Bean
SecurityFilterChain securityFilterChain(HttpSecurity http)
      throws Exception {

        http
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/", "/error").permitAll()
                .anyRequest().authenticated()
            )

            // Username/password login
            .formLogin(Customizer.withDefaults());

            // Google + GitHub OAuth2 login
            .oauth2Login(Customizer.withDefaults())

            // JWT Bearer-token authentication
            .oauth2ResourceServer(oauth2 ->
                oauth2.jwt(Customizer.withDefaults())
            );

    return http.build();
}

# =====================================================
# application.yml

spring:
  security:
    oauth2:
      client:

        registration:
          google:
            # /oauth2/authorization/google
            client-id: \${GOOGLE_CLIENT_ID}
            client-secret: \${GOOGLE_CLIENT_SECRET}
            scope:
              - openid
              - profile
              - email

          github:
            # /oauth2/authorization/github
            provider: github
            client-id: \${GITHUB_CLIENT_ID}
            client-secret: \${GITHUB_CLIENT_SECRET}
            scope:
              - read:user
              - user:email
`}</CodeBlock>
      <hr/>
      </section>


      {/* GENERATING / VERIFYING JWT  */}
      <section>
        <h3 className='section-header' id='generating-verifying-jwt'>Generating and Verifying JWTs</h3>
        <p>Spring security has built in <code>JwtEncoder</code> and <code>JwtDecoder</code> for handling basic JWT generation and verification.</p>
        <ul>
          <li>An asymmetric key pair should be used to sign and verify the JWTs</li>
          <li>The private key is used to sign the JWT and the public key is used to verify it</li>
        </ul>
        <p><b>Important Classes</b></p>
        <ul>
          <li><code>application.yml</code> : contains the JWT configuration properties like issuer, audience, expiration, and key paths</li>
          <li><code>SecurityConfig.java</code> : configure the security filter chain</li>
          <li><code>JwtConfig.java</code> : configure JWT encoder and decoder with the public/private keys</li>
          <li><code>JwtService.java</code> : generate the JWT</li>
        </ul>
         <h4 className='sub-section-header'>Generating 2048-bit RSA Keys:</h4>
         <CodeBlock language='bash'>{`
// Private key
openssl genpkey \
  -algorithm RSA \
  -out jwt_private.pem \
  -pkeyopt rsa_keygen_bits:2048
  
// Public key
openssl rsa \
  -pubout \
  -in jwt_private.pem \
  -out jwt_public.pem
         `}</CodeBlock>
        
        <h4 className='sub-section-header'>Sample <code>application.yml</code> configuration:</h4>
        <CodeBlock language='java'>{`
spring:
  # Spring's configuration
  ...

app:
  jwt:
    issuer: http://localhost:8080
    audience: spring-security-sample
    access-token-expiration: 15m
    refresh-token-expiration: 30d
    private-key: file:/opt/spring/security/private.pem
    public-key: file:/opt/spring/security/public.pem  
`}</CodeBlock>
      <ul>
        <li><b><u>issuer</u></b>: the URL/hostname of the service that created and signed the JWT</li>
        <li><b><u>audience</u></b>: the intended audience of the JWT, usually the service that will consume the JWT</li>
        <li><b><u>access-token-expiration</u></b>: the expiration time for access tokens in seconds</li>
        <li><b><u>refresh-token-expiration</u></b>: the expiration time for refresh tokens in seconds</li>
        <li><b><u>private-key</u></b>: the ABSOLUTE path to the private key file for signing JWTs</li>
        <li><b><u>public-key</u></b>: the ABSOLUTE path to the public key file for verifying JWTs</li>
        <ul>
          <li>For Linux server: it can be <code>file:/opt/spring/security/public.pem</code></li>
          <li>During development, it can be <code>file:C:/Users/Name/.keys/jwt-public.pem</code></li>
        </ul>
      </ul>

      <h4 className='sub-section-header'>Sample JWT configuration class:</h4>
      <p>The JWT configuration class is responsible for building and configuring the JWT encoder and decoder; supplying them with the necessary keys and settings.</p>
        <CodeBlock language='java'>{`
@Configuration
public class JwtConfig {

    @Value("\${app.jwt.private-key}")
    private Resource privateKeyResource;

    @Value("\${app.jwt.public-key}")
    private Resource publicKeyResource;

    @Value("\${app.jwt.issuer}")
    private String issuer;

    @Bean
    RSAPrivateKey privateKey() throws IOException {

        return RsaKeyConverters
                .pkcs8()
                .convert(privateKeyResource.getInputStream());
    }

    @Bean
    RSAPublicKey publicKey() throws IOException {

        return RsaKeyConverters
                .x509()
                .convert(publicKeyResource.getInputStream());
    }

    @Bean
    JwtEncoder jwtEncoder(
            RSAPublicKey publicKey,
            RSAPrivateKey privateKey) {

        return NimbusJwtEncoder
                .withKeyPair(publicKey, privateKey)
                .algorithm(SignatureAlgorithm.RS256)
                .build();
    }

   @Bean
    JwtDecoder jwtDecoder(
            RSAPublicKey publicKey) {

        NimbusJwtDecoder decoder =
                NimbusJwtDecoder
                        .withPublicKey(publicKey)
                        .build();

        // Validate JWT issuer
        OAuth2TokenValidator<Jwt> issuerValidator =
                JwtValidators.createDefaultWithIssuer(issuer);

        // Validate JWT audience
        OAuth2TokenValidator<Jwt> audienceValidator =
                new JwtClaimValidator<List<String>>(
                        JwtClaimNames.AUD,
                        audiences -> audiences != null
                                && audiences.contains(audience)
                );

        // Consolidate the validators into a single validator
        OAuth2TokenValidator<Jwt> validator =
                new DelegatingOAuth2TokenValidator<>(
                        issuerValidator,
                        audienceValidator
                );

        decoder.setJwtValidator(validator);

        return decoder;
    }
}
`}</CodeBlock>

      <h4 className='sub-section-header'>Sample <code>SecurityConfig.java</code> setting:</h4>
        <CodeBlock language='java'>{`
@Configuration
@EnableMethodSecurity
public class SecurityConfig {

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http)
            throws Exception {

        http
                .csrf(csrf -> csrf.disable())

                .authorizeHttpRequests(auth -> auth
                        .requestMatchers(
                                "/",
                                "/auth/login",
                                "/auth/refresh"
                        ).permitAll()

                        .anyRequest().authenticated()
                )

                .oauth2ResourceServer(oauth2 ->
                        oauth2.jwt(Customizer.withDefaults())
                );

        return http.build();
    }
}
`}</CodeBlock>
        <ul>
          <li><code>{`.csrf(csrf -> csrf.disable()`}</code> : Disables CSRF protection for the application</li>
          <ul>
            <li>CSRF protection is not needed for stateless APIs and the access tokens / refresh tokens are not sent through cookies</li>
          </ul>
        </ul>

        <h4 className='sub-section-header'>Sample <code>JwtService.java</code> implementation:</h4>
        <p>The JWT service class is responsible for generating the JWT with the appropriate data contents using the configured encoder.</p>
        <CodeBlock language='java'>{`
@Service
public class JwtService {

    private final JwtEncoder jwtEncoder;

    @Value("\${app.jwt.issuer}")
    private String issuer;

    @Value("\${app.jwt.audience}")
    private String audience;

    @Value("\${app.jwt.access-token-expiration}")
    private long accessTokenExpiration;

    public JwtService(JwtEncoder jwtEncoder) {
        this.jwtEncoder = jwtEncoder;
    }

    public String generateAccessToken(User user) {

        Instant now = Instant.now();

        Role role = user.getRole();

        List<String> scopes = role.getScopes();

        JwtClaimsSet claims =
                JwtClaimsSet.builder()
                        .issuer(issuer)
                        .subject(user.getId().toString())
                        .audience(List.of(audience))
                        .issuedAt(now)
                        .expiresAt(
                                now.plusSeconds(accessTokenExpiration)
                        )
                        .claim("role", role.getName())
                        .claim("scope", String.join(" ", scopes))
                        .build();

        return jwtEncoder
                .encode(JwtEncoderParameters.from(claims))
                .getTokenValue();
    }
}`}</CodeBlock>

        <h4 className='sub-section-header'>Sample Controller to use JwtService and generate the JWT:</h4>
        <CodeBlock language='java'>{`
@RestController
public class DevController {

    private final JwtService jwtService;

    public DevController(JwtService jwtService) {
        this.jwtService = jwtService;
    }

    @PostMapping("/dev/token")
    public String generateToken() {

        Role role = new Role();

        role.setId(1);
        role.setName("User");
        role.setScopes(List.of("user:read", "user:write"));

        User user = new User();

        user.setId(UUID.randomUUID());

        user.setRole(role);

        user.setEmailVerified(true);

        return jwtService.generateAccessToken(user);
    }
}
        `}</CodeBlock>
        <hr/>
      </section>


        {/* RBAC */}
      <section>
        <h3 className='section-header' id='role-based-access-control'>Role-Based Access Control (RBAC)</h3>
        <p>Spring Security provides support for RBAC by restricting access to certain endpoints based on the user's role or scopes/permissions.</p>
        <p>The endpoints RBAC configuration is done in the <code>SecurityConfig</code> class, in the SecurityFilterChain bean.</p>
        <p>Additionally, Spring requires the user's claims be added to the JWT for Spring to know what role and permissions the user has.</p>
        <CodeBlock language='java'>{`
// SecurityConfig.java

 SecurityFilterChain securityFilterChain(
                ...
                .authorizeHttpRequests(auth -> auth
                        ...

                        // Coarse authorization
                        .requestMatchers("/admin/**").hasRole("ADMIN")
                        // Fine-grained authorization
                        .requestMatchers("/update/**").hasAuthority("SCOPE_user:write")

                        .anyRequest().authenticated()

// =================================================
// CookieJwtAuthenticationFilter

public class CookieJwtAuthenticationFilter extends OncePerRequestFilter {

          ...

          private void validateJwt(String accessToken) {

            Jwt jwt = jwtDecoder.decode(accessToken);
            String role = jwt.getClaimAsString("role");
            List<GrantedAuthority> authorities = new ArrayList<>();

            // Add role claims so Spring knows what role the user has
            // JWT content has:  "role": "ADMIN"
            if (role != null) {
                authorities.add(new SimpleGrantedAuthority("ROLE_" + role));
            }

            // Add scopes claim
            // JWT content has:  "scope": "user:read user:write"
            String scope = jwt.getClaimAsString("scope");
            if (scope != null) {
                Arrays.stream(scope.split(" "))
                  .filter(s -> !s.isBlank())
                  .map(s -> new SimpleGrantedAuthority(s))
                  .forEach(authorities::add);
            }

            JwtAuthenticationToken authentication = new JwtAuthenticationToken(jwt, authorities);

            SecurityContextHolder
                .getContext()
                .setAuthentication(authentication);
          }
        `}</CodeBlock>
        <ul>
          <li>In SecurityConfig.java, <code>.hasRole("ADMIN")</code> automatically adds the "ROLE_" prefix so the same prefix need to be added when creating the role claim</li>
          <li>In SecurityConfig.java, <code>.hasAuthority("user:write")</code> does NOT automatically add any prefix</li>
        </ul>

        <hr/>
      </section>


        {/* USERNAME / PASSWORD AUTH */}
      <section>
        <h3 className='section-header' id='username-password-auth'>Username / Password Authentication</h3>
        <p>Spring Security provides built-in support for username/password authentication through the <code>AuthenticationManager</code> and <code>UserDetailsService</code>.</p>
         
        <h4 className='sub-section-header'>Hashing Passwords</h4>
        <p>Spring security provides a <code>PasswordEncoder</code> class for securely hashing passwords. By default, it uses BCrypt for hashing.</p>
        <CodeBlock language='java'>{`
import org.springframework.security.crypto.password.PasswordEncoder;
...
String passwordHash =  passwordEncoder.encode(passwordString);        
        `}</CodeBlock>

         <h4 className='sub-section-header'>Authenticating Users</h4>
         <p>To authenticate users, Spring Security uses the <code>AuthenticationManager</code> class. The <code>PasswordEncoder</code> and <code>UserDetailsService</code> are given to the <code>AuthenticationManager</code> in <code>SecurityConfig</code> for handling authentication requests.</p>
         <p>The authentication process is initated by the <code>AuthenticationManager.authenticate(...)</code> method.</p>
         <ul>
          <li><code>authethenticationManager.authenticate()</code> will check if the password is correct</li>
         </ul>
         <p>After the password has been validated, any other authentication parameters can be retrieved and checked such as roles or account status.</p>
          <CodeBlock language='java'>{`
// SecurityConfig.java

@Configuration
@EnableMethodSecurity
public class SecurityConfig {

    @Bean
    SecurityFilterChain securityFilterChain( ... ) { ... }


    @Bean
    AuthenticationManager authenticationManager(
            UserDetailsService userDetailsService,
            PasswordEncoder passwordEncoder
    ) {

        DaoAuthenticationProvider provider = 
          new DaoAuthenticationProvider(userDetailsService);

        provider.setPasswordEncoder(passwordEncoder);

        return new ProviderManager(provider);
    }
} 

// ========================================================
// LoginService.java

public User login(...) {

    ...

    try {
          authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                      username,
                      password
                )
          );
    } catch (AuthenticationException ex) {
            throw new InvalidCredentialsException("Invalid username or password.");
    }

    User user = userRepository
            .findByEmailIgnoreCaseAndDeletedAtIsNullWithRole(email)
            .orElseThrow();

    if (!user.isEmailVerified()) {
        throw new VerifyEmailException("User email is not verified.");
    }

    return user;
}
}`}</CodeBlock>

      <h4 className='sub-section-header'>UserDetailsService</h4>
      <p>In order for Spring to know the password hash for the user, you need to implement a custom <code>UserDetailsService</code>.</p>
      <CodeBlock language='java'>{`
@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username)
            throws UsernameNotFoundException {

        ...
    
        User user = userRepository
              .findByUsername(username)
              .orElseThrow(() ->
                      new UsernameNotFoundException(
                                "User not found"
                      )
              );

        if (user.getPasswordHash() == null) {
            throw new UsernameNotFoundException(
                    "User did not register username and password."
            );
        }

        return org.springframework.security.core.userdetails.User
                .withUsername(user.getUsername())
                .password(user.getPasswordHash())
                .roles(user.getRole().getName())
                .build();
    }
}
      
      `}</CodeBlock>

        <hr/>
      </section>

       {/* Email Verification and SMTP */}
      <section>
        <h3 className='section-header' id='email-verification-and-smtp'>Email Verification and SMTP</h3>
        <p>Spring can send email verification links and other emails by configuring it with an SMTP service provider/server.</p>
      <h4 className='sub-section-header'>Dependency & Setup</h4>
      <CodeBlock language='java'>{`
// pom.xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-mail</artifactId>
</dependency>

// ======================================================
// application.yml
spring:
  mail:
    host: <smtp-server-host>
    port: 587
    username: \${SMTP_USERNAME}
    password: \${SMTP_KEY}
    protocol: smtp

    properties:
      mail:
        smtp:
          auth: true
          starttls:
            enable: true
            required: true

          connectiontimeout: 5000
          timeout: 5000
          writetimeout: 5000

app:
  auth:
    email-verification-token-expiration: 24h
    password-reset-token-expiration: 30m
  mail:
    from: no-reply@<hostname>
    from-name: <sender-name>

  frontend:
    url: http://localhost:8080
      `}</CodeBlock>

        <hr/>
      </section>

        // TODO: Add a section on testing against XSS attacks and security tips
        {/* TESTING AGAINST XSS ATTACKS */}
      <section>
        <h3 className='section-header' id='testing-against-xss-attacks'>Testing Against XSS Attacks</h3>

        <hr/>
      </section>


        {/* SECURITY TIPS */}
      <section>
        <h3 className='section-header' id='security-tips'>Security Tips</h3>
        <ul>
          <li>Use a valid OAuth 2 flow for authentication. Consider implementing 2-factor.</li>
          <li>Make sure your JWTs expire. Use refresh tokens, not long-lasting JWTs.</li>
          <li>Always use HTTPS.</li>
          <li>Authenticate <em>every single endpoint that involves user data</em>. The client should never be deciding access control (I once had a CTO interview me for a government job and HE was staggeringly wrong about this).</li>
          <li>Prefer same-origin if possible. Otherwise make sure your CORS setup is strict and limited.</li>
          <li>Obfuscate your user-facing error messages (which includes everything returned in your 400, 500, 401, etc.). I hate this because it makes debugging harder, but anyone trying to hack your system shouldn't know they're getting closer because your errors are super helpful explaining exactly what's wrong.</li>
          <li>If you're storing sessions, they should be in an encrypted DB (like Redis) and session IDs should be different on every login.</li>
          <li>Sanitize and validate all your inputs (SQL injections, XML, protect vs. XSS, etc.)</li>
          <li>Have JSON schemas you check on your incoming data. And don't f***ing rely on TypeScript to do this, TypeScript does not exist while the application is running. God I've had this argument so many times.</li>
          <li>Keep your libraries up to date.</li>
          <li>Use rate limiting and throttling.</li>
          <li>Cryptographically hash all passwords in your database. Encrypt all sensitive data.</li>
          <li>Escape any text value you're using from the DOM. For example, use <code>textContent</code> rather than <code>innerHTML</code> so you're not executing any HTML or JS they might edit your <code>&lt;div /&gt;</code> to have.</li>
        </ul>

        <hr/>
      </section>
    
      </>
  )
};