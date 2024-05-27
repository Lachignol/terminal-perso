import { useRef, useState, useEffect } from "react";
import "./App.css";

import { Autocomplete } from "./helper/autocomplete.jsx";
import { switchCasePath, switchCaseSetPath } from "./helper/pathFunctions.jsx";
import { switchCaseCat } from "./helper/filesFunctions.jsx";
import { switchCaseCommand } from "./helper/commandFunctions.jsx";
import Introduction from "./helper/introduction.jsx";


function App() {
  const inputRef = useRef("");
  const appRef = useRef("");
  const [prompt, setPrompt] = useState("scordi/portfolio>");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState(<Introduction/>);



  useEffect(() => {
    inputRef.current.focus();
    scrollToBottom(appRef);
  }, [output]);



  const scrollToBottom = (ref) => {
    ref.current?.scrollIntoView({ block: "end", behavior: "smooth" });
  };

  return (
    <div className="App" ref={appRef} onClick={() => inputRef.current.focus()}>

      <div className="terminal">{output} </div>

      <div className="terminal-input-area">
        <span className="terminal-prompt">{prompt}</span>
        <input
          className="terminal-input"
          type="texte"
          ref={inputRef}
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Tab") {
              e.preventDefault();
              console.log("in tab");
              Autocomplete(input) ? setInput(Autocomplete(input)) : "";
            }
            if (e.key === "Enter") {
              if (input.trim().split(" ")[0] == "cd") {
                console.log(input.trim().split(" ")[0] == "cd");

                setOutput(switchCasePath(input, output, prompt.toString()));
                setPrompt(switchCaseSetPath(input, prompt));
                setInput("");
              } else if (input.trim().split(" ")[0] == "cat") {
                setOutput(switchCaseCat(input, output, prompt.toString()));
                setInput("");
              } else
                setOutput(switchCaseCommand(input, output, prompt.toString()));
              setInput("");
            }
          }}
        />
      </div>
    </div>
  );
}

export default App;
