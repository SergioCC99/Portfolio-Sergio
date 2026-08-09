import sharp from "sharp";
import { readdir, stat, unlink } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(__dirname, "..", "public", "images");

const maxWidthFor = (filename) => {
  if (/banner/i.test(filename)) return 1920;
  if (/^(profileimg|desk)\./i.test(filename)) return 900;
  return 1200;
};

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(full)));
    } else if (/\.(png|jpe?g)$/i.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

async function run() {
  const files = await walk(imagesDir);
  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of files) {
    const before = (await stat(file)).size;
    totalBefore += before;

    const dir = path.dirname(file);
    const base = path.basename(file, path.extname(file));
    const outFile = path.join(dir, `${base}.webp`);
    const maxWidth = maxWidthFor(path.basename(file));

    await sharp(file)
      .resize({ width: maxWidth, withoutEnlargement: true })
      .webp({ quality: 78 })
      .toFile(outFile);

    const after = (await stat(outFile)).size;
    totalAfter += after;

    console.log(
      `${path.relative(imagesDir, file)} -> ${(before / 1024 / 1024).toFixed(2)}MB => ${(after / 1024).toFixed(0)}KB`
    );

    await unlink(file);
  }

  console.log("\n--- Summary ---");
  console.log(`Before: ${(totalBefore / 1024 / 1024).toFixed(2)} MB`);
  console.log(`After:  ${(totalAfter / 1024 / 1024).toFixed(2)} MB`);
  console.log(
    `Saved:  ${(((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1)}%`
  );
}

run();
