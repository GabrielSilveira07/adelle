import s from "./Fuse.module.css";

type Props = { from: string; to: string };

/* Transição de cor entre seções, com curva suave (em oklab) em vez de corte seco. */
export default function Fuse({ from, to }: Props) {
  return <div className={s.fuse} style={{ "--a": from, "--b": to } as React.CSSProperties} aria-hidden="true" />;
}
