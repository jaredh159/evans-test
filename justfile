_default:
  @just --choose

dev-en:
  @NEXT_PUBLIC_LANG=en pnpm next dev --port 3555

dev-es:
  @NEXT_PUBLIC_LANG=es pnpm next dev --port 4555

build-en:
  @NEXT_PUBLIC_LANG=en pnpm next build

build-es:
  @NEXT_PUBLIC_LANG=es pnpm next build

