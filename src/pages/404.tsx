'use client';

import Link from 'next/link';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4'>
      <div className='bg-white p-8 md:p-12 rounded-[24px] shadow-sm border border-gray-100 max-w-md w-full text-center'>
        {/* Icon */}
        <div className='w-16 h-16 bg-[#0F1B2D]/5 rounded-2xl flex items-center justify-center mx-auto mb-6'>
          <ReportGmailerrorredIcon
            className='text-[#0F1B2D]'
            sx={{ fontSize: 32 }}
          />
        </div>

        {/* Title */}
        <h1 className='text-3xl font-bold text-gray-900 mb-3 tracking-tight'>
          Page Not Found
        </h1>

        {/* Description */}
        <p className='text-sm text-gray-500 mb-8 leading-relaxed'>
          Oops! It seems we've lost this page. The link may be broken, or the
          page may have been removed.
        </p>

        <Link
          href='/'
          className='w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#0F1B2D] text-white rounded-xl font-medium hover:bg-[#1a2d47] transition-all group shadow-sm active:scale-[0.98]'
        >
          <ArrowBackIcon
            sx={{
              fontSize: 18,
              transform: 'translateY(1px)',
            }}
            className='transition-transform group-hover:-translate-x-1'
          />
          <span className='leading-none'>Back to Dashboard</span>
        </Link>
      </div>
    </div>
  );
}
