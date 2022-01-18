import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./components/views/Checkout";
import Shop from "./components/views/Shop";
import Layout from "./components/views/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Shop />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
