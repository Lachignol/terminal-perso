import Projects from "./components/projects";
import Documents from "./components/documents";

export const switchCase = (input, output,setPrompt) => {
  let newOutput ;
  let validCommand = ["ls", "pwd", "projets", "clear"];

  if (validCommand.includes(input.trim().toLowerCase())) {
    newOutput = <Show output={output} command={input.trim().toLowerCase()} input={input} setPrompt={setPrompt} />;
    // newOutput += projects.titre + "\n" + projects.description +"\n"+ projects.lien + " " +projects.lienTitre
  } else {
    newOutput = <Show output={output} command={"wrong"} input={input} />;
  }

  return newOutput;
};

function Show({output, command, input ,setPrompt}) {
  let Command = command;
  return (
    <>
      {Command != "clear" && (
        <>
          {output}
          <p className="beforeInput">{input}</p>
        </>
      )}

      {Command == "ls" && <Documents />}
      {Command == "pwd" && <p>scordi/path/</p>}
      {Command == "wrong" && <p>wrond command</p>}
      {Command == "projets" && <Projects />}
    </>
    
  );
}
