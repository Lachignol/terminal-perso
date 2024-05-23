import { projects } from "./data";
import Projects from "./components/projects";

export const switchCase = (input,output) => {
  let newOutput=""
  switch (input.slice(1)) {
    case "ls":
      newOutput = <Show data={projects} output={output} command={"ls"} input={input} />
      // newOutput += projects.titre + "\n" + projects.description +"\n"+ projects.lien + " " +projects.lienTitre

      break;
    case "pwd":
      newOutput = <Show data={projects} output={output} command={"pwd"} input={input} />
      break;
    case "clear":
      newOutput = <Show data={projects} output={output} command={"clear"} input={input} />
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
     <Projects data={data}/>
    )}
    {Command == "pwd" && (
     <p>scordi/path/</p>
    )}
    {Command == "wrong" && (
     <p>wrond command</p>
    )}
    
     
    
    </>
  );
}




