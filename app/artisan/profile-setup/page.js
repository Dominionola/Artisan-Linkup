"use client";
import ProfilePictureUpload from "@/app/components/UploadPFP";
import StateSelect from "../../components/StateSelect";

export default function ArtisanSetup() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const state = form.state.value;
    if (!state || state === "") {
      alert("Please select your state.");
      return;
    }
    // ...handle other form logic here
    form.submit();
  };
  return (
    <div className="mt-20 container mx-auto max-w-5xl p-6 bg-amber-50 rounded-lg shadow">
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Profile Picture Upload */}
        <ProfilePictureUpload />

        {/* Service Description */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            Service Description
          </h3>
          <p className="text-sm text-gray-600 mb-2">
            Provide details about the service you offer so customers can know
            what to expect.
          </p>
          <textarea
            name="serviceDescription"
            rows="4"
            placeholder="E.g., I repair and service generators of all sizes..."
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
          ></textarea>
        </div>

        {/* State Selection */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">State</h3>
          <StateSelect />
        </div>

        {/* City */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">City</h3>
          <input
            type="text"
            name="city"
            placeholder="E.g., Ikeja, Lagos"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        {/* Address */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Address</h3>
          <input
            type="text"
            name="address"
            placeholder="E.g., 123 Main St"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        {/* Service Category */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            Service Category
          </h3>
          <input
            type="text"
            name="serviceCategory"
            placeholder="E.g., Plumbing"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            Contact Number
          </h3>
          <input
            type="tel"
            name="phone"
            placeholder="E.g., 08012345678"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-700 transition"
          >
            Save Profile
          </button>
        </div>
      </form>
    </div>
  );
}
