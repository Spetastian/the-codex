import * as React from "react";
import * as ReactDOM from "react-dom";
import CodexView from "./views/CodexView";
import GamesView from "./views/GamesView";
import AppContainer from "./components/layout/AppContainer";

const App = () => (
  <AppContainer>
    <GamesView />
  </AppContainer>
);

ReactDOM.render(<App />, document.getElementById("app"));
