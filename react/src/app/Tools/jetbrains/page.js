import React from 'react';
import SearchContainer from '@/components/shared/SearchContainer';
import Link from 'next/link';

export const metadata = {
  title: 'Jetbrains IDEs',
  description: 'Tips for using Jetbrains IDEs',
};

export default function JetbrainsIDEs() {
  return (
    <>
      {/* <!-- INTELLIJ IDEA SHORTCUTS --> */}
      <h3 className='section-header' id='intellij-shortcuts'>
        IntelliJ IDEA Common Shortcuts
      </h3>

      <SearchContainer
        placeholder='Search actions or shortcuts...'
        searchSelector='tbody tr'
      >
        <table>
          <thead>
            <tr>
              <th>Action</th>
              <th>Windows / Linux</th>
              <th>Mac</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Optimize Imports</td>
              <td>Ctrl + Alt + O</td>
              <td>Control + Option + O</td>
              <td>Removes unused imports and organizes imports.</td>
            </tr>

            <tr>
              <td>Reformat Whole Document</td>
              <td>Ctrl + Alt + L</td>
              <td>Cmd + Option + L</td>
              <td>
                Formats the entire file according to the project's code style.
              </td>
            </tr>

            <tr>
              <td>Reformat Selection</td>
              <td>Ctrl + Alt + L</td>
              <td>Cmd + Option + L</td>
              <td>
                Select code first, then use the same shortcut to format only
                the selection.
              </td>
            </tr>

            <tr>
              <td>Split Editor</td>
              <td>Ctrl + Alt + S</td>
              <td>Cmd + Option + S</td>
              <td>Split the current editor window. Allow you to view the same file in two different locations. Right-click the file tab and select "Split Right" also work</td>
            </tr>

            <tr>
              <td>Find</td>
              <td>Ctrl + F</td>
              <td>Cmd + F</td>
              <td>Search within the current file.</td>
            </tr>

            <tr>
              <td>Find &amp; Replace</td>
              <td>Ctrl + H</td>
              <td>Cmd + R</td>
              <td>Search and replace text within the current file.</td>
            </tr>

            <tr>
              <td>Find in All Files</td>
              <td>Ctrl + Shift + F</td>
              <td>Cmd + Shift + F</td>
              <td>Search for text throughout the project.</td>
            </tr>

            <tr>
              <td>Replace in All Files</td>
              <td>Ctrl + Shift + H</td>
              <td>Cmd + Shift + H</td>
              <td>
                Search and replace text throughout the project. Be careful
                when replacing common terms.
              </td>
            </tr>

            <tr>
              <td>Search Everywhere</td>
              <td>Double Shift</td>
              <td>Double Shift</td>
              <td>
                Search files, classes, actions, settings, symbols, and more.
              </td>
            </tr>

            <tr>
              <td><br/></td>
            </tr>

            <tr>
              <td>Find Action</td>
              <td>Ctrl + Shift + A</td>
              <td>Cmd + Shift + A</td>
              <td>
                Search for almost any IntelliJ action without knowing its
                shortcut.
              </td>
            </tr>

            <tr>
              <td>Go to Class</td>
              <td>Ctrl + N</td>
              <td>Cmd + O</td>
              <td>Quickly find and open a class.</td>
            </tr>

            <tr>
              <td>Go to File</td>
              <td>Ctrl + Shift + N</td>
              <td>Cmd + Shift + O</td>
              <td>Quickly find and open a file.</td>
            </tr>

            <tr>
              <td>Go to Symbol</td>
              <td>Ctrl + Alt + Shift + N</td>
              <td>Cmd + Option + O</td>
              <td>Find a method, field, constant, or other symbol.</td>
            </tr>

            <tr>
              <td>Go to Line</td>
              <td>Ctrl + G</td>
              <td>Cmd + L</td>
              <td>Jump directly to a specific line.</td>
            </tr>

            <tr>
              <td>Recent Files</td>
              <td>Ctrl + E</td>
              <td>Cmd + E</td>
              <td>Quickly switch to recently opened files.</td>
            </tr>

            <tr>
              <td>Copy Line / Selection</td>
              <td>Ctrl + C</td>
              <td>Cmd + C</td>
              <td>
                If nothing is selected, copies the entire current line.
              </td>
            </tr>

            <tr>
              <td>Duplicate Line / Selection</td>
              <td>Ctrl + D</td>
              <td>Cmd + D</td>
              <td>
                Copies the current line or selection and places the copy
                directly below.
              </td>
            </tr>

            <tr>
              <td>Delete Line</td>
              <td>Ctrl + Y</td>
              <td>Cmd + Backspace</td>
              <td>Deletes the current line.</td>
            </tr>

            <tr>
              <td>Move Line Up / Down</td>
              <td>Shift + Alt + Up / Down</td>
              <td>Shift + Option + Up / Down</td>
              <td>Moves the current line or selected code.</td>
            </tr>

            <tr>
              <td>Comment / Uncomment Line</td>
              <td>Ctrl + /</td>
              <td>Cmd + /</td>
              <td>Toggle a line comment.</td>
            </tr>

            <tr>
              <td>Comment / Uncomment Block</td>
              <td>Ctrl + Shift + /</td>
              <td>Cmd + Shift + /</td>
              <td>Toggle a block comment.</td>
            </tr>

          
           

            <tr>
              <td>Rename Symbol</td>
              <td>Shift + F6</td>
              <td>Shift + F6</td>
              <td>
                Safely renames a class, method, variable, or other symbol.
              </td>
            </tr>

            <tr>
              <td>Show Intentions / Quick Fixes</td>
              <td>Alt + Enter</td>
              <td>Option + Enter</td>
              <td>
                Shows available quick fixes and IntelliJ suggestions.
              </td>
            </tr>

            <tr>
              <td>Go to Definition</td>
              <td>Ctrl + Click</td>
              <td>Cmd + Click</td>
              <td>Open the declaration of a class, method, or variable.</td>
            </tr>

            <tr>
              <td>Navigate Back / Forward</td>
              <td>Ctrl + Alt + Left / Right</td>
              <td>Cmd + Option + Left / Right</td>
              <td>Navigate through previous code locations.</td>
            </tr>

            <tr>
              <td>Expand / Collapse Selection</td>
              <td>Ctrl + W / Ctrl + Shift + W</td>
              <td>Option + Up / Down</td>
              <td>Expand or shrink the current code selection.</td>
            </tr>

            <tr>
              <td>Multiple Cursors</td>
              <td>Alt + Shift + Click</td>
              <td>Option + Shift + Click</td>
              <td>Create multiple carets for editing several locations.</td>
            </tr>

            <tr>
              <td>Open Terminal</td>
              <td>Alt + F12</td>
              <td>Option + F12</td>
              <td>Open IntelliJ's integrated terminal.</td>
            </tr>

            <tr>
              <td>Toggle Tool Windows</td>
              <td>Ctrl + Shift + F12</td>
              <td>Cmd + Shift + F12</td>
              <td>
                Hide or restore the main tool windows to maximize the editor.
              </td>
            </tr>

            <tr>
              <td>Run</td>
              <td>Shift + F10</td>
              <td>Control + R</td>
              <td>Run the current run configuration.</td>
            </tr>

            <tr>
              <td>Debug</td>
              <td>Shift + F9</td>
              <td>Control + D</td>
              <td>Start the current run configuration in debug mode.</td>
            </tr>

            <tr>
              <td>Stop Running Application</td>
              <td>Ctrl + F2</td>
              <td>Command + F2</td>
              <td>Stop the currently running application.</td>
            </tr>

            <tr>
              <td>Build Project</td>
              <td>Ctrl + F9</td>
              <td>Cmd + F9</td>
              <td>Build the project.</td>
            </tr>

            <tr>
              <td>Generate Code</td>
              <td>Alt + Insert</td>
              <td>Cmd + N</td>
              <td>
                Generate constructors, getters/setters, overrides, and more.
              </td>
            </tr>
          </tbody>
        </table>
      </SearchContainer>

      <hr />

      {/* <!-- RUN CONFIGURATION --> */}
      <h3 className='section-header' id='run-configuration'>
        Setting Up Run Configuration
      </h3>

      <h4 className="sub-section-header">Create a Spring Boot Run Configuration</h4>

      <p>
        IntelliJ IDEA uses Run/Debug Configurations to control how an
        application is started. A configuration can specify the active Spring
        profile, environment variables, JVM options, program arguments, and
        other settings.
      </p>

      <ol>
        <li>
          Open <strong>Run</strong> → <strong>Edit Configurations...</strong>
        </li>
        <li>
          Click the <strong>+</strong> button and select{' '}
          <strong>Spring Boot</strong>.
        </li>
        <li>
          Give the configuration a descriptive name, such as{' '}
          <code>Spring Security Sample - Dev</code>.
        </li>
        <li>
          Select your Spring Boot main class in the{' '}
          <strong>Main class</strong> field.
        </li>
        <li>
          Select the appropriate module/classpath for the application.
        </li>
        <li>
          Click <strong>Apply</strong> and then <strong>OK</strong>.
        </li>
      </ol>

      <p>
        IntelliJ IDEA allows the same project to have multiple run
        configurations. This makes it convenient to create separate
        configurations for development and production.
      </p>

      <h4 className="sub-section-header">Create a Dev Profile</h4>

      <ol>
        <li>
          Open <strong>Run</strong> → <strong>Edit Configurations...</strong>.
        </li>
        <li>
          Select your Spring Boot configuration.
        </li>
        <li>
          Find <strong>Active profiles</strong>. If it is not visible, click{' '}
          <strong>Modify options</strong> and enable the Spring Boot{' '}
          <strong>Active profiles</strong> option.
        </li>
        <li>
          Enter:
          <pre>
            <code className='language-text'>dev</code>
          </pre>
        </li>
        <li>
          Rename the configuration to something recognizable, such as{' '}
          <code>Spring Security Sample - Dev</code>.
        </li>
        <li>
          Click <strong>Apply</strong>.
        </li>
      </ol>

      <p>
        Spring Boot will then use the <code>dev</code> profile when the
        application is started from this configuration.
      </p>

      <h4 className="sub-section-header">Create a Prod Profile</h4>

      <p>
        Instead of modifying the development configuration every time you
        want to run production settings, create a second configuration.
      </p>

      <ol>
        <li>
          In <strong>Run</strong> → <strong>Edit Configurations...</strong>,
          select the existing dev configuration.
        </li>
        <li>
          Click <strong>Copy Configuration</strong> to duplicate it.
        </li>
        <li>
          Rename the new configuration to{' '}
          <code>Spring Security Sample - Prod</code>.
        </li>
        <li>
          Change <strong>Active profiles</strong> from:
          <pre>
            <code className='language-text'>dev</code>
          </pre>
          to:
          <pre>
            <code className='language-text'>prod</code>
          </pre>
        </li>
        <li>
          Change the environment file to the production environment file if
          you are using separate <code>.env</code> files.
        </li>
        <li>
          Click <strong>Apply</strong> and <strong>OK</strong>.
        </li>
      </ol>

      <p>
        You can now switch between <code>Spring Security Sample - Dev</code>{' '}
        and <code>Spring Security Sample - Prod</code> directly from the Run
        Configuration dropdown.
      </p>

      <h4 className="sub-section-header">Using an Environment File</h4>

      <p>
        Instead of manually entering every environment variable into the Run
        Configuration, IntelliJ IDEA can load environment variables from an{' '}
        <code>.env</code> file.
      </p>

      <p>
        For example, create separate environment files for development and
        production:
      </p>

      <pre>
        <code className='language-text'>
{`.env
.env.dev
.env.prod`}
        </code>
      </pre>

      <p>
        A development environment file might contain:
      </p>

      <pre>
        <code className='language-bash'>
{`POSTGRES_USER=postgres
POSTGRES_PASSWORD=development-password
POSTGRES_DB=spring_security_test
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret`}
        </code>
      </pre>

      <p>
        Keep secrets out of source control. Add the environment files to{' '}
        <code>.gitignore</code>:
      </p>

      <pre>
        <code className='language-gitignore'>
{`.env
.env.*
!.env.example`}
        </code>
      </pre>

      <h4 className="sub-section-header">
        Automatically Load Environment Variables from an .env File
      </h4>

      <ol>
        <li>
          Open <strong>Run</strong> → <strong>Edit Configurations...</strong>.
        </li>
        <li>
          Select your <code>Spring Security Sample - Dev</code> configuration.
        </li>
        <li>
          Find the <strong>Environment variables</strong> field.
        </li>
        <li>
          Click the button next to the field to edit the environment
          variables.
        </li>
        <li>
          Use the option to load variables from an <code>.env</code> file.
        </li>
        <li>
          Select:
          <pre>
            <code className='language-text'>.env.dev</code>
          </pre>
        </li>
        <li>
          Click <strong>Apply</strong> and <strong>OK</strong>.
        </li>
      </ol>

      <p>
        Repeat the same process for the production configuration, but select:
      </p>

      <pre>
        <code className='language-text'>.env.prod</code>
      </pre>

      <p>
        IntelliJ IDEA will load the variables from the selected file whenever
        that Run Configuration starts the application. This is much easier
        than manually maintaining a large list of environment variables in
        every Run Configuration.
      </p>

      <h4 className="sub-section-header">Recommended Project Setup</h4>

      <p>
        For a Spring Boot project, a convenient setup is:
      </p>

      <pre>
        <code className='language-text'>
{`project/
├── .env.dev
├── .env.prod
├── .env.example
├── .gitignore
├── pom.xml
└── src/
    └── main/
        └── resources/
            ├── application.yml
            ├── application-dev.yml
            └── application-prod.yml`}
        </code>
      </pre>

      <p>
        The Run Configurations then become:
      </p>

      <table>
        <thead>
          <tr>
            <th>Run Configuration</th>
            <th>Spring Profile</th>
            <th>Environment File</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Spring Security Sample - Dev</td>
            <td><code>dev</code></td>
            <td><code>.env.dev</code></td>
          </tr>
          <tr>
            <td>Spring Security Sample - Prod</td>
            <td><code>prod</code></td>
            <td><code>.env.prod</code></td>
          </tr>
        </tbody>
      </table>

      <p>
        This separates three different concerns: Spring configuration is
        stored in <code>application.yml</code>, profile-specific settings are
        stored in <code>application-dev.yml</code> and{' '}
        <code>application-prod.yml</code>, and secrets/environment-specific
        values are supplied through the environment files.
      </p>

    </>
  );
}
