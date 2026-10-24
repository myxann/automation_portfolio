type Props = {
  number: string;
  label: string;
  children: React.ReactNode;
  light?: boolean;
};

export default function SectionHeading({
  number,
  label,
  children,
  light = false,
}: Props) {
  return (
    <div className={`section-heading${light ? " section-heading--light" : ""}`}>
      <p className="eyebrow">
        <span>{number}</span>
        <span className="small-rule" />
        {label}
      </p>
      <h2>{children}</h2>
    </div>
  );
}
