"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-semibold" style={{ color: "var(--olive-green)" }}>
            Nutrition Balance
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:opacity-80 transition-opacity duration-200"
                style={{ "--hover-color": "var(--olive-green)" } as React.CSSProperties}
              >
                {item.label}
              </Link>
            ))}
            <Button
              className="text-white hover:opacity-90"
              style={{
                backgroundColor: "var(--soft-pink)",
                color: "var(--dark-green)",
              }}
            >
              Join Telegram
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
              style={{ color: "var(--olive-green)" }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:opacity-80 transition-opacity duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                className="w-fit"
                style={{
                  backgroundColor: "var(--soft-pink)",
                  color: "var(--dark-green)",
                }}
              >
                Join Telegram
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
