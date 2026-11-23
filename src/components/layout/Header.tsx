import { site } from "@/content/site";
import s from "./Header.module.css";

export default function Header() {
  return (
    <header className={s.top}>
      <div className={`wrap grid ${s.row}`}>
        <a className={s.logo} href="#">{site.name.toUpperCase()}</a>
        <nav className={s.nav} aria-label="Principal">
          {site.nav.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <a className={s.contato} href="#agendar">contato</a>
      </div>
    </header>
  );
}
