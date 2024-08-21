import express from "express";
import db from "./koneksi.js";
import bodyParser from "body-parser";
import router from "./routes/route.js";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", router);

app.listen(PORT, () => {
  console.log("Server berjalan di http://localhost:" + PORT);
});
