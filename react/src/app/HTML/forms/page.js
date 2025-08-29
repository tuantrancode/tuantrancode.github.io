import React from 'react';
import CodeBlock from '@/components/shared/CodeBlock';
import styles from "./forms.module.css";


export const metadata = {
  title: 'Forms in HTML',
  description: 'Notes on how to make Form elements in HTML',
};

export default function Forms() {

  return (
    <div className={styles.htmlForm} >
      {/*<!-- FORMS -->*/}
      <h3 className='section-header' id='forms'>Forms</h3>
      <p>Forms require the following attributes:</p>
      <ul>
        <li>
          <code>action</code>: tells where to send the form:
          <a href='https://wp.zybooks.com/form-viewer.php' target='_blank'>
            https://wp.zybooks.com/form-viewer.php
          </a> can be used for testing form submission.
        </li>
        <li>
          <code>method</code>: tells what method to use to send form -
          <code>method=&apos;post&apos;</code> or <code>method=&apos;get&apos;</code>
          <ul>
            <li><code>post</code>: sends data in the body of the request, not visible in the URL (most common)</li>
            <li><code>get</code>: sends data in the URL, visible to users</li>
          </ul>
        </li>
        <li><code>enctype=&apos;multipart/form-data&apos;</code>: only if the form requires file uploads</li>
        <li>Attribute <code>name</code> is used to identify the input on the backend - e.g., <code>name=&apos;firstName&apos;</code></li>
      </ul>

      <CodeBlock language='html'>{`<form action='submit.html' method='post'>
  <label for='name'>Name:</label>
  <input type='text' id='name' name='name' required /><br>
  <input type='submit' value='Submit' />
</form>`}</CodeBlock>
      <hr />

      <h3 className='section-header' id='inputTypes'>Input Types</h3>
      <ul>
        <li><code>&lt;input type=&apos;&apos; id=&apos;inputId&apos;&gt;</code>: possible types: text, email, tel, file, submit, radio, checkbox, number, date</li>
        <li><code>&lt;label for=&apos;inputId&apos;&gt;</code>: label for the <code>&lt;input&gt;</code>; links the label to input&apos;s id</li>
        <li><code>&lt;fieldset&gt;</code>: container element to group related inputs</li>
      </ul>
      <hr />

      <h3 className='section-header' id='inputAttributes'>Input Attributes</h3>
      <ul>
        <li>name</li>
        <li>id</li>
        <li>value</li>
        <li>required</li>
        <li>autofocus</li>
        <li>max/min/step</li>
      </ul>
      <hr />

      <form action='https://wp.zybooks.com/form-viewer.php' method='post' className={styles.htmlForm}>
        <div className={styles.formContainer}>
          {/*<!-- left-side -->*/}
          <div className={styles.formColumn}>
            <label htmlFor='nameId' id='inputText'>Text Input</label>
            <input type='text' name='name' id='nameId' />
            <CodeBlock language='html'>{`<label for='nameId'>First Name:</label>
<input type='text' name='name' id='nameId' />`}</CodeBlock>
            <ul>
              <li>
                <p>The <code>label</code> element is tied to the <code>input</code> element using <code>for</code> and <code>id</code></p>
              </li>
            </ul>
            <hr />

            <label htmlFor='myEmailId' id='inputEmail'>Email Input</label>
            <input type='email' name='myEmail' id='myEmailId' />
            <CodeBlock language='html'>{`<label for='myEmailId'>Email Address:</label>
<input type='email' name='myEmail' id='myEmailId' />`}</CodeBlock>
            <hr />

            <label htmlFor='myPW' id='inputPW'>Password Input</label>
            <input type='password' name='myPW' id='myPWid' />
            <CodeBlock language='html'>{`<label for='myPW'>Password:</label>
<input type='password' name='myPW' id='myPWid' />`}</CodeBlock>
            <hr />

            <label htmlFor='birthDate' id='inputDate'>Date Input</label>
            <input type='date' name='birthDate' id='birthDateId' />
            <CodeBlock language='html'>{`<label for='birthDate'>Birth Date:</label>
<input type='date' name='birthDate' id='birthDateId' />`}</CodeBlock>
            <hr />

            <h3 className="sub-section-header" id='radioBtn'>Radio Buttons</h3>
            <fieldset id='radioBtn'>
              <legend>Best Contact Time</legend>
              <input type='radio' name='contactTime' id='morningId' value='morningTime' />
              <label htmlFor='morningId'>Morning</label><br />

              <input type='radio' name='contactTime' id='eveningId' value='eveningTime' />
              <label htmlFor='eveningId'>Evening</label><br />

              <label htmlFor='contactTimeId'>Time:</label>
              <input type='time' name='contactTime' id='contactTimeId' />
            </fieldset>
            <CodeBlock language='html'>{`<fieldset>
  <legend>Best Contact Time</legend>
  <!-- Only one radio button can be selected because they share the same name='contactTime' -->
  <input type='radio' name='contactTime' id='morningId' value='morningTime'>
  <label for='morningId'>Morning</label><br>
  
  <input type='radio' name='contactTime' id='eveningId' value='eveningTime'>
  <label for='eveningId'>Evening</label><br>
  
  <label for='contactTimeId'>Time:</label>
  <input type='time' name='contactTime' id='contactTimeId'>
</fieldset>`}</CodeBlock>
            <ul>
              <li><p>Only one radio button can be marked at a time if they share the same name.</p></li>
            </ul>
            <hr />
          </div>

          {/*<!-- right-side -->*/}
          <div className={styles.formColumn}>
            <h3 className="sub-section-header" id='checkboxes'>Checkboxes</h3>
            <fieldset id='checkbox'>
              <legend>Checkboxes</legend>
              <input type='checkbox' name='demoCheckBox' id='demoCB1' value='1' />
              <label htmlFor='demoCB1'>One</label>

              <input type='checkbox' name='demoCheckBox' id='demoCB2' value='2' />
              <label htmlFor='demoCB2'>Two</label>

              <input type='checkbox' name='demoCheckBox' id='demoCB3' value='3' />
              <label htmlFor='demoCB3'>Three</label>
            </fieldset>
            <CodeBlock language='html'>{`<fieldset>
  <legend>Checkboxes</legend>
  <input type='checkbox' name='demoCheckBox' id='demoCB1' value='1'>
  <label for='demoCB1'>One</label>

  <input type='checkbox' name='demoCheckBox' id='demoCB2' value='2'>
  <label for='demoCB2'>Two</label>

  <input type='checkbox' name='demoCheckBox' id='demoCB3' value='3'>
  <label for='demoCB3'>Three</label>
</fieldset>`}</CodeBlock>
            <ul>
              <li><p>Multiple checkboxes can be marked at the same time.</p></li>
            </ul>
            <hr />

            <label htmlFor='mySelectId' id='selectOption'>Select Menu</label>
            <select name='mySelect' id='mySelectId'>
              <option value='1'>Option 1</option>
              <option value='2'>Option 2</option>
              <option value='3'>Option 3</option>
            </select>
            <CodeBlock language='html'>{`<label for='mySelectId'>Select Element:</label>
<select name='mySelect' id='mySelectId'>
  <option value='1'>Option 1</option>
  <option value='2'>Option 2</option>
  <option value='3'>Option 3</option>
</select>`}</CodeBlock>
            <hr />

            <label htmlFor='myTA' id='textArea'>Text Area</label>
            <textarea name='myTA' id='myTA'></textarea>
            <CodeBlock language='html'>{`<label for='myTA'>Text Area:</label>
<textarea name='myTA' id='myTA' cols='20' rows='4'></textarea>`}</CodeBlock>
            <hr />

            <label htmlFor='myFileId' id='upload'>Upload File</label>
            <input type='file' name='myFile' id='myFileId' style={ {display: 'block', padding: '10px'} }/>
            <CodeBlock language='html'>{`<label for='myFileId'>Upload File:</label>
<input type='file' name='myFile' id='myFileId'>`}</CodeBlock>
            <hr />
          </div>
        </div>

        <h3 className='sub-section-header' id='resetSubmitBtns'>Reset/Submit Buttons</h3>
        <div className={styles.formButtons} id='resetSubmitBtns'>
          <input type='reset' name='resetBtn' id='resetBtn' value='Reset Form' />
          <input type='submit' name='submitBtn' id='submitBtn' value='Submit Form' />
        </div>
        <div>
          <CodeBlock language='html'>{`<input type='reset' name='resetBtn' id='resetBtn' value='Reset Form'>
<input type='submit' name='submitBtn' id='submitBtn' value='Submit Form'>`}</CodeBlock>
        </div>

        <h4 className='sub-section-header'>Notes</h4>
        <ul>
          <li><p>The reset button will clear all fields of the <code>form</code> element it&apos;s in</p></li>
          <li><p>The submit button will submit the fields to the link specified in <code>action</code></p></li>
        </ul>
      </form>

    </div>
  );
}