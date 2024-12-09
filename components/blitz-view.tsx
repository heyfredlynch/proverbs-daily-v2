import { ArrowLeft } from 'lucide-react'
import React from 'react'

export default function BlitzView() {
  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <ArrowLeft className="w-6 h-6" />
        <button className="px-4 py-2 bg-slate-900 text-white rounded-md">
          Back
        </button>
      </div>
      <h2 className="text-2xl font-bold mb-4">Daily Blitz</h2>
      {/* Add your blitz content here */}
    </div>
  )
}