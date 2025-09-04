import React from 'react';
import SearchContainer from '@/components/shared/SearchContainer';
import CodeBlock from '@/components/shared/CodeBlock';
import Link from 'next/link';

export const metadata = {
  title: 'Visual Studio Code',
  description: 'Tips for using VS Code',
};

export default function VisualStudioCode() {
  return (
    <>
      {/* <!-- VS CODE SHORTCUTS --> */}
      <h3 className='section-header' id='shortcuts'>
        Common Visual Studio Shortcuts
      </h3>
      <SearchContainer placeholder='Search actions, shortcuts, or extensions...' searchSelector='tbody tr'>
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
              <td>Format Selection</td>
              <td>Ctrl + K, Ctrl + F</td>
              <td>Cmd + K, Cmd + F</td>
              <td></td>
            </tr>
            <tr>
              <td>Format Whole Document</td>
              <td>Shift + Alt + F</td>
              <td>Shift + Option + F</td>
              <td>Very useful. Life or Death</td>
            </tr>
            <tr>
              <td>Search and replace in all files</td>
              <td>Ctrl + Shift + H</td>
              <td>Cmd + Shift + H</td>
              <td>Useful, but make sure to backup project before using.</td>
            </tr>
            <tr>
              <td>Find</td>
              <td>Ctrl + F</td>
              <td>Cmd + F</td>
              <td></td>
            </tr>
            <tr>
              <td>Find & Replace</td>
              <td>Ctrl + H</td>
              <td>Cmd + Option + F</td>
              <td></td>
            </tr>
            <tr>
              <td>Move forward/backward a word</td>
              <td>Ctrl + Right / Left</td>
              <td>Cmd + Right / Left</td>
              <td>Very useful.</td>
            </tr>
            <tr>
              <td>Select current word or expand selection </td>
              <td>Ctrl + W</td>
              <td>Shift + Option + Right</td>
              <td>
                Very useful.
                <br />
                Default keybinding was Shift + Alt + Right
              </td>
            </tr>
            <tr>
              <td>Select whole line</td>
              <td>Ctrl + L</td>
              <td>Cmd + L</td>
              <td>Useful</td>
            </tr>
            <tr>
              <td>Comment/ Uncomment Line</td>
              <td>Ctrl + /</td>
              <td>Cmd + /</td>
              <td>Useful</td>
            </tr>
            <tr>
              <td>Rename Symbol</td>
              <td>F2</td>
              <td>F2</td>
              <td></td>
            </tr>
            <tr>
              <td>Select All Occurences</td>
              <td>Ctrl + Shift + L</td>
              <td>Cmd + Shift + L</td>
              <td></td>
            </tr>
            <tr>
              <td>Split Editor</td>
              <td>Ctrl + \</td>
              <td>Cmd + \</td>
              <td></td>
            </tr>
            <tr>
              <td>Go to Line</td>
              <td>Ctrl + G</td>
              <td>Cmd + G</td>
              <td></td>
            </tr>
            <tr>
              <td>Delete Line</td>
              <td>Ctrl + Shift + K</td>
              <td>Cmd + Shift + K</td>
              <td>Useful</td>
            </tr>
            <tr>
              <td>Duplicate Line</td>
              <td>Shift + Alt + Down</td>
              <td>Shift + Option + Down</td>
              <td>Very useful</td>
            </tr>
            <tr>
              <td>Move Line Up/Down</td>
              <td>Alt + Up / Down</td>
              <td>Option + Up / Down</td>
              <td></td>
            </tr>
            <tr>
              <td>Toggle Terminal/ Console</td>
              <td>Ctrl + ` (backtick)</td>
              <td>Cmd + ` (backtick)</td>
              <td>
                Very useful.
                <br />
                Right clicking a file/folder will also give the option to open the terminal at that location
              </td>
            </tr>
            <tr>
              <td>Toggle Sidebar</td>
              <td>Ctrl + B</td>
              <td>Cmd + B</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </SearchContainer>
      <hr />

      {/* <!-- LOREM IPSUM --> */}
      <h3 className='section-header' id='lorem'>
        Using Lorem Ipsum
      </h3>
      <p>
        You can use <code>lorem</code> followed by a number in Visual Studio Code to generate placeholder text quickly
        inside an HTML document.
      </p>
      <pre>
        <code className='language-html'>&lt;p&gt;lorem20&lt;/p&gt;</code>
      </pre>
      <p>This expands to generate 20 filler words:</p>
      <pre>
        <code className='language-html'>
          &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit...&lt;/p&gt;
        </code>
      </pre>
      <hr />

      {/* <!-- EXTENSIONS --> */}
      <h3 className='section-header' id='extensions'>
        Extensions
      </h3>
      <ul>
        <li>
          <strong>Live Server</strong> <code>ritwickdey.liveserver</code> : allow for the website to auto-reload the
          changes made in code
        </li>
        <ul>
          <li>
            Mobile testing Setup: in Live Server setting, check the option to "Use Local Ip"; this will allow mobile
            devices to access the same website by putting in the same url, but make sure the phone is connected to the
            same Wifi
          </li>
        </ul>

        <li>
          <strong>Document This</strong> <code>oouo-diogo-perdigao.docthis</code> : create a quick documentation
          template for a Javascript or Typescript function
        </li>
        <ul>
          <li>
            Right click the function name and select 'Document This'. Another shortcut is Ctrl + Alt + D, then Ctrl +
            Alt + D again
          </li>
        </ul>

        <li>
          <strong>Prettier - Code formatter</strong> <code>esbenp.prettier-vscode</code> : extremely useful code
          formatter for a variety of language
        </li>
        <ul>
          <li>
            Formats JavaScript , TypeScript , Flow , JSX , JSON , CSS , SCSS , Less , HTML , Vue , Angular , HANDLEBARS
            , Ember , Glimmer , GraphQL , Markdown , YAML
          </li>
        </ul>

        <li>
          <strong>Pretty TypeScript Errors</strong> <code>yoavbls.pretty-ts-errors</code> : makes typescript error
          easier to read
        </li>

        <li>
          <strong>Todo Tree</strong> <code>gruntfuggly.todo-tree</code> : highlight <code>TODO</code> and{' '}
          <code>FIXME</code> tags, and give a view of all those tags in a project
        </li>
        <ul>
          <li>The Todo Tree can be viewed in the left side panel.</li>
        </ul>

        <li>
          <strong>GitHub Copilot</strong> <code>github.copilot</code> : AI assistant
        </li>

        <li>
          <strong>ESLint</strong> <code>dbaeumer.vscode-eslint</code> : code analysis tool for Javascript and Typescript
        </li>
        <ul>
          <li>
            Requires the <code>eslint</code> npm package to be installed in the project to work: <Link href="/Tools/node#eslint">link</Link>
          </li>
          <li>It detect syntax error before compiling the code, enforce coding standards and best practices</li>
        </ul>
      </ul>
    </>
  );
}
