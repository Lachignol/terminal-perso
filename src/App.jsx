import { useRef, useState, useEffect } from "react";
import "./App.css";
import { switchCase } from "./fonction.jsx";

function App() {
  const [prompt,setPrompt] = useState("scordi>");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("tape ls pour voir les fichiers dispo");
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



      <div className="terminal-input-area">
      <span className="terminal-prompt">{prompt}</span>
      <input
          className="terminal-input"
          type="texte"
          ref={inputRef}
          value={input}
         
          onChange={(e) => {
           setInput(e.target.value)
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (input == "cd in"){
              setPrompt(`${prompt.slice(0,prompt.length-1)}/in>`)
              setOutput(switchCase(input,output,prompt.toString()));
              setInput("")
              }
              else
              setOutput(switchCase(input,output,prompt.toString()));
              setInput("");
              

            }
          }}
      />
     </div>
     
     
     
      
      
      
    </div>
  );
}

export default App;
