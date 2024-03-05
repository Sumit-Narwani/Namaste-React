const heading1 = React.createElement(
    "h1", 
    {
    id: "title",
    }, 
    "Heading 1");

const heading2 = React.createElement(
    "h1",
    {
    id: "title",
    }, 
    "Heading 2");

const container = React.createElement(
    "div", 
    {
    id: "container",
    }, 
    [heading1, heading2]);

// console.log(heading) 

const root = ReactDOM.createRoot(document.getElementById("root")); 

// console.log(heading);
// Passing a react element inside the root
root.render(container);