import {
  BiChevronLeft,
  BiChevronRight,
  BiEditAlt,
  BiPlus,
  BiTrashAlt,
} from "react-icons/bi";

type Props = {};

const PackageList = (props: Props) => {
  return (
    <div className="font-montserrat">
      <div className="title flex items-center justify-between my-5">
        <h1 className="text-2xl font-bold">Packages</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2">
          <BiPlus /> Add Package
        </button>
      </div>

      <div className="p-5 my-5 bg-white shadow border rounded">
        <div className="flex items-center justify-between gap-4">
          <div className="w-auto">
            <input
              type="text"
              className="w-full border border-gray-300 rounded p-4"
              placeholder="Search Package"
            />
          </div>
          <div className="w-auto">
            <select
              name=""
              id=""
              className="w-full border border-gray-300 rounded px-2 py-1"
            >
              <option value="">All</option>
              <option value="">Active</option>
              <option value="">Inactive</option>
            </select>
          </div>
        </div>

        {/* Packages Table */}
        <div className="mt-5">
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="py-3 px-4 w-96">Name</th>
                <th className="py-3 px-4">Price</th>
                <th className="py-3 px-4">Origin</th>
                <th className="py-3 px-4">Destination</th>
                <th className="py-3 px-4">Package Type</th>
                <th className="py-3 px-4">Start Date</th>
                <th className="py-3 px-4">Return Date</th>
                <th className="py-3 px-4">View</th>
                <th className="py-3 px-4 w-36">Status</th>
                <th className="py-3 px-4 w-36">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-4">Basic</td>
                <td className="py-3 px-4">$100</td>
                <td className="py-3 px-4">USA</td>
                <td className="py-3 px-4">Nepal</td>
                <td className="py-3 px-4">Basic</td>
                <td className="py-3 px-4">2021-10-10</td>
                <td className="py-3 px-4">2021-10-20</td>
                <td className="py-3 px-4">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    View
                  </button>
                </td>
                <td className="py-3 px-4">
                  <span className="bg-green-500 text-white px-2 py-1 rounded">
                    Active
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ">
                      <BiEditAlt />
                    </button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 ">
                      <BiTrashAlt />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4">Basic</td>
                <td className="py-3 px-4">$100</td>
                <td className="py-3 px-4">USA</td>
                <td className="py-3 px-4">Nepal</td>
                <td className="py-3 px-4">Basic</td>
                <td className="py-3 px-4">2021-10-10</td>
                <td className="py-3 px-4">2021-10-20</td>
                <td className="py-3 px-4">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    View
                  </button>
                </td>
                <td className="py-3 px-4">
                  <span className="bg-green-500 text-white px-2 py-1 rounded">
                    Active
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ">
                      <BiEditAlt />
                    </button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 ">
                      <BiTrashAlt />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button className="bg-gray-100 hover:bg-gray-200 text-black font-bold py-2 px-4 rounded">
              <BiChevronLeft />
            </button>

            <button className="bg-gray-100 hover:bg-gray-200 text-black  py-2 px-4 rounded">
              1
            </button>

            <button className=" hover:bg-gray-200 text-white  py-2 px-4 rounded bg-orange-400">
              2
            </button>

            <button className="bg-gray-100 hover:bg-gray-200 text-black py-2 px-4 rounded">
              3
            </button>

            <button className="bg-gray-100 hover:bg-gray-200 text-black font-bold py-2 px-4 rounded">
              <BiChevronRight />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">Show</span>
            <select
              name=""
              id=""
              className="w-full border border-gray-300 rounded px-2 py-1"
            >
              <option value="">10</option>
              <option value="">20</option>
              <option value="">30</option>
              <option value="">40</option>
              <option value="">50</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageList;
