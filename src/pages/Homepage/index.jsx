import PathCardSmall from "../../components/Global/PathCardSmall";
import logo from "../../assets/logo.svg";

export default function Homepage() {
  const paths = [
    {
      title: "Le chemin des moulins",
      picture: "https://picsum.photos/300/200",
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Le chemin des moulins",
      picture: "https://picsum.photos/300/200",
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <>
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <div className="container p-8">
              <img className="w-full h-full" src={logo} alt="logo" />
            </div>
            <p className="px-8 pb-8 font-bold">
              Rejoignez une communaute de plus de 1239 passionnes de la nature
              et venez partager vos decouvertes !
            </p>
            <button className="btn btn-primary">Commencer l'aventure</button>
          </div>
        </div>
      </div>
      <section>
        <div className="container px-14 flex gap-5 flex-col">
          <p>Decouvrez nos derniers parcours</p>
          {paths.map((path) => (
            <PathCardSmall key={crypto.randomUUID()} {...path} />
          ))}
        </div>
      </section>
    </>
  );
}
