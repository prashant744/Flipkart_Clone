// component
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import DetailView from "./components/details/DetailView";
import Cart from "./components/cart/Cart";

import DataProvider from "./context/DataProvider";

import { Box } from "@mui/material";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <DataProvider className="App">
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 54 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<DetailView />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
