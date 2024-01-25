import { FormEvent, useEffect, useState } from "react";
import { Input } from "./Input";
import { useSearchParams } from "react-router-dom";

export function Filters() {
  const [id, setId] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const idParam = searchParams.get("id");
    const nameParam = searchParams.get("name");

    if (idParam) {
      setId(idParam);
    }

    if (nameParam) {
      setName(nameParam);
    }
  }, [searchParams]);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    setIsLoading((state) => !state);

    setSearchParams((state) => {
      if (id) {
        state.set("id", id);
      } else {
        state.delete("id");
      }
      return state;
    });

    setSearchParams((state) => {
      if (name) {
        state.set("name", name);
      } else {
        state.delete("name");
      }
      return state;
    });

    setIsLoading((state) => !state);
  }
  return (
    <>
      <div className="w-full">
        <span className="text-white text-2xl">Filtros</span>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex md:flex-row flex-col items-end gap-4 pt-4 border-b border-zinc-500 pb-6"
      >
        <Input.Root>
          <Input.Label htmlFor="id">ID</Input.Label>
          <Input.Control
            id="id"
            value={id}
            type="tel"
            onChange={(event) => setId(event.target.value)}
          />
        </Input.Root>
        <Input.Root>
          <Input.Label htmlFor="name">Nome</Input.Label>
          <Input.Control
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Input.Root>
        <button
          disabled={isLoading}
          type="submit"
          className="enabled:text-white enabled:bg-green-500 px-3 py-1 rounded-lg shadow-md font-semibold enabled:hover:brightness-90 transition enabled:cursor-pointer cursor-not-allowed bg-green-800 text-zinc-400"
        >
          Filtrar
        </button>
      </form>
    </>
  );
}
