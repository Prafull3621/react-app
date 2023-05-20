const heading= React.createElement("h1",{id:"heading"},"Namaste react");
const test= React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h2",{},"I amskf"),React.createElement("h3",{},"I amskf h3 tag")]))
    const root= ReactDOM.createRoot(document.getElementById("root"));
    root.render(test);