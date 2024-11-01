'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, MapPin, Phone, Mail, Clock, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  { name: "Restorative Dentistry", description: "3D Guided Implants, Crown & Bridge, Root Canal Treatment", image: "/dental-veneer.png" },
  { name: "Cosmetic Dentistry", description: "Clear Aligners, Metal Braces, Teeth Whitening, Veneers", image: "/dental-crowns.png" },
  { name: "Preventive Care", description: "Regular check-ups and cleanings to maintain oral health", image: "/dental.png" },
  { name: "Dentures", description: "Custom-fitted dentures for a natural-looking smile", image: "/dental-x-ray.png" },
]

const testimonials = [
  { name: "John Doe", text: "Dr. Christina and her team are amazing! They made my dental visit a pleasant experience." },
  { name: "Jane Smith", text: "I've been coming here for years. The care and professionalism are unmatched." },
  { name: "Mike Johnson", text: "Thanks to Dr. Christina, I now have the smile I've always wanted. Highly recommended!" },
]

export function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E6D5E6] via-[#F2E6F2] to-[#E6D5E6] font-sans">
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrollY > 0 ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Dr Christina's Dental Clinic Logo" width={50} height={50} />
            <h1 className="ml-2 text-2xl font-bold text-[#666666]">Dr Christina's Dental Clinic</h1>
          </Link>
          <nav className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="text-[#666666] hover:text-[#9370DB] transition-colors duration-300">Home</Link>
            <Link href="/aboutus" className="text-[#666666] hover:text-[#9370DB] transition-colors duration-300">About Us</Link>
            <Link href="/services" className="text-[#666666] hover:text-[#9370DB] transition-colors duration-300">Services</Link>
            <Link href="/contact" className="text-[#666666] hover:text-[#9370DB] transition-colors duration-300">Contact</Link>
          </nav>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white shadow-lg"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                <Link href="/" className="text-[#666666] hover:text-[#9370DB] transition-colors duration-300">Home</Link>
                <Link href="/aboutus" className="text-[#666666] hover:text-[#9370DB] transition-colors duration-300">About Us</Link>
                <Link href="/services" className="text-[#666666] hover:text-[#9370DB] transition-colors duration-300">Services</Link>
                <Link href="/contact" className="text-[#666666] hover:text-[#9370DB] transition-colors duration-300">Contact</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="pt-16">
        <section className="relative h-screen w-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-center"
          >
            <source src="/videodental.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto px-4"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">We Value Your Smile</h2>
              <p className="text-xl md:text-2xl text-white mb-8">Expert dental care in a warm, family-friendly environment</p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-[#666666] mb-12 text-center"
            >
              About Us
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-[#666666] mb-4">Our Story</h3>
                <p className="text-[#666666] mb-4">
                  Dr. Christina's Dental Clinic was established with a vision to provide comprehensive, compassionate dental care for families in our community. Over the years, we've grown and evolved, but our commitment to excellence and patient-centered care remains unchanged.
                </p>
                <p className="text-[#666666] mb-4">
                  Dr. Christina, as she is fondly known, brings with her a wealth of experience and a passion for creating healthy smiles. With expertise in various fields including Restorative and Cosmetic Dentistry, Dr. Christina ensures that every patient receives top-notch care tailored to their needs.
                </p>
                <Link href="/aboutus">
                  <Button className="bg-[#9370DB] hover:bg-[#8A2BE2] text-white px-6 py-2 rounded-full">Learn More</Button>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/drchris.png"
                  alt="Dr. Christina's Dental Clinic"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#F2E6F2]">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-[#666666] mb-12 text-center"
            >
              Our Services
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 bg-white">
                    <CardContent className="p-6 flex flex-col items-center">
                      <Image
                        src={service.image}
                        alt={service.name}
                        width={80}
                        height={80}
                        className="mb-4"
                      />
                      <h3 className="font-bold text-xl mb-2 text-[#666666]">{service.name}</h3>
                      <p className="text-[#9370DB] text-center">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center mt-12">
              <Link href="/services">
                <Button className="bg-[#9370DB] hover:bg-[#8A2BE2] text-white px-8 py-3 rounded-full text-lg">View All Services</Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-[#666666] mb-12 text-center"
            >
              Testimonials
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-[#F2E6F2]">
                    <CardContent className="p-6">
                      <p className="text-[#666666] mb-4">"{testimonial.text}"</p>
                      <p className="font-bold text-[#9370DB]">- {testimonial.name}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#E6D5E6] text-[#666666]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-4xl font-bold mb-6">Ready to Schedule Your Visit?</h2>
                <p className="text-xl mb-8">Our team is here to provide you with the best dental care. Book your appointment today!</p>
                <Link href="/contact">
                  <Button className="bg-[#9370DB] hover:bg-[#8A2BE2] text-white px-8 py-3 rounded-full text-lg">Contact Us</Button>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="flex items-center">
                  <Clock className="mr-2 text-[#9370DB]" />
                  <p>Mon-Fri: 8am-5pm</p>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 text-[#9370DB]" />
                  <p>Sat: 9am-2pm</p>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 text-[#9370DB]" />
                  <p>Kuching, Sarawak</p>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-2 text-[#9370DB]" />
                  <p>+6082-452505</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#9370DB] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Dr Christina's Dental Clinic</h3>
              <p>Creating beautiful smiles since 2006</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                
                <li><Link href="/" className="hover:text-[#E6D5E6] transition-colors duration-300">Home</Link></li>
                <li><Link href="/aboutus" className="hover:text-[#E6D5E6] transition-colors duration-300">About Us</Link></li>
                <li><Link href="/services" className="hover:text-[#E6D5E6] transition-colors duration-300">Services</Link></li>
                <li><Link href="/contact" className="hover:text-[#E6D5E6] transition-colors duration-300">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="https://facebook.com" className="text-white hover:text-[#E6D5E6] transition-colors duration-300">
                  <Facebook size={24} />
                </a>
                <a href="https://www.instagram.com/drchristina.dentalclinic/" className="text-white hover:text-[#E6D5E6] transition-colors duration-300">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[#E6D5E6] text-center">
            <p>Copyright © 2024 Dr Christina's Dental Clinic. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}