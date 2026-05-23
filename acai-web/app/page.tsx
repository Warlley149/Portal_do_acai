import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { AcaiBuilder } from "@/components/sections/acai-builder";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header />
      <Hero />

      <section id="cardapio" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-4 text-3xl font-bold text-[#240046]">
            Nosso cardápio
          </h2>
          <p className="max-w-2xl text-lg text-black/70">
            Em breve vamos cadastrar aqui os tamanhos, complementos, combos,
            promoções e categorias do seu açaí.
          </p>
        </div>
      </section>

      <AcaiBuilder />

      <section id="contato" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-4 text-3xl font-bold text-[#240046]">Contato</h2>
          <p className="max-w-2xl text-lg text-black/70">
            Aqui vamos colocar WhatsApp, Instagram, localização, horário de
            funcionamento e formas de pedido.
          </p>
        </div>
      </section>
    </main>
  );
}