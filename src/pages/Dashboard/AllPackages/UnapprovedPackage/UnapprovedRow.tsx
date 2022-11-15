import { BiCheck, BiTrashAlt } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";

type Props = {};

const UnapprovedRow = (props: Props) => {
  return (
    <tr>
      <td className="border-0 border-b px-4 py-2">
        <div className="flex gap-2 items-center">
          <img
            className="w-14 h-14 object-cover rounded border-4 "
            src="http://localhost:3000/static/media/card1.7f4575419f91913a95fd.png"
            alt=""
          />
          <div>
            <span className="font-bold">St. Martin's Island</span>
            <span className="flex items-center gap-2">
              <MdLocationOn /> Cox's Bazar
            </span>
          </div>
        </div>
      </td>
      <td className="border-0 border-b px-4 py-2">
        <span className="bg-blue-100 text-blue-500 p-1 inline-block rounded">
          189 $
        </span>
      </td>
      <td className="border-b px-4 py-2">
        <div className="flex items-center gap-2">
          <p>
            <MdLocationOn />
          </p>
          <p>Cox's Bazar</p>
        </div>
      </td>
      <td className=" border-0 border-b b px-4 py-2">
        Discover two of South America...
      </td>
      <td className="border-0 border-b px-4 py-2">
        <div className="flex items-center gap-2">
          <button className="bg-green-500 text-green-100 rounded-full p-1 px-2 flex items-center  capitalize gap-2">
            <BiCheck /> Confirm
          </button>
          <button className="bg-red-100 text-red-500 flex items-center gap-1 p-1 px-2 rounded-full capitalize">
            <BiTrashAlt /> Blocked
          </button>
        </div>
      </td>
    </tr>
  );
};

export default UnapprovedRow;
