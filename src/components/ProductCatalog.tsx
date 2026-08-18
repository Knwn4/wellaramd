import { getCatalog } from "@/lib/catalog";
import ProductGrid from "./ProductGrid";

export default async function ProductCatalog() {
  const { treatments } = await getCatalog();
  return <ProductGrid treatments={treatments} />;
}
