import React, { useState } from "react";

interface SeoUnlockPopupProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (email: string) => Promise<void>;
  loading: boolean;
  error: string;
}

export default function SeoUnlockPopup({ open, onClose, onSubmit, loading, error }: SeoUnlockPopupProps) {
  const [email, setEmail] = useState("");

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative">
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl font-bold"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-2 text-center">Unlock Full Technical Report</h2>
        <p className="text-gray-600 mb-4 text-center text-sm">Get detailed insights on competitor analysis, backlinks, and more. Enter your business email to receive the full report.</p>
        <form
          onSubmit={async e => {
            e.preventDefault();
            await onSubmit(email);
          }}
          className="flex flex-col gap-4"
        >
          <input
            type="email"
            required
            placeholder="Enter your business email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="px-4 py-3 rounded-full border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-lg shadow outline-none transition-all"
            disabled={loading}
          />
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-sky-400 text-white font-bold rounded-full shadow hover:scale-105 transition-all disabled:opacity-60"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Me The Full Report"}
          </button>
        </form>
        {error && <div className="text-red-600 text-center mt-2">{error}</div>}
        <div className="text-xs text-gray-400 mt-4 text-center">We respect your inbox. No spam.</div>
      </div>
    </div>
  );
}
