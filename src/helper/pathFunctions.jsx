export const switchCaseSetPath = (input, prompt) => {
  let newPrompt;
  let commandWithoutCd = input.trim().split(" ")[1]
    ? input.trim().split(" ")[1]
    : input.trim().split(" ")[0];
  let validPath = ["portfolio", ".."];

  if (validPath.includes(commandWithoutCd.toLowerCase())) {
    if ((commandWithoutCd == "portfolio" || commandWithoutCd == "Portfolio") && prompt != "scordi/portfolio>")
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

export const switchCasePath = (input, output, prompt) => {
  let newOutput;

  let validDirectory = ["cd portfolio", "cd ..", "cd"];

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
      {Command == "cd portfolio" && prompt =="scordi/portfolio>" && <p className="wrong">vous ête déja dans ce repertoire</p>}
      {Command == "cd" && <p className="wrong">nom de repertoire invalide</p>}
      {Command == "wrong" && (
        <p className="wrong">No directory {input.trim().split(" ")[1]} find</p>
      )}
    </>
  );
}
