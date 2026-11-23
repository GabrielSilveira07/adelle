"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import BookingDrawer from "./BookingDrawer";

type BookingContextValue = { open: (treatment?: string) => void };

const BookingContext = createContext<BookingContextValue | null>(null);

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking precisa estar dentro de <BookingProvider>");
  return ctx;
}

export default function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initial, setInitial] = useState<string | null>(null);
  const [openCount, setOpenCount] = useState(0);

  const open = useCallback((treatment?: string) => {
    setInitial(treatment ?? null);
    setOpenCount((n) => n + 1);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  return (
    <BookingContext.Provider value={{ open }}>
      {children}
      <BookingDrawer isOpen={isOpen} initialTreatment={initial} openKey={openCount} onClose={close} />
    </BookingContext.Provider>
  );
}
