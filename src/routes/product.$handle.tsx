import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { fetchProductByHandle, formatPrice } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";

export const Route = createFileRoute("/product/$handle")({
  head: () => ({
    meta: [
      { title: "Produkt – TäbyEl" },
      { name: "description", content: "Produktinformation från TäbyEls butik." },
      { property: "og:title", content: "Produkt – TäbyEl" },
      { property: "og:description", content: "Produktinformation från TäbyEls butik." },
    ],
  }),
  component: ProductPage,
});

function ProductPage() {
  const { handle } = Route.useParams();
  const { data: product, isLoading } = useQuery({ queryKey: ["product", handle], queryFn: () => fetchProductByHandle(handle) });
  const [variantIdx, setVariantIdx] = useState(0);
  const addItem = useCartStore((s) => s.addItem);
  const cartLoading = useCartStore((s) => s.isLoading);

  if (isLoading) return <Loader2 className="mx-auto my-24 h-8 w-8 animate-spin" />;
  if (!product)
    return (
      <div className="py-24 text-center">
        <p>Produkten hittades inte.</p>
        <Link to="/butik" className="mt-4 inline-block underline">Till butiken</Link>
      </div>
    );

  const p = product.node;
  const variants = p.variants.edges.map((e) => e.node);
  const variant = variants[variantIdx];
  const img = p.images.edges[0]?.node;

  const add = async () => {
    if (!variant) return;
    await addItem({ product, variantId: variant.id, variantTitle: variant.title, price: variant.price, quantity: 1, selectedOptions: variant.selectedOptions });
    toast.success("Tillagd i varukorgen", { position: "top-center" });
  };

  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2">
      <div className="aspect-square overflow-hidden rounded-2xl bg-muted">
        {img && <img src={img.url} alt={img.altText ?? p.title} className="h-full w-full object-cover" />}
      </div>
      <div>
        <h1 className="text-3xl font-bold">{p.title}</h1>
        {variant && <p className="mt-3 text-2xl font-semibold">{formatPrice(variant.price.amount, variant.price.currencyCode)}</p>}
        <p className="mt-6 whitespace-pre-line text-muted-foreground">{p.description}</p>
        {variants.length > 1 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {variants.map((v, i) => (
              <Button key={v.id} variant={i === variantIdx ? "default" : "outline"} size="sm" onClick={() => setVariantIdx(i)}>
                {v.title}
              </Button>
            ))}
          </div>
        )}
        <Button variant="spark" size="lg" className="mt-8 w-full" onClick={add} disabled={cartLoading || !variant?.availableForSale}>
          {cartLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : variant?.availableForSale ? "Lägg i varukorg" : "Slut i lager"}
        </Button>
      </div>
    </section>
  );
}
