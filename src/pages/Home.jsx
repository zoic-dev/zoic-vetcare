import React from 'react';
import { motion } from 'motion/react';
import { Button, SectionHeading } from '../components/UI';
import { ArrowRight, Leaf, ShieldCheck, FlaskConical, Handshake, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center bg-forest overflow-hidden">
        <div className="absolute inset-0 z-0 scale-110">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fee74a62?auto=format&fit=crop&q=80&w=2000"
            alt="Nature Background"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 bg-sage/20 border border-sage/30 rounded-full text-sage-light text-xs font-bold tracking-widest uppercase mb-6">
              Premium Botanical Vetcare
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-cream leading-[1.05] mb-8 font-serif">
              Healing <span className="text-sage-light italic font-normal">Naturally</span>, <br />
              Caring Deeply.
            </h1>
            <p className="text-cream/70 text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
              Zoic Vetcare leads the industry in herbal medicine for animals, blending traditional plant-based science with modern veterinary excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group">
                Explore Products <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="border-cream/20 text-cream hover:bg-cream/10">
                Contact Franchise
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 rounded-[2rem] overflow-hidden border-8 border-cream/5 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800"
                alt="Herbal Veterinary Care"
                className="w-full h-auto aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
          </motion.div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="bg-cream border-b border-sage/5 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Years Experience', value: '30+' },
              { label: 'Herbal Products', value: '500+' },
              { label: 'Happy Partners', value: '1200+' },
              { label: 'Major Awards', value: '15+' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center group underline-offset-8 decoration-sage/20 hover:decoration-sage decoration-2">
                <div className="text-3xl md:text-5xl font-serif font-bold text-sage mb-2">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest font-bold text-forest/40 group-hover:text-forest/60 transition-colors">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Botanical USP */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
          <img src="https://picsum.photos/seed/leaf/800/1200" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <SectionHeading
                subtitle="Why Choose Zoic"
                title="The Power of Botanical Veterinary Science"
              />
              <div className="space-y-8">
                {[
                  {
                    icon: <Leaf className="text-sage" />,
                    title: "100% Herbal Extracts",
                    desc: "We use standardized herbal extracts to ensure potency and consistency in every batch of medicine."
                  },
                  {
                    icon: <FlaskConical className="text-sage" />,
                    title: "Modern Lab Testing",
                    desc: "Every product undergoes rigorous chromatography and stability tests in our state-of-the-art laboratory."
                  },
                  {
                    icon: <ShieldCheck className="text-sage" />,
                    title: "Zero Side Effects",
                    desc: "Our botanical solutions are designed to be highly effective without the harsh chemical residues."
                  }
                ].map((item, idx) => (
                  <motion.div
                    whileHover={{ x: 10 }}
                    key={idx}
                    className="flex gap-6 items-start"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-sage/5 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-forest mb-2">{item.title}</h4>
                      <p className="text-forest/60 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img src="https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=400" className="rounded-3xl object-cover aspect-[4/5]" alt="Herbs" referrerPolicy="no-referrer" />
              </div>
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&q=80&w=400" className="rounded-3xl object-cover aspect-square" alt="Vet" referrerPolicy="no-referrer" />
                <img src="https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&q=80&w=400" className="rounded-3xl object-cover aspect-[4/5]" alt="Animals" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Franchise Call to Action */}
      <section className="bg-sage text-cream py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/p-6.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <SectionHeading
            centered
            dark
            subtitle="Business Opportunities"
            title="Start Your PCD Veterinary Franchise Today"
          />
          <p className="text-cream/80 text-lg mb-10 leading-relaxed">
            Join India's most trusted veterinary pharmaceuticals network. We provide complete marketing support, visual aids, and exclusive monopoly rights.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              "Monopoly Rights", "Marketing Visual Aids", "Stockist Support"
            ].map((feature, i) => (
              <div key={i} className="flex items-center justify-center gap-3 bg-white/10 py-4 px-6 rounded-2xl border border-white/5">
                <CheckCircle2 size={18} className="text-clay" />
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
          <Button variant="secondary" size="lg" className="mx-auto">
            Get Franchise Details <Handshake size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
};
