const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child1" },
        [React.createElement("h1", {}, 'Hello React'),
        React.createElement("h2",{},"Namaste React")
        ]),
    React.createElement("div", { id: "child2" },
        [React.createElement("h1", {}, "Hello Javascript"),
        React.createElement("h2", {}, "Namaste Javascript")]));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);