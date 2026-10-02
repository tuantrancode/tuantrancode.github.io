import CodeBlock from '@/components/shared/CodeBlock';
import SearchContainer from '@/components/shared/SearchContainer';

export const metadata = {
  title: 'Visual Studio Code',
  description: 'Tips for using VS Code',
};

export default function VisualStudioCode() {
  return (
    <>
      {/* EXTENSIONS */}
      <section>
        <h3 className='section-header' id='extensions'>
          Extensions
        </h3>

        <h4 className='sub-section-header'>General</h4>
        <ul>
          <li>
            <code>Todo Tree</code> - <code>gruntfuggly.todo-tree</code>: Highlights <code>TODO</code> and{' '}
            <code>FIXME</code> comments and provides a project-wide Todo Tree view.
          </li>
          <li>
            <code>Container Tools</code> - <code>ms-azuretools.container-tools</code>: Provides support for container
            development: Docker
          </li>
          <ul>
            <li>Allow for managing Docker containers, images, volumes, and networks</li>
            <li>Dockerfile / Compose editing supports</li>
          </ul>
          <li>
            <code>Cline</code> - <code>saoudrizwan.claude-dev</code>: harness for integrating AI model into VS Code.
          </li>
          <li>
            <code>GitHub Copilot</code> - <code>github.copilot</code>: AI coding assistant with code completion and
            generation.
          </li>
        </ul>

        <h4 className='sub-section-header'>Java / Spring</h4>
        <ul>
          <li>
            <code>Extension Pack for Java</code> - <code>vscjava.vscode-java-pack</code>: Provides Java IntelliSense,
            debugging, testing, and Maven/Gradle support.
          </li>
          <li>
            <code>Spring Boot Extension Pack</code> - <code>vmware.vscode-boot-dev-pack</code>: Collection of extensions
            for developing Spring Boot applications. Includes the following extensions:
          </li>
          <ul>
            <li>
              <code>Language Support for Java™ by Red Hat</code>
            </li>
            <li>
              <code>Debuger for Java</code>
            </li>
            <li>
              <code>Test Runner for Java</code>
            </li>
            <li>
              <code>Maven for Java</code>
            </li>
            <li>
              <code>Gradle for Java</code>
            </li>
            <li>
              <code>Project Manager for Java</code>
            </li>
          </ul>
          <li>
            <code>Lombok Annotations Support for VS Code</code> - <code>vscjava.vscode-lombok</code>: Provides support
            for Lombok annotations in VS Code.
          </li>
        </ul>

        <h4 className='sub-section-header'>DevOps</h4>
        <ul>
          <li>
            <code>Ansible</code> - <code>redhat.ansible</code>: Provides Ansible module autocomplete, syntax validation,
            and module documentation on hover.
          </li>
          <li>
            <code>YAML</code> - <code>redhat.vscode-yaml</code>: Provides YAML validation, autocomplete, and Kubernetes
            schema support.
          </li>
          <li>
            <code>WSL</code> - <code>ms-tools.wsl</code>: Provides seamless integration with the Windows Subsystem for
            Linux, allowing developers to work with Linux environments directly from VS Code.
          </li>
        </ul>

        <h4 className='sub-section-header'>Web Dev</h4>
        <ul>
          <li>
            <code>Live Server</code> - <code>ritwickdey.liveserver</code>: Runs a local development server and
            automatically reloads the browser when files change.
          </li>
          <li>
            <code>Prettier - Code Formatter</code> - <code>esbenp.prettier-vscode</code>: Formats JavaScript,
            TypeScript, JSX, JSON, CSS, SCSS, HTML, Markdown, YAML, and other supported formats.
          </li>
        </ul>

        <h4 className='sub-section-header'>React</h4>
        <ul>
          <li>
            <code>ESLint</code> - <code>dbaeumer.vscode-eslint</code>: Provides JavaScript and TypeScript code analysis,
            syntax checking, and coding-standard enforcement using the project's ESLint configuration.
          </li>
          <li>
            <code>Document This</code> - <code>oouo-diogo-perdigao.docthis</code>: Generates documentation templates for
            JavaScript and TypeScript functions.
          </li>
          <li>
            <code>Pretty TypeScript Errors</code> - <code>yoavbls.pretty-ts-errors</code>: Reformats TypeScript compiler
            errors to make them easier to read.
          </li>
        </ul>
        <hr />
      </section>

               {/* <!-- VS CODE SETTINGS --> */}
      <h3 className='section-header' id='settings'>
        VS Code Configuration Files
      </h3>
      <ul>
        <li><code>*.code-workspace</code> : workspace configuration file that defines the structure and settings for a VS Code workspace.</li>
        <ul>
          <li>Also used to configure the extensions like setting <code>env</code> file for testing</li>
        </ul>
        <CodeBlock language='json'>{`
{
  "folders": [
    {
      "path": ".",
    },
    {
      "name": "Backend",
      "path": "spring-backend",
    },
    {
      "name": "Frontend",
      "path": "frontend-react",
    },
    {
      "name": "Infrastructure",
      "path": "infra",
    },
  ],
  "settings": {
    "files.exclude": {
      "**/target": true,
      "**/node_modules": true,
    },
    "java.test.config": {
      "name": "Backend Tests",
      "workingDirectory": "\${workspaceFolder:Backend}",
      "envFile": "\${workspaceFolder:Backend}/keys/set-env-var.env",
    },
    "java.test.defaultConfig": "Backend Tests",
  },
}
        `}</CodeBlock>
        <li><code>.vscode/launch.json</code> : workspace config file for run profile configurations, <code>env</code> file, and current working directory settings for the whole workspace (multi-projects).</li>
        <li><code>settings.json</code> : VS Code editor settings file.</li>
        <ul>
          <li>The global settings can be accessed by <code>Ctrl + ,</code> or <code>{`File > Preferences > Settings`}</code></li>
        </ul>
      </ul>
      <hr />

         {/* <!-- VS CODE SETTINGS --> */}
      <h3 className='section-header' id='settings'>
        VS Code settings.json
      </h3>
      <p>
       After installing the extensions, you can configure VS Code settings to customize the editor's behavior and appearance. You can access the <code>settings.json</code> by using the keyboard shortcut <code>Ctrl + ,</code> (Windows/Linux) or <code>Cmd + ,</code> (Mac).
      </p>

      <h4 className='sub-section-header'>General</h4>
      <CodeBlock language='json'>{`
 "window.openFoldersInNewWindow": "on"   
      `}</CodeBlock>

      <h4 className='sub-section-header'>Java</h4>
      <CodeBlock language='json'>{`
 "[java]": {
    "editor.defaultFormatter": "redhat.java",
  },
  "java.format.enabled": true,
  "java.references.includeDeclarations": false,
  "editor.codeActionsOnSave": {
    "source.organizeImports": "explicit",
  },      
      `}</CodeBlock>

      <h4 className='sub-section-header'>WebDev</h4>
      <CodeBlock language='json'>{`
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
  }, 
      `}</CodeBlock>
      <hr />

      {/* <!-- VS CODE SHORTCUTS --> */}
      <h3 className='section-header' id='shortcuts'>
        Common VS Code Shortcuts
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
              <td>Optimize Imports</td>
              <td>Shift + Alt + O</td>
              <td>Shift + Option + O</td>
              <td>Removes unused imports and organizes imports.</td>
            </tr>

            <tr>
              <td>Reformat Whole Document</td>
              <td>Shift + Alt + F</td>
              <td>Shift + Option + F</td>
              <td>Formats the entire file according to the project's configured formatter.</td>
            </tr>

            <tr>
              <td>Reformat Selection</td>
              <td>Ctrl + K, Ctrl + F</td>
              <td>Cmd + K, Cmd + F</td>
              <td>Select code first, then use the shortcut to format only the selected code.</td>
            </tr>

            <tr>
              <td>Split Editor</td>
              <td>Ctrl + \</td>
              <td>Cmd + \</td>
              <td>
                Splits the current editor into another editor group. You can also right-click the file tab and select
                "Split Right".
              </td>
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
              <td>Option + Cmd + F</td>
              <td>Search and replace text within the current file.</td>
            </tr>

            <tr>
              <td>Find in All Files</td>
              <td>Ctrl + Shift + F</td>
              <td>Cmd + Shift + F</td>
              <td>Search for text throughout the workspace.</td>
            </tr>

            <tr>
              <td>Replace in All Files</td>
              <td>Ctrl + Shift + H</td>
              <td>Cmd + Shift + H</td>
              <td>Search and replace text throughout the workspace. Be careful when replacing common terms.</td>
            </tr>

            <tr>
              <td>Search Everywhere / Quick Open</td>
              <td>Ctrl + P</td>
              <td>Cmd + P</td>
              <td>
                Quickly searches for and opens files in the workspace. This is the closest equivalent to IntelliJ's
                Search Everywhere for file navigation.
              </td>
            </tr>
            <tr>
              <td>Search Commands / Actions</td>
              <td>Ctrl + Shift + P</td>
              <td>Cmd + Shift + P</td>
              <td>Opens the Command Palette to search VS Code commands, actions, settings, and extension commands.</td>
            </tr>

            <tr>
              <td>Search Symbols in Workspace</td>
              <td>Ctrl + T</td>
              <td>Cmd + T</td>
              <td>Searches classes, methods, functions, fields, and other symbols throughout the workspace.</td>
            </tr>

            <tr>
              <td>Search Symbols in Current File</td>
              <td>Ctrl + Shift + O</td>
              <td>Cmd + Shift + O</td>
              <td>Searches methods, classes, fields, and other symbols in the current file.</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
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

      {/* <!-- VS CODE SETTINGS SHORTCUTS --> */}
      <h3 className='section-header' id='settings-shortcuts'>
        VS Code Settings Shortcuts
      </h3>

      <SearchContainer placeholder='Search settings shortcuts...' searchSelector='tbody tr'>
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
              <td>Command Palette</td>
              <td>Ctrl + Shift + P</td>
              <td>Cmd + Shift + P</td>
              <td>Search and run VS Code commands, settings actions, extension commands, and developer tools.</td>
            </tr>

            <tr>
              <td>Open Settings</td>
              <td>Ctrl + ,</td>
              <td>Cmd + ,</td>
              <td>Opens the graphical VS Code Settings editor.</td>
            </tr>

            <tr>
              <td>Open Keyboard Shortcuts</td>
              <td>Ctrl + K, Ctrl + S</td>
              <td>Cmd + K, Cmd + S</td>
              <td>View, search, add, remove, and override keyboard shortcuts.</td>
            </tr>

            <tr>
              <td>Open User Settings JSON</td>
              <td>Ctrl + Shift + P</td>
              <td>Cmd + Shift + P</td>
              <td>Open the Command Palette and run "Preferences: Open User Settings (JSON)".</td>
            </tr>

            <tr>
              <td>Open Workspace Settings JSON</td>
              <td>Ctrl + Shift + P</td>
              <td>Cmd + Shift + P</td>
              <td>Open the Command Palette and run "Preferences: Open Workspace Settings (JSON)".</td>
            </tr>

            <tr>
              <td>Open Keyboard Shortcuts JSON</td>
              <td>Ctrl + Shift + P</td>
              <td>Cmd + Shift + P</td>
              <td>Open the Command Palette and run "Preferences: Open Keyboard Shortcuts (JSON)".</td>
            </tr>

            <tr>
              <td>Extensions</td>
              <td>Ctrl + Shift + X</td>
              <td>Cmd + Shift + X</td>
              <td>Opens the Extensions view to install, remove, enable, or configure extensions.</td>
            </tr>

            <tr>
              <td>Toggle Sidebar</td>
              <td>Ctrl + B</td>
              <td>Cmd + B</td>
              <td>Shows or hides the primary sidebar.</td>
            </tr>

            <tr>
              <td>Toggle Panel</td>
              <td>Ctrl + J</td>
              <td>Cmd + J</td>
              <td>Shows or hides the bottom panel containing Terminal, Output, Problems, and Debug Console.</td>
            </tr>

            <tr>
              <td>Open Quick Open</td>
              <td>Ctrl + P</td>
              <td>Cmd + P</td>
              <td>Quickly search for and open files in the current workspace.</td>
            </tr>

            <tr>
              <td>Reload VS Code Window</td>
              <td>Ctrl + Shift + P</td>
              <td>Cmd + Shift + P</td>
              <td>
                Open the Command Palette and run "Developer: Reload Window". Useful after changing extensions or Java
                workspace settings.
              </td>
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
