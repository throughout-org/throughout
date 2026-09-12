"use client";

import { useState } from "react";
import { FiCheck } from "react-icons/fi";

const included = [
  "My Work, Browse & filter, and Story details",
  "Push notifications for stories you own",
  "Team management for admins",
  "7-day free trial, cancel anytime",
];

export default function BypassPricingCard() {
  const [annual, setAnnual] = useState(true);

  return (
    <div className="mx-auto max-w-md rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">
      <div className="mx-auto flex w-fit items-center gap-1 rounded-full bg-gray-100 p-1">
        <button
          type="button"
          onClick={() => setAnnual(false)}
          className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
            !annual ? "bg-white text-slate-950 shadow-sm" : "text-slate-500"
          }`}
        >
          Monthly
        </button>
        <button
          type="button"
          onClick={() => setAnnual(true)}
          className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
            annual ? "bg-white text-slate-950 shadow-sm" : "text-slate-500"
          }`}
        >
          Annual
        </button>
      </div>

      {annual && (
        <p className="mt-3 text-center text-xs font-bold uppercase tracking-wider text-[#4c4bcd]">
          Save ~33% vs. monthly
        </p>
      )}

      <div className="mt-6 text-center">
        <span className="text-5xl font-extrabold tracking-tight text-slate-950">
          {annual ? "$24" : "$2.99"}
        </span>
        <span className="text-base font-semibold text-slate-500">
          {annual ? "/user/year" : "/user/month"}
        </span>
        {annual && <p className="mt-1 text-sm text-slate-500">≈ $2/user/month</p>}
      </div>

      <ul className="mt-8 space-y-3">
        {included.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
            <FiCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#4c4bcd]" />
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-8 w-full cursor-default rounded-full border border-gray-200 bg-gray-50 py-3 text-center text-sm font-bold uppercase tracking-wide text-slate-400">
        Coming soon
      </div>
      <p className="mt-3 text-center text-xs text-slate-400">
        Starts with a 7-day free trial. No card charged today.
      </p>
    </div>
  );
}
