import axios from "axios";

async function Data(query) {
  const url = `http://www.omdbapi.com/?i=tt3896198&apikey=9b36949d&s=${query}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (e) {
    console.error(e);
    return null; // Or throw e if you want to handle it upstream
  }
}

export default Data;
