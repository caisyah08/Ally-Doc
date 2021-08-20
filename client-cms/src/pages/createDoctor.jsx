import MakeDoctor from "../components/makeDoctor";

export default function CreateDoctor() {
  return (
  <div class="bg-yellow-500 flex-grow py-12 px-10">
      <div class="flex justify-between">
        <div>
          <h1 class="text-4xl font-bold text-white mb-10"> Create Doctor</h1>
        </div>
      </div>
      <div class="flex justify-center">

        <MakeDoctor/>
      </div>
    </div>  
  );
}
