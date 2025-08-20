My reference site on web development. It includes topics on HTML, CSS, and Javascript.  

Site Link: https://tuantrancode.github.io/  

/static/* contains the HTML, CSS, and Javascript code for my static note site  
/react/* contains the React App (WIP)  

The static site has references for special HTML characters, CSS properties, Javascript methods, and notes on Visual Studio Code and the browser's DevTools.  

-----------------------------------------------------------
The repo has been set up so that commits only need to be done on the main branch.  

GitHub Actions will automatically detect changes in the "static" and "react" folders, then push those changes to the "static-live" branch and build the "React" app to "react-live" branch. Those branches are what GitHub Pages will use to host the site.  

