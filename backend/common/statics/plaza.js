module.exports = (Plaza) => {
  Plaza.getPlazas = async (req, res) => {
    const response = {
      title: 'Plazas',
      data: [],
      columns: [
        { key: 'name', name: 'Nombre', size: 'xs' },
        { key: 'address', name: 'Domicilio', size: 'xs' },
        { key: 'status', name: 'Estatus', size: 'xs' },
        { key: 'createdAt', name: 'Creado', size: 'xs' },
      ],
    };

    try {
      const requestPlazas = await Plaza.find({
        order: 'name'
      });

      if (!requestPlazas) {
        throw new Error('Ha ocurrido un error al obtener las plazas')
      }

      const plazas = JSON.parse(JSON.stringify(requestPlazas))

      response.data = plazas.map((plaza) => ({
        ...plaza,
        status: plaza.status ? 'Activa' : 'Inactiva'
      }));

      res.status(200).send(response);
    } catch (err) {
      console.log('err', err);
      response.error = { message: err.message };
      res.status(500).send(response);
    }
  }
};
