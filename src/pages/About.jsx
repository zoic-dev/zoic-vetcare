import React from 'react';
import { SectionHeading } from '../components/UI';
import { History, Target, Eye, Quote } from 'lucide-react';

export const About = () => {
  return (
    <div className="pt-32 pb-24">
      {/* Vision/Mission */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <SectionHeading 
              subtitle="Our Philosophy" 
              title="A Legacy of Botanical Excellence"
            />
            <p className="text-forest/70 text-lg mb-8 leading-relaxed">
              Zoic Vetcare, a division of the renowned Zoic Wellness group, was established with a singular focus: to harness the therapeutic potential of nature for animal health.
            </p>
            <div className="space-y-6">
              <div className="flex gap-6 p-8 bg-white rounded-3xl border border-sage/5 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center text-sage shrink-0">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-forest mb-2">Our Mission</h4>
                  <p className="text-sm text-forest/60">To provide scientifically validated herbal healthcare solutions that enhance the quality of life for livestock and companion animals.</p>
                </div>
              </div>
              <div className="flex gap-6 p-8 bg-white rounded-3xl border border-sage/5 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-clay/10 flex items-center justify-center text-clay shrink-0">
                  <Eye size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-forest mb-2">Our Vision</h4>
                  <p className="text-sm text-forest/60">To be the global leader in botanical veterinary medicine, recognized for our commitment to purity, potency, and animal welfare.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[4rem] overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000" alt="Herbal processing" className="w-full h-auto" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-white p-4 rounded-full shadow-2xl animate-spin-slow flex items-center justify-center border-4 border-sage/10">
              <div className="text-center">
                <div className="text-3xl font-bold text-sage">30+</div>
                <div className="text-[8px] uppercase tracking-widest font-bold">Years of Trust</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="bg-cream py-24 mb-32">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading centered subtitle="Timeline" title="Our Journey Through Nature" />
          <div className="relative mt-20">
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-sage/20 hidden md:block"></div>
            <div className="space-y-20">
              {[
                { year: '1990', title: 'The Genesis', desc: 'Zoic group started with a small herbal manufacturing unit in Punjab.' },
                { year: '2005', title: 'Veterinary Division', desc: 'Launched Zoic Vetcare to specifically address animal health needs.' },
                { year: '2015', title: 'Expansion', desc: 'Established a state-of-the-art GMP certified facility in Mohali.' },
                { year: '2023', title: 'Digital Era', desc: 'Transformed into a digitally integrated pharma network with 1200+ partners.' },
              ].map((item, i) => (
                <div key={i} className={`flex flex-col md:flex-row items-center gap-10 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="flex-1 text-center md:text-right">
                    {i % 2 === 0 ? (
                      <div>
                        <h4 className="text-4xl font-serif font-bold text-sage mb-2">{item.year}</h4>
                        <h5 className="text-xl font-bold text-forest mb-4">{item.title}</h5>
                        <p className="text-forest/60 text-sm max-w-sm ml-auto">{item.desc}</p>
                      </div>
                    ) : null}
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white border-4 border-sage shadow-xl relative z-10 shrink-0 flex items-center justify-center">
                    <History size={20} className="text-sage" />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    {i % 2 !== 0 ? (
                      <div>
                        <h4 className="text-4xl font-serif font-bold text-sage mb-2">{item.year}</h4>
                        <h5 className="text-xl font-bold text-forest mb-4">{item.title}</h5>
                        <p className="text-forest/60 text-sm max-w-sm mr-auto">{item.desc}</p>
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimony/Founder */}
      <section className="max-w-5xl mx-auto px-6 text-center">
        <div className="relative mb-20 bg-white p-12 md:p-20 rounded-[4rem] shadow-xl border border-sage/5">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-sage rounded-3xl flex items-center justify-center text-white shadow-xl rotate-12">
            <Quote size={40} />
          </div>
          <p className="text-2xl md:text-3xl font-serif italic text-forest/80 leading-relaxed mb-10 pt-6">
            "At Zoic, we believe that the earth provides everything necessary for healing. Our role is simply to refine and deliver that botanical wisdom with scientific precision."
          </p>
          <div>
            <h4 className="text-xl font-bold text-forest">Dr. G.P.S. Saini</h4>
            <p className="text-xs uppercase tracking-widest font-bold text-sage-light">Chairman & Founder, Zoic Wellness</p>
          </div>
        </div>
      </section>
    </div>
  );
};
