import { FaUser } from "react-icons/fa";

type Props = {};

const Profile = (props: Props) => {
  return (
    <div>
      <div className="my-6 p-6 bg-gray-50">
        <div className="title flex items-center justify-between">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <FaUser /> Sixavenger's Profile
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;
