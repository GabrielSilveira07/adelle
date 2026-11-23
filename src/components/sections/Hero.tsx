import { site } from "@/content/site";
import FusedImage from "../ui/FusedImage";
import OpenBooking from "../booking/OpenBooking";
import s from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={s.hero}>
      <FusedImage src="/img/hero.jpg" alt="Retrato de mulher com a mão no rosto, sobre fundo branco"
        mask="b" priority position="56% 0%" className={s.photo} sizes="(max-width: 960px) 100vw, 70vw" />
      <div className={`wrap ${s.inner}`}>
        <div className={`grid ${s.grid}`}>
          <div className={s.brand}>
            <h1>{site.name.toUpperCase()}</h1>
            <p>{site.tagline}</p>
          </div>
          <div className={s.aside}>
            <p className="sm soft">{site.description}</p>
            <OpenBooking>Agendar avaliação</OpenBooking>
          </div>
        </div>
      </div>
      <div className={s.facts}>
        <div className="wrap grid lbl">
          {site.heroFacts.map((f) => <span key={f}>{f}</span>)}
        </div>
      </div>
    </section>
  );
}
