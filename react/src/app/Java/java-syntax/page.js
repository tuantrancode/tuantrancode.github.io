import React from 'react';
import CodeBlock from '@/components/shared/CodeBlock';

export const metadata = {
  title: 'Java Syntax Comparison',
  description: 'Reference page to compare Java and Javascript syntax differences',
};

export default function JavaSyntax() {
  return (
    <div>
      {/* Differences Between Java and JavaScript Syntax */}
      <section>
        <h2 className='page-header' id='java-vs-javascript'>
          Differences Between Java and JavaScript Syntax
        </h2>

        <h3 className='section-header' id='variables'>
          Declaring variables
        </h3>
        <CodeBlock>{`// Java
int number = 10;

// JavaScript
let number = 10;`}</CodeBlock>
        <hr />
      </section>

      <section>
        <h3 className='section-header' id='functions-methods'>
          Functions / Methods
        </h3>
        <CodeBlock>{`// Java
public int add(int a, int b) {
    return a + b;
}

// JavaScript
function add(a, b) {
    return a + b;
}`}</CodeBlock>
        <hr />
      </section>

      <section>
        <h3 className='section-header' id='printing-output'>
          Printing output
        </h3>
        <CodeBlock>{`// Java
System.out.println("Hello World");

// JavaScript
console.log("Hello World");`}</CodeBlock>
        <hr />
      </section>

      <section>
        <h3 className='section-header' id='classes-constructors'>
          Classes and constructors
        </h3>
        <CodeBlock>{`// Java
public class Person {
    String name;
    public Person() {
        this("unknown");
    }
    public Person(String name) {
        this.name = name;
    }
}

// JavaScript
class Person {
    constructor(name) {
        this.name = name;
    }
}`}</CodeBlock>
        <hr />
      </section>

      <section>
        <h3 className='section-header' id='extending-class'>
          Extending a class
        </h3>
        <CodeBlock>{`// Java
public class Animal {
    public void speak() {
        System.out.println("Animal sound");
    }
}

public class Dog extends Animal {
    @Override
    public void speak() {
        System.out.println("Bark");
    }
}

// JavaScript
class Animal {
    speak() {
        console.log("Animal sound");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Bark");
    }
}`}</CodeBlock>
        <hr />
      </section>

      <section>
        <h3 className='section-header' id='abstract-classes'>
          Abstract classes
        </h3>
        <CodeBlock>{`// Java
abstract class Shape {
    abstract void draw();
}

class Circle extends Shape {
    void draw() {
        System.out.println("Drawing Circle");
    }
}

// JavaScript (no abstract keyword, emulate using error throwing)
class Shape {
    draw() {
        throw new Error("Method 'draw()' must be implemented");
    }
}

class Circle extends Shape {
    draw() {
        console.log("Drawing Circle");
    }
}`}</CodeBlock>
        <hr />
      </section>

      <section>
        <h3 className='section-header' id='interfaces'>
          Interfaces
        </h3>
        <CodeBlock>{`// Java
interface Drawable {
    void draw();
}

class Circle implements Drawable {
    public void draw() {
        System.out.println("Drawing Circle");
    }
}

// JavaScript (using TypeScript for proper interfaces)
interface Drawable {
    draw(): void;
}

class Circle implements Drawable {
    draw() {
        console.log("Drawing Circle");
    }
}

// Pure JavaScript alternative: define a "protocol" via convention
class Circle {
    draw() {
        console.log("Drawing Circle");
    }
}`}</CodeBlock>
        <hr />
      </section>

      <section>
        <h3 className='section-header' id='conditional-statements'>
          Conditional statements
        </h3>
        <CodeBlock>{`// Java
if (x > 0) {
    System.out.println("Positive");
} else {
    System.out.println("Negative");
}

// JavaScript
if (x > 0) {
    console.log("Positive");
} else {
    console.log("Negative");
}`}</CodeBlock>
        <hr />
      </section>

      {/* Primitives and Wrapper Classes */}
      <section>
        <h3 className='section-header' id='primitives'>
          Primitives and Wrapper Classes
        </h3>

        <p>Wrapper classes are objects wrapper of the primitives data</p>
        <table>
          <thead>
            <tr>
              <th>Primitive Type</th>
              <th>Wrapper Class</th>
              <th>Primitive Size (bytes)</th>
              <th>Approx. Wrapper Object Size (bytes)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>byte</td>
              <td>Byte</td>
              <td>1</td>
              <td>~16</td>
            </tr>
            <tr>
              <td>short</td>
              <td>Short</td>
              <td>2</td>
              <td>~16</td>
            </tr>
            <tr>
              <td>int</td>
              <td>Integer</td>
              <td>4</td>
              <td>~16</td>
            </tr>
            <tr>
              <td>long</td>
              <td>Long</td>
              <td>8</td>
              <td>~24</td>
            </tr>
            <tr>
              <td>float</td>
              <td>Float</td>
              <td>4</td>
              <td>~16</td>
            </tr>
            <tr>
              <td>double</td>
              <td>Double</td>
              <td>8</td>
              <td>~24</td>
            </tr>
            <tr>
              <td>char</td>
              <td>Character</td>
              <td>2</td>
              <td>~16</td>
            </tr>
            <tr>
              <td>boolean</td>
              <td>Boolean</td>
              <td>1 (conceptually)</td>
              <td>~16</td>
            </tr>
          </tbody>
        </table>

        <h4>Comparing Wrapper Classes</h4>
        <ul>
          <li>
            <code>objectVar & objectVar</code> :
          </li>
          <ul>
            <li>
              <code>objectVar == , != objectVar</code> will NOT behave as expected
            </li>
            <li>
              <code>objectVar &lt; , &gt; , &ge;, &le; objectVar</code> behave like normal
            </li>
          </ul>
          <li>
            <code>objectVar & primitiveVar/constants</code> :
          </li>
          <ul>
            <li>
              <code>objectVar == , != , &lt; , &gt; , &ge;, &le; objectVar</code> behave like normal
            </li>
          </ul>
        </ul>

          <h4>Use Cases of Wrapper Classes</h4>
          <ul>
            <li>Can be null</li>
            <li>Can be used where objects are required like in collections, reflection, serialization, streams</li>
            <li>Contain useful utility methods</li>
            <li>Java has autoboxing/unboxing which allow auto converting of primitive and wrapper between each other</li>
          </ul>
      </section>
    </div>
  );
}
