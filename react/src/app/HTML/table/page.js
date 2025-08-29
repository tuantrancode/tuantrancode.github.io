import React from 'react';
import CodeBlock from '@/components/shared/CodeBlock';
import styles from "./table.module.css";

export const metadata = {
  title: 'Table in HTML',
  description: 'Making table in HTML.',
};


export default function Table() {

  return (
    <>

      {/*<!-- TABLE -->*/}
      <section>
        <h3 className="section-header" id="table">Table</h3>

        <ul>
          <li><strong>&lt;tr&gt;</strong>: row</li>
          <li><strong>&lt;th&gt;</strong>: header cell</li>
          <li><strong>&lt;td&gt;</strong>: data cell</li>
          <li><strong>&lt;thead&gt;</strong> and <strong>&lt;tbody&gt;</strong>: useful for separating styles of head and body of table (optional)</li>
          <li>Useful attributes: <code>rowspan</code> and <code>colspan</code></li>
          <ul>
            <li><code>rowspan: x</code>: the cell will span &apos;x&apos; rows starting from the cell this attribute was placed on</li>
            <li><code>colspan: x</code>: the cell will span &apos;x&apos; columns starting from the cell this attribute was placed on</li>
          </ul>
          <li>More examples: <a href='https://www.w3schools.com/css/css_table.asp' target='_blank'>www.w3schools.com/css/css_table.asp</a></li>
        </ul>

        <p></p>

        <div>
          <CodeBlock language='html'>{`
<table>
    <thead>
        <tr>
            <mark><th></th></mark>Column 1
            <th>Column 2</th>
            <th>Column 3</th>
            <th>Column 4</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <mark><td></td></mark> 1
            <td> 2 </td>
            <td> 3 </td>
            <td> 4 </td>
        </tr>
        <tr>
            <mark><td rowspan="2" style="background-color:#80ced6"></td></mark> 5
            <mark><td colspan="2" style="background-color:#80ced6"></td></mark> 6
            <td> 7 </td>
        </tr>
        <tr>
            <td> 8 </td>
            <td> 9 </td>
            <td> 10 </td>
        </tr>
    </tbody>
</table>
    `}</CodeBlock>

          <div className={styles.htmlTable}>
            <table>
              <thead>
                <tr>
                  <th>Column 1</th>
                  <th>Column 2</th>
                  <th>Column 3</th>
                  <th>Column 4</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> 1 </td>
                  <td> 2 </td>
                  <td> 3 </td>
                  <td> 4 </td>
                </tr>
                <tr>
                  <td rowSpan='2' style={{ backgroundColor: '#80ced6' }}> 5 </td>
                  <td colSpan='2' style={{ backgroundColor: '#80ced6' }}> 6 </td>
                  <td> 7 </td>
                </tr>
                <tr>
                  <td> 8 </td>
                  <td> 9 </td>
                  <td> 10 </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <hr />
      </section>

    </>
  );
}