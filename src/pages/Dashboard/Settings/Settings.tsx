import { FaCog } from "react-icons/fa";

type Props = {};

const Settings = (props: Props) => {
  return (
    <div>
      <div className="my-0 p-6 bg-gray-50">
        <div className="title flex items-center justify-between">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <FaCog /> Settings
          </h1>
        </div>

        <div className="mt-6 bg-white p-5 rounded-lg flex items-center justify-between ">
          <h3 className="text-2xl font-bold">Request For Add New Feature</h3>
          <button className="bg-[#364D76] text-teal-50 p-3 rounded-full px-5 capitalize">
            send request
          </button>
        </div>

        {/* change password */}
        <div className="mt-6 bg-white p-8 rounded-lg">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">Change Password</h3>
            <button className="bg-[#364D76] rounded-lg text-teal-50 p-1 px-2 capitalize">
              Show
            </button>
          </div>
          <div className="mt-2">
            <label
              htmlFor="oldPassword"
              className="block text-gray-500 font-medium"
            >
              Old Password
            </label>
            <input
              type="password"
              name="oldPassword"
              id="oldPassword"
              className="w-full border outline-none border-gray-300 p-2 rounded-lg mt-2"
            />
          </div>
          <div className="mt-2">
            <label
              htmlFor="newPassword"
              className="block text-gray-500 font-medium"
            >
              New Password
            </label>
            <input
              type="password"
              name="newPassword"
              id="newPassword"
              className="w-full border outline-none border-gray-300 p-2 rounded-lg mt-2"
            />
          </div>
          <div className="mt-2">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-500 font-medium"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className="w-full border outline-none border-gray-300 p-2 rounded-lg mt-2"
            />
          </div>
          <div className="mt-5">
            <button className="bg-[#364D76] text-teal-50 p-3 rounded-md px-5 capitalize">
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
