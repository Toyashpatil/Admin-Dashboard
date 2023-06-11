import React from "react";
import ReactDom from "react-dom";
import "./index.css"
import { ContextProvider } from "./contexts/ContextProvider";
import App from "./App";

ReactDom.render(
<ContextProvider>
    <App />
</ContextProvider>
,document.getElementById("root"));