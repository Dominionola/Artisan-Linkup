import ProfilePictureUpload from "@/app/components/UploadPFP";

export default function ArtisanSetup() {
  return (
    <div className="mt-20 container mx-auto max-w-5xl p-6 bg-amber-50 rounded-lg shadow">
      <form className="space-y-6">
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

        {/* Service Category */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            Service Category
          </h3>
          <select
            name="category"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <option value="">Select your service</option>
            <option value="plumbing">Plumbing</option>
            <option value="electrical">Electrical Works</option>
            <option value="tailoring">Tailoring</option>
            <option value="hairdressing">Hairdressing / Barbering</option>
            <option value="generator">Generator Repair</option>
            <option value="carpentry">Carpentry</option>
            <option value="painting">Painting</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Location</h3>
          <input
            type="text"
            name="location"
            placeholder="E.g., Ikeja, Lagos"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        {/* Pricing */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            Price Range (₦)
          </h3>
          <input
            type="text"
            name="pricing"
            placeholder="E.g., ₦5,000 - ₦15,000"
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
