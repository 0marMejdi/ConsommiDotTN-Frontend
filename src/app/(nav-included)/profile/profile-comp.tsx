import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React from "react";

const ProfileComp: React.FC = () => {
  // Example values for the user profile
  const profile = {
    name: "Catherine Grant",
    role: "Product Designer",
    email: "catherine@example.com",
    phone: "+1 123 456 7890",
    address: "123 Main St, City, Country",
    createdAt: "2022-04-28", // Assuming this is a string representing the creation date
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
      {/* Profile header */}
      <div className="flex flex-col items-center space-y-4">
        <img
          alt="Avatar"
          className="border rounded-full"
          height="96"
          src="/giorno.jpg"
          style={{
            aspectRatio: "1",
            objectFit: "cover",
          }}
          width="96"
        />
        <div className="text-center">
          <h1 className="text-xl font-bold">{profile.name}</h1>
          <p className="text-gray-500 dark:text-gray-400">{profile.role}</p>
        </div>
      </div>

      {/* Profile information form */}
      <div className="mt-8 space-y-6">
        {/* Personal Information */}
        <div className="border-t pt-4">
          <h2 className="text-lg font-semibold">Personal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {/* Name */}
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                defaultValue={profile.name}
                placeholder="Enter your name"
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>
            {/* Email */}
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                defaultValue={profile.email}
                placeholder="Enter your email"
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>
            {/* Phone */}
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                defaultValue={profile.phone}
                placeholder="Enter your phone"
                type="tel"
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>
            {/* Address */}
            <div>
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                defaultValue={profile.address}
                placeholder="Enter your address"
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>
          </div>
        </div>

        {/* Change Password */}
        <div className="border-t pt-4">
          <h2 className="text-lg font-semibold">Change Password</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <Label htmlFor="current-password">Current Password</Label>
              <Input
                id="current-password"
                placeholder="Enter your current password"
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <Label htmlFor="new-password">New Password</Label>
              <Input
                id="new-password"
                placeholder="Enter your new password"
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                id="confirm-password"
                placeholder="Confirm your new password"
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>
          </div>
        </div>

        {/* Created At (uneditable) */}
        <div className="border-t pt-4">
          <Label htmlFor="created-at">Created At</Label>
          <Input
            id="created-at"
            value={profile.createdAt}
            readOnly // Make the input uneditable
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button size="lg">Save</Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileComp;
