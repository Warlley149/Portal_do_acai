export function Header() {
  return (
    <header className="w-full border-b border-white/10 bg-[#240046] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-xl font-bold tracking-wide">Açaí da Família</h1>
          <p className="text-sm text-white/70">
            CAMARAGIBE • PE
          </p>
        </div>

        <nav className="hidden gap-6 md:flex">
          <a href="#inicio" className="text-sm hover:text-pink-300">
            Início
          </a>
          <a href="#cardapio" className="text-sm hover:text-pink-300">
            Cardápio
          </a>
          <a href="#monte" className="text-sm hover:text-pink-300">
            Monte seu açaí
          </a>
          <a href="#contato" className="text-sm hover:text-pink-300">
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}