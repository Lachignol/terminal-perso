import React from "react";

const Documents = () => {
  const documents = ["bio", "education", "projets", "contacts", "cv"];
  return (
    <>
      <ul className="documents-container">
        {documents.map((document, index) => (
          <div key={index}>
            {document == "cv" ? (
              <li className="document-item">{document}.pdf </li>
            ) : (
              <li className="document-item">{document}.txt</li>
            )}
          </div>
        ))}
      </ul>
    </>
  );
};

export default Documents;
