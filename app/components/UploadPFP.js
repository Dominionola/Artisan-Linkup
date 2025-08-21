"use client";
import { useState, useRef } from "react";
import Image from "next/image";

export default function ProfilePictureUpload() {
  const [imagePreview, setImagePreview] = useState(null);
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (selectedFile) => {
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(selectedFile);
    } else {
      setFile(null);
      setImagePreview(null);
    }
  };

  const handleInputChange = (e) => {
    handleFileChange(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFileChange(e.dataTransfer.files[0]);
  };

  const triggerFileSelect = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="flex flex-col items-center md:items-end p-4 space-y-4">
      <div
        className="w-32 h-32 rounded-full border-2 border-gray-300 flex items-center justify-center overflow-hidden bg-gray-200 cursor-pointer relative"
        onClick={triggerFileSelect}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        {imagePreview ? (
          <img
            src={imagePreview}
            alt="Profile Preview"
            className="w-full h-full object-cover"
          />
        ) : (
          <Image
            src="/icons/user.svg"
            alt="Placeholder"
            width={128}
            height={128}
            className="object-cover opacity-50"
          />
        )}
      </div>

      {/* Upload Button */}
      <button
        type="button"
        onClick={triggerFileSelect}
        className="px-4 py-2 inline max-w-[200px] bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Upload Profile Picture
      </button>

      <input
        type="file"
        accept="image/*"
        onChange={handleInputChange}
        ref={fileInputRef}
        className="hidden"
      />
    </div>
  );
}
