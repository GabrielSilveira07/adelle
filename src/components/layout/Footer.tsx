import s from "./Footer.module.css";

const notes = [
  { label: "Projeto", text: "Conceito de identidade e landing page" },
  { label: "Fotografia", text: "Unsplash, como referência" },
  { label: "Tipografia", text: "Italiana e Inter Tight" },
  { label: "Atendimento", text: "Somente com hora marcada" },
];

export default function Footer() {
  return (
    <footer className={s.foot}>
      <div className="wrap">
        <div className={`grid ${s.grid}`}>
          {notes.map((n) => (
            <div key={n.label}><span className="lbl soft">{n.label}</span><span className="sm">{n.text}</span></div>
          ))}
        </div>
      </div>
    </footer>
  );
}
