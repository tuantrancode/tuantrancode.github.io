import React from 'react';
import CodeBlock from '@/components/shared/CodeBlock';

export const metadata = {
  title: 'Typescript',
  description: 'Notes on using and converting to Typescript',
};

export default function Typescript() {
  return (
    <>
      {/* TYPESCRIPT OVERVIEW */}
      <section>
        <h3 className='section-header' id='overview'>
          Typescript Overview
        </h3>
        <p>
          <b>Added Features</b> :
        </p>
        <ul>
          <li>
            <b>Static Typing</b> : you can define types when declaring variables, function parameters, and return values
          </li>
          <CodeBlock language='jsx'>{`
let age: number = 25;

function greet(name: string): void {}

function add(a: number, b: number): number {
    return a + b;
}
            `}</CodeBlock>

          <li>
            <b>Interfaces & Types</b> : allow the use of interface like in Java
          </li>
          <CodeBlock language='jsx'>{`
interface User {
  name: string;
  age: number;
}

const user: User = { name: "Tuan", age: 999 };
            `}</CodeBlock>

          <li>
            <b>Interfaces & Types</b> : allow the use of enumeration, <code>enum</code>
          </li>
          <CodeBlock language='jsx'>{`
enum Color { Red, Green, Blue }
let c: Color = Color.Green;
            `}</CodeBlock>
        </ul>
        <hr />
      </section>

      {/* WRITING FUNCTIONS */}
      <section>
        <h3 className='section-header' id='functions'>
          Writing Functions
        </h3>

        <h4 className='sub-section-header'>Optional Parameters :</h4>
        <ul>
          <li>
            Use <code>?</code> after the parameter to make it optional
          </li>
          <li>
            <code>
              function greetUser(name: string, <mark>age?</mark>: number): string {`{}`}
            </code>
          </li>
        </ul>

        <h4 className='sub-section-header'>Default Parameters :</h4>
        <ul>
          <li>
            Use <code>=</code> after the type to define default for the parameters
          </li>
          <li>
            <code>
              function multiply(a: number, <mark>b: number = 2</mark>): number {`{}`}
            </code>
          </li>
        </ul>

        <h4 className='sub-section-header'>Function Type Aliases :</h4>
        <ul>
          <li>
            Use <code>type</code> to define reusable function types
          </li>
          <CodeBlock language='jsx'>{`
type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;

console.log(add(5, 3));      //  8
console.log(subtract(5, 3)); //  2

            `}</CodeBlock>
        </ul>

        <h4 className='sub-section-header'>Interfaces for Function Types :</h4>
        <ul>
          <li>
            <code>interface</code> can also be used to define reusable function types
          </li>
          <CodeBlock language='jsx'>{`
interface Greet {
  (name: string): string;
}

const sayHello: Greet = (name) => \`Hello, $\{name}\`;

console.log(sayHello("Bob")); //  "Hello, Bob"

            `}</CodeBlock>
        </ul>
        <hr />
      </section>

      {/* GENERICS */}
      <section>
        <h3 className='section-header' id='generics'>
          Generics
        </h3>
        <p>
          Allow the use of a placeholder, like <code>{`<T>`}</code> or <code>{`<U>`}</code> for the actual type
        </p>
        <ul>
          <li>Used when you don't know the type in advance</li>
          <li>Useful for making reusable functions, interfaces, or classes</li>
          <li>Can be used when working with data structures like arrays, objects, or APIs</li>
        </ul>

        <h4 className='sub-section-header'>Simple Generic :</h4>
        <ul>
          <li>Let Typescript infers the type automatically</li>
          <CodeBlock language='jsx'>{`
// Accepts unknown type, with T as an alias, and returns the same type
function identity<T>(value: T): T {
  return value;
}

const num = identity<number>(10);   // num: number
const num = identity(10);    // TS infers T = number 
            `}</CodeBlock>
        </ul>

        <h4 className='sub-section-header'>Generic Functions :</h4>
        <ul>
          <li>Make generic, reusable, but still type-safe functions</li>
          <CodeBlock language='jsx'>{`
// Merge two objects with unknown types, using T and U as aliases
function merge<T, U>(a: T, b: U): T & U {
  return { ...a, ...b };
}

const user = merge({ name: "Bob" }, { age: 22 });
// user: { name: string; age: number }

            `}</CodeBlock>
        </ul>

        <h4 className='sub-section-header'>Generic Interfaces :</h4>
        <ul>
          <li>Allow interface to hold generic data shapes</li>
          <CodeBlock language='jsx'>{`

interface ApiResponse<T> {
  success: boolean;
  data: T;
}

interface User {
    id: number;
    name: string 
}
    OR
type User {
    id: number;
    name: string 
}

// Defining separate type or interface
const userResponse: ApiResponse<User[]> = {
  success: true,
  data: [
    { id: 1, name: "Tuan" },
    { id: 2, name: "Bob" },
  ]
};

// Inlining the object's type
const productResponse: ApiResponse<string[]> = {
  success: true,
  data: ["Laptop", "Phone", "Tablet"],
};
            `}</CodeBlock>
        </ul>

        <h4 className='sub-section-header'>Generic Classes :</h4>
        <ul>
          <li>Making generic classes with unknown data type in it</li>
          <CodeBlock language='jsx'>{`
class Box<T> {
  content: T;

  constructor(value: T) {
    this.content = value;
  }

  getContent(): T {
    return this.content;
  }
}

const numberBox = new Box<number>(123);
const stringBox = new Box<string>("Hello");

console.log(numberBox.getContent()); // 123
console.log(stringBox.getContent()); // "Hello"

            `}</CodeBlock>
        </ul>

        <h4 className='sub-section-header'>Generic Constraints :</h4>
        <ul>
          <li>
            Use <code>extends</code> to only accept types with certain properties
          </li>
          <li>
            Generic constraint: <code>{`<T extends { length: number }>`}</code> means the function only allows T to be a
            type that has a <code>length</code> property of type <code>number</code>{' '}
          </li>
          <CodeBlock language='jsx'>{`
// Parameter item can be anything as long as it satisfies the constraint
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

getLength("Hello"); // ✅ 5
getLength([1, 2, 3]); // ✅ 3
getLength(123); // ❌ Error: number doesn't have "length"

----------------------------------------------
// Another way to write it
function getLength(item: { length: number }): number {
  return item.length;
}

            `}</CodeBlock>
        </ul>

        <h4 className='sub-section-header'>Default Generic Types :</h4>
        <ul>
          <li>Set the default for a type</li>
          <CodeBlock language='jsx'>{`
function createArray<mark><T = string></mark>(value: T, count: number): T[] {
  return Array(count).fill(value);
}

const arr1 = createArray("Hi", 3);   // T = string
const arr2 = createArray(5, 3);      // T = number
const arr3 = createArray(undefined, 3); // T = string by default
            `}</CodeBlock>
        </ul>
        <hr />
      </section>

      {/* CONVERTING TO TYPESCRIPT */}
      <section>
        <h3 className='section-header' id='converting'>
          Converting To Typescript
        </h3>

        <ol>
          <li>
            Install <code>typescript</code> and the type packages for any dependencies you use
          </li>
          <ul>
            <li>Next.js and Expo apps will automatically create a <code>tsconfig.json</code> file when run</li>
            <li>Expo</li>
          </ul>
          <CodeBlock language='jsx'>{`
// Install typescript and type package for react
npm install typescript @types/react

// For Web and if using API, Node.js
npm install @types/react-dom @types/node

// For mobile
npm install @types/react-native
          `}</CodeBlock>
         

          <li>
            Add/Update a <code>tsconfig.json</code> file with the sample compiler options below for React project if there isn't one
          </li>
          <p>Common Options</p>
          <ul>
                <li><code>target</code> : Decides which JavaScript version TypeScript compiles to.</li>
                <li><code>lib</code> : Defines built-in TypeScript libraries. Needed for browser + modern JS features.</li>
                <li><code>noEmit</code> : Tells TypeScript not to output JavaScript files (common for React).</li>
                <li><code>strict</code> : Enables all strict type checks.</li>
                <ul><li>Set to <code>false</code> while converting from Javascript to Typescript</li></ul>
                <li><code>baseUrl</code> : Set the root of the import.</li>
                <li><code>paths</code> : Creates import aliases.</li>
                <li><code>resolveJsonModule</code> : Lets you import <code>.json</code> files directly.</li>
                <li><code>allowJs</code> : Lets TypeScript compile .js files.</li>
                <li><code>include</code> : Tells TS where to look for source files.</li>
                <li><code>exclude</code> : Tells TS which folders to ignore.</li>
          </ul>
          <p>Other Options</p>
          <ul>
                <li><code>esModuleInterop</code> : Allows default imports for CommonJS modules.</li>
                <li><code>allowSyntheticDefaultImports</code> : Similar to above, but JSX-friendly.</li>
                <li><code>moduleResolution</code> : How TS finds imports.</li>
                <li><code>module</code> : Sets the module system for bundlers.</li>
                <li><code>jsx</code> : How JSX is compiled.</li>
                <li><code>noImplicitAny</code> : Warns if a variable has an implicit <code>any</code> type.</li>
                <li><code>strictNullChecks</code> : Forces you to handle null and undefined explicitly.</li>
                <li><code>strictFunctionTypes</code> : Forces you to handle null and undefined explicitly.</li>
                <li><code>strictBindCallApply</code> : Ensures functions have correct parameter types..</li>
          </ul>
          <CodeBlock language='jsx'>{`
{
  "compilerOptions": {
    "target": "ESNext",
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}
            `}</CodeBlock>

          <li>
            Rename Files from <code>.js / .jsx</code> to <code>.ts / .tsx</code>
          </li>

          <li>Fix Type Errors</li>

          <li>Configure ESLint for TypeScript</li>
          <ul>
            <li>Install plugins</li>
            <CodeBlock language='jsx'>{`
npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin
            `}</CodeBlock>
            <li>Update the typescript section in eslint config file</li>
            <CodeBlock language='jsx'>{`
{
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ]
}
            `}</CodeBlock>
          </ul>

          <li>Run and Fix TypeScript Errors</li>
          <CodeBlock language='jsx'>{`
npx tsc --noEmit
            `}</CodeBlock>
        </ol>
      </section>
    </>
  );
}
