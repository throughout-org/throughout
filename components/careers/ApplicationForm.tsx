"use client";

import { useState, FormEvent } from "react";

interface ApplicationFormProps {
  internshipTitle: string;
  internshipSlug: string;
  status?: "open" | "closed";
}

export default function ApplicationForm({
  internshipTitle,
  internshipSlug,
  status = "open",
}: ApplicationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);

    // Validate file type
    const resumeFile = formData.get("resume") as File;
    if (resumeFile && resumeFile.size > 0) {
      if (resumeFile.type !== "application/pdf") {
        setErrorMessage("Resume must be a PDF file");
        setIsSubmitting(false);
        setSubmitStatus("error");
        return;
      }
      // Check file size (max 5MB)
      if (resumeFile.size > 5 * 1024 * 1024) {
        setErrorMessage("Resume file size must be less than 5MB");
        setIsSubmitting(false);
        setSubmitStatus("error");
        return;
      }
    } else {
      setErrorMessage("Please upload your resume");
      setIsSubmitting(false);
      setSubmitStatus("error");
      return;
    }

    try {
      const response = await fetch("/api/job-applications", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        // Reset form
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus("error");
        setErrorMessage(
          data.error || "Failed to submit application. Please try again.",
        );
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage("An error occurred. Please try again later.");
      console.error("Error submitting application:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClassName =
    "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 transition focus:border-sky-400 focus:outline-none focus:ring-4 focus:ring-sky-100";

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
      <div className="mb-8">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-sky-700">
          Application
        </p>
        <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">
          Apply Now
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Submit your application for{" "}
          <span className="font-bold text-slate-950">{internshipTitle}</span>
        </p>
      </div>

      {status === "closed" && (
        <div className="p-4 mb-6 border rounded-2xl border-amber-200 bg-amber-50">
          <div className="flex items-start">
            <svg
              className="w-5 h-5 text-amber-600 mt-0.5 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4v2m0 4v2m-6-2a2 2 0 11-4 0 2 2 0 014 0zM9 7a2 2 0 11-4 0 2 2 0 014 0zm12 0a2 2 0 11-4 0 2 2 0 014 0zm-6 6a2 2 0 11-4 0 2 2 0 014 0zm6 0a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <div>
              <h3 className="mb-1 font-semibold text-amber-800">
                Position Closed
              </h3>
              <p className="text-sm text-amber-700">
                This internship position is no longer accepting applications.
              </p>
            </div>
          </div>
        </div>
      )}

      {submitStatus === "success" && (
        <div className="p-4 mb-6 border border-green-200 rounded-2xl bg-green-50">
          <div className="flex items-start">
            <svg
              className="w-5 h-5 text-green-600 mt-0.5 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <h3 className="mb-1 font-semibold text-green-800">
                Application Submitted Successfully!
              </h3>
              <p className="text-sm text-green-700">
                Thank you for applying. We&apos;ll review your application and
                get back to you soon.
              </p>
            </div>
          </div>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="p-4 mb-6 border border-red-200 rounded-2xl bg-red-50">
          <div className="flex items-start">
            <svg
              className="w-5 h-5 text-red-600 mt-0.5 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <h3 className="mb-1 font-semibold text-red-800">
                Submission Failed
              </h3>
              <p className="text-sm text-red-700">{errorMessage}</p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <input type="hidden" name="internshipSlug" value={internshipSlug} />
        <input type="hidden" name="internshipTitle" value={internshipTitle} />

        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-bold text-slate-700"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className={fieldClassName}
            placeholder="Enter your full name"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-bold text-slate-700"
          >
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={fieldClassName}
            placeholder="Enter your email address"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-bold text-slate-700"
          >
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className={fieldClassName}
            placeholder="Enter your phone number"
          />
        </div>

        {/* Cover Letter */}
        <div>
          <label
            htmlFor="coverLetter"
            className="block mb-2 text-sm font-bold text-slate-700"
          >
            Cover Letter <span className="text-red-500">*</span>
          </label>
          <textarea
            id="coverLetter"
            name="coverLetter"
            required
            rows={6}
            className={`${fieldClassName} resize-y`}
            placeholder="Tell us why you're interested in this internship and what makes you a great fit..."
          />
          <p className="mt-2 text-xs leading-5 text-slate-500">
            Share your motivation, relevant experience, and what you hope to
            achieve.
          </p>
        </div>

        {/* Referral Source */}
        <div>
          <label
            htmlFor="referralSource"
            className="block mb-2 text-sm font-bold text-slate-700"
          >
            Where did you hear about us? <span className="text-red-500">*</span>
          </label>
          <select
            id="referralSource"
            name="referralSource"
            required
            defaultValue=""
            className={fieldClassName}
          >
            <option value="" disabled>
              Select one
            </option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Instagram">Instagram</option>
            <option value="Facebook">Facebook</option>
            <option value="Friend">Friend</option>
            <option value="University">University</option>
            <option value="Google Search">Google Search</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Resume Upload */}
        <div>
          <label
            htmlFor="resume"
            className="block mb-2 text-sm font-bold text-slate-700"
          >
            Resume (PDF only) <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="file"
              id="resume"
              name="resume"
              accept=".pdf,application/pdf"
              required
              className={`${fieldClassName} cursor-pointer file:mr-4 file:rounded-full file:border-0 file:bg-slate-950 file:px-4 file:py-2 file:text-sm file:font-bold file:text-white hover:file:bg-sky-700`}
            />
          </div>
          <p className="mt-2 text-xs leading-5 text-slate-500">
            Upload your resume in PDF format (Max 5MB)
          </p>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting || status === "closed"}
            className={`group relative flex w-full items-center justify-center overflow-hidden rounded-full px-8 py-4 text-base font-bold text-white transition ${
              status === "closed"
                ? "cursor-not-allowed bg-slate-400 opacity-60"
                : "bg-sky-600 hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-50"
            }`}
          >
            {isSubmitting ? (
              <>
                <svg
                  className="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Submitting Application...
              </>
            ) : status === "closed" ? (
              <>
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                Position Closed
              </>
            ) : (
              <>
                Submit Application
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </>
            )}
          </button>
        </div>

        {/* Privacy Notice */}
        <p className="text-xs leading-5 text-center text-slate-500">
          By submitting this form, you agree to our processing of your personal
          data for recruitment purposes.
        </p>
      </form>
    </div>
  );
}
