import "./App.css";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import useAxios from "./config/axios";
import Cookies from "js-cookie";

//
//
//
//
//

function App() {
  useAxios();

  console.log(Cookies.get("token"));

  async function fetch() {
    const { data } = await axios.get("/api/products");
    console.log(data);
  }
  return (
    <>
      <button onClick={fetch}>Click</button>
    </>
  );
}

export default App;

//
//
//
//
//
//
//
//
//
//
//

{
  /* <Routes>
<Route element={<AdminRoute />}>
  <Route path="/admin/products" element={<AdminProducts />} />
  <Route path="/admin/product/add" element={<AdminProductAdd />} />
  <Route path="/admin/product/:id" element={<AdminProductEdit />} />
</Route>
</Routes> */
}
