import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface DailyVerseProps {
  onBlitzClick: () => void
}

export function DailyVerse({ onBlitzClick }: DailyVerseProps) {
  return (
    <div className="flex flex-col gap-2 p-4">
      <div className="text-3xl font-light text-center mb-2">Thursday, November 14</div>
      <Card className="relative aspect-[3/4] overflow-hidden">
        <Image
          src="/placeholder.svg?height=450&width=400"
          alt="Background"
          className="object-cover"
          fill
        />
        <div className="absolute inset-0 bg-black/60 p-4 flex flex-col justify-center items-center text-center">
          <h2 className="text-2xl font-light mb-4">Today's Verse</h2>
          <p className="text-2xl mb-4 leading-relaxed">
            The heart knows its own bitterness and joy;
            he will not share these with a stranger.
          </p>
          <p className="text-sm text-gray-400">Proverbs 14:10 (WEB)</p>
        </div>
      </Card>
      <div className="grid grid-cols-3 gap-2 mt-2">
        <Button
          variant="ghost"
          className="h-20 relative overflow-hidden"
        >
          <Image
            src="/placeholder.svg?height=200&width=200"
            alt="Observe"
            className="object-cover"
            fill
          />
          <span className="absolute inset-0 flex items-center justify-center bg-black/40 text-sm">
            Observe
          </span>
        </Button>
        <Button
          variant="ghost"
          className="h-20 relative overflow-hidden"
        >
          <Image
            src="/placeholder.svg?height=200&width=200"
            alt="Pray"
            className="object-cover"
            fill
          />
          <span className="absolute inset-0 flex items-center justify-center bg-black/40 text-sm">
            Pray
          </span>
        </Button>
        <Button
          variant="ghost"
          className="h-20 relative overflow-hidden"
        >
          <Image
            src="/placeholder.svg?height=200&width=200"
            alt="Challenge"
            className="object-cover"
            fill
          />
          <span className="absolute inset-0 flex items-center justify-center bg-black/40 text-sm">
            Challenge
          </span>
        </Button>
      </div>
      <Button
        variant="secondary"
        size="lg"
        className="w-full mt-2"
        onClick={onBlitzClick}
      >
        PROVERBS DAILY BLITZ
      </Button>
      <div className="flex justify-center mt-2">
        <Image
          src="/placeholder.svg?height=40&width=160"
          alt="God Only Knows What"
          width={160}
          height={40}
          className="opacity-80"
        />
      </div>
    </div>
  )
}

