import React from 'react';
import ReactDOM from "react-dom/client";

function chemi_punkcia() {
    console.log("Button clicked!");
}

function ParamClick(param) {
    console.log(`Button clicked with parameter: ${param}`);
}

function App() {
    return (
        <div>
            <button onClick={chemi_punkcia}>Click me</button>
            <br />
            <br />
            <button onClick={() => ParamClick("Hello")}>Click with Param</button>
        </div>
    );
}


const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);
