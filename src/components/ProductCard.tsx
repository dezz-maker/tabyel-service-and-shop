import { Link } from "@tanstack/react-router";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { formatPrice, type ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";

export function ProductCard({ product }: { product: ShopifyProduct }) {
  const addItem = useCartStore((s) => s.addItem);
  const isLoading = useCartStore((s) => s.isLoading);
  const p = product.node;
  const variant = p.variants.edges[0]?.node;
  const img = p.images.edges[0]?.node;

  const add = async () => {
    if (!variant) return;
    await addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    });
    toast.success("Tillagd i varukorgen", { position: "top-center" });
  };

  return (
    <div className="flex flex-col overflow-hidden rounded-xl border bg-card shadow-card">
      <Link to="/product/$handle" params={{ handle: p.handle }} className="aspect-square bg-muted">
        {img && <img src={img.url} alt={img.altText ?? p.title} loading="lazy" className="h-full w-full object-cover" />}
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <Link to="/product/$handle" params={{ handle: p.handle }} className="font-display font-semibold hover:underline">
          {p.title}
        </Link>
        <p className="line-clamp-2 text-sm text-muted-foreground">{p.description}</p>
        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="font-bold">{formatPrice(p.priceRange.minVariantPrice.amount, p.priceRange.minVariantPrice.currencyCode)}</span>
          <Button size="sm" onClick={add} disabled={isLoading || !variant?.availableForSale}>
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Lägg i varukorg"}
          </Button>
        </div>
      </div>
    </div>
  );
}
