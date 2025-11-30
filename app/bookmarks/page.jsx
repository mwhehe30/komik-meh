'use client';

import KomikCard from '@/components/KomikCard';
import useBookmarkStore from '@/store/useBookmarkStore';
import { Bookmark, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function BookmarksPage() {
  const { bookmarks, clearBookmarks, removeBookmark } = useBookmarkStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <main className='min-h-screen pb-24 pt-8 container mx-auto px-4'>
        <div className='animate-pulse space-y-4'>
          <div className='h-8 bg-zinc-800 rounded w-1/4'></div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {[1, 2, 3].map((i) => (
              <div key={i} className='h-32 bg-zinc-800 rounded-xl'></div>
            ))}
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className='min-h-screen pb-24 pt-8 container mx-auto px-4'>
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white to-gray-400'>
          Favorit Saya
        </h1>
        {bookmarks.length > 0 && (
          <button
            onClick={clearBookmarks}
            className='flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-400 hover:text-red-300 bg-red-500/10 hover:bg-red-500/20 rounded-full transition-colors'
          >
            <Trash2 className='w-4 h-4' />
            Hapus Semua
          </button>
        )}
      </div>

      {bookmarks.length === 0 ? (
        <div className='flex flex-col items-center justify-center h-[50vh] text-center'>
          <div className='w-20 h-20 bg-zinc-800/50 rounded-full flex items-center justify-center mb-4'>
            <Bookmark className='w-10 h-10 text-gray-500' />
          </div>
          <h2 className='text-xl font-semibold text-gray-300 mb-2'>
            Belum ada favorit
          </h2>
          <p className='text-gray-500 max-w-xs'>
            Simpan komik favoritmu agar mudah ditemukan kembali.
          </p>
          <Link
            href='/'
            className='mt-6 px-6 py-2 bg-primary hover:bg-primary/90 text-white rounded-full font-medium transition-colors'
          >
            Jelajahi Komik
          </Link>
        </div>
      ) : (
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4'>
          {bookmarks.map((item, index) => (
            <div key={index} className='relative group/bookmark'>
              <KomikCard komik={item} />
              {/* Delete Button */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  removeBookmark(item.slug);
                }}
                className='absolute top-2 right-2 z-20 p-2 bg-black/70 hover:bg-red-500 text-white rounded-full backdrop-blur-sm transition-all duration-200 opacity-0 group-hover/bookmark:opacity-100'
                title='Hapus dari favorit'
              >
                <Trash2 className='w-4 h-4' />
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
