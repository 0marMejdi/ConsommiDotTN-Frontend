"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
const Login = ({initialEmail , initialPassword} : any) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const SubmitHandler = async () => {
  console.log(email, password);
  try {
    const response = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data)
      const token  = data.Authorization; // Assuming the response contains a token property
      
      // Save the token in local storage
      localStorage.setItem('token', token);

      // Redirect the user to the home page
      window.location.href = '/Chat';

    } else {
      console.error('Failed to login:', response.statusText);
      // Handle error, e.g., show error message to the user
    }
  } catch (error : any) {
    console.error('Failed to login:', error.message);
    // Handle error, e.g., show error message to the user
  }
};

  return (
    <>
    <div className="w-full  lg:grid lg:grid-flow-col-dense lg:max-h-[100px] lg:grid-cols-2 xl:max-h-[100px]">
      <div className="flex items-center justify-center py-12 relative">
      <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">  
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              defaultValue={initialEmail}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link href="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link>
            </div>
            <Input id="password" type="password" required
            value={password}
            defaultValue={initialPassword}
            onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button type="submit" className="w-full" onClick={SubmitHandler} >
            Login
          </Button>
          
        </div>
        <div className="mt-4 text-center text-sm">
          Don't have an account?{" "}
          <Link href="/Register" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
        <div className="absolute inset-y-0 right-0 h-full border-l border-solid border-gray-200"></div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/login.jpg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-screen w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
    </>
  )
}

export default Login
