import React from 'react';

const Projects = ({data}) => {
    return (
        <>
        {data.map((project, index) => (
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