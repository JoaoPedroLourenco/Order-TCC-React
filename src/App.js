// stylesheet
import "./App.css";

// components
import Mesas from "./components/Mesas";
import SideBar from "./components/sideBar";
import Cardapio from "./components/Cardapio";
import Renda from "./components/Renda";
import Estoque from "./components/Estoque";
import Configuracoes from "./components/Configuracoes";
import Ajuda from "./components/Ajuda";
import Perfil from "./components/Perfil";

// states
import { useState } from "react";

const pages = [
  { id: 1, page: "perfil" },
  { id: 2, page: "mesas" },
  { id: 3, page: "cardapio" },
  { id: 4, page: "estoque" },
  { id: 5, page: "renda" },
  { id: 6, page: "config" },
  { id: 7, page: "ajuda" },
];

function App() {
  const [pagina, setPagina] = useState(pages[0].page);

  const mesasPage = () => {
    setPagina(pages[1].page);
  };

  const cardapioPage = () => {
    setPagina(pages[2].page);
  };

  const estoquePage = () => {
    setPagina(pages[3].page);
  };

  const rendaPage = () => {
    setPagina(pages[4].page);
  };

  const settingsPage = () => {
    setPagina(pages[5].page);
  };

  const helpPage = () => {
    setPagina(pages[6].page);
  };

  const perfilPage = () => {
    setPagina(pages[0].page);
  };

  return (
    <div className="App">
      <SideBar
        perfilPage={perfilPage}
        mesasPage={mesasPage}
        cardapioPage={cardapioPage}
        estoquePage={estoquePage}
        rendaPage={rendaPage}
        settingsPage={settingsPage}
        helpPage={helpPage}
      />

      {pagina === "perfil" && <Perfil />}

      {pagina === "mesas" && <Mesas />}

      {pagina === "cardapio" && <Cardapio />}

      {pagina === "estoque" && <Estoque />}

      {pagina === "renda" && <Renda />}

      {pagina === "config" && <Configuracoes />}

      {pagina === "ajuda" && <Ajuda />}
    </div>
  );
}

export default App;
