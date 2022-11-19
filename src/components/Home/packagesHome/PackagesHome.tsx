import axios from "axios";
import { useQuery } from "react-query";
import BestPackageCard from "./BestPackageCard";
const PackagesHome = () => {
  const fetchUser = async () => {
    const response = await axios.get(
      "http://localhost:5000/api/package/mostpopular"
    );
    return response.data;
  };
  const { data: alldata, isLoading, error } = useQuery("user", fetchUser);
  console.log(alldata);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <h1>Error...</h1>;
  }
  return (
    <div className="bg-[#EBF0F4] p-5 py-10 ">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold  text-center uppercase text-sky-500 my-4 font-poppins">
          Best Packages for you
        </h2>
        <hr className="w-24 rounded-lg bg-indigo-600 mx-auto" />

        {/* CARDS-AREA****************************** */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10">
          {alldata?.data?.map((data: any) => (
            <BestPackageCard data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackagesHome;
