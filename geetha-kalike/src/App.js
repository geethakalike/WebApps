import React, { useContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { StoreContext } from "./store";
import Main from "./components/Main";
import ReciteSlokha from "./components/ReciteSlokha";
import Settings from "./components/Settings";
import Share from "./components/Share";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
// const { store, setStore } = useContext(StoreContext);
// let { theme } = store;
const [theme, setTheme] = useState(false);
useEffect(() => {
let body = document.querySelector("body");
body.className = theme ? "light" : "dark";
}, [theme]);
return (
<div>
<Router>
<div>
<Navbar />

<div
class="toggle"
onClick={() => {
setTheme(!theme);
}}
>
<svg height="200px" width="50px" viewBox="0 0 64 64">
<path data-name="layer2"
d="M36.4 20.4a16 16 0 1 0 16 16 16 16 0 0 0-16-16zm0 28a12 12 0 0 1-10.3-5.8l2.5.3A13.7 13.7 0 0 0 42 25.8a12 12 0 0 1-5.6 22.6z"
fill="#202020"></path>
<path data-name="layer1" d="M36.4 16.4a2 2 0 0 0 2-2v-8a2 2 0 1 0-4 0v8a2 2 0 0 0 2 2zm-20 20a2 2 0 0 0-2-2h-8a2 2 0 0 0 0 4h8a2 2 0 0 0 2-2zm3-14.1a2 2 0 0 0 2.8-2.8l-5.7-5.7a2 2 0 0 0-2.8 2.8zM59 13.8a2 2 0 0 0-2.8 0l-5.7 5.7a2 2 0 1 0 2.8 2.8l5.7-5.7a2 2 0 0 0 0-2.8zM19.4 50.5l-5.7 5.7a2 2 0 1 0 2.9 2.8l5.7-5.7a2 2 0 1 0-2.8-2.8z"
fill="#202020"></path>
</svg>
</div>

     
  

<Switch>
<Route path="/slokha" component={ReciteSlokha} />
<Route path="/settings" component={Settings} />
<Route path="/share" component={Share} />
<Route path="/" component={Main} />
</Switch>
</div>
</Router>
</div>
);
}
export default App;