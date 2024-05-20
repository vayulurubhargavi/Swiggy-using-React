// const reactElement_heading = React.createElement(
//     "h1",
//     { id: "heading" },
//     "Hello world !! from React");
//    const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(reactElement_heading);
   

{/* <div class="parent">
    <div class="child1">
        <h1>I am child1 h1 heading tag </h1>
    </div>
    <div class="child2">
        <h1>I am child2 h1 heading tag </h1>
    </div>
</div> */}

const parent = React.createElement("div",
    { id:"parent" },   
    [React.createElement("div", { id: "child1" },
        [React.createElement("h1", {}, "I am child1 h1 tag"), React.createElement("h2", {}, "I am child1 h2 tag")]),
     React.createElement("div", { id: "child2" },
        [React.createElement("h1", {}, "I am child2 h1 tag"), React.createElement("h2", {}, "I am child2 h2 tag")])
    ]
);
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
   