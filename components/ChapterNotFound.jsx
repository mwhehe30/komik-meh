'use client';

import { BookOpen, Home } from 'lucide-react';
import Link from 'next/link';

export default function ChapterNotFound() {
  return (
    <main className='min-h-screen flex items-center justify-center px-4'>
      <div className='text-center max-w-2xl mx-auto'>
        {/* Illustration */}
        <div className='relative mb-8'>
          <div className='absolute inset-0 blur-3xl opacity-20'>
            <div className='w-64 h-64 mx-auto bg-gradient-to-r from-amber-600 to-orange-600 rounded-full'></div>
          </div>
          <div className='relative flex justify-center mb-6'>
            <div className='w-32 h-32 bg-zinc-800/50 rounded-full flex items-center justify-center border-4 border-zinc-700'>
              <BookOpen className='w-16 h-16 text-amber-500' />
            </div>
          </div>
        </div>

        {/* Message */}
        <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
          Chapter Tidak Ditemukan
        </h2>
        <p className='text-gray-400 text-lg mb-8 max-w-md mx-auto'>
          Maaf, chapter yang Anda cari tidak tersedia atau belum dirilis.
        </p>

        {/* Action Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <button
            onClick={() => window.history.back()}
            className='inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-bold rounded-2xl transition-all duration-300 shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 hover:scale-105'
          >
            Kembali
          </button>
          <Link
            href='/'
            className='inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-800/60 hover:bg-zinc-800 text-white font-bold rounded-2xl transition-all duration-300 border border-zinc-700 hover:border-zinc-600'
          >
            <Home className='w-5 h-5' />
            Ke Beranda
          </Link>
        </div>

        {/* Info Box */}
        <div className='mt-12 p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800'>
          <h3 className='text-lg font-semibold text-white mb-3'>
            Kemungkinan Penyebab
          </h3>
          <ul className='text-left text-gray-400 space-y-2'>
            <li className='flex items-start gap-2'>
              <span className='text-amber-500 mt-1'>•</span>
              <span>Chapter belum dirilis atau masih dalam proses</span>
            </li>
            <li className='flex items-start gap-2'>
              <span className='text-amber-500 mt-1'>•</span>
              <span>Link yang Anda gunakan sudah tidak valid</span>
            </li>
            <li className='flex items-start gap-2'>
              <span className='text-amber-500 mt-1'>•</span>
              <span>Chapter telah dihapus dari sumber</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
