# CIDP peripheral nerve and blood atlas: manuscript companion

Companion repository for our manuscript *"Schwann cells in chronic inflammatory neuropathy are reprogrammed, not lost, within a nerve niche remodelled by macrophages"* (in preparation).

Yizhou Yu, Daniel B. Rainbow, Zoya G. Georgieva (joint first authors), Lorenz Kretschmer, Nadav Yayon, Shani Perera, Ken To, Rakesh Kapuge, Hansheng Xue, Anna Wilbrey-Clark, Krzysztof Polanski, Alexis Joannides, Mayen Briggs, David K. Menon, David A. Hilton, Nushan Gunawardana, Joanne L. Jones and Sarah A. Teichmann (joint senior authors).

## Contents

| File | What it is |
|------|-----------|
| `index.html` | Interactive walkthrough of the findings with the numbers behind each figure: nerve atlas and spatial niches, myelin segmentation and the Schwann cell repair state, inflammation in nerve, and the blood atlas. Self-contained (no build step, no external JS). |
| `summary.jpg`, `summary.pdf` | Summary schematic. |
| `xenium.jpg`, `umap_to_spatial.*` | Xenium nerve image and the UMAP-to-spatial animation used on the site. |
| `YY_TeichLab_poster_Sept2026.pdf` | Earlier poster version of this work (September 2026). Some poster findings (JUN/EGR1 in Schwann cells, SLC2A1 loss in the perineurium) did not replicate in the validation cohort and are not part of the manuscript. |
| `poster_qr*.png/pdf` | QR codes printed on the poster (they point to the poster site). |

T cell receptor analyses (TCRfish) and the GWAS variant mapping (alphagenome2niche) will be reported separately and are not included here.

## Viewing the site

Open `index.html` in a browser, or serve locally:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

To publish with GitHub Pages: **Settings → Pages → Deploy from a branch → `main`, `/ (root)`**. The site will then be at https://izu0421.github.io/pin/.

Preprint and data DOIs will be added on publication.
