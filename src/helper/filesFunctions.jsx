import Projects from "../components/projects";
import Contacts from "../components/contact";
import Education from "../components/education";
import Fichiersecret from "../components/fichiersecret";
import Bio from "../components/Bio";

export const switchCaseCat = (input, output, prompt) => {
  let newOutput;

  let validCommand = [
    "cat projets",
    "cat projets.txt",
    "cat contacts",
    "cat contacts.txt",
    "cat education",
    "cat education.txt",
    "cat bio",
    "cat bio.txt",
    "cat cv",
    "cat cv.pdf",
    "cat fichiersecret",
    "cat fichiersecret.scrt",
  ];
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
      {(Command == "cat projets" || Command == "cat projets.txt") &&
        prompt == "scordi/portfolio>" && <Projects />}
      {(Command == "cat projets" || Command == "cat projets.txt") &&
        prompt != "scordi/portfolio>" && <p className="wrong">No such file</p>}
      {(Command == "cat contacts" || Command == "cat contacts.txt") &&
        prompt == "scordi/portfolio>" && <Contacts />}
      {(Command == "cat contacts" || Command == "cat contacts.txt") &&
        prompt != "scordi/portfolio>" && <p className="wrong">No such file</p>}
      {(Command == "cat education" || Command == "cat education.txt") &&
        prompt == "scordi/portfolio>" && <Education />}
      {(Command == "cat education" || Command == "cat education.txt") &&
        prompt != "scordi/portfolio>" && <p className="wrong">No such file</p>}
      {(Command == "cat bio" || Command == "cat bio.txt") &&
        prompt == "scordi/portfolio>" && <Bio />}
      {(Command == "cat bio" || Command == "cat bio.txt") &&
        prompt != "scordi/portfolio>" && <p className="wrong">No such file</p>}
      {(Command == "cat cv" || Command == "cat cv.pdf") &&
        prompt == "scordi/portfolio>" && (
          <a
            href={"/ScordilisAlexandre.pdf"}
            download="Scordilis_Alexandre_cv.pdf"
          >
            {" "}
            télécharge mon cv{" "}
          </a>
        )}
      {(Command == "cat cv" || Command == "cat cv.pdf") &&
        prompt != "scordi/portfolio>" && <p className="wrong">No such file</p>}
      {(Command == "cat fichiersecret" ||
        Command == "cat fichiersecret.scrt") &&
        prompt == "scordi>" && <Fichiersecret />}
      {(Command == "cat fichiersecret" ||
        Command == "cat fichiersecret.scrt") &&
        prompt != "scordi>" && <p className="wrong">No such file</p>}
    </>
  );
}
