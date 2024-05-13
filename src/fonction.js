import { projects } from "./data";


export const switchCase =(input,newOutput)=>{
 switch(input.slice(1)){
case "ls":
newOutput += projects.titre + "\n" + projects.description +"\n"+ projects.lien + " " +projects.lienTitre

break;
case "pwd":
newOutput += "chemin du repertoire"
break;
case "clear":
newOutput = ""
break;
default:
newOutput += "wrong cmd"
break
}
return newOutput
}

const show=(data)=>{
let result=""
return result+= data.map((el)=>result+= `<p>${el.titre}</p>`)
 
}


