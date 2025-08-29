import React from 'react';
import CodeBlock from '@/components/shared/CodeBlock';

export const metadata = {
  title: "Next.js",
  description: "Notes on using Next.js framework",
};

export default function NextJs() {

  return (
    <>
      <section>
        <h3 className="section-header">Next.js Tutorial</h3>
        <p>From Next.js: <a href="https://nextjs.org/learn/dashboard-app">nextjs.org/learn/dashboard-app</a></p>
        <hr />
      </section>

      <section>
        <h3 className="section-header">Next.js Documentation</h3>
        <p>From Next.js: <a href="https://nextjs.org/docs">nextjs.org/docs</a></p>
        <ul>
          <li>Next.js mounts a component twice during testing, so there might be double console logs, but it's removed in production build</li>
        </ul>
        <hr />
      </section>

      {/*<!-- IMPORTING -->*/}
      <section>
        <h3 className='section-header' id='importing'>Importing</h3>
        <p>
          Next.js does not require an extension in import statements for files
          <code>.js .jsx .ts .tsx</code>
        </p>

        <CodeBlock language='jsx'>{`
import MyComponent from '@/src/components/MyComponent.jsx';
import MyComponent from '@/src/components/MyComponent'; // will also work
  `}</CodeBlock>

        <h4 className='sub-section-header'>Import Alias @</h4>
        <p>
          Configure <code>jsconfig.json</code> or <code>tsconfig.json</code> to include the following line
          <code>"@/*": ["./src/*"]</code> in the <code>paths</code> object so @ will still point at the src/ folder.
        </p>
        <ul>
          <li>
            <code>"baseUrl": "./"</code> allows access to files in the root of the project like
            <code>import * from 'store.js'</code>
          </li>
          <ul>
            <li>
              Root relative notation <code>/</code> is reserved for items in the public/ folder
            </li>
          </ul>
          <li>
            <code>"@/*": ["src/*"]</code> gives a shortcut to access the src/ folder like
            <code>import * from '@/components/web/TopBar'</code>
          </li>
        </ul>

        <CodeBlock language='jsx'>{`
// jsconfig.json / tsconfig.json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"],
      "@/context/*": ["src/components/shared/context/*"]
    }
  }
}
  `}</CodeBlock>

        <h4 className='sub-section-header'>Importing CSS</h4>
        <ul>
          <li>
            Next.js only allows regular (global) <code>.css</code> import in
            <code>app/layout.js</code> or <code>pages/_app.js</code>
          </li>
          <li>
            Module CSS <code>*.module.css</code> can be imported anywhere
          </li>
        </ul>

        <h4 className='sub-section-header'>Public Folder Assets</h4>
        <ul>
          <li>
            Files in <code>public/</code> can be accessed directly at the root - <code>/images/*</code>
          </li>
        </ul>

        <hr />
      </section>

      {/*<!-- SERVER SIDE VS CLIENT SIDE COMPONENT -->*/}
      <section>
        <h3 className='section-header' id='serverClient'>Server-Side vs Client-Side Component</h3>
        <ul>
          <li>Components in Next.js are server-side, rendered on the server, by default</li>
          <li>
            Server components can NOT use hooks, event handlers, and browser APIs like
            <code>window, document, etc</code>
          </li>
          <li>
            A client-side component must have <code>'use client';</code> at the top to be a client component
          </li>
          <li>Both server and client components are SSRed</li>
        </ul>

        <h4 className='sub-section-header'>
          Balancing Server/Client & Stateless/Stateful Component
        </h4>
        <ul>
          <li><strong>Client Component</strong></li>
          <ul>
            <li>Client component should also be stateful component</li>
            <li>
              Use client/stateful component when you need event handlers, hooks, browser-only APIs
              (<code>window, document, etc</code>)
            </li>
            <li>Primarily for interactive elements, managing states, UI</li>
            <li>Ideal for interactive components: buttons, forms, etc.</li>
          </ul>

          <li><strong>Server Component</strong></li>
          <ul>
            <li>Server component should also be stateless component</li>
            <li>
              Use server/stateless component when you want to fetch data or APIs close to the source
            </li>
            <li>
              Good for API keys, tokens, authorization, and other secrets without exposing them to the client
            </li>
            <li>Use to run expensive processes that client can't handle</li>
            <li>Reduce the amount of Javascript sent to the browser</li>
            <li>Server component can NOT accept client-side callback functions or hooks</li>
            <li>
              Ideal for rendering static content, layout, fetching data, or expensive calculation
            </li>
          </ul>
        </ul>
        <p>
          Official explanation:{' '}
          <a href='https://nextjs.org/docs/app/getting-started/server-and-client-components'>
            nextjs.org/docs/app/getting-started/server-and-client-components
          </a>
        </p>

        <CodeBlock language='jsx'>{`
// JSX

// Server Component (Stateless Parent)
import Counter from '../components/Counter';

export default function Page() {
  return (
    <div>
      <h1>Server Page</h1>
      <p>This is rendered on the server.</p>
      <Counter /> {/* Stateful child */}
    </div>
  );
}

--------------------------------------------------------------

// Client Component (Stateful Child)
'use client'; // makes it client-side component
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
  `}</CodeBlock>
<h4 className='sub-section-header'>Notes</h4>
<ul>
  <li>The web page should be a server component to make use of metadata</li>
  <li>To improve SEO, any interactive parts of the page should be a separate React component that is on the client-side</li>
</ul>
        <hr />
      </section>

      {/*<!-- ROUTING -->*/}
      <section>
        <h3 className='section-header' id='router'>Built-in Router</h3>
        <p>This section is about the App Router (Next.js version 13+)</p>

        <h4 className='sub-section-header'>Folder Structure</h4>
        <ul>
          <li>Next.js uses file structure within the <code>app/</code> folder to determine routing</li>
          <li>
            The subfolder name sets the route name while the component for that route has to be named
            <code>page.jsx</code>
          </li>
          <li>
            <code>layout.jsx</code> and <code>page.jsx</code> are special files and must retain their names
          </li>
        </ul>

        <CodeBlock language='txt'>{`
my-app/
├── app/
│   ├── layout.jsx          // Global layout (header, nav, etc.) and entry point
│   ├── page.jsx            // Home page → /
│   ├── about/
│   │   └── page.jsx        // About page → /about
│   └── blog/
│       └── [id]/
│           └── page.jsx    // Dynamic route → /blog/1, /blog/abc
  `}</CodeBlock>

        <hr />
      </section>

      {/*<!-- GLOBAL LAYOUT - app/layout.jsx -->*/}
      <section>
        <h4 className='sub-section-header'>Global Layout - app/layout.jsx</h4>
        <ul>
          <li>
            It must define the <code>&lt;html&gt;</code> and <code>&lt;body&gt;</code> elements and accept the
            <code>children</code> prop.
          </li>
        </ul>

        <CodeBlock language='jsx'>{`
// JSX
// app/layout.jsx
import './globals.css'; // global CSS
import TopNav from './components/TopNav'; // global UI component
import LeftNav from './components/LeftNav'; // global UI component

export const metadata = {
  title: 'My Next.js App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id="root">
        <TopNav />
        <div className="container">
          <LeftNav />
          <main className="main-content">{children}</main>
        </div>
      </body>
    </html>
  );
}
  `}</CodeBlock>
      </section>

      {/*<!-- NORMAL PAGES -  -->*/}
      <section>
        <h4 className='sub-section-header'>Normal Pages - */page.jsx</h4>

        <CodeBlock language='jsx'>{`
// JSX
// Home page - app/page.jsx
export default function HomePage() {
  return <h1>Welcome to the Home Page!</h1>;
}

--------------------------------------------------------------

// About page - app/about/page.jsx
export default function AboutPage() {
  return <h1>About Page</h1>;
}
  `}</CodeBlock>
      </section>

      {/*<!-- DYNAMIC PAGE -- >*/}
      <section>
        <h4 className='sub-section-header'>Dynamic Page - */[x]/page.jsx</h4>
        <ul>
          <li>
            Dynamic pages use brackets <code>[]</code> and a variable name in the file structure.
          </li>
          <li>
            Within the component, use the <code>useParams()</code> function to get a
            <code>params</code> object with the key that matches your variable name.
          </li>
        </ul>

        <CodeBlock language='jsx'>{`
// JSX
// Dynamic blog page - app/blog/[id]/page.js
import { useParams } from 'next/navigation';

export default function BlogPage() {
  const params = useParams(); // { id: '1' }
  return <h1>Blog Post ID: {params.id}</h1>; // if id = 1 → /blog/1
}
  `}</CodeBlock>
        <hr />
      </section>

      {/*<!-- NAVIGATING -->*/}
      <section>
        <h4 className='sub-section-header'>Navigating</h4>
        <ul>
          <li>Use <code>&lt;Link&gt;</code> instead of <code>&lt;a&gt;</code></li>
          <ul>
            <li><code>import Link from 'next/link';</code></li>
          </ul>
          <li>
            Using <code>&lt;a href='...'</code> will cause the whole page to reload, including the root component.
          </li>
          <li>
            Can also use the <code>useRouter()</code> hook:{' '}
            <a href='https://nextjs.org/docs/pages/api-reference/functions/use-router'>
              nextjs.org/docs/pages/api-reference/functions/use-router
            </a>
          </li>
        </ul>

        <CodeBlock language='jsx'>{`
// JSX
'use client'; // Required to be able to use event handlers and hooks
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();
  return <button onClick={() => router.push('/about')}>Go to About</button>;
}
  `}</CodeBlock>

        <hr />
      </section>

      {/*<!-- ROUTE GROUP -->*/}
      <section>
        <h3 className='section-header' id='routeGroup'>Route Groups</h3>
        <p>
          A route group can be added by wrapping a folder in parenthesis <code>()</code>, and they will not appear in the
          route or URL.
        </p>
        <ul>
          <li>Route groups can be used to organize routes into groups.</li>
          <li>Can also be used to define multiple root layouts.</li>
          <li>
            Route groups don't automatically inherit the global layout <code>app/layout.jsx</code>
          </li>
          <ul>
            <li>A new <code>layout.jsx</code> must be defined or omitted if desired.</li>
          </ul>
          <li>Group up certain routes to share a layout.</li>
          <li>To avoid conflicting paths, routes in different groups should not have the same URL paths.</li>
          <ul>
            <li>
              <code>(marketing)/about/page.js</code> and <code>(shop)/about/page.js</code> would resolve to
              <code>/about</code>
            </li>
          </ul>
        </ul>

        <CodeBlock language='txt'>{`
my-app/
├── app/
│   ├── layout.jsx          // Global layout
│   ├── page.jsx            // Uses global layout (/)
│   ├── dashboard/
│   │   └── page.jsx        // Uses global layout (/dashboard)
│   └── (no-layout)/        // New route group
│       └── special/
│           └── page.jsx    // This page ignores global layout! (/special)
  `}</CodeBlock>

        <hr />
      </section>

      {/* TODO: Look over section and update it */}
      {/*<!-- API ROUTE -->*/}
      <section>
        <h3 className='section-header' id='apiRoute'>API Routes</h3>
        <p>
          In Next.js App Router, API routes live inside the <code>app/api/</code> folder.
          Each folder inside <code>app/api</code> becomes an API endpoint.
        </p>
        <ul>
          <li>API routes can handle <code>GET</code>, <code>POST</code>, <code>PUT</code>, <code>DELETE</code> requests.</li>
          <li>They are **server-side only** by default, meaning no client JavaScript is bundled.</li>
          <li>You can use <code>NextResponse</code> to return JSON or redirect users.</li>
          <li>API routes can fetch data from databases or external APIs without exposing secrets.</li>
        </ul>

        <CodeBlock language='jsx'>{`
// app/api/hello/route.js

import { NextResponse } from 'next/server';

// Handle GET requests
export async function GET() {
  return NextResponse.json({ message: 'Hello World!' });
}

// Handle POST requests
export async function POST(request) {
  const body = await request.json();
  return NextResponse.json({ received: body });
}
  `}</CodeBlock>

        <p>
          Example usage:{' '}
          <code>fetch('/api/hello')</code> → returns <code>{"{ message: 'Hello World!' }"}</code>
        </p>
        <hr />
      </section>


      {/*<!-- METADATA -->*/}
      <section>
        <h3 className='section-header' id='metadata'>Metadata</h3>
        <p><code>metadata</code> can only be set on server components</p>
        <p>By default, two <code>&lt;meta&gt;</code> tags are always added to a page:</p>

        <CodeBlock language='html'>{`
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
  `}</CodeBlock>

        <h4 className='sub-section-header'>Static Metadata</h4>
        <p>
          Export a <code>Metadata</code> object into a <code>layout.jsx</code> or <code>page.jsx</code> and define the fields.
        </p>

        <CodeBlock language='jsx'>{`
export const metadata = {
  title: 'My Blog',
  description: '...',
};

export default function Page() {}
  `}</CodeBlock>

        <h4 className='sub-section-header'>Generated Metadata</h4>
        <p>
          Use the <code>generateMetadata</code> function to fetch data and return a <code>Metadata</code> object.
        </p>
        <ul>
          <li>Parameters: <code>props</code> and <code>parent</code></li>
          <ul>
            <li><code>props.params</code>: contains the dynamic route parameters (<code>/blog/[id]</code> → <code>props.params.id</code>)</li>
            <li><code>props.searchParams</code>: contains current URL's search params</li>
            <li><code>parent</code>: a promise of the resolved metadata from the parent route</li>
          </ul>
        </ul>

        <CodeBlock language='jsx'>{`
export async function generateMetadata({ params, searchParams }, parent) {
  const id = (await params).id;

  // Fetch post information
  const post = await fetch(\`https://api.vercel.app/blog/\${id}\`).then((res) =>
    res.json()
  );

  return {
    title: post.title,
    description: post.description,
  };
}

export default function Page({ params, searchParams }) {}
  `}</CodeBlock>

        <h4 className='sub-section-header'>Streaming Metadata</h4>
        <p>
          <a href='https://nextjs.org/docs/app/getting-started/metadata-and-og-images'>
            nextjs.org/docs/app/getting-started/metadata-and-og-images
          </a>
        </p>
      </section>

    </>
  );
}