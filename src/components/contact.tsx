'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, MapPin, Phone, Mail, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
    // Reset form after submission
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E6D5E6] via-[#F2E6F2] to-[#E6D5E6] font-sans">
      <header className="bg-[#9370DB] shadow-md fixed top-0 left-0 w-full z-50 py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Dr Christina's Dental Clinic Logo" width={50} height={50} />
            <h1 className="ml-2 text-2xl font-bold text-white">Dr Christina's Dental Clinic</h1>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-white hover:text-[#E6D5E6] transition-colors duration-300">Home</Link>
            <Link href="/aboutus" className="text-white hover:text-[#E6D5E6] transition-colors duration-300">About Us</Link>
            <Link href="/services" className="text-white hover:text-[#E6D5E6] transition-colors duration-300">Services</Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="inline-flex items-center text-[#666666] hover:text-[#9370DB] mb-8">
            <ArrowLeft className="mr-2" />
            Back to Home
          </Link>
          
          <h1 className="text-4xl font-bold text-[#666666] mb-8">Contact Us</h1>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-[#666666] mb-4">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-white border-[#9370DB] focus:border-[#9370DB] focus:ring-[#9370DB]"
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-white border-[#9370DB] focus:border-[#9370DB] focus:ring-[#9370DB]"
              />
              <Input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="bg-white border-[#9370DB] focus:border-[#9370DB] focus:ring-[#9370DB]"
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-white border-[#9370DB] focus:border-[#9370DB] focus:ring-[#9370DB]"
              />
              <Button type="submit" className="bg-[#9370DB] hover:bg-[#8A2BE2] text-white">Send Message</Button>
            </form>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-[#666666] mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="mr-2 text-[#9370DB]" />
                <p className="text-[#666666]">123 Dental Street, Kuching, Sarawak, Malaysia</p>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 text-[#9370DB]" />
                <p className="text-[#666666]">+6082-452505</p>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 text-[#9370DB]" />
                <p className="text-[#666666]">info@drchristinadental.com</p>
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 text-[#9370DB]" />
                <div className="text-[#666666]">
                  <p>Mon-Fri: 8am-5pm</p>
                  <p>Sat: 9am-2pm</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-bold text-[#666666] mb-4">Location</h3>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.3970226417707!2d110.35454661475396!3d1.5573080988746818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31fba7eeee080b99%3A0x9e65b52dd6b0df81!2sDr%20Christina&#39;s%20Dental%20Clinic!5e0!3m2!1sen!2smy!4v1620123456789!5m2!1sen!2smy"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <footer className="bg-[#9370DB] text-white py-12 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">We Value Your Smile</p>
          <p className="text-[#E6D5E6]">Copyright © 2024 Dr Christina's Dental Clinic. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}