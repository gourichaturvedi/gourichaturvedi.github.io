import { cp, copyFile, mkdir, rm } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = resolve(root, 'dist');
const builtAssets = resolve(dist, 'assets');
const publishedAssets = resolve(root, 'assets');

await copyFile(resolve(dist, 'index.html'), resolve(root, 'index.html'));
await rm(publishedAssets, { recursive: true, force: true });
await mkdir(publishedAssets, { recursive: true });
await cp(builtAssets, publishedAssets, { recursive: true });
await copyFile(resolve(dist, 'pfp.jpg'), resolve(root, 'pfp.jpg'));
await copyFile(resolve(dist, 'FAVICON.png'), resolve(root, 'FAVICON.png'));
