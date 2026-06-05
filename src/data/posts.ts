export type Post = {
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  status: "draft" | "published";
};

export const posts: Post[] = [
  {
    title: "What's on the board",
    slug: "whats-on-the-board",
    excerpt: "Specials change. Ask your server, or just point at the board.",
    publishedAt: "2026-06-04",
    status: "published"
  },
  {
    title: "Now booking local acts",
    slug: "now-booking-local-acts",
    excerpt: "Bands, DJs, hosts, comics, jam-night folks. Send us what you do.",
    publishedAt: "2026-06-04",
    status: "published"
  }
];
