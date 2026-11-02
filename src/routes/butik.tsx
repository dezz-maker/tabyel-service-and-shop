import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { fetchProducts } from "@/lib/shopify";

export const Route = createFileRoute("/butik")({
  head: () => ({
    meta: [
      { title: "Butik – TäbyEl" },
      { name: "description", content: "Köp smarta hem-paket och elprodukter från TäbyEl." },
      { property: "og:title", content: "Butik – TäbyEl" },
      { property: "og:description", content: "Elprodukter och smarta hem-paket online." },
    ],
  }),
  component: Shop,
});

function Shop() {
  const { data, isLoading, isError } = useQuery({ queryKey: ["products"], queryFn: () => fetchProducts(48) });
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="text-4xl font-bold">Butik</h1>
      <p className="mt-3 text-muted-foreground">Produkter – med eller utan installation.</p>
      <div className="mt-10">
        {isLoading ? (
          <Loader2 className="mx-auto h-8 w-8 animate-spin text-muted-foreground" />
        ) : isError || !data?.length ? (
          <p className="rounded-xl border border-dashed p-12 text-center text-muted-foreground">No products found</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.map((p) => <ProductCard key={p.node.id} product={p} />)}
          </div>
        )}
      </div>
    </section>
  );
}
