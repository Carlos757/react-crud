import * as React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container } from "@mui/material";

// Components
import Drawer from "./components/Drawer";
import TopBar from "./components/TopBar";

// API
import { apiCall } from "./api/crud";
import Snackbar from "./components/Snackbar";

import Inicio from "./pages/Inicio";
import Plazas from "./pages/Plazas";
import { useDispatch } from "react-redux";
import { setSnackbar } from "./appSlice";

export default function App() {
  const dispatch = useDispatch();
  const [modules, setModules] = useState([]);

  useEffect(() => {
    getModules();
  }, []);

  const getModules = async () => {
    try {
      const requestDaily = await apiCall({
        method: "GET",
        endpoint: "modulos",
      });

      setModules(requestDaily);
    } catch (err) {
      console.log(err);
      dispatch(setSnackbar({ open: true, message: err.message }));
    }
  };

  const url = "http://localhost:3000/api/";

  return (
    <BrowserRouter>
      <Container>
        <Drawer
          modules={modules}
          routes={
            <Routes>
              <Route path="/" element={<Navigate to="/inicio" replace />} />
              <Route path="/inicio" element={<Inicio url={url} />} />
              <Route path="/plazas" element={<Plazas url={url} />} />
              <Route path="/sucursales" element={<Plazas url={url} />} />
            </Routes>
          }
        />
        <Snackbar />
      </Container>
    </BrowserRouter>
  );
}
