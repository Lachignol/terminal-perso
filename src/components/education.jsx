import React from "react";

const Education = () => {
  const educations = [
    { année: "--2011--", description: "Baccalauréat-Economique et Sociale." },
    { année: "--2012--", description: "DUT-Technique de commercialisation." },
    {
      année: "--2016--",
      description: " Technicien supérieur en informatique-Diplôme niveau III.",
    },
    {
      année: "--2023--  à --aujourd'hui--",
      description:
        "Formation Ada tech school concepteur développeur d'applications-Bac+3,RNCP niveau IV (9 mois de formation et 12 mois d'alternance)",
    },
  ];

  return (
    <>
      <ul>
        {educations.map((education, index) => (
          <div key={index}>
            <h4 className="education-titre">{education.année}</h4>
            <br />
            <li className="education-description">{education.description}</li>
            <br />
          </div>
        ))}
      </ul>
    </>
  );
};

export default Education;
