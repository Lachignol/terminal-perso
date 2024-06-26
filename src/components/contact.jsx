import React from "react";

const Contacts = () => {
  const contacts = [
    {
      platform: "Github",
      lien: "https://github.com/Lachignol",
    },

    {
      platform: "Linkedin",
      lien: "https://linkedin.com/in/alexandre-scordilis",
    },
    {
      platform: "Mail",
      lien: "scordilisalexandre7@gmail.com",
    },
  ];

  return (
    <>
      <ul>
        {contacts.map((contact, index) => (
          <div key={index}>
            {contact.platform == "Mail" ? (
              <>
                <h4 className="contact-titre">--{contact.platform}--</h4>
                <a  className="contact-lien" href={`mailto:${contact.lien}`}>{contact.lien}</a>
              </>
            ) : (
              <>
                <h4 className="contact-titre">--{contact.platform}--</h4>
                <li>
                  <a className="contact-lien" href={contact.lien} target="_blank">
                    Voici le lien
                  </a>
                </li>
              </>
            )}
          </div>
        ))}
      </ul>
    </>
  );
};

export default Contacts;
