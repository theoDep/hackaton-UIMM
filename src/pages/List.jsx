import SearchBar from "../components/SearchBar";
import gisements from "../mock/gisements.json";

export default function List() {
  return (
    <>
      <SearchBar gisements={gisements} />
    </>
  );
}
