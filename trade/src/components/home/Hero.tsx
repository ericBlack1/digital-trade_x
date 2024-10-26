
// components/home/Hero.tsx
'use client'

import { useState } from 'react'
import { Button } from '@/components/common/Button'
import { Input } from '@/components/common/Input'
import { Container } from '../ui/Container'

export function Hero() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle trial signup
  }

  return (
    <div className="bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-100 min-h-[80vh] flex items-center">
      <Container>
        <div className="max-w-4xl mx-auto text-center py-20">
          <h1 className="text-5xl font-bold mb-6">
            Bring your ideas to life for $1/month
          </h1>
          <p className="text-xl mb-8">
            The future of business is yours to shape. Sign up for a free trial and enjoy your first month for just $1.
          </p>
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex gap-4">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
              required
            />
            <Button type="submit">
              Start free trial
            </Button>
          </form>
          <p className="text-sm mt-4 text-gray-600">
            Try free for 3 days, no credit card required. By entering your email, you agree to receive marketing emails.
          </p>
        </div>
      </Container>
    </div>
  )
}
