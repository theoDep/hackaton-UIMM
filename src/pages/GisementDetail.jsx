import { useParams } from "react-router";
import gisements from "../mock/gisements.json";
import React from "react";

export default function GisementDetail() {
  const { gisementId } = useParams();
  const gisement = gisements.find((e) => e.id_gisement == gisementId);

  return (
    <section className="flex justify-center flex-col">
      <h1 className="text-3xl text-center font-semibold my-6">{gisement.lib_gisement}</h1>
      <div className="avatar">
        <div className="w-full rounded-xl">
          <img src="https://picsum.photos/800/500" />
        </div>
      </div>
      <div>
        <h2 className="text-2xl text-center my-6">Description :</h2>
        <div className="card w-full bg-base-100 shadow-2xl">
          <div className="card-body">
            <p>{gisement.desc_gisement}</p>
          </div>
        </div>
        <h2 className="text-2xl text-center my-6">Coordonnées :</h2>
        <div className="card w-full bg-base-100 shadow-2xl">
          <div className="card-body">
            <p>Latitude : {gisement.latitude}</p>
            <p>Longitude : {gisement.longitude}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
