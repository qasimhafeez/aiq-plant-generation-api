import { Request, Response } from "express";
import { PlantService } from "../services/plantServices";
import { IPlant } from "interface";

export class PlantController {
  private plantService: PlantService;

  constructor(dataFilePath: string) {
    this.plantService = new PlantService(dataFilePath);
  }

  // Handler for GET /api/plants
  public async getAllPlants(req: Request, res: Response): Promise<void> {
    try {
      const plants = await this.plantService.getAllPlants();
      const filterAllStates = plants.map((item: IPlant) => item.state);
      // remove duplicates
      const states = filterAllStates.filter(
        (item, index) => filterAllStates.indexOf(item) === index
      );
      states.unshift("Top N");
      const topN = Number(req.params.topn);

      // Sort plants by 'plantNetGeneration' in descending order
      const sortedPlants = plants.sort((a: IPlant, b: IPlant) => {
        return b.plantNetGeneration - a.plantNetGeneration;
      });

      const topNPlants = sortedPlants.slice(0, topN);

      //send response
      res.status(200).json({
        success: true,
        states: states,
        plants: topNPlants,
      });
    } catch (error) {
      console.error("Error fetching plants:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  // Handler for GET /api/plants/:state
  public async getPlantsByState(req: Request, res: Response): Promise<void> {
    const state = req.params.state;
    try {
      const plants = await this.plantService.getPlantsByState(state);
      res.status(200).json({
        success: true,
        plants,
      });
    } catch (error) {
      console.error("Error fetching plants by state:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
}
