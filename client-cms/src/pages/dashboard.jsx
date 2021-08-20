import Sidebar from "../components/sidebar";
import CreateDoctor from "./createDoctor";
import DoctorsList from "./doctorsList";
import UsersList from "./usersList";

export default function Dashboard() {
  return (
    <div class="min-h-screen flex">
      <Sidebar/>
      {/* <UsersList/> */}
      {/* <DoctorsList/> */}
      <CreateDoctor/>
    </div>
  );
}
