'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ChevronRight } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { motion, AnimatePresence, useInView } from 'framer-motion'

interface Service {
  name: string;
  description: string;
  videoUrl: string;
}

const services: Service[] = [
  { 
    name: "Consultation", 
    description: "Comprehensive dental check-ups and treatment planning.",
    videoUrl: "/videos/consultation.mp4"
  },
  { 
    name: "X-ray Imaging", 
    description: "Intra oral peri-apical, Orthopantomogram (OPG), Lateral Cephalometric, Frontal Cephalometric and Cone Beam Computed Tomography (CBCT)",
    videoUrl: "/videos/xray-imaging.mp4"
  },
  { 
    name: "Restorations/Fillings", 
    description: "Silver amalgam, tooth coloured (e.g. composite resin, glass ionomer, modified resin cement)",
    videoUrl: "/videos/restorations.mp4"
  },
  { 
    name: "Crowns and Bridges", 
    description: "Full ceramic, metal ceramic, full metal, gold alloy",
    videoUrl: "/videos/crowns-bridges.mp4"
  },
  { 
    name: "Aesthetic Treatment", 
    description: "Vital tooth bleaching/whitening, non-vital whitening on single or multiple teeth, veneers",
    videoUrl: "/videos/aesthetic-treatment.mp4"
  },
  { 
    name: "Endodontics", 
    description: "Pulpotomy, root canal therapy",
    videoUrl: "/videos/endodontics.mp4"
  },
  { 
    name: "Paediatric Dentistry", 
    description: "Simple fillings, pulp therapy and extractions of milk teeth in children",
    videoUrl: "/videos/paediatric-dentistry.mp4"
  },
  { 
    name: "Periodontics", 
    description: "Scaling and polishing, root planing/debridement, various gum procedures (e.g. fiberotomy, frenectomy, crown lengthening, soft tissue graft, ridge augmentation)",
    videoUrl: "/videos/periodontics.mp4"
  },
  { 
    name: "Prosthetics", 
    description: "Partial and complete dentures, repair of dentures",
    videoUrl: "/videos/prosthetics.mp4"
  },
  { 
    name: "Oral Surgery", 
    description: "Extractions, surgical removal of impacted teeth, incision and drainage of abscess",
    videoUrl: "/videos/oral-surgery.mp4"
  },
  { 
    name: "Orthodontics/Braces", 
    description: "Removable appliances, fixed appliances (conventional and Individual Patient (IP) brackets), orthodontic retainers, temporary anchorage devices (TAD)/mini orthodontic implants for braces",
    videoUrl: "/videos/orthodontics.mp4"
  },
  { 
    name: "Implant Dentistry", 
    description: "Single implant supported crown, implant supported bridge and denture",
    videoUrl: "/videos/implant-dentistry.mp4"
  },
]

const facilityImages = [
  { src: "/firsttreatment.png", alt: "First Treatment Room (Surgery)" },
  { src: "/scndtreatment.png", alt: "The Second Treatment Room (Surgery)" },
  { src: "/xrayteeth.png", alt: "The 3D Xray Unit" },
  { src: "/steril.png", alt: "Sterilisation Room" },
]

const ServiceCard: React.FC<{ service: Service; index: number }> = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isHovered && videoRef.current) {
      videoRef.current.play()
    } else if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }, [isHovered])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card 
        className="hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden bg-gradient-to-br from-[#E6D5E6] to-white h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent className="p-0 h-full flex flex-col">
          <div className="relative flex-grow">
            {isHovered ? (
              <video
                ref={videoRef}
                src={service.videoUrl}
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-[#F2E6F2] flex items-center justify-center">
                <h3 className="text-xl font-bold text-[#666666] text-center px-4">{service.name}</h3>
              </div>
            )}
          </div>
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="p-4 bg-white"
              >
                <h3 className="text-xl font-bold text-[#666666] mb-2">{service.name}</h3>
                <p className="text-[#666666]">{service.description}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function Services() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
            <Link href="/contact" className="text-white hover:text-[#E6D5E6] transition-colors duration-300">Contact</Link>
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
          
          <h1 className="text-4xl font-bold text-[#666666] mb-8">Our Services</h1>
        </motion.div>
        
        <section className="mb-12">
          <motion.h2 
            className="text-2xl font-bold text-[#666666] mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Types of Service and Treatment Available
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </section>

        <motion.section 
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-[#666666] mb-4">Treatment Fee</h2>
          <Card className="bg-gradient-to-br from-[#E6D5E6] to-white">
            <CardContent className="p-6">
              <p className="text-[#666666]">
                We strive to follow the Malaysian Dental Association scale of fees. Patients can request for a quote before any procedure. However, we do not quote a fee through email.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section 
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-[#666666] mb-4">Facilities</h2>
          <Card className="bg-gradient-to-br from-[#E6D5E6] to-white">
            <CardContent className="p-6">
              <p className="text-[#666666] mb-4">
                The moment anyone enters our clinic premise, he or she will be greeted by our warm, friendly staff and associate dentist at the reception counter and in the treatment room.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {["First Treatment Room (Surgery)", "The Second Treatment Room (Surgery)", "Sterilisation Room", "Other Equipment"].map((title, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <h3 className="text-xl font-bold text-[#666666] mb-2">{title}</h3>
                    <p className="text-[#666666] mb-4">
                      {index === 0 && "There are two treatment rooms/ surgeries in our practice. Each has a Belmont dental chair with clean water system using Reverse Osmosis (RO) water attached. The second surgery has a wall mounted Gendex intra oral Xray unit."}
                      {index === 1 && "There is a VaTech PaxFlex 3D Xray unit in the Xray Room cum Office. It is enclosed by an 10 inches brick wall with its door and frame lead lined for prevention of radiation exposure."}
                      {index === 2 && "The Sterilisation Room is equipped with two autoclaves: Steriline B (B class autoclave) and Statim (S class autoclave), ultrasonic bath and Water Wise water distiller."}
                      {index === 3 && (
                        <ul className="list-disc list-inside">
                          <li>Endo-mate and VDW motors for Endodontic treatment using rotary instruments</li>
                          <li>Carl Zeiss and The Swiss Loupes for better view during fine procedures</li>
                          <li>Durr Dental Suction motors</li>
                          <li>Durr Dental dry air Compressors</li>
                          <li>Valedent Light Cure units</li>
                          <li>Amway Air Treatment System</li>
                          <li>GC Capsule Mixers</li>
                        </ul>
                      )}
                    </p>
                  </motion.div>
                ))}
              </div>
              <p className="text-[#666666] mt-4">
                Our clinic is networked and all dental records are digitally stored for efficiency and easy retrieval. We strive to educate our patients using our dental education software to create a better awareness of their oral health and wellness.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                {facilityImages.map((image, index) => (
                  <motion.div 
                    key={index} 
                    className="relative h-48"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </main>

      <footer className="bg-[#9370DB] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">We Value Your  Smile</p>
          <p className="text-[#E6D5E6]">Copyright © 2024 Dr Christina's Dental Clinic. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}