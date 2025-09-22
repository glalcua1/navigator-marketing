/**
 * Login Drawer - Simple right-side sliding authentication panel
 * Allows entering dummy credentials and redirects to the application.
 */

import React, { useEffect, useState } from 'react';

const APP_URL = 'https://navigator-263010608613.us-east4.run.app';

const LoginDrawer = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  // Close with ESC
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape' && isOpen) onClose?.(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate auth latency
    await new Promise((r) => setTimeout(r, 1200));
    // Dummy success → redirect to app
    window.location.href = APP_URL;
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-full max-w-md h-screen bg-white z-50 transform transition-transform duration-300 ease-in-out flex flex-col overscroll-contain ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isOpen}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-700 text-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-1">Login</h2>
              <p className="text-slate-300 text-sm">Use any email and password to continue</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Close login drawer"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent border-slate-300"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent border-slate-300"
                placeholder="Enter any password"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 rounded-lg font-semibold text-white transition-all duration-300 ${
                isSubmitting
                  ? 'bg-slate-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-95'
              }`}
            >
              {isSubmitting ? (
                <span className="inline-flex items-center">
                  <span className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"></span>
                  Logging in...
                </span>
              ) : (
                'Login'
              )}
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-200 p-6 bg-slate-50">
          <p className="text-xs text-slate-500 text-center">This is a demo login. Any credentials will work.</p>
        </div>
      </div>
    </>
  );
};

export default LoginDrawer;


