"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";

const ProfileComp = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [updatedUser, setUpdatedUser] = useState<any>(null);
  const [updatedPassword,setUpdatedPassword] = useState<any>(null)

  useEffect(() => {
    fetch("http://localhost:3000/users/infos", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <p>No user data found.</p>;
  }
  const profile = {
    name: user.name,
    lastName : user.lastName,
    role: user.role,
    email: user.email,
    phone: user.phone,
    address: user.street + " " + user.city,
  };
  const Onchangehandler = (event: any) => {
    setUpdatedUser((prev: any) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
    console.log(updatedUser);
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(updatedUser);
    const token = localStorage.getItem("token");
    if (updatedUser) {
      fetch("http://localhost:3000/users/infos", {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedUser),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
    }
    if (updatedPassword)
      {
        if (updatedPassword.newPassword== updatedPassword.confirmpassword)
          {
            const body ={
              password : updatedPassword.password,
              newPassword : updatedPassword.newPassword
            }
            fetch("http://localhost:3000/users/infos/password", {
              method : 'PATCH',
              headers : {
                'Content-Type' : 'application/json',
                Authorization : `Bearer ${token}`
              },
              body : JSON.stringify(body)
            })
              .then((response) => response.json())
              .then((data) => console.log(data))
          }
      }
  };  
  const onPasswordHandler =(event : any) => {
    setUpdatedPassword((prev : any) => ({
      ...prev,
      [event.target.id] : event.target.value
    }))
    console.log(updatedPassword)
  }
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
      {/* Profile header */}
      <div className="flex flex-col items-center space-y-4">
        <img
          alt="Avatar"
          className="border rounded-full"
          height="96"
          src="boy.png"
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
                onChange={Onchangehandler}
              />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                defaultValue={profile.lastName}
                placeholder="Enter your last name"
                className="w-full px-3 py-2 border border-gray-300 rounded"
                onChange={Onchangehandler}
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
                disabled
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
                onChange={Onchangehandler}
              />
            </div>
            {/* Address */}
            <div>
              <Label htmlFor="address">Address</Label>
              <Input
                id="street"
                defaultValue={profile.address}
                placeholder="Enter your address"
                className="w-full px-3 py-2 border border-gray-300 rounded"
                onChange={Onchangehandler}
              />
            </div>
          </div>
        </div>

        {/* Change Password */}
        <div className="border-t pt-4">
          <h2 className="text-lg font-semibold">Change Password</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <Label htmlFor="password">Current Password</Label>
              <Input
                id="password"
                placeholder="Enter your current password"
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded"
                onChange={onPasswordHandler}
              />
            </div>
            <div>
              <Label htmlFor="newPassword">New Password</Label>
              <Input
                id="newPassword"
                placeholder="Enter your new password"
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded"
                onChange={onPasswordHandler}
              />
            </div>
            <div>
              <Label htmlFor="confirmpassword">Confirm Password</Label>
              <Input
                id="confirmpassword"
                placeholder="Confirm your new password"
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded"
                onChange={onPasswordHandler}
              />
            </div>
          </div>
        </div>
        {/* Save Button */}
        <div className="flex justify-end">
          <Button size="lg" onClick={handleSubmit}>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ProfileComp;
