"use client";
import StateSelect from "@/app/components/StateSelect";
import JobPreferencesSelect from "@/app/components/JobPreferencesSelect";
import TestimonialCard from "@/app/components/TestimonialCard";
import { useRouter } from "next/navigation";

export default function JobDescriptionPage() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const existingData = JSON.parse(localStorage.getItem("jobFormData")) || {};
    const updatedData = { ...existingData, ...data };

    console.log(updatedData);
    localStorage.setItem("jobFormData", JSON.stringify(updatedData));
    router.push(`/customer/profile-setup/job-description/job-description-cont/success`);
  };

  return (
    <div className="flex flex-col md:flex-row h-[80%] md:h-screen">
      <TestimonialCard />

      <div className="flex-1 flex items-center justify-center px-4">
        <div className="w-full flex flex-col gap-6 max-w-lg ">
          <h3 className="text-lg font-semibold">Job Description</h3>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              <label htmlFor="job-title" className="block text-sm font-medium">
                Date
              </label>
              <input
                type="date"
                id="job-title"
                name="job-title"
                placeholder="e.g Plumber"
                className="border border-gray-300 rounded-lg p-2 placeholder-gray-400"
                required
              />

              <label htmlFor="landmark" className="block text-sm font-medium">
                Landmark
              </label>
              <input
                type="text"
                id="landmark"
                name="landmark"
                placeholder=""
                className="border border-gray-300 rounded-lg p-2 placeholder-gray-400"
                required
              />

             <label htmlFor="budget" className="block text-sm font-medium">
                Budget
              </label>
              <input
                type="number"
                id="budget"
                name="budget"
                placeholder=""
                className="border border-gray-300 rounded-lg p-2 placeholder-gray-400"
                required
              />
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
