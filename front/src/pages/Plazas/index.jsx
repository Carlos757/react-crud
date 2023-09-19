/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import CustomTable from "../../components/CustomTable";
import { apiCall } from "../../api/crud";
import { useDispatch } from "react-redux";
import { setSnackbar } from "../../appSlice";
import { Button, Typography } from "@mui/material";
import { Container, HeadContent } from "./styledComponents";

// Components
import AddModal from "./components/AddModal";
import DeleteModal from "./components/DeleteModal";

const Plazas = () => {
  const dispatch = useDispatch();

  const [plazas, setPlazas] = useState([]);
  const [plazaSelected, setPlazaSelected] = useState(null);
  const [showDialog, handleShowDialog] = useState(false);
  const [showDeleteDialog, handleShowDeleteDialog] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const handleConfirmPlaza = async (body) => {
    try {
      setLoading(true);

      const method = body.id ? "PATCH" : "POST";

      const requestPlaza = await apiCall({
        method,
        endpoint: "/plazas",
        body,
      });

      if (requestPlaza) {
        dispatch(
          setSnackbar({
            open: true,
            message: `Plaza ${
              body.id ? "actualizada" : "creada"
            } correctamente`,
          })
        );
      }

      handleCloseDialog();

      await getPlazas();
    } catch (err) {
      console.log(err);
      dispatch(setSnackbar({ open: true, message: err.message }));
    } finally {
      setLoading(false);
    }
  };

  const handleDialog = (type, value) => {
    setPlazaSelected(value);

    if (type === "edit") {
      handleShowDialog(true);
    } else if (type === "delete") {
      handleShowDeleteDialog(true);
    }
  };

  const handleCloseDialog = () => {
    handleShowDeleteDialog(false);
    handleShowDialog(false);
    setPlazaSelected(null);
  };

  return (
    <Container>
      <HeadContent>
        <div>
          <Typography variant="h5">{plazas.title}</Typography>
          <Typography variant="body2">{plazas.description ?? "-"}</Typography>
        </div>
        <Button variant="outlined" size="small" onClick={handleShowDialog}>
          Crear
        </Button>
      </HeadContent>
      <CustomTable
        loading={false}
        columns={plazas.columns}
        rows={plazas.data}
        handleDialog={handleDialog}
      />
      <AddModal
        open={showDialog}
        plaza={plazaSelected}
        handleClose={handleCloseDialog}
        handleConfirm={handleConfirmPlaza}
        loading={loading}
      />
      <DeleteModal
        open={showDeleteDialog}
        plaza={plazaSelected}
        handleClose={handleCloseDialog}
        handleConfirm={handleConfirmPlaza}
        loading={loading}
      />
    </Container>
  );
};

export default Plazas;
