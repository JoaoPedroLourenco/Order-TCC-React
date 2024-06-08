import React from "react";
import "./sideBar.css";

const sideBar = ({ mesasPage, cardapioPage, estoquePage, rendaPage }) => {
  return (
    <aside>
      <div className="perfil">
        <img src="https://placeholder.com/50" alt="perfil" />
      </div>
      <nav>
        <ul>
          <li>
            <button onClick={mesasPage}>Mesas</button>
          </li>
          <li>
            <button onClick={cardapioPage}>Cardápio</button>
          </li>
          <li>
            <button onClick={estoquePage}>Estoque</button>
          </li>
          <li>
            <button onClick={rendaPage}>Renda</button>
          </li>
        </ul>
      </nav>
      <div className="logo">
        <img src="https://placeholder.com/50" alt="logo" />
      </div>
    </aside>
  );
};

export default sideBar;
