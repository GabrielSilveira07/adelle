"use client";

import type { ReactNode } from "react";
import { useBooking } from "./BookingProvider";

type Props = { children: ReactNode; className?: string; treatment?: string };

/* Botão que abre o painel de agendamento, opcionalmente com um tratamento já escolhido. */
export default function OpenBooking({ children, className = "link", treatment }: Props) {
  const { open } = useBooking();
  return (
    <button type="button" className={className} onClick={() => open(treatment)}>
      {children}
    </button>
  );
}
