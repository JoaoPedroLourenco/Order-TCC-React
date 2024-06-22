import React from "react";
import FormCadastroProduto from "./FormCadastroProduto";

const EditCardapio = () => {
  return (
    <div className="container editCardapio">
      <div className="title">
        <h1>Edição do cardápio</h1>
      </div>

      <FormCadastroProduto />
    </div>
  );
};

export default EditCardapio;
