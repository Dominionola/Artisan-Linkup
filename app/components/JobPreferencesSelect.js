import React from "react";

export default function JobPreferencesSelect(props) {
  return (
    <select
      name="jobPreference"
      required
      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 "
      {...props}
    >
      <option value="">Select your job preference</option>
      <option value="tailor">Tailor</option>
      <option value="barber">Barber</option>
      <option value="carpenter">Carpenter</option>
      <option value="plumber">Plumber</option>
      <option value="electrician">Electrician</option>
      <option value="potter">Potter</option>
      <option value="salon">Salon</option>
      {/* Add more job preferences as needed */}
    </select>
  );
}
