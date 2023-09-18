import React, { useState, useEffect } from "react";
import CustomTable from "../components/CustomTable";
import { apiCall } from "../api/crud";

const Plazas = () => {
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
    }
  };

  return (
    <div>
      <CustomTable
        loading={false}
        columns={[
          { key: "name", name: "Nombre", size: "xs" },
          { key: "address", name: "Domicilio", size: "lg" },
          { key: "status", name: "Estatus", size: "xs" },
          /* {
            key: "createdAt",
            name: "Fecha de creación",
            size: "sm",
            type: "date",
          }, */
        ]}
        rows={plazas.data}
      />
    </div>
  );
};

export default Plazas;
