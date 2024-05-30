import { useRef, useState, useEffect } from "react";
import "./App.css";

import { Autocomplete } from "./helper/autocomplete.jsx";
import { switchCasePath, switchCaseSetPath } from "./helper/pathFunctions.jsx";
import { switchCaseCat } from "./helper/filesFunctions.jsx";
import { switchCaseCommand } from "./helper/commandFunctions.jsx";
import Introduction from "./components/introduction.jsx";

function App() {
  const inputRef = useRef("");
  const appRef = useRef("");
  const [prompt, setPrompt] = useState("scordi/portfolio>");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState(<Introduction />);
  const [histoInput, setHistoInput] = useState([]);
  const [histoInputIdx, setHistoInputIdx] = useState();
  const [tempInput, setTempInput] = useState();

  useEffect(() => {
    inputRef.current.focus();
    scrollToBottom(appRef);
  }, [output]);

  const scrollToBottom = (ref) => {
    ref.current?.scrollIntoView({ block: "end", behavior: "smooth" });
  };

  const handleHistoInput = (currentInput) => {
    if (currentInput != "") {
      setHistoInput((prev) =>
        prev ? [...prev, currentInput] : [currentInput]
      );
      setHistoInputIdx(histoInput.length);
    } else {
      return;
    }
  };

  return (
    <div className="App" ref={appRef} onClick={() => inputRef.current.focus()}>
      <div className="terminal">{output}</div>

      <div className="terminal-input-area">
        <span className="terminal-prompt">{prompt}</span>
        <input
          className="terminal-input"
          type="texte"
          ref={inputRef}
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setTempInput(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Tab") {
              e.preventDefault();

              Autocomplete(input) ? setInput(Autocomplete(input)) : "";
            }
            if (e.key === "Enter") {
              handleHistoInput(input);
              if (input.toLocaleLowerCase().trim().split(" ")[0] == "cd") {
                setOutput(switchCasePath(input, output, prompt.toString()));
                setPrompt(switchCaseSetPath(input, prompt));
                setInput("");
              } else if (
                input.toLocaleLowerCase().trim().split(" ")[0] == "cat"
              ) {
                setOutput(switchCaseCat(input, output, prompt.toString()));
                setInput("");
              } else if (
                input.toLocaleLowerCase().trim().split(" ")[0] == "clear"
              ) {
                setOutput(<Introduction />);
              } else
                setOutput(switchCaseCommand(input, output, prompt.toString()));
              setInput("");
            }
            if (e.key === "ArrowUp") {
              if (histoInputIdx == null) {
                return;
              } else {
                setInput(histoInput[histoInputIdx]);
                let newHistoInputIdx =
                  histoInputIdx - 1 < 0 ? histoInputIdx : histoInputIdx - 1;
                setHistoInputIdx(newHistoInputIdx);
              }
            }
            if (e.key === "ArrowDown") {
              if (histoInputIdx == null) {
                return;
              } else {
                if (histoInputIdx + 1 > histoInput.length - 1) {
                  setInput(tempInput);
                } else {
                  let newHistoInputIdx = histoInputIdx + 1;
                  setInput(histoInput[newHistoInputIdx]);
                  setHistoInputIdx(newHistoInputIdx);
                }
              }
            }
          }}
        />
      </div>
    </div>
  );
}

export default App;
