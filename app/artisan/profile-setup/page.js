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

        {/* State Selection */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">State</h3>
          <select
            name="state"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <option value="" disabled>Select your state</option>
            <option value="abia">Abia</option>
            <option value="adamawa">Adamawa</option>
            <option value="akwa-ibom">Akwa Ibom</option>
            <option value="anambra">Anambra</option>
            <option value="bauchi">Bauchi</option>
            <option value="bayelsa">Bayelsa</option>
            <option value="benue">Benue</option>
            <option value="borno">Borno</option>
            <option value="cross-river">Cross River</option>
            <option value="delta">Delta</option>
            <option value="ebonyi">Ebonyi</option>
            <option value="edo">Edo</option>
            <option value="ekiti">Ekiti</option>
            <option value="enugu">Enugu</option>
            <option value="gombe">Gombe</option>
            <option value="imo">Imo</option>
            <option value="jigawa">Jigawa</option>
            <option value="kaduna">Kaduna</option>
            <option value="kano">Kano</option>
            <option value="katsina">Katsina</option>
            <option value="kebbi">Kebbi</option>
            <option value="kogi">Kogi</option>
            <option value="kwara">Kwara</option>
            <option value="lagos">Lagos</option>
            <option value="nasarawa">Nasarawa</option>
            <option value="niger">Niger</option>
            <option value="ogun">Ogun</option>
            <option value="ondo">Ondo</option>
            <option value="osun">Osun</option>
            <option value="oyo">Oyo</option>
            <option value="plateau">Plateau</option>
            <option value="rivers">Rivers</option>
            <option value="sokoto">Sokoto</option>
            <option value="taraba">Taraba</option>
            <option value="yobe">Yobe</option>
            <option value="zamfara">Zamfara</option>
            <option value="fct">FCT (Abuja)</option>
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
