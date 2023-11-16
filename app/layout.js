"use client"
import { Analytics } from '@vercel/analytics/react';
import React, { useEffect, useState } from 'react';
import { Layout } from '../components';
import './globals.scss'
import { getPosts } from '@/services';

export default function RootLayout({ children }) {

  return (
    <html lang="de">
      <head>
        <title>Jungwacht St.Anton</title>
      </head>
      <body>
        <Layout>
          <div>{children}</div>
        </Layout>
        <Analytics />
      </body>
    </html>
  )
}
