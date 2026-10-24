# Artwork and font provenance

The attached paintings, exhibition graphic, and portfolio moodboard were visual references only. They are not copied, traced, or distributed as site assets.

The smoke artwork was generated for this implementation using the built-in image generation tool and the imagegen skill. It depicts no real person or institution. No third-party painting is included. The source generated bitmap remains outside this repository; only optimized WebP derivatives are included:

- `public/art/renaissance-smoke.webp` — 1440 × 960, 58,076 bytes.
- `public/art/renaissance-smoke-small.webp` — 720 × 480, 16,494 bytes.

Derivatives were resized and encoded with Pillow, without carrying source metadata. The asset is a supporting background, not evidence of any project interface. There is no generated substitute portrait.

## Exact generation prompt

> Use case: stylized-concept. Asset type: original atmospheric background for an editorial personal CV website. Create a landscape 3:2 fine-art composition of wispy irregular smoke, like translucent veils of Renaissance oil paint suspended in darkness. One sweeping twisting plume rises from lower center-right toward upper right, with thin many-layered wisps dissolving. Subtle Duchess Green #42733D and gray-green smoke, with soft antique gold #D4AF6B and ivory light illuminating a few edges from above, amid a very deep near-black violet #100d16 background. Painterly chiaroscuro, dignified, restrained, delicate detail, organic turbulence, dark transparent-looking edges that blend into the background. Keep the left third almost empty and dark for text placement. The smoke is ethereal fine wisps, not solid sculptural objects or fluffy clouds. No people, no faces, no text, no logos, no stars, no particles, no orbs, no neon, no borders, no UI. Wide artwork only, not a website mockup.

## Approved portrait

`public/profile/profile.jpg` is the original user-provided 768×1136 photograph, copied byte-for-byte from the explicitly named source. It is not an AI-generated asset. No image generation, retouching, cropping of the source, recompression, color treatment, or metadata edits were performed. SHA-256 verification confirms the project copy matches the original. The CSS frame preserves its natural aspect ratio; borders and editorial details sit outside the image.

## Fonts

Self-hosted Cormorant Garamond (regular/italic), Inter, and IBM Plex Mono were downloaded from the Google Fonts font distribution. The four Latin WOFF2 files total 84,908 bytes. Their corresponding SIL Open Font License files are included in `public/fonts/`. No runtime Google Fonts request is necessary.

- [Cormorant Garamond license source](https://github.com/google/fonts/blob/main/ofl/cormorantgaramond/OFL.txt)
- [Inter license source](https://github.com/google/fonts/blob/main/ofl/inter/OFL.txt)
- [IBM Plex Mono license source](https://github.com/google/fonts/blob/main/ofl/ibmplexmono/OFL.txt)
