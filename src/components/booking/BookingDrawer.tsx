"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { bookingSlots, site, treatments } from "@/content/site";
import s from "./BookingDrawer.module.css";

const WEEK = ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"];
const MONTH = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];

function nextWorkdays(count: number) {
  const days: Date[] = [];
  const d = new Date();
  while (days.length < count) {
    d.setDate(d.getDate() + 1);
    if (d.getDay() !== 0 && d.getDay() !== 6) days.push(new Date(d));
  }
  return days;
}

/* Disponibilidade de demonstração; substituir pela agenda real. */
const isTaken = (day: number, slot: number) => (day * 3 + slot * 5) % 7 === 0;

type Props = { isOpen: boolean; initialTreatment: string | null; openKey: number; onClose: () => void };

export default function BookingDrawer({ isOpen, initialTreatment, openKey, onClose }: Props) {
  const [treatment, setTreatment] = useState<string | null>(null);
  const [day, setDay] = useState(0);
  const [slot, setSlot] = useState<string | null>(null);
  const days = useMemo(() => nextWorkdays(6), []);
  const panel = useRef<HTMLElement>(null);
  const stepTwo = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    setTreatment(initialTreatment);
    setSlot(null);
    const t = setTimeout(() => panel.current?.querySelector<HTMLButtonElement>("button[data-focus]")?.focus({ preventScroll: true }), 450);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    addEventListener("keydown", onKey);
    return () => { clearTimeout(t); removeEventListener("keydown", onKey); };
  }, [isOpen, openKey, initialTreatment, onClose]);

  const pick = (name: string) => {
    setTreatment(name);
    setSlot(null);
    requestAnimationFrame(() => stepTwo.current?.scrollIntoView({ behavior: "smooth", block: "nearest" }));
  };

  const reset = () => { setTreatment(null); setSlot(null); };
  const date = days[day];

  return (
    <div className={`${s.root} ${isOpen ? s.open : ""}`} aria-hidden={!isOpen}>
      <div className={s.scrim} onClick={onClose} />
      <aside ref={panel} className={s.drawer} role="dialog" aria-modal="true" aria-labelledby="booking-title">
        <div className={s.head}>
          <span id="booking-title" className={s.mark}>{site.name.toUpperCase()}</span>
          <button type="button" className={s.close} onClick={onClose} aria-label="Fechar">×</button>
        </div>

        <div className={s.step}>
          <span className="lbl soft">Toque 1 de 2</span>
          <h3>Qual procedimento?</h3>
          <div>
            {treatments.map((t, i) => (
              <button key={t.name} type="button" className={s.opt} aria-pressed={treatment === t.name}
                data-focus={!initialTreatment && i === 0 ? "" : undefined} onClick={() => pick(t.name)}>
                <span className={s.optName}>{t.name}</span>
                <span className="lbl soft">{t.duration}</span>
              </button>
            ))}
          </div>
        </div>

        {treatment && (
          <div className={s.step} ref={stepTwo}>
            <span className="lbl soft">Toque 2 de 2</span>
            <h3>Escolha o horário</h3>
            <div className={s.days}>
              {days.map((d, i) => (
                <button key={d.toISOString()} type="button" className={s.day} aria-pressed={i === day}
                  data-focus={initialTreatment && i === day ? "" : undefined}
                  onClick={() => { setDay(i); setSlot(null); }}>
                  <span className="lbl">{WEEK[d.getDay()]}</span>
                  <b>{d.getDate()}</b>
                </button>
              ))}
            </div>
            <div className={s.slots}>
              {bookingSlots.map((t, j) => (
                <button key={t} type="button" className={s.slot} disabled={isTaken(day, j)} onClick={() => setSlot(t)}>
                  {t}
                </button>
              ))}
            </div>
          </div>
        )}

        {treatment && slot && (
          <div className={s.done} role="status">
            <span className="lbl soft">Pré-reserva feita</span>
            <h3>{`${treatment}, ${WEEK[date.getDay()]} ${date.getDate()} ${MONTH[date.getMonth()]}, ${slot}`}</h3>
            <p className="sm soft">A clínica confirma pelo WhatsApp em até uma hora. Nada foi enviado neste protótipo.</p>
            <button type="button" className="link" onClick={reset}>Recomeçar</button>
          </div>
        )}
      </aside>
    </div>
  );
}
