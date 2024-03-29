import { Filters } from "../components/Filters";
import { ProductsList } from "../components/ProductsList";

export default function Products() {
  return (
    <div className="min-h-screen bg-zinc-700 md:px-2 px-4">
      <div className="max-w-screen-md mx-auto space-y-4 pt-10">
        <Filters />
        <ProductsList />
      </div>
    </div>
  );
}
