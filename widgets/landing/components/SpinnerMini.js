function SpinnerMini() {
  return (
    <div
      role="status"
      aria-busy="true"
      aria-label="Loading"
      className="
        inline-block
        w-4 h-4
        rounded-full
        border-2
        border-slate-200
        border-t-blue-600
        animate-spin
      "
    />
  );
}

export default SpinnerMini;
