// stylesheet
import "./App.css";

// components
import Mesas from "./components/Mesas";
import SideBar from "./components/sideBar";
import Cardapio from "./components/Cardapio";
import Renda from "./components/Renda";
import Estoque from "./components/Estoque";

// states
import { useState } from "react";

const pages = [
  { id: 1, page: "mesas" },
  { id: 2, page: "cardapio" },
  { id: 3, page: "estoque" },
  { id: 4, page: "renda" },
];

function App() {
  const [pagina, setPagina] = useState(pages[0].page);

  const mesasPage = () => {
    setPagina(pages[0].page);
  };

  const cardapioPage = () => {
    setPagina(pages[1].page);
  };

  const estoquePage = () => {
    setPagina(pages[2].page);
  };

  const rendaPage = () => {
    setPagina(pages[3].page);
  };

  return (
    <div className="App">
      <SideBar
        mesasPage={mesasPage}
        cardapioPage={cardapioPage}
        estoquePage={estoquePage}
        rendaPage={rendaPage}
      />

      {pagina === "mesas" && <Mesas />}

      {pagina === "cardapio" && <Cardapio />}

      {pagina === "estoque" && <Estoque />}

      {pagina === "renda" && <Renda />}
    </div>
  );
}

export default App;
