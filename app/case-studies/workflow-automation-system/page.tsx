import React from "react";
import { FiCheckCircle, FiClock, FiDatabase, FiRefreshCw, FiPieChart } from "react-icons/fi";
import { Metadata } from "next";
import InnerBanner from "@/components/ui/InnerBanner";
import { CaseStudySidebar, CaseStudySection } from "@/components/case-studies/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Workflow Automation System | Case Study",
  description: "How we automated a manual B2B workflow reducing manual work by 80% and drastically improving lead response times.",
};

export default function WorkflowAutomationCaseStudy() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <InnerBanner 
        badgeText="Automation"
        title="Workflow Automation System"
        description="Eliminating bottlenecks by replacing messy spreadsheets with an automated pipeline that captures leads, updates CRMs, and triggers intelligent follow-ups instantly."
      />

      <div className="w-full max-w-7xl mx-auto px-6 py-16 lg:py-24 flex flex-col lg:flex-row gap-16">
        {/* Main Content */}
        <div className="lg:w-2/3 space-y-16">
          
          <CaseStudySection number="1" title="Overview">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <ul className="space-y-4">
                <li className="flex flex-col sm:flex-row sm:items-center">
                  <span className="font-semibold text-gray-900 w-32">Client:</span>
                  <span className="text-gray-600">B2B Financial Services Firm</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-center">
                  <span className="font-semibold text-gray-900 w-32">Industry:</span>
                  <span className="text-gray-600">B2B Services</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-center">
                  <span className="font-semibold text-gray-900 w-32">Services:</span>
                  <span className="text-gray-600">Workflow Automation, API Integrations</span>
                </li>
              </ul>
            </div>
          </CaseStudySection>

          <CaseStudySection number="2" title="The Problem" heading="Lost leads and wasted hours.">
            <p className="text-lg text-gray-600 leading-relaxed">
              The client relied heavily on manual data entry. Web leads would come into an inbox, someone would manually copy the details into a Google Sheet, and eventually, a sales rep would be notified. Response times were averaging 24 hours, leads were slipping through the cracks, and the team was wasting countless hours on repetitive admin work instead of selling.
            </p>
          </CaseStudySection>

          <CaseStudySection number="3" title="Our Solution" heading="A zero-touch data pipeline.">
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We engineered a completely automated, resilient background pipeline that connected all their disconnected tools in real-time.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border text-left border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mb-4">
                  <FiRefreshCw className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Automated Routing</h4>
                <p className="text-gray-600 text-sm">Lead form submissions are instantly routed and categorized without a single human touch.</p>
              </div>
              <div className="bg-white border text-left border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center mb-4">
                  <FiDatabase className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">CRM Sync</h4>
                <p className="text-gray-600 text-sm">Automated creation of contacts and deals inside their CRM with all relevant metadata.</p>
              </div>
              <div className="bg-white border text-left border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <FiClock className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Instant Alerts</h4>
                <p className="text-gray-600 text-sm">Triggered instant Slack notifications to the appropriate sales agent based on lead territory.</p>
              </div>
              <div className="bg-white border text-left border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  <FiPieChart className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Reporting Dashboards</h4>
                <p className="text-gray-600 text-sm">Data aggregation scripts that automatically compiled weekly performance reports.</p>
              </div>
            </div>
          </CaseStudySection>

          <CaseStudySection number="4" title="Visual Proof">
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200 overflow-hidden relative">
               <h4 className="font-bold text-gray-900 mb-6">Workflow Visualization</h4>
               {/* Node visualization */}
               <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 relative">
                  {/* Connecting Line */}
                  <div className="hidden md:block absolute top-1/2 left-10 right-10 h-1 bg-gray-300 -z-10 transform -translate-y-1/2"></div>
                  
                  {/* Node 1 */}
                  <div className="bg-white border-2 border-emerald-500 rounded-xl p-4 shadow-md w-40 text-center relative z-10">
                    <div className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2">1</div>
                    <p className="text-xs font-bold">Webhooks</p>
                    <p className="text-[10px] text-gray-500">(Lead Captured)</p>
                  </div>
                  
                  {/* Node 2 */}
                  <div className="bg-white border-2 border-blue-500 rounded-xl p-4 shadow-md w-40 text-center relative z-10">
                    <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">2</div>
                    <p className="text-xs font-bold">Data Parser</p>
                    <p className="text-[10px] text-gray-500">(Format & Filter)</p>
                  </div>
                  
                  {/* Node 3 */}
                  <div className="bg-white border-2 border-indigo-500 rounded-xl p-4 shadow-md w-40 text-center relative z-10">
                    <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-2">3</div>
                    <p className="text-xs font-bold">CRM API</p>
                    <p className="text-[10px] text-gray-500">(Create Deals)</p>
                  </div>
                  
                  {/* Node 4 */}
                  <div className="bg-white border-2 border-purple-500 rounded-xl p-4 shadow-md w-40 text-center relative z-10">
                     <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">4</div>
                    <p className="text-xs font-bold">Slack Alert</p>
                    <p className="text-[10px] text-gray-500">(Notify Sales)</p>
                  </div>
               </div>
            </div>
          </CaseStudySection>

          <CaseStudySection number="5" title="Client Testimonial">
            <div className="bg-emerald-50 rounded-3xl p-10 border border-emerald-100 relative">
              <FiCheckCircle className="absolute top-8 right-8 w-12 h-12 text-emerald-200 opacity-50" />
              <p className="text-xl md:text-2xl text-gray-900 font-medium italic mb-8 leading-relaxed">
                &quot;It used to take us agonizingly long to follow up with potential clients. Now, the moment someone requests a quote, our reps are instantly notified with the exact context laid out perfectly in their CRM. This automation is like having a perfectly disciplined assistant.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-200 rounded-full overflow-hidden flex items-center justify-center font-bold text-xl text-teal-700">P</div>
                <div>
                  <p className="font-bold text-gray-900">Peter Chang</p>
                  <p className="text-sm text-gray-600">Director of Operations</p>
                </div>
              </div>
            </div>
          </CaseStudySection>

        </div>

        {/* Sidebar */}
        <CaseStudySidebar 
          metrics={[
            {
              label: "Manual Work Reduced",
              value: "80%",
              valueClassName: "text-4xl",
              description: "Saved over 20 hours of data entry per week."
            },
            {
              label: "Lead Response Time",
              value: <>24 hrs <span className="mx-2 text-gray-400">→</span> 5 mins</>,
              valueClassName: "text-emerald-600 text-3xl",
              description: "Drastic improvement in sales velocity."
            },
            {
              label: "Data Accuracy",
              value: "100% Error-Free",
              valueClassName: "text-2xl",
              description: "Eliminated human typos in CRM records."
            }
          ]}
          technologies={['n8n', 'Zapier', 'REST APIs', 'HubSpot CRM', 'Slack API', 'Google Sheets API']}
          ctaText="Drowning in spreadsheets?"
          ctaSubtext="Stop doing manual labor that a script can do. Let's automate your agency operations."
          ctaButtonText="Build an Automation"
          ctaLink="/contact"
        />
      </div>
    </main>
  );
}
