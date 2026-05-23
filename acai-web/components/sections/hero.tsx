export function Hero() {
  return (
    <section
      id="inicio"
      className="bg-gradient-to-br from-[#240046] via-[#5a189a] to-[#9d4edd] px-6 py-20 text-white"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
        <div>
          <span className="mb-4 inline-block rounded-full bg-pink-400/20 px-4 py-2 text-sm font-medium text-pink-100">
            Açaí artesanal com sabor de verdade
          </span>

          <h2 className="mb-6 text-4xl font-extrabold leading-tight md:text-6xl">
            O açaí perfeito para matar a vontade e conquistar clientes.
          </h2>

          <p className="mb-8 max-w-xl text-lg text-white/80">
            Cardápio atrativo, combos especiais e em breve um montador de açaí
            em tempo real para o cliente personalizar tudo do jeito que quiser.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#monte"
              className="rounded-full bg-pink-400 px-6 py-3 font-semibold text-black transition hover:bg-pink-300"
            >
              Montar meu açaí
            </a>

            <a
              href="#contato"
              className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Pedir pelo WhatsApp
            </a>
          </div>
        </div>

        <div className="rounded-3xl bg-white/10 p-8 shadow-2xl backdrop-blur-sm">
          <div className="rounded-3xl bg-white p-6 text-[#240046]">
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-pink-500">
              Destaque
            </p>
            <h3 className="mb-4 text-2xl font-bold">
              Monte seu açaí em tempo real
            </h3>
            <p className="mb-6 text-base text-black/70">
              Escolha tamanho, adicionais, frutas, cremes e coberturas com preço
              atualizando automaticamente.
            </p>

            <div className="space-y-3">
              <div className="flex items-center justify-between rounded-xl bg-pink-50 px-4 py-3">
                <span>Tamanho 500ml</span>
                <span className="font-bold">R$ 14,90</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-pink-50 px-4 py-3">
                <span>Morango + Leite Ninho</span>
                <span className="font-bold">+ R$ 5,00</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-pink-100 px-4 py-3 text-lg font-bold">
                <span>Total</span>
                <span>R$ 19,90</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}