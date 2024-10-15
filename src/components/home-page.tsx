'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, MapPin, Phone, Mail, Clock, X, ChevronDown, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  { name: "Consultation", description: "Comprehensive dental check-ups and treatment planning." },
  { name: "X-ray Imaging", description: "Advanced diagnostic imaging for accurate treatment." },
  { name: "Restorations/Fillings", description: "High-quality dental fillings to restore tooth function." },
  { name: "Crowns and Bridges", description: "Custom-made crowns and bridges for damaged teeth." },
]

const blogPosts = [
  { id: 1, title: "The Importance of Regular Dental Check-ups", content: "Regular dental check-ups are crucial for maintaining good oral health...", image: "/placeholder.svg?height=200&width=300", date: "2024-03-15" },
  { id: 2, title: "Tips for Teaching Kids Good Oral Hygiene", content: "Instilling good oral hygiene habits in children from an early age...", image: "/placeholder.svg?height=200&width=300", date: "2024-03-10" },
  { id: 3, title: "Understanding Gum Disease", content: "Gum disease is a common but serious condition that affects many adults...", image: "/placeholder.svg?height=200&width=300", date: "2024-03-05" },
]

const faqs = [
  { question: "How often should I visit the dentist?", answer: "We recommend visiting the dentist every 6 months for a check-up and cleaning." },
  { question: "At what age should my child first see a dentist?", answer: "We recommend bringing your child for their first dental visit by their first birthday or within 6 months of their first tooth appearing." },
  { question: "How can I prevent cavities?", answer: "Brush twice daily, floss daily, maintain a healthy diet, and visit your dentist regularly for check-ups and cleanings." },
  { question: "What should I do in a dental emergency?", answer: "Contact our office immediately. We offer emergency dental services to address urgent dental issues." },
]

export function HomePageComponent() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAboutExpanded, setIsAboutExpanded] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const slides = [
    { image: "/placeholder.svg?height=600&width=1200", text: "Creating Beautiful Smiles for the Whole Family" },
    { image: "/placeholder.svg?height=600&width=1200", text: "Expert dental care in a warm, family-friendly environment" },
    { image: "/placeholder.svg?height=600&width=1200", text: "Your comfort and health are our top priorities" },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <div className="min-h-screen bg-gradient-to-b from-lavender-50 to-white font-sans">
      <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50 py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <Image src="/logo.png" alt="Dr Christina's Dental Clinic Logo" width={50} height={50} />
            <h1 className="ml-2 text-2xl font-bold text-lavender-800">Dr Christina's Dental Clinic</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            {[
              { name: 'Home', path: '/' },
              { name: 'About Us', path: '/aboutus' },
              { name: 'Services', path: '/services' },
              { name: 'Team', path: '/#team' },
              { name: 'Knowledge', path: '/#knowledge' },
              { name: 'General Dentistry', path: '/generaldentistry' },
              { name: 'Contact', path: '/#contact' },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="text-lavender-800 hover:text-pink-600 transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X /> : <ChevronDown />}
            </Button>
          </div>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-white shadow-lg rounded-b-lg mt-2 p-4"
            >
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/aboutus' },
                { name: 'Services', path: '/services' },
                { name: 'Team', path: '/#team' },
                { name: 'Knowledge', path: '/#knowledge' },
                { name: 'General Dentistry', path: '/generaldentistry' },
                { name: 'Contact', path: '/#contact' },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="block py-2 text-lavender-800 hover:text-pink-600 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="container mx-auto px-4 pt-24">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="relative h-[600px] overflow-hidden rounded-2xl shadow-2xl">
            {slides.map((slide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: index === currentSlide ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{slide.text}</h2>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-4xl font-bold text-lavender-800 mb-12 text-center">About Us</h2>
          <Card className="bg-gradient-to-br from-lavender-100 to-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-lavender-700 mb-4">Our History</h3>
              <p className="text-gray-700 mb-4">
                Dr. Christina's Dental Clinic was officially established on the 6th of June, 2006. What started as a chance discovery of a vacant shop-lot has grown into a trusted family dental practice serving the Kuching community.
              </p>
              {isAboutExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-gray-700 mb-4">
                    Dr. Chris, as she is fondly known, hails from Kajang and brings with her a wealth of experience and a passion for creating healthy smiles. With expertise in various fields including Orthodontics and Implant Dentistry, Dr. Chris ensures that every member of your family receives top-notch care tailored to their needs.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Our clinic is more than just a dental practice; it's a place where families come to achieve and maintain their best smiles. We believe in creating a warm, welcoming environment where children and adults alike feel comfortable and cared for.
                  </p>
                </motion.div>
              )}
              <div className="flex justify-center mt-4">
                <Link href="/aboutus">
                  <Button className="bg-pink-500 hover:bg-pink-600 text-white">
                    {isAboutExpanded ? 'Read Full Story' : 'Read More'}
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-4xl font-bold text-lavender-800 mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 flex flex-col h-full">
                    <h3 className="font-bold text-xl mb-4 text-lavender-700">{service.name}</h3>
                    <p className="text-gray-600 flex-grow">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/services">
              <Button className="bg-pink-500 hover:bg-pink-600 text-white">See More Services</Button>
            </Link>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-4xl font-bold text-lavender-800 mb-12 text-center">Dental Knowledge Center</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-lavender-100 to-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-lavender-700 mb-4">Dental Health Tips</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Brush your teeth twice a day for two minutes each time</li>
                  <li>Floss daily to remove plaque between teeth</li>
                  <li>Use fluoride toothpaste to strengthen tooth enamel</li>
                  <li>Limit sugary and acidic foods to prevent tooth decay</li>
                  <li>Visit your dentist regularly for check-ups and cleanings</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-pink-100 to-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-pink-700 mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-pink-200 pb-2">
                      <button
                        className="flex justify-between items-center w-full text-left"
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      >
                        <span className="font-semibold text-lavender-800">{faq.question}</span>
                        <ChevronRight className={`transform transition-transform ${expandedFaq === index ? 'rotate-90' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {expandedFaq === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-2 text-gray-600"
                          >
                            {faq.answer}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/knowledge">
              <Button className="bg-pink-500 hover:bg-pink-600 text-white">Explore More Dental Knowledge</Button>
            </Link>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-4xl font-bold text-lavender-800 mb-12 text-center">General Dentistry Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <motion.div
                key={post.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="overflow-hidden h-full flex flex-col">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-xl mb-2 text-lavender-700">{post.title}</h3>
                      <p className="text-gray-600 mb-4">{post.content}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-500">Posted on: {post.date}</p>
                      <Link href={`/generaldentistry#${post.id}`}>
                        <Button variant="link" className="text-pink-600">Read More</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-4xl font-bold text-lavender-800 mb-12 text-center">Contact Us</h2>
          <Card className="bg-gradient-to-br from-lavender-100 to-white">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="font-bold text-2xl mb-6 text-lavender-700">Visit Us</h3>
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
                </div>
                <div>
                  <h3 className="font-bold text-2xl mb-6 text-lavender-700">Hours</h3>
                  <p className="flex items-center mb-4 text-gray-700">
                    <Clock className="mr-2 text-pink-600" />
                    8:00am - 12:00pm, 2:00pm - 5:00pm (Monday to Friday)
                  </p>
                  <p className="ml-8 mb-4 text-gray-700">9:00am - 2:00pm (Saturday)</p>
                  <p className="ml-8 mb-6 text-gray-700">Closed on all public holidays</p>
                  <p className="font-bold text-lavender-700">We offer flexible appointment times to accommodate your family's busy schedule.</p>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="font-bold text-2xl mb-6 text-lavender-700">Location</h3>
                <div className="w-full h-96 bg-gray-200 rounded-lg">
                  {/* Replace this div with an actual map component */}
                  <p className="text-center pt-40">Map will be displayed here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </main>

      <footer className="bg-lavender-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">Creating Beautiful Family Smiles Since 1995</p>
          <div className="flex justify-center space-x-4 mb-4">
            <Link href="https://facebook.com" className="text-white hover:text-pink-200 transition-colors duration-300">
              <Facebook size={24} />
            </Link>
            <Link href="https://www.instagram.com/drchristina.dentalclinic/" className="text-white hover:text-pink-200 transition-colors duration-300">
              <Instagram size={24} />
            </Link>
          </div>
          <p>Copyright © 2024 Dr Christina's Dental Clinic. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}