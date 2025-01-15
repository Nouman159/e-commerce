import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Navbar from "./Components/Navbar";

function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Hello */}
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
