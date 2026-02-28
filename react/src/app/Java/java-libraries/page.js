import CodeBlock from '@/components/shared/CodeBlock';

export const metadata = {
  title: 'Java Libraries',
  description: 'Notes on useful Java Libraries',
};

export default function JavaLibraries() {
  return (
    <>
      {/* LOMBOK  */}
      <section>
        <h3 className='section-header' id='Lombok'>
          Lombok
        </h3>
        <p>Helps reduce boilerplate code (getters, setters, constructors, etc): <a href='https://projectlombok.org/features/'>lombok doc</a></p>
        <ul>
          <li><code>@Data</code> : combination of the following annotations</li>
          <ul>
            <li><code>@Getter</code> : generates getter methods for all fields</li>
            <li><code>@Setter</code> : generates setter methods for all non-final fields</li>
            <li><code>@ToString</code> : generates a toString() method with the following default: the class name followed by parentheses containing fields separated by commas, e.g. MyClass(foo=123, bar=234).</li>
            <li><code>@EqualsAndHashCode</code> : generates equals(Object other) and hashCode() methods; uses all non-static and non-transient fields (private/public Type name)</li>
            <li><code>@RequiredArgsConstructor</code> : generates a constructor with required arguments for fields that are <code>final</code> or have <code>@NonNull</code></li>
          </ul>
          <li><code>@NoArgsConstructor</code> : generates a no-argument constructor</li>
          <li><code>@AllArgsConstructor</code> : generates a constructor with all fields as parameters</li>
        </ul>
        <hr />
      </section>


      {/* VIEW TEMPLATES  */}
      <section>
        <h3 className='section-header' id='viewTemplates'>
          View Templates Libraries
        </h3>
        <ul>
          <li>Thymeleaf</li>
          <li>FreeMarker</li>
          <li>Groovy templates</li>
          <li>JavaServer Pages (JSP)</li>
          <li>Mustache</li>
        </ul>
        <hr />
      </section>

      {/* TESTING  */}
      <section>
        <h3 className='section-header' id='testing'>
          Testing
        </h3>
        <p>JUnit : popular unit testing framework</p>
        <ul>
          <li><code>{`@Test`}</code> : identifies a method as a test method</li>
          <li><code>{`@BeforeEach`}</code> : Executed before each test. Used to prepare the test environment(e.g. read input data, initialize the class)</li>
          <li><code>{`@AfterEach`}</code> : Executed after each test. Used to cleanup test environment</li>
          <li><code>{`@BeforeAll`}</code> : Executed once, before the start of all tests. Methods marked with this annotation need to be defined as static to work with JUnit</li>
          <li><code>{`@AfterAll`}</code> : Executed once, after all tests have been finished. Methods need to be static to work with JUnit</li>
          <li><code>{`@@Test(expected = Exception.class)`}</code> : Fails if the method does not throw the named exception</li>
          <li><code>{`@Test(timeout = 10)`}</code> : Fails if the method takes longer than 100 miliseconds</li>
        </ul>
        <p>JUnit Built-In Assertion Methods</p>
        <ul>
          <li><code>assertEquals(expected, actual)</code></li>
          <li><code>assertNotEquals(unexpected, actual)</code></li>
          <li><code>assertTrue(condition)</code></li>
          <li><code>assertFalse(condition)</code></li>
          <li><code>assertNull(object)</code></li>
          <li><code>assertNotNull(object)</code></li>
          <li><code>assertSame(expected, actual)</code></li>
          <li><code>assertNotSame(unexpected, actual)</code></li>
          <li><code>assertArrayEquals(expected, actual)</code></li>
          <li><code>assertIterableEquals(expected, actual)</code></li>
          <li><code>{`assertThrows(Exception.class, () -> code)`}</code></li>
          <li><code>{`assertDoesNotThrow(() -> code)`}</code></li>
        </ul>
        <p>Spring Boot Annotations :</p>
        <ul>
          <li><code>{`@RunWith(SpringRunner.class)`}</code>Run test with Spring Context</li>
          <li><code>{`@SpringBootTest`}</code>Search for Spring Boot Application for configuration</li>
          <li><code>{`@TestConfiguration`}</code>Specify a Spring configuration for your test</li>
          <li><code>{`@MockBean`}</code>Injects Mockito Mock</li>
          <li><code>{`@SpyBean`}</code>Injects Mockito Spy</li>
          <li><code>{`@JsonTest`}</code>Creates a Jackson or Gson object mapper</li>
          <li><code>{`@@DataJpaTest`}</code>Used to test data layer with embedded database</li>
        </ul>
      </section>
    </>
  );
}