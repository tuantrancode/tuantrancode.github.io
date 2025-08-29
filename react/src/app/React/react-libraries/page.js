import React from 'react';
import CodeBlock from '@/components/shared/CodeBlock';

export const metadata = {
  title: "React Libraries",
  description: "Notes on variuos React libraries",
};

export default function ReactLibraries() {

  return (
    <>
      {/*<!-- ROUTING -->*/}
      <section>
        <h3 className='section-header' id='routing'>Routing</h3>

        <h4 className='sub-section-header'>React Router</h4>
        <p>A library to handle navigation inside your website</p>
        <p>Works very similarly to React Native routing library, React Navigation</p>

        <p><strong>Folder Structure</strong></p>
        <CodeBlock language='txt'>{`
src/
 ├─ pages/
 │   ├─ HTML/
 │   │   ├─ Basics.js
 │   │   ├─ Forms.js
 │   ├─ CSS/
 │   │   ├─ Basics.js
 │   │   ├─ Properties.js
 ├─ App.js
 ├─ index.js
  `}</CodeBlock>

        <p><strong>Wrap <code>BrowserRouter</code> around the root component</strong></p>
        <CodeBlock language='jsx'>{`
// JSX
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
  `}</CodeBlock>

        <p><strong>Set up the <code>Routes</code> and <code>Link</code> elements</strong></p>
        <ul>
          <li><code>Routes</code> acts as the main-content container and will swap out components based on URL</li>
          <li><code>Link</code> replaces element <code>&lt;a&gt;</code></li>
        </ul>

        <CodeBlock language='jsx'>{`
// JSX
import { Routes, Route, Link } from 'react-router-dom';

import HTMLBasics from './pages/HTML/Basics';
import Forms from './pages/HTML/Forms';

import CSSBasics from './pages/CSS/Basics';
import CSSProperties from './pages/CSS/Properties';

export default function App() {
  return (
    <div>
      {/* Sidebar Navigation */}
      <nav>
        <h3>HTML</h3>
        <ul>
          <li><Link to='/html/basics'>HTML Basics</Link></li>
          <li><Link to='/html/forms'>Forms</Link></li>
        </ul>

        <h3>CSS</h3>
        <ul>
          <li><Link to='/css/basics'>CSS Basics</Link></li>
          <li><Link to='/css/properties'>CSS Properties</Link></li>
        </ul>
      </nav>

      {/* Page Content */}
      <main>
        <Routes>
          {/* HTML Routes */}
          <Route path='/html/basics' element={<HTMLBasics />} />
          <Route path='/html/forms' element={<Forms />} />

          {/* CSS Routes */}
          <Route path='/css/basics' element={<CSSBasics />} />
          <Route path='/css/properties' element={<CSSProperties />} />
        </Routes>
      </main>
    </div>
  );
}
  `}</CodeBlock>
        <hr />
      </section>

      {/*<!-- STATE MANAGEMENT -->*/}
      <section>
        <h3 className='section-header' id='stateManagement'>State Management</h3>

        <h4 className='sub-section-header'>Zustand</h4>
        <p>Quick and lightweight way to manage state to avoid props drilling and allow multiple components to share states</p>
        <ul>
          <li>Can store ref, values, objects, functions and avoid props drilling</li>
          <li>Minimal boilerplate code</li>
          <li>Supports async actions naturally</li>
          <li>Can set up small, modular stores</li>
          <li>Works the same way in React Native</li>
          <li>When updating the store, Zustand does a shallow merge</li>
          <ul>
            <li>If updating nested objects, keys not in the new object will be deleted</li>
            <li>
              Zustand Recommendation: <a href='https://zustand.docs.pmnd.rs/guides/updating-state'>zustand.docs.pmnd.rs/guides/updating-state</a>
            </li>
          </ul>
        </ul>

        <p>Code sample to manage a store with 2 states: theme and user</p>
        <p>Setting up the store</p>
        <CodeBlock language='jsx'>{`
// JSX
// store.js
import { create } from 'zustand';

export const useStore = create((set) => ({
  theme: 'light',
  user: { name: '', email: '' },

  // Theme actions
  toggleTheme: () =>
    set((currentState) => ({
      theme: currentState.theme === 'light' ? 'dark' : 'light',
    })),

  // User actions
  setUser: (newUser) => set({ user: newUser }),
  clearUser: () => set({ user: { name: '', email: '' } }),
}));
  `}</CodeBlock>

        <p>Updating the store and getting value</p>
        <CodeBlock language='jsx'>{`
// JSX
// App.jsx
import React from 'react';
import { useStore } from './store';

export default function App() {
  const { theme, toggleTheme, user, setUser, clearUser } = useStore();

  return (
    <div>
      <h1>Zustand Example</h1>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>

      <h2>User Profile</h2>
      {user.name ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <button onClick={clearUser}>Clear User</button>
        </div>
      ) : (
        <button onClick={() => setUser({ name: 'Tran', email: 'tran@example.com' })}>
          Set User
        </button>
      )}
    </div>
  );
}
  `}</CodeBlock>

        <h4 className='sub-section-header'>Redux</h4>
        <p>Centralized state management for your entire app.</p>
        <ul>
          <li>Uses a single global store</li>
          <li>Require high boilerplate code</li>
          <li>Higher learning curve to understand</li>
          <li>Works the same way in React Native</li>
        </ul>

        <p>Code sample to manage a store with 2 states: theme and user</p>
        <p>Setting up the store</p>
        <CodeBlock language='jsx'>{`
// JSX
// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Theme slice
const themeSlice = createSlice({
  name: 'theme',
  initialState: { mode: 'light' },
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
  },
});

// User slice
const userSlice = createSlice({
  name: 'user',
  initialState: { name: '', email: '' },
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    clearUser: (state) => {
      state.name = '';
      state.email = '';
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export const { setUser, clearUser } = userSlice.actions;

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    user: userSlice.reducer,
  },
});
  `}</CodeBlock>

        <p>Using the store and getting value</p>
        <CodeBlock language='jsx'>{`
// JSX
// App.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme, setUser, clearUser } from './store';

function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);
  const user = useSelector((state) => state.user);

  return (
    <div>
      <h1>Redux Example</h1>
      <p>Current theme: {theme}</p>
      <button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>

      <h2>User Profile</h2>
      {user.name ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <button onClick={() => dispatch(clearUser())}>Clear User</button>
        </div>
      ) : (
        <button onClick={() => dispatch(setUser({ name: 'Tran', email: 'tran@example.com' }))}>
          Set User
        </button>
      )}
    </div>
  );
}
  `}</CodeBlock>
        <hr />
      </section>


      {/*<!-- TODO: Look at React Query uses -->*/}
      {/*<!-- SERVER STATE MANAGEMENT -->*/}
      <section>
        <h3 className='section-header' id='serverStateManagement'>Data Fetch & Server-State Management</h3>

        <h4 className='sub-section-header'>React Query (TanStack Query)</h4>
        <p>
          React Query is a powerful library for data fetching and managing server-side state. It helps you:
        </p>
        <ul>
          <li>Fetch, cache, and update server data efficiently</li>
          <li>Auto-refetch when data changes or the user focuses the window</li>
          <li>Simplifies managing loading, success, and error states</li>
          <li>Works seamlessly with REST APIs and GraphQL</li>
        </ul>

        <p><strong>Installation</strong></p>
        <CodeBlock>{`
# Install React Query
npm install @tanstack/react-query
  `}</CodeBlock>

        <p><strong>Setup the <code>QueryClientProvider</code></strong></p>
        <CodeBlock language='jsx'>{`
// JSX
// main.jsx or index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
  `}</CodeBlock>

        <p><strong>Fetching data with <code>useQuery</code></strong></p>
        <CodeBlock language='jsx'>{`
// JSX
// App.jsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';

async function fetchUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

export default function App() {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    staleTime: 5000, // Data stays fresh for 5 seconds
  });

  if (isLoading) return <p>Loading users...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>React Query Example</h1>
      <button onClick={refetch}>Refetch Users</button>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.name} — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
  `}</CodeBlock>

        <p><strong>Posting data with <code>useMutation</code></strong></p>
        <CodeBlock language='jsx'>{`
// JSX
// CreateUser.jsx
import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

async function createUser(newUser) {
  const response = await fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newUser),
  });
  if (!response.ok) {
    throw new Error('Failed to create user');
  }
  return response.json();
}

export default function CreateUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const queryClient = useQueryClient();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: createUser,
    onSuccess: (data) => {
      // Invalidate the users cache to refetch updated data
      queryClient.invalidateQueries({ queryKey: ['users'] });
      alert(\`User \${data.name} created successfully!\`);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({ name, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create User</h2>
      <input
        type='text'
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type='email'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type='submit' disabled={isPending}>
        {isPending ? 'Creating...' : 'Create User'}
      </button>
      {isError && <p style={{ color: 'red' }}>Error: {error.message}</p>}
    </form>
  );
}
  `}</CodeBlock>

        <p><strong>Automatic refetching</strong></p>
        <ul>
          <li>React Query automatically refetches data when:</li>
          <ul>
            <li>The window regains focus</li>
            <li>The network reconnects</li>
            <li>The query becomes stale</li>
          </ul>
        </ul>

        <p><strong>Summary</strong></p>
        <ul>
          <li><code>useQuery</code> → Fetch and cache data</li>
          <li><code>useMutation</code> → Create, update, or delete data</li>
          <li><code>invalidateQueries</code> → Refresh cache manually</li>
          <li><code>staleTime</code> and <code>cacheTime</code> → Control caching</li>
        </ul>
        <hr />
      </section>


    </>
  );
}