import React from 'react';

const Contacts = () => {
const contacts=[
    {
        platform: "Github",
        link: "https://github.com/Lachignol",
      },

      {
        platform: "Linkedin",
        link: "https://linkedin.com/in/alexandre-scordilis",
      },
]


    return (
        <>
         
        <ul>
        {contacts.map((contact, index) => (
            <div key={index}>
              <li>{contact.platform}</li>
              <li><a href={contact.lien} target="_blank">Voici le lien</a></li>
            </div>
          ))}
          </ul>
          </>
    );
};

export default Contacts;