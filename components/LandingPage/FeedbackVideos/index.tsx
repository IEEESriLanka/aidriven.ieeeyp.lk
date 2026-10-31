import { existsSync, readdirSync } from "node:fs";
import { join, parse } from "node:path";
import type { FeedbackVideoProps } from "@/lib/type";
import FeedbackCarousel from "./FeedbackCarousel";

const VIDEO_DIR = join(process.cwd(), "public", "feedback_videos");

// Picks up every video in public/feedback_videos at build time, so adding one needs no code change
function getFeedbackVideos(): FeedbackVideoProps[] {
  if (!existsSync(VIDEO_DIR)) return [];

  const files = readdirSync(VIDEO_DIR);
  return files
    .filter((file) => file.endsWith(".mp4"))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file) => {
      const poster = `${parse(file).name}.jpg`;
      return {
        src: encodeURI(`/feedback_videos/${file}`),
        poster: files.includes(poster) ? encodeURI(`/feedback_videos/${poster}`) : undefined,
      };
    });
}

export default function FeedbackVideos() {
  const videos = getFeedbackVideos();
  if (videos.length === 0) return null;

  return (
    <section className="section-gap-y container mx-auto flex flex-col gap-y-8 px-4">
      <h2 className="section-header">
        <span>Hear from our</span>
        <span className="text-primary"> Community</span>
      </h2>
      <FeedbackCarousel videos={videos} />
    </section>
  );
}
