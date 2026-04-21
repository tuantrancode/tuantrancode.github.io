import CodeBlock from '@/components/shared/CodeBlock';

export const metadata = {
  title: 'Testing',
  description: 'Notes on Testing in Java',
};

export default function JavaTesting() {
  return (
    <>
        {/* Basic  */}
      <section>
      <h3 className='section-header' id='junit'>Basic Concepts</h3>
      <p>Testing is useful to test edge cases and ensure proper behavior with multiple data sets.</p>
      <ul>
        <li><u>Unit Testing</u>: Testing individual components or methods in isolation.</li>
        <ul>
            <li>Methods, especially validation methods, should be written so it's easy for the test unit to pass mocked parameters in order to test edge cases properly</li>
            <li><code>boolean validate(Integer[] data)</code> is better than <code>{`boolean validate(Object context) { context.getData(); }`}</code></li>
        </ul>
        <li><u>Integration Testing</u>: Testing how different components work together.</li>
        <li><u>Running Tests</u>:</li>
        <ul>
            <li><code>mvn test</code> : run all tests</li>
            <li><code>mvn test -Dtest=ClassName#methodName</code> : run a specific test</li>
            <li>In IDEs like IntelliJ IDEA or Eclipse: right click the test class or method and select "Run [classname]"</li>
            <ul>
                <li>The class can not be <code>static</code> and the method must be annotated with <code>@Test | @ParameterizedTest</code></li>
            </ul>
        </ul>
      </ul>
      <hr/>
      </section>

      {/* JUnit  */}
      <section>
      <h3 className='section-header' id='junit'>JUnit</h3>
      <p>JUnit is the most widely used testing framework for Java.</p>
      <ul>
        <li><u>Annotations</u>:</li>
        <ul>
            <li><code>@Test</code>: Marks a method as a test method.</li>
            <li><code>@ParameterizedTest</code>: Allows a test method to be run with different input values.</li>
            <ul>
                <li>Used with <code>@ValueSorce | @EnumSource | @CsvSource</code></li>
                <ul>
                    <li><code>{`@ValueSource(strings = myString)`}</code></li>
                    <li><code>{`@EnumSource(enumClass = [MyEnum].class)`}</code></li>
                </ul>
            </ul>
            <li><code>@BeforeEach</code>: Runs before each test method.</li>
            <ul>
                <li>Good for running setup codes</li>
            </ul>
            <li><code>@AfterEach</code>: Runs after each test method.</li>
            <ul>
                <li>Used for running cleanup codes</li>
            </ul>
          
        </ul>
      </ul>

      <hr/>
      </section>

        {/* AssertJ  */}
      <section>
      <h3 className='section-header' id='assertj'>AssertJ</h3>
      <p>Allow testing to use less boilerplate code by providing fluent assertions to help check conditions:</p>
      <ul>
        <li><code>assertThat( [conditional or test object] )</code> : main method to run checks</li>
       <ul>
        <li>
          <code>containsExactly | containsExactlyElementsOf</code>
          <p>Collection must contain exactly the given elements in the same order.</p>
          <pre><code>assertThat(list).containsExactly(1, 2, 3);</code></pre>
        </li>

        <li>
          <code>containsExactlyInAnyOrder | containsExactlyInAnyOrderElementsOf</code>
          <p>Collection must contain exactly the given elements, order does not matter.</p>
          <pre><code>assertThat(list).containsExactlyInAnyOrder(3, 1, 2);</code></pre>
        </li>

        <li>
          <code>contains</code>
          <p>Checks that the collection contains the given elements (extras allowed).</p>
          <pre><code>assertThat(list).contains(1, 2);</code></pre>
        </li>

        <li>
          <code>doesNotContain</code>
          <p>Ensures the collection does not contain specific elements.</p>
          <pre><code>assertThat(list).doesNotContain(5);</code></pre>
        </li>

        <li>
          <code>allMatch</code>
          <p>All elements must satisfy a condition.</p>
          <pre><code>assertThat(list).allMatch(x -&gt; x &gt; 0);</code></pre>
        </li>

        <li>
          <code>anyMatch</code>
          <p>At least one element must satisfy a condition.</p>
          <pre><code>assertThat(list).anyMatch(x -&gt; x == 5);</code></pre>
        </li>

        <li>
          <code>usingRecursiveComparison</code>
          <p>Deep comparison of object fields instead of equals().</p>
          <CodeBlock language='java'>{`
assertThat(actual)
    .usingRecursiveComparison()
    .isEqualTo(expected);         
          `}
           </CodeBlock>
        </li>
      </ul>
      </ul>
      <hr/>
      </section>

        {/* Mockito  */}
      <section>
      <h3 className='section-header' id='mockito'>Mockito</h3>
      <p>Mockito is a popular mocking framework for Java that allows you to create and configure mock objects in your tests.
        This allows test to avoid using real connections and databases and instead use mocked data to test edge cases and specific scenarios.
      </p>
      <CodeBlock language='java'>{`
DistanceGraph graph = mock(DistanceGraph.class);     
when(graph.getDistance(anyInt(), anyInt())).thenReturn(10.0);
`}      </CodeBlock> 
      <ul>
        <li>
          Create mocks / spies
          <ul>
            <li>
              <code>mock</code>
              <p>Creates a mock instance of a class or interface.</p>
              <pre><code>MyService service = mock(MyService.class);</code></pre>
            </li>

            <li>
              <code>spy</code>
              <p>Wraps a real object but allows selective mocking.</p>
              <pre><code>List list = spy(new ArrayList());</code></pre>
            </li>
          </ul>
        </li>

        <li>
          Stubbing behavior (mock setup)
          <ul>
            <li>
              <code>when | thenReturn</code>
              <p>Defines return values for mocked methods.</p>
              <pre>
                <code>
                  when(service.getData()).thenReturn("mocked value");
                </code>
              </pre>
            </li>

            <li>
              <code>when | thenThrow</code>
              <p>Configures a method to throw an exception.</p>
              <pre>
                <code>
                  when(service.getData()).thenThrow(new RuntimeException());
                </code>
              </pre>
            </li>

            <li>
              <code>doReturn | when</code>
              <p>Alternative stubbing, useful for spies or avoiding real calls.</p>
              <pre>
                <code>
                  doReturn("value").when(service).getData();
                </code>
              </pre>
            </li>

            <li>
              <code>doNothing | doThrow</code>
              <p>Used for void methods to define behavior.</p>
              <pre>
                <code>
                  doNothing().when(service).clear();
                </code>
              </pre>
            </li>
          </ul>
        </li>

        <li>
          Argument matching
          <ul>
            <li>
              <code>any | anyInt | anyString</code>
              <p>Matches any argument of a given type.</p>
              <pre>
                <code>
                  when(service.find(anyInt())).thenReturn("value");
                </code>
              </pre>
            </li>

            <li>
              <code>eq</code>
              <p>Matches a specific argument value.</p>
              <pre>
                <code>
                  when(service.find(eq(5))).thenReturn("value");
                </code>
              </pre>
            </li>
          </ul>
        </li>

        <li>
          Verifying interactions
          <ul>
            <li>
              <code>verify</code>
              <p>Checks that a method was called.</p>
              <pre>
                <code>
                  verify(service).getData();
                </code>
              </pre>
            </li>

            <li>
              <code>verify(times)</code>
              <p>Verifies how many times a method was called.</p>
              <pre>
                <code>
                  verify(service, times(2)).getData();
                </code>
              </pre>
            </li>

            <li>
              <code>verify(never)</code>
              <p>Ensures a method was never called.</p>
              <pre>
                <code>
                  verify(service, never()).getData();
                </code>
              </pre>
            </li>

            <li>
              <code>inOrder</code>
              <p>Verifies method calls happened in a specific order.</p>
              <pre>
                <code>
                  InOrder inOrder = inOrder(service);
                  inOrder.verify(service).first();
                  inOrder.verify(service).second();
                </code>
              </pre>
            </li>
          </ul>
        </li>

        <li>
          Capturing arguments
          <ul>
            <li>
              <code>ArgumentCaptor</code>
              <p>Captures arguments passed to a method for inspection.</p>
              <pre>
                <code>
                  ArgumentCaptor&lt;Integer&gt; captor = ArgumentCaptor.forClass(Integer.class);
                  verify(service).process(captor.capture());
                </code>
              </pre>
            </li>
          </ul>
        </li>
      </ul>
  
      <hr/>
      </section>

      {/* Multiple Datasets  */}
      <section>
      <h3 className='section-header' id='multiple-dataset'>Multiple Datasets</h3>
      <p><code>@ParameterizedTest</code> can be used to switch out parameters or datasets for tests without duplicating code</p>
      <CodeBlock language='java'>{`
@ParameterizedTest
@EnumSource(enumClass = DatasetType.class)
void testDataset(DatasetType datasetType) {

    Data data = DatasetFactory.getDataset(datasetType);

    // run test with data
}
// =====================================================
public enum DatasetType {
    BASE,
    NON_CONTINUOUS
}
// =====================================================
public DatasetFactory {
    static Data getDataset(DatasetType type) {

        // setup data or parameters

        switch (type) {
            case BASE:
                src = "package-data.txt"
                break;
            case NON_CONTINUOUS:
                src = "noncontinuous-package-data.txt"
                break;
        }
        return new Dataset(src);
    }
}
`}      </CodeBlock>
      <hr/>
      </section>


       {/* Scenario  */}
      <section>
      <h3 className='section-header' id='scenario'>Scenario</h3>
      <p>For tests that require complex or mixed combinations, then scenario-based testing can be used. 
        Testing configuration can be managed through <code>json</code> files instead of in the code</p>

        <CodeBlock language='java'>{`
// Overall Flow
TestScenario s = ScenarioParser.parse(scenario.json)
ScenarioResult res = ScenarioRunner.run(scenario)
ScenarioValidator.validate(scenario, result)
// =====================================================
// TestScenario Flow

scenario.json (* scenario.json should match TestScenario or the class defined in ScenarioParser (using Jackson))
        ↓
RoutingScenarioTest
        ↓
TestScenario = ScenarioParser.parse(json) (* json can be parsed using Jackson)
        ↓
Result = ScenarioRunner.run(TestScenario) (* ScenarioRunner will run the scenario and return a result object)
        ↓
ScenarioValidator.validate(Result) (* ScenarioValidator will check the result against expected outcomes defined in the TestScenario)
        ↓
JUnit assertions
`}      </CodeBlock>    
      <hr/>
      </section>
    </>
  );
}