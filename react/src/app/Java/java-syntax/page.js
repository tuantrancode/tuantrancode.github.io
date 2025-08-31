import React from "react";
import CodeBlock from "@/components/shared/CodeBlock";

export const metadata = {
    title: "Java Syntax Comparison",
    description: "Reference page to compare Java and Javascript syntax differences",
};

export default function JavaSyntax() {
  return (
    <div>
    
      {/* Differences Between Java and JavaScript Syntax */}
      <section>
        <h2 className="page-header" id="java-vs-javascript">
          Differences Between Java and JavaScript Syntax
        </h2>

        <h3 className="section-header" id="variables">
          Declaring variables
        </h3>
        <CodeBlock>{`// Java
int number = 10;

// JavaScript
let number = 10;`}</CodeBlock>

        <h3 className="section-header" id="functions-methods">
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

        <h3 className="section-header" id="printing-output">
          Printing output
        </h3>
        <CodeBlock>{`// Java
System.out.println("Hello World");

// JavaScript
console.log("Hello World");`}</CodeBlock>

        <h3 className="section-header" id="classes-constructors">
          Classes and constructors
        </h3>
        <CodeBlock>{`// Java
public class Person {
    String name;
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

        <h3 className="section-header" id="extending-class">
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

        <h3 className="section-header" id="abstract-classes">
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

        <h3 className="section-header" id="interfaces">
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

        <h3 className="section-header" id="conditional-statements">
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
      </section>
    </div>
  );
}
