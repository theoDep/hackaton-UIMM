import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Markers from "./Markers";
import data from "../../assets/data/listes-gisements-api.json";
import { useLocation, useNavigate } from "react-router-dom";
import IconLocation from "../../assets/images/pointer.svg";

const MapView = (props) => {
  const [state, setState] = useState({
    currentLocation: {
      lat: 48.8099651,
      lng: 1.3576768,
    },
    zoom: 13,
    data,

    userLocation: null,
  });
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Vérifier si la latitude et la longitude sont toutes deux présentes dans l'état de location
    if (location.state?.latitude && location.state?.longitude) {
      const currentLocation = {
        lat: location.state.latitude,
        lng: location.state.longitude,
      };
      setState((prevState) => ({
        ...prevState,
        currentLocation,
      }));
    } else {
      // Rediriger l'utilisateur vers la page /map-view si la latitude ou la longitude est manquante
      navigate("/map");
    }
  }, [location.state?.latitude, location.state?.longitude, navigate]);

  useEffect(() => {
    // Récupérer la position géographique actuelle de l'utilisateur
    const success = (position) => {
      const { latitude, longitude } = position.coords;
      const userLocation = { lat: latitude, lng: longitude };
      setState((prevState) => ({
        ...prevState,
        userLocation,
        zoom: 16, // Zoom sur la position de l'utilisateur
      }));
    };
    const error = (error) => {
      console.error(error);
    };
    navigator.geolocation.getCurrentPosition(success, error);
  }, [setState]);

  useEffect(() => {
    // Mettre à jour la position de l'utilisateur et le centre de la carte lorsque sa position change
    if (state.userLocation) {
      setState((prevState) => ({
        ...prevState,
        currentLocation: state.userLocation,
      }));
    }
  }, [state.userLocation, setState]);

  useEffect(() => {
    // Mettre à jour le centre de la carte et le niveau de zoom en fonction de la position de l'utilisateur
    if (state.userLocation) {
      setState((prevState) => ({
        ...prevState,
        currentLocation: state.userLocation,
        zoom: 16,
      }));
    }
  }, [state.userLocation, setState]);

  // Afficher une carte centrée sur la position actuelle de l'utilisateur et des marqueurs pour les lieux dans les données
  return (
    <div className="overflow-hidden">
      <MapContainer
        center={state.currentLocation}
        zoom={state.zoom}
        whenReady={(map) => {
          // Vérifier si la position de l'utilisateur est disponible
          if (state.userLocation) {
            // Zoomer sur la position de l'utilisateur
            map.setView(state.userLocation, 16);
            console.log(state.userLocation);
          }
        }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker
          position={state.currentLocation}
          icon={L.icon({ iconUrl: IconLocation, iconSize: [32, 32] })}
        >
          <Popup>Votre position</Popup>
        </Marker>
        <Markers places={state.data} />
      </MapContainer>
    </div>
  );
};

export default MapView;
