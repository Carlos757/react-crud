export const requestAPI = async (request) => {
  try {
    let data = request.data ?? {}
    let filters = (request.filter) ? '?filter=' + JSON.stringify(request.filter) : ''
    let endpoint = request.endpoint || ''

    const url = request.host + '/api/' + request.resource + endpoint + filters

    let headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin',
      'Content-Type': 'application/json',
    }

    let options = {
      method: request.method,
      url,
      data,
      headers
    }

    if (request.cancelToken) {
      options.cancelToken = request.cancelToken;
    }

    const apiInstance = setupInterceptorsTo(axios.create())
    const response = await apiInstance(options)
    response.resource = request.resource

    return response
  } catch (err) {
    let message = 'Ha ocurrido un error inesperado, intentalo de nuevo más tarde.';

    if (axios.isCancel(err)) {
      message = 'La petición ha sido cancelada';
    } else {
      if (err.response) {
        if (err.response.status === Utils.constants.status.UNAUTHORIZED) {
          message = 'Sesión expirada.'
        } else {
          if (err.response.data && err.response.data.error) {
            message = err.response.data.error.message;
          }
        }
      }
    }

    return { error: { message } };
  }
}

export const apiCall = async ({ method, resource, endpoint, body = null }) => {
  const baseURL = 'http://localhost:3000/api/';

  const url = baseURL + endpoint;

  const options = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (body !== null) {
    options.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, options);

    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Error in API request');
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}
