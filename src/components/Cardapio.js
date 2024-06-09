import React from "react";
import "./Cardapio.css";
import { useState } from "react";

const Cardapio = () => {
  const [activeDiv, setActiveDiv] = useState(1);

  const handleClick = (divNumber) => {
    setActiveDiv(divNumber);
  };

  return (
    <div className="container cardapio">
      <div className="title">
        <h1>Cardápio</h1>
      </div>
      {/* <div className="sections-btn">
        <button onClick={sectionPratos}>Pratos principais</button>
        <button onClick={sectionBebidas}>Bebidas</button>
        <button onClick={sectionOutros}>Outros</button>
      </div> */}
      <div className="btns">
        <button onClick={() => handleClick(1)}>Pratos Principais</button>
        <button onClick={() => handleClick(2)}>Bebidas</button>
        <button onClick={() => handleClick(3)}>Outros</button>
      </div>

      <div className="selectors">
        {activeDiv === 1 && (
          <div className="pratosPrincipais">
            <div className="item">
              <div className="item-image">
                <img src="https://placeholder.com/180" alt="" />
              </div>
              <div className="item-desc">
                <h3>X-Quase Tudo</h3>
                <p>
                  2 Hamburgueres, Maionese, Queijo, Tomate, Alface, Salsicha.
                </p>
                <h2>
                  <span style={{ color: "red" }}>R$ </span>
                  15,00
                </h2>
              </div>
            </div>

            <div className="item">
              <div className="item-image">
                <img src="https://placeholder.com/180" alt="" />
              </div>
              <div className="item-desc">
                <h3>X-Quase Tudo</h3>
                <p>
                  2 Hamburgueres, Maionese, Queijo, Tomate, Alface, Salsicha.
                </p>
                <h2>
                  <span style={{ color: "red" }}>R$ </span>
                  15,00
                </h2>
              </div>
            </div>

            <div className="item">
              <div className="item-image">
                <img src="https://placeholder.com/180" alt="" />
              </div>
              <div className="item-desc">
                <h3>X-Quase Tudo</h3>
                <p>
                  2 Hamburgueres, Maionese, Queijo, Tomate, Alface, Salsicha.
                </p>
                <h2>
                  <span style={{ color: "red" }}>R$ </span>
                  15,00
                </h2>
              </div>
            </div>
          </div>
        )}
        {activeDiv === 2 && (
          <div className="bebidas">
            <div className="item-bebidas">
              <div className="item-image-bebidas">
                <img src="https://placeholder.com/180" alt="" />
              </div>
              <div className="item-desc-bebidas">
                <h3>Coca-Cola 2L</h3>
                <h2>
                  <span style={{ color: "red" }}>R$ </span>
                  9,90
                </h2>
              </div>
            </div>
          </div>
        )}
        {activeDiv === 3 && <div className="outros">Div 3</div>}
      </div>
    </div>
  );
};

export default Cardapio;
