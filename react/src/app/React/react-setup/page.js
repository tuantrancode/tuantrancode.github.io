import React from 'react';
import CodeBlock from '@/components/shared/CodeBlock';

export const metadata = {
  title: "Setuping React",
  description: "Notes on setting up React using different tools / frameworks",
};

export default function ReactSetup() {

  return (
    <>
      {/*<!-- SETTING UP VITE -->*/}
      <section>
        <h3 className='section-header' id='vite'>Setup using Vite</h3>
        <p>Vite is a build tool and dev server for React app.</p>
        <ul>
          <li>A front-end tool to quickly develop app/prototype, SPAs, Dashboard, interal tooling</li>
          <li>Minimal and any extra tech will need to be added: routing, SSR, testing setup, API routes</li>
        </ul>
        <h4 className='sub-section-header'>Basic Commands</h4>
        <ul>
          <li><strong>Creating the Project</strong> : <code>npm create vite@latest my-app</code></li>
          <ul>
            <li>Select React framework, and Javascript or Typescript variant</li>
          </ul>
          <li><strong>Running the Developer Server</strong> : <code>npm run dev</code> in the project root folder</li>
          <li><strong>Building the Project</strong> : <code>npm run build</code> in the project root folder</li>
        </ul>
        <h4 className='sub-section-header'>Folder Structure</h4>
        <CodeBlock language='text'>
          {`
my-vite-app/
├── index.html
├── src/
│   ├── App.jsx         # root component that wraps all other components
│   ├── main.jsx        # entry point of website
│   ├── pages/
│   │   ├── Home.jsx    # Home page (/)
│   │   └── About.jsx   # About page (/about)
│   ├── store.js
└── public/             # holds static assets
    ├── images/         # accessed from root (/images/*)
    ├── sitemap.xml     # good for SEO (/sitemap.xml)
    └── robots.txt      # accessed from root (/robots.txt)
├── package.json
└── vite.config.js
    `}
        </CodeBlock>
        <h4 className='sub-section-header'>Minimal Project + React Router</h4>
        <p>React Router is used to add routing functionality into the Vite app</p>
        <ul>
          <li>the main.jsx is the same as index.js in other React app (except Next.js)</li>
        </ul>
        <CodeBlock language='jsx'>
          {`
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// App.jsx
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

export default function App() {
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link> |{" "}
        <Link to='/about'>About</Link>
      </nav>
      <Routes>     # Routes is the main container that swaps components out depending on the current URL
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

// pages/Home.jsx
export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

// pages/About.jsx
export default function About() {
  return <h1>About Page</h1>;
}
    `}
        </CodeBlock>
        <hr />
      </section>

      {/*<!-- SETTING UP NEXT.JS -->*/}
      <section>
        <h3 className='section-header' id='nextjs'>Setup using Next.js</h3>
        <p>Next.js is a framework for full-stack React app.</p>
        <ul>
          <li>It has built-in features like routing, SSR, API routes, and testing setup (Jest)</li>
          <li>Good for SEO and a variety of apps like blogs, marketing sites, e-commerce, enterprise apps, SaaS and large apps</li>
        </ul>
        <h4 className='sub-section-header'>Basic Commands</h4>
        <ul>
          <li><strong>Creating the Project</strong> : <code>npx create-next-app@latest my-app</code></li>
          <ul>
            <li>ESLint : Tool to make sure Javascript and Typescript codes are clean and error-free</li>
            <li>Turbopack: Build tool to package code efficiently for dev and production</li>
          </ul>
          <li><strong>Running the Developer Server</strong> : <code>npm run dev</code> in the project root folder</li>
          <li><strong>Building the Project</strong> : <code>npm run build</code> in the project root folder</li>
          <ul>
            <li><strong>Testing the build</strong> : <code>npm run start</code> to test the production build</li>
          </ul>
        </ul>
        <h4 className='sub-section-header'>Folder Structure</h4>
        <CodeBlock language='text'>
          {`
my-next-app/
├── app/                 # the root for all navigation and links
│   ├── layout.jsx       # Optional Global Layout - entry point if file exist
│   ├── page.jsx         # Home page (/) - normal entry point if layout.jsx did not exist
│   ├── about/
│   │   └── page.jsx     # About page (/about)
└── public/              # holds static assets
    ├── images/          # accessed from root (/images/*)
    ├── sitemap.xml     # good for SEO (/sitemap.xml)
    └── robots.txt       # accessed from root (/robots.txt)
├── store.js
├── next.config.js
├── tsconfig.json
└── package.json
    `}
        </CodeBlock>
        <ul>
          <li>In Next.js App Router (Next 13+), your entire site structure and navigation are based on the folder and file structure inside <code>app/</code> folder</li>
          <ul>
            <li>The <code>app/</code> and <code>public/</code> folders must stay the same.</li>
            <li>Special files like <code>layout.js</code> and <code>page.js</code> can not be renamed and need to be in their expected locations for proper navigation</li>
            <li>The subfolders of <code>app/</code> can be organized however you want</li>
            <li>Config files like <code>next.config.js</code>, <code>package.json</code>, <code>tsconfig.json</code> must be in the root</li>
            <li>Standard Node.js rules apply. Keep <code>node_modules/</code> in root; you don’t move this around.</li>
            <li>You can create folders like <code>components/, hooks/, utils/, styles/, lib/, etc.</code> anywhere as long as they're imported correctly</li>
          </ul>
        </ul>
        <h4 className='sub-section-header'>Minimal Project with Global Layout</h4>
        <p>Next.js already has built in routing and SSR.</p>
        <ul>
          <li><code>app/layout.jsx</code> acts as the entry point and root component for the app so it's similar to combining <code>main.jsx</code> + <code>App.jsx</code> in Vite</li>
        </ul>
        <CodeBlock language='jsx'>
          {`
export const metadata = {
  title: 'My Next.js App',
  description: 'Minimal Next.js example with SSR and layout',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <header>
          <nav>
            <a href='/'>Home</a>
            <a href='/about'>About</a>
          </nav>
        </header>
        <mark><main>{children}</main></mark> #{children} is where the components will be swapped
        <footer></footer>
      </body>
    </html>
  );
}

// app/page.jsx (Home Page)
export const dynamic = 'force-dynamic'; // Ensures SSR every request

export default async function HomePage() {
  // Fetch some server-side data
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    cache: 'no-store', // Forces SSR fetch
  });
  const data = await res.json();

  return (
    <section>
      <h1>Welcome to My Next.js App!</h1>
      <h2>SSR Example:</h2>
      <p><strong>Title:</strong> {data.title}</p>
      <p><strong>Body:</strong> {data.body}</p>
    </section>
  );
}

// app/about/page.jsx (About Page)
export default function AboutPage() {
  return <h1>About Page</h1>;
}

// next.config.js (optional but recommended)
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;
    `}
        </CodeBlock>
        <hr />
      </section>

      {/*<!-- KEY FILES -->*/}
      <section>
        <h3 className='section-header' id='keyFiles'>Key Files</h3>
        <ul>
          <li><code>package.json</code> : includes the scripts and dependencies of the project</li>
          <ul>
            <li><code>homepage</code> : the URL for the homepage of the site</li>
            <li><code>scripts</code> : the scripts to manage project</li>
            <ul>
              <li>Sample: <code>{`"script": { "scriptName": "cmd code", }`}</code></li>
              <CodeBlock language='jsx'>{`
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build --turbopack",
    "analyze": "cross-env ANALYZE=true next build",
    "start": "next start",
    "lint": "eslint"
  },              
              `}</CodeBlock>
              <li><code>dev</code> : script used when starting development/testing server</li>
              <li><code>build</code> : script for creating a production-ready build</li>
              <li><code>analyze</code> : script to anaylyze build bundle</li>
            </ul>


          </ul>
          <li><code>*.config.js</code> : configuration file for the tool you're using (Vite or Next)</li>
          <li><code>next.config.mjs</code> : Next.js project configuration file to control development/production build by adding key-value pairs to the <code>nextConfig</code> object</li>
          <ul>
            <li><code>basePath</code> : to adjust the URL of of navigation links; used when deploying app under a sub-path of a domain</li>
            <li><code>assetsPrefix</code> : to adjust the URL of the Javascript and CSS files that loads from <code>_next/</code> folder like <code>_next/static/</code></li>
            <li><code>assetsPrefix</code> does NOT affect files in the <code>public/</code> folder</li>
          <li>Reference: <a href="https://nextjs.org/docs/app/api-reference/config/next-config-js">nextjs.org/docs/app/api-reference/config/next-config-js</a></li>
          </ul>
        </ul>
        <hr />
      </section>


      {/*<!-- OPTIMIZING PRODUCTION BUILD -->*/}
      <section>
        <h3 className='section-header' id='optimizeBuild'>Optimizing Production Build</h3>
        <p>Use Next.js bundle analyzer</p>
        <ol>
          <li>Install the analyzer: <code>npm install @next/bundle-analyzer --save-dev</code> and <code>npm install cross-env --save-dev</code> in the project root</li>
          <li>Update <code>package.json</code> to have the following key-value pair in "scripts"</li>
          <CodeBlock language='jsx'>{`
"scripts": {
  ...
  "analyze": "cross-env ANALYZE=true next build",
}    
`}
          </CodeBlock>
          <li>Configure <code>next.config.js</code> and set it as</li>
          <CodeBlock language='jsx'>{`
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true, // Next.js 14+ always minifies JS in production
};

export default withBundleAnalyzer(nextConfig);
          
`}
          </CodeBlock>
          <li>Run the analyzer: <code>npm run analyze</code> for windows, <code>ANALYZE=true npm run build</code> for Mac/Linux <code>npx cross-env ANALYZE=true npm run build</code>in the project root</li>
        </ol>
        <h4 className='sub-section-header'>Tips</h4>
        <ul>
          <li><strong>Tree-shake libraries</strong> : use named imports to only import components you use</li>
          <ul>
            <li><code>import oneFunction from 'lodash/manyFunctions';</code></li>
          </ul>
          <li><strong>Dynamic imports</strong> : use dynamic imports for pages/components that are rarely used</li>
          <ul>
            <li>Instead of <code>import MasonryComponent from './MasonryComponent</code> as normal, use dynamic import like below</li>
          </ul>
          <CodeBlock language='jsx'>{`
import dynamic from 'next/dynamic';

// Dynamically import the MasonryComponent if it's a heavy component
const MasonryGallery = dynamic(
  () => import('@/app/Responsive/masonry-gallery/page'),
  {
    loading: () => <p>Loading gallery...</p>, // Fallback UI while loading
    ssr: false, // Optional: disables server-side rendering for this component
  }
);

export default function MasonryPage() {
  return (
    <div>
      <h1>Masonry Gallery</h1>
      <MasonryGallery />
    </div>
  );
}
      `}</CodeBlock>
        </ul>
        <hr />
      </section>


      {/*<!-- PRODUCTION BUILD NOTES -->*/}
      <section>
        <h3 className='section-header' id='buildNotes'>Production Build</h3>
        <ul>
          <li>Make sure to add the homepage URL to <code>package.json</code> like so <code>{`"homepage": "https://<your-username>.github.io/<repo-name>/"`}</code></li>
          <li>The only folder that is upload to the CDN is <code>_next/static/</code> folder as everything else should not be exposed to the public</li>
        </ul>
        <p><strong>Deploying Static Next.js app to Github Pages</strong></p>
        <ul>
          <li>Github Pages only supports static exports of React App, some extra requirements are needed to run Next.js app on Github</li>
          <ol>
            <li>Update <code>next.config.mjs</code> file so that <code>nextConfig</code> object so it has the following:</li>
            <CodeBlock language='jsx'>{`
/* For Deploying to GitHub Pages as a static site (SSG) */
  output: 'export', // generate a static site
  distDir: 'out',   // where to put the generated production build
  images: {
    unoptimized: true, // Next.js Images component will not load in Github pages if it uses Next.js image optimization
  },              
              `}</CodeBlock>
            <li>Add a file named <code>.nojekyll</code> to the <code>public/</code> folder; this prevent Github from building a jekyll app</li>
          </ol>
        </ul>
        <ul>
          <li>The static build for the Next.js site will be in the folder <code>out/</code> inside the root folder; this is what Github Page uses</li>
          <ul>
            <li>The static version will not have API routes, dynamic server rendering, middleware, and <code>getServerSideProps</code></li>
          </ul>
          <li>The normal Next.js app build for the  site will be in the folder <code>.next/</code> inside the root folder</li>
        </ul>

      </section>
    </>
  );
}