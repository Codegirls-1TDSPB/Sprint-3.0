'use client';

interface AlertActionsProps {
  onSelect: (acao: string) => void;
  acaoSelecionada: string | null;
}

export default function AlertActions({ onSelect, acaoSelecionada }: AlertActionsProps) {
  const acoes = [
    { nome: 'Não solucionado', cor: 'bg-gray-300' },
    { nome: 'Resolvido!', cor: 'bg-purple-300' },
    { nome: 'Resolução em andamento', cor: 'bg-purple-100' },
  ];

  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {acoes.map(({ nome, cor }) => (
        <button
          key={nome}
          onClick={() => onSelect(nome)}
          className={`px-4 py-1 rounded-full text-sm transition-all ${
            acaoSelecionada === nome ? 'ring-2 ring-purple-500 font-semibold' : ''
          } ${cor}`}
        >
          {nome}
        </button>
      ))}
    </div>
  );
}