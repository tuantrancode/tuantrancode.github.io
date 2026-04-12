import React from 'react';
import CodeBlock from '@/components/shared/CodeBlock';
import Link from 'next/link';

export const metadata = {
  title: 'Design Principles',
  description: 'Notes on software design principles and best practices',
};

export default function DesignPrinciples() {
  return (
    <>
      {/* SOLID */}
<section>
  <h3 className="section-header" id="solid">SOLID</h3>
  <ul>
    <li><b>S</b>: Single Responsibility Principle (SRP): A class should have only one reason to change</li>
    <li><b>O</b>: Open/Closed Principle (OCP): Open for extension, closed for modification</li>
    <li><b>L</b>: Liskov Substitution Principle (LSP): Subtypes must be replaceable for their base types</li>
    <li><b>I</b>: Interface Segregation Principle (ISP): No client should depend on methods it does not use</li>
    <li><b>D</b>: Dependency Inversion Principle (DIP): Depend on abstractions, not concrete implementations</li>
  </ul>
  <hr/>

  <li><b>S</b> - Single Responsibility Principle (SRP): A class should have only one reason to change</li>
  <ul>
    <li>Each class should focus on a single responsibility</li>
    <li>Improves readability, testability, and maintainability</li>
  </ul>

  <CodeBlock language="java">{`
class Invoice {
  public double calculateTotal() {
    return 100;
  }
}

// BAD: multiple responsibilities
class InvoicePrinter {
  public void print(Invoice invoice) {}
  public void saveToDB(Invoice invoice) {}
}

// GOOD: separate responsibilities
class InvoiceRepository {
  public void save(Invoice invoice) {}
}

class InvoicePrinter {
  public void print(Invoice invoice) {}
}
  `}</CodeBlock>

<li><b>O</b> - Open/Closed Principle (OCP): Open for extension, closed for modification</li>
<ul>
  <li>You should be able to add new behavior without changing existing code</li>
</ul>

<CodeBlock language="java">{`
// BAD: Every new discount requires modifying this class
class DiscountCalculator {
  public double applyDiscount(String type, double price) {
    if (type.equals("SILVER")) {
      return price;
    } else if (type.equals("GOLD")) {
      return price * 0.9;
    } else if (type.equals("PLATINUM")) {
      return price * 0.8;
    }
    return price;
  }
}

// Adding a new discount means editing this class → violates OCP


// GOOD: Extend behavior without modifying existing code
interface Discount {
  double apply(double price);
}

class SilverDiscount implements Discount {
  public double apply(double price) {
    return price;
  }
}

class GoldDiscount implements Discount {
  public double apply(double price) {
    return price * 0.9;
  }
}

class PlatinumDiscount implements Discount {
  public double apply(double price) {
    return price * 0.8;
  }
}

class DiscountCalculator {
  public double applyDiscount(Discount discount, double price) {
    return discount.apply(price);
  }
}

// New discounts = new classes (no modification needed)
`}</CodeBlock>

  <li><b>L</b> - Liskov Substitution Principle (LSP): Subtypes must be replaceable for their base types</li>
  <ul>
    <li>Child classes should behave like parent classes without breaking functionality</li>
  </ul>

  <CodeBlock language="java">{`
class Bird {
  public void fly() {}
}

// BAD: Penguin can't fly
class Penguin extends Bird {
  public void fly() {
    throw new UnsupportedOperationException();
  }
}

// GOOD: separate behaviors
interface Bird {}

interface FlyingBird {
  void fly();
}
  `}</CodeBlock>

  <li><b>I</b> - Interface Segregation Principle (ISP): No client should depend on methods it does not use</li>
  <ul>
    <li>Prefer smaller, specific interfaces over large, general ones</li>
  </ul>

  <CodeBlock language="java">{`
interface Worker {
  void work();
  void eat();
}

// BAD: Robot doesn't eat
class Robot implements Worker {
  public void work() {}
  public void eat() {}
}

// GOOD: split interfaces
interface Workable {
  void work();
}

interface Eatable {
  void eat();
}
  `}</CodeBlock>

<li><b>D</b> - Dependency Inversion Principle (DIP): Depend on abstractions, not concrete implementations</li>
<ul>
  <li>High-level modules should not depend on low-level modules directly</li>
</ul>

<CodeBlock language="java">{`
// BAD: High-level class depends on concrete implementation
class MySQLDatabase {
  public void connect() {}
}

class Application {
  private MySQLDatabase db;

  public Application() {
    this.db = new MySQLDatabase(); // tightly coupled
  }
}

// Hard to switch to Postgres, MongoDB, etc.


// GOOD: Depend on abstraction (interface)
interface Database {
  void connect();
}

class MySQLDatabase implements Database {
  public void connect() {}
}

class PostgresDatabase implements Database {
  public void connect() {}
}

class Application {
  private Database db;

  public Application(Database db) {
    this.db = db; // injected dependency
  }
}

// Easy to swap implementations without changing Application
`}</CodeBlock>
  <hr/>
</section>

{/* DRY */}
<section>
  <h3 className="section-header" id="dry">DRY</h3>

  <li><b>DRY</b> - Don't Repeat Yourself: Avoid duplicating logic; centralize reusable code</li>
  <ul>
    <li>Duplication increases bugs and maintenance cost</li>
    <li>Change in one place should not require multiple updates</li>
  </ul>

  <CodeBlock language="java">{`
// BAD: duplicated logic in multiple places
class OrderService {
  public double calculateTotal(double price) {
    double tax = price * 0.1;
    return price + tax;
  }
}

class InvoiceService {
  public double calculateTotal(double price) {
    double tax = price * 0.1;
    return price + tax;
  }
}

// If tax logic changes, you must update multiple places


// GOOD: extract shared logic into a single reusable class
class TaxCalculator {
  public static double applyTax(double price) {
    return price + (price * 0.1);
  }
}

class OrderService {
  public double calculateTotal(double price) {
    return TaxCalculator.applyTax(price);
  }
}

class InvoiceService {
  public double calculateTotal(double price) {
    return TaxCalculator.applyTax(price);
  }
}
`}</CodeBlock>
  <hr/>
</section>

<section>
  <h3 className="section-header" id="kiss">KISS</h3>
  <li><b>KISS</b> - Keep It Simple, Stupid: Prefer simple, clear solutions over complex ones</li>
  <ul>
    <li>Avoid unnecessary abstractions and over-engineering</li>
    <li>Simple code is easier to read, debug, and maintain</li>
  </ul>

  <CodeBlock language="java">{`
// BAD: overly complex logic for a simple check
class UserService {
  public boolean isAdult(int age) {
    if ((age > 18 && age < 100) || age == 18) {
      return true;
    } else if (age > 100) {
      return true;
    } else {
      return false;
    }
  }
}


// GOOD: simple and readable
class UserService {
  public boolean isAdult(int age) {
    return age >= 18;
  }
}
`}</CodeBlock>

  <hr/>
</section>

{/* CLEAN CODE PRACTICES */}
<section>
  <h3 className="section-header" id="clean-code-practices">Clean Code Practices</h3>
  <ul>
    <li><b><u>Avoid Deep Nesting:</u></b> Use early returns to simplify logic</li>
    <li><b><u>Avoid duplicate code:</u></b> extract duplicate logic into separate method to be reused</li>

    <li><b>Meaningful Naming:</b> Use clear, descriptive names</li>
    <li><b>Limit Function Arguments:</b> Prefer fewer parameters (ideally ≤ 3)</li>
    <li><b>Small Functions:</b> Functions should do one thing</li>
    <li><b>Avoid Magic Numbers:</b> Replace hardcoded values with named constants</li>
    <li><b>Consistent Formatting:</b> Keep code style uniform</li>
    <li><b>Single Level of Abstraction:</b> Keep methods at one level of detail</li>
  </ul>
  <hr/>


  <li><b>Meaningful Naming:</b> Use clear, descriptive names</li>
  <ul>
    <li>Names should reveal intent and avoid ambiguity</li>
  </ul>

  <CodeBlock language="java">{`
// ❌ BAD: unclear naming
int d; // what is d?

// ✅ GOOD: descriptive naming
int daysSinceLastLogin;
`}</CodeBlock>


  <li><b>Small Functions:</b> Functions should do one thing</li>
  <ul>
    <li>Improves readability and testability</li>
  </ul>

  <CodeBlock language="java">{`
// ❌ BAD: multiple responsibilities
class UserService {
  public void processUser(User user) {
    validate(user);
    saveToDatabase(user);
    sendEmail(user);
  }
}


// ✅ GOOD: split responsibilities
class UserService {
  public void processUser(User user) {
    validate(user);
    save(user);
    notify(user);
  }

  private void validate(User user) {}
  private void save(User user) {}
  private void notify(User user) {}
}
`}</CodeBlock>


  <li><b>Avoid Magic Numbers:</b> Replace hardcoded values with named constants</li>

  <CodeBlock language="java">{`
// ❌ BAD
if (user.getAge() > 18) {}

// ✅ GOOD
static final int ADULT_AGE = 18;

if (user.getAge() > ADULT_AGE) {}
`}</CodeBlock>


  <li><b>Consistent Formatting:</b> Keep code style uniform</li>

  <CodeBlock language="java">{`
// ❌ BAD
if(x>10){doSomething();}

// ✅ GOOD
if (x > 10) {
  doSomething();
}
`}</CodeBlock>


  <li><b>Avoid Deep Nesting:</b> Use early returns to simplify logic</li>

  <CodeBlock language="java">{`
// ❌ BAD: deeply nested
if (user != null) {
  if (user.isActive()) {
    if (user.hasPermission()) {
      process(user);
    }
  }
}


// ✅ GOOD: early returns
// Uses inversion of conditions to reduce nesting
if (user == null) return;
if (!user.isActive()) return;
if (!user.hasPermission()) return;

process(user);
`}</CodeBlock>


  <li><b>Single Level of Abstraction:</b> Keep methods at one level of detail</li>

  <CodeBlock language="java">{`
// ❌ BAD: mixed abstraction levels
class OrderService {
  public void processOrder(Order order) {
    validate(order);
    double total = order.getItems().stream()
      .mapToDouble(item -> item.getPrice() * item.getQty())
      .sum();
    saveToDatabase(order, total);
  }
}


// ✅ GOOD: consistent abstraction
// Extracts nested logic into a separate method to make it easier to read
class OrderService {
  public void processOrder(Order order) {
    validate(order);
    double total = calculateTotal(order);
    save(order, total);
  }

  private double calculateTotal(Order order) {
    return order.getItems().stream()
      .mapToDouble(item -> item.getPrice() * item.getQty())
      .sum();
  }
}
`}</CodeBlock>


  <li><b>Limit Function Arguments:</b> Prefer fewer parameters (ideally ≤ 3)</li>

  <CodeBlock language="java">{`
// ❌ BAD: too many parameters
createUser(String name, int age, String email, String address, String phone) {}


// ✅ GOOD: use object
class User {
  String name;
  int age;
  String email;
}

createUser(User user) {}
`}</CodeBlock>


  <li><b>Use Early Abstraction (But Not Over-Engineering):</b></li>
  <ul>
    <li>Extract reusable logic, but avoid unnecessary complexity</li>
  </ul>

  <CodeBlock language="java">{`
// ❌ BAD: duplicated logic
double finalPrice1 = price + price * 0.1;
double finalPrice2 = anotherPrice + anotherPrice * 0.1;


// ✅ GOOD: reusable method
double applyTax(double price) {
  return price + price * 0.1;
}
`}</CodeBlock>

  <hr/>
</section>

{/* ADVANCED CLEAN CODE PRACTICES */}
<section>
  <h3 className="section-header" id="advanced-clean-code">Advanced Clean Code Practices</h3>

  <li><b>Immutability:</b> Prefer immutable objects to avoid unintended side effects</li>
  <ul>
    <li>Safer in concurrent systems and easier to reason about</li>
  </ul>

  <CodeBlock language="java">{`
// ❌ BAD: mutable object
class User {
  public String name;
}

User user = new User();
user.name = "Alice";
user.name = "Bob"; // changed unexpectedly


// ✅ GOOD: immutable object
final class User {
  private final String name;

  public User(String name) {
    this.name = name;
  }

  public String getName() {
    return name;
  }
}
`}</CodeBlock>


  <li><b>Pure Functions:</b> Avoid side effects; same input → same output</li>

  <CodeBlock language="java">{`
// ❌ BAD: modifies external state
int total = 0;

int add(int x) {
  total += x;
  return total;
}


// ✅ GOOD: pure function
int add(int a, int b) {
  return a + b;
}
`}</CodeBlock>


  <li><b>Fail Fast & Validate Early:</b> Catch errors as soon as possible</li>

  <CodeBlock language="java">{`
// ❌ BAD: error shows up later
void process(User user) {
  // assume user is valid
  save(user);
}


// ✅ GOOD: validate early
void process(User user) {
  if (user == null) {
    throw new IllegalArgumentException("User cannot be null");
  }
  save(user);
}
`}</CodeBlock>


  <li><b>Law of Demeter (LoD):</b> Don't talk to strangers (limit chaining)</li>
  <ul>
    <li>Avoid deep object navigation (train wrecks)</li>
  </ul>

  <CodeBlock language="java">{`
// ❌ BAD: deep chaining
String city = order.getCustomer().getAddress().getCity();


// ✅ GOOD: delegate responsibility
class Order {
  public String getCustomerCity() {
    return customer.getAddress().getCity();
  }
}

String city = order.getCustomerCity();
`}</CodeBlock>


  <li><b>Composition Over Inheritance:</b> Prefer combining behaviors over extending classes</li>

  <CodeBlock language="java">{`
// ❌ BAD: rigid inheritance
class Bird {}
class FlyingBird extends Bird {
  public void fly() {}
}


// ✅ GOOD: composition
interface FlyBehavior {
  void fly();
}

class CanFly implements FlyBehavior {
  public void fly() {}
}

class Bird {
  private FlyBehavior flyBehavior;

  public Bird(FlyBehavior flyBehavior) {
    this.flyBehavior = flyBehavior;
  }
}
`}</CodeBlock>


  <li><b>Avoid Side Effects:</b> Functions should not unexpectedly modify shared state</li>

  <CodeBlock language="java">{`
// ❌ BAD: hidden side effect
void applyDiscount(Order order) {
  order.setPrice(order.getPrice() * 0.9);
}


// ✅ GOOD: return new value instead
double applyDiscount(double price) {
  return price * 0.9;
}
`}</CodeBlock>


  <li><b>Use Value Objects Instead of Primitives:</b> Add meaning to data</li>

  <CodeBlock language="java">{`
// ❌ BAD: primitive obsession
void pay(double amount) {}


// ✅ GOOD: value object
class Money {
  private final double amount;

  public Money(double amount) {
    this.amount = amount;
  }

  public double getAmount() {
    return amount;
  }
}

void pay(Money money) {}
`}</CodeBlock>

  <hr/>
</section>

{/* IDEMPOTENCY */}
<section>
  <h3 className="section-header" id="idempotency">Idempotency</h3>

  <li><b>Definition:</b> Operations can be safely repeated without changing the result</li>
  <ul>
    <li>Important for APIs, payment systems, and distributed operations</li>
  </ul>

  <CodeBlock language="java">{`
// ❌ BAD: non-idempotent operation
class PaymentService {
  public void charge(String userId, double amount) {
    // calling this twice will double charge
    processPayment(userId, amount);
  }
}

// ✅ GOOD: idempotent using unique transaction ID
class PaymentService {
  private Set<String> processedTransactions = new HashSet<>();

  public void charge(String userId, double amount, String transactionId) {
    if (processedTransactions.contains(transactionId)) return;
    processPayment(userId, amount);
    processedTransactions.add(transactionId);
  }
}
`}</CodeBlock>

  <hr/>
</section>


    </>
  );
}
