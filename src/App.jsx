import { useRef, useState, useEffect } from "react";
import "./App.css";
import { switchCase } from "./fonction.jsx";

function App() {
  const [input, setInput] = useState("$");
  const [output, setOutput] = useState("bienvenu sur ton oncle.com");
  const inputRef = useRef("");
  const appRef = useRef("");

  useEffect(() => {
    inputRef.current.focus();
    scrollToBottom(appRef);
  },[output]);

  const scrollToBottom = (ref) => {
    ref.current?.scrollIntoView({ block: "end", behavior: "smooth" });
    
  };



  return (
    <div className="App" ref={appRef} onClick={() => inputRef.current.focus()}>
      <div className="terminal">{output}</div>

      <input
        type="texte"
        ref={inputRef}
        value={input}
        onChange={(e)=> {
          setInput(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setOutput(switchCase(input,output));
            setInput("$");
          }
        }}
      ></input>
    </div>
  );
}

export default App;
