'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function AboutPage() {
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
                ہمارے بارے میں
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              مشہور کی کہانی
            </h1>
            <p className="text-neutral-500 max-w-2xl mx-auto">
              پاکستان کے ہر شہر کی مشہور چیزوں کو آپ تک پہنچانا
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-8"
          >
            <section className="bg-neutral-50 rounded-2xl p-6 md:p-8">
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">ہمارا مشن</h2>
              <p className="text-neutral-600 leading-relaxed text-sm">
                مشہور کا مقصد پاکستان کے ہر شہر کی خاص اور مشہور چیزوں کو ایک پلیٹ فارم پر لانا ہے۔ 
                ہم چاہتے ہیں کہ ملتان کے آم، سیالکوٹ کی اسپورٹس، پشاور کی چپل اور ہر علاقے کی 
                روایتی چیزیں پورے پاکستان میں آسانی سے دستیاب ہوں۔
              </p>
            </section>

            <section className="bg-neutral-50 rounded-2xl p-6 md:p-8">
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">ہماری ٹیم</h2>
              <p className="text-neutral-600 leading-relaxed text-sm">
                ہماری ٹیم نوجوان اور پرجوش پاکستانیوں پر مشتمل ہے جو ٹیکنالوجی کے ذریعے 
                مقامی کاروباروں کو ترقی دینا چاہتے ہیں۔ ہم مل کر پاکستان کی روایات کو 
                ڈیجیٹل دنیا سے جوڑ رہے ہیں۔
              </p>
            </section>

            <section className="bg-neutral-50 rounded-2xl p-6 md:p-8">
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">ہمارے اقدار</h2>
              <ul className="text-neutral-600 space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                  معیار - صرف اصلی اور بہترین مصنوعات
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                  اعتماد - شفافیت اور ایمانداری
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                  سہولت - آسان اور تیز سروس
                </li>
              </ul>
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
