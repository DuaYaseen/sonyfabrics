const apiURL = import.meta.env.VITE_API_URL;

const res = await axios.post(`${apiURL}/api/login`, user);
