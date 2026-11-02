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
- Company FAQ answers are shared through one data module and a reusable section across the FAQ, About and Contact pages. Why: company information stays consistent when answers change.
- Service image mappings live in a shared browser-safe module for overview cards and detail pages, with card overrides when needed. Why: service photography remains consistent without duplicate imports.
- Mobile overflow navigation uses native details/summary disclosure rather than Radix DropdownMenu. Why: avoid the preview's split React dispatcher crash when newly optimized dropdown dependencies load.
- Editorial articles live in one browser-safe data module with separate overview and unnested detail routes. Why: keep article content, sources, service links and per-article metadata consistent.
