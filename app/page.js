"use client"
import React, { useEffect, useState } from 'react';
import { RecentPosts, Interduction, Zeltvermietung } from '@/components';
import { getPosts } from '../services'
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-0 lg:px-10 mb-8"> 
      <p className='text-white text-center text-4xl'>Wilkommen in der Leiterwebseite der Jubla St. Anton</p>
    </div>
  );
}
