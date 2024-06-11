import React from "react";
import "./EditMesas.css";
import { useState } from "react";
import downArrow from "../assets/imgs/downArrow.png";

const EditMesas = ({ navigateTo }) => {
  const [tamanhoCard, setTamanhoCard] = useState(false);

  const aumentarCard = () => {
    setTamanhoCard(!tamanhoCard);
  };

  return (
    <div className="container editMesas">
      <div className="title">
        <h1>Editar Mesas</h1>
      </div>

      <p>Esta é a página de edição de mesas.</p>
      <button onClick={() => navigateTo("home")}>Voltar para Home</button>

      <div className="sectionsContainer">
        <div
          className="doisLugares card"
          onClick={aumentarCard}
          style={{
            height: tamanhoCard ? "500px" : "30px",
          }}
        >
          <div className="lugaresTitle">
            <h2>2 Lugares</h2>
            <p>
              <img src={downArrow} alt="↓" />
              {tamanhoCard}
            </p>
          </div>
          <div className="addBtn">
            <div
              className="middleBtn"
              style={{ opacity: tamanhoCard ? "1" : "0", transition: ".6s" }}
            >
              +
            </div>
          </div>
        </div>

        <div
          className="doisLugares card"
          onClick={aumentarCard}
          style={{
            height: tamanhoCard ? "500px" : "30px",
          }}
        >
          <div className="lugaresTitle">
            <h2>4 Lugares</h2>
            <p>
              <img src={downArrow} alt="↓" />
              {tamanhoCard}
            </p>
          </div>
          <div className="addBtn">
            <div
              className="middleBtn"
              style={{ opacity: tamanhoCard ? "1" : "0", transition: ".6s" }}
            >
              +
            </div>
          </div>
        </div>

        <div
          className="doisLugares card"
          onClick={aumentarCard}
          style={{
            height: tamanhoCard ? "500px" : "30px",
          }}
        >
          <div className="lugaresTitle">
            <h2>6 Lugares</h2>
            <p>
              <img src={downArrow} alt="↓" />
              {tamanhoCard}
            </p>
          </div>
          <div className="addBtn">
            <div
              className="middleBtn"
              style={{ opacity: tamanhoCard ? "1" : "0", transition: ".6s" }}
            >
              +
            </div>
          </div>
        </div>

        <div
          className="doisLugares card"
          onClick={aumentarCard}
          style={{
            height: tamanhoCard ? "500px" : "30px",
          }}
        >
          <div className="lugaresTitle">
            <h2>10 Lugares</h2>
            <p>
              <img src={downArrow} alt="↓" />
              {tamanhoCard}
            </p>
          </div>
          <div className="addBtn">
            <div
              className="middleBtn"
              style={{ opacity: tamanhoCard ? "1" : "0", transition: ".6s" }}
            >
              +
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditMesas;
