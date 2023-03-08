import SearchBar from "../components/List/SearchBar";
import gisements from "../mocks/gisements.json";

export default function List() {
  return (
    <>
      <SearchBar gisements={gisements} />
    </>
  );
}
