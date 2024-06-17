import React from "react";
import "./sideBar.css";

// imagens
import logo from "../assets/imgs/logoMenor.png";
import perfil from "../assets/imgs/Male User.png";
import mesa from "../assets/imgs/mesa.png";
import cardapio from "../assets/imgs/Restaurant Menu.png";
import estoque from "../assets/imgs/New Product.png";
import renda from "../assets/imgs/Money Bag.png";
import configuracoes from "../assets/imgs/Settings.png";
import ajuda from "../assets/imgs/Help.png";

const sideBar = ({
  mesasPage,
  cardapioPage,
  estoquePage,
  rendaPage,
  settingsPage,
  helpPage,
  perfilPage,
}) => {
  return (
    <div className="sideBarContainer">
      <div className="logo">
        <img src={logo} alt="Order" />
      </div>
      <aside>
        <div className="profile">
          <button onClick={perfilPage}>
            <img src={perfil} alt="Profile" />
          </button>
        </div>
        <hr />
        <nav>
          <ul>
            <li>
              <button onClick={mesasPage}>
                <img src={mesa} alt="Mesas" />
                Mesas
              </button>
            </li>
            <li>
              <button onClick={cardapioPage}>
                <img src={cardapio} alt="Cardápio" />
                Cardápio
              </button>
            </li>
            <li>
              <button onClick={estoquePage}>
                <img src={estoque} alt="Estoque" />
                Estoque
              </button>
            </li>
            <li>
              <button onClick={rendaPage}>
                <img src={renda} alt="Renda" />
                Renda
              </button>
            </li>
          </ul>
        </nav>
        <hr />
        <div className="settings help">
          <button onClick={settingsPage}>
            <img src={configuracoes} alt="Settings" />
            Configurações
          </button>
          <button onClick={helpPage}>
            <img src={ajuda} alt="Help" />
            Ajuda
          </button>
        </div>
      </aside>
    </div>
  );
};

export default sideBar;
