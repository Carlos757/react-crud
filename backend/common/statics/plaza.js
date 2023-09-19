const dayjs = require('dayjs');
const localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat);

module.exports = (Plaza) => {
  Plaza.getPlazas = async (req, res) => {
    const response = {
      title: 'Plazas',
      description: 'Modulo de plazas',
      data: [],
      columns: [
        { key: 'name', name: 'Nombre', size: 'xs' },
        { key: 'address', name: 'Domicilio', size: 'xs' },
        { key: 'status', name: 'Estatus', size: 'xs' },
        { key: 'createdAt', name: 'Creado', type: 'date', size: 'xs' },
        { key: 'updatedAt', name: 'Actualizado', type: 'date', size: 'xs' },
      ],
    };

    try {
      const requestPlazas = await Plaza.find({
        where: { status: true },
        order: 'createdAt'
      });

      if (!requestPlazas) {
        throw new Error('Ha ocurrido un error al obtener las plazas')
      }

      const plazas = JSON.parse(JSON.stringify(requestPlazas))

      response.data = plazas.map((plaza) => ({
        ...plaza,
        createdAt: dayjs(plaza.createdAt).format('DD/MM/YYYY'),
        updatedAt: dayjs(plaza.updatedAt).format('DD/MM/YYYY'),
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
