import BookingProvider from "@/components/booking/BookingProvider";
import BookingFab from "@/components/layout/BookingFab";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Agendar from "@/components/sections/Agendar";
import Espaco from "@/components/sections/Espaco";
import Filosofia from "@/components/sections/Filosofia";
import Hero from "@/components/sections/Hero";
import HomeCare from "@/components/sections/HomeCare";
import Intro from "@/components/sections/Intro";
import Ritual from "@/components/sections/Ritual";
import Tratamentos from "@/components/sections/Tratamentos";
import Fuse from "@/components/ui/Fuse";

export default function Home() {
  return (
    <BookingProvider>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Fuse from="var(--branco)" to="var(--nude)" />
        <Filosofia />
        <Fuse from="var(--nude)" to="var(--onix)" />
        <Ritual />
        <Tratamentos />
        <Fuse from="var(--onix)" to="var(--linho)" />
        <HomeCare />
        <Espaco />
        <Agendar />
      </main>
      <Footer />
      <BookingFab />
    </BookingProvider>
  );
}
