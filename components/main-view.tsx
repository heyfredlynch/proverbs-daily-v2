import React from 'react'

interface MainViewProps {
  children: React.ReactNode
}

export default function MainView({ children }: MainViewProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="bg-white shadow-sm mb-6">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-slate-900">Proverbs Daily</h1>
        </div>
      </nav>
      <main className="container mx-auto px-4">
        {children}
      </main>
    </div>
  )
}