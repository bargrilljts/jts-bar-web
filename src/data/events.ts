export type EventType =
  | "karaoke"
  | "live-music"
  | "dj"
  | "open-jam"
  | "sports"
  | "community";

export type Event = {
  title: string;
  slug: string;
  type: EventType;
  date: string;
  dayLabel: string;
  startTime: string;
  endTime?: string;
  shortDescription: string;
  description: string;
  priceLabel: string;
  rsvpUrl?: string;
  ticketUrl?: string;
  reservationUrl?: string;
  artistName?: string;
  featured?: boolean;
  status: "draft" | "published" | "archived";
};

export const events: Event[] = [
  {
    title: "Speed Dating",
    slug: "speed-dating",
    type: "community",
    date: "2026-06-13",
    dayLabel: "Sat, Jun 13",
    startTime: "7:00 PM",
    shortDescription: "Meet some people, have a drink, keep it easy.",
    description:
      "A low-pressure night for quick chats, cold drinks, and seeing who's around. Come early if you want food first.",
    priceLabel: "Tickets",
    ticketUrl: "#",
    reservationUrl: "#booking-placeholder",
    featured: true,
    status: "published"
  },
  {
    title: "Monthly Meat Draw",
    slug: "monthly-meat-draw",
    type: "community",
    date: "2026-06-20",
    dayLabel: "Sat, Jun 20",
    startTime: "3:00 PM",
    shortDescription: "The regular draw. Bring a few bucks and stick around.",
    description:
      "Our monthly meat draw is one of those JT's nights that does not need much explaining. Grab a seat, grab a drink, and listen for your number.",
    priceLabel: "RSVP",
    rsvpUrl: "#",
    reservationUrl: "#booking-placeholder",
    featured: true,
    status: "published"
  },
  {
    title: "Karaoke Night",
    slug: "karaoke-night",
    type: "karaoke",
    date: "2026-06-24",
    dayLabel: "Wed, Jun 24",
    startTime: "8:00 PM",
    shortDescription: "Sing one. Cheer for three. Stay too late.",
    description:
      "Karaoke at JT's is built for regulars, first-timers, and people who swear they are only doing one song.",
    priceLabel: "Free entry",
    rsvpUrl: "#",
    reservationUrl: "#booking-placeholder",
    status: "published"
  },
  {
    title: "DJ Party",
    slug: "dj-party",
    type: "dj",
    date: "2026-06-26",
    dayLabel: "Fri, Jun 26",
    startTime: "9:30 PM",
    shortDescription: "Louder later. You know the drill.",
    description:
      "A Friday night DJ set for people who came for one drink and made plans with the whole room.",
    priceLabel: "Free entry",
    reservationUrl: "#booking-placeholder",
    status: "published"
  },
  {
    title: "Open Jam",
    slug: "open-jam",
    type: "open-jam",
    date: "2026-07-02",
    dayLabel: "Thu, Jul 2",
    startTime: "8:00 PM",
    shortDescription: "Bring your guitar, your voice, or just your friends.",
    description:
      "Open jam is for local players and regulars who like a room with a little noise in it.",
    priceLabel: "Free entry",
    reservationUrl: "#booking-placeholder",
    status: "published"
  }
];

export const publishedEvents = events.filter((event) => event.status === "published");
export const featuredEvents = publishedEvents.filter((event) => event.featured);
