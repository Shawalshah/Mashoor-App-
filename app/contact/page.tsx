'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setName('')
    setPhone('')
    setEmail('')
    setMessage('')
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-6" dir="rtl">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 text-right"
          >
            رابطہ کریں
          </motion.h1>
          <p className="text-neutral-600 leading-relaxed text-right">
            آپ کے سوالات اور تجاویز کے لیے ہم حاضر ہیں۔
          </p>

          <div className="mt-10 bg-neutral-50 rounded-2xl p-6">
            {submitted ? (
              <div className="text-right">
                <p className="text-neutral-900 font-semibold mb-2">شکریہ!</p>
                <p className="text-sm text-neutral-600">آپ کا پیغام موصول ہوگیا ہے۔ ہم جلد رابطہ کریں گے۔</p>
                <button
                  className="mt-6 text-sm font-medium text-primary-600 hover:text-primary-700"
                  onClick={() => setSubmitted(false)}
                >
                  نیا پیغام بھیجیں
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">نام</label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none text-sm"
                      placeholder="اپنا نام لکھیں"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">فون نمبر</label>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      dir="ltr"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none text-sm"
                      placeholder="03001234567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">ای میل</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    dir="ltr"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none text-sm"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">پیغام</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none text-sm resize-none"
                    placeholder="اپنا پیغام یہاں لکھیں..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-gradient text-white px-6 py-3 rounded-xl font-medium"
                >
                  پیغام بھیجیں
                </button>
              </form>
            )}
          </div>

          <div className="mt-10 text-right">
            <Link href="/" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
              واپس ہوم
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/assets/MAshoor Logo.png" alt="مشہور" width={120} height={40} className="h-10 w-auto" />
        </Link>
        <Link href="/" className="text-sm text-neutral-600 hover:text-neutral-900">ہوم</Link>
      </div>
    </header>
  )
}
