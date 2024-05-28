import React from "react";

const Help = () => {
  const helps = [
    {
      nomCmd: "ls",
      explication:
        "Lister les fichiers/répertoires présents dans le répertoire actuel.",
      exemple: "ls",
      exempleSup: "Pour afficher les fichiers cachés tapez:ls -a ",
    },
    {
      nomCmd: "cat",
      explication: "Ouvrir un fichier present dans le repertoire.",
      exemple: "cat <nom du fichier>",
    },
    {
      nomCmd: "touche tab",
      explication: "Appliquer l'autocomplétion.",
      exemple:"Tapez sur la touche tabulation du clavier",
    },
    {
      nomCmd: "cd",
      explication: "Changer de repertoire.",
      exemple: "cd <nom du repertoire>",
      exempleSup: "Pour remonter d'un repertoire au dessus tapez :cd .. ",
    },
    {
      nomCmd: "pwd",
      explication: "Afficher le repertoire courant.",
      exemple: "pwd",
    },
    {
      nomCmd: "clear",
      explication: "Vider le terminal.",
      exemple: "clear",
    },
  ];

  return (
    <>
      <ul>
        {helps.map((help, index) => (
          <div key={index}>
            <h4 className="help-titre-commande">--{help.nomCmd}--</h4>
            <br />
            <li className="help-explication">Explication:{help.explication}</li>
            <br />
            <li className="help-exemple">Tapez:{help.exemple}</li>
            <br />
            {help.exempleSup && <li className="help-exemple">{help.exempleSup}</li>}
            <br />
          </div>
        ))}
      </ul>
    </>
  );
};

export default Help;
