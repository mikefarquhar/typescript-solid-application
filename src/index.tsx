/* @refresh reload */
import { render } from "solid-js/web";
import { App } from "./App";
import "./styles.css";

const el = document.getElementById("app") as HTMLDivElement;
render(() => <App />, el);
