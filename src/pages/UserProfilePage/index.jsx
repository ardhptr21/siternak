import { useParams } from "react-router-dom";
import UserPage from "./UserPage";
import SideMenu from "./SideMenu";
import TransactionList from "./TransactionList";
import TabsDashboard from "./TabsDashboard";
import StorePage from "./StorePage";
import DashboarSeller from "./DashboardSeller";
import DashboardPages from "./DashboardPages";

// status 1 = user biasa, selain itu seller
const userStatus = 1;

const UserProfile = () => {
  let { type } = useParams();

  return (
    <div className="mt-3">
      <div
        className="mycontainer mobile:mycontainerfull py-7 gap-x-7 grid"
        style={{ gridTemplateColumns: "1.2fr 5fr" }}
      >
        <div>
          <SideMenu userStatus={userStatus} />
        </div>
        {type === "bio" && <UserPage />}
        {type === "bio_seller" && <StorePage />}
        {type === "pengiriman" && <TabsDashboard />}
        {type === "dashboard_seller" && <DashboarSeller />}
        {type === "pesanan" && <TransactionList />}
        {type === "dashboard_content" && <DashboardPages />}
      </div>
    </div>
  );
};

export default UserProfile;
