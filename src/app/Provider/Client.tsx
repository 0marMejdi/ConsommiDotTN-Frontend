import { QueryClient } from '@tanstack/react-query'
import React from 'react'

  const queryClient = new QueryClient({
    defaultOptions: {
        queries:{
            staleTime: Infinity,
        }
    }
  })

export default queryClient

