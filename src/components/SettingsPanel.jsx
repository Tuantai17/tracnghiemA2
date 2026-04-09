import { useEffect, useRef, useState } from "react";

const OPTIONS = [
  {
    id: "ribbon",
    label: "3D ribbon",
    description: "Tilt card + highlight ribbon theo vi tri chuot.",
  },
  {
    id: "tubes",
    label: "Tubes cursor",
    description: "Con tro dang ong phat sang theo chuyen dong chuot.",
  },
];

const SettingsPanel = ({ mode, onChangeMode }) => {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    const handlePointerDown = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  return (
    <div ref={panelRef} className="fixed bottom-5 right-5 z-[70]">
      <button
        type="button"
        aria-label="Open settings"
        onClick={() => setOpen((value) => !value)}
        className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-[#0f1b2e]/90 text-zinc-100 shadow-[0_18px_38px_rgba(5,14,26,0.52)] backdrop-blur-sm transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-teal-200/55 hover:bg-[#15243d] active:scale-[0.97]"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 stroke-current" strokeWidth="1.8">
          <path d="M12 4.75v2.5" />
          <path d="M12 16.75v2.5" />
          <path d="M19.25 12h-2.5" />
          <path d="M7.25 12h-2.5" />
          <path d="m17.13 6.87-1.77 1.77" />
          <path d="m8.64 15.36-1.77 1.77" />
          <path d="m17.13 17.13-1.77-1.77" />
          <path d="m8.64 8.64-1.77-1.77" />
          <circle cx="12" cy="12" r="3.25" />
        </svg>
      </button>

      {open && (
        <section className="mt-3 w-[min(92vw,360px)] rounded-3xl border border-white/20 bg-[#111d32]/95 p-4 text-zinc-100 shadow-[0_26px_70px_rgba(4,13,26,0.62)] backdrop-blur-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-300">Settings</p>
          <h3 className="mt-2 text-lg font-semibold tracking-tight">Interaction mode</h3>
          <p className="mt-1 text-sm text-zinc-400">Chon hieu ung chuot cho khu vuc card.</p>

          <div className="mt-4 space-y-2">
            {OPTIONS.map((option) => {
              const isActive = option.id === mode;
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => onChangeMode(option.id)}
                  className={`w-full rounded-2xl border px-3 py-3 text-left transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                    isActive
                      ? "border-teal-300/60 bg-teal-300/12"
                      : "border-white/15 bg-white/5 hover:border-white/35 hover:bg-white/10"
                  }`}
                >
                  <p className="text-sm font-semibold">{option.label}</p>
                  <p className="mt-0.5 text-xs text-zinc-400">{option.description}</p>
                </button>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
};

export default SettingsPanel;
