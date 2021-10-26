import express from "express";
import cors from "cors";
import router from "./routes/routes";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", router);

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
});
