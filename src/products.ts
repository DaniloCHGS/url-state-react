export interface Product {
  id: string;
  name: string;
  price: number;
}

interface FilterProduct {
  id: string | null;
  name: string | null;
}

export async function getProducts({ id, name }: FilterProduct) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  let products: Product[] = [
    { id: "1", name: "Produto A", price: 19.99 },
    { id: "2", name: "Produto B", price: 29.99 },
    { id: "3", name: "Produto C", price: 14.99 },
    { id: "4", name: "Produto D", price: 24.99 },
    { id: "5", name: "Produto E", price: 39.99 },
    { id: "6", name: "Produto F", price: 9.99 },
    { id: "7", name: "Produto G", price: 49.99 },
    { id: "8", name: "Produto H", price: 34.99 },
    { id: "9", name: "Produto I", price: 19.99 },
    { id: "10", name: "Produto J", price: 59.99 },
  ];

  if (id && name) {
    products = products.filter(
      (product) =>
        product.id.includes(id) ||
        product.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
    );
  }

  if (id && !name) {
    products = products.filter((product) => product.id.includes(id));
  }

  if (name && !id) {
    products = products.filter((product) =>
      product.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
    );
  }

  return products;
}
