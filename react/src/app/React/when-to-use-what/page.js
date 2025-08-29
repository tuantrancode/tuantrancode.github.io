import React from 'react';

export const metadata = {
    title: "When to use what language",
    description: "Notes to tell the difference between HTML, Javascript, JSX and when to use what.",
};

export default function WhenToUseWhat() {

    return (
        <>
            {/* WHEN TO USE WHAT LANGUAGE */}
            <h3 className='section-header' id='whentousewhat'>When To Use What Language</h3>
            <p>Comparison of when to use HTML, Javascript, JSX along with template literals and object literals</p>
            <ul>
                <li><strong>HTML</strong> : in .html files or inside JSX <code>{`<div>...</div>`}</code> blocks</li>
                <li><strong>Javascript</strong> : in .js, .jsx, .ts, .tsx, or within HTML <code>{`<script>`}</code> tags</li>
                <ul>
                    <li><strong>Template Literals</strong> : use backticks <code>`...`</code> to give a dynamic string within Javascript; also allow multi-line string</li>
                    <ul>
                        <li>Preserve white space; useful for showing sample codes <code>{`<code>{\`...\`}</code>`}</code></li>
                    </ul>
                    <li><strong>Object Literals</strong> : key-value data confined in curly brackets <code>{`{}`} within Javascript</code></li>
                    <ul>
                        <li>Note: arrow functions can return an object by wrapping parenthesis around the return <code>{`() => ( {key:value} )`}</code></li>
                    </ul>
                </ul>
                <li><strong>JSX</strong> : in React components and looks like HTML</li>
                <ul>
                    <li>Javascript expressions can be put inside JSX blocks by using curly brackets <code>{`{}`}</code></li>
                </ul>
            </ul>
        </>
    );
}