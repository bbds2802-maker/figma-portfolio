# Missing Portfolio Images

The portfolio references 32 image assets from Figma. One image has been copied already.
The remaining 31 images need to be placed in `public/images/` with their hash filenames.

When an image is missing, the `ImageWithFallback` component will automatically show a
placeholder SVG, so the site will still render without errors.

## Already present

- `01e5a6097657b11a684e2ed83234a07cc7cc7bd7.png`

## Still needed

Place the following PNG files in `C:\Users\30225\figma-portfolio\public\images\`:

```
092a9dd81effbe50f48398b38b00d19203589dde.png
0c63eb7c7684c3728ead51dceac4d7059c4f24df.png
12f7fa6c331d7db7a6cf0dfe07c571342b971b69.png
16571e26f8db5b9883ceb825a376b6038a5c453f.png
2157bc58c998425c3fe50e752db39c48cc892d71.png
2668b9f3bd0e548b9e451d1be9f84eadae80edfc.png
3369fc371ac68d7138c436a8d0cdf6896d800278.png
33de5bb6158db887b428bea25a5cfa4b3979f68d.png
3bc2079beaab98ab86119bbc30d1961f395f00c9.png
42c7dd576452480c49ded569c71e2caf91796310.png
4301b7d311f1efe9ee950d72f3cc2d9f957e92b0.png
4b40b2d8c086d5c1bcffdeb329d6c5d42c461849.png
4ca0dcc13b396f78975406f1939fbc3ad9855624.png
53bbf013f00ed6ec5e8401ebb5ef603edf8af28f.png
551259894101f1a9eebf100c5bcbeb42f5093ab4.png
58e195aabe6366fff43434ee262e7c448b0591ed.png
68a08b13daa2c403def04585a83fc511f5c42405.png
74baf3bf5f4c70d9aecc15496572dba2d23482b4.png
79fc1dfb339caf29b10e06b84ca5129a27f4748c.png
846d6e3937fd2802a868c2c69a4c9c90b6a637ee.png
85f444a79e7565eb9b40894630d42e834cf60cf3.png
8a8c7c1949a768f53155dcd5a2a02db26bf77b8a.png
964e2dcb1dc790e59e239a36a678df96535a2db3.png
9acecf72aebe6d799fa48efd863f4c26e02d6747.png
9f8f6f270b7a294f1a4dab76e72868472f251ba7.png
9fa99106c07bad6b36c3eb4c8d04bfb636881276.png
ba3d07fcf599dc3bbf0cd0f417bfe37969918048.png
c4cd95e08f6e7b4c8d4a9452e086cb85fffc81b3.png
e51ccbc4e4c5ccca19715b281f693f78e8e061ab.png
e65b0a1000525e5a0d926782fc227cb7528ed4e2.png
f56088d8b719a5549d0920f3789c71161b01beee.png
```

## How to get these images

These images come from the Figma Make project. You can:

1. **Re-open the Figma Make project** and use the MCP Figma integration to fetch each
   image asset using its hash as the identifier.

2. **Export from Figma** — open the original Figma file, select the relevant frames/images,
   and export them as PNGs, then rename each file to the hash listed above.

3. **Leave as-is** — the site works without them; each missing image shows a small
   placeholder icon via `ImageWithFallback`.
