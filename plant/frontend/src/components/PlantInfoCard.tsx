import { IPlant } from "../interface";

interface IPlantInfoCard {
  plantData: IPlant;
}

export const PlantInfoCard: React.FC<IPlantInfoCard> = ({ plantData }) => {
  return (
    <div className="power-plant-card">
      <h2>{plantData.plantName}</h2>
      <p><strong>State:</strong> {plantData.state}</p>
      <p><strong>Plant Annual Net Generation:</strong> {plantData.plantNetGeneration} MW</p>
      <p><strong>Oil Net Generation:</strong> {plantData.oilNetGeneration} MW</p>
      <p><strong>Gas Net Generation:</strong> {plantData.gasNetGeneration} MW</p>
      <p><strong>Ozone Season Net Generation:</strong> {plantData.ozoneSeasonNetGeneration} MW</p>
      <p><strong>Latitude:</strong> {plantData.latitude}</p>
      <p><strong>Longitude:</strong> {plantData.longitude}</p>
    </div>
  );
}
