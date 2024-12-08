import React from 'react'
import { Home, Calendar, Heart, Settings } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface MobileLayoutProps {
  children: React.ReactNode
}

export function MobileLayout({ children }: MobileLayoutProps) {
  return (
    <div className="max-w-md mx-auto h-screen flex flex-col bg-black text-white overflow-hidden">
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
      <nav className="flex justify-around items-center p-4 bg-gray-900">
        <Button variant="ghost" size="icon">
          <Home className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon">
          <Calendar className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon">
          <Heart className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon">
          <Settings className="h-6 w-6" />
        </Button>
      </nav>
    </div>
  )
}

