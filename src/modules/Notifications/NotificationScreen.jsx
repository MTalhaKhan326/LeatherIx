import DashboardTemplate from "../../Components/Templates/DashboardTemplate.jsx";
import DashboardScreen from "../Dashboard/DashboardScreen.jsx";
import Form from "./Form.jsx";

function NotificationScreen() {
  return (  
    <DashboardTemplate pageTitle={"Analytics"}>
        <Form/>
    </DashboardTemplate>
  );
}

export default NotificationScreen;