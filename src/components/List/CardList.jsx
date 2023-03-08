import { Link } from "react-router-dom";

function deg2rad(degrees) {
  return degrees * (Math.PI / 180);
}

// Formule de Haversine
export function distance(lat1, lon1, lat2, lon2) {
  const earthRadius = 6371; // rayon de la Terre en kilomètres
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = (earthRadius * c).toFixed(2); // distance en kilomètres
  return distance;
}

export default function CardList({ filteredGisements }) {
  return filteredGisements.map((gisement) => (
    <div key={gisement.id_gisement} className="card card-side bg-base-100 shadow-xl mt-4  m-6">
      <figure>
        <img
          className="h-full object-cover object-center"
          src={gisement.img_gisement}
          alt={gisement.libs_gisement}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{gisement.lib_gisement}</h2>
        <p className="line-clamp-3">{gisement.desc_gisement}</p>
        <div className="flex justify-between">
          <span>{distance(49.739365, 4.7231979, gisement.latitude, gisement.longitude)} km</span>
          <Link className="btn btn-sm bg bg-[#702315] hover:bg-[#49160d]" to={`/detail/${gisement.id_gisement}`}>
            Voir plus
          </Link>
        </div>
      </div>
    </div>
  ));
}
