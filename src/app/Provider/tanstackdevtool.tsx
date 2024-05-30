'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React, { Children, ReactNode } from 'react'
import queryClient from './Client'

const Tanstackdevtool = () => {
  return (
    <>
    <QueryClientProvider client={queryClient} >
               <ReactQueryDevtools />
    </QueryClientProvider>
    </>
  )
}

export default Tanstackdevtool