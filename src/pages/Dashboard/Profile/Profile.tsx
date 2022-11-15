import { BiCamera, BiEditAlt } from "react-icons/bi";
import { FaUser } from "react-icons/fa";

type Props = {};

const Profile = (props: Props) => {
  return (
    <div>
      <div className="my-0 p-6 bg-gray-50">
        <div className="title flex items-center justify-between">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <FaUser /> Sixavenger's Profile
          </h1>
        </div>

        <div className="mt-6 bg-white p-5 border shadow ">
          <div className="flex flex-col  items-start gap-2">
            <div className="w-32 h-32 group relative bg-gray-200 rounded">
              <img
                src="https://randomuser.me/api/portraits/men/98.jpg"
                alt=""
                className="w-full h-full object-cover rounded border-4 border-blue-200"
              />
              <div className="icon opacity-0 transition-opacity group-hover:opacity-100 w-full h-full grid place-items-center absolute left-0 top-0 bg-[#0000009a] text-white cursor-pointer">
                <BiCamera size={30} />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-xl font-bold">Sixavenger</h1>
              <p className="text-gray-500">Joined 2 months ago</p>
            </div>
          </div>

          <div className="mt-6 bg-slate-50 p-4 rounded">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-xl font-bold">Details</h1>
              <button className="w-8 h-8 bg-blue-100 grid place-items-center text-blue-500 rounded-sm ">
                <BiEditAlt />
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-2 border-b pb-3 border-slate-200">
                <p className="text-gray-500">Email:</p>
                <p
                  title="Verified"
                  className=" text-teal-500 bg-teal-100 p-1 px-3 rounded-full cursor-pointer text-sm"
                >
                  ashikmahmud@gmail.com
                </p>
              </div>
              <div className="flex items-center gap-2 justify-between border-b pb-3 border-slate-200">
                <p className="text-gray-500">Phone:</p>
                <p className="text-gray-500">+880 123456789</p>
              </div>
              <div className="flex items-center gap-2 justify-between border-b pb-3 border-slate-200">
                <p className="text-gray-500">Address:</p>
                <address className="text-gray-500">Dhaka, Bangladesh</address>
              </div>
              <div className="flex items-center gap-2 justify-between border-b pb-3 border-slate-200">
                <p className="text-gray-500">Role:</p>
                <address className="text-green-500 bg-green-100 rounded-full px-4 text-sm ">
                  Admin
                </address>
              </div>
              <div className="flex items-center gap-2 justify-between border-b pb-3 border-slate-200">
                <p className="text-gray-500">Status:</p>
                <address className="text-sky-500 bg-sky-100 rounded-full px-4 text-sm ">
                  Active
                </address>
              </div>
              <div className="flex items-center gap-2 justify-between border-b pb-3 border-slate-200">
                <p className="text-gray-500">Used Device:</p>
                <code className=" rounded-full px-4 text-sm ">Windows 10</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
