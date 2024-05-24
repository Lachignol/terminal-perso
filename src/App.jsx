import { useRef, useState, useEffect } from "react";
import "./App.css";
import { switchCase } from "./fonction.jsx";

function App() {
  const [prompt,setPrompt]=useState("$")
  const [input, setInput] = useState(prompt);
  const [output, setOutput] = useState(">bienvenu sur ton oncle.com");
  const [promptLength,setPromptLength]= useState(prompt.length-1);
  const inputRef = useRef("");
  const appRef = useRef("");


  useEffect(() => {
    inputRef.current.focus();
    scrollToBottom(appRef);
  },[output]);

  const scrollToBottom = (ref) => {
    ref.current?.scrollIntoView({ block: "end", behavior: "smooth" });
    
  };

console.log(promptLength)

  return (
    <div className="App" ref={appRef} onClick={() => inputRef.current.focus()}>
      <div className="terminal">{output}


      
      <input 
        className="lastInput"
        type="texte"
        ref={inputRef}
        value={input}
        onChange={(e)=> {e.target.value >= e.target.value[promptLength]?
          setInput(e.target.value):"";
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setOutput(switchCase(input,output));
            setInput(prompt);
          }
        }}
        
      />
      
     
    </div>
    </div>

  );
}

export default App;
