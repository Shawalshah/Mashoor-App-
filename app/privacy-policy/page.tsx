'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function PrivacyPolicyPage() {
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
            پرائیویسی پالیسی
          </motion.h1>
          <p className="text-neutral-600 leading-relaxed text-right">
            ہم آپ کی معلومات کو احترام اور حفاظت کے ساتھ رکھتے ہیں۔
          </p>

          <div className="mt-10 space-y-8 text-right">
            <section className="bg-neutral-50 rounded-2xl p-6">
              <h2 className="text-lg font-semibold text-neutral-900 mb-3">صارفین کے لیے</h2>
              <ul className="text-sm text-neutral-600 space-y-2 leading-relaxed">
                <li>ہم آرڈر مکمل کرنے کے لیے بنیادی معلومات لیتے ہیں (نام، فون، پتہ)۔</li>
                <li>آپ کی معلومات صرف سروس بہتر بنانے اور ڈیلیوری کے لیے استعمال ہوتی ہے۔</li>
                <li>آپ اپنی معلومات اپڈیٹ یا حذف کرنے کی درخواست کر سکتے ہیں۔</li>
              </ul>
            </section>

            <section className="bg-neutral-50 rounded-2xl p-6">
              <h2 className="text-lg font-semibold text-neutral-900 mb-3">فروخت کنندگان کے لیے</h2>
              <ul className="text-sm text-neutral-600 space-y-2 leading-relaxed">
                <li>ہم دکان/کاروبار کی معلومات اور ادائیگی کی تفصیل تصدیق کے لیے لیتے ہیں۔</li>
                <li>یہ معلومات ادائیگی، آرڈر مینجمنٹ اور قانونی تقاضوں کے لیے استعمال ہو سکتی ہے۔</li>
                <li>آپ اپنے کاروباری پروفائل کی معلومات اپڈیٹ کر سکتے ہیں۔</li>
              </ul>
            </section>

            <section className="bg-neutral-50 rounded-2xl p-6">
              <h2 className="text-lg font-semibold text-neutral-900 mb-3">رابطہ</h2>
              <p className="text-sm text-neutral-600 leading-relaxed">
                کسی بھی سوال کے لیے: privacy@mashoor.pk
              </p>
            </section>
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
