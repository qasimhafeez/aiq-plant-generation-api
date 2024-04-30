import xlsx from "xlsx";
import { IPlant } from "interface";
import { transformPlant } from "../utils/helper";

const { readFile, utils } = xlsx;

export class PlantService {
  private dataFilePath: string;

  // store data in memory
  private data: IPlant[] = [];

  constructor(dataFilePath: string) {
    this.dataFilePath = dataFilePath;
  }

  public async getAllPlants(): Promise<IPlant[]> {
    // check if data is already loaded
    if (this.data.length > 0) {
      return this.data;
    }
    const jsonData = await this.parseData();
    const transformedPlants = jsonData.map((plant) => transformPlant(plant));
    // store data in memory
    this.data = transformedPlants;
    return this.data;
  }

  public async getPlantsByState(state: string): Promise<IPlant[]> {
    // check if data is already loaded
    if (this.data.length === 0) {
      const jsonData = await this.parseData();
      const transformedPlants = jsonData.map((plant) => transformPlant(plant));
      this.data = transformedPlants;
    }
    // filter data by state
    return this.data.filter((plant) => plant.state === state);
  }

  private async parseData(): Promise<any[]> {
    const workbook = readFile(this.dataFilePath);
    const worksheet = workbook.Sheets["PLNT21"];
    const jsonData = utils.sheet_to_json(worksheet);
    jsonData.shift(); // Remove header row
    return jsonData;
  }
}
