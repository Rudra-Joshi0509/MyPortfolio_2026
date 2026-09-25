import { useState } from "react";
import { X, Download, FileText, ExternalLink, ZoomIn, ZoomOut } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { playCyberClick } from "@/utils/sound";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [zoomLevel, setZoomLevel] = useState(1);

  if (!isOpen) return null;

  const handleZoomIn = () => {
    playCyberClick();
    setZoomLevel((prev) => Math.min(prev + 0.25, 2));
  };

  const handleZoomOut = () => {
    playCyberClick();
    setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xl transition-all">
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl border border-white/[0.1] bg-[#090d16] shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-slate-900/60">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-indigo-500/15 text-indigo-300 border border-indigo-500/25">
              <FileText className="size-5 text-sky-400" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                Rudra Joshi — Official Resume
                <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/25">
                  {PORTFOLIO_DATA.profile.resumeFileName}
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Diploma CE | AI Practitioner | Game &amp; Systems Explorer
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleZoomOut}
              className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 transition-colors"
              title="Zoom Out"
            >
              <ZoomOut className="size-4" />
            </button>
            <button
              onClick={handleZoomIn}
              className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 transition-colors"
              title="Zoom In"
            >
              <ZoomIn className="size-4" />
            </button>
            <a
              href={PORTFOLIO_DATA.profile.resumeUrl}
              download={PORTFOLIO_DATA.profile.resumeFileName}
              onClick={() => playCyberClick()}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-indigo-500 to-sky-500 hover:from-indigo-400 hover:to-sky-400 text-white text-xs font-semibold shadow-md transition-all"
            >
              <Download className="size-3.5" />
              Download JPG
            </a>
            <button
              onClick={() => {
                playCyberClick();
                onClose();
              }}
              className="p-2 rounded-xl bg-white/[0.04] hover:bg-red-500/20 text-slate-400 hover:text-red-400 transition-colors"
              title="Close Modal"
            >
              <X className="size-5" />
            </button>
          </div>
        </div>

        {/* Modal Body / Image Viewer */}
        <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-[#070912] min-h-[300px]">
          <div
            className="transition-transform duration-200 shadow-2xl rounded-xl overflow-hidden border border-white/10"
            style={{ transform: `scale(${zoomLevel})` }}
          >
            <img
              src={PORTFOLIO_DATA.profile.resumeUrl}
              alt="Rudra Joshi Resume Preview"
              className="max-h-[68vh] w-auto object-contain rounded-md"
            />
          </div>
        </div>

        {/* Modal Footer Note */}
        <div className="px-6 py-3 border-t border-white/[0.08] bg-slate-900/60 flex items-center justify-between text-xs text-slate-400">
          <span>
            File reference: <code className="text-indigo-300">{PORTFOLIO_DATA.profile.resumeFileName}</code>
          </span>
          <a
            href={PORTFOLIO_DATA.profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sky-400 hover:underline"
          >
            Open Original File <ExternalLink className="size-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
