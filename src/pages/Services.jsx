import React from 'react';
import { SectionHeading, Button } from '../components/UI';
import { Handshake, Factory, Truck, CheckCircle, Award, BarChart3, Users } from 'lucide-react';

export const Services = () => {
  return (
    <div className="pt-32 pb-24">
      {/* Franchise Section */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          <div>
            <SectionHeading 
              subtitle="Business Growth" 
              title="PCD Veterinary Pharma Franchise"
            />
            <p className="text-forest/70 text-lg mb-8 leading-relaxed">
              Zoic Vetcare offers a lucrative PCD (Propaganda Cum Distribution) franchise model for experienced professionals and entrepreneurs in the veterinary industry.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {[
                { icon: <Award size={20} />, title: "Exclusive Monopoly", desc: "Monopoly rights for your specific district or region." },
                { icon: <BarChart3 size={20} />, title: "High Margins", desc: "Excellent profit margins on all herbal product lines." },
                { icon: <Truck size={20} />, title: "Fast Delivery", desc: "Efficient supply chain ensuring stock availability." },
                { icon: <Users size={20} />, title: "Marketing Kit", desc: "Visual aids, product cards, and promotional tools." },
              ].map((item, idx) => (
                <div key={idx} className="p-6 bg-white rounded-2xl border border-sage/5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-sage mb-4">{item.icon}</div>
                  <h4 className="font-bold text-forest mb-2">{item.title}</h4>
                  <p className="text-xs text-forest/50 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <Button size="lg">Request Franchise Proposal</Button>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1000" 
              alt="Business Meeting" 
              className="rounded-[3rem] shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -right-10 bg-clay p-10 rounded-3xl text-cream max-w-[300px] shadow-xl">
              <h3 className="text-4xl font-serif font-bold mb-2">1200+</h3>
              <p className="text-sm font-medium opacity-80 uppercase tracking-widest">Active Franchise Partners across India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Section */}
      <section className="bg-forest py-24 text-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1579165466511-70e21ad10438?auto=format&fit=crop&q=80&w=400" className="rounded-3xl aspect-square object-cover" alt="Factory" referrerPolicy="no-referrer" />
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400" className="rounded-3xl aspect-[3/4] object-cover pt-12" alt="Process" referrerPolicy="no-referrer" />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-4 border-sage bg-forest flex items-center justify-center">
                <Factory size={48} className="text-sage" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeading 
                dark
                subtitle="Third Party Manufacturing" 
                title="Your Brand, Our Expertise"
              />
              <p className="text-cream/70 text-lg mb-8 leading-relaxed">
                We provide comprehensive contract manufacturing services for veterinary herbal products. From formulation development to final packaging.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "WHO-GMP Certified Facility",
                  "Advanced Extraction Units",
                  "Custom Formulation Research",
                  "Strict Quality Control Lab",
                  "Low Minimum Order Quantities"
                ].map((text, i) => (
                  <li key={i} className="flex gap-4 items-center">
                    <div className="w-6 h-6 rounded-full bg-sage/20 border border-sage/30 flex items-center justify-center shrink-0">
                      <CheckCircle size={14} className="text-sage-light" />
                    </div>
                    <span className="text-cream/80">{text}</span>
                  </li>
                ))}
              </ul>
              <Button variant="secondary" size="lg">Inquire for Manufacturing</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
