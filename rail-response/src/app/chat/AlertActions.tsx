// chat/AlertActions.tsx
export default function AlertActions() {
    return (
      <div className="flex flex-wrap gap-2 mt-4">
        <button className="bg-gray-300 px-4 py-1 rounded-full text-sm">Não solucionado</button>
        <button className="bg-purple-300 px-4 py-1 rounded-full text-sm">Resolvido!</button>
        <button className="bg-purple-100 px-4 py-1 rounded-full text-sm">Resolução em andamento</button>
      </div>
    );
  }
  