"use client";

import TestimonialCard from "@/app/components/TestimonialCard";
import { useRouter } from "next/navigation";

export default function JobDescriptionPage() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // Get state from previous page's localStorage
    const previousData = JSON.parse(localStorage.getItem("jobFormData")) || {};
    const state =
      previousData.location ||
      previousData.state ||
      previousData.locationState ||
      previousData.location_name ||
      previousData.location; // fallback for different key names

    // Combine state and city into location object
    const mergedData = {
      ...previousData,
      ...data,
      location: {
        state: state,
        city: data["city"],
      },
    };
    // Remove flat city and state keys if present
    delete mergedData["city"];
    delete mergedData["state"];
    delete mergedData["locationState"];
    delete mergedData["location_name"];

    console.log(mergedData);
    localStorage.setItem("jobFormData", JSON.stringify(mergedData));
    router.push(`/customer/profile-setup/job-description/job-description-cont`);
  };

  return (
    <div className="flex flex-col md:flex-row h-[80%] md:h-screen">
      <TestimonialCard />

      <div className="flex-1 flex items-center justify-center px-4">
        <div className="w-full flex flex-col gap-6 max-w-lg ">
          <h3 className="text-lg font-semibold">Service Description</h3>
          <p className="text-medium text-gray-400 ">
            Give the details of the service you provide.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              <label htmlFor="city" className="block text-sm font-medium">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="e.g Lagos"
                className="border border-gray-300 rounded-lg p-2 placeholder-gray-400"
                required
              />

              <label htmlFor="number" className="block text-sm font-medium">
                Number
              </label>
              <input
                type="tel"
                id="number"
                name="number"
                placeholder="e.g 08012345678"
                className="border border-gray-300 rounded-lg p-2 placeholder-gray-400"
                required
                pattern="^0[789][0-9]{9}$"
                maxLength={11}
                minLength={11}
              />

              <label
                htmlFor="job-description"
                className="block text-sm font-medium"
              >
                Job Description
              </label>
              <textarea
                id="job-description"
                name="job-description"
                placeholder="e.g. Give details of what kind of issue you want to be fixed
"
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
