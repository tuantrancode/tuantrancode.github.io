import React  from "react";
import Prism from '@/lib/prism/prism.js';


const prismDictionary = {
    // html/ xml
    html: {
        "<mark>": `<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mark</span><span class="token punctuation">></span></span>`,
        "</mark>": `<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mark</span><span class="token punctuation">></span></span>`,
    },
    jsx: {
        "<mark>": `<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mark</span><span class="token punctuation">></span></span>`,
        "</mark>": `<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mark</span><span class="token punctuation">></span></span>`,
    },
    javascript: {
        "<mark>": `<span class="token operator">&lt;</span>mark<span class="token operator">></span>`,
        "</mark>": `<span class="token operator">&lt;</span><span class="token operator">/</span>mark<span class="token operator">></span`,
    },
    css: {
        "<mark>": `&lt;mark>`,
        "</mark>": `&lt;/mark>`,
    },
}

// server side running the highlighting
export default function CodeBlock({ children, language = 'jsx' }) {
    const codeString = typeof children === "string" ? children.trim() : React.Children.toArray(children).join("").trim();
    let highlighted;
    try {
        highlighted = Prism.highlight(codeString, Prism.languages[language], language);
    } catch(e) {
        highlighted = Prism.highlight(codeString, Prism.languages['jsx'], 'jsx');
    }
    
    // console.log('Highlighting codes!');

    // keeping mark down from before
    if (prismDictionary[language]) {
        highlighted = highlighted
            .replaceAll(prismDictionary[language]["<mark>"], "<mark>")
            .replaceAll(prismDictionary[language]["</mark>"], "</mark>")
    }

    return (
        <pre className={`language-${language}`}>
            <code
                className={`language-${language}`}
                dangerouslySetInnerHTML={{ __html: highlighted }}
            />
        </pre>
    );
}

// Having client side run the highlighting
// export default function CodeBlock({ children, language = 'jsx' }) {
//     const { theme } = useTheme();
//     const [highlighted, setHighlighted] = useState('');

//     // Convert children to a plain string only once per render
//     const codeString = useMemo(() => {
//         if (typeof children === "string") return children.trim();
//         return React.Children.toArray(children).join("").trim();
//     }, [children]);

//     // console.log('pre-highlight: ',codeString.length);

//     useEffect(() => {
//         // Highlight code
//         if (codeString) {
//             let result = Prism.highlight(codeString, Prism.languages[language], language);
//             // keeping mark down from before
//             if (prismDictionary[language]) {
//                 result = result
//                     .replaceAll(prismDictionary[language]["<mark>"], "<mark>")
//                     .replaceAll(prismDictionary[language]["</mark>"], "</mark>")
//             }
//             setHighlighted(result);
//             // console.log('post-highlight: ',result);
//         }
//     }, [theme, codeString, language]);

//     return (
//         <pre className={`language-${language}`} >
//             <code
//                 className={`language-${language}`}
//                 dangerouslySetInnerHTML={{ __html: highlighted || codeString }}
//             />
//         </pre>
//     );
// }