import sort_down from "../assets/images/sort_down.svg";
import sort_up from "../assets/images/sort_up.svg";

export default function KmSort({ handleKmSort, sortState, setSortState }) {
  function handleKmClick(sortState) {
    handleKmSort();
    setSortState(!sortState);
  }

  return (
    <button className="btn" onClick={() => handleKmClick(sortState)}>
      <span className="mr-2 text-xl">km</span>
      <div className="h-fit">
        <img
          className={`h-10 ${!sortState ? "hidden" : ""}`}
          src={sort_down}
          alt="Filtrage par le moins de kilimètre"
        />
        <img
          className={`h-10 ${sortState ? "hidden" : ""}`}
          src={sort_up}
          alt="Filtrage par le plus de kilimètre"
        />
      </div>
    </button>
  );
}
