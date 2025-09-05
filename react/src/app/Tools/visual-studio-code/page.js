import React from 'react';
import SearchContainer from '@/components/shared/SearchContainer';
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
            Requires the <code>eslint</code> npm package to be installed in the project to work:{' '}
            <Link href='/Tools/node#eslint'>link</Link>
          </li>
          <li>It detect syntax error before compiling the code, enforce coding standards and best practices</li>
        </ul>
      </ul>


      {/* <!-- GITHUB COPILOT --> */}
      <h3 className='section-header' id='githubCopilot'>
        GitHub Copilot
      </h3>
      <p>
        AI assistant integrating with VS Code (<code>github.copilot</code>), Visual Studio, XCode, JetBrains, and Neovim through extensions. 
      </p>
      <ul>
        <li><strong>Shortcut</strong> :</li>
        <ul>
          <li>Open inline chat in editor or terminal:  <code>Ctrl + I</code> for Windows/Linux or <code>Cmd + I</code> for Mac</li>
          <li>Opens the chat view:  <code>Ctrl + Alt + I</code> for Windows/Linux or <code>Cmd + Alt + I</code> for Mac</li>
          <li><code>Tab</code> accepts suggestion</li>
          <li><code>Ctrl + Enter</code> cycles suggestions</li>
        </ul>
        <li><strong>Troubleshoot</strong> : <code>Ctrl + Shift + P</code> for Windows/Linux or <code>Cmd + Shift + P</code> for Mac and select Diagnostics &gt; GitHub Copilot</li>
        <li><strong>Documentation on Copilot</strong> : <a href="https://docs.github.com/en/copilot">docs.github.com/en/copilot</a> </li>
        <li><strong>Doc on Copilot integration with VS Code</strong> : <a href="https://code.visualstudio.com/docs/copilot/reference/copilot-vscode-features">code.visualstudio.com/docs/copilot/reference/copilot-vscode-features</a> </li>
        <li><strong>Smart Actions</strong> : <a href="https://code.visualstudio.com/docs/copilot/copilot-smart-actions">code.visualstudio.com/docs/copilot/copilot-smart-actions</a> </li>
        <li><strong>Features</strong> :</li>
        <ul>
          <li>Code autocompletion</li>
          <li>Generating unit tests for functions; Copilot learns from context so well-documented code help</li>
          <li>Generating code snippets; can suggest code based on comments</li>
          <li>Explaining code snippets and bugs</li>
          <li>Creating sample data</li>
          <li>Making documentation, commits messages, alt text for images</li>
        </ul>
        <li><strong>Commands</strong> : right click and selecting Copilot will also list the commands; using these help give context</li>
        <ul>
          <li><code>/explain</code> : gives explanation for selected code</li>
          <li><code>/suggest</code> : Offers code suggestions based on the current context</li>
          <li><code>/comment</code> : Converts comments into code snippets</li>
          <li><code>/docs</code> : Creates documentation for the selected function, class, or code block</li>
          <li><code>/tests</code> : Generates unit tests for the selected function or class</li>
          <li><code>/setupTests</code> : suggests appropriate testing frameworks</li>
          <li><code>/fix</code> : fix code</li>
          <li><code>/edit</code> : edit code</li>
          <li><code>/optimize</code> : analyzeand improves runtime of the selected code block</li>
          <li><code>/help</code> : get help on using Copilot</li>
        </ul>
        <li><strong>Chat Participants / Agents</strong> : acts as domain experts that provide Copilot the context of that domain</li>
        <ul>
          <li><code>@workspace</code> : give context about the code in your workspace so Copilot will consider the structure of your project, design patters, and how your code interacts</li>
          <li><code>@file</code> : focus on content of specific file</li>
          <li><code>@directory</code> : focus on content of specific directory</li>
          <li><code>@terminal</code> : has context about VS code terminal shell and its contents; good for creating/ debugging terminal commands</li>
          <li><code>@vscode</code> : has context about VS Code commands and features</li>
          <li><code>@azure</code> : give context about Azure services and how to use, deploy and manage them.</li>
          <li><code>@github</code> : allows you to use GitHub-specific Copilot skills: Details in <a href="https://docs.github.com/en/copilot/how-tos/use-chat/use-chat-in-ide#using-github-skills-for-copilot">link</a></li>
        </ul>
        <li><strong>Modes</strong> : </li>
        <ul>
          <li><strong>Ask Mode</strong> : fast, helpful, and focused on answering the question without touching your code; can ask any anything programming related even questions outside your project</li>
          <li><strong>Edit Mode</strong> : allows Copilot to edit multiple files and then have you check which edits should be applied</li>
          <ul>
            <li>Drag all related files to the Copilot chat panel to tell it what to work on</li>
            <li>The "Add Context" button lets you add file from outside the workspace</li>
          </ul>
          <li><strong>Agent Mode</strong> : a more powerful version of Edit mode except it's more automated and applies most edits without waiting for explicit approval</li>
          <ul>
            <li>The amount of context it can hold is limited so it might forget what it wrote at the beginning later on.</li>
            <li>Writing specific custom instructions can help keep it consistent. <a href="https://github.blog/ai-and-ml/github-copilot/copilot-ask-edit-and-agent-modes-what-they-do-and-when-to-use-them/">Example here.</a></li>
          </ul>
        </ul>
      </ul>
    </>
  );
}
