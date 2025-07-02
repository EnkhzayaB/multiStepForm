import express from "express";
import { createStepOne } from "../controllers/step1.controller";

const stepOneRouter = express.Router();

stepOneRouter.get("/");
stepOneRouter.post("/", createStepOne);

export default stepOneRouter;
