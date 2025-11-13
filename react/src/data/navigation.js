const navSections = [
  {
    section: 'HTML',
    pages: [
      { name: 'HTML Basics', link: '/' },
      { name: 'Forms', link: '/HTML/forms' },
      { name: 'Table', link: '/HTML/table' },
      { name: 'Libraries', link: '/HTML/libraries' },
      { name: 'Special Characters', link: '/HTML/special-characters' },
    ],
  },
  {
    section: 'CSS',
    pages: [
      { name: 'CSS Basics', link: '/CSS/css-basics' },
      { name: 'CSS Properties', link: '/CSS/css-properties' },
      { name: 'Alignment', link: '/CSS/alignment' },
      { name: 'Flex Box', link: '/CSS/flex-box' },
      { name: 'Flex Items', link: '/CSS/flex-items' },
    ],
  },
  {
    section: 'Javascript',
    pages: [
      { name: 'JS Basics', link: '/Javascript/js-basics' },
      { name: 'Functions', link: '/Javascript/js-functions' },
      { name: 'Methods Reference', link: '/Javascript/js-methods-reference' },
      { name: 'Working with DOM', link: '/Javascript/js-dom' },
      { name: 'Typescript', link: '/Javascript/js-typescript' },
    ],
  },
  {
    section: 'React',
    pages: [
      { name: 'React Basics', link: '/React/react-basics' },
      { name: 'Hooks', link: '/React/react-hooks' },
      { name: 'When To Use What', link: '/React/when-to-use-what' },
      { name: 'React Styling', link: '/React/react-styling' },
      { name: 'Form in React', link: '/React/react-form' },
      { name: 'React Setup Comparison', link: '/React/react-setup' },
      { name: 'Next.js', link: '/React/nextjs' },
      { name: 'Libraries', link: '/React/react-libraries' },
      { name: 'Programming Pattern', link: '/React/react-pattern' },
      { name: 'Mobile Ready React', link: '/React/react-mobile-ready' },
      { name: 'Templates', link: '/React/react-templates' },
    ],
  },
  {
    section: 'Java',
    pages: [
      { name: 'Java Basics', link: '/Java/java-basics' },
      { name: 'Java Core Packages', link: '/Java/java-core' },
      { name: 'Java Collections', link: '/Java/java-collections' },
      { name: 'Java Multithreading', link: '/Java/java-multithread' },
      { name: 'OOP', link: '/Java/java-oop' },
      { name: 'REST API', link: '/Java/java-rest-api' },
      { name: 'Spring Boot', link: '/Java/java-spring' },
    ],
  },
  {
    section: 'C++',
    pages: [
      { name: 'C++ Syntax', link: '/Cpp/cpp-syntax' },
      { name: 'C++ Methods', link: '/Cpp/cpp-methods' },
    ],
  },
  {
    section: 'Responsive',
    pages: [
      { name: 'CSS Responsive Styles', link: '/Responsive/responsive' },
      { name: 'Masonry Gallery', link: '/Responsive/masonry-gallery' },
    ],
  },
  {
    section: 'Tools',
    pages: [
      { name: 'Browser DevTools', link: '/Tools/browser' },
      { name: 'React DevTools', link: '/Tools/react-dev-tools' },
      { name: 'Cmd / Terminal', link: '/Tools/cmd' },
      { name: 'Git', link: '/Tools/git' },
      { name: 'Node.js', link: '/Tools/node' },
      { name: 'Maven and Gradle', link: '/Tools/maven-gradle' },
      { name: 'Visual Studio Code', link: '/Tools/visual-studio-code' },
      { name: 'Android Studio', link: '/Tools/android-studio' },
      { name: 'Eclipse for Java', link: '/Tools/eclipse' },
    ],
  },
  {
    section: 'AI',
    pages: [{ name: 'AI Basics', link: '/AI/ai-basics' }],
  },
    {
    section: 'Assembly',
    pages: [{ name: 'LEGv8 Instructions', link: '/Assembly/legv8' }],
  },
];

// TODO: Incorporate react-native-web components to test thing out
// TODO: Add an inheritence vs interface section
export default navSections;
