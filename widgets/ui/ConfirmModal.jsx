// src/widgets/ui/ConfirmModal.jsx
"use client";

import { useState } from "react";
import Button from "./Button";

export default function ConfirmModal({
  trigger,
  title,
  message,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  formId, // ✅ preferred: submit a hidden form rendered by server
  confirmVariant = "secondary",
  confirmClassName = "text-red-600 hover:text-red-700 hover:bg-red-500/10",
}) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    try {
      setLoading(true);
      const form = formId ? document.getElementById(formId) : null;
      if (form) {
        // requestSubmit respects form validation & server actions
        form.requestSubmit ? form.requestSubmit() : form.submit();
      }
      setOpen(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Trigger */}
      <span onClick={() => setOpen(true)}>{trigger}</span>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-[var(--surface-0)] rounded-xl shadow-lg max-w-sm w-full p-6">
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
              {title}
            </h3>
            <p className="text-sm text-[var(--text-secondary)] mb-5">
              {message}
            </p>

            <div className="flex justify-end gap-3">
              <Button
                size="sm"
                variant="secondary"
                onClick={() => setOpen(false)}
                disabled={loading}
              >
                {cancelLabel}
              </Button>

              <Button
                size="sm"
                variant={confirmVariant}
                className={confirmClassName}
                onClick={handleConfirm}
                disabled={loading}
              >
                {loading ? "Working..." : confirmLabel}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
