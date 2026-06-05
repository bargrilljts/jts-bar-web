export type DrinkCategory = "beer" | "cocktails" | "highballs" | "shots" | "ciders" | "specials";

export type DrinkItem = {
  name: string;
  description?: string;
  price?: string;
  category: DrinkCategory;
  featured?: boolean;
  available: boolean;
};

export const drinkItems: DrinkItem[] = [
  {
    name: "Sweater Weather",
    description: "Spiced rum, Jack Daniel's Honey, hot apple cider, and cinnamon.",
    category: "cocktails",
    featured: true,
    available: true
  },
  {
    name: "Spicy But Sweet",
    description: "Crown Blackberry, Galliano, jalapeno, watermelon, and soda.",
    category: "cocktails",
    featured: true,
    available: true
  },
  {
    name: "Strongbow",
    description: "Apple or dark fruits.",
    price: "$7.50",
    category: "ciders",
    available: true
  },
  {
    name: "Coors Seltzers",
    description: "Ask what flavours are cold.",
    price: "$8.50",
    category: "ciders",
    available: true
  },
  {
    name: "Rotating Cocktails",
    description: "The bartender knows what's good tonight.",
    price: "$6",
    category: "specials",
    featured: true,
    available: true
  },
  {
    name: "Fireball",
    description: "One ounce. You already know.",
    price: "$4.50",
    category: "shots",
    available: true
  }
];

export const drinkCategories: { key: DrinkCategory; label: string }[] = [
  { key: "beer", label: "Beer" },
  { key: "cocktails", label: "Cocktails" },
  { key: "highballs", label: "Highballs" },
  { key: "shots", label: "Shots" },
  { key: "ciders", label: "Ciders & Seltzers" },
  { key: "specials", label: "Specials" }
];
