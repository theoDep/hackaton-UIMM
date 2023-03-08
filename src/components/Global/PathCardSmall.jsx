import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function PathCardSmall({ title, picture, shortDescription }) {
  return (
    <div
      className="card w-72 bg-base-100 shadow-xl image-full z-0"
      key={crypto.randomUUID()}
    >
      <figure>
        <img src={picture} alt={title} />
      </figure>
      <div className="card-body">
        <div className="card-actions justify-end">
          <button className="">
            <FontAwesomeIcon icon={faHeart} className="text-red-500 text-2xl" />
          </button>
        </div>
        <h2 className="card-title">{title}</h2>
        <p>{shortDescription}</p>
      </div>
    </div>
  );
}
