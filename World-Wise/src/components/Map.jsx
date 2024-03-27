/* eslint-disable no-unused-vars */
import { useNavigate, useSearchParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import styles from "./Map.module.css";
import { useState } from "react";
import { useCities } from "../contexts/CitiesContext";

function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mapContainer, setMapContainer] = useState([40, 0]);
  const navigate = useNavigate();
  const { cities } = useCities();

  const mapLat = searchParams.get("lat");
  const mapLng = searchParams.get("lng");

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={mapContainer}
        // center={[mapLat, mapLng]}
        zoom={15}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.emoji}</span>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={[mapLat || 40, mapLng || 0]} />
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

export default Map;
