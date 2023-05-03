import axios from "axios";

export default async function handler(req, res) {
  const { merchant_number, password } = req.body;
  const response = await axios.post("", { merchant_number, password });
  res.status(response.status).json(response.data);
}
