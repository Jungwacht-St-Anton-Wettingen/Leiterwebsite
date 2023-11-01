import React from 'react'

export default function notFound() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white shadow-lg rounded-xl p-8">
        <div className="flex">
          <img src="../404.jpg" alt="404 Icon" className="mr-4 h-20 w-20" />
          <div>
            <h1 className="text-2xl font-bold mb-2">Huch?</h1>
            <p>Wir konnten diese Seite leider nicht finden</p>
          </div>
        </div>
      </div>
    </div>
  )
}
