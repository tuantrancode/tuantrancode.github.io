import React from 'react';
import CodeBlock from '@/components/shared/CodeBlock';

export const metadata = {
  title: "Form using React",
  description: "Notes on making form using React",
};

export default function ReactForm() {

  return (
    <>
      <section>
        {/*<!-- CONTROLLED VS UNCONTROLLED ELEMENTS -->*/}
        <h3 className="section-header" id="differences">Differences Between HTML Form</h3>
        <ul>
          <li>The <code>for</code> attribute in HTML form is replaced by <code>htmlFor</code> in React</li>
          <ul>
            <li><code>&lt;label htmlFor="nameId"&gt;Name:&lt;/label&gt;</code></li>
          </ul>
        </ul>
        <hr />
      </section>

      <section>
        {/*<!-- CONTROLLED VS UNCONTROLLED ELEMENTS -->*/}
        <h3 className="section-header" id="controlledVsUncontrolled">Controlled vs Uncontrolled Elements</h3>
        <p>A controlled input is one where the <code>&lt;input&gt;</code>, <code>&lt;select&gt;</code>, or
          <code>&lt;textarea&gt;</code> element sets the <code>value</code> attribute/prop. Then React expects the app
          to update that value via <code>onChange</code>
        </p>
        <ul>
          <li>Nothing will show up even if the user tries typing in input</li>
          <li>Requires app to handle onChange event to update the <code>value</code></li>
          <li>If the input type is <code>file</code>, then an uncontrolled element is required</li>
        </ul>
        <p>An uncontrolled input is when the <code>value</code> attribute/prop is not set</p>

        <CodeBlock language='jsx'>
          {`// Controlled input
function Input() {
  const [query, setQuery] = useState('');
  function handleChange(event) {
    setQuery(() => event.target.value);
  }

  return (
    <input
      type="text"
      value={query}    // controlled
      onChange={handleChange} // needed to update state
      placeholder="Search..."
    />
  );
}`}
        </CodeBlock>

        <CodeBlock language='jsx'>
          {`// Uncontrolled input
function Input() {
  return <input type="text" placeholder="Search..." />;
}`}
        </CodeBlock>

        <h4 className="sub-section-header">Common elements that can be controlled</h4>
        <p>They will need an <code>onChange</code> event handler to update the prop</p>
        <table>
          <thead>
            <tr>
              <th>Element</th>
              <th>Controlled Prop</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>&lt;input type="text" /&gt;</td>
              <td>value</td>
              <td>Standard text input.</td>
            </tr>
            <tr>
              <td>&lt;input type="password" /&gt;</td>
              <td>value</td>
              <td>Same as text input.</td>
            </tr>
            <tr>
              <td>&lt;input type="number" /&gt;</td>
              <td>value</td>
              <td>Value is a string; convert to number if needed.</td>
            </tr>
            <tr>
              <td>&lt;input type="email" /&gt;</td>
              <td>value</td>
              <td>Same as text input.</td>
            </tr>
            <tr>
              <td>&lt;input type="checkbox" /&gt;</td>
              <td>checked</td>
              <td><code>e.target.checked</code> gives boolean value.</td>
            </tr>
            <tr>
              <td>&lt;input type="radio" /&gt;</td>
              <td>checked</td>
              <td>Usually grouped by <code>name</code>; <code>e.target.value</code> gives selected value.</td>
            </tr>
            <tr>
              <td>&lt;textarea&gt;</td>
              <td>value</td>
              <td>Multi-line text input.</td>
            </tr>
            <tr>
              <td>&lt;select&gt;</td>
              <td>value</td>
              <td>Single select. <code>e.target.value</code> gives selected option.</td>
            </tr>
            <tr>
              <td>&lt;select multiple&gt;</td>
              <td>value</td>
              <td>Multi-select. Use <code>Array.from(e.target.selectedOptions, o =&gt; o.value)</code> to get array of selected values.</td>
            </tr>
            <tr>
              <td>Custom input components</td>
              <td>Depends on prop (<code>value</code> or <code>checked</code>)</td>
              <td>Pass value/checked from parent and trigger handler on change.</td>
            </tr>
          </tbody>
        </table>
        <hr />
      </section>

      <section>
        {/*<!-- UNCONTROLLED EXAMPLE -->*/}
        <h3 className="section-header" id="uncontrolled">Uncontrolled Sample for Form</h3>
        <ul>
          <li>The<code>&lt;input&gt;</code> does not its <code>value</code> attribute set</li>
          <li>Use <code>useRef</code> hook to get the value of the form once submit is pressed.</li>
          <li>Use <code>formRef.current.reset()</code> to reset the whole form.</li>
          <li>Easy to understand for small forms</li>
        </ul>

        <CodeBlock language='jsx'>
          {`import React, { useRef } from 'react';

export default function UncontrolledForm() {
  const nameRef = useRef(null);
  const colorRef = useRef(null);
  const formRef = useRef(null);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const color = colorRef.current.value;
    alert(\`Submitted:\\nName: \${name}\\nFavorite Color: \${color}\`);
  };

  // Handle form reset
  const handleReset = () => {
    formRef.current.reset();
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>

      {/* Input Text */}
      <div>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name='name'
          type="text"
          ref={nameRef}
          placeholder="Enter your name"
        />
      </div>

      {/* Select Dropdown */}
      <div>
        <label htmlFor="color">Favorite Color:</label>
        <select
          id="color"
          name='color'
          ref={colorRef}
        >
          <option value=''>-- Select --</option>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Green">Green</option>
        </select>
      </div>

      {/* Buttons */}
      <div>
        <button type="button" onClick={handleReset}>Reset</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}`}
        </CodeBlock>
        <hr />
      </section>

      <section>
        {/*<!-- CONTROLLED EXAMPLE -->*/}
        <h3 className="section-header" id="controlled">Controlled Sample for Form</h3>
        <ul>
          <li>More scalable than uncontrolled version</li>
          <li>Use <code>useState</code> hook to keep track of the value of the fields.</li>
          <li>Use <code>setState({ })</code> to reset the whole form at once</li>
          <li>Good for large forms</li>
          <li>Good for forms that need validation on certain fields</li>
        </ul>

        <CodeBlock language='jsx'>
          {`import React, { useState } from 'react';

export default function App() {
  const [formData, setFormData] = useState({});
  const [status, setStatus] = useState('');

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormData((prev) => ({
      ...prev,
      [name]: value, // dynamic field update
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    alert(JSON.stringify(formData, '', 2));
  };

  const handleReset = () => {
    setFormData({});
  };

  return (
    <>
      <form onSubmit={handleSubmit}>

        {/* Input Text */}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Select Dropdown */}
        <div>
          <label htmlFor="color">Favorite Color:</label>
          <select
            id="color"
            name="color"
            value={formData.color}
            onChange={handleChange}
            required
          >
            <option value="">-- Select --</option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
          </select>
        </div>

        {/* Buttons */}
        <div>
          <button type="button" onClick={handleReset}>Reset</button>
          <button type="submit">Submit</button>
        </div>
      </form>

      {status && <p>{status}</p>} // If status is true, render <p>{status}</p>
    </>
  );
}`}
        </CodeBlock>
        <hr />
      </section>

      <section>
        {/*<!-- SUBMITTING FORM -->*/}
        <h3 className="section-header" id="submitting">Submitting Form</h3>
        <p>Use the <code>onSubmit</code> attribute on the <code>&lt;form&gt;</code> element to give the callback function</p>
        <ul>
          <li>Use the Fetch API with POST method: <a href="/Javascript/js-functions.html#fetch">Fetch API notes</a></li>
          <li>Zybooks is a good place to test form by sending the form to this link: <a href="https://wp.zybooks.com/form-viewer.php">https://wp.zybooks.com/form-viewer.php</a></li>
          <ul>
            <li>To test the form, set its attribute <code>action="https://wp.zybooks.com/form-viewer.php"</code></li>
            <li>It will be possible to view what data the server sees</li>
          </ul>
        </ul>

        <CodeBlock language='jsx'>
          {`const handleSubmit = async (event) => {
  event.preventDefault();   // prevent browser from refreshing or navigating away on submit
  setStatus('Submitting...');

  try {
    const response = await fetch('https://wp.zybooks.com/form-viewer.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData),
    });

    if (response.ok) {
      setStatus('Form submitted successfully!');
      handleReset(); // reset state
    } else {
      setStatus('Submission failed. Please try again.');
    }
  } catch (error) {
    setStatus('Network error. Please try later.');
  }
};`}
        </CodeBlock>
      </section>

    </>
  );
}