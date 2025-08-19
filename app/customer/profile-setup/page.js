import StateSelect from "../../components/StateSelect";
import JobPreferencesSelect from "../../components/JobPreferencesSelect";

export default function ProfileSetupPage() {
  return (
    <div className=" flex flex-col md:flex-row h-[80%] md:h-screen">
      <div className="hidden md:flex md:flex-1 bg-[url('/assets/setup-image.jpg')] bg-cover bg-center items-center justify-center rounded-lg min-h-[200px]">
        <h4 className="text-white text-xl font-bold  px-4 py-2 rounded">
          Tested Trusted, Reliable Without Stress
        </h4>
        <div className="">

        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full flex flex-col gap-6 max-w-lg ">
          <h3 className="text-lg font-semibold">Filter</h3>
          <div className="flex gap-4">
            <h4 className="text-sm font-medium border px-4 py-2 rounded-lg">
              Request a Job
            </h4>
            <h4 className="text-sm font-medium border px-4 py-2 rounded-lg">
              Job Categories
            </h4>
          </div>
          <form>
            <div className="flex flex-col gap-4">
              <label
                htmlFor="job-request"
                className="block text-sm font-medium"
              >
                Location
              </label>
              <StateSelect />
              <label
                htmlFor="job-preference"
                className="block text-sm font-medium"
              >
                Job Preference
              </label>
              <JobPreferencesSelect />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
<JobPreferencesSelect />;
