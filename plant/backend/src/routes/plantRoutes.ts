import express, { Request, Response } from "express";
import { PlantController } from "../controllers/plantControllers";

const router = express.Router();

// Create a new instance of PlantController with the data file path
const dataFilePath = "./data/eGRID2021_data.xlsx";
const plantController = new PlantController(dataFilePath);

// Endpoint to retrieve all power plant data
router.get("/:topn", async (req: Request, res: Response) => {
  await plantController.getAllPlants(req, res);
});

// Endpoint to filter power plant data by state
router.get("/state/:state", async (req: Request, res: Response) => {
  await plantController.getPlantsByState(req, res);
});

export default router;
