'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion, AnimatePresence } from 'framer-motion'

const teamMembers = [
  { 
    name: "Dr. Christina", 
    role: "Lead Dentist", 
    image: "/drchrisfp.png", 
    bio: "Dr. Christina, fondly known as Dr. Chris, hails from Kajang, Selangor. She received her Bachelor of Dental Surgery (BDS) from the University of Malaya in 1995. With extensive experience across Malaysia, she completed a 2-year Clinical Orthodontic Course in 2002 and is an active member of the Malaysian Dental Association (MDA) and Malaysian Endodontic Society (MES). Dr. Chris is passionate about continuing education, consistently attending local and international courses. She has received honors from the Progressive Orthodontics Seminar, USA, and holds a Masters in Surgical and Implant Dentistry from the International Medical College in Germany."
  },
  { 
    name: "Madam Cecilia Dayat", 
    role: "Dental Assistant", 
    image: "/cyl.png", 
    bio: "Cecilia, fondly known as 'Cyl', is a Bidayuh from Bau. She's married with two kids and has been with our practice since August 2010."
  },
  { 
    name: "Puan Zarina binti Zamahari", 
    role: "Dental Assistant", 
    image: "/ina.png", 
    bio: "Ina, as she is fondly referred to, is our local Muslim Malay girl from Kuching. She joined our team in December 2011 and is multi-lingual, speaking Malay, English, and Mandarin fluently."
  },
  { 
    name: "Miss Alina", 
    role: "Dental Assistant", 
    image: "/lina.png", 
    bio: "Alina, a Bidayuh from Kuching, is a recent addition to our practice."
  },
  { 
    name: "Miss Jong Ai Chia", 
    role: "Dental Assistant", 
    image: "/jong.png", 
    bio: "Ms. Jong is a local Chinese girl from Kuching who recently joined our team."
  },
]

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card 
      className="overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64">
        <Image
          src={member.image}
          alt={member.name}
          layout="fill"
          objectFit="contain"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-xl font-bold">{member.name}</h3>
          <p className="text-sm">{member.role}</p>
        </div>
      </div>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CardContent className="p-4 bg-white">
              <p className="text-gray-600">{member.bio}</p>
            </CardContent>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  )
}

export function Aboutus() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-lavender-50 to-white font-sans">
      <header className="bg-[#FFD09B] shadow-md fixed top-0 left-0 w-full z-50 py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Dr Christina's Dental Clinic Logo" width={50} height={50} />
            <h1 className="ml-2 text-2xl font-bold text-lavender-800">Dr Christina's Dental Clinic</h1>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-lavender-800 hover:text-white transition-colors duration-300">Home</Link>
            <Link href="/services" className="text-lavender-800 hover:text-white transition-colors duration-300">Services</Link>
            <Link href="/contact" className="text-lavender-800 hover:text-white transition-colors duration-300">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="inline-flex items-center text-lavender-800 hover:text-[#feb4b9] mb-8">
            <ArrowLeft className="mr-2" />
            Back to Home
          </Link>
          
          <h1 className="text-4xl font-bold text-lavender-800 mb-8">About Dr. Christina's Dental Clinic</h1>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/extdr.png" // Updated to use local path
              alt="Dr. Christina's Dental Clinic Exterior"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-lavender-700 mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              While travelling around the BDC roundabout, renamed the Kenyalang Roundabout, on a warm Saturday afternoon in December 2005, Dr. Christina spotted a vacated shop-lot upstairs of the then Nissan car showroom. She contacted the owner, and Dr. Christina's Dental Clinic was officially established on the 6th of June, 2006. The Nissan car showroom has since become Jee Kwong Optical Group's.
            </p>
            <p className="text-gray-700 mb-4">
              Dr. Chris, as she is fondly known, hails from Kajang, a West Malaysian town located in the State of Selangor. She received a Bachelor of Dental Surgery (BDS) degree from the University of Malaya in 1995. Since then, she has served as a dentist at various private dental clinics throughout West Malaysia before moving to Kuching, Sarawak.
            </p>
            <p className="text-gray-700 mb-4">
              In 2002, she completed a 2-year Clinical Orthodontic Course and has been practicing Orthodontics since. She is an active member of the Malaysian Dental Association (MDA) and the Malaysian Endodontic Society (MES). Dr. Chris is passionate about continuing professional education and consistently attends both local and international courses to keep abreast of the rapid developments in dentistry.
            </p>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-lavender-700 mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                Our mission is to provide high-quality, personalized dental care in a warm and welcoming environment. We believe in educating our patients about oral health and working together to achieve beautiful, healthy smiles that last a lifetime.
              </p>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card className="mb-12">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-lavender-700 mb-4">Our Approach</h2>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Family-focused care for all ages</li>
                <li>State-of-the-art technology and techniques</li>
                <li>Emphasis on preventive care and education</li>
                <li>Comfortable, stress-free environment</li>
                <li>Continuous learning and professional development</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-lavender-800 mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </motion.section>
      </main>

      <footer className="bg-lavender-800 text-white py-12 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">We Value Your Smile</p>
          <p className="text-[#FFD09B]">Copyright © 2024 Dr Christina's Dental Clinic. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}
