import { useState } from "react";
import CardList, { distance } from "./CardList";
import KmSort from "./KmSort";

export default function SearchBar({ gisements }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortState, setSortState] = useState(false);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredGisements = [];
  for (let i = 0; i < gisements.length; i++) {
    let nomGisement = gisements[i].lib_gisement.toLowerCase();
    let descGisement = gisements[i].desc_gisement.toLowerCase();
    if (
      nomGisement.search(searchQuery.toLowerCase()) >= 0 ||
      nomGisement.search(searchQuery) >= 0 ||
      nomGisement
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .search(searchQuery.toLowerCase()) >= 0 ||
      nomGisement
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .search(searchQuery) >= 0 ||
      descGisement.search(searchQuery.toLowerCase()) >= 0 ||
      descGisement.search(searchQuery) >= 0 ||
      descGisement
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .search(searchQuery.toLowerCase()) >= 0 ||
      descGisement
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .search(searchQuery) >= 0
    ) {
      filteredGisements.push(gisements[i]);
    }
  }

  function handleKmSort() {
    const sortedGisements = [...filteredGisements].sort((a, b) => {
      const distA = distance(49.739365, 4.7231979, a.latitude, b.longitude);
      const distB = distance(49.739365, 4.7231979, b.latitude, b.longitude);
      if (distA > distB) {
        return sortState ? -1 : 1;
      }
      if (distA < distB) {
        return sortState ? 1 : -1;
      }
      return 0;
    });
    return sortedGisements;
  }

  return (
    <div className="font-sans text-black bg-white flex flex-col items-center justify-center">
      <div className="border rounded overflow-hidden flex">
        <button className="flex items-center justify-center px-4 border-l">
          <svg
            className="h-4 w-4 text-grey-dark"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
          </svg>
        </button>
        <input
          type="text"
          className="px-4 py-2"
          placeholder="Rechercher..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <KmSort handleKmSort={handleKmSort} sortState={sortState} setSortState={setSortState} />
      </div>
      <CardList filteredGisements={handleKmSort()} />
    </div>
  );
}
