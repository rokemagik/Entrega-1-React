import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";

function App() {
    return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="¡Bienvenido a TechZone!" />}
          />
          <Route
            path="/categoria/:idCategoria"
            element={<ItemListContainer greeting="Categoría seleccionada" />}
          />
          <Route path="/detalle/:idProducto" element={<ItemDetailContainer />} />
          <Route path="*" element={<h2>Error 404 - Página no encontrada</h2>} />
        </Routes>
      </BrowserRouter>
    );
}

export default App
