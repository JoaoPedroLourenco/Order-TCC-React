import React from "react";
import "./sideBar.css";

// imagens
import logo from "../assets/imgs/logoMenor.png";
import perfil from "../assets/imgs/perfil.png";
import mesa from "../assets/imgs/mesaPNG.png";
import cardapio from "../assets/imgs/cardapioPng.png";
import estoque from "../assets/imgs/estoquePng.png";
import renda from "../assets/imgs/Renda.png";

const sideBar = ({ mesasPage, cardapioPage, estoquePage, rendaPage }) => {
  return (
    <aside>
      <div className="perfil">
        <img src={perfil} alt="perfil" />
      </div>
      <nav>
        <ul>
          <li>
            <button onClick={mesasPage}>
              <img src={mesa} alt="mesas" />
              Mesas
            </button>
          </li>
          <li>
            <button onClick={cardapioPage}>
              {" "}
              <img src={cardapio} alt="mesas" className="cardapio-icone" />
              Cardápio
            </button>
          </li>
          <li>
            <button onClick={estoquePage}>
              {" "}
              <img src={estoque} alt="mesas" /> Estoque
            </button>
          </li>
          <li>
            <button onClick={rendaPage}>
              <img src={renda} alt="mesas" />
              Renda
            </button>
          </li>
        </ul>
      </nav>
      <div className="logo">
        <img src={logo} alt="logo" className="logo" />
      </div>
    </aside>
  );
};

export default sideBar;
