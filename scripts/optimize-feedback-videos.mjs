// Compresses raw videos from assets/feedback_videos/ into public/feedback_videos/ for the
// home page, and creates a poster image for each. Already processed videos are skipped.
// Needs ffmpeg on PATH, or set FFMPEG_PATH to the executable. Run: pnpm videos:optimize
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { join, parse } from "node:path";

const SOURCE_DIR = "assets/feedback_videos";
const OUTPUT_DIR = "public/feedback_videos";
const VIDEO_EXTENSIONS = [".mp4", ".mov", ".m4v", ".webm"];
const ffmpeg = process.env.FFMPEG_PATH || "ffmpeg";

const run = (args) => execFileSync(ffmpeg, ["-v", "error", "-y", ...args], { stdio: "inherit" });
const sizeMB = (file) => (statSync(file).size / 1e6).toFixed(1);

mkdirSync(OUTPUT_DIR, { recursive: true });

for (const file of readdirSync(SOURCE_DIR)) {
  const { name, ext } = parse(file);
  if (!VIDEO_EXTENSIONS.includes(ext.toLowerCase())) continue;

  const source = join(SOURCE_DIR, file);
  const video = join(OUTPUT_DIR, `${name}.mp4`);
  const poster = join(OUTPUT_DIR, `${name}.jpg`);

  if (existsSync(video) && existsSync(poster) && statSync(video).mtimeMs > statSync(source).mtimeMs) {
    console.log(`skip ${file} (already optimized)`);
    continue;
  }

  // 720px wide is sharp on high-resolution screens for a ~280px card; faststart lets playback begin before the full download
  run([
    "-i", source,
    "-vf", "scale='min(720,iw)':-2",
    "-c:v", "libx264", "-crf", "27", "-preset", "slow", "-pix_fmt", "yuv420p",
    "-c:a", "aac", "-b:a", "96k",
    "-movflags", "+faststart",
    video,
  ]);
  run(["-ss", "1", "-i", source, "-frames:v", "1", "-vf", "scale='min(540,iw)':-2", "-q:v", "4", poster]);

  console.log(`${file}: ${sizeMB(source)} MB -> ${sizeMB(video)} MB`);
}
