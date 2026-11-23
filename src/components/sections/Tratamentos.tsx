import { treatments } from "@/content/site";
import OpenBooking from "../booking/OpenBooking";
import SectionHead from "./SectionHead";
import s from "./Tratamentos.module.css";

export default function Tratamentos() {
  return (
    <section className={`sec on-dark ${s.section}`} id="tratamentos">
      <div className="wrap">
        <div className="grid">
          <SectionHead left="Tratamentos" right="Toque para agendar" />
          <div className={s.rows}>
            {treatments.map((t) => (
              <OpenBooking key={t.name} treatment={t.name} className={s.row}>
                <h3>{t.name}</h3>
                <span className="sm">{t.summary}</span>
                <span className="lbl">{t.duration}</span>
                <span className={s.go} aria-hidden="true" />
              </OpenBooking>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
