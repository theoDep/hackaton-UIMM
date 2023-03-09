import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ProfileCard({ username, avatar, title, favorites, discoveries }) {
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://localhost:1337/api/badges?populate=*");
      const result = await response.json();
      setBadges([result.data[0], result.data[1]]);
    };

    getData();
  }, []);

  return (
    badges && (
      <div className="flex border items-center justify-center flex-col p-8">
        <p>Bon retour</p>
        <h1 className="text-2xl font-bold">{username}</h1>
        <div className="avatar p-4">
          <div className="w-24 rounded-full">
            <img src={avatar} />
          </div>
        </div>
        <h2 className="text-xl font-bold pb-5">{title}</h2>
        <div className="flex gap-2 flex-wrap justify-center items-center">
          {badges.map((badge) => (
            <img
              className="h-24"
              src={`http://localhost:1337${badge.attributes.image.data.attributes.url}`}
            ></img>
          ))}
          <Link className="text-primary border-none text-3xl ml-4" to={`/badges`}>
            +
          </Link>
        </div>
        <div>
          <h2 className="text-xl font-bold p-5">Mes lieux favoris</h2>
          <div className="flex gap-2 flex-wrap justify-center items-center">
            {favorites.map((favorite) => (
              <div
                className="card w-72 bg-base-100 shadow-xl image-full z-0"
                key={crypto.randomUUID()}
              >
                <figure>
                  <img src="https://picsum.photos/500/200" alt="Shoes" />
                </figure>
                <div className="card-body">
                  <div className="card-actions justify-end">
                    <button className="">
                      <FontAwesomeIcon icon={faHeart} className="text-red-500 text-2xl" />
                    </button>
                  </div>
                  <h2 className="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
              </div>
            ))}
          </div>
          <h2 className="text-xl font-bold p-5">Mes decouvertes</h2>
          <div className="flex gap-2 flex-wrap justify-center items-center">
            {discoveries.map((discovery) => (
              <div
                className="card w-72 bg-base-100 shadow-xl image-full z-0"
                key={crypto.randomUUID()}
              >
                <figure>
                  <img src="https://picsum.photos/500/200" alt="Shoes" />
                </figure>
                <div className="card-body">
                  <div className="card-actions justify-end">
                    <button className="">
                      <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-2xl" />
                    </button>
                  </div>
                  <h2 className="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
}
