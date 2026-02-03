function Dot({ active, onClick, label }) {
  return (
    <button
      aria-label={`Slide ${label}`}
      onClick={onClick}
      className={`h-2.5 w-2.5 rounded-full ${
        active ? "bg-[var(--brand-600)]" : "bg-[var(--tile-icon-bg)]"
      }`}
    />
  );
}

export default Dot;
