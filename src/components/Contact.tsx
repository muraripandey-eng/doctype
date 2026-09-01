import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Check, Send, ArrowRight } from 'lucide-react';

interface ContactProps {
  preselectedProduct: string;
}

export default function Contact({ preselectedProduct }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'General Inquiry',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Update selected service if preselectedProduct changes from parent CTAs
  useEffect(() => {
    if (preselectedProduct) {
      setFormData((prev) => ({ ...prev, service: preselectedProduct }));
    }
  }, [preselectedProduct]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate API delay
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);

      // Log inquiries locally to create durable simulated persistence
      const inquiries = JSON.parse(localStorage.getItem('doctype_inquiries') || '[]');
      inquiries.push({
        ...formData,
        submittedAt: new Date().toISOString()
      });
      localStorage.setItem('doctype_inquiries', JSON.stringify(inquiries));
    }, 1500);
  };

  const handleReset = () => {
    setSuccess(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'General Inquiry',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-24 bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Agency Contact Details (5 Columns) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                Start a Conversation
              </span>
              <h2 className="mt-3 text-4xl font-serif font-semibold tracking-tight text-zinc-950 sm:text-5xl">
                Let&rsquo;s craft together
              </h2>
              <p className="mt-4 text-base text-zinc-600 leading-relaxed font-sans">
                Ready to elevate your engineering, billing system, or corporate digital tools? 
                Reach out to our panel and we will coordinate an architectural review within 24 hours.
              </p>
            </div>

            {/* Direct Contact Links */}
            <div className="space-y-6 pt-6 border-t border-zinc-200">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-zinc-900 text-white flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Email Correspondence</p>
                  <a href="mailto:info@doctype.agency" className="text-base font-semibold text-zinc-900 hover:text-zinc-600 transition-colors">
                    info@doctype.agency
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-zinc-900 text-white flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Direct Business Line</p>
                  <a href="tel:+977014445555" className="text-base font-semibold text-zinc-900 hover:text-zinc-600 transition-colors">
                    +977 1 444 5555
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-zinc-900 text-white flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Engineering Headquarters</p>
                  <p className="text-base font-semibold text-zinc-900">
                    Bakhundole, Lalitpur, Nepal
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Input Card (7 Columns) */}
          <div className="lg:col-span-7 bg-white border border-zinc-200 rounded-xl shadow-xl p-8" id="inquiry-form-card">
            {success ? (
              /* Success State Display */
              <div className="text-center py-12 max-w-md mx-auto" id="inquiry-success">
                <div className="w-16 h-16 rounded-full bg-zinc-900 text-white flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8" strokeWidth={3} />
                </div>
                <h4 className="text-2xl font-serif font-bold text-zinc-900">
                  Inquiry Dispatched
                </h4>
                <p className="text-zinc-500 mt-3 font-sans leading-relaxed">
                  Thank you, <span className="font-semibold text-zinc-900">{formData.name}</span>. 
                  Our software engineers and business partners have received your query regarding{' '}
                  <span className="font-semibold text-zinc-900">{formData.service}</span>. We will follow up shortly.
                </p>
                <button
                  onClick={handleReset}
                  className="mt-8 font-mono text-xs font-bold uppercase tracking-wider bg-zinc-900 hover:bg-zinc-800 text-white px-6 py-3 rounded transition-all duration-300"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              /* Core Form Interactive Panel */
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-zinc-600 uppercase mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-zinc-50 border border-zinc-200 focus:border-zinc-950 px-4 py-3 text-sm rounded focus:outline-none transition-all"
                      placeholder="e.g. Roshan Adhikari"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-600 uppercase mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-zinc-50 border border-zinc-200 focus:border-zinc-950 px-4 py-3 text-sm rounded focus:outline-none transition-all"
                      placeholder="e.g. roshan@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-zinc-600 uppercase mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-zinc-50 border border-zinc-200 focus:border-zinc-950 px-4 py-3 text-sm rounded focus:outline-none transition-all"
                      placeholder="e.g. +977-980XXXXXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-600 uppercase mb-1.5">
                      Service of Interest *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-zinc-50 border border-zinc-200 focus:border-zinc-950 px-4 py-3 text-sm rounded focus:outline-none transition-all text-zinc-800"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Website Development">Website Development</option>
                      <option value="HR &amp; Payroll Software">HR &amp; Payroll Software</option>
                      <option value="IRD Billing Software">IRD Billing Software</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="Business Email Services">Business Email Services</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-600 uppercase mb-1.5">
                    Project Requirements / Detail *
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full bg-zinc-50 border border-zinc-200 focus:border-zinc-950 p-4 text-sm rounded focus:outline-none transition-all resize-none"
                    placeholder="Provide a short description of what you seek to engineer (e.g. features, rough user volumes, compliance needs)..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 bg-zinc-950 hover:bg-zinc-800 disabled:bg-zinc-400 text-white font-mono text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    'Dispatching specs...'
                  ) : (
                    <>
                      Submit Inquiry Spec
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
