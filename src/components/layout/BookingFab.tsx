import OpenBooking from "../booking/OpenBooking";
import s from "./BookingFab.module.css";

export default function BookingFab() {
  return <OpenBooking className={`link ${s.fab}`}>Agendar</OpenBooking>;
}
