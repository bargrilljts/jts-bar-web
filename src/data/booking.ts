const cleanUrl = (value: string | undefined, fallback: string) => {
  const trimmed = value?.trim();
  return trimmed && trimmed.length > 0 ? trimmed : fallback;
};

const emailSubject = (subject: string) =>
  `mailto:jtsbargrill@yahoo.ca?subject=${encodeURIComponent(subject)}`;

const defaultRegularTableUrl = "https://cal.com/bar-jts-obymqd/regular-table";
const defaultEventTableUrl = "https://cal.com/bar-jts-obymqd/event-night-table";
const defaultBirthdayBookingUrl = "https://cal.com/bar-jts-obymqd/birthday-booking";
const defaultPrivatePartyUrl = "https://cal.com/bar-jts-obymqd/private-party-booking";

export const bookingLinks = {
  regularTable: cleanUrl(import.meta.env.PUBLIC_REGULAR_TABLE_URL, defaultRegularTableUrl),
  eventNight: cleanUrl(import.meta.env.PUBLIC_EVENT_TABLE_URL, defaultEventTableUrl),
  birthday: cleanUrl(import.meta.env.PUBLIC_BIRTHDAY_BOOKING_URL, defaultBirthdayBookingUrl),
  privateParty: cleanUrl(import.meta.env.PUBLIC_PRIVATE_PARTY_URL, defaultPrivatePartyUrl),
  partyInquiry: cleanUrl(import.meta.env.PUBLIC_PARTY_INQUIRY_URL, emailSubject("Party inquiry at JT's")),
  artistApplication: cleanUrl(import.meta.env.PUBLIC_ARTIST_APPLICATION_URL, emailSubject("Play at JT's application"))
};

export const bookingTypes = [
  {
    title: "Regular Table",
    text: "Dinner, drinks, couple people, easy night.",
    href: bookingLinks.regularTable
  },
  {
    title: "Event Night",
    text: "Coming for karaoke, a band, a draw, or a game.",
    href: bookingLinks.eventNight
  },
  {
    title: "Birthday Crew",
    text: "A few tables, a little noise, no big speech.",
    href: bookingLinks.birthday
  },
  {
    title: "Private Party",
    text: "Bigger plan, more moving parts, still very JT's.",
    href: bookingLinks.privateParty
  }
];

export const isExternalUrl = (href: string) =>
  href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
