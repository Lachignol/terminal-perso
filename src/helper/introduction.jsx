import React from 'react';
import Name from "../assets/image-prompt-name.png"

const Introduction = () => {
    return (
        <>
        <div className='intro-container'>
            <img src={Name}/>
            <small>©Mon Portfolio</small>
            </div>
         <p className='introduction-text'>Tapez help pour voir les commandes disponibles:</p>   
        </>
    );
};

export default Introduction;