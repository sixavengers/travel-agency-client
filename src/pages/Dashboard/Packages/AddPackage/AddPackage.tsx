import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
type Props = {};

const AddPackage = (props: Props) => {
  /* date states */
  const [startDate, setStartDate] = useState<any>(new Date());
  const [returnDate, setReturnDate] = useState<any>("");

  return (
    <div>
      <div className="p-4">
        <div className="title flex items-center justify-between">
          <h1 className="text-2xl font-bold">Add Package</h1>
          <Link to="/dashboard/packages">
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
              Packages Lists
            </button>
          </Link>
        </div>

        <div className="mt-4 p-14 shadow border">
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Name"
              />
            </div>
            {/* Input Group GRIDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="price"
                >
                  Price
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="price"
                  type="text"
                  placeholder="Price"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="Origin"
                >
                  Origin
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Origin"
                  type="text"
                  placeholder="Origin"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="Destination"
                >
                  Destination
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Destination"
                  type="text"
                  placeholder="Destination"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="packageClasses"
                >
                  Packages Classes
                </label>
                <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                  <option value="Luxury">Luxury</option>
                  <option value="Mid Range">Mid Range</option>
                  <option value="Budget">Budget</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="packageClasses"
                >
                  Packages Types
                </label>
                <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                  <option value="Group Tour">Group Tour</option>
                  <option value="Private Tour">Private Tour</option>
                  <option value="Couple Tour">Couple Tour</option>
                  <option value="family tour">Family Tour</option>
                </select>
              </div>
            </div>
            {/* input groups GRIDS END */}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="packageClasses"
                >
                  Start Date
                </label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  customInput={
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="startDate"
                      type="text"
                      placeholder="Start Date"
                    />
                  }
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="packageClasses"
                >
                  End Date
                </label>
                <DatePicker
                  selected={returnDate}
                  onChange={(date) => setReturnDate(date)}
                  customInput={
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="endDate"
                      type="text"
                      placeholder="End Date"
                    />
                  }
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="packageClasses"
                >
                  Duration
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="duration"
                  type="text"
                  placeholder="Duration"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="packageClasses"
                >
                  Max Group Size
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="maxGroupSize"
                  type="text"
                  placeholder="Max Group Size"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="packageClasses"
                >
                  Difficulty
                </label>
                <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>
            </div>

            {/* Meals Plan */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="mealPlan"
              >
                Meals Plan
              </label>
              <div className="flex items-center gap-5 justify-start">
                <div className="item flex flex-row-reverse gap-2 items-center select-none">
                  <label htmlFor="Breakfast included">Breakfast included</label>
                  <input
                    type="checkbox"
                    id="Breakfast included"
                    name="Breakfast included"
                    value="Breakfast included"
                  />
                </div>
                <div className="item flex flex-row-reverse gap-2 items-center select-none">
                  <label htmlFor="Lunch included">Lunch included</label>
                  <input
                    type="checkbox"
                    id="Lunch included"
                    name="Lunch included"
                    value="Lunch included"
                  />
                </div>
                <div className="item flex flex-row-reverse gap-2 items-center select-none">
                  <label htmlFor="Dinner included">Dinner included</label>
                  <input
                    type="checkbox"
                    id="Dinner included"
                    name="Dinner included"
                    value="Dinner included"
                  />
                </div>
              </div>
            </div>
            {/* Meals Plan End */}
            {/* Activities Plan */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="mealPlan"
              >
                Activities
              </label>

              <div className="flex items-center gap-5 justify-start">
                <div className="item flex flex-row-reverse gap-2 items-center select-none">
                  <label htmlFor="Beaches and Islands">
                    Beaches and Islands
                  </label>
                  <input
                    type="checkbox"
                    id="Beaches and Islands"
                    name="Beaches and Islands"
                    value="Beaches and Islands"
                  />
                </div>
                <div className="item flex flex-row-reverse gap-2 items-center select-none">
                  <label htmlFor="Family">Family</label>
                  <input
                    type="checkbox"
                    id="Family"
                    name="Family"
                    value="Family"
                  />
                </div>
                <div className="item flex flex-row-reverse gap-2 items-center select-none">
                  <label htmlFor="Food and Drink">Food and Drink</label>
                  <input
                    type="checkbox"
                    id="Food and Drink"
                    name="Food and Drink"
                    value="Food and Drink"
                  />
                </div>
                <div className="item flex flex-row-reverse gap-2 items-center select-none">
                  <label htmlFor="Road Trip"> Road Trip</label>
                  <input
                    type="checkbox"
                    id="Road Trip"
                    name="Road Trip"
                    value="Road Trip"
                  />
                </div>
                <div className="item flex flex-row-reverse gap-2 items-center select-none">
                  <label htmlFor="Shopping"> Shopping</label>
                  <input
                    type="checkbox"
                    id="Shopping"
                    name="Shopping"
                    value="Shopping"
                  />
                </div>
              </div>
            </div>
            {/* Meals Plan End */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                rows={5}
                placeholder="Description"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="image"
              >
                Image
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="image"
                type="file"
                placeholder="Image"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Add Package
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPackage;
