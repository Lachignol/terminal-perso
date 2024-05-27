import Projects from "../components/projects";
import Contacts from "../components/contact";
import Education from "../components/education";
import Fichiersecret from "../components/fichiersecret";
import Bio from "../components/Bio";




const downloadFile = (url, downloadName) => {
  const link = document.createElement("a");
  document.body.appendChild(link);

  link.download = downloadName;
  link.href = url;
  link.click(); 
  document.body.removeChild(link);
  
  
};




export const switchCaseCat = (input, output, prompt,) => {
  let newOutput;

  let validCommand = ["cat projets","cat contacts","cat education","cat bio","cat cv","cat fichiersecret"];
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

      {Command == "wrong" && <p className="wrong">No such file </p>}
      {Command == "cat projets" && prompt == "scordi/portfolio>" && (
        <Projects />
      )}
      {Command == "cat projets" && prompt != "scordi/portfolio>" && (
        <p className="wrong">No such file</p>
      )}
      {Command == "cat contacts" && prompt == "scordi/portfolio>" && (
        <Contacts />
      )}
      {Command == "cat contacts" && prompt != "scordi/portfolio>" && (
        <p className="wrong">No such file</p>
      )}
       {Command == "cat education" && prompt == "scordi/portfolio>" && (
        <Education />
      )}
      {Command == "cat education" && prompt != "scordi/portfolio>" && (
        <p className="wrong">No such file</p>
      )}
       {Command == "cat bio" && prompt == "scordi/portfolio>" && (
        <Bio />
      )}
      {Command == "cat bio" && prompt != "scordi/portfolio>" && (
        <p className="wrong">No such file</p>
      )}
       {Command == "cat cv" && prompt == "scordi/portfolio>" && (
        downloadFile("/ScordilisAlexandre.pdf", "Scordilis_Alexandre_cv.pdf")
      )}
      {Command == "cat cv" && prompt != "scordi/portfolio>" && (
        <p className="wrong">No such file</p>
      )}
       {Command == "cat fichiersecret" && prompt == "scordi>" && (
        <Fichiersecret />
      )}
      {Command == "cat fichiersecret" && prompt != "scordi>" && (
        <p className="wrong">No such file</p>
      )}

                 
    </>
  );
}
