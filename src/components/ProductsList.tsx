import { useSearchParams } from "react-router-dom";
import { Product, getProducts } from "../products";
import { useEffect, useState } from "react";

export function ProductsList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchParams] = useSearchParams();

  const id = searchParams.get("id");
  const name = searchParams.get("name");

  useEffect(() => {
    async function getData() {
      const data = await getProducts({ id, name });
      setProducts(data);
    }
    getData();
  }, [id, name]);

  return (
    <div className="w-full pt-10 gap-4">
      <div className="grid grid-cols-3 border-b border-zinc-500 pb-3">
        <span className="text-white font-semibold">ID</span>
        <span className="text-white font-semibold">Nome</span>
        <span className="text-white font-semibold">Preço</span>
      </div>

      {products?.map((product) => (
        <div key={product.id} className="grid grid-cols-3 mt-6">
          <span className="text-white font-semibold text-sm">{product.id}</span>
          <span className="text-white font-semibold text-sm">
            {product.name}
          </span>
          <span className="text-white font-semibold text-sm">
            {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>
      ))}
    </div>
  );
}
