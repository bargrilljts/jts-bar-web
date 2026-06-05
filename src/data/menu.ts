export type MenuCategory =
  | "appies"
  | "wings"
  | "pizza"
  | "mains"
  | "brunch"
  | "daily-deals"
  | "sides";

export type MenuItem = {
  name: string;
  description: string;
  price?: string;
  category: MenuCategory;
  tags?: string[];
  featured?: boolean;
  available: boolean;
};

export const menuItems: MenuItem[] = [
  {
    name: "JT's Famous Wings",
    description: "Carrots, celery, ranch, and your choice of sauce or dry rub.",
    price: "$18",
    category: "wings",
    tags: ["Gluten free"],
    featured: true,
    available: true
  },
  {
    name: "Deep Fried Curds",
    description: "Spiced, battered, and served with marinara or donair sauce.",
    price: "$13",
    category: "appies",
    tags: ["Vegetarian"],
    featured: true,
    available: true
  },
  {
    name: "Dry Ribs",
    description: "Pork riblets tossed in garlic rub with green onion, salt, and pepper.",
    price: "$16",
    category: "appies",
    tags: ["Gluten free"],
    available: true
  },
  {
    name: "Garlic Shrimp",
    description: "Jumbo shrimp sauteed in garlic butter, served with garlic toast.",
    price: "$14",
    category: "appies",
    tags: ["Gluten free"],
    available: true
  },
  {
    name: "Nachos",
    description: "Chips, mixed cheese, tomatoes, peppers, olives, green onion, jalapenos, salsa, and sour cream.",
    price: "$12 / $18",
    category: "appies",
    featured: true,
    available: true
  },
  {
    name: "Tacos",
    description: "Three soft or hard shells with beef, chicken, or crispy shrimp.",
    price: "$16",
    category: "mains",
    available: true
  },
  {
    name: "Party Platter",
    description: "Wings, dry ribs, tenders, potato skins, onion rings, spring rolls, and sauces.",
    price: "$38",
    category: "appies",
    featured: true,
    available: true
  },
  {
    name: "Poutine",
    description: "Fries, gravy, cheese, and no reason to overthink it.",
    price: "$12",
    category: "sides",
    available: true
  },
  {
    name: "Pizza Night",
    description: "Ask what's hot, grab a few slices, keep the table busy.",
    price: "Ask us",
    category: "pizza",
    available: true
  },
  {
    name: "Hot Deal",
    description: "Daily food special. Check the board when you get here.",
    price: "Daily",
    category: "daily-deals",
    featured: true,
    available: true
  }
];

export const menuCategories: { key: MenuCategory; label: string }[] = [
  { key: "appies", label: "Appies" },
  { key: "wings", label: "Wings" },
  { key: "pizza", label: "Pizza" },
  { key: "mains", label: "Mains" },
  { key: "brunch", label: "Brunch" },
  { key: "daily-deals", label: "Daily Deals" },
  { key: "sides", label: "Sides" }
];
