// api/omdb.js
import axios from "axios";
import dotenv from "dotenv";

dotenv.config(); // Needed for local development

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

export default async function handler(req, res) {
  const { title, page = 1 } = req.query;

  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }

  try {
    const response = await axios.get("https://www.omdbapi.com/", {
      params: {
        apikey: API_KEY,
        s: title,
        page,
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error("OMDB fetch error:", error.message);
    res.status(500).json({ error: "Failed to fetch from OMDB" });
  }
}
