"use client"

import { useState } from "react"
import { Calendar, Heart, Share2, Settings, Home } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { MainView } from "@/components/main-view"
import { BlitzView } from "@/components/blitz-view"

export default function Page() {
  const [view, setView] = useState<"main" | "blitz">("main")
  
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto">
        {view === "main" ? (
          <MainView onBlitzClick={() => setView("blitz")} />
        ) : (
          <BlitzView onBack={() => setView("main")} />
        )}
      </div>
      <nav className="flex justify-around items-center p-2 pt-1 border-t border-gray-800">
        <Button variant="ghost" size="icon" className="text-gray-400 flex flex-col items-center" onClick={() => setView("main")}>
          <Home className="h-5 w-5 mb-1" />
          <span className="text-xs">Today</span>
        </Button>
        <Button variant="ghost" size="icon" className="text-gray-400 flex flex-col items-center">
          <Calendar className="h-5 w-5 mb-1" />
          <span className="text-xs">Calendar</span>
        </Button>
        <Button variant="ghost" size="icon" className="text-gray-400 flex flex-col items-center">
          <Heart className="h-5 w-5 mb-1" />
          <span className="text-xs">Favorites</span>
        </Button>
        <Button variant="ghost" size="icon" className="text-gray-400 flex flex-col items-center">
          <Share2 className="h-5 w-5 mb-1" />
          <span className="text-xs">Share</span>
        </Button>
        <Button variant="ghost" size="icon" className="text-gray-400 flex flex-col items-center">
          <Settings className="h-5 w-5 mb-1" />
          <span className="text-xs">Settings</span>
        </Button>
      </nav>
    </div>
  )
}

