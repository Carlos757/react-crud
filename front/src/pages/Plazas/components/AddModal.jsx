/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import Button from "@mui/material/Button";
import {
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const AddModal = ({ open, handleClose, handleConfirm, plaza, loading }) => {
  const initialState = { name: "", address: "" };
  const [form, setForm] = useState({ ...initialState });

  useEffect(() => {
    if (open && plaza) {
      setForm({ id: plaza.id, name: plaza.name, address: plaza.address });
    } else {
      setForm(initialState);
    }
  }, [open]);

  const handleCloseDialog = () => {
    handleClose();
    setForm(initialState);
  };

  return (
    <Dialog open={open} onClose={handleCloseDialog} fullWidth maxWidth="xs">
      <DialogTitle>{plaza ? "Editar plaza" : "Nueva plaza"}</DialogTitle>
      <DialogContent>
        <DialogContentText>Ingresa los datos de la plaza</DialogContentText>
        <TextField
          required
          autoFocus
          margin="dense"
          label="Nombre"
          fullWidth
          disabled={loading}
          value={form.name}
          onChange={({ target: { value } }) =>
            setForm({ ...form, name: value })
          }
        />
        <TextField
          required
          margin="dense"
          label="Domicilio"
          fullWidth
          disabled={loading}
          value={form.address}
          onChange={({ target: { value } }) =>
            setForm({ ...form, address: value })
          }
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDialog} disabled={loading}>
          Cancelar
        </Button>
        <Button
          onClick={() => handleConfirm(form)}
          variant="contained"
          disabled={!form.address || !form.name || loading}
        >
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

AddModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleConfirm: PropTypes.func.isRequired,
  plaza: PropTypes.any,
  loading: PropTypes.bool,
};

export default AddModal;
