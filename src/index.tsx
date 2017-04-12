import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import SearchBox from "./components/SearchBox";

ReactDOM.render(
    <SearchBox value="Testtest" />,
    document.getElementById("example")
);