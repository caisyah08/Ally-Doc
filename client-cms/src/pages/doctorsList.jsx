import TableUsers from "../components/tableUser";

export default function DoctorsList() {
  return (
    <div class="bg-yellow-500 flex-grow py-12 px-10">
      <div class="flex justify-between">
        <div>
          <h1 class="text-4xl font-bold text-white mb-10">Doctors List</h1>
        </div>
      </div>
      <TableUsers />
    </div>
  );
}
