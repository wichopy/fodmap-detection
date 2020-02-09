import * as React from "react";
import { render } from "react-dom";
import fodmapper from "./fodmapper";
import App from "./App";

const result = fodmapper.search("banana");
const result2 = fodmapper.search("corn");
const result3 = fodmapper.search("lychee");

console.log(result);
console.log(result2);
console.log(result3);

const rootElement = document.getElementById("root");
render(<App />, rootElement);
