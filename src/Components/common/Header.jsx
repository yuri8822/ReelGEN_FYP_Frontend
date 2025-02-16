"use client"

import { useState } from "react";
import logo from "../../Assets/logo2.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  //etna san serif font to be used later 

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/">
          <img src={logo} alt="ReelGen Logo" className="h-20" />
        </a>
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
