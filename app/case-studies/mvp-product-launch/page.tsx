import React from "react";
import { FiCheckCircle, FiFigma, FiCode, FiCloudLightning, FiTrendingUp } from "react-icons/fi";
import { Metadata } from "next";
import InnerBanner from "@/components/ui/InnerBanner";
import { CaseStudySidebar, CaseStudySection } from "@/components/case-studies/CaseStudyLayout";

export const metadata: Metadata = {
  title: "SaaS MVP Development | Case Study",
  description: "How we took a startup idea from concept to a working MVP launched in just 4 weeks, enabling early user feedback.",
};

export default function MVPDevelopmentCaseStudy() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <InnerBanner 
        badgeText="MVP Studio"
        title="SaaS MVP Development"
        description="Taking a completely raw startup idea, validating the core mechanics, and launching a fully functional Minimum Viable Product in under a month."
      />

      <div className="w-full max-w-7xl mx-auto px-6 py-16 lg:py-24 flex flex-col lg:flex-row gap-16">
        {/* Main Content */}
        <div className="lg:w-2/3 space-y-16">
          
          <CaseStudySection number="1" title="Overview">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <ul className="space-y-4">
                <li className="flex flex-col sm:flex-row sm:items-center">
                  <span className="font-semibold text-gray-900 w-32">Client:</span>
                  <span className="text-gray-600">Early-stage Startup Founder</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-center">
                  <span className="font-semibold text-gray-900 w-32">Industry:</span>
                  <span className="text-gray-600">Technology / SaaS</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-center">
                  <span className="font-semibold text-gray-900 w-32">Services:</span>
                  <span className="text-gray-600">Software Development, UX/UI Design</span>
                </li>
              </ul>
            </div>
          </CaseStudySection>

          <CaseStudySection number="2" title="The Problem" heading="A great idea stuck on paper.">
            <p className="text-lg text-gray-600 leading-relaxed">
              The founder had a strong vision for an AI-powered expense tracking application. They had domain expertise and initial funding but lacked the technical team to build it. They needed a working prototype quickly to capture early users, secure further investment, and test the market reaction before committing to massive engineering costs.
            </p>
          </CaseStudySection>

          <CaseStudySection number="3" title="Our Solution" heading="Fast. Lean. Scalable.">
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Through our MVP Studio approach, we stripped away the "nice-to-have" features and laser-focused entirely on building the core functionality that solved the users' immediate pain points.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border text-left border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <FiFigma className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Rapid Prototyping</h4>
                <p className="text-gray-600 text-sm">Designed high-fidelity wireframes in Figma to validate the user flow within days.</p>
              </div>
              <div className="bg-white border text-left border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  <FiCode className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Modern Stack</h4>
                <p className="text-gray-600 text-sm">Built a robust Next.js frontend with Tailwind CSS to move extremely quickly without sacrificing quality.</p>
              </div>
              <div className="bg-white border text-left border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <FiCloudLightning className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Vercel Deployment</h4>
                <p className="text-gray-600 text-sm">Utilized Vercel for instantaneous deployments, allowing the founder to test features daily.</p>
              </div>
              <div className="bg-white border text-left border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4">
                  <FiTrendingUp className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Analytics & Auth</h4>
                <p className="text-gray-600 text-sm">Integrated Supabase for seamless authentication and PostHog for early user behavioral tracking.</p>
              </div>
            </div>
          </CaseStudySection>

          <CaseStudySection number="4" title="Visual Proof">
            <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 overflow-hidden relative shadow-2xl">
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-screen filter blur-[80px] opacity-30"></div>
               
               {/* UI Mockup Representation */}
               <div className="relative z-10">
                 {/* Browser Chrome */}
                 <div className="w-full bg-gray-800 rounded-t-xl p-3 flex items-center border-b border-gray-700">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="mx-auto bg-gray-900 text-gray-400 text-xs px-4 py-1 rounded hidden md:block border border-gray-700">
                       app.startup-mvp.com
                    </div>
                 </div>
                 {/* App Interface */}
                 <div className="bg-gray-50 flex flex-col md:flex-row h-64 rounded-b-xl overflow-hidden border border-gray-700">
                    {/* Sidebar */}
                    <div className="w-full md:w-1/4 bg-white border-r border-gray-200 p-4 hidden md:block">
                       <div className="h-6 w-24 bg-blue-100 rounded mb-8"></div>
                       <div className="space-y-4">
                         <div className="h-4 w-full bg-blue-50 rounded"></div>
                         <div className="h-4 w-3/4 bg-gray-100 rounded"></div>
                         <div className="h-4 w-5/6 bg-gray-100 rounded"></div>
                       </div>
                    </div>
                    {/* Main Feed */}
                    <div className="flex-1 p-6 relative">
                       <div className="flex justify-between items-center mb-6">
                         <div className="h-8 w-40 bg-gray-200 rounded"></div>
                         <div className="h-8 w-24 bg-blue-600 rounded-lg"></div>
                       </div>
                       
                       <div className="grid grid-cols-3 gap-4 mb-6">
                         <div className="h-20 bg-white shadow-sm border border-gray-100 rounded-xl p-3">
                           <div className="h-3 w-16 bg-gray-200 rounded mb-3"></div>
                           <div className="h-6 w-20 bg-gray-800 rounded"></div>
                         </div>
                         <div className="h-20 bg-white shadow-sm border border-gray-100 rounded-xl p-3">
                           <div className="h-3 w-16 bg-gray-200 rounded mb-3"></div>
                           <div className="h-6 w-20 bg-gray-800 rounded"></div>
                         </div>
                         <div className="h-20 bg-white shadow-sm border border-gray-100 rounded-xl p-3">
                           <div className="h-3 w-16 bg-gray-200 rounded mb-3"></div>
                           <div className="h-6 w-20 bg-gray-800 rounded"></div>
                         </div>
                       </div>
                       
                       <div className="h-32 bg-white shadow-sm border border-gray-100 rounded-xl"></div>
                    </div>
                 </div>
               </div>
            </div>
          </CaseStudySection>

          <CaseStudySection number="5" title="Client Testimonial">
            <div className="bg-blue-50/50 rounded-3xl p-10 border border-blue-100 relative">
              <FiCheckCircle className="absolute top-8 right-8 w-12 h-12 text-blue-200 opacity-50" />
              <p className="text-xl md:text-2xl text-gray-900 font-medium italic mb-8 leading-relaxed">
                &quot;I've dealt with dev shops before that overpromise and stretch out timelines for months. Throoout was completely different. We defined the scope aggressively, and they delivered a beautifully functioning app in 4 weeks. We got our first 50 early-adopter signups two days after launch.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-200 rounded-full overflow-hidden flex items-center justify-center font-bold text-xl text-blue-700">S</div>
                <div>
                  <p className="font-bold text-gray-900">Sarah Jenkins</p>
                  <p className="text-sm text-gray-600">Startup Founder</p>
                </div>
              </div>
            </div>
          </CaseStudySection>

        </div>

        {/* Sidebar */}
        <CaseStudySidebar 
          metrics={[
            {
              label: "Time to Market",
              value: "4 Weeks",
              valueClassName: "text-4xl",
              description: "From initial kickoff to live production."
            },
            {
              label: "Early User Feedback",
              value: "50+ Beta Users",
              valueClassName: "text-blue-600 text-3xl",
              description: "Gained within the first week of launch."
            },
            {
              label: "Roadmap",
              value: <><FiCheckCircle className="mr-2" /> Fully Validated</>,
              valueClassName: "text-emerald-600 text-xl font-bold"
            }
          ]}
          technologies={['Next.js 14', 'React', 'Tailwind CSS', 'Supabase', 'Vercel', 'PostHog', 'Figma']}
          ctaText="Have an app idea?"
          ctaSubtext="Don't spend a year in stealth. Let's build your MVP, launch quickly, and see if people love it."
          ctaButtonText="Start Your MVP"
          ctaLink="/contact"
        />
      </div>
    </main>
  );
}
