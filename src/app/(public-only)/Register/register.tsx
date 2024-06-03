"use client"
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Image from 'next/image'
import Link from 'next/link'
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useToast } from '@/components/ui/use-toast'

export enum City {
    ALL = "all",
    ARIANA = "ariana",
    BEJA = "beja",
    BEN_AROUS = "ben arous",
    BIZERTE = "bizerte",
    GABES = "gabes",
    GAFSA = "gafsa",
    JENDOUBA = "jendouba",
    KAIROUAN = "kairouan",
    KASSERINE = "kasserine",
    KEBILI = "kebili",
    KEF = "kef",
    MAHDIA = "mahdia",
    MANOUBA = "manouba",
    MEDENINE = "medenine",
    MONASTIR = "monastir",
    NABEUL = "nabeul",
    SFAX = "sfax",
    SIDI_BOUZID = "sidi bouzid",
    SILIANA = "siliana",
    SOUSSE = "sousse",
    TATAOUINE = "tataouine",
    TOZEUR = "tozeur",
    TUNIS = "tunis",
    ZAGHOUAN = "zaghouan",
}

const Register = () => {
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        lastName: '',
        password: '',
        phone: '',
        city: City.ALL,
        street: '',
        postalCode: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target
        setFormData({ ...formData, [id]: value })
    }

    const handleCityChange = (value: City) => {
        setFormData({ ...formData, city: value })
    }
    const {toast} = useToast()
    const handleSubmit = (event: any) => {

        event.preventDefault();
        console.log(formData);
        if (formData) {
        fetch("http://localhost:3000/auth/register", {
          method : 'POST',
          body : JSON.stringify({...formData}),
          headers :
          {
            'Content-Type' : 'application/json'
          }
        }
      )
        .then((response)=> response.json())
        .then((data) => {
            {
                if (data.Authorization)
                    {   
                        //save token to localstorage
                        localStorage.setItem('token', data.Authorization)
                        window.location.href="/Home"
                    }
                    else 
                    {
                        toast(
                            {
                                variant : "destructive",
                                title : "Error",
                                description : data.message,
                            }
                        )
                    }
            }
        })
        
      };
    }

    return (
        <div className="w-full lg:grid lg:grid-cols-2 xl:min-h-[800px]">
            <div className="relative">
                <div className="h-full border-r border-gray-200">
                    <Image
                        src="/login.jpg"
                        alt="Image"
                        width="1920"
                        height="1080"
                        className="h-screen w-full object-cover dark:brightness-[0.2] dark:grayscale"
                    />
                </div>
            </div>
            <div className="flex items-center justify-center">
                <Card className="mx-auto max-w-sm p-7">
                    <CardHeader>
                        <CardTitle className="text-xl">Sign Up</CardTitle>
                        <CardDescription className='p-2'>
                            Enter your information to create an account
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="name">First name</Label>
                                <Input
                                    id="name"
                                    placeholder="Johnyyy"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="lastName">Last name</Label>
                                <Input
                                    id="lastName"
                                    placeholder="Doe"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="john.doe@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="phone">Phone Number</Label>
                                <Input
                                    id="phone"
                                    placeholder="12343290"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="city">City</Label>
                                    <Select onValueChange={handleCityChange} defaultValue={formData.city}>
                                        <SelectTrigger id="city">
                                            <SelectValue placeholder="Select a city" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {Object.values(City).map((city) => (
                                                <SelectItem key={city} value={city}>
                                                    {city.charAt(0).toUpperCase() + city.slice(1)}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="postalCode">Postal Code</Label>
                                    <Input
                                        id="postalCode"
                                        placeholder="12345"
                                        value={formData.postalCode}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="street">Address</Label>
                                <Input
                                    id="street"
                                    placeholder="742 Evergreen Terrace"
                                    value={formData.street}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder='****'
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <Button type="submit" className="w-full" onClick={handleSubmit}>
                                Create an account
                            </Button>
                        </form>
                        <div className="mt-4 text-center text-sm">
                            Already have an account?{" "}
                            <Link href="/Login" className="underline">
                                Sign in
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Register
