import React from 'react';

export const metadata = {
  title: "React Development Tools",
  description: "Notes on using the React DevTools for browser debugging",
};

export default function ReactDevTools() {

  return (
    <>
      {/* <!-- REACT DEV TOOLS EXTENSION --> */}
      <h2 className="page-header">React Developer Tools</h2>
      <p>The React Developer Tools is an extension for both Chrome and Firefox</p>
      <ul>
        <li><a href="https://addons.mozilla.org/en-US/firefox/addon/react-devtools/">Firefox Extension</a></li>
      </ul>
      <p>Tutorial: <a href="https://react-devtools-tutorial.vercel.app/">react-devtools-tutorial.vercel.app/</a>
      </p>
      <hr />

      {/* <!-- COMPONENTS TAB --> */}
      <h3 className="section-header" id='componentsTab'>Components Tab</h3>
      <p>It allows dev to edit the props and state of components in the browser using the right side panel.</p>
      <p>There is also a Suspense API in the right panel ( &#x23F1; ) that shows what the app looks like while
        waiting for that specific component to load.</p>
      <hr />

      {/* <!-- PROFILER TAB --> */}
      <h3 className="section-header" id='profilerTab'>Profiler Tab</h3>
      <p>By recording action/ events, dev can view how many times a component rendered and the amount of time it took</p>


    </>
  );
}