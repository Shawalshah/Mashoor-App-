'use client'

import { motion } from 'framer-motion'
import { Package, Shield, Truck, Users, Lock, ShoppingBag, Globe, Smartphone, ArrowLeft, Star } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <TrustSection />
      <CTASection />
      <Footer />
    </main>
  )
}

function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md"
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <Image 
              src="/assets/MAshoor Logo.png" 
              alt="مشہور" 
              width={120} 
              height={40} 
              className="h-10 w-auto"
            />
          </a>

          <nav className="flex items-center gap-8">
            <motion.a
              href="/"
              whileHover={{ opacity: 0.75 }}
              className="text-neutral-700 hover:text-neutral-900 text-sm font-medium transition-colors"
            >
              ہوم
            </motion.a>
            <motion.a
              href="/privacy-policy"
              whileHover={{ opacity: 0.75 }}
              className="text-neutral-700 hover:text-neutral-900 text-sm font-medium transition-colors"
            >
              پرائیویسی پالیسی
            </motion.a>
            <motion.a
              href="/terms"
              whileHover={{ opacity: 0.75 }}
              className="text-neutral-700 hover:text-neutral-900 text-sm font-medium transition-colors"
            >
              شرائط و ضوابط
            </motion.a>
            <motion.a
              href="/contact"
              whileHover={{ opacity: 0.75 }}
              className="text-neutral-700 hover:text-neutral-900 text-sm font-medium transition-colors"
            >
              رابطہ کریں
            </motion.a>
          </nav>
        </div>
      </div>
    </motion.header>
  )
}

function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20 pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50/50 to-white"></div>
      
      <motion.div 
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-100/40 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div dir="ltr" className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/assets/screen 1.svg"
                alt="Mashoor App"
                width={300}
                height={600}
                className="w-auto h-[550px] mt-12"
                priority
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            dir="rtl"
            className="order-1 lg:order-2 text-right"
          >
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-5 flex justify-start"
            >
              <span className="inline-flex flex-row-reverse items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-xs font-medium text-primary-700">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
                پاکستان کا پہلا پلیٹ فارم
              </span>
            </motion.div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 leading-[1.8] mb-8">
              ہر شہر کی <span className="text-primary-500">مشہور چیزیں</span>
            </h1>
            
            <p className="text-lg text-neutral-500 mb-10 max-w-md mr-0 leading-relaxed">
              ملتان کے آم سے لے کر سیالکوٹ کی اسپورٹس تک، پاکستان کی ہر خاص چیز ایک کلک پر
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-start items-start">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-row-reverse items-center gap-2 bg-primary-gradient text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-sm w-full sm:w-auto justify-center"
              >
                <Smartphone className="w-4 h-4" />
                <span>ایپ ڈاؤنلوڈ کریں</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-row-reverse items-center gap-2 bg-white text-neutral-900 px-5 py-2.5 rounded-full text-sm font-medium border border-neutral-200 w-full sm:w-auto justify-center"
              >
                <Globe className="w-4 h-4" />
                <span>سٹور دیکھیں</span>
              </motion.button>
            </div>
            
            <div className="flex w-full flex-row-reverse justify-center gap-12 mt-14">
              {[
                { num: '۱۰۰+', label: 'شہر' },
                { num: '۵۰۰۰+', label: 'پروڈکٹس' },
                { num: '۱۰K+', label: 'صارفین' },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-neutral-900">{item.num}</div>
                  <div className="text-xs text-neutral-400 mt-1">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section className="py-32 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <div className="mb-5 flex justify-center">
            <span className="inline-flex flex-row-reverse items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-xs font-medium text-primary-700">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
              مشہور کے بارے میں
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            پاکستان کی روایات کو <span className="text-primary-500">ڈیجیٹل دنیا سے جوڑنا</span>
          </h2>
          <p className="text-neutral-500 leading-relaxed">
            مشہور ایک ای کامرس پلیٹ فارم ہے جو پاکستان کے ہر شہر کی مشہور اور خاص چیزوں کو
            آپ کے گھر تک پہنچاتا ہے۔ ہم مقامی کاروباروں کو عالمی سطح پر لے جا رہے ہیں۔
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Package, title: 'اصلی پروڈکٹس', desc: 'ہر شہر کی اصل اور مشہور چیزیں' },
            { icon: Truck, title: 'تیز ڈیلیوری', desc: 'پورے پاکستان میں محفوظ ترسیل' },
            { icon: Shield, title: 'محفوظ ادائیگی', desc: 'مکمل سیکیورٹی کی گارنٹی' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 text-center hover:shadow-lg hover:shadow-neutral-100 transition-shadow"
            >
              <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-6 h-6 text-primary-500" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">{item.title}</h3>
              <p className="text-neutral-500 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="mb-8 flex justify-center">
            <span className="inline-flex flex-row-reverse items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-xs font-medium text-primary-700">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
              خصوصیات
            </span>
          </div>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-neutral-900">
            سب کے لیے کچھ خاص
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-10 border border-blue-100"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-900">خریداروں کے لیے</h3>
                <p className="text-sm text-neutral-500">آسان اور محفوظ خریداری</p>
              </div>
            </div>
            <div className="space-y-4">
              {['آسان براؤزنگ', 'محفوظ ادائیگی', 'تیز ڈیلیوری', '۲۴/۷ سپورٹ'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-xs">✓</span>
                  </div>
                  <span className="text-neutral-600 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-50 to-white rounded-3xl p-10 border border-green-100"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-900">فروخت کنندگان کے لیے</h3>
                <p className="text-sm text-neutral-500">اپنا کاروبار بڑھائیں</p>
              </div>
            </div>
            <div className="space-y-4">
              {['آسان لسٹنگ', 'لاکھوں گاہک', 'محفوظ لین دین', 'تجزیاتی رپورٹس'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <span className="text-neutral-600 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 bg-neutral-900 rounded-3xl p-10"
        >
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-white mb-2">سیکیورٹی</h3>
            <p className="text-neutral-400 text-sm">آپ کی حفاظت ہماری ترجیح</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Lock, title: 'ڈیٹا انکرپشن' },
              { icon: Shield, title: 'فراڈ پروٹیکشن' },
              { icon: Users, title: 'تصدیق شدہ سیلرز' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-5 h-5 text-primary-400" />
                </div>
                <p className="text-white text-sm">{item.title}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function TrustSection() {
  return (
    <section className="py-32 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="mb-8 flex justify-center">
            <span className="inline-flex flex-row-reverse items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-5 py-2 text-sm font-medium text-primary-700">
              <span className="h-2 w-2 rounded-full bg-primary-500" />
              اعتماد
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            ہزاروں صارفین کا اعتماد
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: 'احمد علی', city: 'لاہور', text: 'بہترین تجربہ! آم بالکل تازہ ملے۔' },
            { name: 'فاطمہ خان', city: 'کراچی', text: 'معیار زبردست ہے، بہت مطمئن ہوں۔' },
            { name: 'محمد عمر', city: 'اسلام آباد', text: 'ڈیلیوری تیز اور محفوظ تھی۔' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-neutral-100"
            >
              <div className="flex items-center gap-1 text-primary-400 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-neutral-600 text-sm mb-4 leading-relaxed">"{item.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-semibold text-sm">
                  {item.name[0]}
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-900">{item.name}</p>
                  <p className="text-xs text-neutral-400">{item.city}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary-gradient rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              آج ہی شروع کریں
            </h2>
            <p className="text-white/80 mb-10 max-w-md mx-auto">
              ایپ ڈاؤنلوڈ کریں یا ویب سٹور پر جائیں اور پاکستان کی مشہور چیزوں سے لطف اندوز ہوں
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-3 bg-white text-primary-600 px-8 py-4 rounded-full font-medium"
              >
                <Smartphone className="w-5 h-5" />
                <span>ایپ ڈاؤنلوڈ</span>
                <ArrowLeft className="w-4 h-4" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-3 bg-white/20 text-white px-8 py-4 rounded-full font-medium border border-white/30"
              >
                <Globe className="w-5 h-5" />
                <span>سٹور دیکھیں</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/assets/MAshoor Logo.png"
                alt="مشہور"
                width={200}
                height={80}
                className="h-[80px] w-auto"
              />
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              پاکستان کے ہر شہر کی مشہور چیزیں، ایک پلیٹ فارم پر
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">کمپنی</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><a href="/about" className="hover:text-white transition-colors">ہمارے بارے میں</a></li>
              <li><a href="/careers" className="hover:text-white transition-colors">کیریئرز</a></li>
              <li><a href="/press" className="hover:text-white transition-colors">پریس</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">سپورٹ</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><a href="/help" className="hover:text-white transition-colors">مدد مرکز</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">رابطہ</a></li>
              <li><a href="/faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">رابطہ</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>info@mashoor.pk</li>
              <li dir="ltr">+92 300 1234567</li>
              <li>لاہور، پاکستان</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm">© ۲۰۲۴ مشہور۔ تمام حقوق محفوظ</p>
          <div className="flex gap-6 text-sm text-neutral-400">
            <a href="/privacy-policy" className="hover:text-white transition-colors">پرائیویسی</a>
            <a href="/terms" className="hover:text-white transition-colors">شرائط</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
