import FusedImage from "../ui/FusedImage";
import s from "./Filosofia.module.css";

export default function Filosofia() {
  return (
    <section className={s.section} id="filosofia">
      <div className="wrap">
        <div className={`grid ${s.grid}`}>
          <div className={s.l}>
            <span className="lbl soft">Filosofia</span>
            <p className={s.quote}>O melhor resultado é aquele que ninguém consegue apontar.</p>
          </div>
          <FusedImage src="/img/retrato.jpg" alt="Perfil de mulher de cabelo loiro curto, olhos fechados, suéter preto"
            mask="edge-b" position="50% 0%" className={s.photo} sizes="(max-width: 960px) 100vw, 55vw" />
          <div className={s.r}>
            <span className="lbl soft">Princípio</span>
            <p className="sm soft">Só se percebe que você está bem. A técnica fica invisível.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
