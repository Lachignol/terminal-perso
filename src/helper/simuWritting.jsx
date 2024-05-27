

export function frappeClavier(texte, emplacement) {
    let count = 0;
    
    let play = () => {
      count++;
      emplacement.innerText = texte.substr(0, count) + "|";
      if (count < texte.length) {
        setTimeout(() => 
          play()
        , Math.random() * 280);
      }
    };
    play();
  }