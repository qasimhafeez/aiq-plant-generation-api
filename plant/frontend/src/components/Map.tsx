import React from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import { IPlant } from '../interface';

interface MapProps {
    plants: IPlant[];
    setActivePlant: (plant: IPlant) => void;
    activePlant: IPlant;
}

const Map: React.FC<MapProps> = ({ plants, setActivePlant, activePlant }) => {
    const icon = new L.Icon({
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    const activeIcon = new L.Icon({
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    return (
        <MapContainer style={{ height: "600px" }} center={[plants?.[0]?.latitude, plants?.[0]?.longitude]} zoom={2} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {plants.map((plant: IPlant) => (
                <Marker
                    eventHandlers={{
                        click: () => setActivePlant(plant)
                    }}
                    icon={activePlant.plantName === plant.plantName ? activeIcon : icon}
                    key={plant.plantName}
                    position={[plant.latitude, plant.longitude]}
                />
            ))}
        </MapContainer>
    );
};

export default Map;
