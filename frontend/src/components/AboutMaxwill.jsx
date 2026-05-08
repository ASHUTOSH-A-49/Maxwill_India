import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const brandImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJyA5qWO4kLbPoxo5QH1JIVISK2QTlPNBwI3-jFEfCyUxHV_NnmISj049F7LJDOgicUAYca29UvIpy7p0U7s2yKcmKQURe38QJ1vzSjemjf-9nri_dF4UYWmtAiiYPQEI-xGXOJq7mHQxc_XN137VxMpDb_m1od2l0n86Boj8l2FJMak9U_GyOSnnRiIis_kFnitUk97FO0dLW5e5P5bJ83GT61STINzwNvBBpOokX9aXrqogN983NGVEYg6bh5uzzEMLW5Xrgm7U'

export default function AboutMaxwill() {
  return (
    <section className="bg-gradient-to-b from-[#f8f9fa] to-white relative overflow-hidden py-24 lg:py-32 px-6 lg:px-16">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        {/* Photo on the left */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:col-span-7 relative order-2 lg:order-1 lg:pl-8 xl:pl-12"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#a93800]/10" style={{ height: '700px' }}>
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              src={brandImg} 
              alt="Brand Story" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0e1d25]/40 via-transparent to-transparent mix-blend-overlay" />
            
            {/* Decorative element */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#5b4138] font-bold uppercase tracking-wider mb-1">Established</p>
                  <p className="text-3xl font-extrabold text-[#0e1d25]">2024</p>
                </div>
                <div className="w-[1px] h-12 bg-[#a93800]/20"></div>
                <div>
                  <p className="text-sm text-[#5b4138] font-bold uppercase tracking-wider mb-1">Global</p>
                  <p className="text-3xl font-extrabold text-[#0e1d25]">Community</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Background decorative blob */}
          <div className="absolute -z-10 -top-10 -left-10 w-64 h-64 bg-[#a93800]/5 rounded-full blur-3xl"></div>
          <div className="absolute -z-10 -bottom-10 -right-10 w-72 h-72 bg-[#0e1d25]/5 rounded-full blur-3xl"></div>
        </motion.div>

        {/* Text on the right */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-5 flex flex-col items-start order-1 lg:order-2 lg:pr-8 xl:pr-12"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-[2px] bg-[#a93800]" />
            <span className="font-label-caps text-[#a93800] uppercase tracking-widest text-lg md:text-xl font-black ">About Maxwill</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-headline-lg text-[#0e1d25] text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-8"
          >
            Crafted for <span className="text-[#a93800]">Performance</span> & Durability
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-body-lg text-[#5b4138] text-lg leading-relaxed mb-10"
          >
            We are dedicated to growing the global pickleball community by providing elite equipment that empowers players of all levels. Our relentless pursuit of perfection drives our engineering process, ensuring every paddle meets the highest standards of competitive play.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link 
              to="/our-story" 
              className="group inline-flex items-center gap-3 border-b-2 border-[#a93800] text-[#a93800] pb-2 font-label-caps uppercase font-bold tracking-wider hover:text-[#ff5f15] hover:border-[#ff5f15] transition-all duration-300"
            >
              Discover Our Story
              <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
