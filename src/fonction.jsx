import Projects from "./components/projects";
import Documents from "./components/documents";


export const switchCasePath = (input,prompt,) => {
  let newPath ;
  let commandWithoutCd= input.trim().split(" ")[1]
  console.log(commandWithoutCd)
  let validPath = ["portfolio",".."];
  console.log(input)

  if (validPath.includes(commandWithoutCd.toLowerCase())) {
    if(commandWithoutCd == "portfolio" && prompt != "scordi/portfolio>")
    newPath =  `${prompt.slice(0,prompt.length-1)}/portfolio>`;
    else{
      newPath = prompt
    }
    if(commandWithoutCd == ".." && prompt != "scordi>"){
      let repertory= prompt.split("/")
      let numberOfRepertory= repertory.length-1
      let resultPrompt=""
      for (let i=0 ;i<numberOfRepertory;i++){
        resultPrompt+= repertory[i]
        
      }
      newPath = `${resultPrompt}>`
    }
    // newOutput += projects.titre + "\n" + projects.description +"\n"+ projects.lien + " " +projects.lienTitre
  } else {
    newPath = prompt ;
  }

  return newPath;
};


export const switchCaseCommand = (input, output,prompt,setPrompt) => {
  
  let newOutput ;
 
  let validCommand = ["ls", "pwd", "cat projets", "clear","cd portfolio","cd .."];
  console.log(input)
 
  if (validCommand.includes(input.trim().toLowerCase())) {
    newOutput = <Show output={output} command={input.trim().toLowerCase()} input={input} prompt={prompt}  />;
    // newOutput += projects.titre + "\n" + projects.description +"\n"+ projects.lien + " " +projects.lienTitre
  } else {
    newOutput = <Show output={output} command={"wrong"} input={input} prompt={prompt} />;
  }

  return newOutput;
};

function Show({output, command,input,prompt}) {
  console.log(prompt)
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
      {Command == "pwd" && <p>{prompt.slice(0,prompt.length-1)}</p>}
      {Command == "wrong" && <p>mauvaise commande</p>}
      {Command == "cat projets" && prompt == "scordi/portfolio>" && <Projects />}
      {Command == "cat projets" && prompt != "scordi/portfolio>" &&  <p>No such file or directory</p>}
    </>
    
  );
}


export const switchCaseCat = (input, output,prompt,setPrompt) => {
  
  let newOutput ;
 
  let validCommand = ["cat projets",];
  console.log(input)
 
  if (validCommand.includes(input.trim().toLowerCase())) {
    newOutput = <ShowCat output={output} command={input.trim().toLowerCase()} input={input} prompt={prompt}  />;
    // newOutput += projects.titre + "\n" + projects.description +"\n"+ projects.lien + " " +projects.lienTitre
  } else {
    newOutput = <ShowCat output={output} command={"wrong"} input={input} prompt={prompt} />;
  }

  return newOutput;
};

function ShowCat({output, command,input,prompt}) {
  console.log(prompt)
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
      {Command == "cat projets" && prompt == "scordi/portfolio>" && <Projects />}
      {Command == "cat projets" && prompt != "scordi/portfolio>" &&  <p>No such file or directory</p>}
    </>
    
  );
}

