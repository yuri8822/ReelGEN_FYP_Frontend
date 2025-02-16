"use client"

import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-primary">ReelGEN</div>
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-600 text-lg hover:text-primary">
            Features
          </a>
          <a href="#how-it-works" className="text-gray-600 text-lg hover:text-primary">
            How It Works
          </a>
          <a href="#pricing" className="text-gray-600 text-lg hover:text-primary">
            Pricing
          </a>
        </nav>
        <button className="hidden md:block bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark">
          Get Started
        </button>
        <button className="md:hidden text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2">
          <a href="#features" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
            Features
          </a>
          <a href="#how-it-works" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
            How It Works
          </a>
          <a href="#pricing" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
            Pricing
          </a>
          <a href="#" className="block px-4 py-2 text-primary hover:bg-gray-100">
            Get Started
          </a>
        </div>
      )}
    </header>
  )
}

