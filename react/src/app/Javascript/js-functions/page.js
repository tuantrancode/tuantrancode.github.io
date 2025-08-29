import React from 'react';
import CodeBlock from '@/components/shared/CodeBlock';

export const metadata = {
  title: "Javascript Functions",
  description: "Notes/Reference on various Javascript functions",
};

export default function JsFunctions() {

  return (
    <>
      {/*<!-- CALLING VS REFERENCING FUNCTION -->*/}
      <section>
        <h3 className="section-header" id="referenceFunction">Calling vs Referencing Function</h3>
        <p>In Javascript, whenever there is a set of parenthesis in front of a function, it will be called so only put parenthesis in front if you want the result from the function immediately</p>
        <ul>
          <li>When passing a function as a reference, leave the parenthesis out</li>
          <ul><li><code>addEventListener( &apos;click&apos;, myFunction)</code></li></ul>
          <li>If the function has arguments, wrap it in an arrow function or handler function to keep the reference</li>
          <ul>
            <li><code>addEventListener( &apos;click&apos;, () =&gt; myFunction(arg1))</code></li>
            <li><code>{`const handleFunc = () => myFunctino(arg1)`}</code> and then using it: <code>{`addEventListener('click', handleFunc)`}</code></li>
            </ul>
          <li>If you the result of the function immediately, put parenthesis in front of it</li>
          <ul>
            <li><code>if(!restoreState()) initialize();</code></li>
            <li><code>addEventListener( &apos;click&apos;, myFunction())</code> myFunction will run immediately here instead of waiting for event trigger</li>
          </ul>
        </ul>
        <hr />
      </section>

      {/*<!-- WRITING FUNCTIONS -->*/}
      <section>
        <h3 className="section-header" id="writingFunctions">Writing Javascript Functions</h3>
        <ul>
          <li><strong>Declaration</strong>: <code>function add(a, b) &#123; return a + b; &#125;</code></li>
          <li><strong>Expression</strong>: <code>const add = function(a, b) &#123; return a + b; &#125;</code></li>
          <ul>
            <li>Use the variable like a normal function: <code>add(2,3);</code></li>
          </ul>
          <li><strong>Arrow Function</strong>: can only be used inline and not through named declaration unless the function is assigned to a variable</li>
          <ul>
            <li>As Single Expression:</li>
            <ul>
              <li><code>() =&gt; &apos;return message&apos;;</code></li>
              <li><code>a =&gt; a**2;</code></li>
              <li><code>(a,b) =&gt; a + b;</code></li>
            </ul>
            <li>As a Block: requires curly bracket for multi-lines arrow function</li>
            <CodeBlock language='javascript'>{`
() => {
  statements;
}

param => {
  statements;
}

(param1, paramN) => {
  statements;
}`}</CodeBlock>
            <li>As an Object Literal: requires parenthesis around the function body; Javascript will read the content as an object and implicitly return it</li>
            <CodeBlock language='javascript'>{`
() => (
    { key: value }
)

// Same thing
() => {
    return { key: value };
}`}</CodeBlock>
            <li>More on Arrow Functions: <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions' target='_blank'>developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions</a></li>
          </ul>
          <li><strong>Named functions</strong> can also be declared in another function (useful in React to pass an event handler funtion to components)</li>
          <CodeBlock language='javascript'>{`
function outerFunction() {
    function innerFunction() {
        return 'Hello';
    }
    const a = innerFunction();
    return a;
}`}</CodeBlock>
        </ul>
        <hr />
      </section>

      {/*<!-- FUNCTION PARAMETERS -->*/}
      <section>
        <h3 className="section-header" id="functionParameters">Function Parameters</h3>
        <ul>
          <li><strong>Default Parameter</strong>: <code>function add(a, b = 5) { }</code></li>
          <li><strong>Rest Parameters</strong>: let the function accepts an indefinite number of arguments as an array</li>
          <CodeBlock language='javascript'>{`
function sum(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}`}</CodeBlock>
          <li><strong>arguments Object</strong>: useful if the function was called with more arguments than they declared</li>
          <CodeBlock language='javascript'>{`
function sum() {
  let total = 0;
  for (const arg of arguments) {
    total += arg;
  }
  return total;
}`}</CodeBlock>
          <ul>
            <li>rest parameter is preferred over using arguments object</li>
          </ul>
        </ul>
        <hr />
      </section>

      {/*<!-- Promises & Async -->*/}
      <section>
        <h3 className="section-header" id="promiseAsync">Promise & Async</h3>
        <p>Promise and Async allow Javascript to create background tasks and not block up the main thread.</p>
        <h4 className="sub-section-header">Creating a background task</h4>
        <ul>
          <li><strong>Method 1</strong>: using <code>Promise</code></li>
        </ul>
        <CodeBlock language='javascript'>{`
// Using new Promise()
function createPromise() {
    new Promise( function(onSuccess, onFailure) {
        // Do something
        onSuccess(successValue);
        onFailure(failureValue)
    });
}

// Arrow function form
createPromise = () => {
    new Promise ( (onSuccess, onFailure) => {
        //Do something
        onSuccess(successValue);
        onFailure(failureValue);
    });
}`}</CodeBlock>
        <ul>
          <li><strong>Method 2</strong>: using <code>async</code></li>
        </ul>
        <CodeBlock language='javascript'>{`
// using async
async function createPromise() {
    // Do something
    if (successful)
        return successValue;
    else
        throw new Error(failureValue);
};

// Arrow function form
createPromise = async () => {
    // Do something
    if (successful)
        return successValue;
    else
        throw new Error(failureValue);
}`}</CodeBlock>
        <h4 className="sub-section-header">Consuming a promise/ resolving a background task</h4>
        <ul>
          <li><strong>Method 1</strong>: using <code>.then() .catch() .finally()</code></li>
        </ul>
        <CodeBlock language='javascript'>{`
createPromise()
  .then( (successValue) => console.log(successValue) )
  .catch( (failureValue) => console.log('Error: ' + failureValue) )
  .finally( () => console.log('Gets called no matter what.') );`}</CodeBlock>
        <ul>
          <li><strong>Method 2</strong>: using <code>async</code> and <code>await</code></li>
        </ul>
        <CodeBlock language='javascript'>{`
async function getPromise() {
    try{
        successValue = await createPromise();
        console.log(successValue);
    } catch (error){
        console.log('Error: ' + error)
    } finally {
        console.log('Gets called no matter what.');
    }
}
getPromise();`}</CodeBlock>
        <h4 className="sub-section-header">Notes:</h4>
        <ul>
          <li><code>await</code> has to be used in an <code>async</code> function</li>
          <li><code>async / await</code> is cleaner when successive async calls are required (i.e. fetch data &rarr; convert json to data)</li>
        </ul>
        <p>Reference: <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promise' target='_blank'>developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promise</a></p>
        <hr />
      </section>

      {/*<!-- CHAINING PROMISES -->*/}
      <section>
        <h3 className="section-header" id="chainingPromises">Chaining Promises</h3>
        <CodeBlock language='javascript'>{`
createPromise()
  .then( (result1) => doSomething1(result1) )
  .then( (result2) => doSomething2(result2) )
  .catch( (rejected) => console.log('Error: ' + rejected) )`}</CodeBlock>
        <h4 className="sub-section-header">Notes:</h4>
        <ul>
          <li>Multiple <code>catch</code> should be avoided in a promise chain.</li>
          <li>Mixing <code>async</code> and normal functions is allowed.</li>
        </ul>
        <hr />
      </section>

      {/*<!-- FETCH API -->*/}
      <section>
        <h3 className="section-header" id="fetch">Fetch API</h3>
        <p><code>fetch</code> is used to make HTTP requests, using a <code>RequestInit</code> dictionary to add options to the request and processing the response by returning a <code>Response</code> object</p>
        <CodeBlock language='javascript'>{`
async function getData() {
    const url = 'https://example.org/products.json';
    try {
        const requestOptions = {
            method: 'POST',            
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer your-token-here'
            },
            body: jsonObj,
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'include'
        };
        const response = await fetch(url, requestOptions);
        if (!response.ok) {
        throw new Error('Response status: ' + response.status);
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error.message);
    }
}`}</CodeBlock>
        <h4 className="sub-section-header"><code>RequestInit</code> Parameters</h4>
        <ul>
          <li><code>method</code>: &apos;POST&apos;, &apos;GET&apos;, &apos;PUT&apos;, &apos;DELETE&apos;</li>
          <li><code>headers</code>:</li>
          <ul>
            <li><code>&apos;Content-Type&apos;</code>: <code>application/json</code>, <code>text/plain</code>, <code>image/jpeg</code>, etc.</li>
            <li><code>&apos;Authorization&apos;</code></li>
          </ul>
          <li><code>body</code>: a string, ArrayBuffer, Blob, File, FormData, etc.</li>
          <li><code>mode</code>: &apos;cors&apos;, &apos;no-cors&apos;, &apos;same-origin&apos;</li>
          <li><code>cache</code>: &apos;default&apos;, &apos;no-cache&apos;, &apos;reload&apos;, &apos;force-cache&apos;, &apos;only-if-cached&apos;</li>
          <li><code>credentials</code>: Whether to send cookies: &apos;omit&apos;, &apos;same-origin&apos;, &apos;include&apos;.</li>
          <li><code>redirect</code>: Redirect behavior: &apos;follow&apos;, &apos;error&apos;, &apos;manual&apos;.</li>
          <li><code>referrer</code>: referrer URL or &apos;about:client&apos;</li>
          <li><code>keepalive</code>: true/false; Whether the request can outlive the page (useful for analytics pings).</li>
          <li><code>signal</code>: Allows aborting the request using AbortController.</li>
        </ul>
        <h4 className="sub-section-header"><code>Response</code> Methods</h4>
        <ul>
          <li><code>arrayBuffer()</code></li>
          <li><code>blob()</code></li>
          <li><code>bytes()</code></li>
          <li><code>clone()</code></li>
          <li><code>json()</code></li>
          <li><code>text()</code></li>
          <li><code>formData()</code></li>
        </ul>
        <h4 className="sub-section-header">Notes</h4>
        <ul>
          <li>Fetch Reference: <a href='https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch' target='_blank'>developer.mozilla.org/en-US/docs/Web/API/Window/fetch</a></li>
          <li>RequestInit Reference: <a href='https://developer.mozilla.org/en-US/docs/Web/API/RequestInit' target='_blank'>developer.mozilla.org/en-US/docs/Web/API/RequestInit</a></li>
          <li>Response Reference: <a href='https://developer.mozilla.org/en-US/docs/Web/API/Response' target='_blank'>developer.mozilla.org/en-US/docs/Web/API/Response</a></li>
        </ul>
        <hr />
      </section>

      {/*<!-- GET AND POST -->*/}
      <section>
        <h3 className="section-header" id="getPost">GET & POST</h3>
        <p><strong>When to use GET</strong>:</p>
        <ul>
          <li>Retrieving data without changing anything on the server</li>
          <li>The request can be cached, bookmarked, and shared via URL.</li>
          <li>Limited by URL length (~2,000 characters in many browsers).</li>
          <li>Should not be used for sensitive data — query parameters are visible in the URL</li>
        </ul>
        <p><strong>When to use POST</strong>:</p>
        <ul>
          <li>Sending data that changes state on the server (e.g., creating/updating records).</li>
          <li>Sending large amounts of data (no URL length limit).</li>
          <li>Safer for sensitive data (data goes in request body, not URL — though still use HTTPS).</li>
          <li>Not cached by default.</li>
        </ul>
        <h4 className="sub-section-header">Notes</h4>
        <ul>
          <li>GET: safe, read-only operations</li>
          <li>POST: state-changing or large/ sensitive data submissions (use POST if in doubt)</li>
        </ul>
        <hr />
      </section>

      {/*<!-- URL AND URLSEARCHPARAMS -->*/}
      <section>
        <h3 className="section-header" id="url">URL & URLSearchParams Object</h3>
        <p><code>URL</code> and <code>URLSearchParams</code> objects are useful for constructing URL, especially for GET requests</p>
        <CodeBlock language='javascript'>{`
const u = new URL('https://example.com/path?tab=home');
const queryParams = new URLSearchParams(u.search);

queryParams.set('lang','en');       // add or update query parameter
queryParams.set('tab','profile');
u.search = queryParams.toString();  // update query

console.log(u.href);                // 'https://example.com/path?lang=en&tab=profile'`}</CodeBlock>
        <hr />
      </section>

      {/*<!-- CONTENT-TYPE -->*/}
      <section>
        <h3 className="section-header" id="content-type">Content-Type</h3>
        <table className="content-type-table">
          <thead>
            <tr>
              <th>Content-Type</th>
              <th>Description</th>
              <th>Example Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>application/json</td>
              <td>JSON-formatted data</td>
              <td>Sending API requests with JSON bodies</td>
            </tr>
            <tr>
              <td>application/x-www-form-urlencoded</td>
              <td>Form data encoded as key-value pairs</td>
              <td>HTML forms without enctype set to multipart/form-data</td>
            </tr>
            <tr>
              <td>multipart/form-data</td>
              <td>Form data with files or binary data</td>
              <td>File uploads in HTML forms</td>
            </tr>
            <tr>
              <td>text/plain</td>
              <td>Plain text</td>
              <td>Sending simple text in request/response</td>
            </tr>
            <tr>
              <td>text/html</td>
              <td>HTML markup</td>
              <td>Returning HTML content from a server</td>
            </tr>
            <tr>
              <td>application/xml</td>
              <td>XML-formatted data</td>
              <td>APIs that require XML</td>
            </tr>
            <tr>
              <td>text/xml</td>
              <td>XML as plain text</td>
              <td>Legacy XML APIs</td>
            </tr>
            <tr>
              <td>application/javascript</td>
              <td>JavaScript code</td>
              <td>Sending or returning JS scripts</td>
            </tr>
            <tr>
              <td>application/pdf</td>
              <td>PDF documents</td>
              <td>Sending or downloading PDFs</td>
            </tr>
            <tr>
              <td>image/png</td>
              <td>PNG image data</td>
              <td>Uploading or returning PNG images</td>
            </tr>
            <tr>
              <td>image/jpeg</td>
              <td>JPEG image data</td>
              <td>Uploading or returning JPEG images</td>
            </tr>
            <tr>
              <td>image/gif</td>
              <td>GIF image data</td>
              <td>Uploading or returning GIF images</td>
            </tr>
            <tr>
              <td>application/octet-stream</td>
              <td>Arbitrary binary data</td>
              <td>File downloads, binary uploads</td>
            </tr>
            <tr>
              <td>application/zip</td>
              <td>ZIP archives</td>
              <td>Sending or downloading ZIP files</td>
            </tr>
          </tbody>
        </table>
        <hr />
      </section>

      {/*<!-- TIMERS AND DATE AND NUMBER FORMATTING-->*/}
      <section>
        <h3 className="section-header" id="timers">Timers, Date, & Number Formatting</h3>
        <ul>
          <li><code>timeoutId = setTimeout( function(), time )</code> and <code>clearTimeout( timeOutId)</code></li>
          <CodeBlock language='javascript'>{`
const timeOutId = setTimeout(() => {
    console.log('This message is shown after 3 seconds');  
}, 3000);  // time in milliseconds

clearTimeout(timeOutId);`}</CodeBlock>
          <li><code>intervalId = setInterval( function(), time )</code> and <code>clearInterval( intervalId )</code></li>
          <CodeBlock language='javascript'>{`
let count = 0;
const intervalId = setInterval(() => {
    count++;
    console.log('This message is shown every 2 seconds');
    if (count === 5) {
        clearInterval(intervalId); // Stop after 5 times
    }
}, 2000);  // time in milliseconds`}</CodeBlock>
          <li>Date Object</li>
          <CodeBlock language='javascript'>{`
let now = new Date(); // Current date and time
let specificDate = new Date('2023-10-01T10:00:00'); // Specific date and time
let specificDateNum = new Date(2023, 9, 1, 10, 0, 0); // Note: month is 0-indexed (0=Jan, 9=Oct)

console.log(now.toISOString());     // ISO format
console.log(now.toLocaleString());  // Localized format
console.log(now.getFullYear());     // Get year
console.log(now.getMonth());        // Get month (0-11)
console.log(now.getDate());         // Get day of month (1-31)
console.log(now.getHours());        // Get hours (0-23)`}</CodeBlock>

          <li>Intl Object</li>
          <CodeBlock language='javascript'>{`
// Formatting numbers
let number = 1234567.89;
let formattedNumber = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number);
console.log(formattedNumber); // '$1,234,567.89'`}</CodeBlock>
          <ul>
            <li>More on Intl: <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl' target='_blank'>developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl</a></li>
          </ul>
        </ul>
        <hr />
      </section>

      {/*<!-- REDUCE METHOD-->*/}
      <section>
        <h3 className="section-header" id="reduce">Reduce Method</h3>
        <p><code>reduce()</code> method reduces an array to a single value by applying a function to each element, accumulating the result</p>
        <ul>
          <li><code>reduce( function(total, currentValue), initialValue)</code></li>
        </ul>
        <CodeBlock language='javascript'>{`
// Sum of an array of numbers
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);                     // Initial value is 0
console.log(sum);          // Output: 15

// Example with objects
const items = [
    { name: 'apple', price: 1.2 },
    { name: 'banana', price: 0.8 },
    { name: 'orange', price: 1.5 }
];
const totalPrice = items.reduce((accumulator, item) => {
    return accumulator + item.price;
}, 0);
console.log(totalPrice);  // Output: 3.5

// Example with functions
const asyncSequence = [func1, func2, func3];
asyncSequence.reduce((p, f) => p.then(f), Promise.resolve());
// Same as Promise.resolve().then(func1).then(func2).then(func3)`}</CodeBlock>
        <hr />
      </section>

      {/*<!-- MAP, FILTER, REDUCE, FOREACH -->*/}
      <section>
        <h3 className="section-header" id="mapFilterReduceForEach">Map, Filter, Reduce, forEach Methods</h3>
        <p>These methods are used to manipulate arrays in a functional programming style.</p>
        <ul>
          <li><code>forEach</code>: Executes a function for each element in the collection.</li>
          <ul>
            <li><code>forEach( function(element) )</code></li>
            <li>Available for Array, Set, and Map</li>
            <li>Use when there is a side effect to the loop (i.e. writing to a file)</li>
          </ul>
          <li><code>map</code>: Executes a function for each element in the array, and save the results in a new array</li>
          <ul>
            <li><code>map( function(element) )</code></li>
            <li>Available only for Array</li>
            <li>Use when you want a new array after processing old array</li>
          </ul>
          <li><code>filter</code>: Creates a shallow copy of the elements that passed the test provided by the Boolean function.</li>
          <ul>
            <li><code>filter( booleanFunction(element) )</code></li>
            <li>Available only for Array</li>
            <li>Use when you want a subset of the original array</li>
          </ul>
          <li><code>reduce</code>: Executes a function for each element in the array.</li>
          <ul>
            <li><code>reduce( function(total, currentValue), initialValue)</code></li>
            <li>Available only for Array</li>
            <li>For creating a new object composed of items from your array</li>
          </ul>
        </ul>
        <h4 className="sub-section-header">Notes</h4>
        <ul>
          <li>Use the spread operator to convert a Set into an Array to be able to use map(), reduce(), filter()</li>
          <ul>
            <li><code>const arr = [...mySet];</code></li>
          </ul>
        </ul>
      </section>

    </>
  );
}