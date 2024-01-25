import { Input } from "./components/Input";

export function App() {
  return (
    <div className="min-h-screen bg-zinc-700">
      <div className="max-w-screen-md mx-auto space-y-4 pt-10">
        <div className="w-full">
          <span className="text-white text-2xl">Filtros</span>
        </div>
        <div className="flex items-end gap-4 pt-4 border-b border-zinc-500 pb-6">
          <Input.Root>
            <Input.Label htmlFor="id">ID</Input.Label>
            <Input.Control id="id" />
          </Input.Root>
          <Input.Root>
            <Input.Label htmlFor="name">Nome</Input.Label>
            <Input.Control id="name" />
          </Input.Root>
          <Input.Root>
            <Input.Label htmlFor="price">Preço</Input.Label>
            <Input.Control id="price" />
          </Input.Root>
          <button className="text-white bg-green-500 px-2 py-1 rounded-lg shadow-md font-semibold">
            Filtrar
          </button>
        </div>
        <div className="w-full pt-10 gap-4">
          <div className="grid grid-cols-3 border-b border-zinc-500 pb-3">
            <span className="text-white font-semibold">ID</span>
            <span className="text-white font-semibold">Nome</span>
            <span className="text-white font-semibold">Preço</span>
          </div>

          <div className="grid grid-cols-3 mt-6">
            <span className="text-white font-semibold text-sm">123</span>
            <span className="text-white font-semibold text-sm">Produto</span>
            <span className="text-white font-semibold text-sm">R$ 100,00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
