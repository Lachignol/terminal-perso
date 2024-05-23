import React from 'react';

const Documents = () => {
const documents = ["bio","education","projets"]
    return (
        <>
        {documents.map((document, index) => (
            <div key={index}>
              <p>{document}</p>
            </div>
          ))}
          </>
    );
};

export default Documents;