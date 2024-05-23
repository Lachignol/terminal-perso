import { projects } from "./data";
import Projects from "./components/projects";
import Documents from "./components/documents";

export const switchCase = (input,output) => {
  let newOutput=""
  switch (input.slice(1)) {
    case "ls":
      newOutput = <Show  output={output} command={"ls"} input={input} />
      // newOutput += projects.titre + "\n" + projects.description +"\n"+ projects.lien + " " +projects.lienTitre

      break;
    case "pwd":
      newOutput = <Show data={projects} output={output} command={"pwd"} input={input} />
      break;
    case "clear":
      newOutput = <Show data={projects} output={output} command={"clear"} input={input} />
      break;
      case "projets":
      newOutput = <Show output={output} command={"projets"} input={input} />
      break;
    default:
      newOutput = <Show data={projects} output={output} command={"wrong"} input={input} />
      break;
  }
  return newOutput;
};



function Show({data,output,command,input}) {
let Command = command
console.log(command)
  return (
    <>
    {Command != "clear" && (
     <> 
    <p>{output}</p>
    <p>{input}</p>
    </>
  )}
    
    {Command == "ls" && (
     <Documents />
    )}
    {Command == "pwd" && (
     <p>scordi/path/</p>
    )}
    {Command == "wrong" && (
     <p>wrond command</p>
    )}
    {Command == "projets" && (
     <Projects />
    )}
   
    
     
    
    </>
  );
}




