import React from 'react';
import CodeBlock from '@/components/shared/CodeBlock';
import Link from 'next/link';

export const metadata = {
  title: 'Design Principles',
  description: 'Notes on software design principles and best practices',
};

export default function DesignPatterns() {
  return (
    <>
{/* DESIGN PATTERNS */} 
<section> 
    <h3 className="section-header" id="design-patterns">Design Patterns</h3> 
    <li><b>Definition:</b> Reusable solutions to common software design problems. Provide standard approaches to structure code for readability, maintainability, and scalability</li> 
    <ul> 
        <li><a href="https://refactoring.guru/design-patterns" target="_blank" rel="noopener noreferrer">Refactoring Guru - Design Patterns</a></li> 
        <li><b>Singleton</b>: Ensure a class has only one instance and provide global access</li> 
        <li><b>Factory</b>: Encapsulate object creation to reduce coupling</li> 
        <li><b>Strategy</b>: Encapsulate interchangeable behaviors and make them pluggable</li> 
        <li><b>Observer</b>: Define a one-to-many dependency so that when one object changes, all dependents are notified</li> 
        <li><b>Decorator</b>: Add behavior to objects dynamically without affecting other objects</li>
    </ul>
    <hr/>
</section>

{/* Architectural Layers */} 
<section> 
    <h3 className="section-header" id="architectural-layers">Architectural Layers</h3> 
    <ul>
        <li>Model</li>
        <li>DTO</li>
        <li>Controller</li>
        <li>Service</li>
        <li>Repository/DAO/Store</li>
    </ul>
   
    <hr/>
</section>


{/* STRATEGY PATTERN */}
<section>
  <h3 className="section-header" id="strategy-pattern">Strategy Pattern</h3>

  <li><b>Definition:</b> Encapsulate interchangeable behaviors and make them pluggable</li>
  <ul>
    <li><a href="https://refactoring.guru/design-patterns/strategy" target="_blank" rel="noopener noreferrer">Strategy Pattern - Refactoring Guru</a></li>
    <li>Answers: What implementation / behavior to use?</li>
    <ul>
        <li>Allow a central caller to use method without needing to know implementation or object type at compile time</li>
        <li>Do NOT allow customize methods arguments for each implementation</li>
    </ul>
    <li>Allows switching algorithms at runtime</li>
    <li>Use cases:</li>
    <ul>
        <li>Implementing different algorithms: routing algorithms, sorting algorithms</li>
        <li>Payment methods</li>
    </ul>
  </ul>

  <CodeBlock language="java">{`
// ❌ BAD: hard-coded behavior
class PaymentService {
  public void payByCreditCard() {}
  public void payByPaypal() {}
}

// ✅ GOOD: strategy pattern
interface PaymentStrategy {
  void pay(double amount);
}

class CreditCardPayment implements PaymentStrategy {
  public void pay(double amount) {}
}

class PaypalPayment implements PaymentStrategy {
  public void pay(double amount) {}
}

class PaymentService {
  private PaymentStrategy strategy;

  public PaymentService(PaymentStrategy strategy) {
    this.strategy = strategy;
  }

  public void pay(double amount) {
    strategy.pay(amount);
  }
}

// Usage
PaymentService service = new PaymentService(new PaypalPayment());
service.pay(100);
`}</CodeBlock>

  <hr/>
</section>

{/* OBSERVER PATTERN */}
<section>
  <h3 className="section-header" id="observer-pattern">Observer / Listener Pattern</h3>

  <li><b>Definition:</b> Define a one-to-many dependency so that when one object changes, all dependents are notified</li>
  <ul>
    <li><a href="https://refactoring.guru/design-patterns/observer" target="_blank" rel="noopener noreferrer">Observer Pattern - Refactoring Guru</a></li>
    <li>Answers: Who needs to react when something changes?</li>
    <ul>
        <li>Decouples the publisher from subscribers</li>
        <li>Allows dynamic subscription/unsubscription at runtime</li>
        <li>Publisher does NOT need to know concrete subscriber types</li>
    </ul>
    <li>Enables event-driven / reactive systems</li>
    <li>Use cases:</li>
    <ul>
        <li>Event systems (UI events, messaging systems)</li>
        <li>Notifications (email, logging, alerts)</li>
        <li>State change propagation (data updates)</li>
    </ul>
  </ul>

  <CodeBlock language="java">{`
// ❌ BAD: tight coupling
class NewsPublisher {
  public void publish(String news, NewsSubscriber subscriber) {
    subscriber.update(news);
  }
}

// ✅ GOOD: observer pattern
interface Subscriber {
  void update(String news);
}

class NewsPublisher {
  private List<Subscriber> subscribers = new ArrayList<>();

  public void subscribe(Subscriber s) { subscribers.add(s); }
  public void unsubscribe(Subscriber s) { subscribers.remove(s); }

  public void publish(String news) {
    for (Subscriber s : subscribers) {
      s.update(news);
    }
  }
}

class EmailSubscriber implements Subscriber {
  public void update(String news) {
    System.out.println("Email: " + news);
  }
}
`}</CodeBlock>

  <hr/>
</section>


{/* SINGLETON PATTERN */}
<section>
  <h3 className="section-header" id="singleton-pattern">Singleton Pattern</h3>

  <li><b>Definition:</b> Ensure a class has only one instance and provide global access</li>
  <ul>
    <li><a href="https://refactoring.guru/design-patterns/singleton" target="_blank" rel="noopener noreferrer">Singleton Pattern - Refactoring Guru</a></li>
    <li>Answers: How do we ensure only one shared instance exists?</li>
    <ul>
        <li>Restricts object creation to a single instance</li>
        <li>Provides controlled global access point</li>
        <li>Useful for shared resources/state</li>
    </ul>
    <li>Be careful: can introduce global state and tight coupling</li>
    <li>Use cases:</li>
    <ul>
        <li>Logging systems</li>
        <li>Configuration managers</li>
        <li>Shared caches or connection pools</li>
    </ul>
  </ul>

  <CodeBlock language="java">{`

class Logger {
  private static Logger instance;

  private Logger() {}

  public static Logger getInstance() {
    if (instance == null) {
      instance = new Logger();
    }
    return instance;
  }

  public void log(String message) {
    // log message
  }
}
`}</CodeBlock>

  <hr/>
</section>

{/* FACTORY PATTERN */}
<section>
  <h3 className="section-header" id="factory-pattern">Factory Pattern</h3>

  <li><b>Definition:</b> Encapsulate object creation to reduce coupling</li>
  <ul>
    <li><a href="https://refactoring.guru/design-patterns/factory-method" target="_blank" rel="noopener noreferrer">Factory Pattern - Refactoring Guru</a></li>
    <li>Answers: How do we create objects without exposing creation logic?</li>
    <li>Client should NOT use <code>new</code> directly</li>
    <li>Use cases:</li>
    <ul>
        <li>Object creation when not knowing type until runtime</li>
        <li>Strategy creation</li>
        <li>Save system resources by reusing existing objects instead of rebuilding them</li>
        <ul>
          <li>Uses an object pool to keep track of available objects</li>
        </ul>
    </ul>
  </ul>

  <CodeBlock language="java">{`
// ❌ BAD: scattered object creation
class ShapeService {
  public void drawShape(String type) {
    if (type.equals("circle")) {
      Circle c = new Circle();
    } else if (type.equals("rectangle")) {
      Rectangle r = new Rectangle();
    }
  }
}

// ✅ GOOD: factory pattern
interface Shape { void draw(); }

class Circle implements Shape { public void draw() {} }
class Rectangle implements Shape { public void draw() {} }

class ShapeFactory {

  public static Shape createShape(Enum type) {
    switch (type) {
      case CIRCLE: return new Circle();
      case RECTANGLE: return new Rectangle();
      default: throw new IllegalArgumentException("Unknown shape");
    }
  }

}

// Client
Shape s = ShapeFactory.createShape("circle");
s.draw();
`}</CodeBlock>

  <hr/>
</section>

{/* ABSTRACT FACTORY PATTERN */}
<section>
  <h3 className="section-header" id="abstract-factory-pattern">Abstract Factory Pattern</h3>

  <li><b>Definition:</b> Encapsulate a family of objects creation</li>
  <ul>
    <li><a href="https://refactoring.guru/design-patterns/abstract-factory" target="_blank" rel="noopener noreferrer">Abstract Factory Pattern - Refactoring Guru</a></li>
    <li>Instead of creating one object like in Factory pattern, Abstract Factory creates a group of related objects</li>
    <li>Use cases:</li>
    <ul>
        <li>To enforce consistency when the family of objects require each other to work properly</li>
        <li>When you don't know the type of objects to create until runtime</li>
    </ul>
  </ul>

  <CodeBlock language="java">{`
// FAST Mode:
// Fast Simulation, Fast Algorithm, Simple Validation
// ACCURATE Mode:
// Accurate Simulation, Brute Force Algorithm, Strict Validation

public interface SimulationFactory {
    Simulator createSimulator();
    Algorithm createAlgorithm();
    Validator createValidator();
}
// --------------------------------------------------------

public class FastSimulationFactory implements SimulationFactory {
    public Simulator createSimulator() { return new FastSimulator(); }
    public Algorithm createAlgorithm() { return new FastAlgorithm(); }
    public Validator createValidator() { return new SimpleValidator(); }
}

// --------------------------------------------------------
// Using the abstract factory
SimulationFactory factory = new FastSimulationFactory();

RoutePlanner planner = factory.createPlanner();
DistanceGraph graph = factory.createGraph();
PackageValidator validator = factory.createValidator();

`}</CodeBlock>

  <hr/>
</section>


{/* BUILDER PATTERN */}
<section>
  <h3 className="section-header" id="builder-pattern">Builder Pattern</h3>

  <li><b>Definition:</b> Separate the construction of a complex object from its representation</li>
  <ul>
    <li><a href="https://refactoring.guru/design-patterns/builder" target="_blank" rel="noopener noreferrer">Builder Pattern - Refactoring Guru</a></li>
    <li>How Lombok <code>@Builder</code> works</li>
    <li>Use cases:</li>
    <ul>
        <li>When the construction of an object is complex and involves numerous parameters</li>
    </ul>
  </ul>

  <CodeBlock language="java">{`
public class Route {

    private double totalDistance;
    private int startLocation;

    private Route(RouteBuilder builder) {
        this.totalDistance = builder.totalDistance;
        this.startLocation = builder.startLocation;
    }

    public static RouteBuilder builder() {
        return new RouteBuilder();
    }

    public static class RouteBuilder {
        private double totalDistance;
        private int startLocation;

        public RouteBuilder totalDistance(double totalDistance) {
            this.totalDistance = totalDistance;
            return this;
        }

        public RouteBuilder startLocation(int startLocation) {
            this.startLocation = startLocation;
            return this;
        }

        public Route build() {
            return new Route(this);
        }
    }
}

// =========================================================
// Usage
Route route = Route.builder()
    .totalDistance(100.0)
    .startLocation(1)
    .build();

`}</CodeBlock>

  <hr/>
</section>


{/* STATE PATTERN */}
<section>
  <h3 className="section-header" id="state-pattern">State Pattern</h3>

  <li><b>Definition:</b> Allow an object to alter its behavior when its internal state changes</li>
  <ul>
    <li><a href="https://refactoring.guru/design-patterns/state" target="_blank" rel="noopener noreferrer">State Pattern - Refactoring Guru</a></li>
    <li>Answers: How do we allow an object to change its behavior based on its state?</li>
    <li>Use cases:</li>
    <ul>
      <li>When the object behaves differently depending on its state (Ex: Video Player - LockedState, ReadyState, PlayingState)</li>
      <li>When a class contains massive conditionals that greatly changes how the class behave according to a class's field</li>
      <li>When an object has an enormous amount of states and the behavior of the object changes with each state</li>
    </ul>
  </ul>

  <CodeBlock language="java">{`
// ❌ BAD: Chain of conditionals
class Route {
  private ENUM Result { FAILED_DEADLINE, UNFINISHED_DELIVERY };
  public void setResult(Route.Result result) {
    this.result = result;
  }
}

class RouteService {
  public void validateRoute(Route route) {
  
    // Validate simulation result
    switch(route.getResult()){
        case Route.Result.FAILED_DEADLINE:
            algo.onFailDeadline();
            break;
        case Route.Result.UNFINISHED_DELIVERY:
            break;
    }

  }
}
route.setResult(Route.Result.FAILED_DEADLINE); // Set the flag for route

// =========================================================

// ✅ GOOD: Extract conditonal states into separate classes

interface RouteState {
  void handleResult(RouteService service);
}

class FailedDeadlineState implements RouteState {
  public void handleResult(RouteService service) {
    service.getAlgorithm().onFailDeadline();
  }
}

class UnfinishedDeliveryState implements RouteState {
    public void handleResult(RouteService service) { // do nothing }
}

class Route {
  private RouteState state;
  public void setState(RouteState state) {
    this.state = state;
  }
  public void handleResult(RouteService service) {
    state.handleResult(service);
  }
}

class RouteService {

  public void validateRoute(Route route) {
  
    // Validate simulation result
    route.handleResult(this);

  }
}
route.setState(new FailedDeadlineState()); // Set the state for route
`}</CodeBlock>

  <hr/>
</section>



{/* OBJECT POOL */}
<section>
  <h3 className="section-header" id="objects-pool">Objects Pool</h3>

  <li><b>Definition:</b> Object pool allow the reuse of objects that are expensive to create or destroy</li>
  <ul>
    <li>Proper synchronization when getting and releasing the objects are needed</li>
    <li>Use cases:
      <ul>
        <li>When creating objects is expensive in terms of resources or time</li>
        <li>DB connections</li>
      </ul>
    </li>
  </ul>

 <CodeBlock language="java">{`
public class ConnectionPoolFactory {

    private final Queue<DbConnection> available = new LinkedList<>();
    private final Set<DbConnection> inUse = new HashSet<>();

    private int counter = 0;
    private final int MAX_POOL_SIZE = 1;

    // Factory method (acquire)
    public synchronized DbConnection acquire() {

          while (available.isEmpty() && inUse.size() >= MAX_POOL_SIZE) {
            wait();   // block until someone releases
        }

        if (!available.isEmpty()) {
            DbConnection conn = available.poll();
            inUse.add(conn);
            return conn;
        }

        if (inUse.size() < MAX_POOL_SIZE) {
            DbConnection conn = new DbConnection(++counter);
            inUse.add(conn);
            return conn;
        }

        throw new RuntimeException("No available connections");
    }

    // Return to pool
    public synchronized void release(DbConnection conn) {
        if (conn == null) return;

        inUse.remove(conn);
        available.offer(conn);

        notifyAll(); // wake up waiting threads
    }
}

// =========================================================
// Usage

ConnectionPoolFactory pool = new ConnectionPoolFactory();
DbConnection c1 = pool.acquire();
pool.release(c1); // return to pool
DbConnection c2 = pool.acquire(); // reuses c1

DbConnection c3 = pool.acquire(); // Causes infinite wait since pool size is 1 and c2 is still in use
pool.release(c3); 

`}</CodeBlock>

  <hr/>
</section>


{/* RETRY-SAFE DESIGN */}
<section>
  <h3 className="section-header" id="retry-safe">Retry-Safe Design</h3>

  <li><b>Definition:</b> Design operations to safely retry in case of failure</li>
  <ul>
    <li>Duplicate requests should not be retried</li>
    <li>Retries should not introduce inconsistent state</li>
  </ul>

  <CodeBlock language="java">{`
// ❌ BAD: retry will duplicate side effects
void sendEmail(User user) {
  emailServer.send(user.getEmail());
}

// ✅ GOOD: retry-safe with idempotency key or check
// Uses id to ensure the same message isn't sent multiple times
void sendEmail(User user, String messageId) {
  if (sentMessages.contains(messageId)) return;
  emailServer.send(user.getEmail());
  sentMessages.add(messageId);
}
`}</CodeBlock>

  <hr/>
</section>



{/* DECORATOR PATTERN */}
<section>
  <h3 className="section-header" id="decorator-pattern">Decorator Pattern</h3>

  <li><b>Definition:</b> Add behavior to objects dynamically without affecting other objects</li>
  <ul>
    <li><a href="https://refactoring.guru/design-patterns/decorator" target="_blank" rel="noopener noreferrer">Decorator Pattern - Refactoring Guru</a></li>
    <li>Answers: What is added to the object?</li>
    <ul>
        <li>Wrap objects to add behavior without modifying them like adding lo</li>
        <li>Maintain same interface as the core object</li>
        <li>Supports stacking multiple behaviors dynamically</li>
    </ul>
    <li>Do NOT use to change core identity ("what it is")</li>
    <li>Can be used with Factory pattern to build complex objects with many decorators</li>
    <li>Use cases:</li>
    <ul>
        <li>Allow combinations of add-ons without class explosions</li>
        <li>Add-ons (coffee toppings, UI components)</li>
        <li>Logging, caching wrappers</li>
        <li>Auth / Security wrappers</li>
        <li>Retry-Fault tolerance wrappers</li>
        <li>Input vaidation wrappers</li>
    </ul>
  </ul>
   <figure>
      <img src="/assets/images/decorator-example.jpg" alt="decorator example" style={{display: 'block', width: '100%', padding: '5px 20px'}}/>
      <figcaption style={{ textAlign: "center", fontSize: "14px", marginTop: "6px" }}>Decorator Example from Refactoring Guru. 
        Combine both Strategy and Decorator Pattern to add different decorations to different data sources.
        There can also be SqlDataSource aside from FileDataSource</figcaption>
    </figure>

<CodeBlock language="java">{`
// ❌ BAD: subclass explosion
class FileDataSource {
  public void writeData(String data) {
    System.out.println("Writing to file: " + data);
  }

  public String readData() {
    return "file_data";
  }
}

class EncryptedFileDataSource extends FileDataSource {
  public void writeData(String data) {
    super.writeData("ENCRYPT(" + data + ")");
  }
}

class CompressedEncryptedFileDataSource extends FileDataSource {
  public void writeData(String data) {
    super.writeData("COMPRESS(ENCRYPT(" + data + "))");
  }
}
// ============================================
// ✅ GOOD: decorator with abstract class

// Component
interface DataSource {
  void writeData(String data);
  String readData();
}

// Concrete component
class FileDataSource implements DataSource {
  private String filename;

  public FileDataSource(String filename) {
    this.filename = filename;
  }

  public void writeData(String data) {
    System.out.println("Writing to " + filename + ": " + data);
  }

  public String readData() {
    return "data_from_" + filename;
  }
}

// Abstract decorator
abstract class DataSourceDecorator implements DataSource {
  protected DataSource wrappee;

  public DataSourceDecorator(DataSource source) {
    this.wrappee = source;
  }

  public void writeData(String data) {
    wrappee.writeData(data);
  }

  public String readData() {
    return wrappee.readData();
  }
}

// Concrete decorators
class EncryptionDecorator extends DataSourceDecorator {
  public EncryptionDecorator(DataSource source) {
    super(source);
  }

  public void writeData(String data) {
    String encrypted = "ENCRYPT(" + data + ")";
    super.writeData(encrypted);
  }

  public String readData() {
    String data = super.readData();
    return "DECRYPT(" + data + ")";
  }
}

class CompressionDecorator extends DataSourceDecorator {
  public CompressionDecorator(DataSource source) {
    super(source);
  }

  public void writeData(String data) {
    String compressed = "COMPRESS(" + data + ")";
    super.writeData(compressed);
  }

  public String readData() {
    String data = super.readData();
    return "DECOMPRESS(" + data + ")";
  }
}
// ============================================
// Usage examples:

// ✅ Usage 1: Recursive wrapping
DataSource source = new EncryptionDecorator(
                        new CompressionDecorator(
                            new FileDataSource("data.txt")
                        )
                    );

source.writeData("hello");
// Writing to data.txt: ENCRYPT(COMPRESS(hello))

System.out.println(source.readData());
// DECRYPT(DECOMPRESS(data_from_data.txt))

// Data flow:
// write: hello → compress → encrypt → file
// read: file → decompress → decrypt

// ✅ Usage 2: Conditional composition
boolean useEncryption = true;
boolean useCompression = true;

DataSource ds = new FileDataSource("data.txt");

if (useCompression) {
  ds = new CompressionDecorator(ds);
}

if (useEncryption) {
  ds = new EncryptionDecorator(ds);
}

ds.writeData("hello");
System.out.println(ds.readData());
// Output depends on flags and order
`}</CodeBlock>
<ul>
    <li>Order of decorators matters: encryption then compression is different from compression then encryption</li>
    <ul>
        <li>Reading data: DECRYPT(DECOMPRESS(data))</li>
        <li>Writing data: ENCRYPT(COMPRESS(data))</li>
        <li>The order <code>super.writeData()</code> and <code>super.readData()</code> in the decorator methods affects the final behavior</li>
    </ul>
</ul>
<li>Example of Adding Logging</li>
<CodeBlock language="java">{`
public interface RoutingService {
  void findRoute();
}
// --------------------------------------------------------
public class BaseRoutingService implements RoutingService {
  @Override
  public void findRoute() {}
}
// --------------------------------------------------------
public class LoggingRoutingService {
  private RoutingService inner;

  public LoggingRoutingService(RoutingService inner) {
    this.inner = inner;
  }

  @Override
  public void findRoute() {
    System.out.println("Logging: Finding route...");
    inner.findRoute();
    System.out.println("Logging: End");
  }
}
// --------------------------------------------------------
RoutingService service = new LoggingRoutingService( new BaseRoutingService() );
`}</CodeBlock>
    <hr/>
</section>

    </>
  );
}
