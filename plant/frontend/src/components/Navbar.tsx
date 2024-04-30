import { memo, useEffect, useState } from "react";
import { getPlants, getPlantsByState, IPlantResponse } from "../services";
import { IPlant } from "../interface";


interface NavbarProps {
    setPlantsHandler: (plants: IPlant[]) => void
    statesList: string[]
}


export const Navbar: React.FC<NavbarProps> = memo(({ setPlantsHandler, statesList }) => {

    const [state, setState] = useState<string>("Top N");

    const [loader, setLoader] = useState<boolean>(false);

    const handleDropdownChange = (event: any) => {
        setState(event.target.value);
    };

    useEffect(() => {
        const fetchPlatesByState = async () => {
            setLoader(true);
            try {
                let response: IPlantResponse;
                if (state === "Top N") {
                    response = await getPlants();
                }
                else {
                    response = await getPlantsByState(state);
                }
                const data = response.plants;
                setPlantsHandler(data);
                setLoader(false);
            } catch (error) {
                setLoader(false);
                console.error("Error fetching plants by state:", error);
            }
        }

        fetchPlatesByState();
    }, [state]);

    return (
        <nav className="navbar">
            <div className="navbar-heading">
                <h1>Plants Data</h1>
                <h3>Top N = 25</h3>
            </div>
            {loader && <small>Loading State Data...</small>}
            <div className="navbar-dropdown">
                <label htmlFor="states">Select State: {" "}</label>
                <select value={state} onChange={handleDropdownChange}>
                    {statesList.map((state) => (
                        <option key={state} value={state}>{state}</option>
                    ))}
                </select>
            </div>
        </nav>
    );
})



const statesList = [
    "Top N", "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA"]