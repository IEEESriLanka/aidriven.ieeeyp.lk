// Compresses raw photos from assets/projects/additionalEventPhotos/<event>[/<section>]/ into
// public/event_photos/ (a grid-size and a full-size file) and writes the list the event pages
// read. Safe to re-run: unchanged photos are skipped. Run: pnpm photos:optimize
import { copyFileSync, existsSync, mkdirSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, parse } from "node:path";
import sharp from "sharp";

const SOURCE_DIR = "assets/projects/additionalEventPhotos";
const OUTPUT_DIR = "public/event_photos";
const MANIFEST = "lib/data/event-photos.generated.json";
const PHOTO_EXTENSIONS = [".png", ".jpg", ".jpeg", ".webp"];
const THUMB_WIDTH = 800;
const FULL_MAX_SIZE = 2000;
// Visually lossless for photos; checked against the originals when this was set up
const QUALITY = 90;
// JPEGs already this small are web-ready: re-encoding would lose detail and often grow them
const KEEP_JPEG_UNDER = 500_000;

const slug = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const naturally = (a, b) => a.localeCompare(b, undefined, { numeric: true });
const isDir = (path) => statSync(path).isDirectory();
const isPhoto = (file) => PHOTO_EXTENSIONS.includes(parse(file).ext.toLowerCase());
const sectionTitle = (name) =>
  name.split(/[_-]+/).map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

let before = 0;
let after = 0;

async function processPhoto(source, outputDir) {
  const name = slug(parse(source).name);
  const { ext } = parse(source);
  const keepOriginal = /\.jpe?g$/i.test(ext) && statSync(source).size < KEEP_JPEG_UNDER;
  const fullPath = join(outputDir, `${name}${keepOriginal ? ".jpg" : ".webp"}`);
  const thumbPath = join(outputDir, `${name}-thumb.webp`);
  const sourceTime = statSync(source).mtimeMs;
  const upToDate = existsSync(fullPath) && existsSync(thumbPath) && statSync(fullPath).mtimeMs >= sourceTime;

  if (!upToDate) {
    mkdirSync(outputDir, { recursive: true });
    if (keepOriginal) {
      copyFileSync(source, fullPath);
    } else {
      await sharp(source)
        .rotate()
        .resize({ width: FULL_MAX_SIZE, height: FULL_MAX_SIZE, fit: "inside", withoutEnlargement: true })
        .webp({ quality: QUALITY, effort: 6 })
        .toFile(fullPath);
    }
    await sharp(source)
      .rotate()
      .resize({ width: THUMB_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY - 8, effort: 6 })
      .toFile(thumbPath);
  }

  before += statSync(source).size;
  after += statSync(fullPath).size + statSync(thumbPath).size;

  const { width, height } = await sharp(fullPath).metadata();
  const toUrl = (path) => encodeURI(`/${path.replace(/\\/g, "/").replace(/^public\//, "")}`);
  return {
    src: toUrl(fullPath),
    thumb: toUrl(thumbPath),
    width,
    height,
  };
}

async function processFolder(folder, outputDir) {
  const photos = [];
  for (const file of readdirSync(folder).filter(isPhoto).sort(naturally)) {
    photos.push(await processPhoto(join(folder, file), outputDir));
  }
  return photos;
}

const manifest = {};
for (const event of readdirSync(SOURCE_DIR).sort(naturally)) {
  const eventDir = join(SOURCE_DIR, event);
  if (!isDir(eventDir)) continue;

  const outputDir = join(OUTPUT_DIR, slug(event));
  const sections = [];
  const loose = await processFolder(eventDir, outputDir);
  if (loose.length > 0) sections.push({ photos: loose });

  // A subfolder becomes a titled section on the event page
  for (const sub of readdirSync(eventDir).sort(naturally)) {
    const subDir = join(eventDir, sub);
    if (!isDir(subDir)) continue;
    const photos = await processFolder(subDir, join(outputDir, slug(sub)));
    if (photos.length > 0) sections.push({ title: sectionTitle(sub), photos });
  }

  if (sections.length > 0) {
    manifest[event] = sections;
    console.log(`${event}: ${sections.reduce((n, s) => n + s.photos.length, 0)} photos`);
  }
}

mkdirSync(dirname(MANIFEST), { recursive: true });
writeFileSync(MANIFEST, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`Total: ${(before / 1e6).toFixed(1)} MB -> ${(after / 1e6).toFixed(1)} MB`);
