import React from 'react'
import { ArrowLeft, MoreVertical } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MobileLayout } from "@/components/mobile-layout"

export default function BlitzScreen() {
  return (
    <MobileLayout>
      <div className="flex flex-col min-h-full bg-gray-900 text-white">
        <header className="flex items-center justify-between p-4 bg-gray-800">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-lg font-semibold">PROVERBS DAILY BLITZ</h1>
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-6 w-6" />
          </Button>
        </header>
        <main className="flex-1 overflow-y-auto p-4 space-y-4">
          <Card className="bg-gray-800 overflow-hidden">
            <div className="aspect-video bg-gray-700 flex items-center justify-center">
              <span className="text-gray-400">YouTube Video Embed</span>
            </div>
          </Card>
          <Card className="bg-gray-800 p-4">
            <h2 className="text-xl font-light mb-2">Today's Verse</h2>
            <p className="text-center mb-2">
              The heart knows its own bitterness and joy;
              he will not share these with a stranger.
            </p>
            <p className="text-sm text-gray-400 text-center">Proverbs 14:10 (WEB)</p>
          </Card>
          <Card className="bg-gray-800 p-4">
            <h2 className="text-xl font-light mb-2">Morning Prayer</h2>
            <p className="text-center">
              Lord help me develop wisdom through self-observation and Your guidance.
            </p>
          </Card>
        </main>
      </div>
    </MobileLayout>
  )
}

