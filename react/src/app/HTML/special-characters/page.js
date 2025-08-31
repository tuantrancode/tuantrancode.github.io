import React from 'react';
import styles from './special-characters.module.css';
import SearchContainer from '@/components/shared/SearchContainer';


export const metadata = {
  title: 'Special Characters HTML Entity/Code',
  description: 'Tables on variety of special characters and their HTML entity/code',
};

export default function SpecialCharacters() {

  return (
    <div className={styles.specialCharacters}>
      <h2 className='page-header' id='specialCharacters'>Special Characters for HTML</h2>
      <SearchContainer searchSelector='tbody tr, thead:not(.firstHead) tr' isRowCopyable={true} placeholder="Search characters, names, or codes...">
        <p><em> &gt;&gt; Click on a row to copy the code</em></p>

        <h3 className="section-header" id="common">Common Characters for Web Development</h3>
        <table>
          <thead className='firstHead'>
            <tr>
              <th>Character</th>
              <th>Name</th>
              <th>HTML Entity</th>
              <th>HTML Code</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>&#9776;</td>
              <td>Hamburger Menu</td>
              <td>&amp;#9776;</td>
              <td><code>&amp;#9776;</code></td>
            </tr>
            <tr>
              <td>&#8942;</td>
              <td>Vertical Ellipsis (Kebab/ Menu)</td>
              <td>&amp;#8942;</td>
              <td><code>&amp;#8942;</code></td>
            </tr>
            <tr>
              <td>&#9662;</td>
              <td>Small Down Caret</td>
              <td>&amp;#9662;</td>
              <td><code>&amp;#9662;</code></td>
            </tr>
            <tr>
              <td>&#9652;</td>
              <td>Small Up Caret</td>
              <td>&amp;#9652;</td>
              <td><code>&amp;#9652;</code></td>
            </tr>
            <tr>
              <td>&#9656;</td>
              <td>Small Right Caret</td>
              <td>&amp;#9656;</td>
              <td><code>&amp;#9656;</code></td>
            </tr>
            <tr>
              <td>&#9666;</td>
              <td>Small Left Caret</td>
              <td>&amp;#9666;</td>
              <td><code>&amp;#9656;</code></td>
            </tr>
            <tr>
              <td>&#9681;</td>
              <td>Circle Left Half Black (Theme/ Dark Mode)</td>
              <td>&amp;#9681;</td>
              <td><code>&amp;#9681;</code></td>
            </tr>
            <tr>
              <td>&#9680;</td>
              <td>Circle Right Half Black (Theme/ Dark Mode)</td>
              <td>&amp;#9680;</td>
              <td><code>&amp;#9680;</code></td>
            </tr>
            <tr>
              <td>&lt;</td>
              <td>Less-than</td>
              <td>&amp;lt;</td>
              <td><code>&amp;lt;</code></td>
            </tr>
            <tr>
              <td>&gt;</td>
              <td>Greater-than</td>
              <td>&amp;gt;</td>
              <td><code>&amp;gt;</code></td>
            </tr>
            <tr>
              <td>&quot;</td>
              <td>Double Quote</td>
              <td>&amp;quot;</td>
              <td><code>&amp;quot;</code></td>
            </tr>
            <tr>
              <td>&apos;</td>
              <td>Single Quote (Apostrophe)</td>
              <td>&amp;apos;</td>
              <td><code>&amp;apos;</code></td>
            </tr>
            <tr>
              <td>&amp;</td>
              <td>Ampersand</td>
              <td>&amp;amp;</td>
              <td><code>&amp;amp;</code></td>
            </tr>
            <tr>
              <td>&#123;</td>
              <td>Left Curly Brace</td>
              <td>&amp;#123;</td>
              <td><code>&amp;#123;</code></td>
            </tr>
            <tr>
              <td>&#125;</td>
              <td>Right Curly Brace</td>
              <td>&amp;#125;</td>
              <td><code>&amp;#125;</code></td>
            </tr>
          </tbody>
        </table>
        <hr />

        <h3 className="section-header" id="currency">Currency</h3>
        <table>
          <thead>
            <tr>
              <th>Character</th>
              <th>Name</th>
              <th>Entity</th>
              <th>Code</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>&cent;</td>
              <td>Cent</td>
              <td>&amp;cent;</td>
              <td><code>&amp;cent;</code></td>
            </tr>
            <tr>
              <td>&pound;</td>
              <td>Pound</td>
              <td>&amp;pound;</td>
              <td><code>&amp;pound;</code></td>
            </tr>
            <tr>
              <td>&yen;</td>
              <td>Yen</td>
              <td>&amp;yen;</td>
              <td><code>&amp;yen;</code></td>
            </tr>
            <tr>
              <td>&euro;</td>
              <td>Euro</td>
              <td>&amp;euro;</td>
              <td><code>&amp;euro;</code></td>
            </tr>
          </tbody>
        </table>
        <hr />

        <h3 className="section-header" id="symbols">Punctuation & Symbols</h3>
        <p>Consider using Font Awesome / Google Material Icons: <a href="/HTML/libraries.html">link</a></p>
        <table>
          <thead>
            <tr>
              <th>Character</th>
              <th>Name</th>
              <th>Entity</th>
              <th>Code</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>&#123;</td>
              <td>Left Curly Brace</td>
              <td>&amp;#123;</td>
              <td><code>&amp;#123;</code></td>
            </tr>
            <tr>
              <td>&#125;</td>
              <td>Right Curly Brace</td>
              <td>&amp;#125;</td>
              <td><code>&amp;#125;</code></td>
            </tr>
            <tr>
              <td>&amp;</td>
              <td>Ampersand</td>
              <td>&amp;amp;</td>
              <td><code>&amp;amp;</code></td>
            </tr>
            <tr>
              <td>&lt;</td>
              <td>Less-than</td>
              <td>&amp;lt;</td>
              <td><code>&amp;lt;</code></td>
            </tr>
            <tr>
              <td>&gt;</td>
              <td>Greater-than</td>
              <td>&amp;gt;</td>
              <td><code>&amp;gt;</code></td>
            </tr>
            <tr>
              <td>&and;</td>
              <td>Logical AND</td>
              <td>&amp;and;</td>
              <td><code>&amp;and;</code></td>
            </tr>
            <tr>
              <td>&or;</td>
              <td>Logical OR</td>
              <td>&amp;or;</td>
              <td><code>&amp;or;</code></td>
            </tr>
            <tr>
              <td>&#8249;</td>
              <td>Left-pointing Caret</td>
              <td>&amp;#8249</td>
              <td><code>&amp;#8249</code></td>
            </tr>
            <tr>
              <td>&#8250; </td>
              <td>Right-pointing Caret</td>
              <td>&amp;#8250</td>
              <td><code>&amp;#8250</code></td>
            </tr>
            <tr>
              <td>&quot;</td>
              <td>Double Quote</td>
              <td>&amp;quot;</td>
              <td><code>&amp;quot;</code></td>
            </tr>
            <tr>
              <td>&apos;</td>
              <td>Single Quote</td>
              <td>&amp;apos;</td>
              <td><code>&amp;apos;</code></td>
            </tr>
            <tr>
              <td>&copy;</td>
              <td>Copyright</td>
              <td>&amp;copy;</td>
              <td><code>&amp;copy;</code></td>
            </tr>
            <tr>
              <td>&reg;</td>
              <td>Registered Trademark</td>
              <td>&amp;reg;</td>
              <td><code>&amp;reg;</code></td>
            </tr>
            <tr>
              <td>&trade;</td>
              <td>Trademark</td>
              <td>&amp;trade;</td>
              <td><code>&amp;trade;</code></td>
            </tr>
            <tr>
              <td>&hellip;</td>
              <td>Horizontal Ellipsis</td>
              <td>&amp;hellip;</td>
              <td><code>&amp;hellip;</code></td>
            </tr>
            <tr>
              <td>&#8942;</td>
              <td>Vertical Ellipsis</td>
              <td>&amp;#8942;</td>
              <td><code>&amp;#8942;</code></td>
            </tr>
            <tr>
              <td>&#x23F1;</td>
              <td>Stopwatch</td>
              <td>&amp;#x23F1;</td>
              <td><code>&amp;#x23F1;</code></td>
            </tr>
            <tr>
              <td>&#x1F441;</td>
              <td>Eye</td>
              <td>&amp;#x1F441;</td>
              <td><code>&amp;#x1F441;</code></td>
            </tr>
            <tr>
              <td>&#9881;</td>
              <td>Setting</td>
              <td>&amp;#9881;</td>
              <td><code>&amp;#9881;</code></td>
            </tr>
          </tbody>
        </table>
        <hr />

        <h3 className="section-header" id="math">Math</h3>
        <table>
          <thead>
            <tr>
              <th>Character</th>
              <th>Name</th>
              <th>Entity</th>
              <th>Code</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>&plusmn;</td>
              <td>Plus-Minus</td>
              <td>&amp;plusmn;</td>
              <td><code>&amp;plusmn;</code></td>
            </tr>
            <tr>
              <td>&times;</td>
              <td>Multiplication</td>
              <td>&amp;times;</td>
              <td><code>&amp;times;</code></td>
            </tr>
            <tr>
              <td>&divide;</td>
              <td>Division</td>
              <td>&amp;divide;</td>
              <td><code>&amp;divide;</code></td>
            </tr>
            <tr>
              <td>&radic;</td>
              <td>Square Root</td>
              <td>&amp;radic;</td>
              <td><code>&amp;radic;</code></td>
            </tr>
            <tr>
              <td>&infin;</td>
              <td>Infinity</td>
              <td>&amp;infin;</td>
              <td><code>&amp;infin;</code></td>
            </tr>
            <tr>
              <td>&ne;</td>
              <td>Not Equal</td>
              <td>&amp;ne;</td>
              <td><code>&amp;ne;</code></td>
            </tr>
            <tr>
              <td>&le;</td>
              <td>Less Than or Equal</td>
              <td>&amp;le;</td>
              <td><code>&amp;le;</code></td>
            </tr>
            <tr>
              <td>&ge;</td>
              <td>Greater Than or Equal</td>
              <td>&amp;ge;</td>
              <td><code>&amp;ge;</code></td>
            </tr>
          </tbody>
        </table>
        <hr />

        <h3 className="section-header" id="arrows">Arrows</h3>
        <table>
          <thead>
            <tr>
              <th>Character</th>
              <th>Name</th>
              <th>Entity</th>
              <th>Code</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>&larr;</td>
              <td>Left Arrow</td>
              <td>&amp;larr;</td>
              <td><code>&amp;larr;</code></td>
            </tr>
            <tr>
              <td>&uarr;</td>
              <td>Up Arrow</td>
              <td>&amp;uarr;</td>
              <td><code>&amp;uarr;</code></td>
            </tr>
            <tr>
              <td>&rarr;</td>
              <td>Right Arrow</td>
              <td>&amp;rarr;</td>
              <td><code>&amp;rarr;</code></td>
            </tr>
            <tr>
              <td>&darr;</td>
              <td>Down Arrow</td>
              <td>&amp;darr;</td>
              <td><code>&amp;darr;</code></td>
            </tr>
            <tr>
              <td>&harr;</td>
              <td>Left Right Arrow</td>
              <td>&amp;harr;</td>
              <td><code>&amp;harr;</code></td>
            </tr>
            <tr>
              <td>&#8597;</td>
              <td>Up Down Arrow</td>
              <td>&amp;#8597;</td>
              <td><code>&amp;#8597;</code></td>
            </tr>
          </tbody>
        </table>
        <hr />

        <h3 className="section-header" id="shapes">Shapes</h3>
        <table>
          <thead>
            <tr>
              <th>Character</th>
              <th>Name</th>
              <th>Entity</th>
              <th>Code</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>&#9662;</td>
              <td>Small Down Caret</td>
              <td>&amp;#9662;</td>
              <td><code>&amp;#9662;</code></td>
            </tr>
            <tr>
              <td>&#9652;</td>
              <td>Small Up Caret</td>
              <td>&amp;#9652;</td>
              <td><code>&amp;#9652;</code></td>
            </tr>
            <tr>
              <td>&#9656;</td>
              <td>Small Right Caret</td>
              <td>&amp;#9656;</td>
              <td><code>&amp;#9656;</code></td>
            </tr>
            <tr>
              <td>&#9666;</td>
              <td>Small Left Caret</td>
              <td>&amp;#9666;</td>
              <td><code>&amp;#9656;</code></td>
            </tr>
            <tr>
              <td>&#9660;</td>
              <td>Down Caret</td>
              <td>&amp;#9660;</td>
              <td><code>&amp;#9660;</code></td>
            </tr>
            <tr>
              <td>&#9650;</td>
              <td>Up Caret</td>
              <td>&amp;#9650;</td>
              <td><code>&amp;#9650;</code></td>
            </tr>
            <tr>
              <td>&#9675;</td>
              <td>Circle (Empty)</td>
              <td>&amp;#9675;</td>
              <td><code>&amp;#9675;</code></td>
            </tr>
            <tr>
              <td>&#9679;</td>
              <td>Circle (Filled)</td>
              <td>&amp;#9679;</td>
              <td><code>&amp;#9679;</code></td>
            </tr>
            <tr>
              <td>&#9680;</td>
              <td>Circle (Right Half Black)</td>
              <td>&amp;#9680;</td>
              <td><code>&amp;#9680;</code></td>
            </tr>
            <tr>
              <td>&#9681;</td>
              <td>Circle (Left Half Black)</td>
              <td>&amp;#9681;</td>
              <td><code>&amp;#9681;</code></td>
            </tr>
            <tr>
              <td>&#9632;</td>
              <td>Square (Filled)</td>
              <td>&amp;#9632;</td>
              <td><code>&amp;#9632;</code></td>
            </tr>
            <tr>
              <td>&#9633;</td>
              <td>Square (Empty)</td>
              <td>&amp;#9633;</td>
              <td><code>&amp;#9633;</code></td>
            </tr>
          </tbody>
        </table>
      </SearchContainer>
    </div>

  );
}