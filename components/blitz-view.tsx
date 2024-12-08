import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface BlitzViewProps {
  onBack: () => void
}

export function BlitzView({ onBack }: BlitzViewProps) {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-lg">PROVERBS DAILY BLITZ</h1>
      </div>
      <Card className="aspect-video bg-gray-900 flex items-center justify-center text-sm">
        YouTube Video Embed
      </Card>
      <Card className="p-4">
        <h2 className="text-lg font-light mb-2">Today's Verse</h2>
        <p className="text-base mb-2">
          The heart knows its own bitterness and joy;
          he will not share these with a stranger.
        </p>
        <p className="text-sm text-gray-400">Proverbs 14:10 (WEB)</p>
      </Card>
      <Card className="p-4">
        <h2 className="text-lg font-light mb-2">Morning Prayer</h2>
        <p className="text-base">
          Lord help me develop wisdom through self-observation and Your guidance.
        </p>
      </Card>
    </div>
  )
}

