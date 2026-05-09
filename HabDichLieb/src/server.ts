import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

let remoteValue = "Hello";

app.get("/value", (_, res) => {
    res.json({ value: remoteValue });
});

app.post("/value", (req, res) => {
    remoteValue = req.body.value;
    res.json({ success: true });
});

app.listen(3000, () => {
    console.log("Server running");
});