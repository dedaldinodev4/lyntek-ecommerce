"use client"
import React from 'react'

type SkeletonWrapperProps = {
  loading: boolean;
  children: React.ReactNode;
}
export const SkeletonWrapper = ({ loading, children }: SkeletonWrapperProps) => {
  return (
    <div className='relative overflow-hidden rounded-md'>
      {children}
      {loading && (
        <div className="absolute inset-0">
          <div className="absolute inset-0 animate-pulse bg-gray-2/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_1.5s_infinite]" />
        </div>
      )}
    </div>
  )
}