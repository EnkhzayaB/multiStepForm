import { Request, Response } from "express";
import { Form } from "../models/form.model";
export const createStepOne = async (request: Request, response: Response) => {
  try {
    const stepOne = request.body;
    const createStepOne = await Form.create(stepOne);

    response.json({ success: true, data: createStepOne });
  } catch (error) {
    response.status(402).json({ success: false, error: error });
  }
};
