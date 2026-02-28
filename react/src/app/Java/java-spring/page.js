import CodeBlock from '@/components/shared/CodeBlock';

export const metadata = {
  title: 'Spring and Spring Boot',
  description: 'Notes on Spring and Spring Boot',
};

export default function Spring() {
  return (
    <>
      {/* Overview */}
      <section>
        <h2 className='page-header' id='overview'>
          Overview
        </h2>
        <p>
          Spring is the framework for building enterprise-level Java applications. Spring Boot is built on top of Spring
          to simplify development by automating configuration and deployment (using embedded Tomcat/Jetty)
        </p>
        <ul>
          <li>Spring Boot Doc: <a href="https://docs.spring.io/spring-boot/index.html">https://docs.spring.io/spring-boot/index.html</a></li>
          <li>
            <b>Bean</b> : same as a component
          </li>
          <li>
            <b>Dependency Injection (DI)</b> : process of wiring beans together like how component A depends on result
            of component B
          </li>
          <li>
            <b>Spring Application Context</b> : the container that create and maintain components and inject them into
            beans as needed
          </li>
          <li>
            <b>Controller</b> : responsible for fetching and processing data
          </li>
           <li>
            <b>Model</b> : object responsible for ferrying data between a controller and the view responsible for rendering it
          </li>
          <li>
            <b>View</b> : responsible for rendering data into HTML
          </li>
         
        </ul>
        <hr/>
        
        
        {/* BEAN AND @AUTOWIRED */}
        <h3 className='section-header' id='beanAndAutowired'>Bean and @Autowired</h3>
        <p>Beans are classes that have been labeled <code>@Component</code>, <code>@Service</code>, <code>@Repository</code>, <code>@Controller</code>, or etc.</p>
        <ul>
          <li>Spring will automatically create and manage those classes/beans on startup unless specified otherwise</li>
          <li>For any bean that needs another bean, use <code>@Autowired</code> annotation to inject the needed bean</li>
          <ul>
            <li>Reduces code to create and manage classes</li>
            <li><code>@Autowired</code>: can be omitted if there is only one constructor</li>
          </ul>
          <CodeBlock lang='java'>{`
@Service
public class UserService { } // Spring will create a new UserService() bean at startup
----------------------------------------------------------------------------
@Service
public class OrderService { // Spring will create a new OrderService(UserService) bean at startup
    private final UserService userService;

    @Autowired
    public OrderService(UserService userService) { // The required userService bean will be injected from what Spring created at startup 
        this.userService = userService;
    }
}
          `}</CodeBlock>
        </ul>

        <hr/>


        {/* SETUP */}
        <h3 className='section-header' id='setup'>
          Setup
        </h3>
        <h4 className='sub-section-header'>Starting New Project</h4>
        <ol>
          <li>
            In VS Code command palette type: <code>Spring Initializr: create Maven project</code> or{' '}
            <code>Spring Initializr: create Gradle project</code>{' '}
          </li>
          <li>Pick Spring Boot version</li>
          <li>Pick programming language</li>
          <li>
            Put in <b>group id</b> : identifier for organization or group in reverse domain name notation
          </li>
          <ul>
            <li>
              Examples: <code>com.google</code> or <code>io.github.tuan</code>
            </li>
          </ul>
          <li>
            Put in <b>artifact id</b> : name of your project or module (Ex: <code>taco-cloud</code>)
          </li>
          <li>Pick package type: .jar or .war files</li>
          <li>Pick Java version</li>
          <li>Add dependencies</li>
        </ol>

        <h4 className='sub-section-header'>Testing Project</h4>
        <ul>
          <li>
            To run the test classes on the app, use <code>./mvnw test</code> in the command line
          </li>
          <li>
            <code>./mvnw clean test -X</code> to get rid of leftover class files or incomptible versions from previous
            build
          </li>
          <ul>
            <li>
              <code>-X</code> is for debug mode
            </li>
          </ul>
        </ul>

        <h4 className='sub-section-header'>Running Project</h4>
        <ul>
          <li>
            To run the app, use <code>./mvnw spring-boot:run</code> in the command line
          </li>
          <li>Can also use the Spring Boot Dashboard to start and run test by clicking the play and globe icons</li>
          <li>
            Normally runs on <code>http://localhost:8080/</code>
          </li>
        </ul>

        <h4 className='sub-section-header'>Building Project</h4>
        <ul>
          <li>The app will be run from an executable .jar file</li>
          <li>
            In the command line, use <code>./mvnw package</code> to build the app into the <code>target/</code> folder
          </li>
          <li>
            In the command line, use <code>{`java -jar target/{appName}.jar`}</code> to run the .jar file
          </li>
        </ul>

        <h4 className='sub-section-header'>Deploying Project</h4>
        <p>Ch 18 of Spring in Action (Walls, C.)</p>
        <hr />
      </section>

      {/* Dependencies */}
      <section>
        <h3 className='section-header' id='dependencies'>
          Dependencies
        </h3>
        {/* <!-- CORE DEPENDENCIES --> */}
        <h4 className='sub-section-header'>Core Dependencies</h4>
        <ul>
          <li>
            <b>Spring Boot Starter Web</b> : adds REST API support using Spring MVC
            <ul>
              <li>Build controllers, handle HTTP requests/responses</li>
            </ul>
          </li>
          <li>
            <b>Spring Boot Starter Test</b> : includes JUnit, Mockito, and Spring Test
            <ul>
              <li>For unit and integration testing</li>
            </ul>
          </li>
          <li>
            <b>Spring Boot Starter Validation/ Validation I/O</b> : adds bean validation (JSR-380); <code>spring-boot-starter-validation</code>
            <ul>
              <li>Replace a bunch of if-else or switch-case statements to validate data</li>
              <li><code>@NotNull</code> : field annotation to make sure the field is not empty or null</li>
              <li><code>@NotBlank</code> : field annotation to make sure the field is not empty</li>
              <li><code>@Size(min=1, message="You must select at least 1 ingredient")</code> : field annotation to make sure the field is at least 1 in length and display the message if not</li>
              <li><code>@Pattern(regexp="", message="")</code> : field annotation to make sure the field matches the pattern</li>
              <li><code>@Digits(integer=3, fraction=0, message="")</code> : field annotation to make sure the field has 3 digits and is a whole number</li>
              <li><code>@CreditCardNumber(message="")</code> field annotation to make sure it's a valid credit card number using Luhn algorithm check</li>
              <li>
                Validate request data using <code>@Valid</code> in the controller method parameter
              </li>
              <CodeBlock lang='java'>{`
@Data
public class TacoOrder {

    @NotBlank(message = "Name is required")
    private String deliveryName;
}
--------------------------------

@PostMapping
public String processOrder(@Valid TacoOrder order, Errors errors, SessionStatus sessionStatus) {
`}</CodeBlock>
            </ul>
          </li>
          <li>
            <b>Lombok</b> : reduces boilerplate (getters, setters, constructors)
            <ul>
              <li>
                Site: <a href='https://projectlombok.org/'>https://projectlombok.org/</a>
              </li>
              <li>
                Lombok must be installed into IDE or else it will complain about missing getters/setters and methods
              </li>
              <ul>
                <li>
                  Comes with the <code>Extension Pack for Java</code> extension in VS Code
                </li>
              </ul>
              <li>Automatically generate getter/setter methods as well as equals(), hashCode(), toString(), etc</li>
              <li>
                <code>@Data</code> CLASS annotation: composite annotations for <code>@Getter</code> on all fields,{' '}
                <code>@Setter</code> on all <b>non-final</b> fields, <code>@ToString</code>,{' '}
                <code>@EqualsAndHashCode</code>, and <code>@RequiredArgsConstructor</code>
              </li>
                <li>
                  <code>@Getter</code> field annotation: automatically creates a getter method for the field
                </li>
                <li>
                  <code>@Setter</code> field annotation: automatically creates a getter method for the field
                </li>
                <li>
                  <code>@ToString</code> class annotation: automatically create a toString() method that has a format to
                  include class name, field names and values; configurable
                </li>
                <li>
                  <code>@EqualsAndHashCode</code> class annotation: equals() and hashCode() method
                </li>
                <ul>
                  <li>By default, uses all non-static, and non-transient fields, but configurable</li>
                </ul>
                <li>
                  <code>@RequiredArgsConstructor</code> class annotation: automatically generates a constructor with one
                  parameter for each field that is... <code>final</code>, but <b>not initialized</b> or that is
                  annotated with <code>@NonNull</code>
                </li>
            
            </ul>
          </li>
          <li>
            <b>Spring Boot DevTools</b> : enables auto-reload during development
            <ul>
              <li>
                Automatically restarts your app when code changes; mainly code in <code>src/main/</code> path
              </li>
              <ul>
                <li>Does NOT automatically restart when dependencies change</li>
              </ul>
              <li>
                Automatic browser refresh when browser-destined resources (such as templates, JS, stylesheets, and so
                on) change
              </li>
              <ul>
                <li>Requires a LiveReload plugin in the browsers to work (available in Chrome, Safari, and Firefox)</li>
              </ul>
              <li>Automatic disabling of template caches</li>
              <li>Built in H2 Console, if the H2 database is in use</li>
            </ul>
          </li>
        </ul>

        {/* <!-- DATABASE & PERSISTENCE DEPENDENCIES --> */}
        <h4 className='sub-section-header'>Database & Persistence Dependencies</h4>
        <ul>
          <li>
            <b>Spring Boot Starter Data JPA</b> : simplifies database access using JPA and Hibernate
            <ul>
              <li>
                For working with SQL databases using <code>@Entity</code>, <code>@Repository</code>
              </li>
            </ul>
          </li>
          <li>
            <b>Spring Boot Starter JDBC</b> : enables low-level database access with JDBC
            <ul>
              <li>Use for direct SQL execution or legacy DB connections</li>
            </ul>
          </li>
          <li>
            <b>Spring Boot Starter Data MongoDB</b> : provides integration with MongoDB
            <ul>
              <li>Use when working with NoSQL databases</li>
            </ul>
          </li>
          <li>
            <b>H2 Database</b> : lightweight in-memory database
            <ul>
              <li>Perfect for development and testing without external DB setup</li>
            </ul>
          </li>
          <li>
            <b>MySQL/PostgreSQL Driver</b> : adds database driver support
            <ul>
              <li>Used to connect your Spring Boot app to a relational database</li>
            </ul>
          </li>
           <li>
            <b>Spring Data Solr</b> : enables integration with Apache Solr search platform
            <ul>
              <li>Used to connect your Spring Boot app to a Solr server</li>
            </ul>
          </li>
        </ul>

        {/* <!-- SECURITY & AUTHENTICATION DEPENDENCIES --> */}
        <h4 className='sub-section-header'>Security & Authentication Dependencies</h4>
        <ul>
          <li>
            <b>Spring Boot Starter Security</b> : adds authentication and authorization features
            <ul>
              <li>Secure your routes, add login, and password encoding</li>
            </ul>
          </li>
          <li>
            <b>Spring Security OAuth2 Resource Server</b> : supports OAuth2 and JWT authentication
            <ul>
              <li>For token-based security in APIs</li>
            </ul>
          </li>
          <li>
            <b>Spring Security JWT</b> : manages JSON Web Tokens
            <ul>
              <li>Used for stateless authentication in REST APIs</li>
            </ul>
          </li>
        </ul>

        {/* <!-- API COMMUNICATION & SERIALIZATION DEPENDENCIES --> */}
        <h4 className='sub-section-header'>API Communication & Serialization</h4>
        <ul>
          <li>
            <b>Spring Boot Starter WebFlux</b> : supports reactive, non-blocking REST APIs
            <ul>
              <li>Use for async or high-concurrency applications</li>
            </ul>
          </li>
          <li>
            <b>Jackson Databind</b> : handles JSON serialization and deserialization
            <ul>
              <li>
                Automatically included in <code>spring-boot-starter-web</code>
              </li>
            </ul>
          </li>
          <li>
            <b>Spring Boot Starter WebClient</b> : allows REST calls to external APIs
            <ul>
              <li>
                Modern alternative to <code>RestTemplate</code>
              </li>
            </ul>
          </li>
        </ul>

        {/* <!-- UTILITY & TOOLING DEPENDENCIES --> */}
        <h4 className='sub-section-header'>Utility & Tooling Dependencies</h4>
        <ul>
          <li>
            <b>Spring Boot Actuator</b> : exposes health and metrics endpoints
            <ul>
              <li>Monitor and manage your application at runtime</li>
            </ul>
          </li>
          <li>
            <b>MapStruct</b> : helps map between objects (e.g., DTOs ↔ Entities)
            <ul>
              <li>Used for clean data transfer between layers</li>
            </ul>
          </li>
          <li>
            <b>ModelMapper</b> : alternative object-mapping library
            <ul>
              <li>Automatically converts between DTOs and entities</li>
            </ul>
          </li>
        </ul>

        {/* <!-- CLOUD, MESSAGING, & ADVANCED FEATURES --> */}
        <h4 className='sub-section-header'>Cloud, Messaging, & Advanced Features</h4>
        <ul>
          <li>
            <b>Spring Boot Starter Data Redis</b> : integrates with Redis for caching and data storage
            <ul>
              <li>Use for improving performance or distributed caching</li>
            </ul>
          </li>
          <li>
            <b>Spring Boot Starter AMQP</b> : supports message queues like RabbitMQ
            <ul>
              <li>Use for asynchronous communication between services</li>
            </ul>
          </li>
          <li>
            <b>Spring Cloud</b> : provides tools for microservices and distributed systems
            <ul>
              <li>Useful for service discovery, configuration, and resilience</li>
            </ul>
          </li>
          <li>
            <b>Spring Boot Starter Mail</b> : allows sending emails from your application
            <ul>
              <li>Use for notifications, password resets, etc.</li>
            </ul>
          </li>
        </ul>

        <hr />
      </section>

      {/* Project Structure */}
      <section>
        <h3 className='section-header' id='projectStructure'>
          Project Structre
        </h3>

        <ul>
          <li>
            <code>mvnw</code> and <code>mvnw.cmd</code> : Maven wrapper scripts to build the project even if Maven is
            not installed on the computer
          </li>
          <li>
            Build config file: <code>pom.xml</code> for Maven or <code>build.gradle</code> for Gradle
          </li>
          <ul>
            <li>Spring Boot version</li>
            <li>Properties</li>
            <li>Dependencies</li>
            <li>Plugins</li>
          </ul>
          <li>
            <code>src/main/java/</code> : Java source code
          </li>
          <ul>
            <li>
              <code>/groupId/artifactId/projectNameApplication.java</code> : Spring Boot main class that bootstraps the
              project
            </li>
            <ul>
              <li>
                Where main app starts and contains config for Spring Framework or the config can be placed in a separate
                configuration class using annotation <code>@Configuration</code>
              </li>
            </ul>
          </ul>
          <li>
            <code>src/test/java/</code> : test source code
          </li>
          <ul>
            <li>
              <code>/groupId/artifactId/projectNameApplicationTests.java</code> : simple test class to ensure Spring app
              context loads successfully
            </li>
          </ul>
          <li>
            <code>src/main/resources/</code> : static resources and config files (like{' '}
            <code>application.properties</code>)
          </li>
          <ul>
            <li>
              <code>/static/</code> : static content (images, stylesheets, JS)
            </li>
            <li>
              <code>/templates/</code> : template files to render content to browser
            </li>
            <li>
              <code>/application.properties</code> : config properties for the app and dependencies
              <ul><code>spring.application.name=taco-cloud</code> : set the name of the app</ul>
            </li>
          </ul>
          <li>
            <code>target/</code> or <code>build</code> : compiled output (auto-generated)
          </li>
        </ul>
        <hr />
      </section>

       {/* Spring CORE  */}
      <section>
        <h3 className='section-header' id='springCore'>
          Spring Core
        </h3>
         <ul>
          <li><code>@Component</code> : class annotation to mark the class as a Spring-managed bean so that it can be injected later through <code>@Autowired</code></li>
          <ul>
            <li>A Spring-bean/component is an objectcreated by the Spring container that manages its lifecycle and can inject it anywhere you need</li>
            <li>A Spring-bean/component is a singleton object so there is one shared instance of it per Spring app context</li>
            <ul>
              <li>Spring bean/componnent can implement interfaces</li>
              <li>Be proxied (for transactions, caching, AOP, etc.) </li>
              <li>Be replaced or mocked for testing</li>
            </ul>
          </ul>
          <li><code>@Autowired</code> : field annotation to tell Spring to find a bean/component of this type and inject it here </li>
          <li><code>Converter</code> interface : interface to convert a value to another value by implementing its <code>convert()</code> method</li>
          <CodeBlock lang='java'>{`
@Component
public class IngredientByIdConverter implements Converter<String, Ingredient> {  

private Map<String, Ingredient> ingredientMap = new HashMap<>();
  
  public IngredientByIdConverter() {
    ingredientMap.put("FLTO", 
        new Ingredient("FLTO", "Flour Tortilla", Type.WRAP));
    ingredientMap.put("COTO", 
        new Ingredient("COTO", "Corn Tortilla", Type.WRAP));
  }

@Override
  public Ingredient convert(String id) {
    return ingredientMap.get(id);
  }
}
`}</CodeBlock>
        </ul>
        <hr />
      </section>

      {/* Spring MVC  */}
      <section>
        <h3 className='section-header' id='MVCmodules'>
          Spring MVC Module
        </h3>
        <p>
          For building web applications; whether to return view (HTML) or data (for REST API - Ch 7 of{' '}
          <u>Spring in Action</u>)
        </p>

        <h4 className='sub-section-header'>App</h4>
        <ul>
          <li>
            <code>@Controller</code> : handles incoming HTTP requests, processing them, and returning a view/JSP
          </li>
          <li>
            <code>@RestController</code> : handles incoming HTTP requests, processing them, and returning data
            (JSON/XML) directly
          </li>
          <li>
            <code>@GetMapping("/")</code> : method annotation that indicates that if an HTTP GET request is received for the root path "/" then
            the annotated method should handle that request
          </li>
           <li>
            <code>@RequestMapping("/")</code> : class annotation that indicates that if an HTTP GET request is received for the root path "/" then
            the annotated class should handle that request through the class that is annnoated with any of the following
          </li>
          <ul>
            <li><code>@GetMapping</code> : method annotation for method that handles HTTP GET requests</li>
            <li><code>@PostMapping</code> : method annotation for method that handles HTTP POST requests</li>
            <li><code>@PutMapping</code> : method annotation for method that handles HTTP PUT requests</li>
            <li><code>@DeleteMapping</code> : method annotation for method that handles HTTP DELETE requests</li>
            <li><code>@PatchMapping</code> : method annotation for method that handles HTTP PATCH requests</li>
          </ul>
          <li>
            <code>@SessionAttribute("modalName")</code> : class attribute for Spring controllers to make sure Spring
            store the "modelName" so it persists across multiple requests
          </li>
          <ul>
            <li>
              Used with <code>@ModelAttribute(name = "modelName")</code>; method annotation that specifies the return
              object of this method will be labelled "modelName" and put into the model
            </li>
            <CodeBlock lang='java'>{`
@Controller
@SessionAttributes("tacoOrder")  // 👈 Keeps "tacoOrder" in session so it can span several pages/requests
public class TacoOrderController {

    @ModelAttribute("tacoOrder")
    public Order order() {
        return new Order();
    }        
            `}</CodeBlock>
          </ul>
        </ul>
        <h4 className='sub-section-header'>Testing</h4>
        <ul>
          <li>
            <code>@WebMvcTest</code> : annotates test class to run in the context of a Spring MVC app
          </li>
          <li>
            <code>@Test</code> : annotates test methods to be run
          </li>
          <li>
            <code>@Autowired</code> : to inject the class with a MockMVC object to drive the mockup
          </li>
          <CodeBlock lang='java'>{`
@WebMvcTest(HomeController.class)                
public class HomeControllerTest {
 
  @Autowired
  private MockMvc mockMvc;                       
  
  @Test
  public void testHomePage() throws Exception {
    mockMvc.perform(get("/"))                    
      .andExpect(status().isOk())                
      .andExpect(view().name("home"))            
      .andExpect(content().string(               
          containsString("Welcome to...")));
  }
}            `}</CodeBlock>
        </ul>
        <hr />
      </section>

      {/* Spring DATA  */}
      <section>
        <h3 className='section-header' id='springData'>
          Spring Data
        </h3>
        <p>
          CRUD: create, read, update, and delete
        </p>
        <ul>
          <li><code>CrudRepository</code> provides basic CRUD operations for your entities so there is no need to implement their methods</li>
          <li><code>{`CrudRepository<Entity, ID>`}</code>:</li>
          <ul>
            <li><code>Entity: parameter that tells which entity/table the CRUD operation are for</code></li>
            <li><code>ID: parameter for the type of the primary key (ID field)</code></li>
            <li>Usage: <code>{`public interface IngredientRepository extends CrudRepository<Order, Long> {}`}</code></li>
          </ul>
          <li>Built-In Methods</li>
          <ul>
            <li><code>save(S entity)</code> : insert or update an entity</li>
            <li><code>findById(ID id)</code> : retrieve an entity by its ID</li>
            <li><code>findAll()</code> : retrieve all entities</li>
            <li><code>deleteById(ID id)</code> : delete an entity by its ID</li>
            <li><code>deleteAll() : delete all entities</code></li>
            <li><code>count()</code> : count the total number of entities</li>
          </ul>
          <li>Customizing Methods: Spring Data can also create custom methods by parsing the method name</li>
          <ul>
            <li><code>{`List<Order> findByDeliverZip(String deliveryZip)`}</code> : return all entities by matching the <code>deliveryZip</code> property</li>
          </ul>
        </ul>
        <h4 className='sub-section-header'>JDBC</h4>
        <p>Low-level framework for interacting with SQL database where you write the SQL queries yourself</p>
        <h4 className='sub-section-header'>JPA</h4>
        <p>High-level framework for SQL where SQL is generated automatically from entity mappings</p>
        <ul>
          <li><code>@Entity</code> : class annotation for the object that will get mapped directly to a table in database</li>
          <li><code>@Id</code> : field annotation to designate it as the uniquely identify in the database; the primary key</li>
          <ul>
            <li><code>@GeneratedValue(strategy = GenerationType.AUTO)</code> : field annotation to let the database auto-generate the value for this field</li>
          </ul>
          <li>Relationship Annotation</li>
          <ul>
            <li><code>@ManyToMany</code> : field annotation to designate a many-to-many relationship between two entities</li>
            <li><code>@ManyToOne</code> : field annotation to designate a many-to-one relationship between two entities</li>
            <li><code>@OneToMany</code> : field annotation to designate a one-to-many relationship between two entities</li>
            <li><code>@OneToOne</code> : field annotation to designate a one-to-one relationship between two entities</li>
            <li>Cascade Type: Example: <code>@ManyToMany(cascade = CascadeType.ALL)</code></li>
            <ul>
              <li><code>CascadeType.ALL</code> : apply all cascade operations to the related child entities</li>
              <li><code>CascadeType.PERSIST</code> : when the parent entity is saved, also save the related child entities</li>
              <li><code>CascadeType.MERGE</code> : when the parent entity is updated, also update the related child entities</li>
              <li><code>CascadeType.REMOVE</code> : when the parent entity is deleted, also delete the related child entities</li>
            </ul>
          </ul>
        </ul>
        <hr />
      </section>

      {/* Spring SECURITY  */}
      <section>
        <h3 className='section-header' id='springSecurity'>
          Spring Security
        </h3>
        <p>
          Ch 5 and 12 of <u>Spring in Action</u>
        </p>
      </section>

    </>
  );
}
