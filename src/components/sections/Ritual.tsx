import FusedImage from "../ui/FusedImage";
import s from "./Overlay.module.css";

export default function Ritual() {
  return (
    <section className={`on-dark ${s.section} ${s.dark}`}>
      <FusedImage src="/img/ritual.jpg" alt="Mãos aplicando gotas de sérum" mask="long" position="60% 50%"
        className={s.photoRitual} sizes="100vw" />
      <div className={s.over}>
        <div className="wrap grid">
          <div className={s.copy}>
            <span className="lbl soft">O ritual</span>
            <h2>Ativos escolhidos para cada pele, aplicados à mão.</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
