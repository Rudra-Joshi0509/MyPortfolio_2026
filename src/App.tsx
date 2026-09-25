import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import TimelineSection from "@/components/TimelineSection";
import InternshipsSection from "@/components/InternshipsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";
import CustomCursor from "@/components/CustomCursor";
import AmbientBackground from "@/components/AmbientBackground";

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 selection:bg-indigo-500/30 selection:text-indigo-200 relative overflow-hidden">
      {/* Cool Interactive Mouse Cursor with Sparkle Movement Trail */}
      <CustomCursor />

      {/* Soothing, Eye-Pleasing Ambient Background with Stardust & Dynamic Spotlight */}
      <AmbientBackground />

      {/* Navigation */}
      <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* Hero & About */}
        <Hero onOpenResume={() => setIsResumeModalOpen(true)} />

        {/* Academic Foundation & Honors */}
        <EducationSection />

        {/* Technical Arsenal & Core Domains */}
        <SkillsSection />

        {/* Projects Showcase & Live Valorant Roast Widget */}
        <ProjectsSection />

        {/* Hyperiux GSAP Horizontal Scroll Timeline */}
        <TimelineSection />

        {/* Internships & Professional Deployments */}
        <InternshipsSection />

        {/* Badges, Accolades & Leadership */}
        <AchievementsSection />

        {/* Contact, Inquiries & Social Connections */}
        <ContactSection onOpenResume={() => setIsResumeModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Viewer / Downloader Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
