import React from 'react';
import CodeBlock from '@/components/shared/CodeBlock';

export const metadata = {
  title: 'Libraries for Static Sites',
  description: 'Handy libraries.',
};


export default function HtmlLibraries() {

  // TODO: work on HTML library page: prism.js and Font awesome for HTML/React, and Material UI (MUI) for React
  return (
    <>
      {/*<!-- TABLE -->*/}
      <section>
        <h3 className="section-header" id="table">Libraries</h3>
        <p>LIBRARIES</p>
        <p>Consider using Font Awesome / Google Material UI for symbols and ui components (both are compatible with React)</p>
        <p>Font Awesome seem to have the better icons</p>
        <p>Font Awesome: <a href="https://fontawesome.com/search?q=stopw&o=r">https://fontawesome.com/search?q=stopw&o=r</a></p>
        <p>Material UI for React: <a href="https://mui.com/material-ui/material-icons/?query=settings">https://mui.com/material-ui/material-icons/?query=settings</a></p>
        <p>React Native should use <code>react-native-vector-icons</code></p>
        <hr />
      </section>


      {/*<!-- PRISMS JS -->*/}
      <section>
        <h3 className="section-header" id="prismjs">Prism.js</h3>
        <hr />
      </section>

      {/*<!-- MUI ICON LIBRARY -->*/}
      <section>
        <h3 className="section-header" id="icon">MUI Icon Library</h3>
        <p>Primarily for React</p>
        <ul>
          <li>Icon library: <a href="https://mui.com/material-ui/material-icons/">mui.com/material-ui/material-icons/</a></li>
          <li>Installation: only install the icon library to reduce the dependencies</li>
          <ul>
            <li>Main icon library: <code>npm install @mui/icons-material</code></li>
            <li>Other libraries if using MUI themes or other components: <code>@mui/material</code>, <code>@emotion/styled</code>, <code>@emotion/react</code></li>
            <li>Useful Icons: Contrast, Menu, MoreVert, Grip</li>
            <li>Overriding MUI styles with <code>!important</code> is needed for properties: <code>display:none</code> and background color when hovering</li>
          </ul>
<li>Use them like normal components</li>
<CodeBlock language='jsx'>{`
import HomeIcon from "@mui/icons-material/Home";

export default function MyComponent() {
  return (
    <div>
      <h1>Dashboard</h1>
      <HomeIcon className='homeBtn' style={{ fontSize: 40, color: "blue" }} />
    </div>
  );
}
`}</CodeBlock>
        </ul>
        <hr />
      </section>

    </>
  );
}