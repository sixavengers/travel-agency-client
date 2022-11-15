import UnapprovedRow from "./UnapprovedRow";

type Props = {};

const UnapprovedPackage = (props: Props) => {
  return (
    <div className=" bg-white p-5">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-medium">Unapproved Packages</h1>
        <div className="flex items-center gap-2">
          <button className="bg-blue-500 text-blue-100 p-2 px-4 inline-block capitalize">
            add new
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table-auto w-full mt-5 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Location</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2 w-72">Action</th>
            </tr>
          </thead>
          <tbody>
            <UnapprovedRow />
          </tbody>
        </table>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 border p-1 px-3 rounded-lg">
            <select name="" id="">
              <option value="">10</option>
              <option value="">20</option>
              <option value="">30</option>
            </select>
          </div>
          <div className="pagination my-5 flex items-center justify-end gap-2">
            <button className="bg-blue-100 text-blue-500 p-2 px-3 text-xs rounded">
              Previous
            </button>
            <button className="bg-blue-100 p-2 w-10  text-blue-500">1</button>
            <button className="bg-blue-500 text-blue-100 p-2 px-3 text-xs rounded">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnapprovedPackage;
