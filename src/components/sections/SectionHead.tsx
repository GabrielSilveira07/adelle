type Props = { left: string; right: string };

export default function SectionHead({ left, right }: Props) {
  return (
    <div className="head">
      <span className="lbl soft">{left}</span>
      <span className="lbl soft">{right}</span>
    </div>
  );
}
