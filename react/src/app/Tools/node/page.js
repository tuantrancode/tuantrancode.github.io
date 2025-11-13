import React from 'react';
import CodeBlock from '@/components/shared/CodeBlock';
import Link from 'next/link';

export const metadata = {
  title: 'Node.js',
  description: 'Notes on Node.js',
};

export default function Node() {
  return (
    <>
      {/* NPM NODE PACKAGE MANAGER */}
      <section>
        <h3 className='section-header' id='npm'>
          npm
        </h3>
        <p>
          <code>npm</code> is a node package manager that install and update node packages
        </p>
        <ul>
          <li>Build config and dependencies management file is <code>package.json</code></li>
          <li>
            <code>npm</code> : command to install packages or run scripts from the <u>local</u>{' '}
            <code>node_modules</code> or <code>package.json</code>
          </li>
          <ul>
            <li>
              <code>{`npm install <packageName>`}</code> : install the package into the local <code>node_modules</code>{' '}
              folder and adds it to the <code>package.json</code>
            </li>
            <ul>
              <li>
                Use <code>{`npm install --save-dev <packageName>`}</code> to save the package as a{' '}
                <code>devDependencies</code>
              </li>
            </ul>
            <li>
              <code>{`npm run <script>`}</code> : run the scripts specified in the local <code>package.json</code>
            </li>
            <li>
              <code>{`npm list <packageName>`}</code> : list the all versions of the package installed inside the
              project and any of its dependencies
            </li>
          </ul>
          <li>
            <code>npx</code> : executes a package without permanently installing it
          </li>
          <ul>
            <li>npx use the latest CLI version of the package</li>
            <li>Use when installing/update expo and react packages to pull compatible versions</li>
          </ul>
          <li>
            Dependencies versions are writen as <code>{`<major>.<minor>.<patch>`}</code> so 19.1.2 has major = 19, minor
            = 1, and patch = 2{' '}
          </li>
          <ul>
            <li>
              <code>^</code> Caret allow MINOR and PATCH updates
            </li>
            <li>
              <code>~</code> Tilde only allow PATCH updates
            </li>
            <li>No symbol means exact version</li>
          </ul>
          <li>Standard Fields of npm:</li>
          <ul>
            <li>
              <code>dependencies</code> include the packages the app need to run; always included in build and deploy
            </li>
            <li>
              <code>devDependencies</code> development-only dependencies; tools for testing your app, but will be
              excluded in production build
            </li>
            <li>
              <code>peerDependencies</code> tells that the included packages need to be install to be able to use the
              current package; primarily used when making your own library/ package
            </li>
            <li>
              <code>overrides</code> the included dependencies will override all others globally
            </li>
          </ul>
        </ul>
        <hr />
      </section>

      {/* TURBOREPO */}
      <section>
        <h3 className='section-header' id='turborepo'>
          TurboRepo
        </h3>
        <p>TurboRepo is a monorepo tool for managing multiple projects/packages in a single repository.</p>
        <ul>
          <li>
            Documentation: <a href='https://turborepo.com/'>turborepo.com/</a>
          </li>
          <li>It handles task running and caching</li>
          <li>Can enforce dependencies on projects to make sure all versions match</li>
          <li>Good for sharing codes between related projects and tightly coupled apps (frontend & backend)</li>
          <li>
            <code>turbo.json</code> : TurboRepo config file
          </li>
          <CodeBlock language='jsx'>{`
// Sample turbo.json setup
{
  "$schema": "https://turbo.build/schema.json",
  "globalDependencies": ["shared/**"],
  "tasks": {
    "dev": {
      "cache": false,
      "persistent": true
    },
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "dist/**"]
    },
    "lint": {
      "outputs": []
    },
    "clean": {
      "cache": false
    }
  }
}                
      `}</CodeBlock>
          <li>
            <code>package.json</code> : the main file that manages the repo
          </li>
          <CodeBlock language='jsx'>
            {`
// Sample package.json for TurboRepo
{
  "name": "monorepo-setup",
  "private": true,
  "packageManager": "npm@10.9.3",
  "scripts": {
    "dev": "turbo run dev --parallel",
    "dev:web": "turbo run dev --filter=web",
    "dev:mobile": "turbo run dev --filter=mobile",
    "clean": "turbo run clean",
    "build": "turbo run build",
    "lint": "eslint . --ext .js,.mjs,.cjs,.jsx,.ts,.tsx",
    "lint:web": "eslint app --ext .js,.jsx,.ts,.tsx",
    "lint:mobile": "eslint mobile --ext .js,.jsx,.ts,.tsx"
  },
  "devDependencies": {
    "@eslint/js": "^9.34.0",
    "eslint": "^9.34.0",
    "eslint-plugin-react": "^7.37.5",
    "globals": "^16.3.0",
    "turbo": "^2.5.6"
  },
  "workspaces": {
    "packages": [
      "apps/*",
      "shared/*"
    ]
  },
  "dependencies": {
    "react": "19.0.0",
    "react-dom": "19.0.0",
    "react-native": "0.79.6"
  },
  "overrides": {
    "react": "19.0.0",
    "react-dom": "19.0.0",
    "react-native": "0.79.6"
  }
}     
`}
          </CodeBlock>
        </ul>
        <hr />
      </section>

      {/* ESLint */}
      <section>
        <h3 className='section-header' id='eslint'>
          ESLint
        </h3>
        <ul>
          <li>
            <code>eslint</code> : Useful to check syntax and other problems with the code before compilation
          </li>
          <ol>
            <li>
              <code>npm install --save-dev eslint</code>
            </li>
            <li>
              <code>npx eslint --init</code>
            </li>
          </ol>
           <li>
            Install the VS Code extension to lint project in real time. <Link href="/Tools/visual-studio-code#extensions">link</Link>
          </li>
          <li>
            Sample <code>eslint.config.mjs</code> file
          </li>
          <CodeBlock language='jsx'>{`
// eslint.config.mjs file
import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import pluginTS from "@typescript-eslint/eslint-plugin";
import pluginReactNative from "eslint-plugin-react-native";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // JS / JSX files
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },

  // TypeScript / TSX files
  {
    files: ["**/*.{ts,tsx}"],
    plugins: { "@typescript-eslint": pluginTS },
    extends: ["plugin:@typescript-eslint/recommended"],
  },

  // React rules (web + mobile)
  pluginReact.configs.flat.recommended,

  // React Native rules
  pluginReactNative.configs.recommended,

  // Ignore common build folders
  {
    ignores: ["node_modules/**", "app/.next/**", "mobile/.expo/**", "dist/**"],
  },
]);
          `}</CodeBlock>
        </ul>
        <hr />
      </section>

      {/* USEFUL PACKAGE */}
      <section>
        <h3 className='section-header' id='usefulPkg'>
          Other Useful Packages
        </h3>
        <ul>
          <li>
            <code>babel-plugin-module-resolver</code> : allows any projects to use import alias like Next.js
            jsconfig.js; rewrite paths during compilation
          </li>
          <ul>
            <li>
              <code>npm install --save-dev babel-plugin-module-resolver</code>
            </li>
            <li>
              Use inside a <code>babel.config.js</code> file
            </li>
            <CodeBlock language='jsx'>{`
// Sample babel.config.js inside Expo app
module.exports = {
  presets: ["babel-preset-expo"],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@shared": ["../../shared"],
          "@mobileAssets": ["./assets"]
        },
      },
    ],
  ],
};          
          `}</CodeBlock>
          </ul>
        </ul>
      </section>
    </>
  );
}
