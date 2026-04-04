"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { 
  ArrowRight, Shield, Zap, Leaf, 
  Globe, TrendingUp, Lock, Star, CheckCircle2 
} from "lucide-react";
import bg from "../images/bgimage.png"; // Ensure this exists in your project

// ==========================================
// STATIC DATA (Clean separation of concerns)
// ==========================================

const STATS = [
  { label: "Active Users", value: "2M+" },
  { label: "Daily Volume", value: "$50M+" },
  { label: "Countries Supported", value: "120+" },
  { label: "App Store Rating", value: "4.9/5" },
];

const FEATURES = [
  {
    icon: <Shield className="text-yellow-400" size={24} />,
    title: "Ironclad Security",
    desc: "Your assets are protected by military-grade, multi-layer encryption and biometric authentication.",
  },
  {
    icon: <Zap className="text-yellow-400" size={24} />,
    title: "Instant Transfers",
    desc: "Swift as a blade. Send and receive money globally in milliseconds with zero hidden fees.",
  },
  {
    icon: <Leaf className="text-yellow-400" size={24} />,
    title: "Mindful Spending",
    desc: "AI-driven insights that categorize your expenses and help you achieve financial serenity.",
  },
  {
    icon: <Globe className="text-yellow-400" size={24} />,
    title: "Global Reach",
    desc: "Hold, exchange, and spend in over 40 fiat and crypto currencies seamlessly.",
  },
  {
    icon: <TrendingUp className="text-yellow-400" size={24} />,
    title: "Wealth Growth",
    desc: "Automated micro-investing tools that put your idle cash to work while you sleep.",
  },
  {
    icon: <Lock className="text-yellow-400" size={24} />,
    title: "Privacy First",
    desc: "We don't sell your data. Your financial history remains strictly yours, forever.",
  },
];

const TESTIMONIALS = [
  {
    name: "Sarah Jenkins",
    role: "Freelance Designer",
    text: "Zenpay entirely changed how I manage my international clients. The interface is stunningly peaceful.",
  },
  {
    name: "Marcus Chen",
    role: "Startup Founder",
    text: "The instant transfers and zero fees have saved our business thousands. It's the only financial app I trust.",
  },
  {
    name: "Elena Rodriguez",
    role: "Digital Nomad",
    text: "Finally, an app that doesn't overwhelm me with numbers. Mindful spending insights are a game-changer.",
  },
];

// ==========================================
// ANIMATION VARIANTS
// ==========================================

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function ZenpayLanding() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden font-sans text-white bg-slate-950">
      
      {/* Background Image & Overlays */}
      <div className="fixed inset-0 z-0">
        <Image
          src={bg}
          alt="Zenpay Background"
          fill
          className="object-cover opacity-60" 
          priority
        />
        {/* Gradient Overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-slate-950/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.05)_0%,transparent_100%)]" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto md:px-12">
        <div className="text-2xl font-bold tracking-tighter flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-tr from-yellow-600 to-yellow-400 rounded-full shadow-[0_0_15px_rgba(234,179,8,0.5)] animate-pulse" />
          ZENPAY
        </div>
        <div className="hidden md:flex gap-10 text-xs font-semibold uppercase tracking-widest text-gray-300">
          <Link href="#features" className="hover:text-yellow-400 transition-colors">Features</Link>
          <Link href="#security" className="hover:text-yellow-400 transition-colors">Security</Link>
          <Link href="#testimonials" className="hover:text-yellow-400 transition-colors">Stories</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden sm:block text-sm font-medium text-gray-300 hover:text-white transition">
            Log in
          </Link>
          <Link href="/signup">
            <button className="px-6 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 hover:border-yellow-500/50 transition-all text-sm font-medium">
              Get Started
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[85vh] px-4 text-center pt-10 pb-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <motion.span variants={fadeUp} className="px-5 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-medium uppercase tracking-widest mb-8 flex items-center gap-2 backdrop-blur-sm">
            <Star size={14} /> Master Your Wealth
          </motion.span>
          
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight">
            Financial Freedom, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-300 to-gray-600">
              Perfectly Disciplined.
            </span>
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Experience the world's most mindful payment ecosystem. Secure, swift, and serene—designed for those who value absolute control over their capital.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-5 justify-center w-full sm:w-auto">
            <Link href="/signup" className="w-full sm:w-auto">
              <button className="w-full px-8 py-4 bg-white text-black font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-yellow-400 transition-colors duration-300">
                Start Your Journey <ArrowRight size={18} />
              </button>
            </Link>
            <button className="w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2 group">
               Watch Demo <div className="w-2 h-2 rounded-full bg-yellow-500 group-hover:scale-150 transition-transform" />
            </button>
          </motion.div>
        </motion.div>
      </main>

      {/* Stats Section */}
      <section className="relative z-10 border-y border-white/10 bg-black/20 backdrop-blur-sm py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
          {STATS.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center px-4"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-xs text-gray-400 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="relative z-10 py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Designed for Clarity</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Everything you need to manage your money seamlessly, without the usual banking clutter.</p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {FEATURES.map((feature, index) => (
            <motion.div key={index} variants={fadeUp}>
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative z-10 py-24 px-6 bg-gradient-to-b from-transparent to-black/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Trusted by Visionaries</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white/5 border border-white/10 p-8 rounded-2xl relative"
              >
                {/* Quote mark decoration */}
                <div className="absolute top-6 right-8 text-6xl text-white/5 font-serif">"</div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />)}
                </div>
                <p className="text-gray-300 italic mb-8 relative z-10">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-xs text-yellow-400/80 uppercase tracking-wider mt-1">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative z-10 py-32 px-6 max-w-5xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-tr from-zinc-900 via-zinc-800 to-zinc-900 border border-white/10 p-12 md:p-20 rounded-3xl overflow-hidden relative"
        >
          {/* Subtle background glow in CTA */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-yellow-500/10 blur-[100px]" />
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">Ready to find your balance?</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto relative z-10">
            Join thousands of users who have already achieved financial peace of mind. Open your account in less than 3 minutes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center relative z-10">
            <Link href="/signup">
              <button className="px-10 py-4 bg-yellow-500 text-black font-bold rounded-xl hover:bg-yellow-400 transition-colors shadow-[0_0_20px_rgba(234,179,8,0.3)]">
                Create Free Account
              </button>
            </Link>
            <div className="flex flex-col gap-2 text-sm text-gray-400 text-left">
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-yellow-500"/> No credit card required</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-yellow-500"/> Cancel anytime</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-black/40 pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3 text-xl font-bold tracking-tighter">
            <div className="w-6 h-6 bg-yellow-500 rounded-full" />
            ZENPAY
          </div>
          <div className="flex gap-8 text-sm text-gray-400">
            <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition">Contact</Link>
          </div>
        </div>
        <div className="mt-12 text-center text-gray-600 text-xs tracking-widest uppercase">
          © {new Date().getFullYear()} Zenpay Inc. — The Path to Future Finance. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

// ==========================================
// REUSABLE COMPONENTS
// ==========================================

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl text-left hover:bg-white/[0.07] hover:border-yellow-500/30 transition-all duration-300 group h-full">
      <div className="mb-6 p-4 bg-black/20 w-fit rounded-xl border border-white/5 group-hover:scale-110 group-hover:bg-yellow-500/10 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}