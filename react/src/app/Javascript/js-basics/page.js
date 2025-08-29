import React from 'react';
import Link from 'next/link'
import CodeBlock from '@/components/shared/CodeBlock';

export const metadata = {
  title: "Javascript Basics",
  description: "Basics concept of Javascript",
};

export default function JsBasics() {

  return (
    <>
      {/*
<!-- JS FIDDLE -->
*/}
      <section>
        <h3 className='section-header' id='jsFiddle'>JS Fiddle</h3>
        <p><a href='https://jsfiddle.net/' target='_blank'>JS Fiddle</a> is a useful site to test out HTML, CSS, and
          Javascript snippets.</p>
        <hr />
      </section>

      {/*
<!-- BACKTICK AND STRING-->
*/}
      <section>
        <h3 className='section-header' id='backtick'>Backtick & String</h3>
        <CodeBlock language='javascript'>{`
const embeddedExpression = \`Current Year: \${new Date().getFullYear()}\`;
`}</CodeBlock>
        <ul>
          <li>Use backticks <code>`</code> in order to create a <strong>template literal</strong> string - string in Javascript
            that spans
            multiple lines and uses embedded expression ( i.e. $&#123;variableName&#125; )</li>
        </ul>
        <hr />
      </section>

      {/*
<!-- COMMENTS -->
*/}
      <section>
        <h3 className='section-header' id='comment'>Comments</h3>
        <CodeBlock language='javascript'>{`
// This line is a comment

/*
This block is also a comment
*/
`}</CodeBlock>
        <hr />
      </section>

      {/*
<!-- CONSOLE LOG -->
*/}
      <section>
        <h3 className='section-header' id='consoleLog'>Console Log</h3>
        <CodeBlock language='javascript'>{`
<mark>console.log</mark>("message");
try{
   // do something
} catch (e) {
   <mark>console.error</mark>("Do something failed: ", e.message)
} finally {
   console.log("Do something finished!")
}
`}</CodeBlock>
        <hr />
      </section>

      {/*
<!-- VARIABLES -->
*/}
      <section>
        <h3 className='section-header' id='variables'>Variables</h3>
        <ul>
          <li><code>const</code>: declare constant; can&pos;t be reassign</li>
          <li><code>let</code>: declare declare block-scoped variables</li>
          <li><code>var</code>: avoid in modern code; delcare function-scoped variables (accessible even behond
            <code>if</code> and <code>for</code> loops statements)
          </li>
          <li><code>$&#123;variableName&#125;</code>: allow for clean injecting of Javascript variables/ expressions into
            the middle of string without having to <code>variableName + &apos;string literal&apos;</code></li>
          <ul>
            <li>Only usuable in a String</li>
          </ul>
        </ul>
        <hr />
      </section>

      {/*
<!-- TYPES -->
*/}
      <section>
        <h3 className='section-header' id='types'>Variable Types</h3>
        <ul>
          <li><code>string</code>: &pos;hello&pos;</li>
          <li><code>number</code>: 5</li>
          <li><code>boolean</code>: true</li>
          <li><code>object</code>: &#123; key: value &#125;, [1, 2, 3], /regex/, new Date()</li>
          <li><code>function</code>: function () { }, class MyClass { }</li>
          <li><code>bigint</code>: 9007199254740992</li>
          <ul>
            <li><code>MAX_SAFE_NUMBER</code> = 9007199254740991</li>
          </ul>
          <li><code>symbol</code>: <code>Symbol(x)</code></li>
          <li><code>undefined</code>: a variable that has not been assigned a value</li>
        </ul>

        <h4 className='sub-section-header'>Unconventional Cases</h4>
        <CodeBlock language='javascript'>{`
// Numbers
typeof NaN === "number"; // Despite being "Not-A-Number"
typeof Number("shoe") === "number"; // Number tries to parse things into numbers

// Strings
typeof typeof 1 === "string"; // typeof always returns a string
typeof String(1) === "string"; // String converts anything into a string, safer than toString

// Booleans
typeof Boolean(1) === "boolean"; // Boolean() will convert values based on if they're truthy or falsy
typeof !!1 === "boolean"; // two calls of the ! (logical NOT) operator are equivalent to Boolean()

// Objects
typeof null === "object"; // null is also treated as false and 0;

// Avoid
typeof new Boolean(true) === "object";
typeof new Number(1) === "object";
typeof new String("abc") === "object";
`}</CodeBlock>

        <h4 className='sub-section-header'>Notes</h4>
        <ul>
          <li><code>typeof</code> can be used to identify type</li>
          <li><code>instanceof</code> can be used to check if object is sublcass of another</li>
          <ul>
            <li><code>instanceof Array</code> : check if something is an array</li>
          </ul>
        </ul>
        <hr />
      </section>

      {/*
<!-- DATA STRUCTURES -->
*/}
      <section>
        <h3 className='section-header' id='dataStructures'>Data Structures</h3>

        <table className='datastructures-table'>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Array</th>
              <th>Object</th>
              <th>Set</th>
              <th>Map</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Type of keys:</strong></td>
              <td>Numeric indexes (0,1,2...)</td>
              <td>Strings or Symbols</td>
              <td>Values only (no keys)</td>
              <td>Any value (objects, functions, primitives)</td>
            </tr>
            <tr>
              <td><strong>Allows duplicate values:</strong></td>
              <td>Yes</td>
              <td>N/A (keys must be unique)</td>
              <td>No (all values are unique)</td>
              <td>Keys unique, values can duplicate</td>
            </tr>
            <tr>
              <td><strong>Order guaranteed:</strong></td>
              <td>Yes (insertion order)</td>
              <td>No (property order is mostly insertion-based but not reliable for all cases)</td>
              <td>Yes (insertion order)</td>
              <td>Yes (insertion order)</td>
            </tr>
            <tr>
              <td><strong>Iteration support:</strong></td>
              <td><code>for, for...of, forEach, map, filter, reduce</code></td>
              <td><code>for...in, Object.keys/values/entries</code></td>
              <td><code>for...of, forEach</code></td>
              <td><code>for...of, forEach</code></td>
            </tr>
            <tr>
              <td><strong>Primary use case:</strong></td>
              <td>Ordered list of values</td>
              <td>Key-value pairs, fast property lookup</td>
              <td>Unique values collection</td>
              <td>Key-value pairs with any key type</td>
            </tr>
            <tr>
              <td><strong>Performance for lookups:</strong></td>
              <td>O(1) by index</td>
              <td>O(1) by key (hash map under the hood)</td>
              <td>O(1) for presence checks</td>
              <td>O(1) for presence checks</td>
            </tr>
            <tr>
              <td><strong>Common methods:</strong></td>
              <td><code>push, pop, map, filter, reduce</code></td>
              <td><code>Object.keys, Object.values, hasOwnProperty</code></td>
              <td><code>add, delete, has, clear</code></td>
              <td><code>set, get, has, delete, clear</code></td>
            </tr>
          </tbody>
        </table>

        <h4 className='sub-section-header'>Notes</h4>
        <ul>
          <li><code>Array</code> is best for ordered lists and sequential data.</li>
          <li><code>Object</code> is the traditional key-value structure, but keys are limited to strings/symbols.
          </li>
          <li><code>Set</code> ensures uniqueness, useful for deduplication.</li>
          <li><code>Map</code> is more flexible than objects since keys can be any type.</li>
        </ul>
        <hr />
      </section>

      {/*
<!-- OPERATORS -->
*/}
      <section>
        <h3 className='section-header' id='operators'>Operators</h3>
        <ul>
          <li><code>%</code>: modulo (remainder)</li>
          <li><code>**</code>: exponentiation</li>
          <li><code>++</code>: increment</li>
          <li><code>--</code>: decrement</li>
          <li><code>==</code>: equality (type conversion allowed)</li>
          <li><code>===</code>: strict equality (no type conversion)</li>
          <li><code>!=</code>: inequality</li>
          <li><code>!==</code>: strict inequality</li>
          <li><code>&&</code>: logical AND</li>
          <li><code>||</code>: logical OR</li>
          <li><code>??</code>: nullish coalescing (returns right side only if left is null/undefined)</li>
        </ul>
        <hr />
      </section>

      {/*
<!-- CONDITIONALS -->
*/}
      <section>
        <h3 className='section-header' id='conditionals'>Conditionals</h3>
        <CodeBlock language='javascript'>{`
const value = 5;

// if / else
if (value > 3) {
  console.log("Greater than 3");
} else {
  console.log("Less than or equal to 3");
}

// ternary operator
const result = value > 3 ? "Big" : "Small";
console.log(result);

// switch statement
switch (value) {
  case 1:
    console.log("One");
    break;
  case 5:
    console.log("Five");
    break;
  default:
    console.log("Unknown");
}
`}</CodeBlock>
        <hr />
      </section>


      {/*<!-- OPERATORS -->*/}
      <section>
        <h3 className='section-header' id='truthyFalsy'>Truthy & Falsy</h3>
        <table>
          <caption><strong>JavaScript Truthy vs Falsy Values</strong></caption>
          <thead>
            <tr>
              <th>Value / Example</th>
              <th>Type</th>
              <th>Boolean Result</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- FALSY --> */}
            <tr>
              <td><code>0</code>, <code>-0</code></td>
              <td>Number</td>
              <td>Falsy</td>
              <td>Zero values are falsy.</td>
            </tr>
            <tr>
              <td><code>0n</code></td>
              <td>BigInt</td>
              <td>Falsy</td>
              <td>BigInt zero is falsy.</td>
            </tr>
            <tr>
              <td><code>NaN</code></td>
              <td>Number</td>
              <td>Falsy</td>
              <td>Result of invalid numeric ops.</td>
            </tr>
            <tr>
              <td><code>""</code></td>
              <td>String</td>
              <td>Falsy</td>
              <td>Empty string only.</td>
            </tr>
            <tr>
              <td><code>null</code></td>
              <td>Null</td>
              <td>Falsy</td>
              <td>Intentional “no value”.</td>
            </tr>
            <tr>
              <td><code>undefined</code></td>
              <td>Undefined</td>
              <td>Falsy</td>
              <td>Uninitialized / missing value.</td>
            </tr>

            {/* <!-- TRUTHY --> */}
            <tr>
              <td>Non-zero numbers (e.g., <code>1</code>, <code>-1</code>, <code>Infinity</code>)</td>
              <td>Number</td>
              <td>Truthy</td>
              <td>All non-zero numbers are truthy.</td>
            </tr>
            <tr>
              <td>Non-empty strings (e.g., <code>"0"</code>, <code>"false"</code>, <code>" "</code>)</td>
              <td>String</td>
              <td>Truthy</td>
              <td>Even <em>"0"</em> and <em>"false"</em> are truthy.</td>
            </tr>
            <tr>
              <td><code>{`\{}`}</code></td>
              <td>Object</td>
              <td>Truthy</td>
              <td>Empty object is truthy.</td>
            </tr>
            <tr>
              <td><code>[]</code></td>
              <td>Array</td>
              <td>Truthy</td>
              <td>Empty array is truthy.</td>
            </tr>
            <tr>
              <td><code>function() { }</code></td>
              <td>Function</td>
              <td>Truthy</td>
              <td>All functions are truthy.</td>
            </tr>
            <tr>
              <td><code>Symbol()</code></td>
              <td>Symbol</td>
              <td>Truthy</td>
              <td>All symbols are truthy.</td>
            </tr>
            <tr>
              <td>Non-zero BigInt (e.g., <code>1n</code>, <code>-5n</code>)</td>
              <td>BigInt</td>
              <td>Truthy</td>
              <td>Any BigInt except <code>0n</code>.</td>
            </tr>
            <tr>
              <td>Objects like <code>new Date()</code>, <code>new Map()</code>, <code>new Set()</code></td>
              <td>Object</td>
              <td>Truthy</td>
              <td>Empty Map/Set are still truthy.</td>
            </tr>
          </tbody>
        </table>

        <hr />
      </section>


      {/*
<!-- LOOPS -->
*/}
      <section>
        <h3 className='section-header' id='loops'>Loops</h3>
        <CodeBlock language='javascript'>{`
// for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// while loop
let count = 0;
while (count < 3) {
  console.log(count);
  count++;
}

// do...while loop
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 3);

// for...of loop (arrays)
const arr = [1, 2, 3];
for (const num of arr) {
  console.log(num);
}

// for...in loop (objects)
const obj = { a: 1, b: 2 };
for (const key in obj) {
  console.log(key, obj[key]);
}
`}</CodeBlock>
        <hr />
      </section>

      {/*
<!-- CLASSES -->
*/}
      <section>
        <h3 className='section-header' id='classes'>Classes</h3>
        <p>Same as Java classes</p>
        <CodeBlock language='javascript'>{`
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(\`\${this.name} makes a sound\`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(\`\${this.name} barks\`);
  }
}

const dog = new Dog("Rex");
dog.speak(); // Rex barks
`}</CodeBlock>
        <hr />
      </section>

      {/*
<!-- IMPORTING -->
*/}
      <section>
        <h3 className="section-header" id="importing">Importing</h3>
        <p> An alias can be used to replace really long names by using <code>as</code> (i.e.
          <code>import &#123;reallyLongName as newName&#125; from &apos;script.js&apos; </code>)
        </p>
        <ul>
          <li><strong>Named Import</strong>: import any exported Javascript bindings (i.e. functions,
            variables/constants, classes, objects)</li>
          <CodeBlock language='javascript'>{`//In script2.js
<mark>import {myFunction, MyClass} from "script1.js";</mark>

myFunction();
const v = new MyClass();
------------------------------------------------
//In script1.js
export function myFunction{}
export class MyClass{}`}</CodeBlock>
          <li><strong>Default Import</strong>: import any exported default Javascript bindings</li>
          <ul>
            <li>Only one default can exist in each Javascript file</li>
          </ul>
          <ul>
            <li>Any new alias can be given to the default</li>
          </ul>
          <CodeBlock language='javascript'>{`//In script2.js
<mark>import NewNameClass from "script1.js";</mark>

const v = new NewNameClass();
------------------------------------------------
//In script1.js
export default class MyClass{}`}</CodeBlock>
          <li><strong>Namespace Import</strong>: import ALL exported Javascript bindings</li>
          <CodeBlock language='javascript'>{`//In script2.js
<mark>import * as myModule from "script1.js";</mark>

myModule.myFunction();
const v = new myModule.NewNameClass();
------------------------------------------------
//In script1.js
export function myFunction{}
export class MyClass{}`}</CodeBlock>
          <li><strong>Side Effect Import</strong>: doesn&apos;t import anything, but instead run all the global
            code of
            the module</li>
          <CodeBlock language='javascript'>{`//In script2.js
<mark>import "script1.js";</mark>

//myFunction is being run from the script2.js
------------------------------------------------
//In script1.js
export function myFunction{}
myFunction();`}</CodeBlock>
        </ul>
        <hr />
      </section>

      {/* <!-- IMPORTING INTO HTML --> */}
      <section>
        <h3 className="section-header" id="importingIntoHTML">Importing into HTML</h3>
        <p>The section in <Link href="/#linkingJS"> <strong>HTML Basics</strong></Link> covered it.</p>
        <hr></hr>
      </section>

      {/*<!-- DESTRUCTURING -->*/}
      <section>
        <h3 className="section-header" id="destructuring">Destructuring Syntax</h3>
        <p>Destructuring syntax can be used on arrays and objects to simplify code by using shorthand to unpack
          values into distinct variables</p>
        <ul>
          <li>The values of an array can be unpacked into an array of distinct variables; likewise, the properties
            of an object can be unpacked into an object with the same number of dinstinct variables</li>
          <li>When destructuring an array, the order of the distinct variables matter</li>
          <li>When destructuring an object, only the name of the properties matter and not the order, but requires
            parenthesis around the whole statement</li>
          <li>It&apos;s useful for destructuring function arguments</li>
        </ul>
        <CodeBlock language='javascript'>{`// JS

// Destructuring array (order matter)
const array = [1, 2, 3, 4, 5];
let first, second, rest;
[first, second, ...rest] = array;   
// first = 1, second = 2, rest = [3, 4, 5]

------------------------------------------------
// Destructuring object (order does not matter, but need () )
const obj = { 
    prop1: 1, 
    prop2: 2, 
    prop3: 3,
    prop4: { 
        a:10, 
        b:11, 
        c:12 
    } 
};
let prop1, prop2, prop3, prop4, rest, a;

( {prop1, prop2, ...rest} = obj );   // parenthesis around the whole statement to tell JS it's an object literal
// prop1 = 1, prop2 = 2, rest = { prop3: 3,  prop4: { a:10, b:11, c:12} }

( {prop3, prop4:{a} } = obj );  
// prop3 = 3, prop4 = undefined, a = 10 

------------------------------------------------
// Destructuring works well with function arguments
function myFunction(props) {
    const prop1 = props.prop1;
    ...
}
function myFunction( {prop1} ){
    ...
}`}</CodeBlock>
        <hr />
      </section>

      {/*<!-- COMPUTED PROPERTY NAMES -->*/}
      <section>
        <h3 className="section-header" id="computedProperty">Computed Property Name</h3>
        <p>Normally, the keys of an object are literal, i.e. <code>const obj = &123;key: 1 &125;;</code> would have <code>key</code> itself as the key, but Computed Property Name allow Javascript to dynamically assign keys to object by replacing them with Javascript expressions. </p>
        <ul>
          <li>In order to use the value of a variable or expression as an object&apos;s key, add brackets <code>[]</code> around it</li>
          <ul>
            <li><code>const obj = &123;[expression]: value &125;;</code></li>
          </ul>
          <li>This syntax can only be used on objects&apos; keys</li>
          <li>Useful in creating React forms or merging objects dynamically or when keys are not known until runtime</li>
        </ul>
        <CodeBlock language='javascript'>{`// JS

// Use for merging objects dynamically (i.e. updating an object field)
const field = "email";
const value = "alice@example.com";

const user = {name: "Alice", email: "old@example.com" };

// Create a new object with updated field dynamically
const updatedUser = {
  ...user,
  [field]: value 
};

          console.log(updatedUser);
// {name: 'Alice', email: 'alice@example.com' }`}</CodeBlock>
        <br />
        <CodeBlock language='javascript'>{`// JS

// Use for building API payloads based on user input 
const params = ["sortBy", "filter"];
const values = ["date", "active"];

const payload = {
  [params[0]]: values[0],
  [params[1]]: values[1],
};

            console.log(payload);
// {sortBy: 'date', filter: 'active' }`}</CodeBlock>
        <br />
        <CodeBlock language='javascript'>{`// JS

// Computed keys with expressions
const i = 1;
const obj = {
  ["item_" + i]: "apple",
  ["item_" + (i + 1)]: "banana"
};

console.log(obj);
// {item_1: 'apple', item_2: 'banana' }`}</CodeBlock>
        <hr />
      </section>


      {/*<!-- FUNCTION FACTORY -->*/}
      <section>
        <h3 className="section-header" id="funFactory">Function Factory</h3>
        <p><code>funFactory(row) =&gt; () =&gt; &#123;return(row)&#125; </code></p>
        <ul>
          <li><code>funFactory</code> will return a function <code>() =&gt; &#123;return(row)&#125; </code> that always return the value of <code>row</code></li>
          <li>If <code>row</code> was an object, the reference will be saved by the factory; a copy or clone is needed to save the object's values</li>
          <li>Can be useful for creating handlers to functions, configurating their parameters, and memoization</li>
        </ul>
        <CodeBlock language='jsx'>{`
// Creating event handlers or callbacks
function clickLoggerFactory(message) {
  return () => console.log(\`Clicked: $\{message}\`);
}

button1.onclick = clickLoggerFactory("button1");
button2.onclick = clickLoggerFactory("button2");

------------------------------------------------------------
// Configurating function parameters
function apiCallerFactory(apiUrl) {
  return async (endpoint) => {
    const res = await fetch(\`$\{apiUrl}/$\{endpoint}\`);
    return res.json();
  };
}
const githubAPI = apiCallerFactory("https://api.github.com");
githubAPI("users/octocat").then(console.log);

------------------------------------------------------------
// Memoization
function memoAddFactory() {
  const cache = {};
  return (a, b) => {
    const key = \`$\{a},$\{b}\`;
    if (!(key in cache)) cache[key] = a + b;
    return cache[key];
  };
}
const addMemo = memoAddFactory();
console.log(addMemo(2, 3)); // 5
console.log(addMemo(2, 3)); // cached result: 5
`}</CodeBlock>
      </section>
    </>
  );
}