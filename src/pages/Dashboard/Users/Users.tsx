import { BiEditAlt, BiPlus, BiTrashAlt } from "react-icons/bi";
import { FaEye, FaPen, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

type Props = {};

const Users = (props: Props) => {
  return (
    <div>
      <div className="my-6 p-6 bg-gray-50">
        <div className="title flex items-center justify-between">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <FaUsers /> Users
          </h1>
          <button>
            <Link to="/dashboard/users/add">
              <span className="flex items-center gap-2">
                <BiPlus size={20} /> Add User
              </span>
            </Link>
          </button>
        </div>

        <div>
          {/* filtering */}
          <div className="flex items-center justify-between my-4">
            <div className="flex items-center gap-2">
              <label htmlFor="filter">Filter</label>
              <input
                type="text"
                name="filter"
                id="filter"
                placeholder="Search by name or email"
                className="p-3 border bg-gray-50 rounded placeholder:text-sm placeholder:text-gray-500"
              />
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="sort">Sort</label>
              <select name="sort" id="sort" className="border p-3 bg-gray-50">
                <option value="name">Name</option>
                <option value="email">Email</option>
                <option value="role">Role</option>
              </select>
            </div>
          </div>

          <div className="mt-6">
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="p-2">Name</th>
                  <th className="p-2">Email</th>
                  <th className="p-2">Role</th>
                  <th className="p-2">Status</th>
                  <th className="p-2 text-center">Details</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2">John Doe</td>
                  <td className="p-2">
                    <a href="mailto:ashikmahmud@gmail.com">
                      ashikmhmud@gmail.com
                    </a>
                  </td>
                  <td className="p-2">
                    <div className="flex items-center gap-2">
                      <span className="bg-green-100 text-green-600 px-2 rounded-full">
                        Admin
                      </span>
                      <span className="text-green-500 cursor-pointer">
                        <FaPen />
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center gap-2">
                      <span className="px-2  bg-blue-100 text-blue-600 rounded-full">
                        active
                      </span>
                      <span className="text-blue-500 cursor-pointer">
                        <FaPen />
                      </span>
                    </div>
                  </td>
                  <td className="text-center">
                    <button className="bg-blue-500 p-2 rounded-full text-white">
                      <FaEye />
                    </button>
                  </td>
                  <td className="p-2">
                    <div className="flex items-center">
                      <button className="bg-blue-500 text-white px-2 py-1">
                        <BiEditAlt />
                      </button>

                      <button className="bg-red-500 text-white px-2 py-1">
                        <BiTrashAlt />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* pagination */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-2">
              <label htmlFor="perPage">Per Page</label>
              <select
                name="perPage"
                id="perPage"
                className="border p-2 rounded bg-gray-50"
              >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <button className="bg-gray-100 border p-2">Prev</button>
              <button className="bg-blue-300 shadow-sm p-2  w-10 grid place-items-center">
                1
              </button>
              <button className="bg-white shadow-sm p-2  w-10 grid place-items-center">
                2
              </button>
              <button className="bg-white shadow-sm p-2  w-10 grid place-items-center">
                3
              </button>
              <button className="bg-white shadow-sm p-2  w-10 grid place-items-center">
                4
              </button>
              <button className="bg-gray-100 border p-2">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
