'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-6" dir="rtl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="mb-6 flex justify-center">
              <span className="inline-flex flex-row-reverse items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-xs font-medium text-primary-700">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
                کیریئرز
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              ہماری ٹیم میں شامل ہوں
            </h1>
            <p className="text-neutral-500 max-w-2xl mx-auto">
              مشہور کے ساتھ مل کر پاکستان کی ای کامرس انڈسٹری کو بدلیں
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <section className="bg-neutral-50 rounded-2xl p-6 md:p-8">
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">ہم کیوں؟</h2>
              <ul className="text-neutral-600 space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                  تیزی سے بڑھتی ہوئی کمپنی
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                  سیکھنے اور ترقی کے مواقع
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                  دوستانہ ماحول
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                  مسابقتی تنخواہ
                </li>
              </ul>
            </section>

            <section className="bg-primary-50 rounded-2xl p-6 md:p-8 text-center">
              <h2 className="text-lg font-semibold text-neutral-900 mb-3">موجودہ آسامیاں</h2>
              <p className="text-neutral-600 text-sm mb-4">
                ابھی کوئی آسامی دستیاب نہیں ہے۔ اپنی CV بھیجیں، ہم آپ سے رابطہ کریں گے۔
              </p>
              <p className="text-primary-700 text-sm font-medium">careers@mashoor.pk</p>
            </section>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-10 text-center"
          >
            <Link href="/" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
              واپس ہوم ←
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  )
}

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <Image src="/assets/MAshoor Logo.png" alt="مشہور" width={120} height={40} className="h-10 w-auto" />
        </Link>
        <Link href="/" className="text-sm text-neutral-600 hover:text-neutral-900">ہوم</Link>
      </div>
    </header>
  )
}
