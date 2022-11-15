import card1 from "../../../images/cards/card1.png";
import card2 from "../../../images/cards/card2.png";
import card3 from "../../../images/cards/card3.png";
import BestPackageCard from "./BestPackageCard";

const bestPackages = [
  {
    image: card1,
    title: "St. Martin's Island",
    location: "Cox's Bazar",
    description: "Discover two of South America...",
  },
  {
    image: card2,
    title: "St. Martin's Island",
    location: "Cox's Bazar",
    description: "Discover two of South America...",
  },
  {
    image: card3,
    title: "St. Martin's Island",
    location: "Cox's Bazar",
    description: "Discover two of South America...",
  },
  {
    image: card1,
    title: "St. Martin's Island",
    location: "Cox's Bazar",
    description: "Discover two of South America...",
  },
];

const PackagesHome = () => {
  return (
    <div className="bg-[#EBF0F4] p-5 mb-6 ">
      <div className="container mx-auto">
        <h2 className="text-2xl text-center capitalize my-4 font-poppins">
          Best Packages for you
        </h2>
        <hr className="w-24 rounded-lg bg-indigo-600 mx-auto" />

        {/* CARDS-AREA****************************** */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10">
          {bestPackages?.map((data: any) => (
            <BestPackageCard data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackagesHome;
