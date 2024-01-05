"use client"
import { Analytics } from '@vercel/analytics/react';
import React, { useEffect, useState } from 'react';
import { Layout } from '../components';
import './globals.scss'
import { getPosts } from '@/services';
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function RootLayout({ children }) {

  return (
    <html lang="de">
      <head>
        <title>Jungwacht St. Anton Leiter</title>
      </head>
      <body>
        <SpeedInsights/>
        <Layout>
          <div>{children}</div>
        </Layout>
        <Analytics />
      </body>
    </html>
  )
}
