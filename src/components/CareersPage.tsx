import React, { useState } from 'react';
import { Briefcase, MapPin, Calendar, Check, Send, Sparkles, ArrowLeft, GraduationCap, ClipboardList } from 'lucide-react';
import { JOB_OPENINGS } from '../data';
import { JobOpening } from '../types';

interface CareersPageProps {
  onBackToHome: () => void;
}

export default function CareersPage({ onBackToHome }: CareersPageProps) {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resumeLink: '',
    coverLetter: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      
      // Save application to local simulation storage
      const applications = JSON.parse(localStorage.getItem('doctype_job_applications') || '[]');
      applications.push({
        jobId: selectedJob?.id,
        jobTitle: selectedJob?.title,
        applicant: formData,
        appliedAt: new Date().toISOString()
      });
      localStorage.setItem('doctype_job_applications', JSON.stringify(applications));
    }, 1500);
  };

  const handleReset = () => {
    setSuccess(false);
    setSelectedJob(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      resumeLink: '',
      coverLetter: ''
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectJob = (job: JobOpening) => {
    setSelectedJob(job);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-32 pb-24 bg-zinc-50 min-h-screen" id="careers-full-page">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <button
            onClick={onBackToHome}
            className="group inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 hover:text-zinc-950 transition-colors focus:outline-none"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </button>
        </div>

        {success ? (
          /* Submission Success State */
          <div className="max-w-xl mx-auto bg-white border border-zinc-200 rounded-xl p-12 text-center shadow-lg my-12" id="application-success">
            <div className="w-16 h-16 rounded-full bg-zinc-900 text-white flex items-center justify-center mb-6 mx-auto">
              <Check className="w-8 h-8" strokeWidth={3} />
            </div>
            <h4 className="text-3xl font-serif font-bold text-zinc-900">
              Application Received
            </h4>
            <p className="text-zinc-600 mt-4 font-sans text-sm leading-relaxed">
              Thank you for applying for the <span className="font-semibold text-zinc-900">{selectedJob?.title}</span> position at Doctype Innovations. 
              Our engineering evaluation panel will review your resume and experience index, and coordinate next steps via email shortly.
            </p>
            <button
              onClick={handleReset}
              className="mt-8 font-mono text-xs font-bold uppercase tracking-wider bg-zinc-950 hover:bg-zinc-800 text-white px-8 py-3.5 rounded transition-all duration-300"
            >
              Review Other Positions
            </button>
          </div>
        ) : selectedJob ? (
          /* Specific Job Detail & Application View */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" id="job-detail-view">
            
            {/* Left Column: Requirements & Responsibilities (7 Columns) */}
            <div className="lg:col-span-7 space-y-8">
              <button
                onClick={() => setSelectedJob(null)}
                className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 hover:text-zinc-950 flex items-center gap-1 focus:outline-none"
              >
                &larr; Back to Openings
              </button>
              
              <div>
                <span className="px-2.5 py-1 bg-zinc-100 text-zinc-700 text-xs font-mono rounded font-bold uppercase">
                  {selectedJob.department}
                </span>
                <h1 className="text-4xl font-serif font-bold text-zinc-950 mt-4">
                  {selectedJob.title}
                </h1>
                <div className="flex flex-wrap gap-6 mt-4 text-xs text-zinc-500 font-mono">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-zinc-400" />
                    {selectedJob.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-zinc-400" />
                    {selectedJob.type}
                  </span>
                  <span className="px-2 py-0.5 bg-zinc-100 text-zinc-700 rounded font-semibold">
                    Experience: {selectedJob.experience}
                  </span>
                </div>
              </div>

              <div className="border-t border-zinc-200 pt-6">
                <p className="text-base text-zinc-600 leading-relaxed font-sans">
                  {selectedJob.summary}
                </p>
              </div>

              {/* Key Requirements */}
              <div className="bg-white border border-zinc-200 rounded-lg p-6 space-y-4">
                <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-zinc-900 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-zinc-500" />
                  Qualifications &amp; Requirements
                </h3>
                <ul className="space-y-3 pl-1">
                  {selectedJob.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-600">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-zinc-900 mt-2"></span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Responsibilities */}
              <div className="bg-white border border-zinc-200 rounded-lg p-6 space-y-4">
                <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-zinc-900 flex items-center gap-2">
                  <ClipboardList className="w-5 h-5 text-zinc-500" />
                  Core Responsibilities
                </h3>
                <ul className="space-y-3 pl-1">
                  {selectedJob.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-600">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-zinc-400 mt-2"></span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Right Column: Direct Application Form (5 Columns) */}
            <div className="lg:col-span-5 bg-white border border-zinc-200 rounded-lg p-8 h-fit shadow-sm">
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-zinc-900 mb-6 flex items-center gap-2">
                <Send className="w-4 h-4 text-zinc-500" />
                Submit Your Application
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-zinc-600 uppercase mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-zinc-50 border border-zinc-200 focus:border-zinc-950 px-3.5 py-2.5 text-sm rounded focus:bg-white focus:outline-none transition-all"
                    placeholder="Jane Doe"
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
                    className="w-full bg-zinc-50 border border-zinc-200 focus:border-zinc-950 px-3.5 py-2.5 text-sm rounded focus:bg-white focus:outline-none transition-all"
                    placeholder="jane@example.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-600 uppercase mb-1.5">
                    Contact Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-zinc-50 border border-zinc-200 focus:border-zinc-950 px-3.5 py-2.5 text-sm rounded focus:bg-white focus:outline-none transition-all"
                    placeholder="+977-98XXXXXXXX"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-600 uppercase mb-1.5">
                    Resume/CV Link *
                  </label>
                  <input
                    type="url"
                    required
                    value={formData.resumeLink}
                    onChange={(e) => setFormData({ ...formData, resumeLink: e.target.value })}
                    className="w-full bg-zinc-50 border border-zinc-200 focus:border-zinc-950 px-3.5 py-2.5 text-sm rounded focus:bg-white focus:outline-none transition-all"
                    placeholder="https://drive.google.com/resume"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-600 uppercase mb-1.5">
                    Brief Cover Note (Optional)
                  </label>
                  <textarea
                    value={formData.coverLetter}
                    onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                    rows={4}
                    className="w-full bg-zinc-50 border border-zinc-200 focus:border-zinc-950 px-3.5 py-2.5 text-sm rounded focus:bg-white focus:outline-none transition-all resize-none"
                    placeholder="Tell us about your engineering philosophy, projects you love, or preferred tech stack..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 bg-zinc-950 hover:bg-zinc-800 disabled:bg-zinc-400 text-white font-mono text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2 mt-2"
                >
                  {submitting ? 'Processing Submission...' : 'Submit Application'}
                </button>
              </form>
            </div>

          </div>
        ) : (
          /* Main Careers Listing View */
          <div className="space-y-12">
            
            {/* Title / Hero Banner */}
            <div className="border-b border-zinc-200 pb-12">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500">
                Join the Squad
              </span>
              <h1 className="mt-3 text-5xl font-serif font-bold text-zinc-950 sm:text-6xl tracking-tight">
                Careers at Doctype
              </h1>
              <p className="mt-4 text-lg text-zinc-600 max-w-3xl leading-relaxed">
                We design clean systems, bespoke codebases, and compliance-first corporate software. 
                We skip template-shortcuts, prioritizing engineering durability and architectural clarity.
              </p>
            </div>

            {/* Open interest Banner Box */}
            <div className="bg-zinc-900 text-white rounded-xl p-8 relative overflow-hidden flex flex-col md:flex-row md:items-center md:justify-between gap-8 shadow-md">
              <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
              
              <div className="relative z-10 max-w-2xl">
                <h3 className="text-xl font-serif font-semibold text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-zinc-300" />
                  Do you excel in craft, details, and clean code?
                </h3>
                <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                  We are always on the lookout for meticulous developers, compliance-focused accountants, 
                  and systems architects who love writing pristine solutions. If you don't fit our exact listings, express your interest.
                </p>
              </div>
              <div className="relative z-10 flex-shrink-0">
                <button
                  onClick={() => handleSelectJob(JOB_OPENINGS[0])}
                  className="font-mono text-xs font-bold uppercase tracking-wider bg-white text-zinc-950 hover:bg-zinc-200 px-6 py-3.5 rounded transition-colors whitespace-nowrap"
                >
                  Express Interest
                </button>
              </div>
            </div>

            {/* Job Openings Grid list */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-8">
                Current Openings in Kathmandu
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="job-openings-grid">
                {JOB_OPENINGS.map((job) => (
                  <div 
                    key={job.id}
                    className="p-8 bg-white hover:bg-zinc-50/50 border border-zinc-200 hover:border-zinc-400 rounded-lg transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-1 bg-zinc-100 text-zinc-700 text-[10px] font-mono rounded font-bold uppercase">
                          {job.department}
                        </span>
                        <span className="text-xs text-zinc-500 font-mono">
                          {job.type}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-zinc-900 mt-4 font-serif">
                        {job.title}
                      </h3>
                      <p className="text-xs text-zinc-500 mt-1 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                        {job.location}
                      </p>
                      <p className="text-sm text-zinc-500 mt-4 leading-relaxed font-sans line-clamp-3">
                        {job.summary}
                      </p>
                    </div>
                    
                    <button
                      onClick={() => handleSelectJob(job)}
                      className="mt-8 w-full py-3 bg-zinc-950 text-white hover:bg-zinc-800 text-xs font-bold font-mono uppercase tracking-wider text-center rounded transition-colors"
                    >
                      View Position &amp; Apply
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
