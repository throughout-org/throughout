"use client";

import { useState, FormEvent } from "react";

interface ApplicationFormProps {
  internshipTitle: string;
  internshipSlug: string;
}

export default function ApplicationForm({
  internshipTitle,
  internshipSlug,
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
      const response = await fetch("/api/internship-application", {
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

  return (
    <div className="p-8 border shadow-2xl bg-white/70 rounded-3xl border-white/40 backdrop-blur-2xl">
      <div className="mb-8">
        <h2 className="mb-2 text-3xl font-bold">Apply Now</h2>
        <p className="text-gray-600">
          Submit your application for{" "}
          <span className="font-semibold">{internshipTitle}</span>
        </p>
      </div>

      {submitStatus === "success" && (
        <div className="p-4 mb-6 border border-green-200 rounded-lg bg-green-50">
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
        <div className="p-4 mb-6 border border-red-200 rounded-lg bg-red-50">
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
            className="block mb-2 text-sm font-semibold text-gray-700"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 transition-all border shadow-sm border-white/50 bg-white/70 rounded-2xl focus:ring-2 focus:ring-sky-400 focus:border-transparent"
            placeholder="John Doe"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-semibold text-gray-700"
          >
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 transition-all border shadow-sm border-white/50 bg-white/70 rounded-2xl focus:ring-2 focus:ring-sky-400 focus:border-transparent"
            placeholder="john@example.com"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-semibold text-gray-700"
          >
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-3 transition-all border shadow-sm border-white/50 bg-white/70 rounded-2xl focus:ring-2 focus:ring-sky-400 focus:border-transparent"
            placeholder="+94 77 123 4567"
          />
        </div>

        {/* Cover Letter */}
        <div>
          <label
            htmlFor="coverLetter"
            className="block mb-2 text-sm font-semibold text-gray-700"
          >
            Cover Letter <span className="text-red-500">*</span>
          </label>
          <textarea
            id="coverLetter"
            name="coverLetter"
            required
            rows={6}
            className="w-full px-4 py-3 transition-all border shadow-sm resize-y border-white/50 bg-white/70 rounded-2xl focus:ring-2 focus:ring-sky-400 focus:border-transparent"
            placeholder="Tell us why you're interested in this internship and what makes you a great fit..."
          />
          <p className="mt-1 text-sm text-gray-500">
            Share your motivation, relevant experience, and what you hope to
            achieve.
          </p>
        </div>

        {/* Resume Upload */}
        <div>
          <label
            htmlFor="resume"
            className="block mb-2 text-sm font-semibold text-gray-700"
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
              className="w-full px-4 py-3 transition-all border shadow-sm cursor-pointer border-white/50 bg-white/70 rounded-2xl focus:ring-2 focus:ring-sky-400 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-extrabold file:bg-gradient-to-r file:from-sky-400 file:via-blue-500 file:to-indigo-500 file:text-white hover:file:opacity-90"
            />
          </div>
          <p className="mt-1 text-sm text-gray-500">
            Upload your resume in PDF format (Max 5MB)
          </p>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="group relative w-full px-8 py-4 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 text-white text-base sm:text-lg font-extrabold rounded-full overflow-hidden shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border border-white/30 backdrop-blur-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            style={{
              boxShadow:
                "0 6px 32px 0 rgba(56,189,248,0.18), 0 2px 12px 0 rgba(99,102,241,0.10)",
              transition: "all 0.25s cubic-bezier(.4,2,.6,1)",
            }}
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
        <p className="text-xs text-center text-gray-500">
          By submitting this form, you agree to our processing of your personal
          data for recruitment purposes.
        </p>
      </form>
    </div>
  );
}
