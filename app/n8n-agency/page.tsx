"use client";
import N8nAgencyAI from "@/components/n8n-agency/N8nAgencyAI";
import N8nAgencyEngineering from "@/components/n8n-agency/N8nAgencyEngineering";
import N8nAgencyFAQ from "@/components/n8n-agency/N8nAgencyFAQ";
import N8nAgencyHero from "@/components/n8n-agency/N8nAgencyHero";
import N8nAgencyManaged from "@/components/n8n-agency/N8nAgencyManaged";
import N8nAgencyManualWork from "@/components/n8n-agency/N8nAgencyManualWork";

export default function N8nAgencyPage() {
  return (
     <main className="relative min-h-screen w-full flex flex-col items-center justify-start overflow-hidden pt-10">
      {/* Blue Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-50 to-blue-50 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-blue-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-blue-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      <N8nAgencyHero />
       <N8nAgencyEngineering />
    <N8nAgencyManualWork />
      {/*  <N8nAgencyManaged />
      <N8nAgencyAI />
      <N8nAgencyFAQ /> */}
    </main>
  );
}
