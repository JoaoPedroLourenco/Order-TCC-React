import React from "react";
import { useState, useEffect } from "react";
import { dataBaseURL, ProdutoCard } from "./Cardapio";

export const Cardapio = () => {
  const [activeDiv, setActiveDiv] = useState(1);

  const handleClick = (divNumber) => {
    setActiveDiv(divNumber);
  };

  const [produtoCadastrado, setProdutoCadastrado] = useState([]);

  const [nomeProduto, setNomeProduto] = useState("");
  const [descProduto, setDescProduto] = useState("");
  const [precoProduto, setPrecoProduto] = useState("");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(dataBaseURL);
      const data = await res.json();
      setProdutoCadastrado(data);
    }
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); // para não perder dados atualizando a pagina qnd tiver o submit

    const produtos = {
      nome,
      descricao, // valor tem o mesmo nome da chave, por isso apenas "name"
      preco,
    };

    const res = await fetch(dataBaseURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(produtos),
    });

    // 3 - carregamento dinâmico
    const addedProduct = await res.json();

    setProdutoCadastrado((prevProducts) => [...prevProducts, addedProduct]);
  };

  return (
    <div className="container cardapio">
      <div className="title">
        <h1>Cardápio</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nomeProduto"
          id="nomeProduto"
          placeholder="Nome do produto"
          value={nomeProduto}
          onChange={(e) => setNomeProduto(e.target.value)}
        />

        <input
          type="text"
          name="descProduto"
          id="descProduto"
          placeholder="Descrição do produto"
          value={descProduto}
          onChange={(e) => setDescProduto(e.target.value)}
        />

        <input
          type="number"
          name="precoProduto"
          id="precoProduto"
          placeholder="Preço do produto"
          value={precoProduto}
          onChange={(e) => setPrecoProduto(e.target.value)}
        />

        <input type="submit" value="Confirmar" />
      </form>

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
                {produtoCadastrado.map((produto, index) => (
                  <ProdutoCard
                    key={index}
                    nomeProduto={produto.nomeProduto}
                    descProduto={produto.descProduto}
                    precoProduto={produto.precoProduto}
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
