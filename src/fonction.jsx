import { projects } from "./data";
import Projects from "./components/projects";
import Documents from "./components/documents";

export const switchCase = (input, output) => {
  let newOutput = "";
  let validCommand = ["ls", "pwd", "projets", "clear"];

  if (validCommand.includes(input.slice(1).trim().toLowerCase())) {
    newOutput = <Show output={output} command={input.slice(1).trim().toLowerCase()} input={input} />;
    // newOutput += projects.titre + "\n" + projects.description +"\n"+ projects.lien + " " +projects.lienTitre
  } else {
    newOutput = <Show output={output} command={"wrong"} input={input} />;
  }

  return newOutput;
};

function Show({output, command, input }) {
  let Command = command;
  console.log(command);
  return (
    <>
      {Command != "clear" && (
        <>
          <p>{output}</p>
          <p>{input}</p>
        </>
      )}

      {Command == "ls" && <Documents />}
      {Command == "pwd" && <p>scordi/path/</p>}
      {Command == "wrong" && <p>wrond command</p>}
      {Command == "projets" && <Projects />}
    </>
  );
}
