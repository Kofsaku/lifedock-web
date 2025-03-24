"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png?height=40&width=200"
              alt="広尾オレンジクリニック"
              width={200}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              ホーム
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary">
              クリニック紹介
            </Link>
            <Link href="/access" className="text-sm font-medium hover:text-primary">
              アクセス
            </Link>
            <Link href="/recruitment" className="text-sm font-medium hover:text-primary">
              スタッフ募集
            </Link>
            <Button 
              size="sm" 
              className="ml-4 bg-orange-500 hover:bg-orange-600 text-white"
            >
              <Link href="https://lifedock.jp" target="_blank">
                LifeDockサービス
              </Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="メニュー">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="/"
              className="block py-2 text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              ホーム
            </Link>
            <Link
              href="/about"
              className="block py-2 text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              クリニック紹介
            </Link>
            <Link
              href="/access"
              className="block py-2 text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              アクセス
            </Link>
            <Link
              href="/recruitment"
              className="block py-2 text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              スタッフ募集
            </Link>
            <Button className="w-full" size="sm">
              <Link href="https://lifedock.jp" target="_blank" className="w-full" onClick={() => setIsMenuOpen(false)}>
                LifeDockサービス
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

