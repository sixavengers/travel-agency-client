import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./../styles/packages.scss";
import ApprovedPackages from "./ApprovedPackages/ApprovedPackages";
import UnapprovedPackage from "./UnapprovedPackage/UnapprovedPackage";
type Props = {};

const AllPackages = (props: Props) => {
  return (
    <div>
      <div className="dashboard__content__header">
        <div className="flex items-center justify-between">
          <h1 className="dashboard__content__header__title font-montserrat text-2xl font-medium">
            All Packages
          </h1>
        </div>
        <div className="my-10 bg-gray-50 p-5">
          <Tabs>
            <TabList>
              <Tab>
                <span className="font-montserrat text-lg font-medium">
                  Approved
                </span>
              </Tab>
              <Tab>
                <span className="font-montserrat text-lg font-medium">
                  Unapproved
                </span>
              </Tab>
            </TabList>

            <TabPanel>
              <ApprovedPackages />
            </TabPanel>
            <TabPanel>
              <UnapprovedPackage />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AllPackages;
