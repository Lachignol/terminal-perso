import React from "react";

const Help = () => {
  const helps = [
    {
      nomCmd: "frappé la touche tab",
      explication: "sert a appliquer l'autocomplétion",
      exemple:
        "il suffit seulement de commencer a ecrire ce que l'on veu et appuyer sur la touche tab du clavier",
    },
    {
      nomCmd: "cd",
      explication: "sert a changer de repertoire",
      exemple: "cd <nom du repertoire>",
      exempleSup: "cd .. (remonte d'un repertoire au dessus)",
    },
    {
      nomCmd: "ls",
      explication:
        "sert a lister les fichiers ou repertoire present dans le repertoire actuel",
      exemple: "ls",
      exempleSup: "ls -a (affiche aussi les fichiers caché)",
    },
    {
      nomCmd: "cat",
      explication: "sert a ouvrir un fichier present dans le repertoire",
      exemple: "cat <nom du fichier>",
    },
    {
      nomCmd: "pwd",
      explication: "sert a afficher le repertoire courant",
      exemple: "pwd",
    },
    {
      nomCmd: "clear",
      explication: "sert a vider le terminal",
      exemple: "clear",
    },
  ];

  return (
    <>
      <ul>
        {helps.map((help, index) => (
          <div key={index}>
            <h5 className="help-titre-commande">--{help.nomCmd}--</h5>
            <br />
            <li className="help-explication">Explication:{help.explication}</li>
            <li className="help-exemple">Exemple:{help.exemple}</li>
            {help.exempleSup && <li className="help-exemple">Info suplémentaire:{help.exempleSup}</li>}
            <br />
          </div>
        ))}
      </ul>
    </>
  );
};

export default Help;
