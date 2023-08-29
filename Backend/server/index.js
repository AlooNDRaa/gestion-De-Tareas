import express from 'express';
const app = express();


const PORT = process.env.PORT || 3000;

app.get("/", (req, res) =>{
    res.send("Hello home Server, im so happy")
})

app.get("/api", (req, res) => {
    res.json({ message: "Hello from json's Server" })
})

app.get("/api/V1", (req, res) => {
    res.json({ message: "Hello from V1" })
})

app.listen(PORT, () =>{
    console.log(`Server is running on  https://localhost:${PORT}`);
})