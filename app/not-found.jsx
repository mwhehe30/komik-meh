'use client';

import { FileQuestion, Home, Search } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className='min-h-screen flex items-center justify-center px-4'>
      <div className='text-center max-w-2xl mx-auto'>
        {/* 404 Illustration */}
        <div className='relative mb-8'>
          <div className='absolute inset-0 blur-3xl opacity-20'>
            <div className='w-64 h-64 mx-auto bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full'></div>
          </div>
          <div className='relative'>
            <h1 className='text-[120px] md:text-[180px] font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 leading-none'>
              404
            </h1>
          </div>
        </div>

        {/* Icon */}
        <div className='flex justify-center mb-6'>
          <div className='w-20 h-20 bg-zinc-800/50 rounded-full flex items-center justify-center'>
            <FileQuestion className='w-10 h-10 text-gray-400' />
          </div>
        </div>

        {/* Message */}
        <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
          Halaman Tidak Ditemukan
        </h2>
        <p className='text-gray-400 text-lg mb-8 max-w-md mx-auto'>
          Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan.
        </p>

        {/* Action Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <Link
            href='/'
            className='inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-bold rounded-2xl transition-all duration-300 shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 hover:scale-105'
          >
            <Home className='w-5 h-5' />
            Kembali ke Beranda
          </Link>
          <Link
            href='/search'
            className='inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-800/60 hover:bg-zinc-800 text-white font-bold rounded-2xl transition-all duration-300 border border-zinc-700 hover:border-zinc-600'
          >
            <Search className='w-5 h-5' />
            Cari Komik
          </Link>
        </div>

        {/* Decorative Elements */}
        <div className='mt-16 flex justify-center gap-2'>
          <div className='w-2 h-2 bg-violet-600 rounded-full animate-pulse'></div>
          <div className='w-2 h-2 bg-indigo-600 rounded-full animate-pulse delay-75'></div>
          <div className='w-2 h-2 bg-blue-600 rounded-full animate-pulse delay-150'></div>
        </div>
      </div>
    </main>
  );
}
