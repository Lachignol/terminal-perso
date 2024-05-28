import React from 'react';
import name from "../assets/image-prompt-name.png"
import panda from "../assets/image-prompt-panda.png"

const Introduction = () => {

const separation = "#############################################################################################################################################################################################################################################################"
    return (
        <>
        <div className='introduction'>
        <div className='intro-container'>
            <img className='image-panda' src={panda}/>
            <img className="image-name"src={name}/>
           

            </div>
            <small className='copyright'>©Mon Portfolio</small>
 <span className='separation'>{separation} </span>
         <p className='introduction-text'>Tapez help pour voir les commandes disponibles:</p> 
         </div>
        </>
    );
};

export default Introduction;