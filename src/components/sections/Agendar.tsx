import OpenBooking from "../booking/OpenBooking";
import SectionHead from "./SectionHead";
import s from "./Agendar.module.css";

export default function Agendar() {
  return (
    <section className="sec" id="agendar">
      <div className="wrap">
        <div className={`grid ${s.grid}`}>
          <SectionHead left="Agendamento" right="Dois toques" />
          <h2 className={s.title}>Agende sua <em>avaliação.</em></h2>
          <div className={s.r}>
            <p className="sm soft">Escolha o procedimento e o horário. A confirmação chega pelo WhatsApp da clínica.</p>
            <OpenBooking>Abrir agenda</OpenBooking>
          </div>
        </div>
      </div>
    </section>
  );
}
