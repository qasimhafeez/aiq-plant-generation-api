import { useEffect, useState } from 'react';

import { PlantInfoCard, Navbar } from './components';
import { IPlant } from './interface';
import Map from './components/Map';
import { getPlants, IPlantResponse } from './services';

function App() {
  const [plants, setPlants] = useState<IPlant[]>([]);
  const [activePlant, setActivePlant] = useState<IPlant>({} as IPlant);
  const [loading, setLoading] = useState<boolean>(true);

  const [statesList, setStatesList] = useState<string[]>([]);

  const setPlantsHandler = (plants: IPlant[]) => {
    setPlants(plants);
  }
  const setPlantsData = (data: IPlantResponse) => {
    setPlantsHandler(data.plants);
    setStatesList(data.states || []);
    setActivePlant(data.plants[0]);
  }

  useEffect(() => {
    const fetchPlants = async () => {
      setLoading(true);
      try {
        const data = await getPlants();
        setPlantsData(data)
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPlants();
  }, []);

  if (loading && plants.length === 0) return <section className='loader'><h1>Please wait we are loading data...</h1></section>;

  return (
    <>
      <Navbar setPlantsHandler={setPlantsHandler} statesList={statesList} />
      <div className='main-grid'>
        <Map plants={plants} setActivePlant={setActivePlant} activePlant={activePlant} />
        <PlantInfoCard plantData={activePlant} />
      </div>
    </>
  )
}

export default App;
