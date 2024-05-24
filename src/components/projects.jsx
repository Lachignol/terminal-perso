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
        lien:"https://portfolio-scordi.vercel.app",
        lienTitre:"adress bidonos"
        },
        ]
        



    return (
        <>
        <ul>
        {projects.map((project, index) => (
            <div key={index}>
              <li>{project.titre}</li>
              <li>{project.description}</li>
              <li><a href={project.lien}>{project.lienTitre}</a></li>
            </div>
          ))}
          </ul>
          </>
    );
};

export default Projects;