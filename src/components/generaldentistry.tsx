'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const blogPosts = [
  { id: 1, title: "The Importance of Regular Dental Check-ups", content: "Regular dental check-ups are crucial for maintaining good oral health. They allow your dentist to detect and prevent potential issues before they become serious problems...", image: "/placeholder.svg?height=200&width=300", date: "2024-03-15" },
  { id: 2, title: "Tips for Teaching Kids Good Oral Hygiene", content: "Instilling good oral hygiene habits in children from an early age is essential for their long-term dental health. Here are some fun and effective ways to encourage your kids to brush and floss regularly...", image: "/placeholder.svg?height=200&width=300", date: "2024-03-10" },
  { id: 3, title: "Understanding Gum Disease", content: "Gum disease is a common but serious condition that affects many adults. Learn about the signs, symptoms, and treatment options for gingivitis and periodontitis...", image: "/placeholder.svg?height=200&width=300", date: "2024-03-05" },
  { id: 4, title: "The Benefits of Fluoride Treatment", content: "Fluoride treatments can help prevent tooth decay and strengthen enamel. Discover how this simple procedure can benefit both children and adults...", image: "/placeholder.svg?height=200&width=300", date: "2024-02-28" },
  { id: 5, title: "Choosing the Right Toothbrush: Manual vs. Electric", content: "With so many options available, choosing the right toothbrush can be overwhelming. We compare manual and electric toothbrushes to help you make an informed decision...", image: "/placeholder.svg?height=200&width=300", date: "2024-02-20" },
]

export function Generaldentistry() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-lavender-50 to-white font-sans">
      <main className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-lavender-800 hover:text-pink-600 mb-8">
          <ArrowLeft className="mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold text-lavender-800 mb-8">General Dentistry Blog</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden h-full flex flex-col">
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h2 className="font-bold text-xl mb-2 text-lavender-700">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.content.substring(0, 100)}...</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500">Posted on: {post.date}</p>
                  <Button variant="link" className="text-pink-600">Read More</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}