import CountUp from "react-countup";
import { BiIdCard } from "react-icons/bi";
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
          <div className="icon absolute right-6 top-2/4 -translate-y-2/4 text-gray-100">
            <BiIdCard size={100} />
          </div>
          <div className="info">
            <h2 className="text-4xl font-bold">
              <CountUp end={100} duration={2} />
            </h2>
            <h3 className="text-md text-gray-600 font-bold">Overview</h3>
            <p className="text-xs text-gray-500">View your profile</p>
          </div>
        </div>
        {/* end */}
        {/* single state card */}
        <div className="card  border p-5 rounded-lg relative bg-white">
          <div className="icon absolute right-6 top-2/4 -translate-y-2/4 text-gray-100">
            <BiIdCard size={100} />
          </div>
          <div className="info">
            <h2 className="text-4xl font-bold">
              <CountUp end={100} duration={2} />
            </h2>
            <h3 className="text-md text-gray-600 font-bold">Overview</h3>
            <p className="text-xs text-gray-500">View your profile</p>
          </div>
        </div>
        {/* end */}
        {/* single state card */}
        <div className="card  border p-5 rounded-lg relative bg-white">
          <div className="icon absolute right-6 top-2/4 -translate-y-2/4 text-gray-100">
            <BiIdCard size={100} />
          </div>
          <div className="info">
            <h2 className="text-4xl font-bold">
              <CountUp end={100} duration={2} />
            </h2>
            <h3 className="text-md text-gray-600 font-bold">Overview</h3>
            <p className="text-xs text-gray-500">View your profile</p>
          </div>
        </div>
        {/* end */}
        {/* single state card */}
        <div className="card  border p-5 rounded-lg relative bg-white">
          <div className="icon absolute right-6 top-2/4 -translate-y-2/4 text-gray-100">
            <BiIdCard size={100} />
          </div>
          <div className="info">
            <h2 className="text-4xl font-bold">
              <CountUp end={100} duration={2} />
            </h2>
            <h3 className="text-md text-gray-600 font-bold">Overview</h3>
            <p className="text-xs text-gray-500">View your profile</p>
          </div>
        </div>
        {/* end */}
        {/* single state card */}
        <div className="card  border p-5 rounded-lg relative bg-white">
          <div className="icon absolute right-6 top-2/4 -translate-y-2/4 text-gray-100">
            <BiIdCard size={100} />
          </div>
          <div className="info">
            <h2 className="text-4xl font-bold">
              <CountUp end={100} duration={2} />
            </h2>
            <h3 className="text-md text-gray-600 font-bold">Overview</h3>
            <p className="text-xs text-gray-500">View your profile</p>
          </div>
        </div>
        {/* end */}
      </div>
    </div>
  );
};

export default Overview;
