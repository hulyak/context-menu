import "./styles.css";
import { useRef } from "react";
import Menu from "./Menu";

function App() {
  const clickRef = useRef({ left: 0, top: 0 });

  return (
    <div ref={clickRef} className="app">
      <Menu clickRef={clickRef} />
    </div>
  );
}
export default App;
