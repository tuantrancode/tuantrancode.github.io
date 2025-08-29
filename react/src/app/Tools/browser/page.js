import React from 'react';

export const metadata = {
  title: "Browser DevTools",
  description: "Notes on using the DevTools from the browser",
};

export default function BrowserTools() {

  return (
    <>
       {/* <!-- SHORTCUT --> */}
        <h3 className="section-header" id="shortcut">Shortcut (Primarily Firefox)</h3>
        <ul>
            <li>Use F12 to open the <strong>DevTools</strong> of a browser.</li>
            <li>Responsiveness Design Mode: Ctrl + Shift + M (switch between mobile and desktop mode)</li>
            <li>Right clicking an object on the page and clicking "Inspect" will open the DOM Inspector focusing on that HTML element</li>
             <li>(Chrome-only) Command Menu/Palette: Ctrl + Shift + P</li>
        </ul>
        <hr />

         {/* <!-- NETWORK TAB --> */}
         <h3 className="section-header" id="network">Network</h3>
         <h4 className="sub-section-header">Emulating network conditions</h4>
        <ul>
            <li><strong>Caching</strong> - disabling cache forces browser to download tall webpage resources every time</li>
            <li><strong>Network throttling</strong> - Simulate slower networks like 2G or 3G or simulate being offline</li>
            <li><strong>User agent</strong> - Change the user agent string to any number of browser user agents </li>
        </ul>
        <hr />

        {/* <!-- DOM INSPECTION --> */}
         <h3 className="section-header" id="domInspection">DOM Inspection</h3>
        <ul>
            <li><strong>Inspector</strong> (Firefox) - allow us to see the DOM tree of a webpage</li>
            <li>Useful to see what CSS properties the element is inheriting or overriding</li>
            <li>Also allow us to edit the CSS of the elements</li>
            <li>Able to change state of elements (active, hover, focus, visited)</li>
        </ul>
        <hr />


         <h3 className="section-header" id="sources">Sources Tab (Chrome-only)</h3>
         <ul>
            <li>Under the "Filesystem" sub-tab, we can click on the option to add our root folder to the DevTools workspace and link the files</li>
        </ul>
        <hr />

        
         <h3 className="section-header" id="coverage">Coverage (Chrome-only)</h3>
         <ul>
            <li>The Coverage tab can be found under the Kebab menu &gt; "More Tools"</li>
            <li>After hitting the record button, Coverage will show how many unused CSS and JS bytes in the page</li>
        </ul>
        <hr />


         <h3 className="section-header" id="sensors">Sensors (Chrome-only)</h3>
         <ul>
            <li>The Sensors tab can be found under the Kebab menu &gt; "More Tools"</li>
            <li>It allow for simulation of GPS location and accelerometer data</li>
        </ul>

    </>
  );
}