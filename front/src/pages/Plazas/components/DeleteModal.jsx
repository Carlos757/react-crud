import PropTypes from "prop-types";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const DeleteModal = ({ open, handleClose, handleConfirm, plaza, loading }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Eliminar plaza</DialogTitle>
      <DialogContent>
        <DialogContentText>
          ¿Estas seguro de eliminar esta plaza?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} disabled={loading}>
          Cancelar
        </Button>
        <Button
          onClick={() => handleConfirm({ id: plaza.id, status: false })}
          disabled={loading}
          color="error"
        >
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

DeleteModal.propTypes = {
  open: PropTypes.bool.isRequired,
  plaza: PropTypes.object,
  handleClose: PropTypes.func.isRequired,
  handleConfirm: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

export default DeleteModal;
