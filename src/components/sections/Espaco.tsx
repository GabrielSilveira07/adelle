import FusedImage from "../ui/FusedImage";
import s from "./Overlay.module.css";

export default function Espaco() {
  return (
    <section className={`${s.section} ${s.light}`} id="espaco">
      <FusedImage src="/img/espaco.jpg" alt="Ambiente com piscina, plantas e poltrona de madeira" mask="long" position="50% 70%"
        className={s.photoEspaco} sizes="100vw" />
      <div className={s.over} style={{ bottom: "10%" }}>
        <div className="wrap grid">
          <div className={s.copy}>
            <span className="lbl soft">O espaço</span>
            <h2>Poucas salas e nenhuma sala de espera cheia.</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
