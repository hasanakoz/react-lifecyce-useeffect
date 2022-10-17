import { useState } from "react";
import LifeCycleMethods from "./components/LifeCycleMethods";
import User from "./components/User";
import UseEffectHook from "./UseEffectHook";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="container text-center mt-4">
      {/* <button className="btn btn-dark" onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>
      {show && <LifeCycleMethods />}
      {show && <UseEffectHook />} */}
      <User />
    </div>
  );
}

export default App;
