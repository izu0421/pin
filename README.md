# CIDP peripheral blood atlas — poster + interactive extension

Companion repository for the Teichmann Lab poster *"Peripheral blood single-cell and proteomic profiling reveals coordinated effector lymphocyte egress and myeloid activation in CIDP"* (September 2026).

## Contents

| File | What it is |
|------|-----------|
| `index.html` | Interactive extension of the printed poster. Tabbed walkthrough of the findings with the underlying numbers behind each figure. Self-contained (no build step, no external JS). |
| `YY_TeichLab_poster_Sept2026.pdf` | The printed poster (PDF). |
| `report_cidp_nature.md` | Full manuscript-style report of the analysis. |
| `poster_qr.png` | QR code linking to the live site (square, high-contrast — best for print). |
| `poster_qr_rounded.png` | Same QR code with rounded modules (softer aesthetic). |

## Enabling GitHub Pages

The interactive site is designed to be served from GitHub Pages at:

**https://izu0421.github.io/teichlab_poster/**

To enable it after pushing:

1. Go to **Settings → Pages** on the GitHub repository.
2. Under **Source**, select **Deploy from a branch**.
3. Choose branch **`main`**, folder **`/ (root)`**, and click **Save**.
4. Wait ~1 minute; the site will be live at the URL above.

The QR codes in this repo already point to that URL.

## Local preview

Just open `index.html` in a browser — no server needed.

Or serve locally:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## QR code details

- Content: `https://izu0421.github.io/teichlab_poster/`
- Error correction: High (H) — remains scannable even if ~30% of the code is obscured
- Recommended print size: **≥ 3 cm × 3 cm** on the poster for reliable scanning from ~30 cm.
