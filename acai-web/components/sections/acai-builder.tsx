"use client";

import { useEffect, useMemo, useState } from "react";

type OptionItem = {
  label: string;
  price: number;
};

type BuilderOptions = {
  sizes: OptionItem[];
  fruits: OptionItem[];
  creams: OptionItem[];
  toppings: OptionItem[];
};

const WHATSAPP_NUMBER = "5581996089272";

export function AcaiBuilder() {
  const [options, setOptions] = useState<BuilderOptions | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [selectedSize, setSelectedSize] = useState<OptionItem | null>(null);
  const [selectedFruits, setSelectedFruits] = useState<string[]>([]);
  const [selectedCreams, setSelectedCreams] = useState<string[]>([]);
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);

  useEffect(() => {
    async function fetchOptions() {
      try {
        setLoading(true);

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/builder-options`
        );

        if (!response.ok) {
          throw new Error("Erro ao buscar opções do montador");
        }

        const data: BuilderOptions = await response.json();

        setOptions(data);
        setSelectedSize(data.sizes[1] ?? data.sizes[0] ?? null);
      } catch {
        setError("Não foi possível carregar o montador agora.");
      } finally {
        setLoading(false);
      }
    }

    fetchOptions();
  }, []);

  function toggleItem(
    item: string,
    selected: string[],
    setSelected: React.Dispatch<React.SetStateAction<string[]>>
  ) {
    if (selected.includes(item)) {
      setSelected(selected.filter((value) => value !== item));
      return;
    }

    setSelected([...selected, item]);
  }

  const total = useMemo(() => {
    if (!options || !selectedSize) return 0;

    const fruitsTotal = options.fruits
      .filter((item) => selectedFruits.includes(item.label))
      .reduce((sum, item) => sum + item.price, 0);

    const creamsTotal = options.creams
      .filter((item) => selectedCreams.includes(item.label))
      .reduce((sum, item) => sum + item.price, 0);

    const toppingsTotal = options.toppings
      .filter((item) => selectedToppings.includes(item.label))
      .reduce((sum, item) => sum + item.price, 0);

    return selectedSize.price + fruitsTotal + creamsTotal + toppingsTotal;
  }, [options, selectedSize, selectedFruits, selectedCreams, selectedToppings]);

  const whatsappMessage = useMemo(() => {
    const message =
      `Olá! Quero pedir um açaí.\n\n` +
      `Tamanho: ${selectedSize?.label ?? "Não selecionado"}\n` +
      `Frutas: ${selectedFruits.length ? selectedFruits.join(", ") : "Nenhuma"}\n` +
      `Cremes: ${selectedCreams.length ? selectedCreams.join(", ") : "Nenhum"}\n` +
      `Coberturas: ${
        selectedToppings.length ? selectedToppings.join(", ") : "Nenhuma"
      }\n` +
      `Total: R$ ${total.toFixed(2).replace(".", ",")}`;

    return encodeURIComponent(message);
  }, [selectedSize, selectedFruits, selectedCreams, selectedToppings, total]);

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  if (loading) {
    return (
      <section id="monte" className="bg-pink-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-lg text-[#240046]">Carregando montador...</p>
        </div>
      </section>
    );
  }

  if (error || !options || !selectedSize) {
    return (
      <section id="monte" className="bg-pink-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-lg text-red-600">
            {error || "Erro ao carregar montador."}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="monte" className="bg-pink-50 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <span className="mb-3 inline-block rounded-full bg-[#240046] px-4 py-2 text-sm font-medium text-white">
            Montador em tempo real
          </span>
          <h2 className="mb-4 text-3xl font-bold text-[#240046] md:text-5xl">
            Monte seu açaí do seu jeito
          </h2>
          <p className="text-lg text-black/70">
            Escolha o tamanho, adicione frutas, cremes e coberturas. O valor
            total atualiza automaticamente em tempo real.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="space-y-8 rounded-3xl bg-white p-6 shadow-xl">
            <div>
              <h3 className="mb-4 text-xl font-bold text-[#240046]">Tamanho</h3>
              <div className="grid gap-4 md:grid-cols-3">
                {options.sizes.map((size) => {
                  const active = selectedSize.label === size.label;

                  return (
                    <button
                      key={size.label}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`rounded-2xl border px-4 py-5 text-left transition ${
                        active
                          ? "border-pink-500 bg-pink-100 shadow-md"
                          : "border-black/10 bg-white hover:border-pink-300"
                      }`}
                    >
                      <p className="text-lg font-bold text-[#240046]">
                        {size.label}
                      </p>
                      <p className="text-black/70">
                        R$ {size.price.toFixed(2).replace(".", ",")}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            <OptionGroup
              title="Frutas"
              items={options.fruits}
              selectedItems={selectedFruits}
              onToggle={(item) =>
                toggleItem(item, selectedFruits, setSelectedFruits)
              }
            />

            <OptionGroup
              title="Cremes"
              items={options.creams}
              selectedItems={selectedCreams}
              onToggle={(item) =>
                toggleItem(item, selectedCreams, setSelectedCreams)
              }
            />

            <OptionGroup
              title="Coberturas"
              items={options.toppings}
              selectedItems={selectedToppings}
              onToggle={(item) =>
                toggleItem(item, selectedToppings, setSelectedToppings)
              }
            />
          </div>

          <aside className="h-fit rounded-3xl bg-[#240046] p-6 text-white shadow-2xl">
            <p className="mb-2 text-sm uppercase tracking-[0.2em] text-pink-200">
              Resumo do pedido
            </p>
            <h3 className="mb-6 text-2xl font-bold">Seu açaí</h3>

            <div className="space-y-4 text-sm">
              <SummaryLine label="Tamanho" value={selectedSize.label} />
              <SummaryLine
                label="Frutas"
                value={
                  selectedFruits.length ? selectedFruits.join(", ") : "Nenhuma"
                }
              />
              <SummaryLine
                label="Cremes"
                value={
                  selectedCreams.length ? selectedCreams.join(", ") : "Nenhum"
                }
              />
              <SummaryLine
                label="Coberturas"
                value={
                  selectedToppings.length
                    ? selectedToppings.join(", ")
                    : "Nenhuma"
                }
              />
            </div>

            <div className="my-6 h-px bg-white/15" />

            <div className="flex items-center justify-between">
              <span className="text-lg text-pink-100">Total</span>
              <span className="text-3xl font-extrabold">
                R$ {total.toFixed(2).replace(".", ",")}
              </span>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-pink-400 px-6 py-4 text-center font-bold text-black transition hover:bg-pink-300"
            >
              Pedir pelo WhatsApp
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}

function OptionGroup({
  title,
  items,
  selectedItems,
  onToggle,
}: {
  title: string;
  items: OptionItem[];
  selectedItems: string[];
  onToggle: (item: string) => void;
}) {
  return (
    <div>
      <h3 className="mb-4 text-xl font-bold text-[#240046]">{title}</h3>
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item) => {
          const active = selectedItems.includes(item.label);

          return (
            <button
              key={item.label}
              type="button"
              onClick={() => onToggle(item.label)}
              className={`rounded-2xl border px-4 py-4 text-left transition ${
                active
                  ? "border-pink-500 bg-pink-100 shadow-md"
                  : "border-black/10 bg-white hover:border-pink-300"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-semibold text-[#240046]">
                  {item.label}
                </span>
                <span className="text-sm text-black/70">
                  + R$ {item.price.toFixed(2).replace(".", ",")}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function SummaryLine({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="mb-1 text-pink-200">{label}</p>
      <p className="font-medium text-white">{value}</p>
    </div>
  );
}