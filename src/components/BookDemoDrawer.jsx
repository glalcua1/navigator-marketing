/**
 * Book Demo Drawer Component - Simple Lead Generation
 *
 * A focused right-side drawer for collecting demo requests.
 * Captures essential lead details with clear validation and
 * shows a professional thank-you note upon successful submission.
 *
 * Accessibility:
 * - Esc closes the drawer
 * - Backdrop click closes the drawer
 * - Proper labels and aria attributes
 *
 * Debugging Aids:
 * - Console logs at key lifecycle and submit events
 * - Non-blocking try/catch around async simulation
 *
 * Verification:
 * - Open/close via parent state
 * - Validate form errors appear inline
 * - After submit, thank-you state renders with user's first name
 *
 * @param {boolean} isOpen - Controls the drawer visibility
 * @param {Function} onClose - Callback to close the drawer
 */
import React, { useEffect, useMemo, useState } from 'react';

const initialFormState = {
  fullName: '',
  company: '',
  email: '',
  phone: '',
  notes: '',
};

/**
 * Validate the form fields and return an error map.
 * Adds minimal yet effective validation suitable for lead capture.
 */
function validate(form) {
  /** @type {Record<string, string>} */
  const next = {};
  if (!form.fullName.trim()) next.fullName = 'Full name is required';
  if (!form.company.trim()) next.company = 'Company/Hotel is required';
  if (!form.email.trim()) next.email = 'Work email is required';
  // simple email format check
  if (form.email && !/\S+@\S+\.\S+/.test(form.email)) next.email = 'Enter a valid email';
  // phone is optional but if provided, do a basic sanity check
  if (form.phone && form.phone.replace(/\D/g, '').length < 7) next.phone = 'Enter a valid phone';
  return next;
}

const BookDemoDrawer = ({ isOpen, onClose }) => {
  const [form, setForm] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const firstName = useMemo(() => {
    const name = form.fullName.trim();
    if (!name) return '';
    return name.split(' ')[0];
  }, [form.fullName]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && isOpen) onClose?.();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      console.log('[BookDemoDrawer] Opened');
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Reset state when opened
  useEffect(() => {
    if (isOpen) {
      setForm(initialFormState);
      setErrors({});
      setIsSubmitting(false);
      setSubmitted(false);
    }
  }, [isOpen]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const v = validate(form);
    if (Object.keys(v).length > 0) {
      setErrors(v);
      return;
    }
    setIsSubmitting(true);
    console.log('[BookDemoDrawer] Submitting lead', form);
    try {
      // Simulate network submission
      await new Promise((r) => setTimeout(r, 1200));
      setSubmitted(true);
      console.log('[BookDemoDrawer] Submission successful');
    } catch (err) {
      console.error('[BookDemoDrawer] Submission failed', err);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Book a demo"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#1800FF] to-[#008FFF] text-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-1">{submitted ? 'Thank you' : 'Book a Live Demo'}</h2>
              <p className="text-blue-100">
                {submitted ? 'We appreciate your interest in Navigator.' : 'A quick conversation to assess your needs.'}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors duration-200"
              aria-label="Close drawer"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6">
            {!submitted ? (
              <form onSubmit={onSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={onChange}
                    placeholder="Enter your full name"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                      errors.fullName ? 'border-red-500' : 'border-slate-300'
                    }`}
                  />
                  {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Company / Hotel *</label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={onChange}
                    placeholder="Your company or property"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                      errors.company ? 'border-red-500' : 'border-slate-300'
                    }`}
                  />
                  {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Work Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="name@company.com"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                      errors.email ? 'border-red-500' : 'border-slate-300'
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone (optional)</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    placeholder="+1 555 123 4567"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                      errors.phone ? 'border-red-500' : 'border-slate-300'
                    }`}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Anything specific you’d like to see?</label>
                  <textarea
                    name="notes"
                    value={form.notes}
                    onChange={onChange}
                    rows={4}
                    placeholder="Tell us about your property or goals"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors border-slate-300"
                  />
                </div>

                <div className="bg-slate-50 rounded-lg p-4 text-sm text-slate-600">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    A Navigator specialist will reach out within one business day.
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-slate-400 cursor-not-allowed text-white'
                      : 'bg-gradient-to-r from-[#1800FF] to-[#008FFF] text-white hover:shadow-lg hover:scale-[1.01]'
                  }`}
                >
                  {isSubmitting ? 'Scheduling...' : 'Request Demo'}
                </button>
              </form>
            ) : (
              <div className="py-6">
                <div className="text-center">
                  <div className="mx-auto w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                      <path d="M6 12l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">
                    Thank you{firstName ? `, ${firstName}` : ''}.
                  </h3>
                  <p className="text-slate-600 mt-2">
                    We’ve received your request and a Navigator specialist will reach out shortly to coordinate a brief discovery and live walkthrough tailored to your property.
                  </p>
                  <div className="mt-6 rounded-xl bg-slate-50 p-4 text-left text-slate-700">
                    <p className="font-medium mb-1">What happens next</p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>You’ll get a confirmation email with proposed time slots.</li>
                      <li>We’ll focus on the areas most relevant to your goals.</li>
                      <li>No pressure — our aim is to be genuinely helpful.</li>
                    </ul>
                  </div>
                  <button
                    onClick={onClose}
                    className="mt-6 w-full py-3 rounded-lg font-semibold bg-slate-900 text-white hover:opacity-95"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-200 p-6 bg-slate-50 flex-shrink-0">
          <p className="text-xs text-slate-500 text-center leading-relaxed">
            By submitting this form, you agree to our{' '}
            <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
            {' '}and{' '}
            <a href="#" className="text-blue-600 hover:underline">Terms of Service</a>.
          </p>
        </div>
      </aside>
    </>
  );
};

export default BookDemoDrawer;

/**
 * Ways to verify:
 * - Click "Book a Demo" CTA and ensure the drawer opens.
 * - Submit with empty fields to see inline validation.
 * - Submit with valid details and confirm thank-you state.
 * - Press Esc or click backdrop to close.
 *
 * Debug tips:
 * - Watch console logs for open/submit/success paths.
 * - Temporarily reduce setTimeout latency to test transitions quickly.
 */ 


