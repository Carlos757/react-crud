import React, { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";

// Components
import Drawer from "../components/Drawer";
import TopBar from "../components/TopBar";

// API
import { apiCall } from "../api/crud";
import Snackbar from "../components/Snackbar";

const Inicio = () => {
  return (
    <Typography variant="h2" align="center">
      Bienvenido!
    </Typography>
  );
};

export default Inicio;
