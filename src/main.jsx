import { render } from "preact";
import { App } from "./app.jsx";
import { BrowserRouter } from "react-router-dom";
import * as bootstrap from 'bootstrap'

render( <BrowserRouter><App /></BrowserRouter> , document.getElementById("app"));
