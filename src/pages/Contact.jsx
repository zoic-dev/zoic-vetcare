import React from 'react';
import { SectionHeading, Button } from '../components/UI';
import { Phone, Mail, MapPin, Send, MessageSquare } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="pt-32 pb-24 bg-cream/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <SectionHeading 
              subtitle="Get in Touch" 
              title="Let's Start a Conversation"
            />
            <p className="text-forest/70 text-lg mb-12 leading-relaxed">
              Whether you're interested in our PCD franchise, third-party manufacturing, or just have a question about our botanical products, we're here to help.
            </p>

            <div className="space-y-8 mb-12">
              {[
                { icon: <Phone className="text-sage" />, title: "Call Us", detail: "+91 86991 19911", link: "tel:+918699119911" },
                { icon: <Mail className="text-sage" />, title: "Email", detail: "info@zoicvetcare.com", link: "mailto:info@zoicvetcare.com" },
                { icon: <MapPin className="text-sage" />, title: "Head Office", detail: "Sector 82, Industrial Area, Mohali, Punjab", link: "#" },
              ].map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.link}
                  className="flex gap-6 items-center p-6 bg-white rounded-3xl border border-sage/5 shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-sage/5 flex items-center justify-center shrink-0 group-hover:bg-sage group-hover:text-cream transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold text-forest/40 mb-1">{item.title}</h4>
                    <p className="text-lg font-bold text-forest">{item.detail}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="p-8 bg-sage rounded-[2rem] text-cream">
              <div className="flex gap-4 items-center mb-4">
                <MessageSquare size={32} />
                <h3 className="text-2xl font-serif font-bold">Quick Inquiry</h3>
              </div>
              <p className="text-cream/80 mb-0">Our team typically responds within 2-4 business hours during working days.</p>
            </div>
          </div>

          <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-xl shadow-sage/5 border border-sage/5">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-forest/40 ml-1">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-cream/50 rounded-2xl border border-sage/10 focus:outline-none focus:ring-2 focus:ring-sage/20 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-forest/40 ml-1">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 bg-cream/50 rounded-2xl border border-sage/10 focus:outline-none focus:ring-2 focus:ring-sage/20 transition-all" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-forest/40 ml-1">Phone Number</label>
                  <input type="tel" placeholder="+91 00000 00000" className="w-full px-6 py-4 bg-cream/50 rounded-2xl border border-sage/10 focus:outline-none focus:ring-2 focus:ring-sage/20 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-forest/40 ml-1">Subject</label>
                  <select className="w-full px-6 py-4 bg-cream/50 rounded-2xl border border-sage/10 focus:outline-none focus:ring-2 focus:ring-sage/20 transition-all appearance-none">
                    <option>Franchise Inquiry</option>
                    <option>Manufacturing Inquiry</option>
                    <option>Product Information</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-forest/40 ml-1">Message</label>
                <textarea rows={5} placeholder="Tell us about your requirements..." className="w-full px-6 py-4 bg-cream/50 rounded-2xl border border-sage/10 focus:outline-none focus:ring-2 focus:ring-sage/20 transition-all resize-none"></textarea>
              </div>

              <Button size="lg" className="w-full py-5 text-lg">
                Submit Inquiry <Send size={18} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
