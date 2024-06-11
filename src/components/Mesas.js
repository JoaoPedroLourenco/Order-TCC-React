import React, { useState } from "react";
import "./Mesas.css";

import EditMesas from "./EditMesas";

const Mesas = () => {
  const MesasPage = ({ navigateTo }) => (
    <div className="container mesas">
      <div className="title">
        <h1>Mesas</h1>
      </div>

      <button className="goToEditMesas" onClick={() => navigateTo("editMesas")}>Editar Mesas</button>
    </div>
  );

  const [currentPage, setCurrentPage] = useState("home");

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container">
      {currentPage === "home" && <MesasPage navigateTo={navigateTo} />}
      {currentPage === "editMesas" && <EditMesas navigateTo={navigateTo} />}
    </div>
  );
};

export default Mesas;
