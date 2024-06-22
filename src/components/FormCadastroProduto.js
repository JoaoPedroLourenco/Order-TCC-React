import React from "react";

const FormCadastroProduto = () => {
  return (
    <form>
      <input
        type="text"
        name="nomeProduto"
        id="nomeProduto"
        placeholder="Nome do produto"
      />

      <input
        type="text"
        name="descProduto"
        id="descProduto"
        placeholder="Descrição do produto"
      />

      <input
        type="number"
        name="precoProduto"
        id="precoProduto"
        placeholder="Preço do produto"
      />
    </form>
  );
};

export default FormCadastroProduto;
