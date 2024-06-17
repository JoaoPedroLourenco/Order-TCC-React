import React, { useState } from "react";
import "./EditMesas.css";
import downArrow from "../assets/imgs/downArrow.png";

const EditMesas = ({ navigateTo }) => {
  const [expandedCards, setExpandedCards] = useState({
    doisLugares: false,
    quatroLugares: false,
    seisLugares: false,
    dezLugares: false,
  });

  const toggleCard = (card) => {
    setExpandedCards((prevState) => ({
      ...prevState,
      [card]: !prevState[card],
    }));
  };

  return (
    <div className="container editMesas">
      <div className="explicatorio">
        <div className="title">
          <h1>Editar Mesas</h1>
        </div>

        <p>Esta é a página de edição de mesas.</p>
        <button className="backToMesas" onClick={() => navigateTo("home")}>
          Voltar para Mesas
        </button>
      </div>

      <div className="sectionsContainer">
        <div
          className="doisLugares card"
          onClick={() => toggleCard("doisLugares")}
          style={{
            height: expandedCards.doisLugares ? "30px" : "500px",
          }}
        >
          <div className="lugaresTitle">
            <h2>2 Lugares</h2>
            <p>
              <img
                src={downArrow}
                alt="↓"
                style={{
                  rotate: expandedCards.doisLugares ? "0deg" : "180deg",
                  transition: ".5s",
                }}
              />
            </p>
          </div>
          <div className="addBtn">
            <div
              className="middleBtn"
              style={{
                opacity: expandedCards.doisLugares ? "0" : "1",
                transition: ".1s",
              }}
            >
              +
            </div>
          </div>
        </div>

        <div
          className="quatroLugares card"
          onClick={() => toggleCard("quatroLugares")}
          style={{
            height: expandedCards.quatroLugares ? "30px" : "500px",
          }}
        >
          <div className="lugaresTitle">
            <h2>4 Lugares</h2>
            <p>
              <img
                src={downArrow}
                alt="↓"
                style={{
                  rotate: expandedCards.quatroLugares ? "0deg" : "180deg",
                  transition: ".5s",
                }}
              />
            </p>
          </div>
          <div className="addBtn">
            <div
              className="middleBtn"
              style={{
                opacity: expandedCards.quatroLugares ? "0" : "1",
                transition: ".1s",
              }}
            >
              +
            </div>
          </div>
        </div>

        <div
          className="seisLugares card"
          onClick={() => toggleCard("seisLugares")}
          style={{
            height: expandedCards.seisLugares ? "30px" : "500px",
          }}
        >
          <div className="lugaresTitle">
            <h2>6 Lugares</h2>
            <p>
              <img
                src={downArrow}
                alt="↓"
                style={{
                  rotate: expandedCards.seisLugares ? "0deg" : "180deg",
                  transition: ".5s",
                }}
              />
            </p>
          </div>
          <div className="addBtn">
            <div
              className="middleBtn"
              style={{
                opacity: expandedCards.seisLugares ? "0" : "1",
                transition: ".1s",
              }}
            >
              +
            </div>
          </div>
        </div>

        <div
          className="dezLugares card"
          onClick={() => toggleCard("dezLugares")}
          style={{
            height: expandedCards.dezLugares ? "30px" : "500px",
          }}
        >
          <div className="lugaresTitle">
            <h2>10 Lugares</h2>
            <p>
              <img
                src={downArrow}
                alt="↓"
                style={{
                  rotate: expandedCards.dezLugares ? "0deg" : "180deg",
                  transition: ".5s",
                }}
              />
            </p>
          </div>
          <div className="addBtn">
            <div
              className="middleBtn"
              style={{
                opacity: expandedCards.dezLugares ? "0" : "1",
                transition: ".1s",
              }}
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
