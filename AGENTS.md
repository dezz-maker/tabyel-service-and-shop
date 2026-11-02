<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Shopify storefront: products/cart come only from the Shopify Storefront API (src/lib/shopify.ts) with a Zustand cart; checkout always via cartCreate checkoutUrl. Why: real checkout, no mock products.
- Booking and quote requests are stored in the `service_requests` table via a server function using the admin client; no public access. Why: every lead must reach the owner.
