import React from "react";
import "./Estoque.css";

const Estoque = () => {
  return (
    <div className="container estoque">
      <div className="title">
        <h1>Estoque</h1>
      </div>

      <div className="estoqueCadastroItem">
        <form>
          <input type="text" placeholder="Nome do item" />
          <input type="text" placeholder="Qtd em estoque" />
          <input type="submit" value="Confirmar" />
        </form>
      </div>
    </div>
  );
};

export default Estoque;
