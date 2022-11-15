import { MdLocationOn } from "react-icons/md";

type Props = {
  data: any;
};

const BestPackageCard = ({ data }: Props) => {
  return (
    <div className="md:flex gap-4 bg-white md:p-4 p-4 rounded-br-xl rounded-tl-xl shadow-xl hover:bg-gray-900 hover:text-white transition duration-300 ease-in pb-3 mb-4 ">
      <div>
        <img
          className="sm:w-56 md:h-24 md:w-24  mt-2 md:rounded rounded-lg md:hover:scale-110 ease-in duration-200"
          src={data?.image}
          alt=""
        />
      </div>
      <div className="">
        <h3 className="text-xl font-poppins md:ml-1">St. Martin's Island</h3>
        <div className="flex items-center">
          <p>
            <MdLocationOn />
          </p>
          <p>Cox's Bazar</p>
        </div>
        <p className="md:ml-1">Discover two of South America...</p>
        <button className="text-white bg-indigo-600 px-2 md:ml-1 rounded-xl mt-1 hover:bg-white  hover:text-gray-900">
          view details
        </button>
      </div>
    </div>
  );
};

export default BestPackageCard;
