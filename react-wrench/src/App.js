import "./App.css";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import useAxios from "./config/axios";
import JSToCSV from './pages/JSToCSV';
import ExcelToJS from './pages/ExcelToJS';

//
//
//
//
//

function App() {
  useAxios();

  return (
    <>
      <Routes>
        <Route path="/jstocsv" element={<JSToCSV />} />
        <Route path="/exceltojs" element={<ExcelToJS />} />
      </Routes>
    </>
  );
}

export default App;
