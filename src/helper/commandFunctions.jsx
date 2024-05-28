import Documents from "../components/documents";
import Help from "../components/help";

export const switchCaseCommand = (input, output, prompt) => {
  let newOutput;

  let validCommand = ["ls", "pwd", "clear", "help", "ls -a", ""];

  if (validCommand.includes(input.trim().toLowerCase())) {
    newOutput = (
      <ShowCommand
        output={output}
        command={input.trim().toLowerCase()}
        input={input}
        prompt={prompt}
      />
    );
  } else {
    newOutput = (
      <ShowCommand
        output={output}
        command={"wrong"}
        input={input}
        prompt={prompt}
      />
    );
  }

  return newOutput;
};

function ShowCommand({ output, command, input, prompt }) {
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
      {Command == "" && <p></p>}
      {Command == "help" && <Help />}
      {Command == "ls" && prompt == "scordi/portfolio>" && <Documents />}
      {Command == "ls" && prompt == "scordi>" && (
        <p className="document-item">Portfolio</p>
      )}
      {Command == "pwd" && (
        <p className="pwd-result">Path:{prompt.slice(0, prompt.length - 1)}</p>
      )}
      {Command == "ls -a" && prompt == "scordi/portfolio>" && <Documents />}
      {Command == "ls -a" && prompt == "scordi>" && (
        <>
          <p className="document-item">Portfolio</p>
          <p className="document-item">fichiersecret.scrt</p>
        </>
      )}
      {Command == "wrong" && <p className="wrong">Tapez help</p>}
    </>
  );
}
