import DashboardTemplate from "../../Components/Templates/DashboardTemplate.jsx";
import PaymentList from "./PaymentList.jsx";


function NotificationScreen() {
  return (  
    <DashboardTemplate pageTitle={"Payments"}>
        <PaymentList/>
    </DashboardTemplate>
  );
}

export default NotificationScreen;