import { MdLocationOn } from "react-icons/md";

type Props = {
  data: any;
};

const BestPackageCard = ({ data }: Props) => {
  console.log(data);
  return (
    <div className="md:flex flex-col group gap-4 bg-white md:p-3 rounded-br-xl rounded-tl-xl shadow-xl hover:bg-gray-900 hover:text-white transition duration-300 ease-in pb-3 mb-4 ">
      <div className="overflow-hidden sm:rounded">
        <img
          className="w-full sm:w-full md:h-auto md:w-full  sm:mt-2 sm:rounded-lg md:group-hover:scale-110 ease-in duration-200"
          src={data?.packageImages[0]}
          alt=""
        />
      </div>
      <div className="px-3 pb-3 mt-4 sm:mt-0">
        <div className="flex items-center justify-between my-1">
          <h3 className="text-xl font-poppins md:ml-1">{data?.name}</h3>
          <span className="bg-blue-100 text-blue-500 p-1 inline-block rounded">
            {data?.price}Taka
          </span>
        </div>
        <div className="flex items-center">
          <p>
            <MdLocationOn />
          </p>
          <span>{data?.origin}</span> to <span>{data?.destination}</span>
        </div>
        <p className="md:ml-1">{(data?.description).slice(0, 40)}....</p>
        <button className="bg-blue-500 text-blue-100 p-2 px-4 inline-block mt-3 capitalize">
          view details
        </button>
      </div>
    </div>
  );
};

export default BestPackageCard;
