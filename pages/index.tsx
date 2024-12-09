import React from 'react'
import MainView from '../components/main-view'
import DailyVerse from '../components/DailyVerse'
import BlitzView from '../components/blitz-view'

export default function Home() {
  return (
    <MainView>
      <div className="space-y-6">
        <DailyVerse />
        <BlitzView />
      </div>
    </MainView>
  )
}