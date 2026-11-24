// Entry for the news-image-20261123 bounty (Node 22, standard library only).
// The front-page image is entry.png, kept beside this file. This program
// copies it to /output/entry.png, the path the grader reads. The copy is
// byte-for-byte, so every run writes identical bytes: the output is
// fully deterministic.
//
// Run it outside the grader's container with MAKEFUN_OUTPUT_DIR set:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const image = fileURLToPath(new URL('./entry.png', import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

if (!existsSync(image)) {
  throw new Error(`entry.png not found next to main.ts: ${image}`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(image, join(outDir, 'entry.png'));
