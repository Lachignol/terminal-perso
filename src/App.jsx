import { useRef, useState, useEffect } from "react";
import "./App.css";
import { switchCase } from "./fonction.jsx";

function App() {
  const [prompt, setPrompt] = useState(">");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("tape ls pour voir les fichiers dispo");
  const [promptLength,setPromptLength] = useState(prompt.length);
  const inputRef = useRef("");
  const appRef = useRef("");


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

      <input
         
          type="texte"
          ref={inputRef}
          value={prompt+input}
         
          onChange={(e) => {e.target.value > e.target.value[promptLength]?
           "":setInput(e.target.value.slice(promptLength))
            ;
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setOutput(switchCase(input, output,setPrompt));
              setInput("");
              

            }
          }}
      />
     
     
     
      
      
      
    </div>
  );
}

export default App;
