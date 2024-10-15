'use client'

import Link from 'next/link'
import { ArrowLeft, MapPin, Phone, Mail, Clock } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contactus() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-lavender-50 to-white font-sans">
      <main className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-lavender-800 hover:text-pink-600 mb-8">
          <ArrowLeft className="mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold text-lavender-800 mb-8">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-lavender-700 mb-4">Visit Us</h2>
              <p className="flex items-start mb-4 text-gray-700">
                <MapPin className="mr-2 mt-1 flex-shrink-0 text-pink-600" />
                No. 37, 1st Floor, Lot 5387, RH Plaza,<br />
                Lorong Lapangan Terbang 1,<br />
                93250 Kuching, Sarawak,<br />
                East Malaysia.
              </p>
              <p className="flex items-center mb-4 text-gray-700">
                <Phone className="mr-2 text-pink-600" />
                +6082-452505
              </p>
              <p className="flex items-center mb-4 text-gray-700">
                <Mail className="mr-2 text-pink-600" />
                drchris@chris-dental.com
              </p>
              <h2 className="text-2xl font-bold text-lavender-700 mb-4 mt-8">Hours</h2>
              <p className="flex items-center mb-4 text-gray-700">
                <Clock className="mr-2 text-pink-600" />
                8:00am - 12:00pm, 2:00pm - 5:00pm (Monday to Friday)
              </p>
              <p className="ml-8 mb-4 text-gray-700">9:00am - 2:00pm (Saturday)</p>
              <p className="ml-8 mb-4 text-gray-700">Closed on all public holidays</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-lavender-700 mb-4">Send Us a Message</h2>
              <form className="space-y-4">
                <Input placeholder="Your Name" />
                <Input type="email" placeholder="Your Email" />
                <Input placeholder="Subject" />
                <Textarea placeholder="Your Message" rows={4} />
                <Button type="submit" className="bg-pink-500 hover:bg-pink-600 text-white">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-lavender-700 mb-4">Location</h2>
          <div className="w-full h-96 bg-gray-200 rounded-lg">
            {/* Replace this div with an actual map component */}
            <p className="text-center pt-40">Map will be displayed here</p>
          </div>
        </div>
      </main>
    </div>
  )
}