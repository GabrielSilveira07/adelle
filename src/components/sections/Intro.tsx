import SectionHead from "./SectionHead";
import s from "./Intro.module.css";

export default function Intro() {
  return (
    <section className={`sec ${s.intro}`} id="clinica">
      <div className="wrap">
        <div className="grid">
          <SectionHead left="A clínica" right="Desde a primeira consulta" />
          <p className={s.stmt}>
            Cuidamos da pele que você já tem. <em>Sem excessos, sem tendências de rosto, com tempo para entender cada pessoa.</em>
          </p>
          <p className={`sm soft ${s.c1}`}>
            Todo plano começa por uma consulta dermatológica. Histórico, rotina e objetivos definem o que faz sentido para você, e o plano é revisto a cada sessão.
          </p>
          <p className={`sm soft ${s.c2}`}>
            Usamos doses mínimas e técnicas atualizadas. Não vendemos pacotes fechados nem prometemos transformação.
          </p>
        </div>
      </div>
    </section>
  );
}
