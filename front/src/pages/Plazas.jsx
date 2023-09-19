import { useState, useEffect } from "react";
import CustomTable from "../components/CustomTable";
import { apiCall } from "../api/crud";
import { useDispatch } from "react-redux";
import { setSnackbar } from "../appSlice";
import { Container, Typography } from "@mui/material";

const Plazas = () => {
  const dispatch = useDispatch();
  const [plazas, setPlazas] = useState([]);

  useEffect(() => {
    getPlazas();
  }, []);

  const getPlazas = async () => {
    try {
      const requestDaily = await apiCall({
        method: "GET",
        endpoint: "/plazas/obtener",
      });

      setPlazas(requestDaily);
    } catch (err) {
      console.log(err);
      dispatch(setSnackbar({ open: true, message: err.message }));
    }
  };

  return (
    <Container sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <Typography variant="h5">{plazas.title}</Typography>
      <Typography variant="body2">{plazas.subtitle ?? "-"}</Typography>
      <CustomTable
        loading={false}
        columns={plazas.columns}
        rows={plazas.data}
      />
    </Container>
  );
};

export default Plazas;
