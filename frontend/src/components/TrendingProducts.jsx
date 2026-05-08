import { motion } from 'framer-motion';

const products = [
  {
    name: 'Maxwill Victory Pro X MVP1MX Extended Paddle',
    price: '$231.20',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLL2Vj2qtd3E5ig9W-wHHfMF4kPdeytRgrHajbtIT5sWp6DwKmjefB9Tj-YtnTF6ksFZHAL17S8xakM-U6YAoL7X0_t-nEEQC4OxaxYgaRQkmOxoGvS_Oo9yyS4z13KKtj0b9tMtavlD-_KlRG7CnGm5driTpZ2JFfHPYVZYM-CP7IC9BUAVJdxICMbcmUUFmBzHnRzoqTuGwQ6ZVzlIEnFviV7t8vf5kXGsjkoyLQxL7wRcdqYVP-uskS_8wIxt1hHrlKIJJOOBA',
  },
  {
    name: 'Maxwill Aurus X MARX1F Red Power Paddle',
    price: '$108.99',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDexbrO0oeyKGK9MfJ8ipkpv5zOJGcDwr2YZj-VJNHLUpg4_mbKXmC5tgy2EgnsBkoyx8nBGfdFrgcFsuaaxPfhbdJCN8TW4eVO-dJLi-uFx_vKey-q7CrvO0rux0MuBtlsH9Ju1TqNrysNZ4mrKy9zl_jEqn5Fm_RRQiRTA4gll7M_8VWsXQEo6jC5Ye4aU623_8PVu9TLLF6VpOOuhcDd5iw1JsQ3blt3tP-qhbq84uSScqFj6C65SkJFZevqW7jXxtDEU0EayPY',
  },
  {
    name: 'Maxwill PowerServe MPS1M USAPA Paddle',
    price: '$49.99',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYWT2xOT9yknYHfigIxDzJgJ06br4WCKPuFDY_caHBnlNBmAI1yM9q8mV2kQbHlC-CQUmeszCELuK5cFuXKqWFqVtRDkBHlCqSFCm-JcYc1qfIXlw3UnH-iul0tUK1xDlArB2pHaQbT6B-Y5BUwY5Dz1om0JuGhYVpuh0dNOargep9iCFaaRL6TrNd5kQVDXvqTspvz7otjqAF5j9IsZpfooBRs-HY7QOmq6vibU_VeF5HoJP9pk3Ekogu-2zinSgupg_HZQ965C0',
  },
]

export default function TrendingProducts() {
  return (
    <section
      className="bg-[#f4faff] relative overflow-hidden"
      style={{ padding: '120px 64px' }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col items-center mb-24">
          <h2 className="font-headline-lg text-[#0e1d25] font-black text-center relative inline-block -mt-[5px]">
            Trending Products
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1.5 bg-[#a93800] mt-2 rounded-full mx-auto"
            />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p, idx) => (
            <motion.div 
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ 
                y: -12,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="glass-panel rounded-2xl p-6 group cursor-pointer bg-white/50 backdrop-blur-sm border border-white/20 shadow-xl shadow-blue-900/5 transition-all duration-300 hover:shadow-2xl hover:shadow-[#a93800]/10"
            >
              <div className="relative mb-6 overflow-hidden rounded-xl bg-white flex items-center justify-center" style={{ aspectRatio: '1/1' }}>
                <motion.img
                  src={p.img}
                  alt={p.name}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-3/4 h-3/4 object-contain"
                />
                <div className="absolute inset-0 bg-[#0e1d25]/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-40 py-2.5 bg-white text-[#0e1d25] font-bold uppercase tracking-wider text-xs rounded-full shadow-lg"
                  >
                    Quickview
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-40 py-2.5 bg-[#a93800] text-white font-bold uppercase tracking-wider text-xs rounded-full shadow-lg hover:bg-[#ff5f15] transition-colors"
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </div>
              <h3 className="font-technical-data text-[#0e1d25] font-bold text-lg mb-2 line-clamp-2">{p.name}</h3>
              <div className="flex items-center justify-between mt-auto">
                <p className="font-body-lg text-[#a93800] font-black text-xl">{p.price}</p>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <div key={s} className="w-1.5 h-1.5 rounded-full bg-[#a93800]" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
