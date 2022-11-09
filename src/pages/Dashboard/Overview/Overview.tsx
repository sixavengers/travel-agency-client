import CountUp from "react-countup";
import { BiBookAlt, BiPackage, BiServer, BiShapePolygon } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import PieChart from "./PieChart";
import SpecialBarChart from "./SpecialBarChart";
import UsersChart from "./UsersChart";
type Props = {};

const Overview = (props: Props) => {
  return (
    <div className="font-roboto">
      <div className="dashboard__main__content__header ">
        <h1 className="dashboard__main__content__header__title">Dashboard</h1>
      </div>
      <div className="dashboard__main__content__body">
        <h1 className="text-2xl font-bold">Welcome to the dashboard </h1>
      </div>

      {/* component */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 bg-gray-50 p-5 my-5">
        {/* single state card */}
        <div className="card  border p-5 rounded-lg relative bg-white">
          <div className="icon absolute right-6 top-2/4 -translate-y-2/4 text-green-50">
            <BiPackage size={100} />
          </div>
          <div className="info">
            <h2 className="text-4xl font-bold">
              <CountUp end={10} duration={2} />
            </h2>
            <h3 className="text-md text-gray-600 font-bold">Packages</h3>
            <p className="text-xs text-gray-500">View your profile</p>
          </div>
        </div>
        {/* end */}
        {/* single state card */}
        <div className="card  border p-5 rounded-lg relative bg-white">
          <div className="icon absolute right-6 top-2/4 -translate-y-2/4 text-orange-100">
            <FaUsers size={100} />
          </div>
          <div className="info">
            <h2 className="text-4xl font-bold">
              <CountUp end={100} duration={2} />
            </h2>
            <h3 className="text-md text-gray-600 font-bold">Register Users</h3>
            <p className="text-xs text-gray-500">View your profile</p>
          </div>
        </div>
        {/* end */}
        {/* single state card */}
        <div className="card  border p-5 rounded-lg relative bg-white">
          <div className="icon absolute right-6 top-2/4 -translate-y-2/4 text-gray-100">
            <BiShapePolygon size={100} />
          </div>
          <div className="info">
            <h2 className="text-4xl font-bold">
              <CountUp end={40} duration={2} />
            </h2>
            <h3 className="text-md text-gray-600 font-bold">
              Registered Drivers
            </h3>
            <p className="text-xs text-gray-500">View your profile</p>
          </div>
        </div>
        {/* end */}
        {/* single state card */}
        <div className="card  border p-5 rounded-lg relative bg-white">
          <div className="icon absolute right-6 top-2/4 -translate-y-2/4 text-blue-100">
            <BiBookAlt size={100} />
          </div>
          <div className="info">
            <h2 className="text-4xl font-bold">
              <CountUp end={7} duration={2} />
            </h2>
            <h3 className="text-md text-gray-600 font-bold">Uploaded Blogs</h3>
            <p className="text-xs text-gray-500">View your profile</p>
          </div>
        </div>
        {/* end */}
        {/* single state card */}
        <div className="card  border p-5 rounded-lg relative bg-white">
          <div className="icon absolute right-6 top-2/4 -translate-y-2/4 text-fuchsia-100">
            <BiServer size={100} />
          </div>
          <div className="info">
            <h2 className="text-4xl font-bold">
              <CountUp end={65} duration={2} />
            </h2>
            <h3 className="text-md text-gray-600 font-bold">Overview</h3>
            <p className="text-xs text-gray-500">View your profile</p>
          </div>
        </div>
        {/* end */}
      </div>

      {/* recent packages */}
      <div className="my-4 p-4 bg-gray-50 rounded">
        <div className="bg-white p-5">
          <h3 className="text-lg font-bold my-2">Recent Packages</h3>
        </div>
      </div>

      {/* charts visualizations */}
      <div className="grid grid-cols-1 sm:grid-cols-2 bg-gray-50 my-5 p-5 gap-5">
        <UsersChart />
        <PieChart />
        <div className="col-span-2">
          <SpecialBarChart />
        </div>
      </div>
    </div>
  );
};

export default Overview;
