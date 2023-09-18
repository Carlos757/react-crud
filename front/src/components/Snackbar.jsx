import { useSelector, useDispatch } from "react-redux";
import { setSnackbar } from "../appSlice";

// MUI
import { IconButton, Snackbar as Toast } from "@mui/material";
import Close from "@mui/icons-material/Close";

const Snackbar = () => {
  const dispatch = useDispatch();
  const snackbar = useSelector((state) => state.app.snackbar);

  const handleClose = () => {
    dispatch(setSnackbar({ open: false, message: "" }));
  };

  return (
    <Toast
      open={snackbar.open}
      anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
      onClose={handleClose}
      message={snackbar.message}
      autoHideDuration={snackbar.timer ?? 4000}
      action={
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <Close fontSize="small" />
        </IconButton>
      }
    />
  );
};

export default Snackbar;
