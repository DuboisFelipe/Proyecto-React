import React from "react";

const Card = ({ data }) => {
  return (
    <div>
      <h2>Información del Estudiante</h2>
      <p>Primer Input: {data.input1}</p>
      <p>Segundo Input: {data.input2}</p>
    </div>
  );
};

export default Card;
