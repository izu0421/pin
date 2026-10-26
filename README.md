# CIDP peripheral nerve, blood and genetics: manuscript companion

Companion site for our manuscript *"Niches of the peripheral nerve in health and inflammatory neuropathy"* (in
preparation), served at [nervecellatlas.org](https://nervecellatlas.org).

Yizhou Yu, Daniel B. Rainbow, Zoya G. Georgieva (joint first authors), Lorenz Kretschmer, Nadav Yayon, Shani Perera,
Ken To, Rakesh Kapuge, Hansheng Xue, Anna Wilbrey-Clark, Krzysztof Polanski, Alexis Joannides, Aaditya Prabhu,
Rhys Roberts, Mayen Briggs, David K. Menon, David A. Hilton, Nushan Gunawardana, Joanne L. Jones and
Sarah A. Teichmann (joint senior authors).

## The study in one line

CIDP leaves the nerve's structure intact and changes what its cells do. Across nerve, blood and genetics, the
findings concern cell state and movement, not tissue destruction.

| Arm | Data | Main finding |
|---|---|---|
| Nerve | Xenium in situ RNA + 27 proteins; 273,027 cells, 34 sections, 19 donors (11 CIDP, 8 control); snRNA-seq validation | spatial organisation and cell numbers preserved; every compartment loses its identity programme |
| Vessels and macrophages | the same atlas, plus an imputed whole transcriptome | venous endothelium sticky and leaning leakier; macrophages more resident with depth; a CX3CR1⁺ ADAM28 macrophage sits with repair Schwann cells |
| Myelin and Schwann cells | Cellpose-SAM segmentation of Xenium autofluorescence; HLA-DR protein | thicker sheaths; a repair Schwann state at normal frequency; Schwann HLA-DR rises with disease |
| Blood | PBMC scRNA-seq, 20 CIDP and 5 controls, integrated with 310 matched atlas donors (707,339 cells); Olink plasma | terminal cytotoxic cells leave the circulation rather than die, along a gradient measurable in healthy people |
| Genetics | meta-analysis of UK Biobank and FinnGen (359 cases); GTEx tibial nerve eQTL; AlphaGenome fine-tuned on the nerve atlas (alphagenome2niche) | the best-powered locus raises CTSF, an MHC class II processing enzyme highest in Schwann cells |

## Contents

| File | What it is |
|------|-----------|
| `index.html` | The site: a password-protected, AES-encrypted build of `src/index.html`. Seven tabs: Overview, Nerve tissue, Myelin & Schwann, Vessels & macrophages, Blood atlas, Genetics, Summary. Self-contained (no build step, no external JS). |
| `encrypt.mjs` | Builds `index.html` from `src/index.html`. |
| `xenium.jpg`, `umap_to_spatial.*` | Xenium nerve image and the UMAP-to-spatial animation used on the site. |
| `summary.jpg`, `summary.pdf` | An earlier summary schematic, kept for reference; the Summary tab now draws its own diagram. |
| logos, favicons, `CNAME` | Site assets and the custom domain. |

T cell receptor analyses are reported separately and are not included here.

## Editing the site

`src/` is gitignored, so only the encrypted build is published. Edit `src/index.html`, then rebuild and commit
`index.html`:

```bash
SITE_PASSWORD='...' node encrypt.mjs
```

Serve locally to check it:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

Preprint and data DOIs will be added on publication.
