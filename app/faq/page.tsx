'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function FAQPage() {
  const faqs = [
    {
      q: 'مشہور کیا ہے؟',
      a: 'مشہور ایک ای کامرس پلیٹ فارم ہے جو پاکستان کے ہر شہر کی مشہور اور خاص چیزوں کو آپ کے گھر تک پہنچاتا ہے۔'
    },
    {
      q: 'کیا ادائیگی محفوظ ہے؟',
      a: 'جی ہاں، ہم جدید سیکیورٹی ٹیکنالوجی استعمال کرتے ہیں۔ آپ کی ادائیگی کی معلومات مکمل طور پر محفوظ ہیں۔'
    },
    {
      q: 'کیا کیش آن ڈیلیوری دستیاب ہے؟',
      a: 'جی ہاں، آپ ڈیلیوری کے وقت نقد ادائیگی کر سکتے ہیں۔'
    },
    {
      q: 'میں اپنا آرڈر کیسے ٹریک کروں؟',
      a: 'آرڈر کنفرم ہونے کے بعد آپ کو ٹریکنگ لنک بھیجا جائے گا جس سے آپ اپنے آرڈر کی حیثیت دیکھ سکتے ہیں۔'
    },
    {
      q: 'کیا میں فروخت کنندہ بن سکتا ہوں؟',
      a: 'جی ہاں! اگر آپ کے پاس کوئی مشہور مقامی پروڈکٹ ہے تو آپ ہمارے پلیٹ فارم پر فروخت کر سکتے ہیں۔ رابطہ کریں۔'
    },
  ]

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
                FAQ
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              عام سوالات
            </h1>
            <p className="text-neutral-500 max-w-2xl mx-auto">
              اکثر پوچھے جانے والے سوالات اور جوابات
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            {faqs.map((faq, i) => (
              <div key={i} className="bg-neutral-50 rounded-2xl p-6">
                <h3 className="text-base font-semibold text-neutral-900 mb-2">{faq.q}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
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
