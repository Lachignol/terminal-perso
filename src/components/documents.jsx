import React from 'react';

const Documents = () => {
const documents = ["bio","education","projets"]
    return (
        <>
        <ul>
        {documents.map((document, index) => (
            <div key={index}>
              <li>{document}.txt</li>
            </div>
          ))}
          </ul>
          </>
    );
};

export default Documents;