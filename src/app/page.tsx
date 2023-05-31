'use client'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import Form from "../components/Form"

const queryClient = new QueryClient()

export default function Home() {

  return (
    <QueryClientProvider client={queryClient}>
      <main className="flex min-h-screen flex-col items-center p-24">
        <Form />
      </main>
    </QueryClientProvider>
  )
}
