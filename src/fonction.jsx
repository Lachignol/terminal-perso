import Projects from "./components/projects";
import Documents from "./components/documents";

export const switchCaseSetPath = (input, prompt) => {
  let newPrompt;
  let commandWithoutCd = input.trim().split(" ")[1]
    ? input.trim().split(" ")[1]
    : input.trim().split(" ")[0];
  let validPath = ["portfolio", ".."];

  if (validPath.includes(commandWithoutCd.toLowerCase())) {
    if (commandWithoutCd == "portfolio" && prompt != "scordi/portfolio>")
      newPrompt = `${prompt.slice(0, prompt.length - 1)}/portfolio>`;
    else {
      newPrompt = prompt;
    }
    if (commandWithoutCd == ".." && prompt != "scordi>") {
      let repertory = prompt.split("/");
      let numberOfRepertory = repertory.length - 1;
      let resultPrompt = "";
      for (let i = 0; i < numberOfRepertory; i++) {
        resultPrompt += repertory[i];
      }
      newPrompt = `${resultPrompt}>`;
    }
  } else {
    newPrompt = prompt;
  }

  return newPrompt;
};

export const switchCasePath = (input, output, prompt,) => {
  let newOutput;

  let validDirectory = ["cd portfolio", "cd ..","cd"];

  if (validDirectory.includes(input.trim().toLowerCase())) {
    newOutput = (
      <ShowPath
        output={output}
        command={input.trim().toLowerCase()}
        input={input}
        prompt={prompt}
      />
    );
  } else {
    newOutput = (
      <ShowPath
        output={output}
        command={"wrong"}
        input={input}
        prompt={prompt}
      />
    );
  }

  return newOutput;
};

function ShowPath({ output, command, input, prompt }) {
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
      {Command == "cd" &&<p>svp entré un nom de repertoire</p>}
      {Command == "wrong" && <p>No directory {input.trim().split(" ")[1]} find</p>}
    </>
  );
}

export const switchCaseCommand = (input, output, prompt,) => {
  let newOutput;

  let validCommand = ["ls", "pwd", "clear",""];

  if (validCommand.includes(input.trim().toLowerCase())) {
    newOutput = (
      <Show
        output={output}
        command={input.trim().toLowerCase()}
        input={input}
        prompt={prompt}
      />
    );
  } else {
    newOutput = (
      <Show output={output} command={"wrong"} input={input} prompt={prompt} />
    );
  }

  return newOutput;
};

function Show({ output, command, input, prompt }) {
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

export const switchCaseCat = (input, output, prompt,) => {
  let newOutput;

  let validCommand = ["cat projets"];
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

      {Command == "wrong" && <p>No such file or directory</p>}
      {Command == "cat projets" && prompt == "scordi/portfolio>" && (
        <Projects />
      )}
      {Command == "cat projets" && prompt != "scordi/portfolio>" && (
        <p>No such file or directory</p>
      )}
    </>
  );
}
