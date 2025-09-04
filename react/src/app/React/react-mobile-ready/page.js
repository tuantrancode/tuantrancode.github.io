import CodeBlock from '@/components/shared/CodeBlock';

export const metadata = {
  title: 'Getting React App  Ready for React Native',
  description: 'Notes to keep in mind when planning a React app that will migrate to the mobile version, React Native',
};

export default function MobileReadyReact() {
  return (
    <>
      {/*<!-- MOBILE-READY -->*/}
      <section>
        <h2 className='page-header'>React Native Migration</h2>
        <p>
          To help with mobile development, there are some areas to make note of while making the web version React. It
          will allow more reusable code when starting the React Native project
        </p>
        <ul>
          <li>
            <strong>Keep business logic independent</strong> : avoid putting it inside <code>pages</code>/
          </li>
          <li>
            <strong>Separate hooks, services, and state</strong> : these are fully reusable in React Native
          </li>
          <li>
            <strong>Use atomic components</strong> : reusable components that don’t depend on DOM APIs
          </li>
          <li>
            <strong>Limit CSS-in-JS to web-only components</strong> : since React Native uses <code>StyleSheet</code>/
          </li>
          <li>
            <strong>Avoid Next.js-specific APIs in your core logic</strong> : SSR/SSG code stays isolated
          </li>
        </ul>
        <hr />
      </section>

      {/*<!-- FOLDER STRUCTURE -->*/}
      <section>
        <h3 className='section-header' id='folderStructure'>
          Sample Structure to Make Next.js Project, Mobile-Ready
        </h3>
        <p>
          Separate reusuable code from web-specific code to copy &amp; paste as much as possible over to the React
          Native project
        </p>
        <CodeBlock language='jsx'>{`
my-app/
├── app/                         # Next.js app router (if using /app directory)
│   ├── layout.jsx               # Web layout only
│   ├── page.jsx                 # Home page( High-level pages can map directly to RN screens)
│   ├── about/
│   │   └── page.jsx             # About page( High-level pages can map directly to RN screens)
│   ├── gallery/
│   │   └── page.jsx
│   └── api/                     # Next.js API routes (web-only)
│
├── src/
│   ├── components/              # UI components (shared between Web & Mobile when possible)
│   │   ├── common/              # Pure, reusable components (✅ transferable)
│   │   │   ├── Button.jsx
│   │   │   ├── ImageCard.jsx
│   │   │   └── Loader.jsx
│   │   └── web/                 # Web-only components (❌ not reusable in RN)
│   │       ├── Navbar.jsx
│   │       ├── Footer.jsx
│   │       └── NextImage.jsx
│   │
│   ├── hooks/                   # Reusable React hooks (✅ transferable)
│   │   ├── useFetch.jsx
│   │   ├── useAuth.jsx
│   │   └── useDebounce.jsx
│   │
│   ├── services/                # API calls & data fetching (✅ transferable)
│   │   ├── apiClient.jsx         # Axios or Fetch wrapper
│   │   ├── imageService.jsx
│   │   └── authService.jsx
│   │
│   ├── state/                   # State management (✅ transferable)
│   │   ├── store.jsx            # Redux / Zustand / Recoil setup
│   │   ├── imageSlice.jsx
│   │   └── authSlice.jsx
│   │
│   ├── utils/                   # Pure helper functions (✅ transferable)
│   │   ├── formatDate.jsx
│   │   ├── debounce.jsx
│   │   └── paginate.jsx
│   │
│   └── config/                  # Environment config (✅ transferable)
│       ├── env.jsx
│       └── constants.jsx
│
├── public/                      # Static images & assets (web only)
│   ├── images/                  # accessed from root (/images/*)
│   └── sitemap.xml              # good for SEO (/sitemap.xml)
│   └── robots.txt               # accessed from root (/robots.txt)
├── store.js
│
├── styles/                      # Web-only styles (❌ not used in RN)
│   ├── globals.css
│   ├── theme.jsx
│   └── variables.css
│
├── package.json
├── tsconfig.json
└── next.config.js
    `}</CodeBlock>
        <hr />
      </section>

      {/*<!-- SAMPLE MONOREPO STRUCTURE WITH TURBOREPO -->*/}
      <section>
        <h3 className='section-header' id='monorepo'>
          Sample Monorepo Structure with TurboRepo
        </h3>
        <CodeBlock language='jsx'>{`
my-monorepo/
├── apps/
│   ├── mobile/					# where the MOBILE expo app will be
│   │   ├── assets/				# holds the assets for MOBILE
│   │   ├── app/
│   │   │   ├── _layout.js		# Root layout for expo-router (like the layout.js of Next)
│   │   │   ├── index.js		# mobile Home page (/)
│   │   │   └── about.js		# mobile About page (/about)
│   │   ├── app.json				# MOBILE manifest file
│   │   ├── babel.config.js			# MOBILE babel config file
│   │   ├── metro.config.js			# MOBILE metro bundler config file
│   │   └── package.json 			# MOBILE scripts and dependencies
│   └── web/					# where the WEB next.js app will be
│       ├── public/				# holds static assets for WEB
│       │   ├── _layout.js
│       │   ├── sitemap.xml     # good for SEO (/sitemap.xml)
│       │   └── robots.txt      # accessed from root (/robots.txt)
│       ├── app/
│       │   ├── page.js			# Home page (/) - normal entry point
│       │   ├── layout.js		# Optional Global Layout - entry point if file exist
│       │   ├── global.css
│       │   └── About/
│       │       └── page.js		# web About page (/about)
│       ├── jsconfig.js				# WEB compiler options: import alias
│       ├── next.config.js			# WEB next.js bundler config file
│       └── package.json			# WEB scripts and dependencies 
├── shared/						# Codes that will be shared between Next and Expo
│   ├── assets/
│   └── components/
├── package.json				# turborepo and root dependencies, scripts, and overrides
├── turbo.json					# turborepo config file
└── eslint.config.mjs			# ESLint config file        
        `}</CodeBlock>
        <hr />
      </section>

      {/*<!-- SHARED COMPONENTS -->*/}
      <section>
        <h3 className='section-header' id='sharedComponents'>
          Shared Components &amp; Web-Only Components
        </h3>
        <p>
          Shared components will be React components that does NOT render JSX element and is NOT dependent on Next.js
          (like function that handle routing)
        </p>
        <p>
          Web-only components will only render JSX elements, is where CSS modules are imported, or uses Next.js
          dependencies like routing
        </p>
        <p>All React Native components are client-side</p>
        <CodeBlock language='jsx'>{`
// JSX
export default function SharedComponent(){
    // Fetch data, handle states/hooks, event handlers
    return <WebComponent />
}

export default function WebComponent(props) {
    return (
        <div>
            <button onClick={props.onClick}/>
        </div>
    )
}
    `}</CodeBlock>
        <hr />
      </section>

      {/*<!-- WHAT REACT NATIVE WILL NEED -->*/}
      <section>
        <h3 className='section-header' id='rnRequirement'>
          What React Native will Need
        </h3>
        <ul>
          <li>Redo routing on React Native using React Navigation or Expo Router for expo app</li>
          <li>Remake the UI components that makes use of JSX</li>
          <ul>
            <li>Replace the HTML elements with React Native/ react-native-web counterpart</li>
          </ul>
          <li>Redo styling, because React Native does not support .css files</li>
        </ul>
      </section>
    </>
  );
}
