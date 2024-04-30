import axios from "axios";
import { IPlant } from "../interface";

const API_URL = "http://localhost:6005/api/plants";

export interface IPlantResponse {
  success: boolean;
  states?: string[];
  plants: IPlant[];
}

export const getPlants: (topN?: number) => Promise<IPlantResponse> = async (
  topN: number = 25
) => {
  try {
    const resp = await axios.get(`${API_URL}/${topN}`);
    return resp.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getPlantsByState: (
  state: string
) => Promise<IPlantResponse> = async (state) => {
  try {
    const resp = await axios.get(`${API_URL}/state/${state}`);
    return resp.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
