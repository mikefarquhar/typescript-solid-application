import { createSignal } from "solid-js";
import styles from "./App.module.css";

export function App() {
  const [count, setCount] = createSignal(0);
  return (
    <>
      <h1 class={styles.heading}>Hello, World!</h1>
      <button type="button" onClick={() => setCount(count() + 1)}>
        Clicked {count()} {count() === 1 ? "time" : "times"}
      </button>
    </>
  );
}
