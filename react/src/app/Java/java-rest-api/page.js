import CodeBlock from '@/components/shared/CodeBlock';

export const metadata = {
  title: 'REST API',
  description: 'Notes on REST API',
};

export default function RestAPI() {
  return (
    <>
      <h2 className='section-header'>REST API with Spring Boot</h2>

      {/* BASIC  */}
      <section>
      <h3 className='section-header' id='basic'>Basic</h3>
      <p>A way for software systems to communicate over the web using standard HTTP methods </p>
      <ul>
        <li>CRUD: Create, Read, Update, Delete - the basic database operations</li>
      </ul>
      <h4 className='sub-section-header'>HTTP Methods</h4>
      <table>
        <thead>
          <tr>
            <th>HTTP Method</th>
            <th>Action</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>POST</td>
            <td>C: Create</td>
            <td>Add a new resource</td>
          </tr>
           <tr>
            <td>GET</td>
            <td>R: Read</td>
            <td>Fetch data (no changes)</td>
          </tr>
          <tr>
            <td>PUT</td>
            <td>U: Update</td>
            <td>Replace an existing resource</td>
          </tr>
          <tr>
            <td>PATCH</td>
            <td>U: Update partially</td>
            <td>Modify part of a resource</td>
          </tr>
          <tr>
            <td>DELETE</td>
            <td>D:Delete</td>
            <td>Remove a resource</td>
          </tr>
        </tbody>
      </table>

      <h4 className='sub-section-header'>REST endpoints example</h4>
      <table>
        <thead>
          <tr>
            <th>URL</th>
            <th>Method</th>
            <th>Meaning</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>/users</td>
            <td>GET</td>
            <td>Get all users</td>
          </tr>
          <tr>
            <td>/users/5</td>
            <td>GET</td>
            <td>Get user with ID 5</td>
          </tr>
          <tr>
            <td>/users</td>
            <td>POST</td>
            <td>Create a new user</td>
          </tr>
          <tr>
            <td>/users/5</td>
            <td>PUT</td>
            <td>Update user 5 completely</td>
          </tr>
          <tr>
            <td>/users/5</td>
            <td>DELETE</td>
            <td>Delete user 5</td>
          </tr>
        </tbody>
      </table>
      <hr/>
      </section>


      {/* NAMING CONVERSION  */}
      <section>
        <h3 className='section-header' id='naming-conversion'>Spring Data Naming Conversion</h3>
        <p><b><u>IMPORTANT</u></b>: Spring Data naming conversion for entity and field names</p>
        <ul>
          <li>Converting To SQL tables and columns: converted to snake_case</li>
          <ul>
            <li>Entity: <code>EmailAddress</code> &rarr; <code>email_address</code></li>
              <ul>
                <li>Alter with <code>@Table(name = "email-address")</code></li>
            </ul>
            <li>Field: <code>firstName</code> &rarr; <code>first_name</code></li>
              <ul>
                <li>Alter with <code>@Column(name = "first-name")</code></li>
            </ul>
          </ul>
          <br/>
          <li>Converting To JSON keys: converted to camelCase</li>
          <ul>
            <li>Entity: <code>EmailAddress</code> &rarr; <code>emailAddress</code></li>
            <li>Field: <code>first_name</code> &rarr; <code>firstName</code></li>
            <ul>
              <li>Alter with <code>@JsonProperty("first-name")</code></li>
            </ul>
          </ul>
          <br/>
          <li>Converting To API endpoints: converted to pluralized camelCase</li>
          <ul>
            <li>Entity: <code>EmailAddress</code> &rarr; <code>emailAddresses</code></li>
            <ul>
              <li>Alter with <code>@RepositoryRestResource(path = "emails")</code> for JPA repository</li>
              <li>Alter with <code>@RequestMapping("/emails")</code> for controllers</li>
            </ul>
          </ul>
        </ul>
        <hr/>
      </section>

      {/* SPRING DATA JPA & REST  */}
      <section>
        <h3 className='section-header' id='spring-data-rest'>Using Spring Data JPA & REST</h3>
        <p>Spring Data JPA removes boilerplate code for database operations by automatically making CRUD operations by mapping the entities to the SQL tables</p>
        <p>Flow of operations: <code>HTTP Request → Controller → Service → Repository → Database</code></p>
        <ul>
          <li>dependency: spring-boot starter-data-jpa</li>
          <li>Use for purely accessing databases, but does not automatically generate REST endpoints</li>
        </ul>
        <p>Spring Data REST automatically exposes REST endpoints for entities managed by Spring Data JPA</p>
        <ul>
          <li>dependency: spring-boot starter-data-rest</li>
          <li>Automatically generates the following REST endpoints for entities managed by Spring Data JPA</li>
          <ul>
            <li><code>{`GET /{entities}`}</code>: returns all entries in the table</li>
            <li><code>{`GET /{entities}/{id}`}</code>: returns a specific entry by ID</li>
            <li><code>{`POST /{entities}`}</code>: creates a new entry in the table</li>
            <li><code>{`PUT /{entities}/{id}`}</code>: updates an existing entry in the table based on ID</li>
            <li><code>{`DELETE /{entities}/{id}`}</code>: deletes an existing entry in the table</li>
          </ul>
        </ul>
        <p>The software Postman can be used to testout API endpoints</p>
        <p>Basic configuration for <code>application.properties</code> file:</p>
        <CodeBlock language="java">{`
# Handle connecting to MySQL database with the given username and password on localhost:3306/database_name
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost:3306/full-stack-ecommerce?useSSL=false&useUnicode=yes&characterEncoding=UTF-8&allowPublicKeyRetrieval=true&serverTimezone=UTC
spring.datasource.username=username
spring.datasource.password=password

# Tells how Hibernate handles database schema generation. Options: none, validate, update, create, create-drop
spring.jpa.hibernate.ddl-auto=none

# Set the base path for the REST endpoints to /api; for example. localhost:8080/api/{entities}
spring.data.rest.base-path=/api

# allow jackson parser to process comments in payload
spring.jackson.parser.allow-comments=true
# application logging level
logging.level.org.springframework=INFO

        `}</CodeBlock>
        <hr/>
      </section>

       {/* ENTITY  */}
      <section>
        <h3 className='section-header' id='entities'>Entities</h3>
        <p>Entities are the classes that represent the database tables with the following annotations</p>
        <ul>
          <li><code>@Entity</code>: marks the class as an entity</li>
          <ul>
            <li>JPA, by default, maps the class name to the table name by converting CamelCase to snake_case: <code>{`UserAccount > user_account`}</code></li>
          </ul>
          <li><code>@Table</code>: specifies the table name in the database</li>
          <li><code>@Id</code>: marks the primary key field</li>
          <li><code>@GeneratedValue</code>: specifies how the primary key is generated</li>
          <ul>
            <li>GenerationType.IDENTITY: auto-incremented primary key</li>
          </ul>
          <li><code>@Column</code>: specifies the column name in the database or else it maps to the field name</li>
          <ul>
            <li>JPA maps the field name to the column name by converting CamelCase to snake_case: <code>{`firstName > first_name`}</code>, but the JSON will use the field name as is</li>
            <li>Every columns in a table must be mapped to a field either implicitly or explicitly using <code>name</code> option</li>
            <CodeBlock language="java">{`
// Field in entity class
@Id
@Column(name = "customer_id")
private Long id;

// JSON representation
{
  "id": 1
}
            `}</CodeBlock>
          </ul>
          <li>Relationships:</li>
          <ul>
            <li><code>@ManyToOne</code>: specifies a many-to-one relationship</li>
            <li><code>@OneToMany</code>: specifies a one-to-many relationship</li>
            <li><code>@OneToOne</code>: specifies a one-to-one relationship</li>
            <li><code>@JoinColumn</code>: specifies the foreign key column</li>
            <ul>
              <li><code>name</code> should be the same as the <u>foreign key column</u> in current table that links to the parent entity</li>
              <li>Given to the field in the child entity that references the parent entity</li>
              <li>Usually given to the "many" side in many-to-one or the child in one-to-one relationships</li>
            </ul>
            <li><code>mappedBy</code>:</li>
            <ul>
              <li>Given to the field in the parent entity that represents the child entity</li>
              <li>The value is the <u>name of the field</u> in the child entity that references back to the parent entity</li>
            </ul>
            <li><code>@ManyToMany</code>: specifies a many-to-many relationship</li>
            <ul>
              <li><code>@JoinTable</code>: in many-to-many relationships, <code>@JoinTable</code> is used on one side to specify the join table that links the two entities while the other side uses <code>mappedBy</code> with <code>@ManyToMany</code></li>
              <li><code>name</code>: specifies the name of the join table</li>
              <li><code>joinColumns</code>: specifies the columns in the join table that reference the parent entity</li>
              <li><code>inverseJoinColumns</code>: specifies the columns in the join table that reference the child entity</li>
            </ul>
            <li>Cascade: specifies what operations are cascaded from the parent entity to the child entities</li>
            <ul>
              <li>given to the parent side of the relationship</li>
              <li><code>CascadeType.ALL</code>: all operations are cascaded</li>
              <li><code>CascadeType.PERSIST</code>: persist operation is cascaded</li>
              <li><code>CascadeType.MERGE</code>: merge operation is cascaded</li>
              <li><code>CascadeType.REMOVE</code>: remove operation is cascaded</li>
            </ul>
          </ul>
         
          <li><code>@CreatedDate</code>: marks a field to be automatically set to the current date when an entity is created</li>
          <li><code>@CreationTimestamp</code>: marks a field to be automatically set to the current timestamp when an entity is created</li>
          <li><code>@UpdateTimestamp</code>: marks a field to be automatically set to the current timestamp when an entity is updated</li>     
              
          <li><code>@JsonProperty("customName")</code>: add a custom field to be returned in the JSON response</li>
          <ul>
            <li>Example:</li>
            <CodeBlock language="java">{`
@JsonProperty("country_id")
public Long getCountryId() {
    return country != null ? country.getId() : null;
}       `}</CodeBlock>
          </ul>
        </ul>
        <p>Many-to-One Example:</p>
        <img src="/assets/images/many-to-one-example.png" alt="many-to-one example" style={{width: "100%", padding: "5px 10px"}}/>
        <CodeBlock language="java">{`
@Entity
@Table(name = "product")
@Data // lombok annotation for getters, setters, toString, equals, and hashCode
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    private String name;

    // Many-to-one relationship: Product belongs to one ProductCategory
    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false) // Foreign key column in the Product table
    private ProductCategory category;

    // Constructor
    public Product() {}

    public Product(String name, ProductCategory category) {
        this.name = name;
        this.category = category;
    }
}
--------------------------------------------------------
@Entity
@Table(name = "product_category")
@Data // lombok annotation for getters, setters, toString, equals, and hashCode
public class ProductCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<Product> products = new HashSet<>();

    // Constructor
    public ProductCategory() {}

    public ProductCategory(int id) {
        this.id = id;
    }
}
        `}</CodeBlock>


        <p>Many-to-Many Example:</p>
         <img src="/assets/images/many-to-many-example.png" alt="many-to-many example" style={{width: "100%", padding: "5px 10px"}}/>
        <CodeBlock language="java">{`
@Entity
@Table(name = "student")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @ManyToMany
    @JoinTable(
        name = "student_course",
        joinColumns = @JoinColumn(name = "student_id"),
        inverseJoinColumns = @JoinColumn(name = "course_id")
    )
    private Set<Course> courseSet;
}
--------------------------------------------------------
@Entity
@Table(name = "course")
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @ManyToMany(mappedBy = "courseSet")
    private Set<Student> students;
}
        `}</CodeBlock>
        <hr/>
      </section>

      {/* JPA REPOSITORY  */}  
      <section>
        <h3 className='section-header' id='JPA'>JPA Repository</h3>
        <p>When combined with spring-boot-data-rest, JPA repositories are automatically exposed as REST endpoints.</p>
        <ul>
          <li>To use the JPA repository, an interface must extends the <code>{`JpaRepository<{entity class},{primary key type}>`}</code> while following the {`{entity}Repository`} naming convention</li>
          <li><code>@RepositoryRestResource</code>: marks a JPA repository to be exposed as a REST endpoint by the spring-boot-data-rest; the following endpoints are exposed:</li>
          <ul>
            <li>The endpoints will be the repository name, but lowercase and in plural form (Ex: CountryRepository {`>`} countries)</li>
            <li><code>{`GET /{entities}`}</code>: returns all entries in the table</li>
            <li><code>{`GET /{entities}/{id}`}</code>: returns a specific entry by ID</li>
            <li><code>{`POST /{entities}`}</code>: creates a new entry in the table</li>
            <li><code>{`PUT /{entities}/{id}`}</code>: updates an existing entry in the table based on ID</li>
            <li><code>{`DELETE /{entities}/{id}`}</code>: deletes an existing entry in the table</li>
            <li>Customizing the REST endpoints</li>
            <ul>
              <li><code>@RepositoryRestResource(path = "custom-path")</code>: changes the path of the REST endpoints to /custom-path</li>
              <li><code>@RepositoryRestResource(collectionResourceRel = "custom-json-name")</code>: changes the default name of the collection in the JSON response</li>
              <li><code>@RepositoryRestResource(itemResourceRel = "custom-json-item-name")</code>: changes the default name of the item resources in the JSON response</li>
              <li><code>@RepositoryRestResource(exported = false)</code>: disables the REST endpoints for the repository</li>
            </ul>
          </ul>
          <li><code>@CrossOrigin</code>: allows cross-origin requests to the REST endpoints exposed by a JPA repository</li>
          <ul>
            <li><code>@CrossOrigin(origins = "http://localhost:3000:")</code>: allows cross-origin requests from only localhost:3000</li>
            <li><code>@CrossOrigin("*")</code>: allows cross-origin requests from any origin</li>
          </ul>
          <li>JPA can automatically generate SQL based on the method name in the repository interface</li>
          <ul>
            <li>Example: <code>findById(value)</code> generates SQL to find entities by a specific id value</li>
          </ul>
        </ul>
        <CodeBlock language="java">{`
@RepositoryRestResource
@CrossOrigin("*")
public interface OrderRepository extends JpaRepository<Order, Long> { }

// The above repository will expose the following REST endpoints:
// GET /orders
// GET /orders/{id}
// POST /orders
// PUT /orders/{id}
// DELETE /orders/{id}
        `}</CodeBlock>
        <hr/>
      </section>

      {/* CUSTOM QUERY METHODS  */}  
      <section>
        <h3 className='section-header' id='custom-query-methods'>Custom Query Methods</h3>
        <p>JPA repositories support custom query methods for your services or custom endpoints by automatically generating SQL based on method names or using the <code>@Query</code> annotation with a custom SQL query</p>
        <ul>
          <li>Method Name Queries:</li>
          <ul>
            <li>JPA uses a base name + the entity's field name and certain keywords to generate SQL queries</li>
            <li><b><u>Base</u></b>: <code>findBy | readBy | getBy | queryBy | countBy | existsBy | deleteBy</code></li>
            <li><b><u>Keywords</u></b>: <code>And | Or | Not | IsNull | IsNotNull | Between | LessThan | GreaterThan | Like | True | False</code></li>
            <li>For nested fields, JPA can also figure out based on the method name</li>
          </ul>
          <CodeBlock language="java">{`
@Entity
public class Order {
    @ManyToOne
    private User user;
}
---------------------------------------------------------
@Entity
public class User {
    @Column(name = "email_address")
    private String emailAddress;   // ✅ Java field uses camelCase

    @Column(name = "active")
    private boolean isActive;
}
---------------------------------------------------------
// Simple fields example for User entity

@RepositoryRestResource
public interface UserRepository extends JpaRepository<User, Long> { 

  List<User> findByEmailAddressContaining(String emailAddress); // WHERE email_address LIKE '%emailAddress%'

  List<User> findByIsActiveTrue();    // WHERE active = true  

  long countByIsActiveFalse();        // COUNT WHERE active = false; return the number of rows in DB with isActive = false    

  boolean existsByIsActiveTrue();     // EXISTS WHERE isActive = true; if any row in DB exists with isActive = true, return true, else false
}
---------------------------------------------------------
// Nested fields example for Order.user entity

@RepositoryRestResource
public interface OrderRepository extends JpaRepository<Order, Long> {

  List<Order> findByUserEmailAddress(String emailAddress); // WHERE user.email_address = ?
}
            `}</CodeBlock>
            <br/>
            <li>Using <code>@Query</code> with JPQL queries:</li>
            <ul>
              <li>Allows you to write custom JPQL queries for repository methods</li>
              <li>JPQL queries the Java entities and fields, not the SQL table and column names </li>
              <CodeBlock language="java">{`
@Query("SELECT u FROM User u WHERE u.age > :age") // SELECT User entity WHERE User.age is greater than the given age parameter(:age)
List<User> findUsersOlderThan(@Param("age") int age);
              `}</CodeBlock>
            </ul>
            <li>Using <code>@Query</code> with raw SQL queries:</li>
            <ul>
              <li>Raw SQL queries can be used by adding the argument <code>nativeQuery = true</code></li>
              <li>JPA will query the table and column as defined in the raw query</li>
              <CodeBlock language="java">{`
@Query(value = "SELECT * FROM users u WHERE u.user_age > :age", nativeQuery = true) // JPA will query the "users" table and "user_age" column as defined in the raw SQL query
List<User> findUsersOlderThanNative(@Param("age") int age);
              `}</CodeBlock>
            </ul>
        </ul>
      <hr/>
      </section>

       {/* SERVICES AND CONTROLLER  */}
      <section>
        <h3 className='section-header' id='services-and-controller'>Services and Controller</h3>
        <p>When using JPA repositories with spring-boot-data-rest, the services and controllers are automatically generated for the basic CRUD endpoints</p>
        <p>However, to handle custom logic, <code>@Service</code> and <code>@RestController</code> classes are needed</p>
        <ul>
          <li><code>@Service</code>: marks a class as a service and Spring bean that contains business logic</li>
          <ul>
            <li>Holds, business rules and validations logic</li>
            <li><code>@Transactional</code>: marks a method, ensuring that all database operations within the method are part of a single transaction. Once marked, Spring make sure the all operations in the method succeeds or fails together and roll back the DB</li>
            <ul>
              <li><code>repository.save(entity)</code> or <code>repository.saveAll(entities)</code>: methods to save entities to the database</li>
            </ul>
            <CodeBlock language="java">{`
@Service
public class OrderService {
    private final OrderRepository orderRepository;

    @Autowired
    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @Transactional
    public void placeOrder(Purchase purchase) {
        purchase.getItems();
        ... // other business logic and validations
        orderRepository.save(purchase.getOrder());    // save order to the database
        orderRepository.saveAll(purchase.getOrders()); // save all orders in the purchase to the database in batch 
    }

    @Transactional(readOnly = true)
    public Purchase getOrder(Long id) {
        // query for order by ID      
        return orderRepository.findById(id).orElse(null);
    }
}            `}</CodeBlock>
          </ul>
          <br/>
          <li><code>@RestController</code>: marks a class as a REST controller that handles HTTP requests and returns JSON/XML responses</li>
          <ul>
            <li>Every method returns JSON/XML responses and can be associated with custom endpoints for the REST API</li>
            <li>Maps HTTP methods and routes</li>
            <li>Handles request and response processing for the associated entity/table</li>
            <li><code>@RequestMapping</code>: define the base path for all endpoints in the controller/class</li>
            <li><code>@GetMapping</code>: maps a method to a GET endpoint</li>
            <li><code>@PostMapping</code>: maps a method to a POST endpoint</li>
            <li><code>@PutMapping</code>: maps a method to a PUT endpoint</li>
            <li><code>@DeleteMapping</code>: maps a method to a DELETE endpoint</li>
            <ul>
              <li><code>@PathVariable</code>: maps a method parameter to a path variable in the URL</li>
              <li><code>@RequestParam</code>: maps a method parameter to a query parameter in the URL</li>
              <li><code>@RequestBody</code>: maps a method parameter to the request body</li>
            </ul>
            <CodeBlock language="java">{`
@RestController
@RequestMapping("/api/order")
public class OrderController {
    private final OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    // Map a POST request to /api/order/purchase to the placeOrder method
    @PostMapping("/purchase")
    public PurchaseResponse placeOrder(@RequestBody Purchase purchase) {
        return orderService.placeOrder(purchase);
    }

    // Map a GET request to /api/order/{id} to the getOrder method
    @GetMapping("/{id}")
    public Purchase getOrder(@PathVariable Long id) {
        return orderService.getOrder(id);
    }
}            `}</CodeBlock>
          </ul>
        </ul>
        <hr/>
      </section>

    {/* PAGINATION AND SORTING  */}
      <section>
        <h3 className='section-header' id='pagination-sorting'>Pagination and Sorting</h3>
        <p>JPA can paginate the result so not all rows are loaded at once and sort the result as well</p>
        <ul>
          <li>Hard Limit on Page Size:</li>
          <ul>
            <li>By default, Spring Boot sets a hard limit of 1000 rows per page, but can be set with the following lines in <code>application.properties</code>:</li>
            <ul>
              <li><code>spring.data.web.pageable.max-page-size=100</code></li>
              <li><code>spring.data.web.pageable.default-page-size=20</code></li>
            </ul>
          </ul>
          <li>Sorting:</li>
          <ul>
            <li>Use the <code>sort</code> query parameter in the HTTP request to sort the results</li>
            <li>Example: <code>?sort=emailAddress,asc</code></li>
          </ul>
          <br/>
          <li>Pagination of HTTP requests:</li>
          <ul>
            <li>Make the JPA repository methods return a <code>{`Page<{entity}>`}</code> and add a <code>Pageable</code> parameter to the method</li>
            <li>Add <code>Pageable</code> parameter to the controller that handle HTTP request while including the default size and page number</li>
            <li>Some example API endpoints with pagination</li>
            <ul>
              <li><code>GET /api/users?page=0&size=10</code></li>
              <li><code>GET /api/users?page=1&size=5&sort=age,desc</code></li>
            </ul>
            <CodeBlock language="java">{`
@Entity
public class User {
    @Column(name = "email_address")
    private String emailAddress;   // ✅ Java field uses camelCase

    @Column(name = "active")
    private boolean isActive;
}
---------------------------------------------------------
// Add pagination to the JPA repository methods

@RepositoryRestResource
public interface UserRepository extends JpaRepository<User, Long> { 

  Page<User> findByEmailAddressContaining(String emailAddress, Pageable pageable); // WHERE email_address LIKE '%emailAddress%'

  Page<User> findByIsActiveTrue(Pageable pageable);    // WHERE active = true  
}
---------------------------------------------------------
// Add pagination to the controller that handles the HTTP request

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserRepository userRepository;

    @Autowired
    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // Map a GET request to /api/users?email=random@gmail.com
    @GetMapping
    public Page<User> findUsersByEmail(
      @RequestParam String email, 
      @PageableDefault(size = 20, sort = "emailAddress") Pageable pageable) { // Spring autowires the Pageable parameter from the query params in the HTTP request
        
        return userRepository.findByEmailAddressContaining(email, pageable);
    }
}            `}</CodeBlock>
          </ul>
          <br/>
          <li>Pagination of non-HTTP requests like scheduled job, batch process,CLI, internal service logic:</li>
          <ul>
            <li>Normally used in a service class and not the controller</li>
            <li>Create a <code>PageRequest</code> and pass that as the pageable</li>
            <CodeBlock language="java">{`
@Service
public class OrderService {
    private final OrderRepository orderRepository;

    @Autowired
    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public Page<Order> checkOrdersStatuses(int pageNumber, int pageSize) {
        Pageable pageable = PageRequest.of(pageNumber, pageSize, Sort.by("createdAt").descending());
        return orderRepository.findByStatus("PENDING", pageable);
    }
}
            `}</CodeBlock>
          </ul>
        </ul>
        <hr/>
      </section>

       {/* CONFIGURATION  */}
      <section>
        <h3 className='section-header' id='configuration'>Configuration</h3>
        <p>The <code>RepositoryRestConfigurer</code> interface allows you to customize the spring-data.</p>
        <p>Basic Setup:</p>
        <CodeBlock language="java">{`
@Configuration
public class RestDataConfig implements RepositoryRestConfigurer {

    @Override
    public void configureRepositoryRestConfiguration(
      RepositoryRestConfiguration config, CorsRegistry cors) {
        config.exposeIdsFor(Product.class);
        config.setDefaultPageSize(Integer.MAX_VALUE);
        config.setMaxPageSize(Integer.MAX_VALUE);
        ... // other configurations
    }
}
        `}</CodeBlock>
        <p>Options:</p>
        <ul>
          <li><code>.exposeIdsFor(...)</code>: exposes the IDs of the given entity classes in the REST endpoints</li>
          <li><code>.setDefaultPageSize(...)</code>: sets the default page size for all REST endpoints</li>
          <li><code>.setMaxPageSize(...)</code>: sets the maximum page size for all REST endpoints</li>
          <li><code>.getExposureConfiguration()</code>: returns the exposure configuration for the REST endpoints to be able to disable specific HTTP methods</li>
            <CodeBlock language="java">{`
//Example: Disabling specific HTTP methods for an entity

HttpMethod[] theUnsupportedActions = {HttpMethod.PUT, HttpMethod.POST, HttpMethod.DELETE, HttpMethod.PATCH};

// disable HTTP methods for Product: PUT, POST, DELETE and PATCH
config.getExposureConfiguration()
    .forDomainType(Product.class)
    .withItemExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions))
    .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions));
            `}</CodeBlock>
        </ul>
        <hr/>
      </section>

      {/* COMMON ERRORS  */}
      <section>
        <h3 className='section-header' id='common-errors'>Common Errors</h3>
        <ul>
          <li><code>@Data</code> annotation of Lombok can generate error when placed on Entity classes so it should be replaced with <code>@Getter</code> and <code>@Setter</code> annotations individually.</li>
        </ul>
      </section>
    </>
  );
}
