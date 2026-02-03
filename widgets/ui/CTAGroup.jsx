import Button from "./Button";

export default function CTAGroup({ items = [], size = "mlg", className = "" }) {
  return (
    <div className={`mt-10 flex flex-col gap-3 sm:flex-row ${className}`}>
      {items.map(({ href, label, variant }) => (
        <Button key={href} variant={variant} size={size} asLink href={href}>
          {label}
        </Button>
      ))}
    </div>
  );
}
