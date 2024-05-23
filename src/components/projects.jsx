import React from 'react';

const Projects = () => {

const projects=[
        {
        titre:"projet 1",
        description:"blablalblala",
        lien:"https://www.google.com",
        lienTitre:"adress bidon"
        },
        {titre:"projet 2",
        description:"bloblolblolo",
        lien:"https://www.google.com",
        lienTitre:"adress bidonos"
        },
        ]
        



    return (
        <>
        {projects.map((project, index) => (
            <div key={index}>
              <p>{project.titre}</p>
              <p>{project.description}</p>
              <p><a href={project.lien}>{project.lienTitre}</a></p>
            </div>
          ))}
          </>
    );
};

export default Projects;