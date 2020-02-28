import React, { useState } from "react";

import Card from "../Card";

export default function Boleto() {
  const [docs, setDocs] = useState([
    { id: 1, title: "Boleto 1", description: "Descrição do boleto1" }
  ]);

  // const [docs, setDocs] = useState([]);

  function handleAdd() {
    let newId = docs.length + 1;
    setDocs([
      ...docs,
      {
        id: newId,
        title: `Boleto ${newId}`,
        description: `Descrição do boleto ${newId}`
      }
    ]);
  }

  return (
    <>
      <ul>
        {docs.map(doc => (
          <li key={doc.id}>
            <Card title={doc.title} description={doc.description} />
          </li>
        ))}
      </ul>

      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}
