

// alert(React);
console.log(React);

let parent = window.document.querySelector("#parent");

let h1 = React.createElement("h1", null, "hello form React.js");
console.log(h1);
console.log(ReactDOM);
console.dir(parent);

let root = ReactDOM.createRoot(parent);

root.render(h1);
let parent2 = window.document.querySelector("#parent2");
let h2 = React.createElement("h2", null, "hello form React js in h2");
let root2 = ReactDOM.createRoot(parent2);
root2.render(h2)
