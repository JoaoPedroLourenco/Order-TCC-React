import React from "react";
import "./Estoque.css";
import { useState, useEffect } from "react";

const EstoqueCard = ({ nomeItem, qtdItem }) => (
  <div className="item-estoque">
    <h2>{nomeItem}</h2>
    <p>{qtdItem}</p>
  </div>
);

const dataBaseURL = "http://localhost:3000/estoque";

const Estoque = () => {
  const [activeDiv, setActiveDiv] = useState(1);

  const handleClick = (divNumber) => {
    setActiveDiv(divNumber);
  };

  const [estoqueItemCadastrado, setEstoqueItemCadastrado] = useState([]);

  const [nomeItem, setNomeItem] = useState("");
  const [qtdItem, setQtdItem] = useState("");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(dataBaseURL);
      const data = await res.json();
      setEstoqueItemCadastrado(data);
    }
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); // para não perder dados atualizando a pagina qnd tiver o submit

    const estoque = {
      nomeItem,
      qtdItem,
    };

    const res = await fetch(dataBaseURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(estoque),
    });

    // 3 - carregamento dinâmico
    const addedItens = await res.json();

    setEstoqueItemCadastrado((prevItens) => [...prevItens, addedItens]);

    setNomeItem("");
    setQtdItem("");
  };

  return (
    <div className="container estoque">
      <div className="title">
        <h1>Estoque</h1>
      </div>

      <div className="estoqueCadastroItem">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nomeItem"
            id="nomeItem"
            placeholder="Nome do Item"
            value={nomeItem}
            onChange={(e) => setNomeItem(e.target.value)}
          />

          <input
            type="text"
            name="descItem"
            id="descItem"
            placeholder="Descrição do Item"
            value={qtdItem}
            onChange={(e) => setQtdItem(e.target.value)}
          />

          <input type="submit" value="Confirmar" />
        </form>
      </div>

      <div className="btns">
        <button
          className={activeDiv === 1 ? "active" : ""}
          onClick={() => handleClick(1)}
        >
          Pratos Principais
        </button>
        <button
          className={activeDiv === 2 ? "active" : ""}
          onClick={() => handleClick(2)}
        >
          Bebidas
        </button>
        <button
          className={activeDiv === 3 ? "active" : ""}
          onClick={() => handleClick(3)}
        >
          Outros
        </button>
      </div>

      <div className="selectors">
        {activeDiv === 1 && (
          <div className="pratosPrincipais">
            <div className="cardsProdutos">
              <ul>
                {estoqueItemCadastrado.map((estoques, index) => (
                  <EstoqueCard
                    key={index}
                    nomeItem={estoques.nomeItem}
                    qtdItem={estoques.qtdItem}
                  />
                ))}
              </ul>
            </div>
          </div>
        )}
        {activeDiv === 2 && <div className="bebidas"></div>}
        {activeDiv === 3 && <div className="outros">Div 3</div>}
      </div>
    </div>
  );
};

export default Estoque;
