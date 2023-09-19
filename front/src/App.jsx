/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container } from "@mui/material";

// Components
import Drawer from "./components/Drawer";
import Snackbar from "./components/Snackbar";
import Inicio from "./pages/Inicio";
import Plazas from "./pages/Plazas";

// API
import { apiCall } from "./api/crud";

// Redux
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

  return (
    <BrowserRouter>
      <Container>
        <Drawer
          modules={modules}
          routes={
            <Routes>
              <Route path="/" element={<Navigate to="/inicio" replace />} />
              <Route path="/inicio" element={<Inicio />} />
              <Route path="/plazas" element={<Plazas />} />
              <Route path="/sucursales" element={<Plazas />} />
            </Routes>
          }
        />
        <Snackbar />
      </Container>
    </BrowserRouter>
  );
}
