import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export default function DevTool() {
    return (
          <ReactQueryDevtools initialIsOpen={false} />
      )
    }