import express from "express";
// import mongoose from "mongoose";
// import stepOneRouter from "./routes/step1.route";

const server = express();
server.use(express.json());

const port = 3000;

// server.use("/form", stepOneRouter);

server.get("/", (_request, response) => {
  response.send("Hello zaya");
});

server.listen(port, () => {
  console.log(`Server aslaa ${port}`);
});
