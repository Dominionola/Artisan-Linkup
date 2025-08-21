"use client";
import StateSelect from "@/app/components/StateSelect";
import JobPreferencesSelect from "@/app/components/JobPreferencesSelect";
import TestimonialCard from "@/app/components/TestimonialCard";
import { useRouter } from "next/navigation";

export default function ProfileSetupPage() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data); // Logs all form fields as an object
    localStorage.setItem("jobFormData", JSON.stringify(data));
    router.push(`/customer/profile-setup/job-description`);
  };

  return (
    <div className="flex flex-col md:flex-row h-[80%] md:h-screen">
      <TestimonialCard />

      <div className="flex-1 flex items-center justify-center px-4">
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
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              <label htmlFor="location" className="block text-sm font-medium">
                Location
              </label>
              <StateSelect id="location" name="location" />
              <label
                htmlFor="job-preference"
                className="block text-sm font-medium"
              >
                Job Preference
              </label>
              <JobPreferencesSelect id="job-preference" name="job-preference" />
            </div>
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-700 transition"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
