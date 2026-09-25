# 🚀 Rudra Joshi — Future Computer Engineer Portfolio

A futuristic, high-performance portfolio website engineered for **Rudra Joshi**, featuring **React 19, TypeScript, Tailwind CSS v4, GSAP ScrollTrigger**, and the **Hyperiux Vault Horizontal Scroll Timeline**.

---

## 🌟 Highlights & Features

1. **Hyperiux Vault GSAP Horizontal Timeline**:
   - Pinned horizontal scroll trajectory mapping Rudra's milestones from 2022 to 2026.
   - Built inside `src/components/ui/timeline.tsx` with fallback animations, line drawing, and word splitting.
2. **Interactive Hero Section**:
   - Dynamic terminal window switching between `about.sh`, `skills.json`, and `merit.log`.
   - Glowing cyber badge avatar with placeholder photo indicator.
   - One-click copy email button with audio feedback and confetti explosion.
3. **Featured Projects Showcase (20+ Projects & 5+ Clients)**:
   - **AI Image Art Generator** (with style pills: Sketch, Cartoon, Noir B&W, Edge Detection).
   - **AI Photo Enhancer** (with interactive mode toggles: Soft, Normal, Strong, Night, High Detail, Warm Tone).
   - **Valorant Roast Machine** (Interactive live mini-widget testing tier roasts from Iron to Radiant!).
   - **Plant Care AI App** (Agricultural crop pathology diagnostics).
   - **Study Tracker System** (Collaborative routine and syllabus planner).
4. **Academic Honors & Foundation**:
   - **C. U. Shah Govt Polytechnic, Surendranagar**: **9.46 CGPA** in Sem 4, Multiple 1st Ranks, Top 3 twice.
   - **Dayamayi Mata High School**: **81.09%**.
5. **Elite Internships & Credentials**:
   - **AI Engineer Intern at BharatCares** (March – April 2026).
   - **Microsoft Online Intern under SBTP 2026** (May 2026) with official **Responsible Generative AI Solution Badge**.
   - **Google Student Ambassador 2026 (GID: 7908)**.
   - **Student Member of ISTE**.
   - **SimpliLearn Growth Hacking Certified**.
6. **Resume Viewer & Downloader Modal**:
   - Interactive zoomable preview of `myresume(old).jpg` (stored in `public/myresume(old).jpg`) with one-click download.
7. **Tactile Cyber Sound FX**:
   - Synthesized audio blips and celebration chimes via browser Web Audio API (with mute toggle in navbar).

---

## 📁 Project Structure

```
rudra-portfolio/
├── public/
│   ├── favicon.svg
│   └── myresume(old).jpg            <-- Your resume file (ready to replace anytime)
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── timeline.tsx         <-- Hyperiux Vault GSAP horizontal timeline
│   │   │   └── demo.tsx             <-- Standalone demo component
│   │   ├── icons.tsx                <-- Custom GitHub & LinkedIn SVG icons
│   │   ├── Navbar.tsx               <-- Cyber header with sound & resume trigger
│   │   ├── Hero.tsx                 <-- Headline, bio, avatar, interactive terminal
│   │   ├── EducationSection.tsx     <-- Polytechnic 9.46 CGPA & School details
│   │   ├── SkillsSection.tsx        <-- Programming, Webstack, Systems & Soft skills
│   │   ├── ProjectsSection.tsx      <-- Projects list with GitHub links
│   │   ├── ValorantRoastWidget.tsx  <-- Interactive live roast generator
│   │   ├── TimelineSection.tsx      <-- GSAP timeline roadmap wrapper
│   │   ├── InternshipsSection.tsx   <-- BharatCares & Microsoft SBTP 2026
│   │   ├── AchievementsSection.tsx  <-- Google Ambassador, Microsoft Badge, ISTE
│   │   ├── ContactSection.tsx       <-- Copy email, social handles & message form
│   │   ├── Footer.tsx               <-- Footer with back-to-top button
│   │   └── ResumeModal.tsx          <-- Zoomable resume modal & downloader
│   ├── data/
│   │   └── portfolioData.ts         <-- Central data file to edit text, links & photo
│   ├── utils/
│   │   └── sound.ts                 <-- Web Audio API synthesizer
│   ├── App.tsx                      <-- Main page composer
│   ├── index.css                    <-- Tailwind CSS v4 & theme variables
│   └── main.tsx                     <-- React entry point
└── package.json
```

---

## 🛠️ How to Customize

### 1. Changing Your Profile Picture
Open `src/data/portfolioData.ts` and update line 59:
```ts
avatarPlaceholder: "https://your-image-link-here.jpg",
```
Or place your image in `public/profile.jpg` and set `avatarPlaceholder: "/profile.jpg"`.

### 2. Updating Your Resume
Simply replace the file at:
```
public/myresume(old).jpg
```
with your updated resume image or PDF (ensure the file name matches or update `resumeFileName` in `src/data/portfolioData.ts`).

---

## 💻 Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Build for production deployment
npm run build
```
