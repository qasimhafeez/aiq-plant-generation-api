
export const transformPlant = (plant: any) => {
    return {
        plantName: plant["Plant name"],
        state: plant["Plant state abbreviation"],
        plantNetGeneration: parseFloat(plant["Plant annual net generation (MWh)"]) || 0,
        oilNetGeneration: parseFloat(plant["Plant annual oil net generation (MWh)"]) || 0,
        gasNetGeneration: parseFloat(plant["Plant annual gas net generation (MWh)"]) || 0,
        ozoneSeasonNetGeneration: parseFloat(plant["Plant ozone season net generation (MWh)"]) || 0,
        latitude: parseFloat(plant["Plant latitude"]),
        longitude: parseFloat(plant["Plant longitude"]),
    }
}