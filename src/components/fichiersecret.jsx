import React from "react";
import photo from "../assets/image-fichier-caché.png"

const Fichiersecret = () => {

  return (
    <div>
      <h4 className="secret-titre">--Fichier caché !--</h4>
      <img className='image-fichier-caché' src={photo}/>
      <p className="secret-content">Félicitations!</p>
    </div>
  );
};

export default Fichiersecret;
