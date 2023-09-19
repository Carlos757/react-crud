import { useState } from "react";
import PropTypes from "prop-types";

// MUI
import {
  Paper,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const CustomTable = ({ columns = [], rows = [], handleDialog }) => {
  const menuInitialState = {
    show: false,
    reference: null,
    item: null,
  };

  const [menu, setMenu] = useState({ ...menuInitialState });

  const handleShowMenu = (event, item) => {
    setMenu({
      show: true,
      reference: event.currentTarget,
      item,
    });
  };

  const handleAction = (type) => {
    handleDialog(type, menu.item);
    setMenu({ ...menu, show: false });
  };

  const actions = [
    {
      key: "edit",
      description: "Editar",
      icon: <EditIcon />,
      action: () => handleAction("edit"),
    },
    {
      key: "delete",
      description: "Eliminar",
      icon: <DeleteIcon />,
      action: () => handleAction("delete"),
    },
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column, index) => (
              <TableCell key={`column-${index}`}>{column.name}</TableCell>
            ))}
            <TableCell align="center">Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              {columns.map((column, index) => (
                <TableCell key={`row-${index}`}>{row[column.key]}</TableCell>
              ))}
              <TableCell align="center">
                <IconButton
                  size="small"
                  onClick={(event) => handleShowMenu(event, row)}
                >
                  <MoreHorizIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Menu
        open={menu.show}
        onClose={() => setMenu(menuInitialState)}
        anchorEl={menu.reference}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
      >
        {actions.map((action, i) => (
          <MenuItem key={`action-${i}`} onClick={action.action}>
            <ListItemIcon>{action.icon}</ListItemIcon>
            <ListItemText>{action.description}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </TableContainer>
  );
};

CustomTable.propTypes = {
  columns: PropTypes.array,
  rows: PropTypes.array,
  handleDialog: PropTypes.func,
};


export default CustomTable;
