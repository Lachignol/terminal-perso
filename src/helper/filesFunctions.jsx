import Projects from "../components/projects";
import Contacts from "../components/contact";
import Education from "../components/education";
import Bio from "../components/Bio";








export const switchCaseCat = (input, output, prompt,) => {
  let newOutput;

  let validCommand = ["cat projets","cat contacts","cat education","cat bio"];
  console.log(input);

  if (validCommand.includes(input.trim().toLowerCase())) {
    newOutput = (
      <ShowCat
        output={output}
        command={input.trim().toLowerCase()}
        input={input}
        prompt={prompt}
      />
    );
  } else {
    newOutput = (
      <ShowCat
        output={output}
        command={"wrong"}
        input={input}
        prompt={prompt}
      />
    );
  }

  return newOutput;
};

function ShowCat({ output, command, input, prompt }) {
  console.log(prompt);
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

      {Command == "wrong" && <p>No such file </p>}
      {Command == "cat projets" && prompt == "scordi/portfolio>" && (
        <Projects />
      )}
      {Command == "cat projets" && prompt != "scordi/portfolio>" && (
        <p>No such file</p>
      )}
      {Command == "cat contacts" && prompt == "scordi/portfolio>" && (
        <Contacts />
      )}
      {Command == "cat contacts" && prompt != "scordi/portfolio>" && (
        <p>No such file</p>
      )}
       {Command == "cat education" && prompt == "scordi/portfolio>" && (
        <Education />
      )}
      {Command == "cat education" && prompt != "scordi/portfolio>" && (
        <p>No such file</p>
      )}
       {Command == "cat bio" && prompt == "scordi/portfolio>" && (
        <Bio />
      )}
      {Command == "cat bio" && prompt != "scordi/portfolio>" && (
        <p>No such file</p>
      )}
    </>
  );
}
