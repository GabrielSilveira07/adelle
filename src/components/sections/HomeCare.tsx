import { homeCareSteps } from "@/content/site";
import FusedImage from "../ui/FusedImage";
import s from "./HomeCare.module.css";

export default function HomeCare() {
  return (
    <section className={s.section} id="home-care">
      <div className="wrap">
        <div className={`grid ${s.grid}`}>
          <div className={s.l}>
            <span className="lbl soft">Home care</span>
            <p className="big">O cuidado continua em casa.</p>
            <p className="sm soft">Cada protocolo sai da consulta com uma rotina prescrita, simples e possível de manter.</p>
          </div>
          <FusedImage src="/img/produto.jpg" alt="Tubo de creme sobre tecido branco" mask="lr-tb" position="50% 60%"
            className={s.photo} sizes="(max-width: 960px) 90vw, 34vw" />
          <div className={s.r}>
            {homeCareSteps.map((step) => (
              <div key={step.label}>
                <span className="lbl soft">{step.label}</span>
                <p className="sm">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
