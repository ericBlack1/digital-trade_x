'use client'

import { useState } from 'react'
import Image from 'next/image'
import { User, Phone, Mail, MapPin, Camera } from 'lucide-react'

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    phone: '+1 (555) 123-4567',
    email: 'john.doe@example.com',
    address: '123 Main St, Anytown, AN 12345',
    picture: '/placeholder.svg?height=128&width=128'
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setProfile(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Updated profile:', profile)
    alert('Profile updated successfully!')
  }

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setProfile(prev => ({ ...prev, picture: reader.result }))
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-xl p-6">
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-blue-800">Your Profile</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col items-center mb-6">
            <div className="relative">
              <Image
                src={profile.picture}
                alt="Profile picture"
                width={128}
                height={128}
                className="rounded-full border-4 border-blue-200"
              />
              <label htmlFor="picture-upload" className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-2 cursor-pointer hover:bg-blue-600 transition-colors">
                <Camera className="w-5 h-5 text-white" />
                <input
                  id="picture-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </label>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="flex items-center text-blue-800 text-sm sm:text-base">
                <User className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Name
              </label>
              <input
                id="name"
                name="name"
                value={profile.name}
                onChange={handleInputChange}
                className="mt-1 w-full p-2 border rounded-lg"
              />
            </div>

            <div>
              <label htmlFor="phone" className="flex items-center text-blue-800 text-sm sm:text-base">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                value={profile.phone}
                onChange={handleInputChange}
                className="mt-1 w-full p-2 border rounded-lg"
              />
            </div>

            <div>
              <label htmlFor="email" className="flex items-center text-blue-800 text-sm sm:text-base">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={profile.email}
                onChange={handleInputChange}
                className="mt-1 w-full p-2 border rounded-lg"
              />
            </div>

            <div>
              <label htmlFor="address" className="flex items-center text-blue-800 text-sm sm:text-base">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Address
              </label>
              <textarea
                id="address"
                name="address"
                value={profile.address}
                onChange={handleInputChange}
                className="mt-1 w-full p-2 border rounded-lg"
                rows={3}
              />
            </div>
          </div>

          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base py-2 sm:py-3 rounded-lg">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  )
}
