import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PodcastMatch — Find sponsors that actually fit your audience',
  description: 'Analyzes podcast RSS feeds and listener demographics to match podcasters with relevant sponsors. AI-powered sponsor-audience fit scoring for independent podcasters.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="545dd6dc-db22-4407-b8db-95df3331c174"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
