export const apiCall = async ({ method, endpoint, body = null }) => {
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

    const data = await response.json();
    if (data.error) {
      throw new Error(data.error.message ?? 'Error in API request')
    }

    return data

  } catch (error) {
    console.error(error);
    throw error;
  }
}
