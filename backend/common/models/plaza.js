const static = require('../statics/plaza')

module.exports = (Plaza) => {
  Plaza.on('dataSourceAttached', (model) => static(model))

  Plaza.remoteMethod('getPlazas', {
    http: {
      path: '/obtener',
      verb: 'GET',
    },
    accepts: [
      { arg: 'req', type: 'object', http: { source: 'req' } },
      { arg: 'res', type: 'object', http: { source: 'res' } },
    ],
    returns: {
      arg: 'response',
      type: 'object',
      root: true,
    },
  });

};
