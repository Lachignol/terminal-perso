import Documents from "../components/documents";



export const switchCaseCommand = (input, output, prompt,) => {
    let newOutput;
  
    let validCommand = ["ls", "pwd", "clear",""];
  
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
        <ShowCommand output={output} command={"wrong"} input={input} prompt={prompt} />
      );
    }
  
    return newOutput;
  };
  
  function ShowCommand({ output, command, input, prompt }) {
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
  
        {Command == "ls" && prompt == "scordi/portfolio>" && <Documents />}
        {Command == "ls" && prompt == "scordi>" && <p>portfolio</p>}
        {Command == "pwd" && <p>{prompt.slice(0, prompt.length - 1)}</p>}
        {Command == "wrong" && <p>mauvaise commande</p>}
      </>
    );
  }