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

## Architecture
- Prerender `/` statically via `tanstackStart.prerender` (`autoStaticPathsDiscovery: false`) in `vite.config.ts` so the single-page landing site outputs static `index.html` at build time while keeping the TanStack Start project bootstrap.
- GitHub Pages uploads only `dist/client`, with the build and router base path derived from Pages configuration; this supports both account and project sites without exposing server bundles.
- Keep the small brand logo self-contained as a data URL in its source module and prefix public favicon paths with `BASE_URL`; external static hosts do not implement Lovable's asset proxy.
