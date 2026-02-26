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

      {/* SPRING DATA JPA & REST  */}
      <section>
        <h3 className='section-header' id='spring-data-rest'>Using Spring Data JPA & REST</h3>
        <p>Spring Data JPA removes boilerplate code for database operations by automatically making CRUD operations by mapping the entities to the SQL tables</p>
        <ul>
          <li>dependency: spring-boot starter-data-jpa</li>
        </ul>
        <p>Spring Data REST automatically exposes REST endpoints for entities managed by Spring Data JPA</p>
        <ul>
          <li>dependency: spring-boot starter-data-rest</li>
        </ul>
        <hr/>
      </section>

       {/* ENTITY  */}
      <section>
        <h3 className='section-header' id='entities'>Entities</h3>
        <p>Entities are the classes that represent the database tables with the following annotations</p>
        <ul>
          <li><code>@Entity</code>: marks the class as an entity</li>
          <li><code>@Table</code>: specifies the table name in the database</li>
          <li><code>@Id</code>: marks the primary key field</li>
          <li><code>@GeneratedValue</code>: specifies how the primary key is generated</li>
          <ul>
            <li>GenerationType.IDENTITY: auto-incremented primary key</li>
          </ul>
          <li><code>@Column</code>: specifies the column name in the database or else it maps to the field name</li>
          <li>Relationships:</li>
          <ul>
            <li><code>@ManyToOne</code>: specifies a many-to-one relationship</li>
            <li><code>@OneToMany</code>: specifies a one-to-many relationship</li>
            <li>Cascade: specifies what operations are cascaded from the parent entity to the child entities</li>
            <ul>
              <li><code>CascadeType.ALL</code>: all operations are cascaded</li>
              <li><code>CascadeType.PERSIST</code>: persist operation is cascaded</li>
              <li><code>CascadeType.MERGE</code>: merge operation is cascaded</li>
              <li><code>CascadeType.REMOVE</code>: remove operation is cascaded</li>
            </ul>
          </ul>
          <li><code>@JoinColumn</code>: specifies the foreign key column</li>
          <li><code>@CreatedDate</code>: marks a field to be automatically set to the current date when an entity is created</li>
          <li><code>@CreationTimestamp</code>: marks a field to be automatically set to the current timestamp when an entity is created</li>
          <li><code>@UpdateTimestamp</code>: marks a field to be automatically set to the current timestamp when an entity is updated</li>     
        </ul>
        <p>Example:</p>
        <pre><code>{`
+---------------------+      +------------------------+
|      product        |      |   product_category     |
+---------------------+      +------------------------+
| - id                |      | - id                   |
| - name              |      | - Set<Product>         |
| - category          |      |                        |
+---------------------+      +------------------------+
         |                           ^
         |                           |
         +---------------------------+
          (M)     "belongs to"   (1)          
        `}</code></pre>
        <CodeBlock language="java">{`
@Entity
@Table(name = "product")
@Data // lombok annotation for getters, setters, toString, equals, and hashCode
public class Product {

    // Private field
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    // Public field
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
-----------------------------------
@Entity
@Table(name = "product_category")
@Data // lombok annotation for getters, setters, toString, equals, and hashCode
public class ProductCategory {

    // Private field
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    // Public field: Set of products associated with this category (one-to-many relationship)
    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<Product> products = new HashSet<>();

    // Constructor
    public ProductCategory() {}

    public ProductCategory(int id) {
        this.id = id;
    }

    // Add product to this category
    public void addProduct(Product product) {
        products.add(product);
        product.setCategory(this); // Setting the category in the Product entity
    }
}
        `}</CodeBlock>
      </section>
    </>
  );
}
