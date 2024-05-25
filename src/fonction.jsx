import Projects from "./components/projects";
import Documents from "./components/documents";

export const switchCase = (input, output,prompt,setPrompt) => {
  
  let newOutput ;
  let validCommand = ["ls", "pwd", "projets", "clear","cd in"];
  console.log(input)

  if (validCommand.includes(input.trim().toLowerCase())) {
    newOutput = <Show output={output} command={input.trim().toLowerCase()} input={input} prompt={prompt}  />;
    // newOutput += projects.titre + "\n" + projects.description +"\n"+ projects.lien + " " +projects.lienTitre
  } else {
    newOutput = <Show output={output} command={"wrong"} input={input} prompt={prompt} />;
  }

  return newOutput;
};

function Show({output, command,input,prompt}) {
  console.log(prompt)
  let Command = command;
  return (
    <>
      {Command != "clear" && (
        <>
          <div>{output}</div>
          <div className="terminal-input-area">
          <span className="terminal-prompt">{prompt}</span>
           <p className="terminal-input">{input}</p>

    </div>
  
        </>
      )}

      {Command == "ls" && <Documents />}
      {Command == "pwd" && <p>scordi/path/</p>}
      {Command == "wrong" && <p>wrond command</p>}
      {Command == "projets" && <Projects />}
    </>
    
  );
}
