"use client";

export default function Modal({ open, onClose, children }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className="relative z-10 w-[92%] max-w-md
                   rounded-2xl
                   bg-[var(--color-primary-50)]
                   border border-[var(--color-primary-200)]
                   shadow-[var(--shadow-lg)]
                   p-6 sm:p-8"
      >
        {children}
      </div>
    </div>
  );
}
